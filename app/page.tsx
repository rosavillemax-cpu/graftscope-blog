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
  title: "Saç Ekimi Klinik Yönetim Yazılımı | ClinixGlow",
  description: "ClinixGlow ile saç ekimi kliniğinizi tek platformdan yönetin. CRM, yapay zeka analizi, randevu sistemi ve enterprise dashboard. Ücretsiz demo alın.",
  openGraph: {
    title: "Saç Ekimi Klinik Yönetim Yazılımı | ClinixGlow",
    description: "ClinixGlow ile saç ekimi kliniğinizi tek platformdan yönetin. CRM, yapay zeka analizi, randevu sistemi ve enterprise dashboard. Ücretsiz demo alın.",
    url: "https://www.clinixglow.com/blog",
    siteName: "ClinixGlow",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.clinixglow.com/blog",
    languages: {
      'tr': 'https://www.clinixglow.com/blog',
      'en': 'https://www.clinixglow.com/blog/en',
      'de': 'https://www.clinixglow.com/blog/de',
      'x-default': 'https://www.clinixglow.com/blog',
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
      
      {/* ── Hero ── */}
      <section className="clinic-hero">
        {/* Left: Headline + CTAs */}
        <div className="clinic-hero-left">
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            background: '#f0f9ff',
            color: '#0369a1',
            fontSize: '11px',
            fontWeight: '600',
            padding: '5px 13px',
            borderRadius: '20px',
            width: 'fit-content',
            border: '0.5px solid #bae6fd',
            letterSpacing: '0.02em',
            marginBottom: '20px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0369a1', display: 'inline-block', flexShrink: 0 }} />
            Saç Ekimi Klinikleri İçin
          </div>

          <h1 style={{
            fontSize: 'clamp(22px, 2.8vw, 30px)',
            fontWeight: '700',
            margin: '0 0 14px',
            lineHeight: '1.3',
            color: '#0f172a',
          }}>
            Klinik Yönetimi ve{' '}
            <span style={{ color: '#0369a1' }}>Hasta Büyümesi</span>{' '}
            Rehberi
          </h1>

          <p style={{
            fontSize: '14px',
            color: '#64748b',
            margin: '0 0 24px',
            lineHeight: '1.7',
            maxWidth: '400px',
          }}>
            Haftalık stratejiler, pazar analizleri ve operasyonel ipuçları. Sektörün en kapsamlı klinik yönetim rehberi.
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a href="#newsletter" style={{
              background: '#0369a1',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              textDecoration: 'none',
            }}>
              Bültene Abone Ol →
            </a>
            <a href="https://www.clinixglow.com/demo" target="_blank" rel="noopener noreferrer" style={{
              border: '0.5px solid #cbd5e1',
              color: '#0f172a',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
              background: '#fff',
            }}>
              Demo Talep Et
            </a>
          </div>

          {/* Social proof strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {(['#0369a1', '#0891b2', '#0f766e'] as const).map((color, i) => (
                <div key={i} style={{
                  width: '26px', height: '26px',
                  borderRadius: '50%',
                  background: color,
                  border: '2px solid #fff',
                  marginLeft: i > 0 ? '-8px' : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '9px', color: '#fff', fontWeight: '700',
                  flexShrink: 0,
                }}>
                  {['K', 'H', 'T'][i]}
                </div>
              ))}
            </div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>
              500+ klinik profesyonelinin güvendiği rehber
            </span>
          </div>
        </div>

        {/* Right: Dashboard Mockup */}
        <div className="clinic-hero-right">
          <div style={{
            width: '100%',
            maxWidth: '380px',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '0.5px solid #e2e8f0',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            background: '#fff',
          }}>
            {/* Window chrome */}
            <div style={{
              background: '#1e293b',
              padding: '11px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                  <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace', flex: 1, textAlign: 'center' }}>
                ClinixGlow · Klinik Paneli
              </span>
              <div style={{
                background: '#0369a1',
                borderRadius: '4px',
                padding: '2px 7px',
                fontSize: '9px',
                color: '#fff',
                fontWeight: '600',
                letterSpacing: '0.05em',
              }}>
                LIVE
              </div>
            </div>

            {/* Dashboard body */}
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc' }}>
              {/* Metrics row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  { val: '+40%', lbl: 'Dönüşüm', bg: '#f0f9ff', c: '#0369a1' },
                  { val: '-60%', lbl: 'Admin Yük', bg: '#f0fdf4', c: '#16a34a' },
                  { val: '5+',   lbl: 'Dil', bg: '#fdf4ff', c: '#9333ea' },
                ].map(({ val, lbl, bg, c }) => (
                  <div key={lbl} style={{ background: bg, borderRadius: '8px', padding: '10px 8px', textAlign: 'center' }}>
                    <p style={{ fontSize: '17px', fontWeight: '700', color: c, margin: 0 }}>{val}</p>
                    <p style={{ fontSize: '9px', color: '#64748b', margin: '2px 0 0', lineHeight: '1.3' }}>{lbl}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div style={{ background: '#fff', borderRadius: '10px', padding: '12px', border: '0.5px solid #e2e8f0' }}>
                <p style={{ fontSize: '10px', color: '#94a3b8', margin: '0 0 8px', fontWeight: '500' }}>
                  Aylık Hasta Trendi
                </p>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '44px' }}>
                  {[35, 48, 42, 58, 52, 70, 65, 80, 75, 88, 84, 100].map((h, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: `${h}%`,
                      background: i === 11 ? '#0369a1' : i >= 9 ? '#93c5fd' : '#e0f2fe',
                      borderRadius: '2px 2px 0 0',
                    }} />
                  ))}
                </div>
              </div>

              {/* Feature chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['CRM', 'AI Analiz', 'Randevu', 'Raporlama'].map(f => (
                  <span key={f} style={{
                    background: '#fff',
                    color: '#475569',
                    fontSize: '10px',
                    fontWeight: '500',
                    padding: '4px 9px',
                    borderRadius: '20px',
                    border: '0.5px solid #e2e8f0',
                  }}>
                    {f}
                  </span>
                ))}
                <span style={{
                  background: '#0369a1',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '4px 10px',
                  borderRadius: '20px',
                }}>
                  +12 özellik
                </span>
              </div>
            </div>
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
