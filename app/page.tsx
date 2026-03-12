import { getAllArticles } from "@/lib/articles";
import Header from "./components/Header";
import Ticker from "./components/Ticker";
import HomePageContent from "./components/HomePageContent";
import Newsletter from "./components/Newsletter";
import SidebarBanner from "./components/SidebarBanner";
import { getPricingUrl } from "@/lib/getPricingUrl";
import SchemaMarkup from "./components/SchemaMarkup";
import { generateWebsiteSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saç Ekimi Klinik Yönetim Yazılımı | GraftScope",
  description: "GraftScope ile saç ekimi kliniğinizi tek platformdan yönetin. CRM, yapay zeka analizi, randevu sistemi ve enterprise dashboard. Ücretsiz demo alın.",
  openGraph: {
    title: "Saç Ekimi Klinik Yönetim Yazılımı | GraftScope",
    description: "GraftScope ile saç ekimi kliniğinizi tek platformdan yönetin. CRM, yapay zeka analizi, randevu sistemi ve enterprise dashboard. Ücretsiz demo alın.",
    url: "https://graftscope.com/blog",
    siteName: "Graftscope",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://graftscope.com/blog",
  },
};

export default function HomePage() {
  const articles = getAllArticles();
  const pricingUrl = getPricingUrl("tr");

  return (
    <div className="editorial-page">
      <SchemaMarkup schema={generateWebsiteSchema("tr")} />
      <Header />
      <Ticker />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Saç Ekimi Kliniklerine Özel Yönetim Yazılımı</h1>
            <p className="hero-subtitle">
              GraftSize CRM, yapay zeka saç analizi, randevu yönetimi ve kurumsal paneli bir arada sunar — tamamen saç ekimi klinikleri için geliştirildi.
            </p>
            <div className="hero-cta">
              <a href="/demo" className="hero-btn-primary">Ücretsiz Demo Al →</a>
              <a href={pricingUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">Fiyatları Gör</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="hero-stats">
        <div className="hero-stats-container">
          <div className="hero-stat">
            <div className="hero-stat-number">40%</div>
            <div className="hero-stat-label">Daha Yüksek Dönüşüm Oranı</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">60%</div>
            <div className="hero-stat-label">Daha Az Yönetim Süresi</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">5+</div>
            <div className="hero-stat-label">Dil Desteği</div>
          </div>
        </div>
      </section>

      <HomePageContent articles={articles} />
      <div id="newsletter">
        <Newsletter />
      </div>
      
      {/* Bottom Banner Section */}
      <div className="bottom-banner-section">
        <div className="bottom-banner-container">
          <SidebarBanner />
        </div>
      </div>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-logo">Graftscope</p>
          <p className="footer-tagline">
            Saç ekimi klinikleri için içgörüler ve rehberler.
          </p>
        </div>
      </footer>
    </div>
  );
}
