import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticleSlugs, getArticlesByCategory } from "@/lib/articles";
import Header from "@/app/components/Header";
import FloatingCTA from "@/app/components/FloatingCTA";
import MarkdownWithCTA from "@/app/components/MarkdownWithCTA";
import ArticleCTA from "@/app/components/ArticleCTA";
import type { Metadata } from "next";

const SITE_URL = "https://graftscope.org";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Makale Bulunamadı" };

  const { frontmatter } = article;
  const url = `${SITE_URL}/articles/${slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url,
      siteName: "Graftscope",
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: [frontmatter.category],
      images: [{ url: OG_IMAGE, alt: frontmatter.title }],
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

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const articleUrl = `${SITE_URL}/articles/${slug}`;

  // Get related articles from the same category
  const relatedArticles = getArticlesByCategory(frontmatter.category)
    .filter(a => a.slug !== slug) // Exclude current article
    .slice(0, 3); // Get max 3 articles

  // If less than 3 articles, fill with random articles
  if (relatedArticles.length < 3) {
    const allArticles = getArticleSlugs().map(s => getArticleBySlug(s)).filter(a => a !== null);
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
    url: `https://www.graftscope.org/articles/${slug}`,
    "inLanguage": "tr",
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.graftscope.org/articles/${slug}` }
  };

  return (
    <div className="editorial-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      <main className="article-main">
        <article className="article-single">
          <header className="article-single-header">
            <span className="article-single-category">{frontmatter.category}</span>
            <h1 className="article-single-title">{frontmatter.title}</h1>
            <div className="article-single-meta">
              <span>{frontmatter.author}</span>
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{frontmatter.readTime}</span>
            </div>
          </header>
          <div className="article-single-body prose">
            <MarkdownWithCTA content={content} />
          </div>
          <ArticleCTA />
        </article>
        <p className="back-link-wrap">
          <Link href="/" className="back-link">
            ← Tüm yazılar
          </Link>
        </p>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-logo">Graftscope</p>
          <p className="footer-tagline">
            Saç ekimi klinikleri için içgörüler ve rehberler.
          </p>
        </div>
      </footer>

      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <div className="related-articles-container">
            <h2 className="related-articles-title">Bunları da Okuyun</h2>
            <div className="related-articles-grid">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.slug} className="related-article-card">
                  <span className="related-article-category">
                    {relatedArticle.frontmatter.category}
                  </span>
                  <h3 className="related-article-title">
                    <Link href={`/articles/${relatedArticle.slug}`}>
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
                    <Link href={`/articles/${relatedArticle.slug}`} className="related-article-link">
                      Devamını Oku →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-section">
        <div className="cta-content">
          <p className="cta-eyebrow">GRAFTSCOPE YAZILIMI</p>
          <h2 className="cta-heading">Kliniğinizi bir üst seviyeye taşımaya hazır mısınız?</h2>
          <p className="cta-subtext">Yapay zeka destekli klinik yönetimi, randevu sistemi ve hasta takibi — tek platformda.</p>
          <div className="cta-buttons">
            <a href="/demo" className="cta-button cta-button-solid">
              Ücretsiz Demo Al
            </a>
            <a href="/demo" className="cta-button cta-button-outline">
              Nasıl Çalışır?
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA />

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
