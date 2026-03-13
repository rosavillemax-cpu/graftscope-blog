"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import { getPricingUrl } from "@/lib/getPricingUrl";

const TR_NAV_ITEMS: { label: string; href: string; slug: string | null }[] = [
  { label: "Tümü", href: "/", slug: null },
  { label: "Klinik Yönetimi", href: "/kategori/klinik-yonetimi", slug: "klinik-yonetimi" },
  { label: "Hasta Büyümesi", href: "/kategori/hasta-buyumesi", slug: "hasta-buyumesi" },
  { label: "Teknoloji", href: "/kategori/teknoloji", slug: "teknoloji" },
  { label: "Pazar Analizi", href: "/kategori/pazar-analizi", slug: "pazar-analizi" },
  { label: "Türkiye", href: "/kategori/turkiye", slug: "turkiye" },
  { label: "Global", href: "/kategori/global", slug: "global" },
];

const EN_NAV_ITEMS: { label: string; href: string; slug: string | null }[] = [
  { label: "All", href: "/en", slug: null },
  { label: "Clinic Management", href: "/en/category/clinic-management", slug: "clinic-management" },
  { label: "Patient Growth", href: "/en/category/patient-growth", slug: "patient-growth" },
  { label: "Technology", href: "/en/category/technology", slug: "technology" },
  { label: "Market Analysis", href: "/en/category/market-analysis", slug: "market-analysis" },
  { label: "Türkiye", href: "/en/category/turkiye", slug: "turkiye" },
  { label: "Global", href: "/en/category/global", slug: "global" },
];

const DE_NAV_ITEMS: { label: string; href: string; slug: string | null }[] = [
  { label: "Alle", href: "/de", slug: null },
  { label: "Klinik Management", href: "/de/category/klinik-management", slug: "klinik-management" },
  { label: "Patientenwachstum", href: "/de/category/patientenwachstum", slug: "patientenwachstum" },
  { label: "Technologie", href: "/de/category/technologie", slug: "technologie" },
  { label: "Marktanalyse", href: "/de/category/marktanalyse", slug: "marktanalyse" },
  { label: "Türkiye", href: "/de/category/turkiye", slug: "turkiye" },
  { label: "Global", href: "/de/category/global", slug: "global" },
];

export default function Header() {
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");
  const isGermanPage = pathname?.startsWith("/de");
  const isTurkishPage = !isEnglishPage && !isGermanPage;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const isCategoryPage = isEnglishPage 
    ? pathname?.startsWith("/en/category/")
    : isGermanPage
    ? pathname?.startsWith("/de/category/")
    : pathname?.startsWith("/kategori/");
  
  const activeSlug = isCategoryPage 
    ? (isEnglishPage 
        ? pathname?.replace("/en/category/", "") 
        : isGermanPage
        ? pathname?.replace("/de/category/", "")
        : pathname?.replace("/kategori/", "")) ?? null
    : null;

  const navItems = isEnglishPage ? EN_NAV_ITEMS : isGermanPage ? DE_NAV_ITEMS : TR_NAV_ITEMS;
  
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString(
      isEnglishPage ? "en-US" : isGermanPage ? "de-DE" : "tr-TR", 
      { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    ));
  }, [isEnglishPage, isGermanPage]);

  const homeHref = isEnglishPage ? "/en" : isGermanPage ? "/de" : "/";
  const demoHref = isEnglishPage ? "/en/demo" : isGermanPage ? "/de/demo" : "/demo";
  const pricingHref = getPricingUrl(isEnglishPage ? "en" : isGermanPage ? "de" : "tr");
  const tagline = isEnglishPage 
    ? "Hair Transplant Clinic Management Guide"
    : isGermanPage
    ? "Leitfaden für Haartransplantationskliniken"
    : "Saç ekimi klinikleri için operasyonel rehber";
  
  const guideBtnText = isEnglishPage ? "Industry Guide" : isGermanPage ? "Branchenführer" : "Sektör Rehberi";
  const pricingBtnText = isEnglishPage ? "Pricing →" : isGermanPage ? "Preise →" : "Fiyatlandırma →";
  const demoBtnText = isEnglishPage ? "Free Demo →" : isGermanPage ? "Kostenlose Demo →" : "Ücretsiz Demo →";
  const newsletterBtnText = isEnglishPage ? "Subscribe to Newsletter" : isGermanPage ? "Newsletter abonnieren" : "Bültene Abone Ol";

  return (
    <>
      <header className="editorial-header">
        <div className="top-bar">
          <div className="top-bar-inner">
            <span className="top-bar-date">{currentDate}</span>
            <span className="top-bar-lang">
              <Link 
                href="/" 
                className={`lang-link ${isTurkishPage ? "lang-active" : ""}`}
                aria-label="Turkish"
              >
                TR
              </Link>
              <span className="lang-sep">·</span>
              <Link 
                href="/en" 
                className={`lang-link ${isEnglishPage ? "lang-active" : ""}`}
                aria-label="English"
              >
                EN
              </Link>
              <span className="lang-sep">·</span>
              <Link 
                href="/de" 
                className={`lang-link ${isGermanPage ? "lang-active" : ""}`}
                aria-label="Deutsch"
              >
                DE
              </Link>
            </span>
            <span className="top-bar-tagline">
              {tagline}
            </span>
            <button 
              className="header-search-btn" 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              🔍
            </button>
            <a 
              href="#newsletter" 
              className="newsletter-header-btn"
              style={{
                fontSize: '0.8rem',
                padding: '4px 12px',
                border: '1px solid #1a6b4a',
                color: '#1a6b4a',
                background: 'transparent',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a6b4a';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1a6b4a';
              }}
            >
              {newsletterBtnText}
            </a>
            <Link href={homeHref} className="header-btn header-btn-outline">
              {guideBtnText}
            </Link>
            <span className="top-bar-btn-sep" aria-hidden />
            <a 
              href={pricingHref} 
              target="_blank" 
              rel="noopener noreferrer"
              className="header-btn header-btn-outline"
            >
              {pricingBtnText}
            </a>
            <span className="top-bar-btn-sep" aria-hidden />
            <a 
              href="https://www.graftscope.com/demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="header-btn header-btn-solid"
            >
              {demoBtnText}
            </a>
          </div>
        </div>
        <div className="masthead-brand">
          <Link href={homeHref} className="masthead-logo">
            Graftscope
          </Link>
          <div className="masthead-logo-insights">insights</div>
          <div className="masthead-tagline">
            {isEnglishPage ? "Hair Transplant Clinic Management Guide" : 
             isGermanPage ? "Leitfaden für Haartransplantationskliniken" : 
             "Saç Ekimi Klinikleri İçin Rehber"}
          </div>
        </div>
        <nav className="editorial-nav">
          <div className="editorial-nav-inner">
            {navItems.map((item) => {
              const isActive =
                (item.slug === null && (isEnglishPage ? pathname === "/en" : isGermanPage ? pathname === "/de" : pathname === "/")) ||
                (item.slug !== null && activeSlug === item.slug);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`editorial-nav-link ${isActive ? "editorial-nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
