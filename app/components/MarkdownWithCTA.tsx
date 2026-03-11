"use client";

import { useState, useEffect } from "react";
import InlineCTA from "./InlineCTA";
import AutoLink from "./AutoLink";
import { usePathname } from "next/navigation";

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, any>) => void;
  }
}

interface MarkdownWithCTAProps {
  content: string;
}

export default function MarkdownWithCTA({ content }: MarkdownWithCTAProps) {
  const [paragraphCount, setParagraphCount] = useState(0);
  const [scrollDepths, setScrollDepths] = useState<number[]>([]);
  const pathname = usePathname();

  // Auto-detect language
  const language = pathname?.startsWith("/en") ? "en" : 
                   pathname?.startsWith("/de") ? "de" : "tr";

  // Scroll depth tracking
  useEffect(() => {
    let maxScrollDepth = 0;
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !trackedDepths.has(milestone)) {
          trackedDepths.add(milestone);
          
          // Send Google Analytics event
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll_depth', {
              'event_category': 'engagement',
              'event_label': `${milestone}%`
            });
          }
          
          setScrollDepths(prev => [...prev, milestone]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split content by paragraphs and reconstruct with CTA
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return (
    <div>
      {paragraphs.map((paragraph, index) => {
        const isThirdParagraph = index === 2; // 0-based index
        
        return (
          <div key={index}>
            <AutoLink content={paragraph} language={language} />
            {isThirdParagraph && <InlineCTA paragraphIndex={index} />}
          </div>
        );
      })}
    </div>
  );
}
