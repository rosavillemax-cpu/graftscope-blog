"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS: { label: string; href: string; slug: string | null }[] = [
  { label: "Tümü", href: "/", slug: null },
  { label: "Klinik Yönetimi", href: "/kategori/klinik-yonetimi", slug: "klinik-yonetimi" },
  { label: "Hasta Büyümesi", href: "/kategori/hasta-buyumesi", slug: "hasta-buyumesi" },
  { label: "Teknoloji", href: "/kategori/teknoloji", slug: "teknoloji" },
  { label: "Pazar Analizi", href: "/kategori/pazar-analizi", slug: "pazar-analizi" },
  { label: "Türkiye", href: "/kategori/turkiye", slug: "turkiye" },
  { label: "Global", href: "/kategori/global", slug: "global" },
];

export default function Header() {
  const pathname = usePathname();
  const isCategoryPage = pathname?.startsWith("/kategori/");
  const activeSlug = isCategoryPage ? pathname?.replace("/kategori/", "") ?? null : null;

  const today = new Date().toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="editorial-header">
      <div className="top-bar">
        <div className="top-bar-inner">
          <span className="top-bar-date">{today}</span>
          <span className="top-bar-lang">
            <span className="lang-active">TR</span>
            <span className="lang-sep">·</span>
            <a href="/en" className="lang-link" aria-label="English">EN</a>
            <span className="lang-sep">·</span>
            <a href="/de" className="lang-link" aria-label="Deutsch">DE</a>
          </span>
          <span className="top-bar-tagline">
            Saç ekimi klinikleri için operasyonel rehber
          </span>
          <Link href="/" className="header-btn header-btn-outline">
            Sektör Rehberi
          </Link>
          <span className="top-bar-btn-sep" aria-hidden />
          <a
            href="mailto:contact@graftscope.com"
            className="header-btn header-btn-solid"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
      <div className="masthead-brand">
        <Link href="/" className="masthead-logo">
          Graftscope
        </Link>
      </div>
      <nav className="editorial-nav">
        <div className="editorial-nav-inner">
          {NAV_ITEMS.map((item) => {
            const isActive =
              (item.slug === null && pathname === "/") ||
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
