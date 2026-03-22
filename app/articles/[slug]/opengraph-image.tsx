import { ImageResponse } from 'next/og';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

const categoryColors: Record<string, { from: string; to: string }> = {
  'Klinik Yönetimi':        { from: '#4A1559', to: '#631D76' },
  'Teknoloji':              { from: '#185FA5', to: '#378ADD' },
  'Pazar Analizi':          { from: '#854F0B', to: '#EF9F27' },
  'Hasta Büyümesi':         { from: '#3C3489', to: '#7F77DD' },
  'Türkiye':                { from: '#993C1D', to: '#D85A30' },
  'Türkiye Pazarı':         { from: '#993C1D', to: '#D85A30' },
  'Global':                 { from: '#3B6D11', to: '#639922' },
  'Hasta Deneyimi':         { from: '#72243E', to: '#D4537E' },
  'Uluslararası Pazarlama': { from: '#444441', to: '#888780' },
};
const defaultColor = { from: '#4A1559', to: '#631D76' };

export default async function Image({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return new ImageResponse(<div>Not found</div>, { width: 1200, height: 630 });

  const { frontmatter } = article;
  const color = categoryColors[frontmatter.category] || defaultColor;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '8px 20px',
            borderRadius: '100px',
            color: '#fff',
            fontSize: '18px',
            fontWeight: '600',
            letterSpacing: '0.05em',
          }}>
            {frontmatter.category}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            color: '#fff',
            fontSize: frontmatter.title.length > 60 ? '42px' : '52px',
            fontWeight: '700',
            lineHeight: '1.2',
            maxWidth: '900px',
          }}>
            {frontmatter.title}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '22px' }}>
            {frontmatter.excerpt?.substring(0, 100)}...
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>
            {frontmatter.author} · {frontmatter.readTime}
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '10px 24px',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '20px',
            fontWeight: '700',
          }}>
            ClinixGlow Insights
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
