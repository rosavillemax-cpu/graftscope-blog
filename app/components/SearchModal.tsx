"use client";

import { useState } from "react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
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
            placeholder="Search articles..."
            autoFocus
          />
          <button className="search-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        
        <div className="search-results">
          <div className="search-no-results">
            Search functionality coming soon...
          </div>
        </div>
      </div>
    </div>
  );
}
