"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");
  const isTurkishPage = !isEnglishPage;
  
  const isCategoryPage = isEnglishPage 
    ? pathname?.startsWith("/en/category/")
    : pathname?.startsWith("/kategori/");
  
  const activeSlug = isCategoryPage 
    ? (isEnglishPage 
        ? pathname?.replace("/en/category/", "") 
        : pathname?.replace("/kategori/", "")) ?? null
    : null;

  const navItems = isEnglishPage ? EN_NAV_ITEMS : TR_NAV_ITEMS;
  const currentDate = new Date().toLocaleDateString(isEnglishPage ? "en-US" : "tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const homeHref = isEnglishPage ? "/en" : "/";
  const demoHref = isEnglishPage ? "/en/demo" : "/demo";
  const tagline = isEnglishPage 
    ? "Hair Transplant Clinic Management Guide"
    : "Saç ekimi klinikleri için operasyonel rehber";
  
  const guideBtnText = isEnglishPage ? "Industry Guide" : "Sektör Rehberi";
  const contactBtnText = isEnglishPage ? "Contact Us" : "Bize Ulaşın";

  return (
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
            <a 
              href="/de" 
              className="lang-link" 
              aria-label="Deutsch"
              style={{ opacity: 0.5, cursor: "not-allowed" }}
            >
              DE
            </a>
          </span>
          <span className="top-bar-tagline">
            {tagline}
          </span>
          <Link href={homeHref} className="header-btn header-btn-outline">
            {guideBtnText}
          </Link>
          <span className="top-bar-btn-sep" aria-hidden />
          <Link href={demoHref} className="header-btn header-btn-solid">
            {contactBtnText}
          </Link>
        </div>
      </div>
      <div className="masthead-brand">
        <Link href={homeHref} className="masthead-logo">
          Graftscope
        </Link>
      </div>
      <nav className="editorial-nav">
        <div className="editorial-nav-inner">
          {navItems.map((item) => {
            const isActive =
              (item.slug === null && (isEnglishPage ? pathname === "/en" : pathname === "/")) ||
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
  );
}
