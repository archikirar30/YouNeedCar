import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles["navbar"]}>
        <div className={styles["logo"]}>
          <a href="/">YouNeedCar</a>
        </div>
        <div className={styles["navbar-links"]}>
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
