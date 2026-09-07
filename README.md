# 🚀 YKS Akıllı Ders Çalışma Takvimi Planlayıcı (Netlify Sürümü)

Bu klasör, **Netlify** üzerinde hiçbir sunucu (backend) kurulumuna ihtiyaç duymadan **%100 statik ve anında** çalışacak şekilde özel olarak hazırlanmıştır.

---

## ⚡ 1 Dakikada Netlify'a Canlıya Alma Rehberi

### Yöntem 1: Netlify Drop ile Sürükle-Bırak (En Kolay)
1. Tarayıcınızda [https://app.netlify.com/drop](https://app.netlify.com/drop) adresini açın (veya Netlify hesabınıza giriş yapın).
2. Bilgisayarınızdaki şu klasörü komple sürükleyip Netlify ekranına bırakın:
   👉 `C:\Users\B018\.gemini\antigravity\scratch\yks_ders_planlayici_netlify`
3. 10 saniye içinde siteniz `https://sizin-seciminiz.netlify.app` olarak canlıya çıkacaktır!

### Yöntem 2: GitHub Üzerinden Netlify Dağıtımı
1. Bu klasördeki dosyaları bir GitHub deposuna (repository) yükleyin.
2. Netlify panelinden **"Add new site" -> "Import an existing project" -> "GitHub"** seçin.
3. Build command: *(Boş bırakın)*
4. Publish directory: *(Boş veya . bırakın)*
5. **"Deploy Site"** butonuna basın.

---

## 📁 Bu Klasördeki Dosyalar:
- `index.html`: Modern, responsive Single-Page Dashboard (Tailwind + Lucide)
- `curriculum.js`: Görseldeki tüm AYT Matematik, TYT Matematik, Geometri ve Edebiyat konuları
- `scheduler.js`: İstemci taraflı akıllı çizelgeleme ve 2 tekrarlı pekiştirme motoru
- `nlp.js`: Türkçe doğal dil işleme ve Local LLM entegrasyonu
- `app.js`: İnteraktif takvim, Pomodoro, .ICS dışa aktarma, yerel kayıt yönetimi
- `styles.css`: Özel animasyonlar ve yazdırma stilleri
- `netlify.toml`: Netlify yönlendirme ve güvenlik başlıkları
