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
      
      {/* Hero Banner Section */}
      <div className="hero-banner-section">
        <div className="hero-banner-container">
          <a href="https://www.graftscope.com" target="_blank" rel="noopener noreferrer" className="hero-banner-link">
            <img 
              src="/Banner.png" 
              alt="GraftScope" 
              className="hero-banner-image"
            />
          </a>
        </div>
      </div>

      <HomePageContent articles={articles} />
      <div id="newsletter">
        <Newsletter />
      </div>
      
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-container">
          <a href="https://www.graftscope.com" target="_blank" rel="noopener noreferrer" className="banner-link">
            <img 
              src="/Banner.png" 
              alt="GraftScope" 
              className="banner-image"
            />
          </a>
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
