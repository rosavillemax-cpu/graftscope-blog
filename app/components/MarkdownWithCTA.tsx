"use client";

import { useState } from "react";
import InlineCTA from "./InlineCTA";

interface MarkdownWithCTAProps {
  content: string;
}

export default function MarkdownWithCTA({ content }: MarkdownWithCTAProps) {
  const [paragraphCount, setParagraphCount] = useState(0);

  // Split content by paragraphs and reconstruct with CTA
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return (
    <div>
      {paragraphs.map((paragraph, index) => {
        const isThirdParagraph = index === 2; // 0-based index
        
        return (
          <div key={index}>
            <p>{paragraph}</p>
            {isThirdParagraph && <InlineCTA paragraphIndex={index} />}
          </div>
        );
      })}
    </div>
  );
}
