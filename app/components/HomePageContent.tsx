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
  'Klinik Yönetimi':        { from: '#1a4d2e', to: '#2d6b4a', badge: '#e8f5ee', text: '#1a4d2e' },
  'Teknoloji':              { from: '#185FA5', to: '#378ADD', badge: '#E6F1FB', text: '#185FA5' },
  'Pazar Analizi':          { from: '#854F0B', to: '#EF9F27', badge: '#FAEEDA', text: '#854F0B' },
  'Hasta Büyümesi':         { from: '#3C3489', to: '#7F77DD', badge: '#EEEDFE', text: '#3C3489' },
  'Türkiye':                { from: '#993C1D', to: '#D85A30', badge: '#FAECE7', text: '#993C1D' },
  'Türkiye Pazarı':         { from: '#993C1D', to: '#D85A30', badge: '#FAECE7', text: '#993C1D' },
  'Global':                 { from: '#3B6D11', to: '#639922', badge: '#EAF3DE', text: '#3B6D11' },
  'Hasta Deneyimi':         { from: '#72243E', to: '#D4537E', badge: '#FBEAF0', text: '#72243E' },
  'Uluslararası Pazarlama': { from: '#444441', to: '#888780', badge: '#F1EFE8', text: '#444441' },
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
      <Link href={`/articles/${slug}`} style={{ textDecoration: 'none' }}>
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
          <Link href={`/articles/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
          {excerpt || 'Devamını okumak için tıklayın.'}
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
            {new Date(frontmatter.date).toLocaleDateString("tr-TR", { 
              day: 'numeric', month: 'long', year: 'numeric' 
            })} · {String(frontmatter.readTime).replace(' dk', '').replace('dk', '')} dk
          </span>
          <Link href={`/articles/${slug}`} style={{ 
            fontSize: '13px', 
            color: color.text,
            fontWeight: '500',
            textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}>
            Devamını oku →
          </Link>
        </div>
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
          <SidebarBanner lang="tr" />
          <MiniNewsletter />
        </aside>
      </div>
    </main>
  );
}
