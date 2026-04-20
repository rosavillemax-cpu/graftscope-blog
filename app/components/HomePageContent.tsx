"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import {
  filterArticlesByMarket,
  MARKET_FILTER_OPTIONS,
  type MarketFilterKey,
} from "@/lib/articleFilters";
import MiniNewsletter from "./MiniNewsletter";
import SidebarBanner from "./SidebarBanner";

// ─── Category palette ────────────────────────────────────────────────────────
// A = header bg (lightest), B = icon rect bg + badge bg (mid),
// C = stat-num + read link + icon main color (dark), D = stat-lbl + badge text

interface CategoryPalette {
  A: string; B: string; C: string; D: string;
}

const PALETTES: Record<string, CategoryPalette> = {
  'Hasta Büyümesi':         { A: '#E6F1FB', B: '#B5D4F4', C: '#185FA5', D: '#378ADD' },
  'Klinik Yönetimi':        { A: '#EEEDFE', B: '#CECBF6', C: '#534AB7', D: '#7F77DD' },
  'Teknoloji':              { A: '#E1F5EE', B: '#9FE1CB', C: '#0F6E56', D: '#1D9E75' },
  'Pazar Analizi':          { A: '#FAEEDA', B: '#FAC775', C: '#854F0B', D: '#BA7517' },
  'Türkiye':                { A: '#FCEBEB', B: '#F5C4B3', C: '#993C1D', D: '#D85A30' },
  'Türkiye Pazarı':         { A: '#FCEBEB', B: '#F5C4B3', C: '#993C1D', D: '#D85A30' },
  'Global':                 { A: '#EAF3DE', B: '#C0DD97', C: '#3B6D11', D: '#639922' },
  'Hasta Deneyimi':         { A: '#E6F1FB', B: '#B5D4F4', C: '#185FA5', D: '#378ADD' },
  'Uluslararası Pazarlama': { A: '#F1EFE8', B: '#D3D1C7', C: '#5F5E5A', D: '#888780' },
};
const DEFAULT_PALETTE: CategoryPalette = { A: '#F1EFE8', B: '#D3D1C7', C: '#5F5E5A', D: '#888780' };

// ─── Inline SVG icons per category ───────────────────────────────────────────

function IconHastaBuyumesi() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#B5D4F4"/>
      <ellipse cx="22" cy="17" rx="6" ry="6" fill="#185FA5" opacity="0.25"/>
      <circle cx="22" cy="16" r="5" fill="#185FA5"/>
      <path d="M10 34c0-6.627 5.373-10 12-10s12 3.373 12 10" fill="#185FA5" opacity="0.4"/>
      <path d="M13 34c0-4.97 4.03-8 9-8s9 3.03 9 8" fill="#185FA5"/>
    </svg>
  );
}

function IconKlinikYonetimi() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#CECBF6"/>
      <rect x="10" y="14" width="24" height="18" rx="3" fill="#534AB7" opacity="0.25"/>
      <rect x="12" y="12" width="20" height="16" rx="2.5" fill="#534AB7"/>
      <rect x="16" y="17" width="5" height="1.5" rx="0.75" fill="white"/>
      <rect x="16" y="20.5" width="12" height="1.5" rx="0.75" fill="white" opacity="0.7"/>
      <rect x="16" y="24" width="8" height="1.5" rx="0.75" fill="white" opacity="0.5"/>
      <rect x="19" y="28" width="6" height="6" rx="1" fill="#534AB7" opacity="0.5"/>
      <rect x="20.5" y="29.5" width="3" height="3" rx="0.5" fill="#534AB7"/>
    </svg>
  );
}

function IconTeknoloji() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#9FE1CB"/>
      <rect x="14" y="14" width="16" height="16" rx="3" fill="#0F6E56" opacity="0.3"/>
      <rect x="16" y="16" width="12" height="12" rx="2" fill="#0F6E56"/>
      <circle cx="22" cy="22" r="3" fill="white"/>
      <circle cx="22" cy="22" r="1.2" fill="#0F6E56"/>
      <rect x="21.2" y="10" width="1.6" height="4" rx="0.8" fill="#0F6E56" opacity="0.5"/>
      <rect x="21.2" y="30" width="1.6" height="4" rx="0.8" fill="#0F6E56" opacity="0.5"/>
      <rect x="10" y="21.2" width="4" height="1.6" rx="0.8" fill="#0F6E56" opacity="0.5"/>
      <rect x="30" y="21.2" width="4" height="1.6" rx="0.8" fill="#0F6E56" opacity="0.5"/>
    </svg>
  );
}

