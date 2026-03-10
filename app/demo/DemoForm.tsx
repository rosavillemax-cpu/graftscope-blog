"use client";

import { useState } from "react";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "", clinicName: "", phone: "",
    email: "", city: "", patientCount: "", message: "",
  });

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto" }}>
      <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          style={{ width: "100%", border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
          type="text" placeholder="Name *" required
          onChange={e => setFormData({...formData, name: e.target.value})} />
        <input
          style={{ width: "100%", border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
          type="text" placeholder="Clinic Name *" required
          onChange={e => setFormData({...formData, clinicName: e.target.value})} />
        <input
          style={{ width: "100%", border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
          type="tel" placeholder="Phone *" required
          onChange={e => setFormData({...formData, phone: e.target.value})} />
        <input
          style={{ width: "100%", border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
          type="email" placeholder="Email *" required
          onChange={e => setFormData({...formData, email: e.target.value})} />
        <input
          style={{ width: "100%", border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
          type="text" placeholder="City *" required
          onChange={e => setFormData({...formData, city: e.target.value})} />
        <select
          style={{ width: "100%", border: "1px solid #ccc", padding: "10px", borderRadius: "6px" }}
          onChange={e => setFormData({...formData, patientCount: e.target.value})}>
          <option value="">Monthly patient count *</option>
          <option value="1-20">1-20</option>
          <option value="20-50">20-50</option>
          <option value="50-100">50-100</option>
          <option value="100+">100+</option>
        </select>
        <textarea
          style={{ width: "100%", border: "1px solid #ccc", padding: "10px", borderRadius: "6px", minHeight: "100px" }}
          placeholder="Your Message"
          onChange={e => setFormData({...formData, message: e.target.value})} />
        <button
          type="submit"
          style={{ width: "100%", backgroundColor: "#1a4d2e", color: "white", padding: "14px", borderRadius: "6px", fontWeight: "600", fontSize: "16px", cursor: "pointer", border: "none" }}>
          Request Demo
        </button>
      </form>
    </div>
  );
}
