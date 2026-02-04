import React, { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "../styles/Shop.css";

const Shop = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const allProducts = [
    {
      id: 1,
      name: "iPhone 16 Pro Max",
      category: "phones",
      price: 279000,
      image: "/iphones.png",
      description: "Latest iPhone with advanced camera system",
    },
    {
      id: 2,
      name: "Google Pixel 9 Pro",
      category: "phones",
      price: 239000,
      image: "/gpixel-new.png",
      description: "Google's flagship phone with AI features",
    },
    {
      id: 3,
      name: "AirPods Pro",
      category: "audio",
      price: 59000,
      image: "/earpod-latest.png",
      description: "Premium wireless earbuds with ANC",
    },
    {
      id: 4,
      name: "Brane X Speaker",
      category: "audio",
      price: 39000,
      image: "/speaker-latest.png",
      description: "Portable high-quality Bluetooth speaker",
    },
    {
      id: 5,
      name: "E-Ink Phone Case",
      category: "accessories",
      price: 1500,
      image: "/case-latest.png",
      description: "Smart case with E-Ink display",
    },
    {
      id: 6,
      name: "Ocean Wave Projector",
      category: "accessories",
      price: 4000,
      image: "/pro2-latest.png",
      description: "LED projector with ocean wave effects",
    },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "phones", label: "Phones" },
    { id: "audio", label: "Audio" },
    { id: "accessories", label: "Accessories" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="shop-container">
      <img
        src={`${process.env.PUBLIC_URL}/xplora-logo.png`}
        alt="Xplora Logo"
        className="shop-logo"
      />

      <div className="shop-account-cart">
        <button className="shop-icon-button">
          <LuUserRound className="shop-icon" />
        </button>
        <button className="shop-icon-button">
          <HiOutlineShoppingBag className="shop-icon" />
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </button>
      </div>

      <nav className="shop-navbar">
        <a
          href="#home"
          className={`shop-nav-link ${hoveredLink === "home" ? "shop-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`shop-nav-link ${hoveredLink === "about" ? "shop-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/about")}
        >
          About Us
        </a>
        <a
          href="#shop"
          className={`shop-nav-link ${hoveredLink === "shop" ? "shop-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("shop")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Shop
        </a>
        <a
          href="#contact"
          className={`shop-nav-link ${hoveredLink === "contact" ? "shop-nav-link-hovered" : ""}`}
          onMouseEnter={() => setHoveredLink("contact")}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => handleNavigation("/contact")}
        >
          Contact Us
        </a>
      </nav>

      <section className="shop-hero">
        <h1 className="shop-hero-title">Shop Xplora</h1>
        <p className="shop-hero-subtitle">
          Discover our full collection of premium tech products
        </p>
      </section>

      <section className="shop-content">
        <div className="shop-filters">
          <h3>Categories</h3>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-button ${
                selectedCategory === cat.id ? "filter-button-active" : ""
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="shop-products">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={`${process.env.PUBLIC_URL}${product.image}`}
                    alt={product.name}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">
                      Rs. {product.price.toLocaleString()}
                    </span>
                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
