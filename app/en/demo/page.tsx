import Header from "@/app/components/Header";
import DemoFormEN from "@/app/components/DemoFormEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Free Demo for Your Hair Transplant Clinic | Graftscope",
  description: "Transform your hair transplant clinic with AI-powered management. Schedule a free demo to see how Graftscope can optimize your operations.",
  openGraph: {
    title: "Request a Free Demo for Your Hair Transplant Clinic | Graftscope",
    description: "Transform your hair transplant clinic with AI-powered management. Schedule a free demo to see how Graftscope can optimize your operations.",
    url: "https://www.graftscope.org/en/demo",
    siteName: "Graftscope",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.org/en/demo",
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
          <p className="footer-logo">Graftscope</p>
          <p className="footer-tagline">
            Insights and guides for hair transplant clinics.
          </p>
        </div>
      </footer>
    </div>
  );
}
