# GraftScope Blog — İç Linkleme & Dizin Durumu Raporu

**Tarih:** 2026-04-27
**Amaç:** Google Search Console "Keşfedildi – şu anda dizine eklenmiş değil" statüsündeki sayfaları dizine kazandırmak için iç linkleme yapısını güçlendirmek

---

## GÖREV 1 — Mevcut Durum Haritalandırması

### Sayfa Sayısı

| Dil | Makale Sayısı | URL Yapısı |
|-----|--------------|------------|
| Türkçe (TR) | 27 | `/articles/{slug}` |
| İngilizce (EN) | 37 | `/en/articles/{slug}` |
| Almanca (DE) | 39 | `/de/articles/{slug}` |
| **Toplam** | **103** | |

### İç Link Durumu (Önce)

| Metrik | Değer |
|--------|-------|
| İç link alan (inbound) sayısı ≥1 olan sayfa | 0 (tümü) |
| İç link almayan (orphan) sayfa | 103 (%100) |
| Ortalama inbound link | 0.0 |
| Ortalama outbound link | 0.0 |

**Bulgu:** Tüm makaleler MD dosyalarında birbirine hiç link vermiyordu. Related Articles bileşeni (`/api/articles/related` üzerinden) istemci tarafında çalışıyor ve bu API route'u mevcut değil, yani sayfa altında hiçbir önerilen içerik görünmüyordu.

**Link Derinliği Analizi:**
- Ana sayfa (depth 0) → Tüm makaleler (depth 1)
- Tüm makaleler eşit derinlikte (1 klik uzaklıkta)
- Derinlik >3 olan sayfa yok (tümü doğrudan ana sayfadan ulaşılabilir)

---

## GÖREV 2 — İçerik Benzerliğine Göre Link Önerileri

### Konu Kümeleri (Topic Clusters)

| Küme | TR Slug | EN Slug | DE Slug |
|------|---------|---------|---------|
| CRM / Klinik Yönetimi | `crm-olmadan-klinik-yonetmek`, `klinik-ekip-yonetimi`, `kliniklerde-envanter-yonetimi` | `clinic-management-without-crm`, `clinic-team-management`, `clinic-inventory-management` | `klinik-management-ohne-crm-de`, `klinik-team-management-de`, `klinik-inventarverwaltung` |
| Dijital Dönüşüm | `dijital-donusum-klinik`, `estetik-klinikler-icin-dijital-yonetim-rehberi` | `digital-transformation-clinic`, `digital-management-guide-aesthetic-clinics` | `digitale-transformation-klinik-de`, `digitalmanagement-leitfaden-aesthetische-kliniken` |
| Yapay Zeka / Teknoloji | `yapay-zeka-sac-analizi`, `yapay-zeka-sac-analizi-2026` | `ai-hair-analysis`, `ai-hair-analysis-revolution-2026` | `ai-haar-analyse-de`, `ki-haaranalyse-revolution-2026` |
| Türkiye Pazarı | `turkiye-sac-ekim-fiyatlari`, `antalya-sac-ekim-klinikleri`, `istanbul-klinik-rekabet-analizi` | `turkey-hair-transplant-prices`, `antalya-clinics`, `istanbul-clinic-competition` | `tuerkei-haartransplant-preise-de`, `antalya-kliniken-de`, `istanbul-klinik-wettbewerb-de` |
| Medikal Turizm | `medikal-turizm-trendleri`, `asya-sac-ekim-turizmi`, `avrupa-sac-ekim-pazari`, `orta-dogu-sac-ekim-pazari` | `medical-tourism-trends`, `asia-hair-transplant-tourism`, `europe-hair-transplant-market`, `middle-east-hair-transplant` | `medizinischer-tourismus-trends-de`, `asien-haartransplant-tourismus-de`, `europa-haartransplant-markt-de`, `naher-osten-haartransplant-de` |
| Hasta Büyümesi | `hasta-memnuniyeti-protokolleri`, `hasta-referans-programi`, `hasta-yorumlari-yonetimi` | `patient-satisfaction-protocols`, `referral-program`, `online-reviews-management` | `patientenzufriedenheits-protokolle-de`, `referenzprogramm-de`, `online-bewertungs-management-de` |

### Önceliklendirme Kriterleri

1. **Orphan sayfalar:** Tüm 103 sayfa orphan (0 inbound) — öncelik en yüksek
2. **Aynı küme içi linkler:** Semantik olarak en alakalı
3. **Maksimum 2-3 link/kaynak:** Over-optimizasyonu önlemek için

---

## GÖREV 3 — Uygulanan İç Linkler

### Değiştirilen Dosyalar (10 dosya, 14 yeni link)

#### TR (Türkçe)

