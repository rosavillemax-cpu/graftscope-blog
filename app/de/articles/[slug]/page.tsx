import Link from "next/link";
import { notFound } from "next/navigation";
import { getGermanArticleBySlug, getGermanArticleSlugs, getGermanArticlesByCategory } from "@/lib/articles";
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
  const slugs = getGermanArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getGermanArticleBySlug(slug);
  if (!article) return { title: "Artikel nicht gefunden" };

  const { frontmatter } = article;
  const url = `${SITE_URL}/de/articles/${slug}`;

  return {
    title: `${frontmatter.title} | Graftscope`,
    description: frontmatter.excerpt,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: `${frontmatter.title} | Graftscope`,
      description: frontmatter.excerpt,
      url,
      siteName: "Graftscope",
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: [frontmatter.category],
      images: [{ url: `${SITE_URL}/og-image.jpg`, alt: frontmatter.title }],
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: url,
    },
    other: {
      "article:published_time": frontmatter.date,
      "article:section": frontmatter.category,
      "article:author": frontmatter.author,
    },
  };
}

export default async function ArticlePageDE({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getGermanArticleBySlug(slug);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const articleUrl = `${SITE_URL}/de/articles/${slug}`;

  // Get related articles from the same category
  const relatedArticles = getGermanArticlesByCategory(frontmatter.category)
    .filter(a => a.slug !== slug) // Exclude current article
    .slice(0, 3); // Get max 3 articles

  // If less than 3 articles, fill with random articles
  if (relatedArticles.length < 3) {
    const allArticles = getGermanArticleSlugs().map(s => getGermanArticleBySlug(s)).filter(a => a !== null);
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
    url: `https://www.graftscope.org/de/articles/${slug}`,
    "inLanguage": "de",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.graftscope.org/de/articles/${slug}` }
  };

  return (
    <div className="editorial-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      
      <main className="article-main">
        <article className="article-content">
          <div className="article-header">
            <div className="article-meta">
              <span className="article-category">{frontmatter.category}</span>
              <span className="article-date">
                {new Date(frontmatter.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="article-title">{frontmatter.title}</h1>
            <div className="article-author-info">
              <span className="article-author">Von {frontmatter.author}</span>
              <span className="article-read-time">{frontmatter.readTime}</span>
            </div>
          </div>

          <div className="article-body">
            <MarkdownWithCTA content={content} />
          </div>
          
          <ArticleCTA />

          <div className="article-footer">
            <Link href="/de" className="article-back-link">
              ← Alle Artikel
            </Link>
          </div>
        </article>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <p className="footer-logo">Graftscope</p>
            <p className="footer-tagline">
              Leitfaden und Einblicke für Haartransplantationskliniken.
            </p>
          </div>
        </footer>

        {relatedArticles.length > 0 && (
          <section className="related-articles">
            <div className="related-articles-container">
              <h2 className="related-articles-title">Das könnten Sie auch interessieren</h2>
              <div className="related-articles-grid">
                {relatedArticles.map((relatedArticle) => (
                  <article key={relatedArticle.slug} className="related-article-card">
                    <span className="related-article-category">
                      {relatedArticle.frontmatter.category}
                    </span>
                    <h3 className="related-article-title">
                      <Link href={`/de/articles/${relatedArticle.slug}`}>
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
                      <Link href={`/de/articles/${relatedArticle.slug}`} className="related-article-link">
                        Weiterlesen →
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
            <a href="/de/demo" target="_blank">
              <img src="/sidebar-de.jpeg" alt="GraftScope Demo" style={{ width: '100%', borderRadius: '12px', cursor: 'pointer' }} />
            </a>
            <p style={{ fontSize: '0.75rem', color: '#7a7060', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
              Exklusiv für Haartransplantationskliniken entwickelt
            </p>
          </div>
        </aside>
      </main>

      <FloatingCTA />

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
