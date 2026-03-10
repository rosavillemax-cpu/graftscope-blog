import { getAllGermanArticles } from "@/lib/articles";
import Header from "../components/Header";
import Ticker from "../components/Ticker";
import HomePageContentDE from "../components/HomePageContentDE";
import Newsletter from "../components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graftscope | Leitfaden für Haartransplantationskliniken",
  description: "Klinikmanagement, Patientenwachstum und Marktanalysen für Haartransplantationskliniken. Experteninhalte für Türkei, UK und Deutschland.",
  openGraph: {
    title: "Graftscope | Leitfaden für Haartransplantationskliniken",
    description: "Klinikmanagement, Patientenwachstum und Marktanalysen für Haartransplantationskliniken. Experteninhalte für Türkei, UK und Deutschland.",
    url: "https://www.graftscope.org/de",
    siteName: "Graftscope",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.org/de",
  },
};

export default function HomePageDE() {
  const articles = getAllGermanArticles();

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

      <HomePageContentDE articles={articles} />
      <div id="newsletter">
        <Newsletter language="de" />
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
            Leitfaden und Einblicke für Haartransplantationskliniken.
          </p>
        </div>
      </footer>
    </div>
  );
}
