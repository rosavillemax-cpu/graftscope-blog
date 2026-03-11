"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");
  const isGermanPage = pathname?.startsWith("/de");

  const getLanguage = () => {
    if (isEnglishPage) return "en";
    if (isGermanPage) return "de";
    return "tr";
  };

  const language = getLanguage();

  const legalLinks = {
    tr: {
      privacy: "/gizlilik-politikasi",
      terms: "/kullanim-kosullari",
      privacyText: "Gizlilik Politikası",
      termsText: "Kullanım Koşulları"
    },
    en: {
      privacy: "/privacy-policy",
      terms: "/terms",
      privacyText: "Privacy Policy",
      termsText: "Terms of Use"
    },
    de: {
      privacy: "/datenschutz",
      terms: "/nutzungsbedingungen",
      privacyText: "Datenschutz",
      termsText: "Nutzungsbedingungen"
    }
  };

  const currentLinks = legalLinks[language];

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.8rem', color: '#0f0f0f' }}>Graftscope</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#1a6b4a', marginTop: '-4px' }}>insights</span>
          </div>
        </div>
        
        <div className="footer-section footer-links">
          <h4 className="footer-heading">
            {isEnglishPage ? "Quick Links" : "Hızlı Linkler"}
          </h4>
          <nav className="footer-nav">
            <Link href={isEnglishPage ? "/en" : "/"} className="footer-link">
              {isEnglishPage ? "Home" : "Ana Sayfa"}
            </Link>
            <Link href={isEnglishPage ? "/en/demo" : "/demo"} className="footer-link">
              Demo
            </Link>
            <Link href={isEnglishPage ? "/en/category/technology" : "/kategori/teknoloji"} className="footer-link">
              {isEnglishPage ? "Categories" : "Kategoriler"}
            </Link>
          </nav>
        </div>
        
        <div className="footer-section footer-contact">
          <h4 className="footer-heading">
            {isEnglishPage ? "Contact Info" : isGermanPage ? "Kontakt" : "İletişim Bilgileri"}
          </h4>
          <div className="footer-contact-info">
            <a href="mailto:contact@graftscope.com" className="footer-contact-link">
              contact@graftscope.com
            </a>
            <a href="https://www.graftscope.com" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
              www.graftscope.com
            </a>
          </div>
        </div>
        
        <div className="footer-section footer-legal">
          <h4 className="footer-heading">
            {isEnglishPage ? "Legal" : isGermanPage ? "Rechtliches" : "Yasal"}
          </h4>
          <nav className="footer-nav">
            <Link href={currentLinks.privacy} className="footer-link">
              {currentLinks.privacyText}
            </Link>
            <Link href={currentLinks.terms} className="footer-link">
              {currentLinks.termsText}
            </Link>
          </nav>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Graftscope. {isEnglishPage ? "All rights reserved." : isGermanPage ? "Alle Rechte vorbehalten." : "Tüm hakları saklıdır."}
        </p>
        <p className="footer-software-link">
          {isEnglishPage ? "Looking for the software?" : "Yazılımı mı arıyorsunuz?"} → <a href="https://www.graftscope.com" target="_blank" rel="noopener noreferrer" className="footer-software-url">graftscope.com</a>
        </p>
      </div>
    </footer>
  );
}
