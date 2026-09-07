// nlp.js - Türkçe NLP ve Local LLM İstemcisi (Tarayıcı Uyumlu)

class LocalLLMClientJS {
    constructor() {
        this.ollamaUrl = 'http://localhost:11434';
        this.lmStudioUrl = 'http://localhost:1234/v1';
    }

    async checkStatus() {
        const res = {
            ollamaOnline: false,
            lmStudioOnline: false,
            models: []
        };

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 800);
            const r = await fetch(`${this.ollamaUrl}/api/tags`, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (r.ok) {
                const data = await r.json();
                res.ollamaOnline = true;
                res.models = (data.models || []).map(m => m.name);
            }
        } catch (e) {}

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 800);
            const r = await fetch(`${this.lmStudioUrl}/models`, { signal: controller.signal });
            clearTimeout(timeoutId);
            if (r.ok) {
                res.lmStudioOnline = true;
            }
        } catch (e) {}

        return res;
    }

    parseRuleBased(prompt) {
        const p = prompt.toLowerCase();
        const courses = {};

        // Edebiyat
        let m = p.match(/(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)?\s*(?:edebiyat|edb)/) ||
                p.match(/(?:edebiyat|edb)\s*(?:için|icin)?\s*(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)/) ||
                p.match(/günde\s*(\d+(?:[.,]\d+)?)\s*saat\s*edebiyat/) ||
                p.match(/gunde\s*(\d+(?:[.,]\d+)?)\s*saat\s*edebiyat/);
        if (m) {
            courses['edebiyat'] = parseFloat(m[1].replace(',', '.'));
        } else if (p.includes('edebiyat') && !courses['edebiyat']) {
            courses['edebiyat'] = 3.0;
        }

        // AYT Matematik
        m = p.match(/(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)?\s*(?:ayt\s*matematik|ayt\s*mat)/) ||
            p.match(/(?:ayt\s*matematik|ayt\s*mat)\s*(?:için|icin)?\s*(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)/) ||
            p.match(/(\d+(?:[.,]\d+)?)\s*saat\s*ayt\s*matematik/);
        if (m) {
            courses['ayt_matematik'] = parseFloat(m[1].replace(',', '.'));
        } else if (p.includes('ayt matematik') || p.includes('ayt mat')) {
            courses['ayt_matematik'] = 5.0;
        }

        // TYT Matematik
        m = p.match(/(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)?\s*(?:tyt\s*matematik|tyt\s*mat)/) ||
            p.match(/(?:tyt\s*matematik|tyt\s*mat)\s*(?:için|icin)?\s*(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)/);
        if (m) {
            courses['tyt_matematik'] = parseFloat(m[1].replace(',', '.'));
        } else if (p.includes('tyt matematik') || p.includes('tyt mat')) {
            courses['tyt_matematik'] = 3.0;
        }

        // Geometri
        m = p.match(/(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)?\s*(?:geometri|geo)/) ||
            p.match(/(?:geometri|geo)\s*(?:için|icin)?\s*(\d+(?:[.,]\d+)?)\s*(?:saat|st|h)/);
        if (m) {
            courses['geometri'] = parseFloat(m[1].replace(',', '.'));
        } else if (p.includes('geometri') || p.includes('geo')) {
            courses['geometri'] = 2.0;
        }

        if (Object.keys(courses).length === 0) {
            courses['edebiyat'] = 3.0;
            courses['ayt_matematik'] = 5.0;
        }

        let startHour = 10;
        let endHour = 22;

        let startM = p.match(/(?:başlama|baslama|başlangıç|baslangic)\s*saati\s*(\d{1,2})/) ||
                     p.match(/saat\s*(\d{1,2})\s*(?:ile|ila|ve|-)/);
        if (startM) startHour = parseInt(startM[1]);

        let endM = p.match(/(?:bitiş|bitis|kapanış|kapanis)\s*saati\s*(\d{1,2})/) ||
                   p.match(/(?:ile|ila|ve|-)\s*(\d{1,2})\s*(?:arası|arasi|kadar)/);
        if (endM) endHour = parseInt(endM[1]);

        let minTopicHours = 2.0;
        let minM = p.match(/en az\s*(\d+(?:[.,]\d+)?)\s*saat/) ||
                   p.match(/minimum\s*(\d+(?:[.,]\d+)?)\s*saat/);
        if (minM) minTopicHours = parseFloat(minM[1].replace(',', '.'));

        let repeatCount = 2;
        if (p.includes('3 tekrar') || p.includes('üç tekrar')) {
            repeatCount = 3;
        } else if (p.includes('1 tekrar') || p.includes('bir tekrar')) {
            repeatCount = 1;
        } else if (p.includes('tekrar')) {
            repeatCount = 2;
        }

        let numDays = 7;
        let daysM = p.match(/(\d+)\s*gün/) || p.match(/(\d+)\s*gun/);
        if (daysM) numDays = parseInt(daysM[1]);

        const totalH = Object.values(courses).reduce((a, b) => a + b, 0);
        const tip = `Günde ${totalH.toFixed(1)} saatlik çalışma programınız ${String(startHour).padStart(2, '0')}:00 - ${String(endHour).padStart(2, '0')}:00 aralığında 2 tekrarlı pekiştirme kuralına göre optimize edildi.`;

        return {
            courses: courses,
            start_hour: startHour,
            end_hour: endHour,
            min_topic_hours: minTopicHours,
            repeat_count: repeatCount,
            num_days: numDays,
            coaching_tip: tip,
            source: 'nlp_engine'
        };
    }

    async parseAndProcess(prompt, provider = 'ollama', model = 'qwen2.5:7b') {
        if (provider === 'ollama') {
            try {
                const systemPrompt = `Sen uzman bir YKS koçusun. Çıktıyı JSON formatında ver: {"courses":{"ayt_matematik":5.0,"edebiyat":3.0},"start_hour":10,"end_hour":22,"min_topic_hours":2.0,"repeat_count":2,"num_days":7,"coaching_tip":"..."}`;
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 6000);
                const res = await fetch(`${this.ollamaUrl}/api/generate`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: model || 'qwen2.5:7b',
                        prompt: `${systemPrompt}\n\nKullanıcı: "${prompt}"`,
                        stream: false,
                        format: 'json'
                    }),
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (res.ok) {
                    const data = await res.json();
                    const parsed = JSON.parse(data.response);
                    if (parsed.courses) {
                        parsed.source = 'local_llm';
                        return parsed;
                    }
                }
            } catch (e) {}
        }

        // Fallback
        return this.parseRuleBased(prompt);
    }
}