function IconPazarAnalizi() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#FAC775"/>
      <rect x="10" y="24" width="5" height="10" rx="1" fill="#854F0B"/>
      <rect x="17" y="17" width="5" height="17" rx="1" fill="#854F0B"/>
      <rect x="24" y="12" width="5" height="22" rx="1" fill="#854F0B"/>
      <rect x="10" y="28" width="5" height="6" rx="1" fill="#BA7517" opacity="0.4"/>
      <rect x="17" y="20" width="5" height="14" rx="1" fill="#BA7517" opacity="0.4"/>
      <rect x="24" y="15" width="5" height="19" rx="1" fill="#BA7517" opacity="0.4"/>
      <path d="M11 26 L19 20 L26 15 L32 11" stroke="#FAC775" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="32" cy="11" r="2" fill="#FAC775"/>
    </svg>
  );
}

function IconTurkiye() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#F5C4B3"/>
      <ellipse cx="22" cy="22" rx="11" ry="11" fill="#993C1D" opacity="0.2"/>
      <ellipse cx="22" cy="22" rx="8" ry="11" fill="#993C1D" opacity="0.2"/>
      <ellipse cx="22" cy="22" rx="11" ry="11" fill="none" stroke="#993C1D" strokeWidth="1.5"/>
      <ellipse cx="22" cy="22" rx="8" ry="11" fill="none" stroke="#993C1D" strokeWidth="1.2" opacity="0.7"/>
      <line x1="11" y1="22" x2="33" y2="22" stroke="#993C1D" strokeWidth="1.2" opacity="0.6"/>
      <line x1="13" y1="17" x2="31" y2="17" stroke="#993C1D" strokeWidth="1" opacity="0.4"/>
      <line x1="13" y1="27" x2="31" y2="27" stroke="#993C1D" strokeWidth="1" opacity="0.4"/>
      <circle cx="22" cy="22" r="2.5" fill="#993C1D"/>
    </svg>
  );
}

function IconGlobal() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#C0DD97"/>
      <circle cx="22" cy="22" r="10" fill="#3B6D11" opacity="0.15"/>
      <circle cx="22" cy="22" r="10" fill="none" stroke="#3B6D11" strokeWidth="1.5"/>
      <path d="M15 22 Q18 16 22 22 Q26 28 29 22" stroke="#3B6D11" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <line x1="12" y1="22" x2="32" y2="22" stroke="#3B6D11" strokeWidth="1" opacity="0.5"/>
      <line x1="14" y1="17" x2="30" y2="17" stroke="#3B6D11" strokeWidth="0.8" opacity="0.35"/>
      <line x1="14" y1="27" x2="30" y2="27" stroke="#3B6D11" strokeWidth="0.8" opacity="0.35"/>
      <circle cx="17" cy="19" r="1.5" fill="#3B6D11" opacity="0.6"/>
      <circle cx="27" cy="25" r="1.5" fill="#3B6D11" opacity="0.6"/>
      <circle cx="22" cy="15" r="1.5" fill="#3B6D11"/>
    </svg>
  );
}

function IconDefault() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#D3D1C7"/>
      <rect x="12" y="12" width="8" height="8" rx="2" fill="#5F5E5A"/>
      <rect x="24" y="12" width="8" height="8" rx="2" fill="#5F5E5A" opacity="0.5"/>
      <rect x="12" y="24" width="8" height="8" rx="2" fill="#5F5E5A" opacity="0.5"/>
      <rect x="24" y="24" width="8" height="8" rx="2" fill="#5F5E5A" opacity="0.3"/>
    </svg>
  );
}

