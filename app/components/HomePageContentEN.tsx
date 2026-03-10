"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import {
  filterArticlesByMarket,
  MARKET_FILTER_OPTIONS_EN,
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
        <Link href={`/en/articles/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <p className="article-card-excerpt">{frontmatter.excerpt}</p>
      <footer className="article-card-meta">
        <span>{frontmatter.author}</span>
        <span className="meta-sep">·</span>
        <span>{frontmatter.readTime}</span>
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
          {/* About This Guide Section */}
          <section className="about-guide-section">
            <div className="about-guide-content">
              <h1 className="about-guide-headline">The Complete Guide for Hair Transplant Clinic Owners</h1>
              <p className="about-guide-subtext">Evidence-based strategies for clinic management, patient growth, and international market expansion. Updated weekly by industry experts.</p>
              
              <div className="about-guide-stats">
                <div className="stat-box">
                  <div className="stat-number">23+</div>
                  <div className="stat-label">Expert Guides</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Global Coverage</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">3</div>
                  <div className="stat-label">TR · EN · DE</div>
                </div>
              </div>
            </div>
          </section>

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
            <img src="/sidebar-en.jpeg" alt="GraftScope Demo" style={{ width: '100%', borderRadius: '12px', cursor: 'pointer' }} />
          </a>
          <p style={{ fontSize: '0.75rem', color: '#7a7060', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
            Developed exclusively for hair transplant clinics
          </p>
          <SidebarBanner />
          <MiniNewsletter />
        </aside>
      </div>
    </main>
  );
}
