import Link from "next/link";
import { notFound } from "next/navigation";
import { getEnglishArticleBySlug, getEnglishArticleSlugs, getEnglishArticlesByCategory } from "@/lib/articles";
import Header from "@/app/components/Header";
import FloatingCTA from "@/app/components/FloatingCTA";
import MarkdownWithCTA from "@/app/components/MarkdownWithCTA";
import ArticleCTA from "@/app/components/ArticleCTA";
import type { Metadata } from "next";

const SITE_URL = "https://graftscope.org";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getEnglishArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getEnglishArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  const { frontmatter } = article;
  const url = `${SITE_URL}/en/articles/${slug}`;

  return {
    title: `${frontmatter.title} | Graftscope`,
    description: frontmatter.excerpt,
    openGraph: {
      title: `${frontmatter.title} | Graftscope`,
      description: frontmatter.excerpt,
      url,
      siteName: "Graftscope",
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ArticlePageEN({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getEnglishArticleBySlug(slug);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const articleUrl = `${SITE_URL}/en/articles/${slug}`;

  // Get related articles from the same category
  const relatedArticles = getEnglishArticlesByCategory(frontmatter.category)
    .filter(a => a.slug !== slug) // Exclude current article
    .slice(0, 3); // Get max 3 articles

  // If less than 3 articles, fill with random articles
  if (relatedArticles.length < 3) {
    const allArticles = getEnglishArticleSlugs().map(s => getEnglishArticleBySlug(s)).filter(a => a !== null);
    const randomArticles = allArticles
      .filter(a => a.slug !== slug && a.frontmatter.category !== frontmatter.category)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...randomArticles);
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: { 
      "@type": "Organization", 
      name: "Graftscope", 
      logo: "https://www.graftscope.org/graftscope-logo.png" 
    },
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    url: `https://www.graftscope.org/en/articles/${slug}`,
    "inLanguage": "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.graftscope.org/en/articles/${slug}` }
  };

  return (
    <div className="editorial-page">
      <Header />
      <main className="article-main">
        <article className="article-content">
          <div className="article-header">
            <div className="article-meta">
              <span className="article-category">{frontmatter.category}</span>
              <span className="article-date">
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="article-title">{frontmatter.title}</h1>
            <div className="article-author-info">
              <span className="article-author">By {frontmatter.author}</span>
              <span className="article-read-time">{frontmatter.readTime}</span>
            </div>
          </div>

          <div className="article-body">
            <MarkdownWithCTA content={content} />
          </div>
          
          <ArticleCTA />

          <div className="article-footer">
            <Link href="/en" className="article-back-link">
              ← All Articles
            </Link>
          </div>
        </article>

        {/* Banner Section */}
        <div className="banner-section">
          <div className="banner-container">
            <a href="https://www.graftscope.com" target="_blank" rel="noopener noreferrer" className="banner-link">
              <img 
                src="/Banner.png" 
                alt="GraftScope" 
                className="banner-image"
              />
            </a>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <section className="related-articles">
            <div className="related-articles-container">
              <h2 className="related-articles-title">You Might Also Like</h2>
              <div className="related-articles-grid">
                {relatedArticles.map((relatedArticle) => (
                  <article key={relatedArticle.slug} className="related-article-card">
                    <span className="related-article-category">
                      {relatedArticle.frontmatter.category}
                    </span>
                    <h3 className="related-article-title">
                      <Link href={`/en/articles/${relatedArticle.slug}`}>
                        {relatedArticle.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="related-article-excerpt">
                      {relatedArticle.frontmatter.excerpt}
                    </p>
                    <div className="related-article-meta">
                      <span>{relatedArticle.frontmatter.author}</span>
                      <span className="meta-sep">·</span>
                      <span>{relatedArticle.frontmatter.readTime}</span>
                    </div>
                    <div className="related-article-action">
                      <Link href={`/en/articles/${relatedArticle.slug}`} className="related-article-link">
                        Continue Reading →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <aside className="article-sidebar">
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
        </aside>
      </main>

      <FloatingCTA />

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-logo">Graftscope</p>
          <p className="footer-tagline">
            Insights and guides for hair transplant clinics.
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
