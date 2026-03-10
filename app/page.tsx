import { getAllArticles } from "@/lib/articles";
import Header from "./components/Header";
import Ticker from "./components/Ticker";
import HomePageContent from "./components/HomePageContent";
import Newsletter from "./components/Newsletter";
import SidebarBanner from "./components/SidebarBanner";
import { getPricingUrl } from "@/lib/getPricingUrl";

export default function HomePage() {
  const articles = getAllArticles();
  const pricingUrl = getPricingUrl("tr");

  return (
    <div className="editorial-page">
      <Header />
      <Ticker />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Saç Ekimi Klinik Yönetim Yazılımı – Tüm Operasyonunuz Tek Platformda</h1>
            <p className="hero-subtitle">
              GraftSize CRM, yapay zeka saç analizi, randevu yönetimi ve kurumsal paneli bir arada sunar — tamamen saç ekimi klinikleri için geliştirildi.
            </p>
            <div className="hero-cta">
              <a href="/demo" className="hero-btn-primary">Get Free Demo →</a>
              <a href={pricingUrl} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">See Pricing</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="hero-stats">
        <div className="hero-stats-container">
          <div className="hero-stat">
            <div className="hero-stat-number">40%</div>
            <div className="hero-stat-label">Higher Conversion Rate</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">60%</div>
            <div className="hero-stat-label">Less Admin Time</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Language Support</div>
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
