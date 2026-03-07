import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  getEnglishArticlesByCategory, 
  getEnglishCategoryNameBySlug, 
  getEnglishCategorySlugs 
} from "@/lib/articles";
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
      <main className="home-main">
        <div className="page-header">
          <h1 className="page-title">{categoryName}</h1>
          <p className="page-description">
            Articles and insights about {categoryName} for hair transplant clinics.
          </p>
        </div>

        <div className="content-layout">
          <div className="content-main">
            {featured && (
              <article className="featured-article">
                <Link href={`/en/articles/${featured.slug}`} className="featured-article-link">
                  <div className="featured-article-content">
                    <div className="featured-article-meta">
                      <span className="featured-article-date">
                        {new Date(featured.frontmatter.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="featured-article-author">{featured.frontmatter.author}</span>
                      <span className="featured-article-read-time">{featured.frontmatter.readTime} min read</span>
                    </div>
                    <h2 className="featured-article-title">{featured.frontmatter.title}</h2>
                    <p className="featured-article-excerpt">{featured.frontmatter.excerpt}</p>
                  </div>
                </Link>
              </article>
            )}

            <div className="article-list">
              {restArticles.map((article) => (
                <article key={article.slug} className="list-article">
                  <Link href={`/en/articles/${article.slug}`} className="list-article-link">
                    <div className="list-article-content">
                      <div className="list-article-meta">
                        <span className="list-article-date">
                          {new Date(article.frontmatter.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="list-article-author">{article.frontmatter.author}</span>
                        <span className="list-article-read-time">{article.frontmatter.readTime} min read</span>
                      </div>
                      <h3 className="list-article-title">{article.frontmatter.title}</h3>
                      <p className="list-article-excerpt">{article.frontmatter.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <aside className="content-sidebar">
            <div className="sidebar-cta">
              <h3 className="sidebar-cta-title">
                Ready to take your clinic to the next level?
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
