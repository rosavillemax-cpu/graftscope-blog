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
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input type="text" placeholder="Name *" required
        className="w-full border p-2 rounded"
        onChange={e => setFormData({...formData, name: e.target.value})} />
      <input type="text" placeholder="Clinic Name *" required
        className="w-full border p-2 rounded"
        onChange={e => setFormData({...formData, clinicName: e.target.value})} />
      <input type="tel" placeholder="Phone *" required
        className="w-full border p-2 rounded"
        onChange={e => setFormData({...formData, phone: e.target.value})} />
      <input type="email" placeholder="Email *" required
        className="w-full border p-2 rounded"
        onChange={e => setFormData({...formData, email: e.target.value})} />
      <input type="text" placeholder="City *" required
        className="w-full border p-2 rounded"
        onChange={e => setFormData({...formData, city: e.target.value})} />
      <select required className="w-full border p-2 rounded"
        onChange={e => setFormData({...formData, patientCount: e.target.value})}>
        <option value="">Monthly patient count *</option>
        <option value="1-20">1-20</option>
        <option value="20-50">20-50</option>
        <option value="50-100">50-100</option>
        <option value="100+">100+</option>
      </select>
      <textarea placeholder="Your Message"
        className="w-full border p-2 rounded"
        onChange={e => setFormData({...formData, message: e.target.value})} />
      <button type="submit"
        className="w-full bg-green-700 text-white py-3 rounded font-semibold">
        Request Demo
      </button>
    </form>
  );
}
