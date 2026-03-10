"use client";

import { useState } from "react";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    phone: "",
    email: "",
    city: "",
    patientCount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      padding: "40px",
      maxWidth: "480px"
    }}>
      <h2 style={{
        fontSize: "24px",
        fontWeight: "600",
        color: "#1a1a1a",
        marginBottom: "8px",
        fontFamily: "var(--font-dm-sans)"
      }}>
        Request Your Free Demo
      </h2>
      <p style={{
        fontSize: "14px",
        color: "#666",
        marginBottom: "32px",
        fontFamily: "var(--font-dm-sans)"
      }}>
        We'll reach out within 24 hours
      </p>

      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <input
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "15px",
            fontFamily: "var(--font-dm-sans)",
            boxSizing: "border-box"
          }}
        />
        
        <input
          type="text"
          placeholder="Clinic Name"
          required
          value={formData.clinicName}
          onChange={e => setFormData({...formData, clinicName: e.target.value})}
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "15px",
            fontFamily: "var(--font-dm-sans)",
            boxSizing: "border-box"
          }}
        />

        <input
          type="tel"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "15px",
            fontFamily: "var(--font-dm-sans)",
            boxSizing: "border-box"
          }}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "15px",
            fontFamily: "var(--font-dm-sans)",
            boxSizing: "border-box"
          }}
        />

        <input
          type="text"
          placeholder="City"
          required
          value={formData.city}
          onChange={e => setFormData({...formData, city: e.target.value})}
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "15px",
            fontFamily: "var(--font-dm-sans)",
            boxSizing: "border-box"
          }}
        />

        <select
          required
          value={formData.patientCount}
          onChange={e => setFormData({...formData, patientCount: e.target.value})}
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "15px",
            fontFamily: "var(--font-dm-sans)",
            boxSizing: "border-box",
            color: formData.patientCount ? "#1a1a1a" : "#999"
          }}
        >
          <option value="" style={{ color: "#999" }}>Monthly patient count</option>
          <option value="1-20">1-20</option>
          <option value="20-50">20-50</option>
          <option value="50-100">50-100</option>
          <option value="100+">100+</option>
        </select>

        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
          rows={3}
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            fontSize: "15px",
            fontFamily: "var(--font-dm-sans)",
            boxSizing: "border-box",
            resize: "vertical",
            minHeight: "90px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#1a4d2e",
            color: "white",
            padding: "16px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "var(--font-dm-sans)",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#2a5d3e";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#1a4d2e";
          }}
        >
          Request Free Demo →
        </button>
      </form>

      <p style={{
        fontSize: "12px",
        color: "#999",
        textAlign: "center",
        marginTop: "20px",
        fontFamily: "var(--font-dm-sans)"
      }}>
        🔒 Your information is kept confidential
      </p>
    </div>
  );
}
