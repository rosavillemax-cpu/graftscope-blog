"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import {
  filterArticlesByMarket,
  MARKET_FILTER_OPTIONS_EN,
  type MarketFilterKey,
} from "@/lib/articleFilters";

function ArticleCard({ article }: { article: Article }) {
  const { frontmatter, slug } = article;
  return (
    <article className="article-card">
      <span className="article-card-category">
        <span className="article-card-category-line" aria-hidden />
        {frontmatter.category}
      </span>
      <h2 className="article-card-title">
        <Link href={`/en/articles/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <p className="article-card-excerpt">{frontmatter.excerpt}</p>
      <footer className="article-card-meta">
        <span>{frontmatter.author}</span>
        <span className="meta-sep">·</span>
        <span>{frontmatter.readTime} min</span>
      </footer>
      <div className="article-card-action">
        <Link href={`/en/articles/${slug}`} className="article-card-link">
          Continue Reading →
        </Link>
      </div>
    </article>
  );
}

interface HomePageContentProps {
  articles: Article[];
}

export default function HomePageContentEN({ articles }: HomePageContentProps) {
  const [marketFilter, setMarketFilter] = useState<MarketFilterKey>("All");

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
            <p className="no-articles">No articles yet.</p>
          )}
        </div>
        <aside className="content-sidebar">
          <a href="/en/demo" target="_blank">
            <img src="/sidebar-banner.png" alt="GraftScope Demo" style={{ width: '100%', borderRadius: '12px', cursor: 'pointer' }} />
          </a>
        </aside>
      </div>
    </main>
  );
}
