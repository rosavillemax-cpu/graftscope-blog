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
    </article>
  );
}

interface HomePageContentProps {
  articles: Article[];
}

export default function HomePageContent({ articles }: HomePageContentProps) {
  const [marketFilter, setMarketFilter] = useState<MarketFilterKey>("Tümü");

  const filteredArticles = filterArticlesByMarket(articles, marketFilter);
  const featured = filteredArticles[0];
  const heroList = filteredArticles.slice(1, 4);
  const restArticles = filteredArticles.slice(4);

  return (
    <main className="home-main">
      <section className="hero">
        <div className="hero-featured">
          {featured ? (
            <>
              <span className="hero-featured-category">
                <span className="hero-featured-category-line" aria-hidden />
                {featured.frontmatter.category}
              </span>
              <h1 className="hero-featured-title">
                <Link href={`/articles/${featured.slug}`}>
                  {featured.frontmatter.title}
                </Link>
              </h1>
              <p className="hero-featured-excerpt">
                {featured.frontmatter.excerpt}
              </p>
              <p className="hero-featured-author">
                {featured.frontmatter.author}
                <span className="meta-sep">·</span>
                {featured.frontmatter.readTime} dk
              </p>
            </>
          ) : (
            <h1 className="hero-featured-title" style={{ marginBottom: 0 }}>
              {marketFilter === "Tümü"
                ? "Henüz makale yok."
                : `${marketFilter} pazarında henüz makale yok.`}
            </h1>
          )}
        </div>
        <div className="hero-divider" aria-hidden />
        <div className="hero-list">
          {heroList.map((article, i) => (
            <div key={article.slug} className="hero-list-item">
              <span className="hero-list-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Link
                href={`/articles/${article.slug}`}
                className="hero-list-link"
              >
                {article.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="content-layout">
        <div className="content-main">
          {restArticles.length > 0 ? (
            <div className="articles-grid">
              {restArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            featured === undefined &&
            filteredArticles.length === 0 && (
              <p className="no-articles">Henüz makale yok.</p>
            )
          )}
        </div>
        <aside className="content-sidebar">
          <div className="sidebar-cta">
            <h3 className="sidebar-cta-title">
              Kliniğinizi Yapay Zeka ile Yönetin
            </h3>
            <p className="sidebar-cta-text">
              Operasyonel verimlilik ve hasta deneyimi için tek platform.
            </p>
            <Link href="/demo" className="sidebar-cta-btn">
              Demo Al
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
