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
  'Klinik Yönetimi':        { from: '#0369a1', to: '#0284c7', badge: '#e0f2fe', text: '#0369a1' },
  'Teknoloji':              { from: '#0891b2', to: '#06b6d4', badge: '#cffafe', text: '#0891b2' },
  'Pazar Analizi':          { from: '#0c4a6e', to: '#0369a1', badge: '#dbeafe', text: '#0c4a6e' },
  'Hasta Büyümesi':         { from: '#1d4ed8', to: '#3b82f6', badge: '#eff6ff', text: '#1d4ed8' },
  'Türkiye':                { from: '#0f766e', to: '#14b8a6', badge: '#ccfbf1', text: '#0f766e' },
  'Türkiye Pazarı':         { from: '#0f766e', to: '#14b8a6', badge: '#ccfbf1', text: '#0f766e' },
  'Global':                 { from: '#1e40af', to: '#2563eb', badge: '#dbeafe', text: '#1e40af' },
  'Hasta Deneyimi':         { from: '#075985', to: '#0369a1', badge: '#e0f2fe', text: '#075985' },
  'Uluslararası Pazarlama': { from: '#334155', to: '#64748b', badge: '#f1f5f9', text: '#334155' },
};
const defaultColor = { from: '#334155', to: '#64748b', badge: '#f1f5f9', text: '#334155' };


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
