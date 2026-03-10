"use client";

import { useState } from "react";
import InlineCTA from "./InlineCTA";
import AutoLink from "./AutoLink";
import { usePathname } from "next/navigation";

interface MarkdownWithCTAProps {
  content: string;
}

export default function MarkdownWithCTA({ content }: MarkdownWithCTAProps) {
  const [paragraphCount, setParagraphCount] = useState(0);
  const pathname = usePathname();

  // Auto-detect language
  const language = pathname?.startsWith("/en") ? "en" : 
                   pathname?.startsWith("/de") ? "de" : "tr";

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
