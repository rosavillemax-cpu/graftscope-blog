import { getAllGermanArticles } from "@/lib/articles";
import Header from "../components/Header";
import Ticker from "../components/Ticker";
import HomePageContentDE from "../components/HomePageContentDE";
import Newsletter from "../components/Newsletter";
import { getPricingUrl } from "@/lib/getPricingUrl";
import SchemaMarkup from "../components/SchemaMarkup";
import { generateWebsiteSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haartransplantation Klinik Software & CRM | GraftScope",
  description: "GraftScope ist die All-in-One-Software für Haartransplantationskliniken. CRM, KI-Analyse, Terminverwaltung und Enterprise-Dashboard. Kostenlose Demo.",
  openGraph: {
    title: "Haartransplantation Klinik Software & CRM | GraftScope",
    description: "GraftScope ist die All-in-One-Software für Haartransplantationskliniken. CRM, KI-Analyse, Terminverwaltung und Enterprise-Dashboard. Kostenlose Demo.",
    url: "https://www.graftscope.com/blog/de",
    siteName: "Graftscope",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.com/blog/de",
    languages: {
      'tr': 'https://www.graftscope.com/blog',
      'en': 'https://www.graftscope.com/blog/en',
      'de': 'https://www.graftscope.com/blog/de',
      'x-default': 'https://www.graftscope.com/blog',
    },
  },
};

export default function HomePageDE() {
  const articles = getAllGermanArticles();
  const pricingUrl = getPricingUrl("de");

  return (
    <div className="editorial-page">
      <SchemaMarkup schema={generateWebsiteSchema("de")} />
      <Header />
      <Ticker />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Haartransplantation Software für wachsende Kliniken</h1>
            <p className="hero-subtitle">
              GraftScope kombiniert CRM, KI-Haaranalyse, Terminverwaltung und Enterprise-Dashboard — entwickelt ausschließlich für Haartransplantationskliniken.
            </p>
            <div className="hero-cta">
              <a href="/blog/de/demo" className="hero-btn-primary">Kostenlose Demo →</a>
              <a href="https://www.graftscope.com/pricing" target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">Preise ansehen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="hero-stats">
        <div className="hero-stats-container">
          <div className="hero-stat">
            <div className="hero-stat-number">40%</div>
            <div className="hero-stat-label">Höhere Konversionsrate</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">60%</div>
            <div className="hero-stat-label">Weniger Verwaltungszeit</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">5+</div>
            <div className="hero-stat-label">Sprachunterstützung</div>
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
