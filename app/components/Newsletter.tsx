"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

interface NewsletterProps {
  language?: "tr" | "en";
}

export default function Newsletter({ language }: NewsletterProps) {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Auto-detect language from pathname if not provided
  const currentLanguage = language || (pathname.startsWith("/en") ? "en" : "tr");

  const content = {
    tr: {
      eyebrow: "HAFTALIK BÜLTEN",
      headline: "Klinik yönetimi içgörüleri, doğrudan gelen kutunuza",
      subtext: "Saç ekimi klinikleri için haftalık stratejiler, pazar analizleri ve operasyonel ipuçları.",
      placeholder: "klinik@email.com",
      button: "Abone Ol",
      disclaimer: "Yalnızca klinik sahipleri ve yöneticileri için. Spam yok.",
      success: "Teşekkürler! Abone oldunuz.",
      error: "Bir hata oluştu, tekrar deneyin."
    },
    en: {
      eyebrow: "WEEKLY NEWSLETTER",
      headline: "Clinic management insights, straight to your inbox",
      subtext: "Weekly strategies, market analyses and operational tips for hair transplant clinics.",
      placeholder: "clinic@email.com",
      button: "Subscribe",
      disclaimer: "For clinic owners and managers only. No spam.",
      success: "Thank you! You're subscribed.",
      error: "An error occurred, please try again."
    }
  };

  const t = content[currentLanguage];

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
          language: currentLanguage,
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
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <div className="newsletter-success">
              <h3 className="newsletter-headline">{t.success}</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <span className="newsletter-eyebrow">{t.eyebrow}</span>
            <h3 className="newsletter-headline">{t.headline}</h3>
            <p className="newsletter-subtext">{t.subtext}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                required
                className="newsletter-input"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !email}
                className="newsletter-button"
              >
                {isLoading ? "..." : t.button}
              </button>
            </div>
            
            {status === "error" && (
              <p className="newsletter-error">{t.error}</p>
            )}
            
            <p className="newsletter-disclaimer">{t.disclaimer}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
