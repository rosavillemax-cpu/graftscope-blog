import Header from "@/app/components/Header";
import DemoFormEN from "@/app/components/DemoFormEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Free Demo – Hair Transplant Clinic Software | ClinixGlow",
  description: "Request a free demo of ClinixGlow - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
  openGraph: {
    title: "Request Free Demo – Hair Transplant Clinic Software | ClinixGlow",
    description: "Request a free demo of ClinixGlow - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
    url: "https://www.clinixglow.com/blog/en/demo",
    siteName: "Clinixglow",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.clinixglow.com/blog/en/demo",
  },
};

export default function DemoPageEN() {
  return (
    <div className="editorial-page">
      <Header />
      <main className="demo-main">
        <div className="demo-container">
          <DemoFormEN />
        </div>
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-logo">Clinixglow</p>
          <p className="footer-tagline">
            Insights and guides for hair transplant clinics.
          </p>
        </div>
      </footer>
    </div>
  );
}
