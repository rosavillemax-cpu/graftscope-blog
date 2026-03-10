import Header from "@/app/components/Header";
import DemoForm from "./DemoForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Demo – Hair Transplant Clinic CRM & Software | GraftScope",
  description: "Request a free demo of GraftScope - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
  openGraph: {
    title: "Free Demo – Hair Transplant Clinic CRM & Software | GraftScope",
    description: "Request a free demo of GraftScope - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
    url: "https://www.graftscope.org/demo",
    siteName: "Graftscope",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.graftscope.org/demo",
  },
};

export default function DemoPage() {
  return (
    <div style={{ backgroundColor: "#f5f0e8", minHeight: "100vh" }}>
      <Header />
      
      <main style={{
        paddingTop: "80px",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "80px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "60px",
          alignItems: "center"
        }}>
          {/* Left Column - Benefits & Trust */}
          <div style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "40px"
          }}>
            {/* Header Section */}
            <div>
              <h1 style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "white",
                marginBottom: "16px",
                fontFamily: "var(--font-playfair)",
                lineHeight: "1.2"
              }}>
                See GraftScope in Action
              </h1>
              <p style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "0",
                fontFamily: "var(--font-dm-sans)",
                lineHeight: "1.5"
              }}>
                Join 100+ hair transplant clinics already using GraftScope
              </p>
            </div>

            {/* Benefits List */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span style={{
                  fontSize: "20px",
                  color: "#4ade80",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: "600"
                }}>
                  ✓
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "white",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  30-minute personalized demo
                </span>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span style={{
                  fontSize: "20px",
                  color: "#4ade80",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: "600"
                }}>
                  ✓
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "white",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  No commitment required
                </span>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span style={{
                  fontSize: "20px",
                  color: "#4ade80",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: "600"
                }}>
                  ✓
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "white",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  Setup support included
                </span>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span style={{
                  fontSize: "20px",
                  color: "#4ade80",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: "600"
                }}>
                  ✓
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "white",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  Available in TR · EN · DE
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.2)"
            }} />

            {/* Statistics */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px"
              }}>
                <span style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#4ade80",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  40%
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  → Higher conversion rate
                </span>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px"
              }}>
                <span style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#4ade80",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  60%
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  → Less admin time
                </span>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: "8px"
              }}>
                <span style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#4ade80",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  35%
                </span>
                <span style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontFamily: "var(--font-dm-sans)"
                }}>
                  → Better patient satisfaction
                </span>
              </div>
            </div>

            {/* Trust Badge */}
            <div style={{
              marginTop: "20px"
            }}>
              <p style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
                fontFamily: "var(--font-dm-sans)",
                fontStyle: "italic"
              }}>
                Trusted by clinics in Istanbul, Antalya, Dubai and Berlin
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <DemoForm />
          </div>
        </div>
      </main>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          
          div[style*="display: flex"] {
            flex-direction: column !important;
            gap: 40px !important;
          }
          
          h1 {
            font-size: 32px !important;
          }
          
          p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
