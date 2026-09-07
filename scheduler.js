// scheduler.js - İstemci Taraflı Günlük Aralıklı Tekrar (Spaced Repetition) Algoritması

const STAGE_LABELS = {
    0: { name: 'Konu Anlatımı & İlk Öğrenim', badge: 'Yeni Konu', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    1: { name: '1. Tekrar & Soru Çözümü', badge: '1. Tekrar', color: 'bg-amber-100 text-amber-800 border-amber-300' },
    2: { name: '2. Tekrar & Pekiştirme Denemesi', badge: '2. Tekrar', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
};

class StudySchedulerJS {
    constructor(curriculum = CURRICULUM) {
        this.curriculum = curriculum;
    }

    generatePlan({
        courseHours,      // { edebiyat: 3, ayt_matematik: 5 }
        startHour = 10,   // 10:00
        endHour = 22,     // 22:00
        minTopicHours = 2.0,
        repeatCount = 2,  // 2 tekrar (1. Gün: Yeni Konu, 2. Gün: 1. Tekrar, 3. Gün: 2. Tekrar)
        numDays = 7,
        startDate = 'Pazartesi',
        customVideos = {}
    }) {
        const activeCourses = {};
        for (const [k, v] of Object.entries(courseHours)) {
            if (v > 0 && this.curriculum[k]) {
                activeCourses[k] = parseFloat(v);
            }
        }

        if (Object.keys(activeCourses).length === 0) {
            return { error: 'Lütfen en az bir ders için çalışma saati belirleyin.' };
        }

        const totalDailyStudy = Object.values(activeCourses).reduce((a, b) => a + b, 0);
        const totalWindowHours = endHour - startHour;

        if (totalDailyStudy > totalWindowHours) {
            return {
                error: `Toplam günlük çalışma süresi (${totalDailyStudy} saat), belirlenen zaman aralığından (${totalWindowHours} saat) fazla olamaz.`
            };
        }

        // Günlük İlerleme Döngüsü Takibi:
        // Her ders için:
        // cycle_length = 1 + repeatCount (örneğin 1 yeni konu + 2 tekrar = 3 gün)
        // Day 1: stage 0 (Yeni Konu)
        // Day 2: stage 1 (1. Tekrar)
        // Day 3: stage 2 (2. Tekrar)
        // Day 4: stage 0 (Sıradaki Yeni Konu)
        const state = {};
        for (const cid of Object.keys(activeCourses)) {
            state[cid] = {
                topic_idx: 0,
                stage: 0,
                day_in_topic_cycle: 0,
                completed_topics: []
            };
        }

        const daysResult = [];
        const daysNames = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
        let startDayIdx = daysNames.indexOf(startDate);
        if (startDayIdx === -1) startDayIdx = 0;

        const cycleLength = 1 + repeatCount;

        for (let dayNum = 1; dayNum <= numDays; dayNum++) {
            const dayLabel = daysNames[(startDayIdx + dayNum - 1) % 7];
            const daySchedule = this._scheduleSingleDay(
                activeCourses,
                startHour,
                endHour,
                minTopicHours,
                repeatCount,
                state,
                dayNum,
                dayLabel,
                customVideos,
                cycleLength
            );
            daysResult.push(daySchedule);

            // Gün sonunda her ders için tekrar aşamasını ilerlet
            for (const cid of Object.keys(activeCourses)) {
                const st = state[cid];
                st.day_in_topic_cycle += 1;

                if (st.day_in_topic_cycle < cycleLength) {
                    st.stage = st.day_in_topic_cycle; // 1. gün: 0, 2. gün: 1, 3. gün: 2
                } else {
                    // Konu ve tüm tekrarları bitti! Sıradaki konuya geç
                    const topicsList = this.curriculum[cid].topics;
                    if (st.topic_idx < topicsList.length) {
                        st.completed_topics.push(topicsList[st.topic_idx].name);
                    }
                    st.topic_idx += 1;
                    st.stage = 0;
                    st.day_in_topic_cycle = 0;
                }
            }
        }

        const stats = this._calculateStats(activeCourses, state, daysResult, repeatCount);

        return {
            success: true,
            config: {
                start_hour: startHour,
                end_hour: endHour,
                total_daily_study: totalDailyStudy,
                min_topic_hours: minTopicHours,
                repeat_count: repeatCount,
                num_days: numDays,
                course_hours: activeCourses
            },
            days: daysResult,
            final_state: state,
            stats: stats
        };
    }

    _scheduleSingleDay(activeCourses, startHour, endHour, minTopicHours, repeatCount, state, dayNum, dayLabel, customVideos, cycleLength) {
        const totalStudyHours = Object.values(activeCourses).reduce((a, b) => a + b, 0);
        const totalWindow = endHour - startHour;
        const totalBreakHours = Math.max(0.0, totalWindow - totalStudyHours);

        const courseKeys = Object.keys(activeCourses);
        const sessions = [];

        for (const [cid, targetH] of Object.entries(activeCourses)) {
            let remH = targetH;
            while (remH > 0) {
                let dur = remH >= minTopicHours ? minTopicHours : remH;
                if (remH - dur > 0 && remH - dur < 1.0) {
                    dur = remH;
                }
                sessions.push({ course_id: cid, duration: dur });
                remH -= dur;
            }
        }

        sessions.sort((a, b) => {
            const aIsFirst = a.course_id === courseKeys[0];
            const bIsFirst = b.course_id === courseKeys[0];
            if (aIsFirst !== bIsFirst) return aIsFirst ? -1 : 1;
            return b.duration - a.duration;
        });

        let baseBreakMin = 15;
        if (totalBreakHours > 0 && sessions.length > 0) {
            const calcBreak = Math.floor((totalBreakHours * 60) / Math.max(1, sessions.length));
            baseBreakMin = Math.max(10, Math.min(60, calcBreak));
        }

        let currentTimeMin = startHour * 60;
        const endTimeMin = endHour * 60;
        const blocks = [];

        for (let idx = 0; idx < sessions.length; idx++) {
            const sess = sessions[idx];
            const cid = sess.course_id;
            const durHours = sess.duration;
            const durMins = Math.round(durHours * 60);

            const courseMeta = this.curriculum[cid];
            const topicsList = courseMeta.topics;
            const st = state[cid];
            const topicIdx = st.topic_idx;

            let topicName = '';
            let topicId = '';
            let videoUrl = '';
            let stageIdx = st.stage;

            if (topicIdx < topicsList.length) {
                const currentTopic = topicsList[topicIdx];
                topicName = currentTopic.name;
                topicId = currentTopic.id;
                videoUrl = customVideos[topicId] || currentTopic.video_url || '';
            } else {
                topicName = 'Tüm Müfredat Tamamlandı (Genel Soru & Deneme)';
                topicId = `${cid}_completed`;
                stageIdx = 2;
            }

            const blockStart = currentTimeMin;
            const blockEnd = Math.min(endTimeMin, currentTimeMin + durMins);
            const stageInfo = STAGE_LABELS[stageIdx] || STAGE_LABELS[0];

            blocks.push({
                type: 'study',
                course_id: cid,
                course_color: courseMeta.color,
                course_icon: courseMeta.icon,
                topic_name: topicName,
                topic_id: topicId,
                video_url: videoUrl,
                stage: stageIdx,
                stage_name: stageInfo.name,
                stage_badge: stageInfo.badge,
                stage_class: stageInfo.color,
                duration_hours: durHours,
                start_time: `${String(Math.floor(blockStart / 60)).padStart(2, '0')}:${String(blockStart % 60).padStart(2, '0')}`,
                end_time: `${String(Math.floor(blockEnd / 60)).padStart(2, '0')}:${String(blockEnd % 60).padStart(2, '0')}`,
                completed: false
            });

            currentTimeMin = blockEnd;

            // Mola Bloğu
            if (idx < sessions.length - 1) {
                const isLunchOrDinner = (12 * 60 <= currentTimeMin && currentTimeMin <= 14 * 60) ||
                                        (18 * 60 <= currentTimeMin && currentTimeMin <= 20 * 60);
                const brkDur = (isLunchOrDinner && totalBreakHours >= 1.5) ? 45 : baseBreakMin;
                const brkEnd = Math.min(endTimeMin, currentTimeMin + brkDur);

                if (brkEnd > currentTimeMin) {
                    blocks.push({
                        type: 'break',
                        course_id: 'break',
                        course_name: isLunchOrDinner ? 'Yemek & Dinlenme Molası' : 'Mola & Dinlenme',
                        course_color: '#9CA3AF',
                        start_time: `${String(Math.floor(currentTimeMin / 60)).padStart(2, '0')}:${String(currentTimeMin % 60).padStart(2, '0')}`,
                        end_time: `${String(Math.floor(brkEnd / 60)).padStart(2, '0')}:${String(brkEnd % 60).padStart(2, '0')}`,
                        duration_hours: Number(((brkEnd - currentTimeMin) / 60).toFixed(2))
                    });
                    currentTimeMin = brkEnd;
                }
            }
        }

        return {
            day_number: dayNum,
            day_label: dayLabel,
            total_study_hours: totalStudyHours,
            blocks: blocks
        };
    }

    _calculateStats(activeCourses, finalState, days, repeatCount) {
        const courseProgress = {};
        const daysPerTopic = 1 + repeatCount;

        for (const [cid, targetH] of Object.entries(activeCourses)) {
            const meta = this.curriculum[cid];
            const topics = meta.topics;
            const st = finalState[cid];
            const tCount = topics.length;

            const cDone = new Set(st.completed_topics || []).size;
            const totalDaysNeeded = tCount * daysPerTopic;

            courseProgress[cid] = {
                course_name: meta.name,
                color: meta.color,
                total_topics: tCount,
                completed_topics: cDone,
                current_topic_index: Math.min(st.topic_idx, tCount - 1),
                current_topic_name: topics[Math.min(st.topic_idx, tCount - 1)] ? topics[Math.min(st.topic_idx, tCount - 1)].name : '',
                current_stage: (STAGE_LABELS[st.stage] || STAGE_LABELS[0]).name,
                estimated_days_to_complete: totalDaysNeeded
            };
        }

        return {
            total_courses: Object.keys(activeCourses).length,
            course_progress: courseProgress,
            total_study_hours_planned: days.reduce((a, b) => a + b.total_study_hours, 0)
        };
    }
}
