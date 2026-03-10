import { getAllArticles } from "@/lib/articles";
import Header from "./components/Header";
import Ticker from "./components/Ticker";
import HomePageContent from "./components/HomePageContent";
import Newsletter from "./components/Newsletter";

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <div className="editorial-page">
      <Header />
      <Ticker />
      {/* About This Guide Section */}
      <section className="about-guide-section">
        <div className="about-guide-content">
          <h1 className="about-guide-headline">Saç Ekim Kliniği Sahipleri İçin Kapsamlı Rehber</h1>
          <p className="about-guide-subtext">Klinik yönetimi, hasta büyümesi ve uluslararası pazar genişlemesi için kanıta dayalı Stratejiler. Sektör uzmanları tarafından haftalık güncellenir.</p>
          
          <div className="about-guide-stats">
            <div className="stat-box">
              <div className="stat-number">30+</div>
              <div className="stat-label">UZMAN REHBER</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">6</div>
              <div className="stat-label">GLOBAL PAZAR</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3</div>
              <div className="stat-label">TR · EN · DE</div>
            </div>
          </div>
        </div>
      </section>

      <HomePageContent articles={articles} />
      <div id="newsletter">
        <Newsletter />
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
