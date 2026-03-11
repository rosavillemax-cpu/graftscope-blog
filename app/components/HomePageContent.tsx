"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import {
  filterArticlesByMarket,
  MARKET_FILTER_OPTIONS,
  type MarketFilterKey,
} from "@/lib/articleFilters";
import MiniNewsletter from "./MiniNewsletter";
import SidebarBanner from "./SidebarBanner";

function ArticleCard({ article }: { article: Article }) {
  const { frontmatter, slug } = article;
  
  // Generate excerpt: use frontmatter.excerpt if exists, otherwise first 150-180 chars
  const generateExcerpt = (text: string, maxLength: number = 150) => {
    if (!text) return '';
    
    // If frontmatter.excerpt exists, use it
    if (frontmatter.excerpt && frontmatter.excerpt.length > 0) {
      return frontmatter.excerpt.length > maxLength 
        ? frontmatter.excerpt.substring(0, maxLength) + '...'
        : frontmatter.excerpt;
    }
    
    // Otherwise, generate from title or other content
    const sourceText = frontmatter.title || '';
    const cleaned = sourceText.replace(/\s+/g, ' ').trim();
    
    if (cleaned.length <= maxLength) return cleaned;
    
    return cleaned.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  };
  
  const excerpt = generateExcerpt('', 150);
  
  return (
    <article className="article-card">
      <span className="article-card-category">
        <span className="article-card-category-line" aria-hidden />
        {frontmatter.category}
      </span>
      <h2 className="article-card-title">
        <Link href={`/articles/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <p className="article-card-excerpt" style={{
        color: "#666",
        fontSize: "14px",
        lineHeight: "1.6",
        marginTop: "8px",
        marginBottom: "8px",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical"
      }}>
        {excerpt}
      </p>
      <footer className="article-card-meta" style={{ marginBottom: "8px" }}>
        <span>{frontmatter.author}</span>
        <span className="meta-sep">·</span>
        <span>{frontmatter.readTime}</span>
      </footer>
      <div className="article-card-action">
        <Link href={`/articles/${slug}`} className="article-card-link">
          Devamını Oku →
        </Link>
      </div>
    </article>
  );
}

interface HomePageContentProps {
  articles: Article[];
}

export default function HomePageContent({ articles }: HomePageContentProps) {
  const [marketFilter, setMarketFilter] = useState<MarketFilterKey>("Tümü");

  const filteredArticles = filterArticlesByMarket(articles, marketFilter);

  return (
    <main className="home-main">
      <div className="content-layout">
        <div className="content-main">
          {filteredArticles.length > 0 ? (
            <div className="articles-grid">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="no-articles">Henüz makale yok.</p>
          )}
        </div>
        <aside className="content-sidebar">
          <a href="/demo" target="_blank">
            <img src="/sidebar-tr.jpeg" alt="GraftScope Demo" style={{ width: '100%', borderRadius: '12px', cursor: 'pointer' }} />
          </a>
          <p style={{ fontSize: '0.75rem', color: '#7a7060', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
            Saç ekimi kliniklerine özel geliştirildi
          </p>
          <SidebarBanner />
          <MiniNewsletter />
        </aside>
      </div>
    </main>
  );
}
