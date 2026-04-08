import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | GraftScope",
  description: "GraftScope website terms of use - rules and conditions for using our services.",
  openGraph: {
    title: "Terms of Use | GraftScope",
    description: "GraftScope website terms of use - rules and conditions for using our services.",
    url: "https://www.graftscope.com/blog/terms",
  },
};

export default function TermsOfUse() {
  return (
    <div className="editorial-page">
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem", color: "#1a4d2e" }}>
          Terms of Use
        </h1>
        
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem", color: "#666" }}>
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>

        <div style={{ fontSize: "1rem", lineHeight: "1.7", color: "#333" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            1. Acceptance
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            By accessing or using the www.graftscope.com/blog website (the "Site"), you accept and agree 
            to be bound by these terms of use and our privacy policy. If you do not agree to these 
            terms, you should not use the Site.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            2. Description of Services
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope provides management software solutions for hair transplant clinics. Through 
            the Site, we offer demo requests, newsletter subscriptions, and informational content.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            3. User Responsibilities
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            When using the Site, you are responsible for:
          </p>
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "0.5rem" }}>Providing accurate and current information</li>
            <li style={{ marginBottom: "0.5rem" }}>Not using the Site for illegal purposes</li>
            <li style={{ marginBottom: "0.5rem" }}>Respecting the rights of others</li>
            <li style={{ marginBottom: "0.5rem" }}>Not compromising the security of the Site</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            4. Intellectual Property Rights
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            All content on the Site (text, images, logos, design) is owned by or licensed to 
            GraftScope. This content may not be copied, distributed, or used without permission.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            5. Service Warranty
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We provide the Site "as is" without any guarantee of uninterrupted or error-free 
            operation. Specific warranty terms for our services are provided in separate agreements.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            6. Limitation of Liability
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            GraftScope is not liable for indirect or incidental damages arising from the use of 
            the Site. We limit our liability to the maximum extent permitted by law.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            7. Service Changes
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We may update, modify, or terminate our services from time to time. We will notify 
            users of significant changes through the Site.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            8. Account Security
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            You are responsible for maintaining the security of accounts created through the Site. 
            Keep your passwords confidential and do not share account information with others.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            9. Termination
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We reserve the right to terminate or suspend your access to the Site if you violate 
            these terms of use.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            10. Governing Law
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            These terms of use are governed by the laws of the country where you access the Site. 
            Any disputes will be resolved in the appropriate courts.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginTop: "2.5rem", marginBottom: "1rem", color: "#1a4d2e" }}>
            11. Contact
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            For questions about these terms of use, please contact us:
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>Email:</strong> <a href="mailto:contact@graftscope.com" style={{ color: "#1a4d2e" }}>contact@graftscope.com</a><br />
            <strong>Website:</strong> <a href="https://www.graftscope.com/blog" style={{ color: "#1a4d2e" }}>www.graftscope.com/blog</a>
          </p>
        </div>
      </div>
    </div>
  );
}
