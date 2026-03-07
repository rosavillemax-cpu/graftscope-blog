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

export default function DemoPageEN() {
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

    if (!formData.name.trim()) newErrors.name = "Name field is required";
    if (!formData.clinicName.trim()) newErrors.clinicName = "Clinic Name field is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone field is required";
    if (!formData.email.trim()) newErrors.email = "Email field is required";
    if (!formData.city.trim()) newErrors.city = "City field is required";
    if (!formData.monthlyPatients) newErrors.monthlyPatients = "This field is required";

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
        body: JSON.stringify({
          ...formData,
          language: "English",
        }),
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
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred while submitting the form. Please try again.");
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
              <h1 className="success-title">Request Received!</h1>
              <p className="success-message">
                We will contact you shortly.
              </p>
              <a href="/en" className="back-home-btn">
                Back to Home
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
            <h1 className="demo-title">Request a Free Demo for Your Clinic</h1>
            <p className="demo-subtitle">
              In a 30-minute introductory meeting, we'll show you how GraftScope can add value to your clinic.
            </p>
          </div>

          <form className="demo-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? "error" : ""}`}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="clinicName" className="form-label">
                  Clinic Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="clinicName"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.clinicName ? "error" : ""}`}
                  placeholder="Your clinic name"
                />
                {errors.clinicName && <span className="error-message">{errors.clinicName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`form-input ${errors.phone ? "error" : ""}`}
                  placeholder="+1 555 555 5555"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`form-input ${errors.city ? "error" : ""}`}
                  placeholder="New York"
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="monthlyPatients" className="form-label">
                  Monthly Patient Count <span className="required">*</span>
                </label>
                <select
                  id="monthlyPatients"
                  name="monthlyPatients"
                  value={formData.monthlyPatients}
                  onChange={handleInputChange}
                  className={`form-select ${errors.monthlyPatients ? "error" : ""}`}
                >
                  <option value="">Select</option>
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
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows={4}
                placeholder="Any additional notes you'd like to add?"
              />
            </div>

            <button
              type="submit"
              className="demo-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Demo"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
