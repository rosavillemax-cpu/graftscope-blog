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
    url: "https://www.graftscope.com/blog",
    siteName: "Graftscope",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.com/blog",
    languages: {
      'tr': 'https://www.graftscope.com/blog',
      'en': 'https://www.graftscope.com/blog/en',
      'de': 'https://www.graftscope.com/blog/de',
      'x-default': 'https://www.graftscope.com/blog',
    },
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
            background: '#E1F5EE',
            color: '#0F6E56',
            fontSize: '11px',
            fontWeight: '500',
            padding: '4px 12px',
            borderRadius: '20px',
            marginBottom: '16px',
            width: 'fit-content',
          }}>
            Saç Ekimi Klinikleri İçin
          </div>
          <h1 style={{
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: '700',
            margin: '0 0 12px',
            lineHeight: '1.35',
            color: '#1a1a1a',
          }}>
            Klinik Yönetimi ve Hasta Büyümesi Rehberi
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0 0 20px',
            lineHeight: '1.6',
          }}>
            Haftalık stratejiler, pazar analizleri ve operasyonel ipuçları.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="#newsletter" style={{
              background: '#1D9E75',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
            }}>
              Bültene Abone Ol →
            </a>
            <a href="https://www.graftscope.com/demo" style={{
              border: '0.5px solid #ccc',
              color: '#1a1a1a',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
            }}>
              Ücretsiz Demo Al
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
          <div style={{ background: '#E1F5EE', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#0F6E56', margin: '0' }}>40%</p>
            <p style={{ fontSize: '11px', color: '#0F6E56', margin: '4px 0 0', lineHeight: '1.4' }}>Daha Yüksek Dönüşüm</p>
          </div>
          <div style={{ background: '#E6F1FB', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#185FA5', margin: '0' }}>60%</p>
            <p style={{ fontSize: '11px', color: '#185FA5', margin: '4px 0 0', lineHeight: '1.4' }}>Daha Az Yönetim</p>
          </div>
          <div style={{ background: '#EEEDFE', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#3C3489', margin: '0' }}>5+</p>
            <p style={{ fontSize: '11px', color: '#3C3489', margin: '4px 0 0', lineHeight: '1.4' }}>Dil Desteği</p>
          </div>
          <div style={{ background: '#FAEEDA', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#854F0B', margin: '0' }}>25+</p>
            <p style={{ fontSize: '11px', color: '#854F0B', margin: '4px 0 0', lineHeight: '1.4' }}>Makale</p>
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

      </div>
  );
}
