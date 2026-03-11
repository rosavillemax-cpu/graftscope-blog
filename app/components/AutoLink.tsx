import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactNode } from 'react';

interface AutoLinkProps {
  content: string;
  language?: string;
}

export default function AutoLink({ content, language = "en" }: AutoLinkProps) {
  // Define to keywords and their corresponding links
  const keywordLinks = {
    "clinic management": "/en/pricing",
    "CRM": "/en/articles/clinic-management-without-crm",
    "appointment": "/en/articles/appointment-optimization",
    "demo": "/en/demo"
  };

  // For Turkish language, update to links
  const turkishKeywordLinks = {
    "klinik yönetimi": "/pricing",
    "CRM": "/articles/clinic-management-without-crm",
    "randevu": "/articles/appointment-optimization",
    "demo": "/demo"
  };

  // For German language, update to links
  const germanKeywordLinks = {
    "klinikmanagement": "/de/pricing",
    "CRM": "/de/articles/clinic-management-without-crm",
    "termin": "/de/articles/appointment-optimization",
    "demo": "/de/demo"
  };

  // Select appropriate keyword map based on language
  const currentKeywordLinks = language === "tr" ? turkishKeywordLinks : 
                          language === "de" ? germanKeywordLinks : 
                          keywordLinks;

  // Custom renderer for links and text processing
  const components = {
    // Custom component for text nodes to process keyword links
    p: (props: any) => {
      const children = props.children;
      if (typeof children === 'string') {
        let processedText = children;
        
        // Replace each keyword with a link
        Object.entries(currentKeywordLinks).forEach(([keyword, link]) => {
          // Create a regex that matches keyword as a whole word, case-insensitive
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
          
          // Replace with a link, preserving original case
          processedText = processedText.replace(regex, (match) => {
            return `<a href="${link}" class="auto-link">${match}</a>`;
          });
        });

        return <p dangerouslySetInnerHTML={{ __html: processedText }} />;
      }
      return <p {...props}>{children}</p>;
    },
  };

  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
