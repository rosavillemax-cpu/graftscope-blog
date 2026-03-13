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
  'Klinikmanagement':     { from: '#0F6E56', to: '#1D9E75', badge: '#E1F5EE', text: '#0F6E56' },
  'Technologie':          { from: '#185FA5', to: '#378ADD', badge: '#E6F1FB', text: '#185FA5' },
  'Marktanalyse':         { from: '#854F0B', to: '#EF9F27', badge: '#FAEEDA', text: '#854F0B' },
  'Patientenwachstum':    { from: '#3C3489', to: '#7F77DD', badge: '#EEEDFE', text: '#3C3489' },
  'Türkei':               { from: '#993C1D', to: '#D85A30', badge: '#FAECE7', text: '#993C1D' },
  'Türkei Markt':         { from: '#993C1D', to: '#D85A30', badge: '#FAECE7', text: '#993C1D' },
  'Global':               { from: '#3B6D11', to: '#639922', badge: '#EAF3DE', text: '#3B6D11' },
  'Patientenerfahrung':   { from: '#72243E', to: '#D4537E', badge: '#FBEAF0', text: '#72243E' },
  'Internationales Marketing': { from: '#444441', to: '#888780', badge: '#F1EFE8', text: '#444441' },
};
const defaultColor = { from: '#444441', to: '#888780', badge: '#F1EFE8', text: '#444441' };

function ArticleCard({ article }: { article: Article }) {
  const { frontmatter, slug } = article;
  const color = categoryColors[frontmatter.category] || defaultColor;
  const excerpt = frontmatter.excerpt ?? '';

  return (
    <article className="article-card" style={{ 
      borderRadius: '12px', 
      overflow: 'hidden', 
      border: '0.5px solid #e5e5e5',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Link href={`/de/articles/${slug}`} style={{ textDecoration: 'none' }}>
        <div style={{
          height: '80px',
          background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
          display: 'flex',
          alignItems: 'flex-end',
          padding: '16px',
        }}>
          <span style={{
            background: 'rgba(255,255,255,0.2)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '500',
            padding: '4px 10px',
            borderRadius: '6px',
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
          <Link href={`/de/articles/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
          {excerpt || 'Klicken Sie, um mehr zu lesen.'}
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
            {new Date(frontmatter.date).toLocaleDateString("de-DE", { 
              day: 'numeric', month: 'long', year: 'numeric' 
            })} · {String(frontmatter.readTime)} Min. Lesezeit
          </span>
          <Link href={`/de/articles/${slug}`} style={{ 
            fontSize: '13px', 
            color: color.text,
            fontWeight: '500',
            textDecoration: 'none'
          }}>
            Weiterlesen →
          </Link>
        </div>
      </div>
    </article>
  );
}

interface HomePageContentProps {
  articles: Article[];
}

export default function HomePageContentDE({ articles }: HomePageContentProps) {
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
            <p className="no-articles">Keine Artikel verfügbar.</p>
          )}
        </div>
        <aside className="content-sidebar">
          <a href="/blog/de/demo" target="_blank">
            <img src="/sidebar-de.jpeg" alt="GraftScope Demo" style={{ width: '100%', borderRadius: '12px', cursor: 'pointer' }} />
          </a>
          <p style={{ fontSize: '0.75rem', color: '#7a7060', textAlign: 'center', marginTop: '8px', fontStyle: 'italic' }}>
            Exklusiv für Haartransplantationskliniken entwickelt
          </p>
          <SidebarBanner />
          <MiniNewsletter />
        </aside>
      </div>
    </main>
  );
}
