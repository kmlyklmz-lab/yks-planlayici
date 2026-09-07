# plan_data.js - 14 Günlük Dakika Bazlı Çalışma Planı ve Gerçek Video Linkleri

const PLAN_14_DAYS = {
    config: {
        total_days: 14,
        daily_target: {
            ayt_matematik: 180, // dk
            tyt_matematik: 60,   // dk
            geometri: 120        // dk
        }
    },
    days: [
        {
            day_number: 1,
            day_label: "Pazartesi",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Fonksiyon Temel", duration_min: 180, video_url: "https://youtu.be/DW5ppxQf00A?si=wYsCCxo0TXNevVFm", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle & Dinlenme Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Nokta Analitiği (Temel)", duration_min: 120, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DE0IMFIRICTf5bSpDd6sc6F&si=2KXPTja9Td5rtABA", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "15:45" },
                { type: "break", name: "Kahve Molası", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Tam Sayılar", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DG9G2oY2E7nu3-gJJctVefJ&si=UduxpfONNrbg2hqJ", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "16:20" },
                { course: "tyt_matematik", topic: "Ardışık Sayılar", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEy7_-jgguWMgInbcAOUen-&si=nWRTB5kyiJGseJ8w", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:20", end_time: "16:40" },
                { course: "tyt_matematik", topic: "Tek Çift Sayılar", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DHro-oP4t1TvwW5UDYlktV3&si=6Vn9faBEnOT7hhpy", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:40", end_time: "17:00" }
            ]
        },
        {
            day_number: 2,
            day_label: "Salı",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Fonksiyon İleri", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEJ5eej9hac_wZpf8N1La7o&si=Z2nmKekzR6ZZn-HP", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle & Dinlenme Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Doğru Analitiği", duration_min: 120, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEWqN9dTLT7azGNtNudFe-i&si=RbiWfjNlrGxH67Mn", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "15:45" },
                { type: "break", name: "Dinlenme Molası", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Basamak Kavramı", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEdSGNszu48oPh71JluU9DV&si=fOLFv3ryL6Ncb2NZ", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "16:30" },
                { course: "tyt_matematik", topic: "Bölünebilme Kuralları", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFv_G_lfwujqNvszbh6YHAL&si=FQ8n1ve_nQLj5iIH", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:30", end_time: "17:00" }
            ]
        },
        {
            day_number: 3,
            day_label: "Çarşamba",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "II. Dereceden Denklemler", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DHKH65_KsxdeS4rYFhECWmJ&si=oaPgbhTT1L6cz94B", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Dönüşümler Analitiği", duration_min: 120, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEHJ22x3V89FmJnHb1Rj9Sc&si=ieUge4nisYK-grLR", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Asal Sayılar", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEpIkVEyj3Jug56vwCAQRq1&si=7BNBNnIM7UKeUms", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "16:30" },
                { course: "tyt_matematik", topic: "Pozitif Bölen Sayısı", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEgQsFEMIQHy36zart8l-h9&si=0I1xyj3WwVrvH6ZU", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:30", end_time: "17:00" }
            ]
        },
        {
            day_number: 4,
            day_label: "Perşembe",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Parabol", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DF9CJypFlv8a3k6u8uvPwhG&si=_s5VFjtD28sOYJ92", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Açılar", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DG4Xfr-5MpJS9nH-Zzy5JeA&si=GBxYEnur5qMjsmnw", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "14:45" },
                { course: "geometri", topic: "Analitik Geometri Tekrar", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DE0IMFIRICTf5bSpDd6sc6F&si=2KXPTja9Td5rtABA", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "14:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Faktöriyel", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DG_j5oRTImoUp8owaKYXQEq&si=VHRB5JkiQMOZFAqk", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "16:20" },
                { course: "tyt_matematik", topic: "EBOB - EKOK (Giriş)", duration_min: 40, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFHyTXBqXx181tN2bF6XGNPr&si=xCI8C2qnMRJM4vjG", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:20", end_time: "17:00" }
            ]
        },
        {
            day_number: 5,
            day_label: "Cuma",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "II. Dereceden Eşitsizlikler", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFxMgxZdkzkACrKte5OsZ04&si=VeW3Zbh2vHJ3ZBMD", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Özel Üçgenler", duration_min: 120, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEmMGCfpCZlujan6oNkq1Vs&si=rWwBfrwgslNjK6ol", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "EBOB - EKOK (Problemler)", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFHyTXBqXx181tN2bF6XGNPr&si=xCI8C2qnMRJM4vjG", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "16:00", end_time: "16:20" },
                { course: "tyt_matematik", topic: "Rasyonel Sayılar", duration_min: 40, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEo4lt-ulqw79o6mXcmt5Qf&si=sEekelfdTZTZhwsN", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:20", end_time: "17:00" }
            ]
        },
        {
            day_number: 6,
            day_label: "Cumartesi",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Polinomlar", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DGIwsdGz7IGczZ_sqCrY2ji&si=xhYpm7sjA7KdGx3l", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Kenarortay", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DHB1R5TdF0PJJdxw2eH09Si&si=j8E3SbGh6mO8aqFm", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "14:45" },
                { course: "geometri", topic: "Doğru Analitiği Tekrar", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEWqN9dTLT7azGNtNudFe-i&si=RbiWfjNlrGxH67Mn", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "14:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "I. Dereceden Eşitsizlikler", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFjfTCqQuE51Mk7LCsLwKZM&si=u3AnQ-0PjYwQAPmP", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        },
        {
            day_number: 7,
            day_label: "Pazar",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Logaritma", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFQIOZBsVIMNazJi1El4EAt&si=9gupzn3YU1P4ILYT", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Açıortay", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLYXQFWO_iE9I&si=f0JYUhkUmFRfSfWc", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "14:45" },
                { course: "geometri", topic: "Dönüşümler Analitiği Tekrar", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEHJ22x3V89FmJnHb1Rj9Sc&si=ieUge4nisYK-grLR", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "14:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Üslü Sayılar", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DHGghEY3OK1kswc59R5mgCe&si=jRqyyts1H6x7SeP3i", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        },
        {
            day_number: 8,
            day_label: "Pazartesi",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Diziler (Genel)", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFAa2innYnpz5rtlfTsWlkc&si=hCdjNOeixL39uhLu", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Benzerlik", duration_min: 120, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFnoXZ50Gvp9TSwNvQt7BiN&si=zcuZw6KmLB1FV1Mr", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Köklü Sayılar", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFxiK1CEzdOPupYRQkGSopo&si=2BRibKks6Vcc2Kqi", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        },
        {
            day_number: 9,
            day_label: "Salı",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Aritmetik & Geometrik Dizi", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEyufm15_WplV3kPWFDQxaJ&si=VRLNWXWDaz6IklEA", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Üçgende Alan", duration_min: 120, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFBYI1IyVSq5x85ZmuUBVXR&si=IdIVZ6fHzPH94URP", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "13:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Çarpanlara Ayırma", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFDgXWrT3HRQO7nhk8l6Y-0&si=IPr0iMUa0WJKOmjs", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        },
        {
            day_number: 10,
            day_label: "Çarşamba",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Trigonometri (Bölüm 1-2)", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEX-kTQmgkTV2ODkR83C2B_&si=K-TDC53DaIHJNxor", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Açılar Soru Çözümü", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DG4Xfr-5MpJS9nH-Zzy5JeA&si=GBxYEnur5qMjsmnw", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "13:45", end_time: "14:15" },
                { course: "geometri", topic: "Analitik Geometri Karma", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DE0IMFIRICTf5bSpDd6sc6F&si=2KXPTja9Td5rtABA", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "14:15", end_time: "15:15" },
                { course: "geometri", topic: "Benzerlik Pekiştirme", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFnoXZ50Gvp9TSwNvQt7BiN&si=zcuZw6KmLB1FV1Mr", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "15:15", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Mutlak Değer", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFxiK1CEzdOPupYRQkGSopo&si=Hs83yxcz8h9AW_cC", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        },
        {
            day_number: 11,
            day_label: "Perşembe",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Trigonometri (Bölüm 3-5)", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEMC3kyR9a3a-2jRWXc4i7b&si=TlCm0Ivwy8HqBWlx", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Özel Üçgenler Tekrar", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEmMGCfpCZlujan6oNkq1Vs&si=rWwBfrwgslNjK6ol", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "13:45", end_time: "14:45" },
                { course: "geometri", topic: "Doğru Analitiği Pekiştirme", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEWqN9dTLT7azGNtNudFe-i&si=RbiWfjNlrGxH67Mn", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "14:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Oran Orantı", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFoJEQTPhb7gohkFXFXgy78&si=qHjN6jJ_LzcsmrNP", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        },
        {
            day_number: 12,
            day_label: "Cuma",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Limit ve Süreklilik", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DF7kXwc4OY4lmolp0sApt1I&si=F-guE5kvU9dFZolm", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Kenarortay Soru Çözümü", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DHB1R5TdF0PJJdxw2eH09Si&si=j8E3SbGh6mO8aqFm", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "13:45", end_time: "14:15" },
                { course: "geometri", topic: "Açıortay Soru Çözümü", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLYXQFWO_iE9I&si=f0JYUhkUmFRfSfWc", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "14:15", end_time: "14:45" },
                { course: "geometri", topic: "Benzerlik Master Test", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFnoXZ50Gvp9TSwNvQt7BiN&si=zcuZw6KmLB1FV1Mr", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "14:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Kümeler", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFIdcbHZG1xHEZQ6FWMaCpq&si=WKYRWSc7cmmiM5Y8", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        },
        {
            day_number: 13,
            day_label: "Cumartesi",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "Türev (Kavram & Kurallar)", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFtVs38okGaEIAvrkSWw6Sg&si=weXrn1GqFn8u6XVS", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Kenarortay Pekiştirme", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DHB1R5TdF0PJJdxw2eH09Si&si=j8E3SbGh6mO8aqFm", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "13:45", end_time: "14:15" },
                { course: "geometri", topic: "Açıortay Pekiştirme", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLYXQFWO_iE9I&si=f0JYUhkUmFRfSfWc", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "14:15", end_time: "14:45" },
                { course: "geometri", topic: "Dönüşümler Analitiği Soru", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEHJ22x3V89FmJnHb1Rj9Sc&si=ieUge4nisYK-grLR", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "14:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Kümeler Tekrar", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFIdcbHZG1xHEZQ6FWMaCpq&si=WKYRWSc7cmmiM5Y8", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "16:00", end_time: "16:30" },
                { course: "tyt_matematik", topic: "Mantık", duration_min: 30, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DF-eJU8GTjZv-Tgrtzw0Vhb&si=MG2Aav5MNXmndc9q", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:30", end_time: "17:00" }
            ]
        },
        {
            day_number: 14,
            day_label: "Pazar",
            total_minutes: 360,
            blocks: [
                { course: "ayt_matematik", topic: "İntegral (Belirsiz & Belirli)", duration_min: 180, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DF8H9lkW7oZFCyliqHvyTsK&si=gnGKm_wSxEy2Pnhi", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "10:00", end_time: "13:00" },
                { type: "break", name: "Öğle Molası", duration_min: 45, start_time: "13:00", end_time: "13:45" },
                { course: "geometri", topic: "Nokta Analitiği Deneme", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DE0IMFIRICTf5bSpDd6sc6F&si=2KXPTja9Td5rtABA", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "13:45", end_time: "14:05" },
                { course: "geometri", topic: "Doğru Analitiği Deneme", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEWqN9dTLT7azGNtNudFe-i&si=RbiWfjNlrGxH67Mn", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "14:05", end_time: "14:25" },
                { course: "geometri", topic: "Dönüşümler Deneme", duration_min: 20, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DEHJ22x3V89FmJnHb1Rj9Sc&si=ieUge4nisYK-grLR", stage: "2. Tekrar", stage_class: "bg-emerald-100 text-emerald-800 border-emerald-300", start_time: "14:25", end_time: "14:45" },
                { course: "geometri", topic: "Üçgende Alan Pekiştirme", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DFBYI1IyVSq5x85ZmuUBVXR&si=IdIVZ6fHzPH94URP", stage: "1. Tekrar", stage_class: "bg-amber-100 text-amber-800 border-amber-300", start_time: "14:45", end_time: "15:45" },
                { type: "break", name: "Mola", duration_min: 15, start_time: "15:45", end_time: "16:00" },
                { course: "tyt_matematik", topic: "Sayma & Binom Açılımı", duration_min: 60, video_url: "https://youtube.com/playlist?list=PLfGn_uAf44DF-y7mCbLzTsRk4-epTYn7_&si=xHmZ0kp22LAL-trC", stage: "Yeni Konu", stage_class: "bg-blue-100 text-blue-800 border-blue-300", start_time: "16:00", end_time: "17:00" }
            ]
        }
    ]
};
