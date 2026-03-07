"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <div className="editorial-page">
      <Header />
      <main className="not-found-main">
        <div className="not-found-content">
          <div className="not-found-404">404</div>
          <h1 className="not-found-title">
            {isEnglishPage ? "Page Not Found" : "Sayfa Bulunamadı"}
          </h1>
          <p className="not-found-subtitle">
            {isEnglishPage 
              ? "The page you're looking for may have been moved or removed."
              : "Aradığınız sayfa taşınmış veya kaldırılmış olabilir."
            }
          </p>
          <div className="not-found-actions">
            <Link href={isEnglishPage ? "/en" : "/"} className="not-found-btn not-found-btn-primary">
              {isEnglishPage ? "Back to Home" : "Ana Sayfaya Dön"}
            </Link>
            <button onClick={openSearch} className="not-found-btn not-found-btn-secondary">
              {isEnglishPage ? "Search Articles" : "Makale Ara"}
            </button>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Search Modal */}
      {isSearchOpen && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <div className="search-input-wrapper">
                <input
                  id="search-input"
                  type="text"
                  className="search-input"
                  placeholder={isEnglishPage ? "Search articles..." : "Makaleleri ara..."}
                  autoFocus
                />
                <button className="search-input-btn" aria-label="Search">
                  🔍
                </button>
              </div>
              <button className="search-close-btn" onClick={closeSearch}>
                ×
              </button>
            </div>
            <div className="search-results">
              <div className="search-no-results">
                {isEnglishPage ? "Type to search articles..." : "Makaleleri aramak için yazın..."}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
