"use client";

import { useState } from "react";

export default function DemoFormEN() {
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    email: "",
    phone: "",
    message: "",
    language: "English",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.clinic.trim()) {
      newErrors.clinic = "Clinic name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your clinic";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

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
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="demo-success">
        <div className="success-content">
          <h1>Thank You!</h1>
          <p>
            We've received your demo request and will contact you within 24 hours to schedule your personalized demo of Graftscope.
          </p>
          <p>
            In the meantime, feel free to explore our articles about hair transplant clinic management and growth strategies.
          </p>
          <a href="/en" className="success-btn">
            Back to Articles
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="demo-header">
        <h1>Request a Free Demo for Your Hair Transplant Clinic</h1>
        <p>
          Transform your clinic operations with AI-powered management. See how Graftscope can help you increase efficiency, improve patient experience, and grow your practice.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="demo-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              placeholder="Your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="clinic">Clinic Name *</label>
            <input
              type="text"
              id="clinic"
              name="clinic"
              value={formData.clinic}
              onChange={handleChange}
              className={errors.clinic ? "error" : ""}
              placeholder="Your clinic name"
            />
            {errors.clinic && <span className="error-message">{errors.clinic}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              placeholder="your@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              placeholder="+90 555 123 4567"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Tell us about your clinic *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
            placeholder="Current challenges, number of procedures per month, what you'd like to improve..."
            rows={4}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <input type="hidden" name="language" value={formData.language} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="demo-submit-btn"
        >
          {isSubmitting ? "Submitting..." : "Request Demo"}
        </button>
      </form>

      <div className="demo-info">
        <h3>What to Expect in Your Demo</h3>
        <ul>
          <li>Personalized walkthrough of Graftscope features</li>
          <li>Analysis of your current clinic operations</li>
          <li>ROI calculation for your specific clinic</li>
          <li>Q&A with our clinic management experts</li>
          <li>No obligation or pressure to purchase</li>
        </ul>
      </div>
    </>
  );
}
