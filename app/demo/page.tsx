"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

interface FormData {
  name: string;
  clinicName: string;
  phone: string;
  email: string;
  city: string;
  monthlyPatients: string;
  message: string;
}

export default function DemoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    clinicName: "",
    phone: "",
    email: "",
    city: "",
    monthlyPatients: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Ad Soyad alanı zorunludur";
    if (!formData.clinicName.trim()) newErrors.clinicName = "Klinik Adı alanı zorunludur";
    if (!formData.phone.trim()) newErrors.phone = "Telefon alanı zorunludur";
    if (!formData.email.trim()) newErrors.email = "E-posta alanı zorunludur";
    if (!formData.city.trim()) newErrors.city = "Şehir alanı zorunludur";
    if (!formData.monthlyPatients) newErrors.monthlyPatients = "Bu alan zorunludur";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpqyzgvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          clinicName: "",
          phone: "",
          email: "",
          city: "",
          monthlyPatients: "",
          message: "",
        });
      } else {
        throw new Error("Form gönderilemedi");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="editorial-page">
        <Header />
        <main className="demo-main">
          <div className="demo-success">
            <div className="success-content">
              <h1 className="success-title">Talebiniz alındı!</h1>
              <p className="success-message">
                En kısa sürede sizinle iletişime geçeceğiz.
              </p>
              <a href="/" className="back-home-btn">
                Ana Sayfaya Dön
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="editorial-page">
      <Header />
      <main className="demo-main">
        <div className="demo-container">
          <div className="demo-header">
            <h1 className="demo-title">Kliniğiniz İçin Ücretsiz Demo Talep Edin</h1>
            <p className="demo-subtitle">
              30 dakikalık tanıtım görüşmesinde GraftScope'un kliniğinize nasıl değer katacağını göstereceğiz.
            </p>
          </div>

          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Ad Soyad <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? "error" : ""}`}
                  placeholder="Adınız ve soyadınız"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="clinicName" className="form-label">
                  Klinik Adı <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="clinicName"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.clinicName ? "error" : ""}`}
                  placeholder="Kliniğinizin adı"
                />
                {errors.clinicName && <span className="error-message">{errors.clinicName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Telefon <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`form-input ${errors.phone ? "error" : ""}`}
                  placeholder="0555 555 55 55"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  E-posta <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="ornek@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  Şehir <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`form-input ${errors.city ? "error" : ""}`}
                  placeholder="İstanbul"
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="monthlyPatients" className="form-label">
                  Aylık hasta sayısı <span className="required">*</span>
                </label>
                <select
                  id="monthlyPatients"
                  name="monthlyPatients"
                  value={formData.monthlyPatients}
                  onChange={handleInputChange}
                  className={`form-select ${errors.monthlyPatients ? "error" : ""}`}
                >
                  <option value="">Seçiniz</option>
                  <option value="1-20">1-20</option>
                  <option value="20-50">20-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100+">100+</option>
                </select>
                {errors.monthlyPatients && <span className="error-message">{errors.monthlyPatients}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows={4}
                placeholder="Eklemek istediğiniz bir not var mı?"
              />
            </div>

            <button
              type="submit"
              className="demo-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Gönderiliyor..." : "Demo Talep Et"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
