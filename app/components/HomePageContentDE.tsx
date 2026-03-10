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
  return (
    <article className="article-card">
      <span className="article-card-category">
        <span className="article-card-category-line" aria-hidden />
        {frontmatter.category}
      </span>
      <h2 className="article-card-title">
        <Link href={`/de/articles/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <p className="article-card-excerpt">{frontmatter.excerpt}</p>
      <footer className="article-card-meta">
        <span>{frontmatter.author}</span>
        <span className="meta-sep">·</span>
        <span>{frontmatter.readTime}</span>
      </footer>
      <div className="article-card-action">
        <Link href={`/de/articles/${slug}`} className="article-card-link">
          Weiterlesen →
        </Link>
      </div>
    </article>
  );
}

interface HomePageContentProps {
  articles: Article[];
}

export default function HomePageContentDE({ articles }: HomePageContentProps) {
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
            <p className="no-articles">Keine Artikel verfügbar.</p>
          )}
        </div>
        <aside className="content-sidebar">
          <a href="/de/demo" target="_blank">
            <img src="/sidebar-de.jpeg" alt="GraftScope Demo" style={{ width: '100%', borderRadius: '12px', cursor: 'pointer' }} />
          </a>
          <p style={{ fontSize: '0.75rem', color: '#7a7060', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
            Exklusiv für Haartransplantationskliniken entwickelt
          </p>
          <SidebarBanner />
          <MiniNewsletter />
        </aside>
      </div>
    </main>
  );
}
