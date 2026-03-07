import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getEnglishArticleBySlug, getEnglishArticleSlugs } from "@/lib/articles";
import Header from "@/app/components/Header";
import type { Metadata } from "next";

const SITE_URL = "https://graftscope.org";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

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

export default async function ArticlePageEN({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getEnglishArticleBySlug(slug);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const articleUrl = `${SITE_URL}/en/articles/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    datePublished: frontmatter.date,
    publisher: {
      "@type": "Organization",
      name: "Graftscope",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
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
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{frontmatter.readTime} min read</span>
            </div>
          </header>
          <div className="article-single-body prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </article>
        <p className="back-link-wrap">
          <Link href="/en" className="back-link">
            ← All Articles
          </Link>
        </p>
      </main>

      <section className="cta-section">
        <div className="cta-content">
          <p className="cta-eyebrow">GRAFTSCOPE SOFTWARE</p>
          <h2 className="cta-heading">Ready to take your clinic to the next level?</h2>
          <p className="cta-subtext">AI-powered clinic management, appointment system, and patient tracking — all on one platform.</p>
          <div className="cta-buttons">
            <a href="/en/demo" className="cta-button cta-button-solid">
              Request Free Demo
            </a>
            <a href="/en/demo" className="cta-button cta-button-outline">
              How It Works?
            </a>
          </div>
        </div>
      </section>

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
