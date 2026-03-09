import { getAllEnglishArticles } from "@/lib/articles";
import Header from "../components/Header";
import Ticker from "../components/Ticker";
import HomePageContentEN from "../components/HomePageContentEN";
import Newsletter from "../components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graftscope | Guide for Hair Transplant Clinics",
  description: "Clinic management, patient growth and market analysis for hair transplant clinics. Expert content for Turkey, UK and Germany markets.",
  openGraph: {
    title: "Graftscope | Guide for Hair Transplant Clinics",
    description: "Clinic management, patient growth and market analysis for hair transplant clinics. Expert content for Turkey, UK and Germany markets.",
    url: "https://www.graftscope.org/en",
    siteName: "Graftscope",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.org/en",
  },
};

export default function HomePageEN() {
  const articles = getAllEnglishArticles();

  return (
    <div className="editorial-page">
      <Header />
      <Ticker />
      <HomePageContentEN articles={articles} />
      <div id="newsletter">
        <Newsletter />
      </div>
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
