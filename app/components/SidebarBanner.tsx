export default function SidebarBanner({ lang = 'tr' }: { lang?: 'tr' | 'en' | 'de' }) {
  const content = {
    tr: {
      badge: 'GraftScope',
      title: 'Kliniğinizi Daha Akıllı Yönetin',
      subtitle: 'Saç ekimi klinikleri için tasarlanmış\ntam kapsamlı yönetim platformu.',
      features: [
        { icon: 'crm',  label: 'Hasta CRM' },
        { icon: 'ai',   label: 'Yapay Zeka Analizi' },
        { icon: 'cal',  label: 'Randevu Sistemi' },
        { icon: 'dash', label: 'Kurumsal Dashboard' },
        { icon: 'rep',  label: 'Profesyonel Raporlar' },
        { icon: 'ops',  label: 'Operasyon Takibi' },
      ],
      cta: 'Demo Talep Et →',
      ctaHref: 'https://www.graftscope.com/demo',
      stat: '+40%',
      statLabel: 'Ortalama dönüşüm artışı',
    },
    en: {
      badge: 'GraftScope',
      title: 'Run Your Clinic Smarter',
      subtitle: 'The complete management platform\nbuilt for hair transplant clinics.',
      features: [
        { icon: 'crm',  label: 'Patient CRM' },
        { icon: 'ai',   label: 'AI Hair Analysis' },
        { icon: 'cal',  label: 'Appointment System' },
        { icon: 'dash', label: 'Enterprise Dashboard' },
        { icon: 'rep',  label: 'Professional Reports' },
        { icon: 'ops',  label: 'Operations Tracking' },
      ],
      cta: 'Request Demo →',
      ctaHref: 'https://www.graftscope.com/demo',
      stat: '+40%',
      statLabel: 'Average conversion lift',
    },
    de: {
      badge: 'GraftScope',
      title: 'Ihre Klinik smarter führen',
      subtitle: 'Die komplette Managementplattform\nfür Haartransplantationskliniken.',
      features: [
        { icon: 'crm',  label: 'Patienten-CRM' },
        { icon: 'ai',   label: 'KI-Analyse' },
        { icon: 'cal',  label: 'Terminverwaltung' },
        { icon: 'dash', label: 'Enterprise-Dashboard' },
        { icon: 'rep',  label: 'Professionelle Berichte' },
        { icon: 'ops',  label: 'Operations-Tracking' },
      ],
      cta: 'Demo anfragen →',
      ctaHref: 'https://www.graftscope.com/demo',
      stat: '+40%',
      statLabel: 'Ø Konversionssteigerung',
    },
  };
  const t = content[lang];

  // Mini sparkline bar heights (decorative)
  const sparkBars = [30, 45, 38, 60, 55, 72, 68, 85, 80, 94, 88, 100];

  function FeatureIcon({ type }: { type: string }) {
    const s = { width: 14, height: 14, flexShrink: 0 } as const;
    switch (type) {
      case 'crm': return (
        <svg {...s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="5" r="3" fill="#0369a1" fillOpacity="0.9"/>
          <path d="M2 12c0-2.76 2.24-4 5-4s5 1.24 5 4" fill="#0369a1" fillOpacity="0.4"/>
        </svg>
      );
      case 'ai': return (
        <svg {...s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="10" height="10" rx="2" fill="#0369a1" fillOpacity="0.15" stroke="#0369a1" strokeWidth="1"/>
          <circle cx="7" cy="7" r="2.5" fill="#0369a1"/>
          <circle cx="7" cy="7" r="1" fill="#fff"/>
        </svg>
      );
      case 'cal': return (
        <svg {...s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" fill="#0369a1" fillOpacity="0.1" stroke="#0369a1" strokeWidth="1"/>
          <line x1="1.5" y1="5.5" x2="12.5" y2="5.5" stroke="#0369a1" strokeWidth="1"/>
          <rect x="4" y="7.5" width="2" height="2" rx="0.5" fill="#0369a1"/>
          <rect x="8" y="7.5" width="2" height="2" rx="0.5" fill="#0369a1" fillOpacity="0.5"/>
        </svg>
      );
      case 'dash': return (
        <svg {...s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="1.5" y="1.5" width="5" height="5" rx="1" fill="#0369a1"/>
          <rect x="7.5" y="1.5" width="5" height="2" rx="0.5" fill="#0369a1" fillOpacity="0.5"/>
          <rect x="7.5" y="5" width="5" height="2" rx="0.5" fill="#0369a1" fillOpacity="0.3"/>
          <rect x="1.5" y="7.5" width="11" height="2" rx="0.5" fill="#0369a1" fillOpacity="0.2"/>
          <rect x="1.5" y="10.5" width="7" height="2" rx="0.5" fill="#0369a1" fillOpacity="0.15"/>
        </svg>
      );
      case 'rep': return (
        <svg {...s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="3" y="8" width="2" height="4" rx="0.5" fill="#0369a1"/>
          <rect x="6" y="5" width="2" height="7" rx="0.5" fill="#0369a1" fillOpacity="0.7"/>
          <rect x="9" y="2" width="2" height="10" rx="0.5" fill="#0369a1" fillOpacity="0.4"/>
        </svg>
      );
      default: return (
        <svg {...s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5" fill="#0369a1" fillOpacity="0.15" stroke="#0369a1" strokeWidth="1"/>
          <path d="M5 7h4M7 5v4" stroke="#0369a1" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    }
  }

  return (
    <div style={{
      borderRadius: '12px',
      overflow: 'hidden',
      border: '0.5px solid #e2e8f0',
      background: '#fff',
      marginTop: '16px',
    }}>
      {/* ── Header: dark navy with sparkline ── */}
      <div style={{
        background: '#0f172a',
        padding: '18px 18px 14px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(3,105,161,0.3)',
          border: '0.5px solid rgba(3,105,161,0.5)',
          borderRadius: '20px',
          padding: '3px 10px',
          fontSize: '10px',
          fontWeight: '600',
          color: '#7dd3fc',
          letterSpacing: '0.05em',
          marginBottom: '10px',
          position: 'relative',
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#38bdf8', display: 'inline-block' }} />
          {t.badge}
        </div>

        <h4 style={{
          color: '#f1f5f9',
          fontSize: '14px',
          fontWeight: '700',
          margin: '0 0 5px',
          lineHeight: '1.3',
          position: 'relative',
        }}>
          {t.title}
        </h4>

        <p style={{
          color: '#94a3b8',
          fontSize: '11px',
          margin: '0 0 14px',
          lineHeight: '1.6',
          whiteSpace: 'pre-line',
          position: 'relative',
        }}>
          {t.subtitle}
        </p>

        {/* Sparkline + stat */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          position: 'relative',
        }}>
          {/* Bar chart sparkline */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '2px',
            height: '28px',
            flex: 1,
          }}>
            {sparkBars.map((h, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${h}%`,
                background: i === sparkBars.length - 1
                  ? '#38bdf8'
                  : i >= sparkBars.length - 4
                  ? 'rgba(56,189,248,0.5)'
                  : 'rgba(255,255,255,0.12)',
                borderRadius: '1.5px 1.5px 0 0',
              }} />
            ))}
          </div>
          {/* Stat */}
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <p style={{ fontSize: '18px', fontWeight: '700', color: '#38bdf8', margin: 0, lineHeight: 1 }}>
              {t.stat}
            </p>
            <p style={{ fontSize: '9px', color: '#64748b', margin: '2px 0 0', lineHeight: 1.3, maxWidth: '72px' }}>
              {t.statLabel}
            </p>
          </div>
        </div>
      </div>

      {/* ── Body: features + CTA ── */}
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '7px 10px',
          marginBottom: '14px',
        }}>
          {t.features.map((f) => (
            <div key={f.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              color: '#334155',
              fontWeight: '500',
            }}>
              <FeatureIcon type={f.icon} />
              {f.label}
            </div>
          ))}
        </div>

        <a
          href={t.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: '#0369a1',
            color: '#fff',
            textAlign: 'center',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '600',
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}
        >
          {t.cta}
        </a>
      </div>
    </div>
  );
}
