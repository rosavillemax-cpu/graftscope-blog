"use client";
import { useState } from "react";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "", clinicName: "", phone: "",
    email: "", city: "", patientCount: "", message: "",
  });

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f5f0e8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 24px"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        maxWidth: "960px",
        width: "100%"
      }}>

        {/* SOL KOLON */}
        <div style={{
          backgroundColor: "#1a4d2e",
          borderRadius: "16px",
          padding: "48px 40px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "12px", lineHeight: "1.3" }}>
            See GraftScope in Action
          </h1>
          <p style={{ fontSize: "15px", opacity: 0.8, marginBottom: "36px" }}>
            Join 100+ hair transplant clinics already using GraftScope
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              "30-minute personalized demo",
              "No commitment required",
              "Setup support included",
              "Available in TR · EN · DE"
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{
                  width: "22px", height: "22px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", flexShrink: 0
                }}>✓</span>
                <span style={{ fontSize: "15px" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "24px" }}>
              {[
                { value: "40%", label: "Higher conversion" },
                { value: "60%", label: "Less admin time" },
                { value: "35%", label: "Better satisfaction" }
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "24px", fontWeight: "700", color: "#4ade80" }}>{stat.value}</div>
                  <div style={{ fontSize: "11px", opacity: 0.7, marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "12px", opacity: 0.6, textAlign: "center" }}>
              Trusted by clinics in Istanbul, Antalya, Dubai and Berlin
            </p>
          </div>
        </div>

        {/* SAĞ KOLON */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "40px 36px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "6px" }}>
            Request Your Free Demo
          </h2>
          <p style={{ fontSize: "14px", color: "#888", marginBottom: "28px" }}>
            We'll reach out within 24 hours
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { placeholder: "Name *", type: "text", key: "name" },
              { placeholder: "Clinic Name *", type: "text", key: "clinicName" },
              { placeholder: "Phone *", type: "tel", key: "phone" },
              { placeholder: "Email *", type: "email", key: "email" },
              { placeholder: "City *", type: "text", key: "city" },
            ].map((field) => (
              <input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box"
                }}
                onChange={e => setFormData({...formData, [field.key]: e.target.value})}
              />
            ))}

            <select
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                backgroundColor: "white",
                boxSizing: "border-box"
              }}
              onChange={e => setFormData({...formData, patientCount: e.target.value})}
            >
              <option value="">Monthly patient count *</option>
              <option value="1-20">1-20</option>
              <option value="20-50">20-50</option>
              <option value="50-100">50-100</option>
              <option value="100+">100+</option>
            </select>

            <textarea
              placeholder="Your Message"
              rows={3}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                boxSizing: "border-box"
              }}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#1a4d2e",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "4px"
              }}
            >
              Request Free Demo →
            </button>

            <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", margin: 0 }}>
              🔒 Your information is kept confidential
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
