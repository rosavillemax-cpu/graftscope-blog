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
  title: "Hair Transplant Clinic Software & CRM | ClinixGlow",
  description: "ClinixGlow is the all-in-one management software for hair transplant clinics. CRM, AI analysis, appointment system and enterprise dashboard. Start free.",
  openGraph: {
    title: "Hair Transplant Clinic Software & CRM | ClinixGlow",
    description: "ClinixGlow is the all-in-one management software for hair transplant clinics. CRM, AI analysis, appointment system and enterprise dashboard. Start free.",
    url: "https://www.clinixglow.com/blog/en",
    siteName: "Clinixglow",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.clinixglow.com/blog/en",
    languages: {
      'tr': 'https://www.clinixglow.com/blog',
      'en': 'https://www.clinixglow.com/blog/en',
      'de': 'https://www.clinixglow.com/blog/de',
      'x-default': 'https://www.clinixglow.com/blog',
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
      
      <section className="hero-split" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: '#fff',
        borderBottom: '0.5px solid #e5e5e5',
      }}>
        <div style={{
          padding: '40px 48px',
          borderRight: '0.5px solid #e5e5e5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'inline-block',
            background: '#F3E8F5',
            color: '#4A1559',
            fontSize: '11px',
            fontWeight: '500',
            padding: '4px 12px',
            borderRadius: '20px',
            marginBottom: '16px',
            width: 'fit-content',
          }}>
            For Hair Transplant Clinics
          </div>
          <h1 style={{
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: '700',
            margin: '0 0 12px',
            lineHeight: '1.35',
            color: '#1a1a1a',
          }}>
            Clinic Management & Patient Growth Guide
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0 0 20px',
            lineHeight: '1.6',
          }}>
            Weekly strategies, market analysis and operational insights.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="#newsletter" style={{
              background: '#631D76',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
            }}>
              Subscribe to Newsletter →
            </a>
            <a href="https://www.clinixglow.com/demo" style={{
              border: '0.5px solid #ccc',
              color: '#1a1a1a',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
            }}>
              Get Free Demo
            </a>
          </div>
        </div>
        <div style={{
          padding: '40px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          alignContent: 'center',
        }}>
          <div style={{ background: '#F3E8F5', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#4A1559', margin: '0' }}>40%</p>
            <p style={{ fontSize: '11px', color: '#4A1559', margin: '4px 0 0', lineHeight: '1.4' }}>Higher Conversion</p>
          </div>
          <div style={{ background: '#E6F1FB', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#185FA5', margin: '0' }}>60%</p>
            <p style={{ fontSize: '11px', color: '#185FA5', margin: '4px 0 0', lineHeight: '1.4' }}>Less Management</p>
          </div>
          <div style={{ background: '#EEEDFE', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#3C3489', margin: '0' }}>5+</p>
            <p style={{ fontSize: '11px', color: '#3C3489', margin: '4px 0 0', lineHeight: '1.4' }}>Language Support</p>
          </div>
          <div style={{ background: '#FAEEDA', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#854F0B', margin: '0' }}>25+</p>
            <p style={{ fontSize: '11px', color: '#854F0B', margin: '4px 0 0', lineHeight: '1.4' }}>Articles</p>
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="powered-by-section">
        <div className="powered-by-container">
          <p className="powered-by-text">
            Powered by <a href="https://www.clinixglow.com" target="_blank" rel="noopener noreferrer" className="powered-by-link">ClinixGlow</a> — the clinic operating system for hair transplant clinics.
          </p>
        </div>
      </section>

      <HomePageContentEN articles={articles} />
      <div id="newsletter">
        <Newsletter />
      </div>
      
      </div>
  );
}
