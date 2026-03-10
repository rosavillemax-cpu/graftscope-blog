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
      {/* About This Guide Section */}
      <section className="about-guide-section">
        <div className="about-guide-content">
          <h1 className="about-guide-headline">Der vollständige Leitfaden für Haartransplantationsklinik-Inhaber</h1>
          <p className="about-guide-subtext">Evidenzbasierte Strategien für Klinikmanagement, Patientenwachstum und internationale Marktexpansion. Wöchentlich von Branchenexperten aktualisiert.</p>
          
          <div className="about-guide-stats">
            <div className="stat-box">
              <div className="stat-number">30+</div>
              <div className="stat-label">EXPERTENGUIDES</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">6</div>
              <div className="stat-label">GLOBALE MÄRKTE</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3</div>
              <div className="stat-label">TR · EN · DE</div>
            </div>
          </div>
        </div>
      </section>

      <HomePageContentDE articles={articles} />
      <div id="newsletter">
        <Newsletter language="de" />
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
