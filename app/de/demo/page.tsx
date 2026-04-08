import Header from "@/app/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Demo – Hair Transplant Clinic CRM & Software | GraftScope",
  description: "Request a free demo of GraftScope - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
  openGraph: {
    title: "Free Demo – Hair Transplant Clinic CRM & Software | GraftScope",
    description: "Request a free demo of GraftScope - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
    url: "https://www.graftscope.com/blog/de/demo",
    siteName: "GraftScope",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.com/blog/de/demo",
  },
};

export default function DemoPageDE() {
  return (
    <div className="editorial-page">
      <Header />
      
      <main className="demo-main">
        <section className="demo-hero">
          <div className="demo-content">
            <h1 className="demo-title">Klinikmanagement Demo Anfordern</h1>
            <p className="demo-subtitle">
              Erleben Sie die nächste Generation der Klinikverwaltung für Haartransplantationskliniken
            </p>
          </div>
        </section>

        <section className="demo-features">
          <div className="demo-features-container">
            <div className="demo-feature">
              <h3>KI-Patientenverwaltung</h3>
              <p>Zentralisierte Patientendaten und Terminverwaltung</p>
            </div>
            <div className="demo-feature">
              <h3>AI-gestützte Analysen</h3>
              <p>Automatische Auswertungen und Einblicke in Ihre Klinikleistung</p>
            </div>
            <div className="demo-feature">
              <h3>Operationale Effizienz</h3>
              <p>Optimieren Sie Ihre Arbeitsabläufe und Ressourcennutzung</p>
            </div>
            <div className="demo-feature">
              <h3>Mehrsprachige Unterstützung</h3>
              <p>Verwalten Sie internationale Patienten mit integrierten Übersetzungstools</p>
            </div>
          </div>
        </section>

        <section className="demo-form">
          <form
            action="https://formspree.io/f/xpqyzgvq"
            method="POST"
            className="demo-form-container"
          >
            <input type="hidden" name="language" value="German" />
            
            <div className="demo-form-grid">
              <div className="demo-form-group">
                <label htmlFor="name" className="demo-label">
                  Name der Klinik *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="demo-input"
                  placeholder="Ihr Klinikname"
                />
              </div>
              
              <div className="demo-form-group">
                <label htmlFor="email" className="demo-label">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="demo-input"
                  placeholder="ihr@klinik.de"
                />
              </div>
              
              <div className="demo-form-group">
                <label htmlFor="phone" className="demo-label">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="demo-input"
                  placeholder="+49 123 456789"
                />
              </div>
              
              <div className="demo-form-group">
                <label htmlFor="patients" className="demo-label">
                  Monatliche Patientenanzahl
                </label>
                <input
                  type="number"
                  id="patients"
                  name="patients"
                  className="demo-input"
                  placeholder="50-100"
                />
              </div>
              
              <div className="demo-form-group">
                <label htmlFor="message" className="demo-label">
                  Nachricht (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="demo-textarea"
                  rows={4}
                  placeholder="Besondere Anforderungen oder Fragen..."
                />
              </div>
            </div>
            
            <button type="submit" className="demo-submit-btn">
              Demo Anfordern
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-logo">GraftScope</p>
          <p className="footer-tagline">
            Leitfaden und Einblicke für Haartransplantationskliniken.
          </p>
        </div>
      </footer>
    </div>
  );
}
