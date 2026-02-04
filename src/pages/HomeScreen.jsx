import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faSync, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import "../styles/HomeScreen.css";

const HomeScreen = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const containersRef = useRef(null);
  const navigate = useNavigate();

  const scrollContainer = (direction) => {
    if (containersRef.current) {
      const containerWidth = containersRef.current.children[0].offsetWidth;
      const scrollAmount = containerWidth + 30;
      containersRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "iPhone 16/Plus/Pro/Pro Max",
      price: "Starting from Rs.279,000*",
      image: "/iphones.png",
    },
    {
      id: 2,
      name: "Google Pixel 9/Pro Fold",
      price: "Starting from Rs.239,000*",
      image: "/gpixel-new.png",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: "Starting from Rs.59,000*",
      image: "/earpod-latest.png",
    },
    {
      id: 4,
      name: "Brane X Portable Speaker",
      price: "Starting from Rs.39,000*",
      image: "/speaker-latest.png",
    },
    {
      id: 5,
      name: "E-Ink Phone case",
      price: "Starting from Rs.1,500*",
      image: "/case-latest.png",
    },
    {
      id: 6,
      name: "Ocean Wave projector",
      price: "Starting from Rs.4,000*",
      image: "/pro2-latest.png",
    },
  ];

  const features = [
    {
      icon: faTruck,
      title: "Fast Delivery",
      description: "Enjoy 1-4 day island delivery, or easy pickup.",
    },
    {
      icon: faSync,
      title: "Premium Quality",
      description:
        "Offering 100% premium, unblemished products for your ultimate satisfaction.",
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      description:
        "Our support team is available 24/7 to assist you with any queries or issues.",
    },
  ];

  return (
    <div className="home-screen">
      <img
        src={`${process.env.PUBLIC_URL}/xplora-logo.png`}
        alt="Xplora Logo"
        className="logo"
      />

      <div className="account-cart-container">
        <button className="icon-button">
          <LuUserRound className="icon-style" />
        </button>
        <button className="icon-button">
          <HiOutlineShoppingBag className="icon-style" />
        </button>
      </div>

      <nav className="navbar">
        <Link
          to="/"
          className={`nav-link ${hoveredLink === "home" ? "nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ${hoveredLink === "about" ? "nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          About Us
        </Link>
        <Link
          to="/shop"
          className={`nav-link ${hoveredLink === "shop" ? "nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("shop")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${hoveredLink === "contact" ? "nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("contact")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Contact Us
        </Link>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Xplora</h1>
          <p className="hero-subtitle">
            Discover the latest in tech and gadgets. Shop now for exclusive
            deals!
          </p>
          <button className="hero-button" onClick={() => navigate("/shop")}>
            Start Shopping
          </button>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/iphones.png`}
          alt="iPhone Hero"
          className="hero-image"
        />
      </section>

      <section
        className="latest-arrivals"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="section-title">
          Latest Arrivals.{" "}
          <span className="section-subtitle">
            Check out the hottest new tech, right now.
          </span>
        </h2>

        <div className="containers-wrapper" ref={containersRef}>
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <div className="container-text">{product.name}</div>
              <div className="price-text">{product.price}</div>
              <img
                src={`${process.env.PUBLIC_URL}${product.image}`}
                alt={product.name}
                className="container-image"
              />
            </div>
          ))}
        </div>

        <button
          className={`carousel-button carousel-button-left ${
            isHovered ? "carousel-button-visible" : ""
          }`}
          onClick={() => scrollContainer("left")}
          aria-label="Scroll left"
        >
          <span className="carousel-button-text">❮</span>
        </button>
        <button
          className={`carousel-button carousel-button-right ${
            isHovered ? "carousel-button-visible" : ""
          }`}
          onClick={() => scrollContainer("right")}
          aria-label="Scroll right"
        >
          <span className="carousel-button-text">❯</span>
        </button>
      </section>

      <section className="store-difference">
        <h2 className="store-title">
          <span className="store-highlight">The Store Difference.</span>{" "}
          <span className="store-subtitle">
            Even more reasons to shop with us.
          </span>
        </h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
