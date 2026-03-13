export default function SidebarBanner({ lang = 'tr' }: { lang?: 'tr' | 'en' | 'de' }) {
  const content = {
    tr: {
      badge: 'GraftScope Klinik Zekası OS',
      title: 'Kliniğinizi Daha Akıllı Yönetin',
      subtitle: 'CRM · Yapay Zeka Analizi · Dashboard',
      features: [
        'Yapay Zeka Analizi',
        'Randevu Yönetimi', 
        'Hasta Takibi (CRM)',
        'Kurumsal Panel',
        'Operasyon Yönetimi',
        'Profesyonel Raporlama',
      ],
      cta: 'GraftScope\'u Keşfet →',
    },
    en: {
      badge: 'GraftScope Clinic Intelligence OS',
      title: 'Run Your Clinic Smarter',
      subtitle: 'CRM · AI Analysis · Dashboard',
      features: [
        'AI Hair Analysis',
        'Appointment System',
        'Patient CRM',
        'Enterprise Panel',
        'Operations Management',
        'Professional Reporting',
      ],
      cta: 'Explore GraftScope →',
    },
    de: {
      badge: 'GraftScope Klinik Intelligenz OS',
      title: 'Führen Sie Ihre Klinik intelligenter',
      subtitle: 'CRM · KI-Analyse · Dashboard',
      features: [
        'KI-Analyse',
        'Terminverwaltung',
        'Patienten-CRM',
        'Dashboard',
        'Operationsmanagement',
        'Professionelles Reporting',
      ],
      cta: 'GraftScope entdecken →',
    },
  };
  const t = content[lang];

  return (
    <div style={{
      borderRadius: '12px',
      overflow: 'hidden',
      border: '0.5px solid #e5e5e5',
      background: '#fff',
      marginTop: '16px',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #0F6E56, #1D9E75)',
        padding: '20px',
        textAlign: 'center',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '11px',
          fontWeight: '500',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          margin: '0 0 8px',
        }}>
          {t.badge}
        </p>
        <h4 style={{
          color: '#fff',
          fontSize: '16px',
          fontWeight: '700',
          margin: '0 0 6px',
          lineHeight: '1.3',
        }}>
          {t.title}
        </h4>
        <p style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: '12px',
          margin: '0',
        }}>
          {t.subtitle}
        </p>
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginBottom: '14px',
        }}>
          {t.features.map((feature) => (
            <div key={feature} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              color: '#444',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#1D9E75',
                flexShrink: 0,
              }} />
              {feature}
            </div>
          ))}
        </div>
        
        <a 
          href="https://www.graftscope.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#1D9E75',
            color: '#fff',
            textAlign: 'center',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          {t.cta}
        </a>
      </div>
    </div>
  );
}
