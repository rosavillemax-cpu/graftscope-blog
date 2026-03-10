import Link from "next/link";
import { notFound } from "next/navigation";
import { getGermanArticlesByCategory, getGermanCategoryNameBySlug, getGermanCategorySlugs } from "@/lib/articles";
import Header from "@/app/components/Header";
import Ticker from "@/app/components/Ticker";
import CategoryArticleGrid from "@/app/components/CategoryArticleGrid";
import MiniNewsletter from "@/app/components/MiniNewsletter";
import SidebarBanner from "@/app/components/SidebarBanner";
import type { Metadata } from "next";
import React from "react";

const SITE_URL = "https://graftscope.org";

const CATEGORY_SLUG_TO_NAME: Record<string, string> = {
  "klinik-management": "Klinik Management",
  "patientenwachstum": "Patientenwachstum",
  "technologie": "Technologie",
  "marktanalyse": "Marktanalyse",
  "turkiye": "Türkiye Pazarı",
  global: "Global",
};

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = getGermanCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = getGermanCategoryNameBySlug(slug);
  if (!categoryName) return { title: "Kategorie nicht gefunden" };

  const url = `${SITE_URL}/de/category/${slug}`;

  return {
    title: `${categoryName} Artikel | Graftscope`,
    description: `Artikel und Einblicke für ${categoryName} für Haartransplantationskliniken.`,
    openGraph: {
      title: `${categoryName} Artikel | Graftscope`,
      description: `Artikel und Einblicke für ${categoryName} für Haartransplantationskliniken.`,
      url,
      siteName: "Graftscope",
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CategoryPageDE({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = getGermanCategoryNameBySlug(slug);
  if (!categoryName) notFound();

  const articles = getGermanArticlesByCategory(categoryName);
  const count = articles.length;
  const featured = articles[0];
  const restArticles = articles.slice(1);

  const authorCounts = new Map<string, number>();
  for (const article of articles) {
    const name = article.frontmatter.author;
    authorCounts.set(name, (authorCounts.get(name) ?? 0) + 1);
  }
  const authors = Array.from(authorCounts.entries());

  const relatedCategories = Object.entries(CATEGORY_SLUG_TO_NAME).filter(
    ([key]) => key !== slug
  );

  return (
    <div className="editorial-page">
      <Header />
      <Ticker />

      <main className="home-main">
        <section className="category-hero">
          {featured && (
            <article className="category-hero-featured">
              <span className="article-card-category">
                <span className="article-card-category-line" aria-hidden />
                {featured.frontmatter.category}
              </span>
              <h2 className="category-hero-featured-title">
                <Link href={`/de/articles/${featured.slug}`}>
                  {featured.frontmatter.title}
                </Link>
              </h2>
              <p className="category-hero-featured-excerpt">
                {featured.frontmatter.excerpt}
              </p>
              <footer className="category-hero-meta">
                <span>{featured.frontmatter.author}</span>
                <span className="meta-sep">·</span>
                <time dateTime={featured.frontmatter.date}>
                  {new Date(featured.frontmatter.date).toLocaleDateString(
                    "de-DE",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
                <span className="meta-sep">·</span>
                <span>{featured.frontmatter.readTime}</span>
              </footer>
              <div className="article-card-action">
                <Link href={`/de/articles/${featured.slug}`} className="article-card-link">
                  Weiterlesen →
                </Link>
              </div>
            </article>
          )}
          {count === 0 && (
            <p className="category-empty">
              <span className="category-empty-icon" aria-hidden>
                ⌛
              </span>
              <span>Noch keine Artikel vorhanden.</span>
            </p>
          )}
        </section>

        <div className="content-layout">
          <div className="content-main">
            {restArticles.length > 0 && (
              <section className="category-articles-section">
                <CategoryArticleGrid articles={restArticles} />
              </section>
            )}
          </div>
          <aside className="content-sidebar">
            <a href="/de/demo" target="_blank">
              <img src="/sidebar-de.jpeg" alt="GraftScope Demo" style={{ width: '100%', borderRadius: '12px', cursor: 'pointer' }} />
            </a>
            <p style={{ fontSize: '0.75rem', color: '#7a7060', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
              Exklusiv für Haartransplantationskliniken entwickelt
            </p>
            <SidebarBanner />
            <MiniNewsletter />
            <div className="sidebar-section">
              <h4 className="sidebar-heading">Autoren in dieser Kategorie</h4>
              {authors.length === 0 ? (
                <p className="sidebar-empty">Noch keine Autoren vorhanden.</p>
              ) : (
                <ul className="sidebar-author-list">
                  {authors.map(([name, articleCount]) => (
                    <li key={name} className="sidebar-author-item">
                      <span className="sidebar-author-name">{name}</span>
                      <span className="sidebar-author-count">
                        {articleCount} Artikel
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Verwandte Kategorien</h4>
              <ul className="sidebar-related-list">
                {relatedCategories.map(([key, name]) => (
                  <li key={key} className="sidebar-related-item">
                    <Link href={`/de/category/${key}`} className="sidebar-related-link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Branchenübersicht</h4>
              <div className="sidebar-stats">
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">2.4K+</span>
                  <span className="sidebar-stat-label">Kliniken (DE)</span>
                </div>
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">%15</span>
                  <span className="sidebar-stat-label">Jährliches Wachstum</span>
                </div>
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">~400K</span>
                  <span className="sidebar-stat-label">Eingriffe / Jahr</span>
                </div>
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">%62</span>
                  <span className="sidebar-stat-label">Internationale Patienten</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

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
