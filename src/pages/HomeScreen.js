import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faSync, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";


function HomeScreen() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const containersRef = useRef(null);

  const scrollContainer = (direction) => {
    if (containersRef.current) {
      const containerWidth = containersRef.current.children[0].offsetWidth;
      const scrollAmount = containerWidth + 800;
      containersRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const styles = {
    app: {
      backgroundColor: "black",
      color: "#f0f0f0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflowX: "hidden",
      fontFamily: "Poppins, sans-serif",
      position: "relative",
    },
    logo: {
      position: "absolute",
      top: "-45px",
      left: "20px",
      height: "200px",
      maxHeight: "200px",
    },
    nav: {
      position: "absolute",
      top: "20px",
      display: "inline-flex",
      gap: "20px",
      padding: "10px",
      border: "1.5px solid white",
      borderRadius: "50px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    navLink: {
      color: "#f0f0f0",
      textDecoration: "none",
      fontSize: "1.2rem",
      padding: "10px",
      transition:
        "background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease",
      borderRadius: "50px",
      backgroundColor: "transparent",
    },
    navLinkHovered: {
      backgroundColor: "#5E17EB",
      borderRadius: "50px",
    },
    hero: {
      marginTop: "100px",
      padding: "50px",
      backgroundColor: "black",
      color: "#f0f0f0",
      width: "100%",
      height: "500px",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden",
      marginBottom: "0",
    },
    heroText: {
      marginLeft: "50px",
    },
    heroTitle: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      textAlign: "left",
    },
    heroSubtitle: {
      fontSize: "1.5rem",
      marginBottom: "20px",
      textAlign: "left",
    },
    heroButton: {
      backgroundColor: "black",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "50px",
      border: "2px solid white",
      fontSize: "1rem",
      cursor: "pointer",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
      textAlign: "left",
    },
    heroImage: {
      marginRight: "-70px",
      maxWidth: "60%",
      height: "auto",
      marginTop: "180px",
      animation: "slideUp 4s ease-out",
    },
    latestArrivals: {
      width: "100%",
      padding: "50px 20px",
      backgroundColor: "black",
      boxSizing: "border-box",
      marginTop: "0",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      marginBottom: "40px",
      color: "white",
      marginLeft: "80px",
      textAlign: "left",
    },
    sectionSubtitle: {
      color: "#758694",
    },
    containersWrapper: {
      display: "flex",
      gap: "30px",
      alignItems: "flex-start",
      marginLeft: "80px",
      overflowX: "hidden",
      overflowY: "hidden",
      paddingBottom: "20px",
      scrollBehavior: "smooth",
      whiteSpace: "nowrap",
      width: "calc(100% - 160px)",
    },
    container: {
      width: "350px",
      height: "350px",
      backgroundColor: "black",
      borderRadius: "25px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: "0",
      border: "2px solid white",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    },
    containerText: {
      color: "white",
      fontSize: "0.8rem",
      marginTop: "20px",
    },
    priceText: {
      color: "#758694",
      fontSize: "1.2rem",
      marginTop: "30px",
    },
    containerImage: {
      maxWidth: "100%",
      maxHeight: "70%",
      borderRadius: "25px",
      marginTop: "70px",
    },
    carouselButton: {
      backgroundColor: "#758694",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      transition: "opacity 2s ease", // 2-second transition for fade effect
      opacity: 0, // Initial opacity set to 0
    },
    carouselButtonLeft: {
      left: "20px",
      right: "auto",
    },
    carouselButtonRight: {
      right: "20px",
      left: "auto",
    },
    carouselButtonText: {
      fontSize: "20px",
    },
    carouselButtonVisible: {
      opacity: 1, // Set opacity to 1 when visible
    },
    aboutUsTitle: {
      fontSize: "1.5rem",
      marginBottom: "40px",
      color: "white",
      marginLeft: "80px",
      textAlign: "left",
    },
    aboutUsHighlight: {
      color: "white",
    },
    aboutUsSubtitle: {
      color: "#758694",
    },
    aboutUsContainers: {
      display: "flex",
      justifyContent: "center", // Center containers horizontally
      marginLeft: "80px",
      marginRight: "80px",
      marginBottom: "40px",
      gap: "20px", // Add gap between containers
    },
    aboutUsContainer: {
      width: "400px",
      height: "150px",
      backgroundColor: "#191919",
      borderRadius: "15px",
      padding: "20px",
      color: "#f0f0f0",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      textAlign: "center", // Ensure text is centered
    },
    icon: {
      fontSize: "2rem",
      color: "#06D001",
      position: "relative",
      marginBottom: "10px", // Add margin-bottom to create space between icon and text
    },

    containerContent: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginTop: "10px", // Ensure consistent margin-top for uniform spacing
      textAlign: "center", // Center text inside the container
    },
    accountCartContainer: {
      position: "absolute",
      top: "35px",
      right: "50px",
      display: "flex",
      gap: "23px",
    },

    iconButton: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1.5px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },

    icon1: {
      color: "#f0f0f0",
      fontSize: "1.4rem",
    },
  };
  const animationStyles = `
    @keyframes slideUp {
      from {
        transform: translateY(200px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;

  return (
    <div style={styles.app}>
      <style>{animationStyles}</style>
      <img
        src={`${process.env.PUBLIC_URL}/xplora-logo.png`}
        alt="Xplora Logo"
        style={styles.logo}
      />
      <div style={styles.accountCartContainer}>
        <div style={styles.iconButton}>
        <LuUserRound style={styles.icon1} />
        </div>
        <div style={styles.iconButton}>
        <HiOutlineShoppingBag  style={styles.icon1} />
        </div>
      </div>

      <nav style={styles.nav}>
        <a
          href="#home"
          style={{
            ...styles.navLink,
            ...(hoveredLink === "home" ? styles.navLinkHovered : {}),
          }}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Home
        </a>
        <a
          href="#about"
          style={{
            ...styles.navLink,
            ...(hoveredLink === "about" ? styles.navLinkHovered : {}),
          }}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          About Us
        </a>
        <a
          href="#shop"
          style={{
            ...styles.navLink,
            ...(hoveredLink === "shop" ? styles.navLinkHovered : {}),
          }}
          onMouseEnter={() => setHoveredLink("shop")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Shop
        </a>
        <a
          href="#contact"
          style={{
            ...styles.navLink,
            ...(hoveredLink === "contact" ? styles.navLinkHovered : {}),
          }}
          onMouseEnter={() => setHoveredLink("contact")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Contact Us
        </a>
      </nav>
      <div style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Welcome to Xplora</h1>
          <p style={styles.heroSubtitle}>
            Discover the latest in tech and gadgets. Shop now for exclusive
            deals!
          </p>
          <a href="#shop" style={styles.heroButton}>
            Start Shopping
          </a>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/iphones.png`}
          alt="iPhone Hero"
          style={styles.heroImage}
        />
      </div>
      <div
        style={styles.latestArrivals}
        onMouseEnter={() => setIsHovered(true)} // Show buttons on hover
        onMouseLeave={() => setIsHovered(false)} // Hide buttons when not hovered
      >
        <h2 style={styles.sectionTitle}>
          Latest Arrivals.{" "}
          <span style={styles.sectionSubtitle}>
            Check out the hottest new tech, right now.
          </span>
        </h2>
        <div style={styles.containersWrapper} ref={containersRef}>
          <div style={styles.container}>
            <div style={styles.containerText}>iPhone 16/Plus/Pro/Pro Max</div>
            <div style={styles.priceText}>Starting from Rs.279,000*</div>
            <img
              src={`${process.env.PUBLIC_URL}/new-i.png`}
              alt="Latest Arrival"
              style={styles.containerImage}
            />
          </div>
          <div style={styles.container}>
            <div style={styles.containerText}>Google Pixel 9/Pro Fold</div>
            <div style={styles.priceText}>Starting from Rs.239,000*</div>
            <img
              src={`${process.env.PUBLIC_URL}/gpixel-new.png`}
              alt="Latest Arrival"
              style={styles.containerImage}
            />
          </div>
          <div style={styles.container}>
            <div style={styles.containerText}>AirPods Pro</div>
            <div style={styles.priceText}>Starting from Rs.59,000*</div>
            <img
              src={`${process.env.PUBLIC_URL}/earpod-latest.png`}
              alt="Latest Arrival"
              style={styles.containerImage}
            />
          </div>
          <div style={styles.container}>
            <div style={styles.containerText}>Brane X Portable Speaker</div>
            <div style={styles.priceText}>Starting from Rs.39,000*</div>
            <img
              src={`${process.env.PUBLIC_URL}/speaker-latest.png`}
              alt="Latest Arrival"
              style={styles.containerImage}
            />
          </div>
          <div style={styles.container}>
            <div style={styles.containerText}>E-Ink Phone case</div>
            <div style={styles.priceText}>Starting from Rs.1,500*</div>
            <img
              src={`${process.env.PUBLIC_URL}/case-latest.png`}
              alt="Latest Arrival"
              style={styles.containerImage}
            />
          </div>
          <div style={styles.container}>
            <div style={styles.containerText}>Ocean Wave projector</div>
            <div style={styles.priceText}>Starting from Rs.4,000*</div>
            <img
              src={`${process.env.PUBLIC_URL}/pro2-latest.png`}
              alt="Latest Arrival"
              style={styles.containerImage}
            />
          </div>
        </div>

        {/* Keep buttons always rendered */}
        <button
          style={{
            ...styles.carouselButton,
            ...styles.carouselButtonLeft,
            ...(isHovered ? styles.carouselButtonVisible : {}),
          }}
          onClick={() => scrollContainer("left")}
        >
          <span style={styles.carouselButtonText}>❮</span>
        </button>
        <button
          style={{
            ...styles.carouselButton,
            ...styles.carouselButtonRight,
            ...(isHovered ? styles.carouselButtonVisible : {}),
          }}
          onClick={() => scrollContainer("right")}
        >
          <span style={styles.carouselButtonText}>❯</span>
        </button>
      </div>
      <div style={styles.latestArrivals}>
        <h2 style={styles.aboutUsTitle}>
          <span style={styles.aboutUsHighlight}>The Store Difference.</span>{" "}
          <span style={styles.aboutUsSubtitle}>
            Even more reasons to shop with us.
          </span>
        </h2>
        <div style={styles.aboutUsContainers}>
          <div style={styles.aboutUsContainer}>
            <FontAwesomeIcon icon={faTruck} style={styles.icon} />
            <div style={styles.containerContent}>
              Enjoy 1-4 day island delivery, or easy pickup.
            </div>
          </div>
          <div style={styles.aboutUsContainer}>
            <FontAwesomeIcon icon={faSync} style={styles.icon} />
            <div style={styles.containerContent}>
              Offering 100% premium, unblemished products for your ultimate
              satisfaction.
            </div>
          </div>
          <div style={styles.aboutUsContainer}>
            <FontAwesomeIcon icon={faHeadset} style={styles.icon} />
            <div style={styles.containerContent}>
              Our support team is available 24/7 to assist you with any queries
              or issues.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
