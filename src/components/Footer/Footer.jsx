import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer content: logo on top */}
        <div className={styles.footerContent}>
          <Link to="/" className={styles.logo}>
            <img
              src="/src/assets/logo.svg"
              alt="Core Traders"
              className={styles.logoImg}
            />
          </Link>
          <h3>Core Traders</h3>
          <p>Leading supplier of high-quality engineering consumables</p>
        </div>

        {/* Quick links */}
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact info */}
        <div className={styles.footerContact}>
          <h4>Contact</h4>
          <p>📧 sales@coretraders.in</p>
          <p>📱 +91 9766443646</p>
          <p>📱 +91 9284738270</p>
          <p>
            📍 7511/3 Madhuri Gali, Azadnagar, Boisar (CT) 401506 Palghar,
            Maharashtra India
          </p>
          <p>GSTIN:27AAVFC9922E1Z0</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Core Traders. All rights reserved.</p>
      </div>
    </footer>
  );
}