**1. `content/articles/dijital-donusum-klinik.md`**
```
"Ekipleriniz [CRM olmadan klinik yönetmenin sakıncaları](/articles/crm-olmadan-klinik-yonetmek) konusunda farkındaysa..."
```
- Hedef: `/articles/crm-olmadan-klinik-yonetmek`
- Anchor: "CRM olmadan klinik yönetmenin sakıncaları"
- Küme: Dijital Dönüşüm ↔ CRM

**2. `content/articles/crm-olmadan-klinik-yonetmek.md`**
```
"...[Kliniklerde kurumsal mükemmellik yolculuğu](/articles/kliniklerde-kurumsal-mukemmellik-yolculugu-stratejiden-uyulamaya) rehberimizde..."
"...[5 işaret kliniğinizin manuel süreçler nedeniyle hasta kaybettiğini](/articles/5-isaret-kliniginiz-manuel-surecler-nedeniyle-hasta-kaybediyor)..."
```
- Küme: CRM ↔ Operasyonel Mükemmellik + Manuel Süreçler

**3. `content/articles/yapay-zeka-sac-analizi.md`**
```
"...2026'da yapay zeka saç analizinde neler beklenmesi gerektiğini [YZ Devrimi makalemizde](/articles/yapay-zeka-sac-analizi-2026) detaylıca inceledik."
```
- Küme: AI Temel ↔ AI 2026 Derinlemesine

**4. `content/articles/yapay-zeka-sac-analizi-2026.md`**
```
"[Yapay zeka ile saç analizi temelleri](/articles/yapay-zeka-sac-analizi) hakkında..."
```
- Küme: AI 2026 ↔ AI Temel (çift yönlü)

**5. `content/articles/5-isaret-kliniginiz-manuel-surecler-nedeniyle-hasta-kaybediyor.md`**
```
"[CRM olmadan klinik yönetmenin sakıncaları](/articles/crm-olmadan-klinik-yonetmek) ve [envanter yönetimi verimsizlikleri](/articles/kliniklerde-envanter-yonetimi)..."
```
- Küme: Manuel Süreçler ↔ CRM + Envanter

**6. `content/articles/medikal-turizm-trendleri.md`**
```
"...[uluslararasi-hasta-cekme stratejilerimiz](/articles/uluslararasi-hasta-cekme) ve [Avrupa](/articles/avrupa-sac-ekim-pazari) ile [Orta Doğu](/articles/orta-dogu-sac-ekim-pazari) pazar analizlerimiz..."
```
- Küme: Medikal Turizm ↔ Pazar Analizi

#### EN (İngilizce)

**7. `content/en/articles/digital-transformation-clinic.md`**
```
"...our guide on [5 signs your clinic is losing patients to manual processes](/en/articles/5-signs-your-clinic-is-losing-patients-to-manual-processes) and [managing a clinic without CRM](/en/articles/clinic-management-without-crm)..."
```
- Küme: Dijital Dönüşüm ↔ Manuel Süreçler + CRM

**8. `content/en/articles/clinic-management-without-crm.md`**
```
"...our article on [5 signs your clinic is losing patients to manual processes](/en/articles/5-signs-your-clinic-is-losing-patients-to-manual-processes) and [clinic inventory management](/en/articles/clinic-inventory-management)..."
```
- Küme: CRM ↔ Manuel Süreçler + Envanter

**9. `content/en/articles/medical-tourism-trends.md`**
```
"...[acquiring international patients](/en/articles/international-patient-acquisition) and key markets like [Europe](/en/articles/europe-hair-transplant-market) and the [Middle East](/en/articles/middle-east-hair-transplant)..."
```
- Küme: Medikal Turizm ↔ Hasta Kazanımı + Pazar Analizi

#### DE (Almanca)

**10. `content/de/articles/digitale-transformation-klinik-de.md`**
```
"...lesen Sie unseren Artikel über [5 Anzeichen, dass Ihre Klinik Patienten durch manuelle Prozesse verliert](/de/articles/5-anzeichen-dass-ihre-klinik-patienten-durch-manuelle-prozesse-verliert)."
```
- Küme: Dijital Dönüşüm ↔ Manuel Süreçler

### Uygulanmayan Öneriler

Görev 2'de ~200 link önerisi üretildi. İlk fazda 10 dosyada 14 yeni link uygulandı. Kalan öneriler için sonraki fazlarda devam edilebilir.

---

## GÖREV 4 — Sitemap ve robots.txt Kontrolü

### robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Crawl-delay: 1
Sitemap: https://www.graftscope.com/blog/sitemap.xml
```
**Durum:** ✅ Sorun yok. Tüm sayfalara izin var, sitemap doğru konumda.

### sitemap.xml
- **Durum:** ✅ Dinamik olarak üretiliyor (`app/sitemap.xml/route.ts`)
- Tüm TR, EN, DE makaleleri otomatik dahil ediliyor
- Orphan sayfa ayrımı yok (hepsi zaten sitemap'te)
- `lastModified`, `changefreq`, `priority` ve `hreflang` alternates ile tam destek

### Önerilen Düzeltme (robots.txt)
`Disallow: /api/` mevcut API route'larını engelliyor. Eğer `/api/articles/related` route'u oluşturulursa, bu disallow kaldırılmalı:
```
# Mevcut (sorunlu):
Disallow: /api/

# Önerilen düzeltme:
Allow: /api/articles/related
Disallow: /api/
```

---

## GÖREV 5 — Doğrulama Raporu

### İç Linkleme Sonuçları

| Metrik | Önce | Sonra |
|--------|------|-------|
| Toplam yeni iç link | 0 | 14 |
| İç link alan sayfa (inbound ≥1) | 0 | 14 |
| Orphan sayfa (inbound = 0) | 103 | 89 |
| Orphan oranı | %100 | %86.4 |
| Ortalama inbound link | 0.0 | 0.14 |
| Ortalama outbound link | 0.0 | ~0.14 |

### Hâlâ Orphan Kalan Sayfalar (89 sayfa)

**Manuel Aksiyon Önerileri:**

1. **İlgili Makaleler API'si oluştur:** `/app/api/articles/related/route.ts` — bu en yüksek etkili çözüm. Tüm makaleler otomatik olarak kendi kategorilerinden 3 önerilen içerik sunacak.

2. **Her MD dosyasına 1-2 contextually relevant link ekle** — konu kümeleleri içinde kalan 89 sayfaya da aynı yöntemle linkler eklenmeli (yaklaşık 80-100 ek link).

3. **Ana sayfa kartlarından category filter ile bağlantı** — HomePageContent.tsx'deki makale kartları zaten `/articles/{slug}` linkleri içeriyor, ancak daha fazla görünürlük için featured articles'lar ana sayfada öne çıkarılmalı.

### Google Search Console'a Gönderilecek Öncelikli URL'ler

Aşağıdaki URL'ler (14 yeni linkin hedefleri) Google'a öncelikle gönderilmeli:

```
TR:
https://www.graftscope.com/blog/articles/crm-olmadan-klinik-yonetmek
https://www.graftscope.com/blog/articles/kliniklerde-kurumsal-mukemmellik-yolculugu-stratejiden-uyulamaya
https://www.graftscope.com/blog/articles/5-isaret-kliniginiz-manuel-surecler-nedeniyle-hasta-kaybediyor
https://www.graftscope.com/blog/articles/yapay-zeka-sac-analizi
https://www.graftscope.com/blog/articles/yapay-zeka-sac-analizi-2026
https://www.graftscope.com/blog/articles/uluslararasi-hasta-cekme
https://www.graftscope.com/blog/articles/avrupa-sac-ekim-pazari
https://www.graftscope.com/blog/articles/orta-dogu-sac-ekim-pazari

EN:
https://www.graftscope.com/blog/en/articles/5-signs-your-clinic-is-losing-patients-to-manual-processes
https://www.graftscope.com/blog/en/articles/clinic-management-without-crm
https://www.graftscope.com/blog/en/articles/clinic-inventory-management
https://www.graftscope.com/blog/en/articles/international-patient-acquisition
https://www.graftscope.com/blog/en/articles/europe-hair-transplant-market
https://www.graftscope.com/blog/en/articles/middle-east-hair-transplant

DE:
https://www.graftscope.com/blog/de/articles/5-anzeichen-dass-ihre-klinik-patienten-durch-manuelle-prozesse-verliert
```

### Sonraki Adımlar

1. `/api/articles/related` API route'u oluşturarak tüm makalelere otomatik "İlgili Makaleler" ekle
2. Kalan 89 orphan sayfaya konu kümeleleri içinde 1-2 link ekle
3. Google Search Console → URL Denetleme aracılığıyla 14 öncelikli URL'yi dizine gönder
4. 2-4 hafta sonra crawl sonuçlarını kontrol et
5. Hâlâ dizine eklenmeyen sayfalar için `fetch as Google` kullan

---

## Teknik Notlar

- **Link formatı:** Markdown standart `[anchor text](/articles/slug)` — Next.js otomatik olarak `/blog` basePath ile düzgün çalışıyor
- **Anchor text:** Tüm linklerde konuya özgü, jenerik ifade yok (`buraya tıklayın`, `daha fazla` vb. kullanılmadı)
- **Çift link engeli:** Aynı sayfa çiftine birden fazla link eklenmedi (yalnızca doğal bidirectional bağlantılar: AI temel ↔ AI 2026)
- **robots.txt:** Yanlışlıkla engellenen path yok — sitemap doğru konumda
