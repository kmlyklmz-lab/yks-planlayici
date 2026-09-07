// curriculum.js - YKS / AYT / TYT / Geometri / Edebiyat Müfredat ve Video Veritabanı
const CURRICULUM = {
  "ayt_matematik": {
    "name": "AYT Matematik",
    "color": "#3B82F6",
    "icon": "calculator",
    "topics": [
      {"id": "ayt_mat_1", "name": "Fonksiyonlar", "default_hours": 4, "video_url": "https://youtu.be/BSQNXHdfhcA?si=ZPXKgH0nPQvBaUVb"},
      {"id": "ayt_mat_2", "name": "Polinomlar", "default_hours": 3, "video_url": ""},
      {"id": "ayt_mat_3", "name": "II. Dereceden Denklemler", "default_hours": 3, "video_url": ""},
      {"id": "ayt_mat_4", "name": "Parabol", "default_hours": 3, "video_url": ""},
      {"id": "ayt_mat_5", "name": "Eşitsizlikler", "default_hours": 3, "video_url": ""},
      {"id": "ayt_mat_6", "name": "Logaritma", "default_hours": 4, "video_url": ""},
      {"id": "ayt_mat_7", "name": "Diziler", "default_hours": 3, "video_url": ""},
      {"id": "ayt_mat_8", "name": "Trigonometri", "default_hours": 6, "video_url": ""},
      {"id": "ayt_mat_9", "name": "Limit", "default_hours": 4, "video_url": ""},
      {"id": "ayt_mat_10", "name": "Türev", "default_hours": 6, "video_url": ""},
      {"id": "ayt_mat_11", "name": "İntegral", "default_hours": 6, "video_url": ""}
    ]
  },
  "tyt_matematik": {
    "name": "TYT Matematik",
    "color": "#10B981",
    "icon": "sigma",
    "topics": [
      {"id": "tyt_mat_1", "name": "Temel Kavramlar", "default_hours": 3, "video_url": ""},
      {"id": "tyt_mat_2", "name": "Bölme Bölünebilme / EBOB - EKOK", "default_hours": 3, "video_url": ""},
      {"id": "tyt_mat_3", "name": "Rasyonel Sayılar", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_4", "name": "I ve II Bilinmeyenli Denklemler", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_5", "name": "I ve II Bilinmeyenli Eşitsizlikler", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_6", "name": "Mutlak Değer", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_7", "name": "Üslü Sayılar", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_8", "name": "Köklü Sayılar", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_9", "name": "Oran Orantı", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_10", "name": "Çarpanlara Ayırma", "default_hours": 3, "video_url": ""},
      {"id": "tyt_mat_11", "name": "Sayı Problemleri", "default_hours": 4, "video_url": ""},
      {"id": "tyt_mat_12", "name": "Kesir Problemleri", "default_hours": 3, "video_url": ""},
      {"id": "tyt_mat_13", "name": "Yaş Problemleri", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_14", "name": "Yüzde Problemleri", "default_hours": 3, "video_url": ""},
      {"id": "tyt_mat_15", "name": "Karışım Problemleri", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_16", "name": "Hız Problemleri", "default_hours": 3, "video_url": ""},
      {"id": "tyt_mat_17", "name": "Emek Problemleri", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_18", "name": "Grafik Yorumlama", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_19", "name": "Tanım ve Formül Kullanabilme", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_20", "name": "Örüntülü Sayı Grupları", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_21", "name": "Mantık", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_22", "name": "Kümeler", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_23", "name": "Sayma Olasılık / Binom Açılımı", "default_hours": 4, "video_url": ""},
      {"id": "tyt_mat_24", "name": "Görsel Zeka", "default_hours": 2, "video_url": ""},
      {"id": "tyt_mat_25", "name": "Fonksiyonlar", "default_hours": 3, "video_url": "https://youtu.be/BSQNXHdfhcA?si=ZPXKgH0nPQvBaUVb"}
    ]
  },
  "geometri": {
    "name": "Geometri",
    "color": "#F59E0B",
    "icon": "shapes",
    "topics": [
      {"id": "geo_1", "name": "Açılar", "default_hours": 2, "video_url": ""},
      {"id": "geo_2", "name": "Özel Üçgenler", "default_hours": 3, "video_url": ""},
      {"id": "geo_3", "name": "Alan", "default_hours": 3, "video_url": ""},
      {"id": "geo_4", "name": "Açıortay", "default_hours": 2, "video_url": ""},
      {"id": "geo_5", "name": "Kenarortay", "default_hours": 2, "video_url": ""},
      {"id": "geo_6", "name": "Benzerlik", "default_hours": 3, "video_url": ""},
      {"id": "geo_7", "name": "Açı-Kenar Bağıntıları", "default_hours": 2, "video_url": ""},
      {"id": "geo_8", "name": "Çokgenler", "default_hours": 2, "video_url": ""},
      {"id": "geo_9", "name": "Genel Dörtgenler ve Deltoid", "default_hours": 2, "video_url": ""},
      {"id": "geo_10", "name": "Paralelkenar", "default_hours": 2, "video_url": ""},
      {"id": "geo_11", "name": "Eşkenar Dörtgen", "default_hours": 2, "video_url": ""},
      {"id": "geo_12", "name": "Dikdörtgen", "default_hours": 2, "video_url": ""},
      {"id": "geo_13", "name": "Kare", "default_hours": 2, "video_url": ""},
      {"id": "geo_14", "name": "Yamuk", "default_hours": 2, "video_url": ""},
      {"id": "geo_15", "name": "Çemberde Açı", "default_hours": 3, "video_url": ""},
      {"id": "geo_16", "name": "Çemberde Uzunluk", "default_hours": 3, "video_url": ""},
      {"id": "geo_17", "name": "Dairede Alan", "default_hours": 2, "video_url": ""},
      {"id": "geo_18", "name": "Nokta Analitiği", "default_hours": 2, "video_url": ""},
      {"id": "geo_19", "name": "Doğru Analitiği", "default_hours": 3, "video_url": ""},
      {"id": "geo_20", "name": "Dönüşümler", "default_hours": 2, "video_url": ""},
      {"id": "geo_21", "name": "Çember Analitiği", "default_hours": 3, "video_url": ""},
      {"id": "geo_22", "name": "Katı Cisimler", "default_hours": 3, "video_url": ""}
    ]
  },
  "edebiyat": {
    "name": "Edebiyat",
    "color": "#EC4899",
    "icon": "book-open",
    "topics": [
      {"id": "edb_1", "name": "Türk Dili ve Edebiyatına Giriş - Öğretici Metinler", "default_hours": 3, "video_url": ""},
      {"id": "edb_2", "name": "Coşku ve Heyecanı Dile Getiren Metinler", "default_hours": 3, "video_url": ""},
      {"id": "edb_3", "name": "İslamiyet Öncesi ve İslami Dönem Türk Şiiri", "default_hours": 4, "video_url": ""},
      {"id": "edb_4", "name": "Tanzimat'tan Milli Edebiyat'a Türk Şiiri", "default_hours": 5, "video_url": ""},
      {"id": "edb_5", "name": "Cumhuriyet Dönemi Türk Şiiri", "default_hours": 5, "video_url": ""},
      {"id": "edb_6", "name": "Tanzimat'tan Cumhuriyet'e Hikaye", "default_hours": 3, "video_url": ""},
      {"id": "edb_7", "name": "Tanzimat'tan Cumhuriyet'e Roman", "default_hours": 4, "video_url": ""},
      {"id": "edb_8", "name": "Tanzimat'tan Cumhuriyet'e Tiyatro", "default_hours": 3, "video_url": ""},
      {"id": "edb_9", "name": "Batı Edebiyatı ve Edebi Akımlar", "default_hours": 3, "video_url": ""}
    ]
  }
};
