import { getAllEnglishArticles } from "@/lib/articles";
import Header from "../components/Header";
import Ticker from "../components/Ticker";
import HomePageContentEN from "../components/HomePageContentEN";
import Newsletter from "../components/Newsletter";
import { getPricingUrl } from "@/lib/getPricingUrl";
import SchemaMarkup from "../components/SchemaMarkup";
import { generateWebsiteSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Transplant Clinic Software & CRM | GraftScope",
  description: "GraftScope is the all-in-one management software for hair transplant clinics. CRM, AI analysis, appointment system and enterprise dashboard. Start free.",
  openGraph: {
    title: "Hair Transplant Clinic Software & CRM | GraftScope",
    description: "GraftScope is the all-in-one management software for hair transplant clinics. CRM, AI analysis, appointment system and enterprise dashboard. Start free.",
    url: "https://www.graftscope.com/blog/en",
    siteName: "Graftscope",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.com/blog/en",
    languages: {
      'tr': 'https://www.graftscope.com/blog',
      'en': 'https://www.graftscope.com/blog/en',
      'de': 'https://www.graftscope.com/blog/de',
      'x-default': 'https://www.graftscope.com/blog',
    },
  },
};

export default function HomePageEN() {
  const articles = getAllEnglishArticles();
  const pricingUrl = getPricingUrl("en");

  return (
    <div className="editorial-page">
      <SchemaMarkup schema={generateWebsiteSchema("en")} />
      <Header />
      <Ticker />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Hair Transplant Clinic Software Built for Growth</h1>
            <p className="hero-subtitle">
              GraftScope combines CRM, AI hair analysis, appointment management, and enterprise dashboard — built exclusively for hair transplant clinics.
            </p>
            <div className="hero-cta">
              <a href="/blog/en/demo" className="hero-btn-primary">Get Free Demo →</a>
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
            <div className="hero-stat-number">5+</div>
            <div className="hero-stat-label">Language Support</div>
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="powered-by-section">
        <div className="powered-by-container">
          <p className="powered-by-text">
            Powered by <a href="https://www.graftscope.com" target="_blank" rel="noopener noreferrer" className="powered-by-link">GraftScope</a> — the clinic operating system for hair transplant clinics.
          </p>
        </div>
      </section>

      <HomePageContentEN articles={articles} />
      <div id="newsletter">
        <Newsletter />
      </div>
      
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-logo">Graftscope</p>
          <p className="footer-tagline">
            Insights and guides for hair transplant clinics.
          </p>
        </div>
      </footer>
    </div>
  );
}
