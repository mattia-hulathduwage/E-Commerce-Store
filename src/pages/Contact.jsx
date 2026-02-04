import React, { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";

const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <img
        src={`${process.env.PUBLIC_URL}/xplora-logo.png`}
        alt="Xplora Logo"
        className="contact-logo"
      />

      <div className="contact-account-cart">
        <button className="contact-icon-button">
          <LuUserRound className="contact-icon" />
        </button>
        <button className="contact-icon-button">
          <HiOutlineShoppingBag className="contact-icon" />
        </button>
      </div>

      <nav className="contact-navbar">
        <a
          href="#home"
          className={`contact-nav-link ${hoveredLink === "home" ? "contact-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`contact-nav-link ${hoveredLink === "about" ? "contact-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/about")}
        >
          About Us
        </a>
        <a
          href="#shop"
          className={`contact-nav-link ${hoveredLink === "shop" ? "contact-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("shop")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/shop")}
        >
          Shop
        </a>
        <a
          href="#contact"
          className={`contact-nav-link ${hoveredLink === "contact" ? "contact-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("contact")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Contact Us
        </a>
      </nav>

      <section className="contact-hero">
        <h1 className="contact-hero-title">Get in Touch</h1>
        <p className="contact-hero-subtitle">
          We'd love to hear from you. Send us a message!
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-section">
            <h3>Contact Information</h3>
            <p>
              <strong>Address:</strong>
              <br />
              Xplora Tech Store
              <br />
              123 Tech Avenue, Innovation City
              <br />
              Island Country
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              +1 (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              support@xplora.com
            </p>
            <p>
              <strong>Hours:</strong>
              <br />
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>

          <div className="info-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-item">
              <h4>What is your return policy?</h4>
              <p>
                We offer a 30-day return policy on all products in original
                condition with all accessories included.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you offer warranty?</h4>
              <p>
                Yes, all products come with official manufacturer warranties.
                Extended warranties are also available.
              </p>
            </div>
            <div className="faq-item">
              <h4>How long does delivery take?</h4>
              <p>
                We offer 1-4 day island-wide delivery depending on your
                location.
              </p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="How can we help?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="6"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
