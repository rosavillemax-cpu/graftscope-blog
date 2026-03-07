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
      <Link href={`/en/articles/${slug}`} className="article-card-link">
        <div className="article-card-content">
          <div className="article-card-meta">
            <span className="article-card-category">{frontmatter.category}</span>
            <span className="article-card-date">
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h2 className="article-card-title">{frontmatter.title}</h2>
          <p className="article-card-excerpt">{frontmatter.excerpt}</p>
          <div className="article-card-footer">
            <span className="article-card-author">{frontmatter.author}</span>
            <span className="article-card-read-time">{frontmatter.readTime} min read</span>
          </div>
        </div>
      </Link>
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
    <div className="home-content">
      <section className="hero-section">
        {featured && (
          <article className="hero-article">
            <Link href={`/en/articles/${featured.slug}`} className="hero-article-link">
              <div className="hero-article-content">
                <div className="hero-article-meta">
                  <span className="hero-article-category">{featured.frontmatter.category}</span>
                  <span className="hero-article-date">
                    {new Date(featured.frontmatter.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h1 className="hero-article-title">{featured.frontmatter.title}</h1>
                <p className="hero-article-excerpt">{featured.frontmatter.excerpt}</p>
                <div className="hero-article-footer">
                  <span className="hero-article-author">{featured.frontmatter.author}</span>
                  <span className="hero-article-read-time">{featured.frontmatter.readTime} min read</span>
                </div>
              </div>
            </Link>
          </article>
        )}
        <div className="hero-list">
          {heroList.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="latest-section">
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
  );
}
