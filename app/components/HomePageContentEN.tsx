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

const categoryColors: Record<string, { from: string; to: string; badge: string; text: string }> = {
  'Clinic Management':    { from: '#1a4d2e', to: '#2d6b4a', badge: '#e8f5ee', text: '#1a4d2e' },
  'Technology':           { from: '#185FA5', to: '#378ADD', badge: '#E6F1FB', text: '#185FA5' },
  'Market Analysis':      { from: '#854F0B', to: '#EF9F27', badge: '#FAEEDA', text: '#854F0B' },
  'Patient Growth':       { from: '#3C3489', to: '#7F77DD', badge: '#EEEDFE', text: '#3C3489' },
  'Turkey':               { from: '#993C1D', to: '#D85A30', badge: '#FAECE7', text: '#993C1D' },
  'Turkey Market':        { from: '#993C1D', to: '#D85A30', badge: '#FAECE7', text: '#993C1D' },
  'Global':               { from: '#3B6D11', to: '#639922', badge: '#EAF3DE', text: '#3B6D11' },
  'Patient Experience':   { from: '#72243E', to: '#D4537E', badge: '#FBEAF0', text: '#72243E' },
  'International Marketing': { from: '#444441', to: '#888780', badge: '#F1EFE8', text: '#444441' },
};
const defaultColor = { from: '#444441', to: '#888780', badge: '#F1EFE8', text: '#444441' };


function ArticleCard({ article }: { article: Article }) {
  const { frontmatter, slug } = article;
  const color = categoryColors[frontmatter.category] || defaultColor;
  const excerpt = frontmatter.excerpt && frontmatter.excerpt.length > 0
  ? frontmatter.excerpt
  : article.content
    ? article.content.replace(/#{1,6}\s/g, '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\n/g, ' ').trim().substring(0, 160) + '...'
    : '';

  return (
    <article className="article-card" style={{ 
      borderRadius: '12px', 
      overflow: 'hidden', 
      border: '0.5px solid #e5e5e5',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Link href={`/en/articles/${slug}`} style={{ textDecoration: 'none' }}>
        <div style={{
          height: '140px',
          background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
          borderRadius: '10px 10px 0 0',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '12px 14px',
        }}>
          <span style={{
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '600',
            padding: '4px 10px',
            borderRadius: '20px',
            letterSpacing: '0.03em',
          }}>
            {frontmatter.category}
          </span>
        </div>
      </Link>
      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: '500', 
          margin: '0 0 10px', 
          lineHeight: '1.4',
          color: '#1a1a1a'
        }}>
          <Link href={`/en/articles/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {frontmatter.title}
          </Link>
        </h2>
        <p style={{
          fontSize: '13px',
          color: '#666',
          lineHeight: '1.6',
          margin: '0 0 12px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          flex: 1,
        }}>
          {excerpt || 'Click to read more.'}
        </p>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderTop: '0.5px solid #eee',
          paddingTop: '12px',
          marginTop: 'auto'
        }}>
          <span style={{ fontSize: '12px', color: '#999' }}>
            {new Date(frontmatter.date).toLocaleDateString("en-US", { 
              day: 'numeric', month: 'long', year: 'numeric' 
            })} · {String(frontmatter.readTime).replace(' min', '').replace('min', '')} min read
          </span>
          <Link href={`/en/articles/${slug}`} style={{ 
            fontSize: '13px', 
            color: color.text,
            fontWeight: '500',
            textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}>
            Read more →
          </Link>
        </div>
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
          <SidebarBanner lang="en" />
          <MiniNewsletter />
        </aside>
      </div>
    </main>
  );
}
