import Link from "next/link";

interface AutoLinkProps {
  content: string;
  language?: string;
}

export default function AutoLink({ content, language = "en" }: AutoLinkProps) {
  // Define the keywords and their corresponding links
  const keywordLinks = {
    "clinic management": "/en/pricing",
    "CRM": "/en/articles/clinic-management-without-crm",
    "appointment": "/en/articles/appointment-optimization",
    "demo": "/en/demo"
  };

  // For Turkish language, update the links
  const turkishKeywordLinks = {
    "klinik yönetimi": "/pricing",
    "CRM": "/articles/clinic-management-without-crm",
    "randevu": "/articles/appointment-optimization",
    "demo": "/demo"
  };

  // For German language, update the links
  const germanKeywordLinks = {
    "klinikmanagement": "/de/pricing",
    "CRM": "/de/articles/clinic-management-without-crm",
    "termin": "/de/articles/appointment-optimization",
    "demo": "/de/demo"
  };

  // Select the appropriate keyword map based on language
  const currentKeywordLinks = language === "tr" ? turkishKeywordLinks : 
                            language === "de" ? germanKeywordLinks : 
                            keywordLinks;

  let processedContent = content;

  // Replace each keyword with a link
  Object.entries(currentKeywordLinks).forEach(([keyword, link]) => {
    // Create a regex that matches the keyword as a whole word, case-insensitive
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    
    // Replace with a link, preserving the original case
    processedContent = processedContent.replace(regex, (match) => {
      return `<a href="${link}" class="auto-link">${match}</a>`;
    });
  });

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
