"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface CookieConsentProps {
  language?: "tr" | "en" | "de";
}

export default function CookieConsent({ language }: CookieConsentProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<"accepted" | "rejected" | "essential" | null>(null);

  // Auto-detect language from pathname if not provided
  const currentLanguage = language || (pathname.startsWith("/en") ? "en" : pathname.startsWith("/de") ? "de" : "tr");

  const content = {
    tr: {
      message: "Bu site, deneyiminizi iyileştirmek için çerezler kullanmaktadır. Devam ederek çerez kullanımını kabul etmiş olursunuz.",
      accept: "Kabul Et",
      reject: "Reddet",
      essential: "Yalnızca Zorunlular"
    },
    en: {
      message: "This website uses cookies to improve your experience. By continuing, you accept our use of cookies.",
      accept: "Accept All",
      reject: "Reject",
      essential: "Essential Only"
    },
    de: {
      message: "Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung stimmen Sie der Verwendung von Cookies zu.",
      accept: "Alle Akzeptieren",
      reject: "Ablehnen",
      essential: "Nur Notwendige"
    }
  };

  const t = content[currentLanguage];

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      setConsent(savedConsent as any);
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    setConsent("rejected");
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleEssential = () => {
    setConsent("essential");
    localStorage.setItem("cookieConsent", "essential");
    setIsVisible(false);
  };

  if (!isVisible || consent) {
    return null;
  }

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(26, 77, 46, 0.95)",
      color: "white",
      padding: "16px 20px",
      zIndex: 9999,
      boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
      backdropFilter: "blur(10px)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center"
      }}>
        <p style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: "1.5",
          textAlign: "center",
          color: "white"
        }}>
          {t.message}
        </p>
        <div style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <button
            onClick={handleAccept}
            style={{
              backgroundColor: "white",
              color: "#1a4d2e",
              border: "none",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e: any) => {
              e.currentTarget.style.backgroundColor = "#f0f0f0";
            }}
            onMouseOut={(e: any) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            {t.accept}
          </button>
          <button
            onClick={handleEssential}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e: any) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
            onMouseOut={(e: any) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {t.essential}
          </button>
          <button
            onClick={handleReject}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              padding: "8px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
              transition: "all 0.2s ease"
            }}
            onMouseOver={(e: any) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseOut={(e: any) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            {t.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
