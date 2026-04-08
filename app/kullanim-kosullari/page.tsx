import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | GraftScope",
  description: "GraftScope web sitesinin kullanım koşulları - hizmetlerimizle ilgili kurallar ve şartlar.",
  openGraph: {
    title: "Kullanım Koşulları | GraftScope",
    description: "GraftScope web sitesinin kullanım koşulları - hizmetlerimizle ilgili kurallar ve şartlar.",
    url: "https://www.graftscope.com/blog/kullanim-kosullari",
  },
};

export default function TermsOfUse() {
  return (
    <div className="editorial-page">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "#1a4d2e" }}>
          Kullanım Koşulları
        </h1>
        
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "#666" }}>
          Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
        </p>

        <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            1. Kabul Edilme
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            www.graftscope.com/blog web sitesine ("Site") erişerek veya kullanarak, bu kullanım koşullarını 
            ve gizlilik politikamızı kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, 
            Site'yi kullanmamalısınız.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            2. Hizmetlerin Tanımı
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope, saç ekimi klinikleri için yönetim yazılımı çözümleri sunmaktadır. Site üzerinden 
            demo talepleri, bülten abonelikleri ve bilgilendirici içerikler sunulmaktadır.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            3. Kullanıcı Sorumlulukları
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Site'yi kullanırken aşağıdaki sorumluluklara sahipsiniz:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Doğru ve güncel bilgi sağlamak</li>
            <li style={{ marginBottom: "0.5rem" }}>Yasa dışı amaçlarla Site'yi kullanmamak</li>
            <li style={{ marginBottom: "0.5rem" }}>Başkalarının haklarına saygı göstermek</li>
            <li style={{ marginBottom: "0.5rem" }}>Site'nin güvenliğini tehlikeye atmamak</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            4. Fikri Mülkiyet Hakları
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Site'deki tüm içerikler (metinler, görseller, logolar, tasarım) GraftScope'a ait veya 
            lisanslıdır. Bu içerikler izinsiz kopyalanamaz, dağıtılamaz veya kullanılamaz.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            5. Hizmet Garantisi
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Site'yi "olduğu gibi" sunmaktayız. Site'nin kesintisiz veya hatasız olacağı garanti 
            edilmez. Hizmetlerimizle ilgili özel garanti koşulları ayrı sözleşmelerle düzenlenir.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            6. Sorumluluğun Sınırlandırılması
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope, Site'nin kullanımından kaynaklanan dolaylı veya arızi zararlardan sorumlu 
            değildir. Yasal olarak izin verilen maksimum ölçüde sorumluluğumuzu sınırlıyoruz.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            7. Hizmet Değişiklikleri
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Hizmetlerimizi zaman zaman güncelleyebilir, değiştirebilir veya sonlandırabiliriz. 
            Önemli değişiklikleri Site üzerinden duyuracağız.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            8. Hesap Güvenliği
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Site üzerinden oluşturduğunuz hesapların güvenliğinden siz sorumlusunuz. Şifrelerinizi 
            gizli tutmalı ve hesap bilgilerinizi kimseyle paylaşmamalısınız.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            9. İptal ve Fesih
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Bu koşulları ihlal etmeniz durumunda, hizmetlerimizi sonlandırma veya Site'ye erişiminizi 
            engelleme hakkını saklı tutarız.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            10. Uygulanacak Hukuk
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir uyuşmazlık 
            durumunda Türkiye mahkemeleri yetkilidir.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            11. İletişim
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>E-posta:</strong> <a href="mailto:contact@graftscope.com" style={{ color: "#1a4d2e" }}>contact@graftscope.com</a><br />
            <strong>Web Sitesi:</strong> <a href="https://www.graftscope.com/blog" style={{ color: "#1a4d2e" }}>www.graftscope.com/blog</a>
          </p>
        </div>
      </div>
    </div>
  );
}