// Centered large icon for cards without stat
function IconDefaultLarge() {
  return (
    <svg width="52" height="52" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#D3D1C7"/>
      <rect x="12" y="12" width="8" height="8" rx="2" fill="#5F5E5A"/>
      <rect x="24" y="12" width="8" height="8" rx="2" fill="#5F5E5A" opacity="0.5"/>
      <rect x="12" y="24" width="8" height="8" rx="2" fill="#5F5E5A" opacity="0.5"/>
      <rect x="24" y="24" width="8" height="8" rx="2" fill="#5F5E5A" opacity="0.3"/>
    </svg>
  );
}

const CATEGORY_ICONS: Record<string, () => React.ReactElement> = {
  'Hasta Büyümesi':         IconHastaBuyumesi,
  'Hasta Deneyimi':         IconHastaBuyumesi,
  'Klinik Yönetimi':        IconKlinikYonetimi,
  'Teknoloji':              IconTeknoloji,
  'Pazar Analizi':          IconPazarAnalizi,
  'Türkiye':                IconTurkiye,
  'Türkiye Pazarı':         IconTurkiye,
  'Global':                 IconGlobal,
  'Uluslararası Pazarlama': IconGlobal,
};

// ─── ArticleCard ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const { frontmatter, slug } = article;
  const pal = PALETTES[frontmatter.category] ?? DEFAULT_PALETTE;
  const IconComponent = CATEGORY_ICONS[frontmatter.category] ?? IconDefault;

  const hasStat = Boolean(frontmatter.stat);

  const excerpt = frontmatter.excerpt && frontmatter.excerpt.length > 0
    ? frontmatter.excerpt
    : article.content
      ? article.content
          .replace(/#{1,6}\s/g, '')
          .replace(/\*\*/g, '')
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/\n/g, ' ')
          .trim()
          .substring(0, 120) + '…'
      : '';

  return (
    <article className="article-card" style={{
      border: '0.5px solid #e5e5e5',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '280px',
      background: '#fff',
    }}>
      {/* ── Header ── */}
      <Link
        href={`/articles/${slug}`}
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: hasStat ? 'space-between' : 'center',
          height: '96px',
          padding: '1rem 1.25rem',
          background: pal.A,
          flexShrink: 0,
        }}
        tabIndex={-1}
        aria-hidden="true"
      >
        {hasStat ? (
          <>
            <div>
              <p style={{
                fontSize: '22px',
                fontWeight: '500',
                color: pal.C,
                margin: 0,
                lineHeight: 1.1,
              }}>
                {frontmatter.stat}
              </p>
              <p style={{
                fontSize: '10px',
                color: pal.D,
                margin: '3px 0 0',
                lineHeight: 1.3,
              }}>
                {frontmatter.statLabel}
              </p>
            </div>
            <IconComponent />
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px' }}>
            <IconComponent />
          </div>
        )}
      </Link>

      {/* ── Body ── */}
      <div style={{
        padding: '0.85rem 1.25rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}>
        {/* Category badge */}
        <span style={{
          display: 'inline-block',
          background: pal.B,
          color: pal.C,
          fontSize: '10px',
          fontWeight: '600',
          padding: '3px 9px',
          borderRadius: '20px',
          letterSpacing: '0.02em',
          alignSelf: 'flex-start',
        }}>
          {frontmatter.category}
        </span>

        {/* Title */}
        <h2 style={{ margin: 0 }}>
          <Link
            href={`/articles/${slug}`}
            style={{
              textDecoration: 'none',
              color: '#1a1a1a',
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '1.45',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {frontmatter.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p style={{
          fontSize: '11px',
          color: '#888780',
          lineHeight: '1.6',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          flex: 1,
        }}>
          {excerpt || 'Devamını okumak için tıklayın.'}
        </p>
      </div>

      {/* ── Footer ── */}
      <div style={{
        padding: '0.65rem 1.25rem',
        borderTop: '0.5px solid #e5e5e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '10px', color: '#888780' }}>
          {new Date(frontmatter.date).toLocaleDateString('tr-TR', {
            day: 'numeric', month: 'short', year: 'numeric',
          })}{' '}
          · {String(frontmatter.readTime).replace(/ ?dk/g, '')} dk
        </span>
        <Link
          href={`/articles/${slug}`}
          style={{
            fontSize: '11px',
            fontWeight: '500',
            color: pal.C,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Oku →
        </Link>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
            }}>
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
