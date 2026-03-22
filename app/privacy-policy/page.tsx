import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ClinixGlow",
  description: "ClinixGlow's privacy policy - information about how we collect, use, and protect your personal data.",
  openGraph: {
    title: "Privacy Policy | ClinixGlow",
    description: "ClinixGlow's privacy policy - information about how we collect, use, and protect your personal data.",
    url: "https://www.clinixglow.com/blog/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="editorial-page">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "#1a4d2e" }}>
          Privacy Policy
        </h1>
        
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "#666" }}>
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>

        <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            1. Data Controller
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            ClinixGlow ("we", "us", or "our") is the data controller responsible for the protection 
            of your personal data. This privacy policy explains how we collect, use, and protect 
            personal data through our website www.clinixglow.com/blog (the "Site").
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            2. Data We Collect
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We collect the following personal data through the Site:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Name, surname and contact information</li>
            <li style={{ marginBottom: "0.5rem" }}>Email address</li>
            <li style={{ marginBottom: "0.5rem" }}>Phone number</li>
            <li style={{ marginBottom: "0.5rem" }}>Clinic information</li>
            <li style={{ marginBottom: "0.5rem" }}>IP address and browser information</li>
            <li style={{ marginBottom: "0.5rem" }}>Cookies and similar technologies</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            3. Purposes of Data Processing
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We use your personal data for the following purposes:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Processing demo requests</li>
            <li style={{ marginBottom: "0.5rem" }}>Managing newsletter subscriptions</li>
            <li style={{ marginBottom: "0.5rem" }}>Providing customer support</li>
            <li style={{ marginBottom: "0.5rem" }}>Improving site performance</li>
            <li style={{ marginBottom: "0.5rem" }}>Fulfilling legal obligations</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            4. Data Retention Period
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We retain your personal data for as long as necessary for the purposes for which it was 
            collected. Data subject to legal retention requirements are kept for the periods 
            required by applicable laws.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            5. Your Rights
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Under GDPR, you have the following rights:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Right to know whether your personal data is being processed</li>
            <li style={{ marginBottom: "0.5rem" }}>Right to access your personal data</li>
            <li style={{ marginBottom: "0.5rem" }}>Right to rectify your personal data</li>
            <li style={{ marginBottom: "0.5rem" }}>Right to erasure of your personal data</li>
            <li style={{ marginBottom: "0.5rem" }}>Right to restrict processing</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            6. Cookies
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            The Site uses cookies to improve user experience. Cookies are used to analyze website 
            usage and provide personalized content. You can manage your cookie preferences 
            through your browser settings.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            7. Third Parties
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We may share your data with the following third parties to provide our services:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Web hosting providers</li>
            <li style={{ marginBottom: "0.5rem" }}>Email delivery services</li>
            <li style={{ marginBottom: "0.5rem" }}>Analytics services</li>
            <li style={{ marginBottom: "0.5rem" }}>Payment processing services</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            8. Data Security
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We implement technical and organizational measures to protect your personal data. 
            We use SSL encryption and other security measures to protect your data from 
            unauthorized access, alteration, and loss.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            9. Contact
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            If you have questions about this privacy policy, please contact us:
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>Email:</strong> <a href="mailto:contact@clinixglow.com" style={{ color: "#1a4d2e" }}>contact@clinixglow.com</a><br />
            <strong>Website:</strong> <a href="https://www.clinixglow.com/blog" style={{ color: "#1a4d2e" }}>www.clinixglow.com/blog</a>
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            10. Policy Updates
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We may update this privacy policy from time to time. Changes will be posted on this 
            page and will take effect when posted. Please check this page regularly for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
