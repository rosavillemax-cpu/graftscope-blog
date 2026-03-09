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
          <div className="sidebar-cta-premium">
            <div className="sidebar-cta-logo">
              <img src="/graftscope-logo.png" alt="GraftScope" style={{ height: '40px', width: 'auto' }} />
            </div>
            <h3 className="sidebar-cta-title">Take Your Clinic to the Digital Age</h3>
            <ul className="sidebar-cta-features">
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Unlimited AI Analysis</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Operation Calendar</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Professional Reporting</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Patient Tracking (CRM)</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Dynamic Appointment Management</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Corporate Dashboard</span>
              </li>
            </ul>
            <div className="sidebar-cta-divider"></div>
            <div className="sidebar-cta-social-proof">Evaluated by 2,400+ clinics</div>
            <Link href="/en/demo" className="sidebar-cta-btn">
              Get Free Demo →
            </Link>
            <Link href="/en/demo" className="sidebar-cta-secondary">
              How does it work?
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
