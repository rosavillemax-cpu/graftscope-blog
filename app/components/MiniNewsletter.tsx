"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MiniNewsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const pathname = usePathname();
  const [language, setLanguage] = useState<"tr" | "en" | "de">("tr");

  useEffect(() => {
    const lang = pathname?.startsWith("/en") ? "en" : 
                 pathname?.startsWith("/de") ? "de" : "tr";
    setLanguage(lang);
  }, [pathname]);
  
  const content = {
    tr: {
      eyebrow: "HAFTALIK BÜLTEN",
      text: "Klinik stratejileri gelen kutunuza",
      placeholder: "klinik@email.com",
      button: "Abone Ol",
      success: "Teşekkürler! ✓",
      error: "Hata oluştu"
    },
    en: {
      eyebrow: "WEEKLY NEWSLETTER",
      text: "Clinic strategies to your inbox",
      placeholder: "clinic@email.com",
      button: "Subscribe",
      success: "Thank you! ✓",
      error: "Error occurred"
    },
    de: {
      eyebrow: "WÖCHENTLICHER NEWSLETTER",
      text: "Klinikstrategien in Ihrem Posteingang",
      placeholder: "klinik@email.com",
      button: "Abonnieren",
      success: "Danke! ✓",
      error: "Fehler aufgetreten"
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          language,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="mini-newsletter">
        <div className="mini-newsletter-success">
          {t.success}
        </div>
      </div>
    );
  }

  return (
    <div className="mini-newsletter">
      <div className="mini-newsletter-eyebrow">{t.eyebrow}</div>
      <p className="mini-newsletter-text">{t.text}</p>
      
      <form onSubmit={handleSubmit} className="mini-newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          required
          className="mini-newsletter-input"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="mini-newsletter-button"
        >
          {isLoading ? "..." : t.button}
        </button>
        
        {status === "error" && (
          <p className="mini-newsletter-error">{t.error}</p>
        )}
      </form>
    </div>
  );
}
