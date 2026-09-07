// app.js - 14 Günlük Dakika Bazlı & Video Linkli Takvim Planlayıcı

let activeDayIndex = 0;
let customVideoLinks = {};
let currentPlanData = PLAN_14_DAYS;

// Pomodoro Değişkenleri
let pomodoroTimer = null;
let pomodoroSecondsLeft = 25 * 60;
let isPomodoroRunning = false;

document.addEventListener('DOMContentLoaded', async () => {
    lucide.createIcons();
    loadCustomVideos();
    renderCurriculumModal();
    render14DaysPlan();
});

function loadCustomVideos() {
    try {
        const saved = localStorage.getItem('yks_custom_videos');
        if (saved) {
            customVideoLinks = JSON.parse(saved);
        }
    } catch (e) {}
}

function saveCustomVideoLink(topicId, url) {
    if (!url) {
        delete customVideoLinks[topicId];
    } else {
        customVideoLinks[topicId] = url.trim();
    }
    localStorage.setItem('yks_custom_videos', JSON.stringify(customVideoLinks));
    render14DaysPlan();
    renderCurriculumModal();
}

function render14DaysPlan() {
    renderDaysTabs();
    renderDayTimeline(activeDayIndex);
    renderPlanSummary();
}

function renderDaysTabs() {
    const container = document.getElementById('day-tabs-container');
    container.innerHTML = '';

    currentPlanData.days.forEach((day, idx) => {
        const isActive = idx === activeDayIndex;
        const btn = document.createElement('button');
        btn.className = `px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition flex items-center gap-1.5 border ${
            isActive
                ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
        }`;
        btn.onclick = () => {
            activeDayIndex = idx;
            renderDaysTabs();
            renderDayTimeline(idx);
        };

        btn.innerHTML = `
            <span>Gün ${day.day_number}</span>
            <span class="${isActive ? 'text-sky-100' : 'text-slate-400 dark:text-slate-500'}">(${day.day_label})</span>
        `;
        container.appendChild(btn);
    });
}

