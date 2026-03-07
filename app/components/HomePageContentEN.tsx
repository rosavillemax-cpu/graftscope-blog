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
    </article>
  );
}

interface HomePageContentProps {
  articles: Article[];
}

export default function HomePageContentEN({ articles }: HomePageContentProps) {
  const [marketFilter, setMarketFilter] = useState<MarketFilterKey>("All");

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
              <span className="article-card-category">
                <span className="article-card-category-line" aria-hidden />
                {featured.frontmatter.category}
              </span>
              <h1 className="hero-title">
                <Link href={`/en/articles/${featured.slug}`}>
                  {featured.frontmatter.title}
                </Link>
              </h1>
              <p className="hero-excerpt">{featured.frontmatter.excerpt}</p>
              <footer className="article-card-meta">
                <span>{featured.frontmatter.author}</span>
                <span className="meta-sep">·</span>
                <span>{featured.frontmatter.readTime} min</span>
              </footer>
            </>
          ) : (
            <p className="no-articles">No articles yet.</p>
          )}
        </div>
        <div className="hero-list">
          {heroList.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <div className="content-layout">
        <div className="content-main">
          <section className="latest">
            <h2 className="section-title">Latest Articles</h2>
            <div className="article-grid">
              {restArticles.length > 0 ? (
                restArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))
              ) : (
                featured === undefined &&
                filteredArticles.length === 0 && (
                  <p className="no-articles">No articles yet.</p>
                )
              )}
            </div>
          </section>
        </div>
        <aside className="content-sidebar">
          <div className="sidebar-cta">
            <h3 className="sidebar-cta-title">
              Kliniğinizi Yapay Zeka ile Yönetin
            </h3>
            <p className="sidebar-cta-text">
              Operasyonel verimlilik ve hasta deneyimi için tek platform.
            </p>
            <Link href="/en/demo" className="sidebar-cta-btn">
              Demo Al
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
