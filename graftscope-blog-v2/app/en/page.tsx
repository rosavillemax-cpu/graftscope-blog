import { getAllEnglishArticles } from "@/lib/articles";
import Header from "@/app/components/Header";
import Ticker from "@/app/components/Ticker";
import HomePageContentEN from "@/app/components/HomePageContentEN";

export default function HomePageEN() {
  const articles = getAllEnglishArticles();

  return (
    <div className="editorial-page">
      <Header />
      <Ticker />
      <HomePageContentEN articles={articles} />
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
