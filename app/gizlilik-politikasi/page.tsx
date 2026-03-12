import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | GraftScope",
  description: "GraftScope'un gizlilik politikası - kişisel verilerinizin korunması ve kullanımı hakkında bilgi.",
  openGraph: {
    title: "Gizlilik Politikası | GraftScope",
    description: "GraftScope'un gizlilik politikası - kişisel verilerinizin korunması ve kullanımı hakkında bilgi.",
    url: "https://www.graftscope.com/blog/gizlilik-politikasi",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="editorial-page">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "#1a4d2e" }}>
          Gizlilik Politikası
        </h1>
        
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "#666" }}>
          Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
        </p>

        <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            1. Veri Sorumlusu
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope ("biz"), kişisel verilerinizin korunmasından sorumludur. Bu gizlilik politikası, 
            www.graftscope.com/blog web sitesi ("Site") üzerinden topladığımız kişisel verilerin nasıl 
            işlendiğini, korunduğunu ve kullanıldığını açıklamaktadır.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            2. Toplanan Veriler
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Site üzerinden aşağıdaki kişisel verileri topluyoruz:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Ad, soyad ve iletişim bilgileri</li>
            <li style={{ marginBottom: "0.5rem" }}>E-posta adresi</li>
            <li style={{ marginBottom: "0.5rem" }}>Telefon numarası</li>
            <li style={{ marginBottom: "0.5rem" }}>Klinik bilgileri</li>
            <li style={{ marginBottom: "0.5rem" }}>IP adresi ve tarayıcı bilgileri</li>
            <li style={{ marginBottom: "0.5rem" }}>Çerezler ve benzeri teknolojiler</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            3. Veri Kullanım Amaçları
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Kişisel verilerinizi aşağıdaki amaçlarla kullanıyoruz:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Demo taleplerini işlemek</li>
            <li style={{ marginBottom: "0.5rem" }}>Bülten aboneliklerini yönetmek</li>
            <li style={{ marginBottom: "0.5rem" }}>Müşteri desteği sağlamak</li>
            <li style={{ marginBottom: "0.5rem" }}>Site performansını iyileştirmek</li>
            <li style={{ marginBottom: "0.5rem" }}>Hukuki yükümlülükleri yerine getirmek</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            4. Veri Saklama Süresi
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Kişisel verilerinizi, toplama amaçları için gerekli olan süre kadar saklarız. 
            Kanunen saklama zorunluluğu olan veriler, yasal gerekliliklere uygun sürelerde saklanır.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            5. Kullanıcı Hakları
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            KVKK kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li style={{ marginBottom: "0.5rem" }}>Kişisel verilerinize erişme</li>
            <li style={{ marginBottom: "0.5rem" }}>Kişisel verilerinizi düzeltme</li>
            <li style={{ marginBottom: "0.5rem" }}>Kişisel verilerinizin silinmesini isteme</li>
            <li style={{ marginBottom: "0.5rem" }}>Veri işlemenin durdurulmasını isteme</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            6. Çerezler
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Site, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerezler, web sitesi 
            kullanımını analiz etmek ve kişiselleştirilmiş içerik sunmak amacıyla kullanılır. 
            Çerez ayarlarınızı tarayıcı ayarlarından yönetebilirsiniz.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            7. Üçüncü Taraflar
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Hizmetlerimizi sunarken aşağıdaki üçüncü taraflarla paylaşabiliriz:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Web hosting sağlayıcıları</li>
            <li style={{ marginBottom: "0.5rem" }}>E-posta gönderim servisleri</li>
            <li style={{ marginBottom: "0.5rem" }}>Analiz servisleri</li>
            <li style={{ marginBottom: "0.5rem" }}>Ödeme işleme servisleri</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            8. Veri Güvenliği
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Kişisel verilerinizi korumak için teknik ve idari önlemler alıyoruz. Verilerinizi 
            yetkisiz erişime, değişikliğe ve kayıba karşı korumak için SSL şifreleme ve diğer 
            güvenlik önlemleri kullanıyoruz.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            9. İletişim
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Bu gizlilik politikası hakkında sorularınız için bizimle iletişime geçebilirsiniz:
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>E-posta:</strong> <a href="mailto:contact@graftscope.com" style={{ color: "#1a4d2e" }}>contact@graftscope.com</a><br />
            <strong>Web Sitesi:</strong> <a href="https://www.graftscope.com/blog" style={{ color: "#1a4d2e" }}>www.graftscope.com/blog</a>
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            10. Politika Güncellemeleri
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler web sitemizde 
            yayınlandığında yürürlüğe girer. Lütfen düzenli olarak bu sayfayı kontrol edin.
          </p>
        </div>
      </div>
    </div>
  );
}
