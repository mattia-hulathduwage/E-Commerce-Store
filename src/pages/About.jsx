import React, { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="about-container">
      <img
        src={`${process.env.PUBLIC_URL}/xplora-logo.png`}
        alt="Xplora Logo"
        className="about-logo"
      />

      <div className="about-account-cart">
        <button className="about-icon-button">
          <LuUserRound className="about-icon" />
        </button>
        <button className="about-icon-button">
          <HiOutlineShoppingBag className="about-icon" />
        </button>
      </div>

      <nav className="about-navbar">
        <a
          href="#home"
          className={`about-nav-link ${hoveredLink === "home" ? "about-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`about-nav-link ${hoveredLink === "about" ? "about-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          About Us
        </a>
        <a
          href="#shop"
          className={`about-nav-link ${hoveredLink === "shop" ? "about-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("shop")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/shop")}
        >
          Shop
        </a>
        <a
          href="#contact"
          className={`about-nav-link ${hoveredLink === "contact" ? "about-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("contact")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/contact")}
        >
          Contact Us
        </a>
      </nav>

      <section className="about-hero">
        <h1 className="about-hero-title">About Xplora</h1>
        <p className="about-hero-subtitle">
          Your Premier Destination for Premium Tech and Gadgets
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2 className="about-section-title">Our Story</h2>
          <p className="about-section-text">
            Xplora was founded with a simple mission: to make premium technology
            accessible to everyone. We believe that cutting-edge gadgets should
            not be a luxury reserved for the few, but an opportunity available
            to all. Our journey started in 2020, and since then, we have grown
            to become one of the most trusted tech retailers in the region.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Our Mission</h2>
          <p className="about-section-text">
            At Xplora, our mission is to empower individuals by providing them
            with the latest and greatest in technology. We are committed to
            offering a curated selection of premium products, exceptional
            customer service, and competitive pricing. We strive to be the
            trusted partner for all your tech needs.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Our Values</h2>
          <ul className="about-values-list">
            <li>
              <strong>Quality:</strong> We only stock premium, original products
              from trusted manufacturers.
            </li>
            <li>
              <strong>Integrity:</strong> We believe in transparency and honest
              dealings with our customers.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously seek out the latest
              products and technologies.
            </li>
            <li>
              <strong>Customer Focus:</strong> Your satisfaction is our top
              priority.
            </li>
            <li>
              <strong>Accessibility:</strong> We make premium tech affordable
              for everyone.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Why Choose Xplora?</h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <h3>Curated Selection</h3>
              <p>
                We handpick every product to ensure you get the best quality and
                value.
              </p>
            </div>
            <div className="why-card">
              <h3>Fast Delivery</h3>
              <p>
                Island-wide delivery within 1-4 days, or convenient pickup
                options.
              </p>
            </div>
            <div className="why-card">
              <h3>Expert Support</h3>
              <p>
                24/7 customer support to help you choose the right product and
                resolve any issues.
              </p>
            </div>
            <div className="why-card">
              <h3>Authentic Products</h3>
              <p>
                100% original products with official warranties and guarantees.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="about-section-title">Our Team</h2>
          <p className="about-section-text">
            Our dedicated team of tech enthusiasts and customer service experts
            are passionate about helping you find the perfect gadget. With years
            of combined experience in the tech industry, we're here to guide you
            through every purchase and ensure you have the best experience
            possible.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Explore?</h2>
        <p>
          Visit our shop and discover your next favorite tech product today!
        </p>
        <button
          className="about-cta-button"
          onClick={() => handleNavigation("/shop")}
        >
          Start Shopping
        </button>
      </section>
    </div>
  );
};

export default About;
