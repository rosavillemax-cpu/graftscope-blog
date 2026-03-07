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
  const [articles, setArticles] = useState<Article[]>([]);
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");

  // Load articles on component mount
  useEffect(() => {
    const loadArticles = async () => {
      let allArticles = isEnglishPage ? getAllEnglishArticlesClient() : getAllArticlesClient();
      
      // If client-side articles are empty, fetch from API
      if (allArticles.length === 0) {
        try {
          const apiUrl = isEnglishPage ? "/api/search?lang=en" : "/api/search";
          const response = await fetch(apiUrl);
          const data = await response.json();
          if (data.success) {
            allArticles = data.articles;
            console.log(`Search component fetched ${allArticles.length} articles from API for ${isEnglishPage ? 'English' : 'Turkish'} page`);
          }
        } catch (error) {
          console.error("Failed to fetch articles from API:", error);
        }
      } else {
        console.log(`Search component loaded ${allArticles.length} articles from client-side for ${isEnglishPage ? 'English' : 'Turkish'} page`);
      }
      
      setArticles(allArticles);
    };

    loadArticles();
  }, [isEnglishPage]);

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
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    const filtered = articles.filter((article) => {
      const title = article.frontmatter.title.toLowerCase();
      const excerpt = article.frontmatter.excerpt.toLowerCase();
      const category = article.frontmatter.category.toLowerCase();
      const author = article.frontmatter.author.toLowerCase();
      
      return (
        title.includes(query) || 
        excerpt.includes(query) || 
        category.includes(query) ||
        author.includes(query)
      );
    });

    console.log(`Search for "${query}" found ${filtered.length} results`);
    setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
  }, [searchQuery, articles]);

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
          <div className="search-input-wrapper">
            <input
              id="search-input"
              type="text"
              className="search-input"
              placeholder={isEnglishPage ? "Search articles..." : "Makaleleri ara..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button className="search-input-btn" aria-label="Search">
              🔍
            </button>
          </div>
          <button className="search-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        
        {searchQuery.trim().length > 0 && (
          <div className="search-results">
            {searchResults.length === 0 ? (
              <div className="search-no-results">
                {isEnglishPage ? "No results found" : "Sonuç bulunamadı"}
              </div>
            ) : (
              <>
                <div className="search-results-count">
                  {searchResults.length} {isEnglishPage ? "results found" : "sonuç bulundu"}
                </div>
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
                      <div className="search-result-author">
                        {article.frontmatter.author}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
