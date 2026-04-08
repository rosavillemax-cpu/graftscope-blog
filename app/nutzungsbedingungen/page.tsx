import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | GraftScope",
  description: "GraftScope Website Nutzungsbedingungen - Regeln und Bedingungen für die Nutzung unserer Dienstleistungen.",
  openGraph: {
    title: "Nutzungsbedingungen | GraftScope",
    description: "GraftScope Website Nutzungsbedingungen - Regeln und Bedingungen für die Nutzung unserer Dienstleistungen.",
    url: "https://www.graftscope.com/blog/nutzungsbedingungen",
  },
};

export default function TermsOfUse() {
  return (
    <div className="editorial-page">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "#1a4d2e" }}>
          Nutzungsbedingungen
        </h1>
        
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "#666" }}>
          Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
        </p>

        <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            1. Annahme
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Durch den Zugriff auf oder die Nutzung der Website www.graftscope.com/blog (die "Website") 
            akzeptieren Sie diese Nutzungsbedingungen und unsere Datenschutzrichtlinie. Wenn Sie 
            diesen Bedingungen nicht zustimmen, sollten Sie die Website nicht nutzen.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            2. Beschreibung der Dienstleistungen
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope bietet Management-Software-Lösungen für Haartransplantationskliniken an. 
            Über die Website bieten wir Demo-Anfragen, Newsletter-Abonnements und informative Inhalte an.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            3. Benutzerpflichten
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Bei der Nutzung der Website sind Sie verantwortlich für:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Bereitstellung genauer und aktueller Informationen</li>
            <li style={{ marginBottom: "0.5rem" }}>Keine Nutzung der Website für illegale Zwecke</li>
            <li style={{ marginBottom: "0.5rem" }}>Respektierung der Rechte anderer</li>
            <li style={{ marginBottom: "0.5rem" }}>Keine Gefährdung der Sicherheit der Website</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            4. Geistige Eigentumsrechte
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Alle Inhalte auf der Website (Texte, Bilder, Logos, Design) gehören GraftScope oder sind 
            lizenziert. Diese Inhalte dürfen ohne Erlaubnis nicht kopiert, verbreitet oder verwendet werden.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            5. Dienstleistungsgarantie
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wir bieten die Website "wie besehen" ohne Garantie für unterbrochene oder fehlerfreie 
            Funktionalität. Spezielle Garantiebedingungen für unsere Dienstleistungen werden in 
            separaten Vereinbarungen bereitgestellt.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            6. Haftungsbeschränkung
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope ist nicht haftbar für indirekte oder zufällige Schäden, die aus der Nutzung 
            der Website entstehen. Wir beschränken unsere Haftung auf das gesetzlich zulässige Maximum.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            7. Dienstleistungsänderungen
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wir können unsere Dienstleistungen von Zeit zu Zeit aktualisieren, ändern oder einstellen. 
            Wir werden Benutzer über wichtige Änderungen über die Website informieren.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            8. Kontosicherheit
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Sie sind für die Aufrechterhaltung der Sicherheit von über die Website erstellten Konten 
            verantwortlich. Bewahren Sie Ihre Passwörter vertraulich auf und teilen Sie 
            Kontoinformationen nicht mit anderen.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            9. Kündigung
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Wir behalten uns das Recht vor, Ihren Zugriff auf die Website zu beenden oder auszusetzen, 
            wenn Sie diese Nutzungsbedingungen verletzen.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            10. Anwendbares Recht
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Diese Nutzungsbedingungen unterliegen den Gesetzen des Landes, in dem Sie auf die 
            Website zugreifen. Streitigkeiten werden in den zuständigen Gerichten beigelegt.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            11. Kontakt
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte:
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>E-Mail:</strong> <a href="mailto:contact@graftscope.com" style={{ color: "#1a4d2e" }}>contact@graftscope.com</a><br />
            <strong>Website:</strong> <a href="https://www.graftscope.com/blog" style={{ color: "#1a4d2e" }}>www.graftscope.com/blog</a>
          </p>
        </div>
      </div>
    </div>
  );
}
