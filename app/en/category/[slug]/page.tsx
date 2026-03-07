import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  getEnglishArticlesByCategory, 
  getEnglishCategoryNameBySlug, 
  getEnglishCategorySlugs 
} from "@/lib/articles";
import Header from "@/app/components/Header";
import Ticker from "@/app/components/Ticker";
import type { Metadata } from "next";

const SITE_URL = "https://graftscope.org";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getEnglishCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = getEnglishCategoryNameBySlug(slug);
  if (!categoryName) return { title: "Category Not Found" };

  const url = `${SITE_URL}/en/category/${slug}`;

  return {
    title: `${categoryName} Articles | Graftscope`,
    openGraph: {
      title: `${categoryName} Articles | Graftscope`,
      description: `Articles and insights about ${categoryName} for hair transplant clinics.`,
      url,
      siteName: "Graftscope",
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CategoryPageEN({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = getEnglishCategoryNameBySlug(slug);
  
  if (!categoryName) notFound();
  
  const articles = getEnglishArticlesByCategory(categoryName);

  const featured = articles[0];
  const restArticles = articles.slice(1);

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
                <Link href={`/en/articles/${featured.slug}`}>
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
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
                <span className="meta-sep">·</span>
                <span>{featured.frontmatter.readTime} min</span>
              </footer>
              <div className="article-card-action">
                <Link href={`/en/articles/${featured.slug}`} className="article-card-link">
                  Continue Reading →
                </Link>
              </div>
            </article>
          )}
          {articles.length === 0 && (
            <p className="category-empty">
              <span className="category-empty-icon" aria-hidden>
                ⌛
              </span>
              <span>No articles yet.</span>
            </p>
          )}
        </section>

        <div className="content-layout">
          <div className="content-main">
            {restArticles.length > 0 && (
              <section className="category-articles-section">
                <div className="articles-grid">
                  {restArticles.map((article) => (
                    <article key={article.slug} className="article-card">
                      <span className="article-card-category">
                        <span className="article-card-category-line" aria-hidden />
                        {article.frontmatter.category}
                      </span>
                      <h2 className="article-card-title">
                        <Link href={`/en/articles/${article.slug}`}>
                          {article.frontmatter.title}
                        </Link>
                      </h2>
                      <p className="article-card-excerpt">{article.frontmatter.excerpt}</p>
                      <footer className="article-card-meta">
                        <span>{article.frontmatter.author}</span>
                        <span className="meta-sep">·</span>
                        <span>{article.frontmatter.readTime} min</span>
                      </footer>
                      <div className="article-card-action">
                        <Link href={`/en/articles/${article.slug}`} className="article-card-link">
                          Continue Reading →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
          <aside className="content-sidebar">
            <div className="sidebar-cta">
              <h3 className="sidebar-cta-title">
                Ready to take your clinic to the next level?
              </h3>
              <p className="sidebar-cta-text">
                Operational efficiency and patient experience on one platform.
              </p>
              <a href="https://graftscope.com" className="sidebar-cta-btn">
                Request Demo
              </a>
            </div>
          </aside>
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
