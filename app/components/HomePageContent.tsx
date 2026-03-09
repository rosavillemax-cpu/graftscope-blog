"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import {
  filterArticlesByMarket,
  MARKET_FILTER_OPTIONS,
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
        <Link href={`/articles/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <p className="article-card-excerpt">{frontmatter.excerpt}</p>
      <footer className="article-card-meta">
        <span>{frontmatter.author}</span>
        <span className="meta-sep">·</span>
        <span>{frontmatter.readTime} dk</span>
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
          <div className="sidebar-cta-premium">
            <div className="sidebar-cta-logo">
              <img src="/graftscope-logo.png" alt="GraftScope" style={{ height: '40px', width: 'auto' }} />
            </div>
            <h3 className="sidebar-cta-title">Kliniğinizi Dijital Çağa Taşıyın</h3>
            <ul className="sidebar-cta-features">
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Sınırsız Yapay Zeka Analizi</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Operasyon Takvimi</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Profesyonel Raporlama</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Hasta Takibi (CRM)</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Dinamik Randevu Yönetimi</span>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <span>Kurumsal Panel</span>
              </li>
            </ul>
            <div className="sidebar-cta-divider"></div>
            <div className="sidebar-cta-social-proof">2.400+ klinik tarafından değerlendiriliyor</div>
            <Link href="/demo" className="sidebar-cta-btn">
              Ücretsiz Demo Al →
            </Link>
            <Link href="/demo" className="sidebar-cta-secondary">
              Nasıl çalışır?
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
