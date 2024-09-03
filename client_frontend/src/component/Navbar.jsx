import { useState } from "react";
import styles from "./Navbar.module.css";
import car_img from "../assets/vehikart-high-resolution-logo-transparent.png"
import cart_img from "../assets/shopping-cart.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-header"]}>
          <div className={styles["logo"]}>
            <a href="/"><img src={car_img} alt="logo"/></a>
          </div>
          <button
            className={styles["menu-icon"]}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>
        </div>
        <div
          className={`${styles["navbar-links"]} ${
            isMenuOpen ? styles["active"] : ""
          }`}
        >
          <a href="/home" className={styles["link"]}>
            Home
          </a>
          <a href="/about" className={styles["link"]}>
            About
          </a>
          <a href="/services" className={styles["link"]}>
            Services
          </a>
          <a href="/contact" className={styles["link"]}>
            Contact
          </a>
          <a href="/cart" className={styles["link"]}>
          Cart
          <img src={cart_img} alt="logo"/>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
