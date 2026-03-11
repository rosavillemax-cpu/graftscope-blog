import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | GraftScope",
  description: "GraftScope's Datenschutzrichtlinie - Informationen über die Erhebung, Verarbeitung und Schutz Ihrer personenbezogenen Daten.",
  openGraph: {
    title: "Datenschutz | GraftScope",
    description: "GraftScope's Datenschutzrichtlinie - Informationen über die Erhebung, Verarbeitung und Schutz Ihrer personenbezogenen Daten.",
    url: "https://www.graftscope.org/datenschutz",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="editorial-page">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "#1a4d2e" }}>
          Datenschutzrichtlinie
        </h1>
        
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "#666" }}>
          Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
        </p>

        <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            1. Verantwortliche Stelle
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope ("wir", "uns" oder "unser") ist der für den Schutz Ihrer personenbezogenen Daten 
            verantwortliche Stelle. Diese Datenschutzrichtlinie erklärt, wie wir personenbezogene Daten 
            über unsere Website www.graftscope.org (die "Website") erheben, verarbeiten und schützen.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            2. Erhobene Daten
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Wir erheben die folgenden personenbezogenen Daten über die Website:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Name, Nachname und Kontaktdaten</li>
            <li style={{ marginBottom: "0.5rem" }}>E-Mail-Adresse</li>
            <li style={{ marginBottom: "0.5rem" }}>Telefonnummer</li>
            <li style={{ marginBottom: "0.5rem" }}>Klinikinformationen</li>
            <li style={{ marginBottom: "0.5rem" }}>IP-Adresse und Browserinformationen</li>
            <li style={{ marginBottom: "0.5rem" }}>Cookies und ähnliche Technologien</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            3. Zwecke der Datenverarbeitung
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Wir verwenden Ihre personenbezogenen Daten für folgende Zwecke:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Bearbeitung von Demo-Anfragen</li>
            <li style={{ marginBottom: "0.5rem" }}>Verwaltung von Newsletter-Abonnements</li>
            <li style={{ marginBottom: "0.5rem" }}>Erbringung von Kundensupport</li>
            <li style={{ marginBottom: "0.5rem" }}>Verbesserung der Website-Leistung</li>
            <li style={{ marginBottom: "0.5rem" }}>Erfüllung rechtlicher Verpflichtungen</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            4. Speicherdauer
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wir speichern Ihre personenbezogenen Daten so lange, wie es für die Zwecke, für die sie 
            erhoben wurden, erforderlich ist. Daten, die gesetzlichen Aufbewahrungspflichten unterliegen, 
            werden für die gesetzlich vorgeschriebenen Zeiträume aufbewahrt.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            5. Ihre Rechte
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Gemäß DSGVO haben Sie die folgenden Rechte:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Auskunft darüber, ob Ihre personenbezogenen Daten verarbeitet werden</li>
            <li style={{ marginBottom: "0.5rem" }}>Recht auf Zugang zu Ihren personenbezogenen Daten</li>
            <li style={{ marginBottom: "0.5rem" }}>Recht auf Berichtigung Ihrer personenbezogenen Daten</li>
            <li style={{ marginBottom: "0.5rem" }}>Recht auf Löschung Ihrer personenbezogenen Daten</li>
            <li style={{ marginBottom: "0.5rem" }}>Recht auf Einschränkung der Verarbeitung</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            6. Cookies
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Die Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Cookies werden zur 
            Analyse der Website-Nutzung und zur Bereitstellung personalisierter Inhalte verwendet. 
            Sie können Ihre Cookie-Einstellungen in Ihren Browsereinstellungen verwalten.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            7. Dritte Parteien
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wir können Ihre Daten an die folgenden Dritten weitergeben, um unsere Dienstleistungen zu erbringen:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Web-Hosting-Anbieter</li>
            <li style={{ marginBottom: "0.5rem" }}>E-Mail-Versanddienste</li>
            <li style={{ marginBottom: "0.5rem" }}>Analyse-Dienste</li>
            <li style={{ marginBottom: "0.5rem" }}>Zahlungsabwicklungs-Dienste</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            8. Datensicherheit
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wir implementieren technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen 
            Daten. Wir verwenden SSL-Verschlüsselung und andere Sicherheitsmaßnahmen zum Schutz 
            Ihrer Daten vor unbefugtem Zugriff, Änderung und Verlust.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            9. Kontakt
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte:
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>E-Mail:</strong> <a href="mailto:contact@graftscope.com" style={{ color: "#1a4d2e" }}>contact@graftscope.com</a><br />
            <strong>Website:</strong> <a href="https://www.graftscope.org" style={{ color: "#1a4d2e" }}>www.graftscope.org</a>
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            10. Richtlinien-Updates
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf 
            dieser Seite veröffentlicht und treten bei Veröffentlichung in Kraft. Bitte überprüfen Sie 
            diese Seite regelmäßig auf Updates.
          </p>
        </div>
      </div>
    </div>
  );
}
