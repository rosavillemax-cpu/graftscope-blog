"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h3 className="footer-logo">Graftscope</h3>
          <div className="footer-logo-insights">insights</div>
          <p className="footer-tagline">
            {isEnglishPage 
              ? "Hair Transplant Clinic Management Guide"
              : "Saç Ekim Klinikleri İçin Rehber"
            }
          </p>
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
            {isEnglishPage ? "Contact Info" : "İletişim Bilgileri"}
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
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Graftscope. {isEnglishPage ? "All rights reserved." : "Tüm hakları saklıdır."}
        </p>
      </div>
    </footer>
  );
}
