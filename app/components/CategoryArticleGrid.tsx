"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";

interface CategoryArticleGridProps {
  articles: Article[];
}

const PAGE_SIZE = 9;

export default function CategoryArticleGrid({
  articles,
}: CategoryArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount((count) => count + PAGE_SIZE);
  };

  // Generate excerpt: use frontmatter.excerpt if exists, otherwise first 150-180 chars
  const generateExcerpt = (frontmatter: any, maxLength: number = 150) => {
    if (!frontmatter) return '';
    
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

  return (
    <>
      <div className="category-articles-grid">
        {visibleArticles.map((article) => {
          const { frontmatter, slug } = article;
          const date = new Date(frontmatter.date);
          const excerpt = generateExcerpt(frontmatter, 150);

          return (
            <article key={slug} className="category-card">
              <span className="article-card-category">
                <span className="article-card-category-line" aria-hidden />
                {frontmatter.category}
              </span>
              <h2 className="category-card-title">
                <Link href={`/articles/${slug}`}>{frontmatter.title}</Link>
              </h2>
              <p className="article-card-excerpt" style={{
                color: "#666",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                marginBottom: "8px",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}>
                {excerpt}
              </p>
              <footer className="category-card-meta" style={{ marginBottom: "8px" }}>
                <span>{frontmatter.author}</span>
                <span className="meta-sep">·</span>
                <time dateTime={frontmatter.date}>
                  {date.toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
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
        })}
      </div>
      {hasMore && (
        <div className="category-load-more-wrap">
          <button
            type="button"
            className="category-load-more-btn"
            onClick={handleLoadMore}
          >
            Daha Fazla Yükle
          </button>
        </div>
      )}
    </>
  );
}

