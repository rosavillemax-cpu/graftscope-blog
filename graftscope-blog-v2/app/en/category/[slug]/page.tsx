import Link from "next/link";
import { notFound } from "next/navigation";
import { getEnglishArticlesByCategory, getEnglishCategoryNameBySlug, getEnglishCategorySlugs } from "@/lib/articles";
import Header from "@/app/components/Header";
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
    title: `${categoryName} | Graftscope`,
    description: `Articles and insights about ${categoryName} for hair transplant clinics.`,
    openGraph: {
      title: `${categoryName} | Graftscope`,
      description: `Articles and insights about ${categoryName} for hair transplant clinics.`,
      url,
      siteName: "Graftscope",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CategoryPageEN({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = getEnglishCategoryNameBySlug(slug);
  const articles = getEnglishArticlesByCategory(slug);

  if (!categoryName) notFound();

  const featured = articles[0];
  const restArticles = articles.slice(1);

  return (
    <div className="editorial-page">
      <Header />
      <main className="home-main">
        <div className="category-hero">
          <div className="category-hero-header">
            <h1 className="category-hero-title">{categoryName}</h1>
            <span className="category-hero-count">{articles.length} articles</span>
          </div>
          {featured && (
            <div className="category-hero-featured">
              <h2 className="category-hero-featured-title">
                <Link href={`/en/articles/${featured.slug}`}>
                  {featured.frontmatter.title}
                </Link>
              </h2>
              <p className="category-hero-featured-excerpt">
                {featured.frontmatter.excerpt}
              </p>
              <div className="category-hero-meta">
                <span>{featured.frontmatter.author}</span>
                <span className="meta-sep">·</span>
                <span>{featured.frontmatter.readTime} min read</span>
              </div>
            </div>
          )}
        </div>

        <div className="content-layout">
          <div className="content-main">
            {restArticles.length > 0 && (
              <div className="category-articles-section">
                <div className="category-articles-grid">
                  {restArticles.map((article) => (
                    <div key={article.slug} className="category-card">
                      <h3 className="category-card-title">
                        <Link href={`/en/articles/${article.slug}`}>
                          {article.frontmatter.title}
                        </Link>
                      </h3>
                      <div className="category-card-meta">
                        <span>{article.frontmatter.author}</span>
                        <span className="meta-sep">·</span>
                        <span>{article.frontmatter.readTime} min</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="content-sidebar">
            <div className="sidebar-cta">
              <h3 className="sidebar-cta-title">
                Manage Your Clinic with AI
              </h3>
              <p className="sidebar-cta-text">
                Operational efficiency and patient experience on one platform.
              </p>
              <Link href="/en/demo" className="sidebar-cta-btn">
                Request Demo
              </Link>
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Categories</h4>
              <div className="sidebar-tags">
                {getEnglishCategorySlugs().map((categorySlug) => {
                  const name = getEnglishCategoryNameBySlug(categorySlug);
                  const isActive = categorySlug === slug;
                  return (
                    <Link
                      key={categorySlug}
                      href={`/en/category/${categorySlug}`}
                      className={`sidebar-tag ${
                        isActive ? "sidebar-tag-active" : ""
                      }`}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
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
