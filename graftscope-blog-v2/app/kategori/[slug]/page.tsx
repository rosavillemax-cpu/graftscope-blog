import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCategoryNameBySlug,
  getArticlesByCategory,
  getCategorySlugs,
  CATEGORY_SLUG_TO_NAME,
} from "@/lib/articles";
import Header from "@/app/components/Header";
import Ticker from "@/app/components/Ticker";
import CategoryArticleGrid from "@/app/components/CategoryArticleGrid";

const SITE_URL = "https://graftscope.org";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "klinik-yonetimi":
    "Saç ekim kliniği operasyonları, randevu yönetimi, ekip ve CRM stratejileri.",
  "hasta-buyumesi":
    "Hasta çekme, referans programları, yorum yönetimi ve büyüme stratejileri.",
  teknoloji:
    "Dijital dönüşüm, yapay zeka ve saç ekim klinikleri için yazılım çözümleri.",
  "pazar-analizi":
    "Global ve bölgesel saç ekim pazarı analizleri, trendler ve fırsatlar.",
  turkiye:
    "Türkiye saç ekim pazarı, İstanbul ve Antalya klinikleri, fiyat analizleri.",
  global:
    "Uluslararası saç ekim turizmi, medikal turizm trendleri ve global standartlar.",
};

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = getCategoryNameBySlug(slug);
  if (!categoryName) return { title: "Kategori Bulunamadı" };

  const description =
    CATEGORY_DESCRIPTIONS[slug] ??
    `${categoryName} kategorisindeki makaleler ve rehberler.`;
  const url = `${SITE_URL}/kategori/${slug}`;

  return {
    title: `${categoryName} Makaleleri`,
    description,
    openGraph: {
      title: `${categoryName} Makaleleri | Graftscope`,
      description,
      url,
      siteName: "Graftscope",
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = getCategoryNameBySlug(slug);
  if (!categoryName) notFound();

  const articles = getArticlesByCategory(categoryName);
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
          <header className="category-hero-header">
            <h1 className="category-hero-title">{categoryName}</h1>
            <p className="category-hero-count">
              {count} {count === 1 ? "Makale" : "Makale"}
            </p>
          </header>
          {featured && (
            <article className="category-hero-featured">
              <span className="article-card-category">
                <span className="article-card-category-line" aria-hidden />
                {featured.frontmatter.category}
              </span>
              <h2 className="category-hero-featured-title">
                <Link href={`/articles/${featured.slug}`}>
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
                    "tr-TR",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
                <span className="meta-sep">·</span>
                <span>{featured.frontmatter.readTime} dk</span>
              </footer>
            </article>
          )}
          {count === 0 && (
            <p className="category-empty">
              <span className="category-empty-icon" aria-hidden>
                ⌛
              </span>
              <span>Yakında içerik eklenecek.</span>
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
            <div className="sidebar-cta">
              <h3 className="sidebar-cta-title">
                Kliniğinizi Yapay Zeka ile Yönetin
              </h3>
              <p className="sidebar-cta-text">
                Operasyonel verimlilik ve hasta deneyimi için tek platform.
              </p>
              <Link href="/demo" className="sidebar-cta-btn">
                Demo Al
              </Link>
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Bu Kategorideki Yazarlar</h4>
              {authors.length === 0 ? (
                <p className="sidebar-empty">Henüz yazar yok.</p>
              ) : (
                <ul className="sidebar-author-list">
                  {authors.map(([name, articleCount]) => (
                    <li key={name} className="sidebar-author-item">
                      <span className="sidebar-author-name">{name}</span>
                      <span className="sidebar-author-count">
                        {articleCount} makale
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">İlgili Kategoriler</h4>
              <ul className="sidebar-related-list">
                {relatedCategories.map(([key, name]) => (
                  <li key={key} className="sidebar-related-item">
                    <Link href={`/kategori/${key}`} className="sidebar-related-link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Sektör Özeti</h4>
              <div className="sidebar-stats">
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">2.4K+</span>
                  <span className="sidebar-stat-label">Klinik (TR)</span>
                </div>
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">%15</span>
                  <span className="sidebar-stat-label">Yıllık büyüme</span>
                </div>
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">~400K</span>
                  <span className="sidebar-stat-label">İşlem / yıl</span>
                </div>
                <div className="sidebar-stat">
                  <span className="sidebar-stat-value">%62</span>
                  <span className="sidebar-stat-label">Uluslararası hasta</span>
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
            Saç ekimi klinikleri için içgörüler ve rehberler.
          </p>
        </div>
      </footer>
    </div>
  );
}
