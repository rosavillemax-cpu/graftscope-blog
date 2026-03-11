"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { usePathname } from "next/navigation";

interface RelatedArticlesProps {
  category: string;
  currentSlug: string;
  language: "tr" | "en" | "de";
}

export default function RelatedArticles({ category, currentSlug, language }: RelatedArticlesProps) {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    // In a real implementation, this would fetch related articles from API
    // For now, we'll use a placeholder implementation
    const getRelatedArticles = async () => {
      try {
        const response = await fetch(`/api/articles/related?category=${category}&exclude=${currentSlug}&language=${language}`);
        const data = await response.json();
        setRelatedArticles(data.articles || []);
      } catch (error) {
        console.error("Failed to fetch related articles:", error);
        setRelatedArticles([]);
      }
    };

    getRelatedArticles();
  }, [category, currentSlug, language]);

  const titles = {
    tr: "İlgili Makaleler",
    en: "Related Articles", 
    de: "Verwandte Artikel"
  };

  const readTimeText = {
    tr: "dk",
    en: "min",
    de: "Min"
  };

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <div style={{
      marginTop: "48px",
      borderTop: "1px solid #e0e0e0",
      paddingTop: "32px"
    }}>
      <h3 style={{
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "24px",
        color: "#1a1a1a"
      }}>
        {titles[language]}
      </h3>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px"
      }}>
        {relatedArticles.slice(0, 3).map((article) => {
          const { frontmatter, slug } = article;
          
          // Generate excerpt
          const generateExcerpt = (frontmatter: any, maxLength: number = 120) => {
            if (!frontmatter) return '';
            
            if (frontmatter.excerpt && frontmatter.excerpt.length > 0) {
              return frontmatter.excerpt.length > maxLength 
                ? frontmatter.excerpt.substring(0, maxLength) + '...'
                : frontmatter.excerpt;
            }
            
            const sourceText = frontmatter.title || '';
            const cleaned = sourceText.replace(/\s+/g, ' ').trim();
            
            if (cleaned.length <= maxLength) return cleaned;
            
            return cleaned.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
          };
          
          const excerpt = generateExcerpt(frontmatter, 120);
          
          return (
            <div key={slug} style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "white",
              transition: "all 0.2s ease"
            }}>
              <h4 style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "8px",
                lineHeight: "1.3"
              }}>
                <Link 
                  href={
                    language === "en" ? `/en/articles/${slug}` :
                    language === "de" ? `/de/articles/${slug}` :
                    `/articles/${slug}`
                  }
                  style={{
                    color: "#1a1a1a",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1a4d2e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1a1a1a";
                  }}
                >
                  {frontmatter.title}
                </Link>
              </h4>
              
              <p style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.5",
                marginBottom: "12px"
              }}>
                {excerpt}
              </p>
              
              <div style={{
                fontSize: "13px",
                color: "#888",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                <span>{new Date(frontmatter.date).toLocaleDateString(
                  language === 'tr' ? 'tr-TR' : language === 'de' ? 'de-DE' : 'en-US',
                  { day: 'numeric', month: 'long', year: 'numeric' }
                )}</span>
                <span>·</span>
                <span>{frontmatter.category}</span>
                <span>·</span>
                <span>{String(frontmatter.readTime).replace('min', language === 'tr' ? ' dk' : language === 'de' ? ' Min.' : ' min')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
