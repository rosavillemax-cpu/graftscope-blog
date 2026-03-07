"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllArticlesClient, getAllEnglishArticlesClient } from "@/lib/client-articles";
import type { Article } from "@/lib/articles";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");

  useEffect(() => {
    if (isOpen) {
      // Focus search input when modal opens
      const input = document.getElementById("search-input") as HTMLInputElement;
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    // Get all articles based on language
    const allArticles = isEnglishPage ? getAllEnglishArticlesClient() : getAllArticlesClient();
    const query = searchQuery.toLowerCase();
    
    const filtered = allArticles.filter((article) => {
      const title = article.frontmatter.title.toLowerCase();
      const excerpt = article.frontmatter.excerpt.toLowerCase();
      const category = article.frontmatter.category.toLowerCase();
      
      return (
        title.includes(query) || 
        excerpt.includes(query) || 
        category.includes(query)
      );
    });

    setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
  }, [searchQuery, isEnglishPage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleResultClick = () => {
    setSearchQuery("");
    setSearchResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="search-overlay" 
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          <input
            id="search-input"
            type="text"
            className="search-input"
            placeholder={isEnglishPage ? "Search articles..." : "Makaleleri ara..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button className="search-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        
        {searchQuery.trim().length >= 2 && (
          <div className="search-results">
            {searchResults.length === 0 ? (
              <div className="search-no-results">
                {isEnglishPage ? "No results found" : "Sonuç bulunamadı"}
              </div>
            ) : (
              <div className="search-results-list">
                {searchResults.map((article: Article) => (
                  <Link
                    key={article.slug}
                    href={isEnglishPage ? `/en/articles/${article.slug}` : `/articles/${article.slug}`}
                    className="search-result-item"
                    onClick={handleResultClick}
                  >
                    <div className="search-result-category">
                      {article.frontmatter.category}
                    </div>
                    <h4 className="search-result-title">
                      {article.frontmatter.title}
                    </h4>
                    <p className="search-result-excerpt">
                      {article.frontmatter.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
