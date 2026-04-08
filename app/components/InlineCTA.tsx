"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface InlineCTAProps {
  paragraphIndex: number; // Current paragraph index
}

export default function InlineCTA({ paragraphIndex }: InlineCTAProps) {
  const pathname = usePathname();
  
  // Auto-detect language and get appropriate content
  const language = pathname?.startsWith("/en") ? "en" : pathname?.startsWith("/de") ? "de" : "tr";
  
  const content = {
    tr: {
      text: "💡 GraftScope ile kliniğinizi dijitalleştirin — Ücretsiz demo için tıklayın",
      href: "/demo"
    },
    en: {
      text: "💡 Digitize your clinic with GraftScope — Click for a free demo",
      href: "/en/demo"
    },
    de: {
      text: "💡 Digitalisieren Sie Ihre Klinik mit GraftScope — Klicken Sie für eine kostenlose Demo",
      href: "/de/demo"
    }
  };

  const currentContent = content[language];

  // Only show after 3rd paragraph (index 2, since 0-based)
  if (paragraphIndex !== 2) {
    return null;
  }

  return (
    <div className="inline-cta">
      <Link href={currentContent.href} className="inline-cta-link">
        {currentContent.text}
      </Link>
    </div>
  );
}
