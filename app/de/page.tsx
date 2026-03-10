import { getAllGermanArticles } from "@/lib/articles";
import Header from "../components/Header";
import Ticker from "../components/Ticker";
import HomePageContent from "../components/HomePageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graftscope | Leitfaden für Haartransplantationskliniken",
  description: "Klinikmanagement, Patientenwachstum und Marktanalysen für Haartransplantationskliniken. Experteninhalte für Türkei, UK und Deutschland.",
  openGraph: {
    title: "Graftscope | Leitfaden für Haartransplantationskliniken",
    description: "Klinikmanagement, Patientenwachstum und Marktanalysen für Haartransplantationskliniken. Experteninhalte für Türkei, UK und Deutschland.",
    url: "https://www.graftscope.org/de",
    siteName: "Graftscope",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.org/de",
  },
};

export default function HomePageDE() {
  const articles = getAllGermanArticles();

  return (
    <div className="editorial-page">
      <Header />
      <Ticker />
      <HomePageContent articles={articles} />
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-logo">Graftscope</p>
          <p className="footer-tagline">
            Leitfaden und Einblicke für Haartransplantationskliniken.
          </p>
        </div>
      </footer>
    </div>
  );
}
