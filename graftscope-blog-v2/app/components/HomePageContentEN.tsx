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
              <span className="hero-featured-category">
                <span className="hero-featured-category-line" aria-hidden />
                {featured.frontmatter.category}
              </span>
              <h1 className="hero-featured-title">
                <Link href={`/en/articles/${featured.slug}`}>
                  {featured.frontmatter.title}
                </Link>
              </h1>
              <p className="hero-featured-excerpt">
                {featured.frontmatter.excerpt}
              </p>
              <p className="hero-featured-author">
                {featured.frontmatter.author} · {featured.frontmatter.readTime} min read
              </p>
            </>
          ) : (
            <div className="hero-featured-empty">
              <h1 className="hero-featured-title">
                Hair Transplant Clinic Management Guide
              </h1>
              <p className="hero-featured-excerpt">
                Expert insights on clinic management, patient growth, and industry analysis for hair transplant clinics worldwide.
              </p>
            </div>
          )}
        </div>

        <div className="hero-divider" aria-hidden />

        <div className="hero-list">
          {heroList.map((article, index) => (
            <div key={article.slug} className="hero-list-item">
              <span className="hero-list-num">{index + 2}</span>
              <h3 className="hero-list-link">
                <Link href={`/en/articles/${article.slug}`}>
                  {article.frontmatter.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </section>

      <div className="content-layout">
        <div className="content-main">
          <section className="articles-grid">
            {restArticles.length > 0 ? (
              restArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))
            ) : (
              <p className="no-articles">No articles available.</p>
            )}
          </section>
        </div>

        <aside className="content-sidebar">
          <div className="sidebar-cta">
            <h3 className="sidebar-cta-title">
              Manage Your Clinic with AI
            </h3>
            <p className="sidebar-cta-text">
              Operational efficiency and patient experience on one platform.
            </p>
            <Link href="/en/demo" className="sidebar-cta-btn">
              Request Demo
            </Link>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-heading">Market</h4>
            <div className="sidebar-tags">
              {MARKET_FILTER_OPTIONS_EN.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`sidebar-tag ${
                    marketFilter === tag ? "sidebar-tag-active" : ""
                  }`}
                  onClick={() => setMarketFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-heading">Authors</h4>
            <div className="sidebar-author-list">
              {articles.length > 0 ? (
                articles
                  .reduce((authors, article) => {
                    const author = article.frontmatter.author;
                    if (!authors.find(([name]) => name === author)) {
                      authors.push([author, 1]);
                    } else {
                      const index = authors.findIndex(([name]) => name === author);
                      if (index !== -1) {
                        authors[index][1]++;
                      }
                    }
                    return authors;
                  }, [] as [string, number][])
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([name, articleCount]) => (
                    <li key={name} className="sidebar-author-item">
                      <span className="sidebar-author-name">{name}</span>
                      <span className="sidebar-author-count">{articleCount}</span>
                    </li>
                  ))
              ) : (
                <p className="sidebar-empty">No authors available.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
