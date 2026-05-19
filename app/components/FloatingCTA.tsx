"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  // Only show on article pages
  const isArticlePage = pathname?.includes("/articles/") || pathname?.includes("/kategori/") || pathname?.includes("/category/");
  
  // Auto-detect language and get appropriate content
  const language = pathname?.startsWith("/en") ? "en" : pathname?.startsWith("/de") ? "de" : "tr";
  
  const content = {
    tr: {
      text: "Kliniğiniz için ClinixGlow'u deneyin →",
      href: "/demo"
    },
    en: {
      text: "Try ClinixGlow for your clinic →",
      href: "/en/demo"
    },
    de: {
      text: "ClinixGlow für Ihre Klinik testen →",
      href: "/de/demo"
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    if (!isArticlePage || isDismissed) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;

      // Show after 50% scroll
      if (scrollPercentage >= 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isArticlePage, isDismissed]);

  if (!isVisible || !isArticlePage || isDismissed) {
    return null;
  }

  return (
    <div className="floating-cta-bar">
      <div className="floating-cta-content">
        <Link href={currentContent.href} className="floating-cta-link">
          {currentContent.text}
        </Link>
        <button 
          className="floating-cta-close"
          onClick={() => setIsDismissed(true)}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