function renderDayTimeline(dayIdx) {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';

    const day = currentPlanData.days[dayIdx];
    if (!day) return;

    day.blocks.forEach((block) => {
        const card = document.createElement('div');
        card.className = 'timeline-block animate-fade-in p-4 rounded-2xl border transition shadow-sm';

        if (block.type !== 'break') {
            card.classList.add('bg-white', 'dark:bg-slate-900', 'border-slate-200', 'dark:border-slate-800');

            const videoUrl = customVideoLinks[block.topic] || block.video_url || '';
            const videoButtonHtml = videoUrl
                ? `<a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-950/60 dark:hover:bg-red-900 text-red-700 dark:text-red-300 text-xs font-bold flex items-center gap-1.5 transition border border-red-200 dark:border-red-800 shadow-sm" title="Ders Videosunu / Playlisti Aç">
                    <i data-lucide="youtube" class="w-4 h-4 text-red-600"></i>
                    <span>Videoyu Aç</span>
                   </a>`
                : `<button onclick="promptAddVideoLink('${block.topic}', '${block.topic}')" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium flex items-center gap-1 transition">
                    <i data-lucide="link-2" class="w-3.5 h-3.5"></i>
                    <span>Link Ekle</span>
                   </button>`;

            // Renk nokta
            let dotColor = '#3B82F6';
            if (block.course === 'tyt_matematik') dotColor = '#10B981';
            else if (block.course === 'geometri') dotColor = '#F59E0B';

            card.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                        <div class="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold text-xs text-center border border-slate-200 dark:border-slate-700">
                            <div>${block.start_time}</div>
                            <div class="text-[10px] text-slate-400 font-normal">↓</div>
                            <div>${block.end_time}</div>
                        </div>

                        <div>
                            <div class="flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${dotColor};"></span>
                                <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full border ${block.stage_class || 'bg-blue-100 text-blue-800 border-blue-300'}">
                                    ${block.stage}
                                </span>
                                <span class="text-xs font-bold text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                                    ⏱️ ${block.duration_min} Dakika
                                </span>
                            </div>
                            
                            <!-- SADECE KONU ADI -->
                            <h4 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-1">
                                ${block.topic}
                            </h4>
                        </div>
                    </div>

                    <!-- Sağ Eylemler -->
                    <div class="flex items-center gap-2 self-end sm:self-center flex-wrap">
                        ${videoButtonHtml}
                        <button onclick="launchBlockPomodoro('${block.topic}', ${block.duration_min})" class="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition border border-rose-200 dark:border-rose-800">
                            <i data-lucide="play-circle" class="w-4 h-4"></i>
                            <span>Odaklan</span>
                        </button>
                    </div>
                </div>
            `;
        } else {
            card.classList.add('bg-slate-100/60', 'dark:bg-slate-950/40', 'border-dashed', 'border-slate-200', 'dark:border-slate-800/80');
            card.innerHTML = `
                <div class="flex items-center justify-between py-1 text-slate-500 dark:text-slate-400">
                    <div class="flex items-center gap-3">
                        <div class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-xs font-semibold">
                            ${block.start_time} - ${block.end_time}
                        </div>
                        <div class="flex items-center gap-2 text-xs font-medium">
                            <i data-lucide="coffee" class="w-4 h-4 text-amber-500"></i>
                            <span>${block.name} (${block.duration_min} Dk)</span>
                        </div>
                    </div>
                    <span class="text-[11px] text-slate-400 hidden sm:inline">Kısa dinlenme ve su molası</span>
                </div>
            `;
        }

        container.appendChild(card);
    });

    lucide.createIcons();
}

function renderPlanSummary() {
    const container = document.getElementById('course-progress-container');
    if (!container) return;

    container.innerHTML = `
        <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 space-y-1.5">
            <div class="flex items-center justify-between text-xs font-bold text-blue-900 dark:text-blue-200">
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>AYT Matematik</span>
                <span>180 Dk / Gün (3 Saat)</span>
            </div>
            <div class="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-2">
                <div class="h-2 rounded-full bg-blue-600" style="width: 100%;"></div>
            </div>
        </div>

        <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-1.5">
            <div class="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-200">
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>Geometri</span>
                <span>120 Dk / Gün (2 Saat)</span>
            </div>
            <div class="w-full bg-amber-200 dark:bg-amber-900 rounded-full h-2">
                <div class="h-2 rounded-full bg-amber-500" style="width: 100%;"></div>
            </div>
        </div>

        <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-1.5">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-900 dark:text-emerald-200">
                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>TYT Matematik</span>
                <span>60 Dk / Gün (1 Saat)</span>
            </div>
            <div class="w-full bg-emerald-200 dark:bg-emerald-900 rounded-full h-2">
                <div class="h-2 rounded-full bg-emerald-500" style="width: 100%;"></div>
            </div>
        </div>
    `;
}

function promptAddVideoLink(topicId, topicName) {
    const currentUrl = customVideoLinks[topicId] || '';
    const newUrl = prompt(`"${topicName}" konusu için YouTube veya video linki girin:`, currentUrl);
    if (newUrl !== null) {
        saveCustomVideoLink(topicId, newUrl);
    }
}

// Pomodoro
function startPomodoroModal() {
    document.getElementById('pomodoro-modal').classList.remove('hidden');
}

function closePomodoroModal() {
    document.getElementById('pomodoro-modal').classList.add('hidden');
}

function launchBlockPomodoro(taskTitle, durationMin = 25) {
    document.getElementById('pomodoro-current-task').innerText = taskTitle;
    setPomodoroTime(durationMin > 60 ? 50 : durationMin);
    startPomodoroModal();
}

function setPomodoroTime(minutes) {
    clearInterval(pomodoroTimer);
    isPomodoroRunning = false;
    pomodoroSecondsLeft = minutes * 60;
    updatePomodoroDisplay();
    document.getElementById('pomodoro-btn-text').innerText = 'Başlat';
}

function togglePomodoro() {
    if (isPomodoroRunning) {
        clearInterval(pomodoroTimer);
        isPomodoroRunning = false;
        document.getElementById('pomodoro-btn-text').innerText = 'Devam Et';
    } else {
        isPomodoroRunning = true;
        document.getElementById('pomodoro-btn-text').innerText = 'Duraklat';
        pomodoroTimer = setInterval(() => {
            if (pomodoroSecondsLeft > 0) {
                pomodoroSecondsLeft--;
                updatePomodoroDisplay();
            } else {
                clearInterval(pomodoroTimer);
                isPomodoroRunning = false;
                playChime();
                alert('Süre doldu! Harika bir çalışma seansı oldu.');
                document.getElementById('pomodoro-btn-text').innerText = 'Başlat';
            }
        }, 1000);
    }
}

function resetPomodoro() {
    clearInterval(pomodoroTimer);
    isPomodoroRunning = false;
    pomodoroSecondsLeft = 25 * 60;
    updatePomodoroDisplay();
    document.getElementById('pomodoro-btn-text').innerText = 'Başlat';
}

function updatePomodoroDisplay() {
    const mins = Math.floor(pomodoroSecondsLeft / 60);
    const secs = pomodoroSecondsLeft % 60;
    document.getElementById('pomodoro-display').innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function playChime() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {}
}

// iCalendar Dışa Aktar
function exportToICS() {
    const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//YKS 14 Gunluk Calisma Takvimi//TR",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH"
    ];

    const today = new Date();

    currentPlanData.days.forEach((day, dIdx) => {
        const targetDate = new Date();
        targetDate.setDate(today.getDate() + dIdx);
        const y = targetDate.getFullYear();
        const m = String(targetDate.getMonth() + 1).padStart(2, '0');
        const d = String(targetDate.getDate()).padStart(2, '0');
        const dateStr = `${y}${m}${d}`;

        day.blocks.forEach((block, bIdx) => {
            if (block.type !== 'break') {
                const st = block.start_time.replace(':', '') + '00';
                const et = block.end_time.replace(':', '') + '00';
                lines.push(
                    "BEGIN:VEVENT",
                    `UID:yks-14gun-${dateStr}-${dIdx}-${bIdx}@yksplanlayici`,
                    `DTSTAMP:${dateStr}T000000Z`,
                    `DTSTART:${dateStr}T${st}`,
                    `DTEND:${dateStr}T${et}`,
                    `SUMMARY:${block.topic} (${block.duration_min} Dk)`,
                    `DESCRIPTION:Aşama: ${block.stage} | Süre: ${block.duration_min} Dakika ${block.video_url ? '| Video: ' + block.video_url : ''}`,
                    "STATUS:CONFIRMED",
                    "END:VEVENT"
                );
            }
        });
    });

    lines.push("END:VCALENDAR");
    const icsContent = lines.join("\r\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yks_14_gunluk_program.ics';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.getElementById('theme-icon');
    if (isDark) {
        icon.setAttribute('data-lucide', 'sun');
    } else {
        icon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
}

function renderCurriculumModal() {
    // Modal
}
function toggleCurriculumModal() {
    //
}
