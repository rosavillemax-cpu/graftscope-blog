import Link from "next/link";
import { notFound } from "next/navigation";
import { getEnglishArticleBySlug, getEnglishArticleSlugs } from "@/lib/articles";
import Header from "@/app/components/Header";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    image: `${SITE_URL}/og-image.jpg`,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Graftscope",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
      },
    },
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
              <span className="article-read-time">{frontmatter.readTime} min read</span>
            </div>
          </div>

          <div className="article-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          <div className="article-footer">
            <Link href="/en" className="article-back-link">
              ← All Articles
            </Link>
          </div>
        </article>

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
