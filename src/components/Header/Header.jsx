import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"; // adjust path relative to your component
import { GlobalContext } from "../../contexts/GlobalContext";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, cartItems, logout } = useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Core Traders" className={styles.logoImg} />
          <div className={styles.logoText}>
            <h1>CORE TRADERS</h1>
            <p>Engineering Excellence</p>
          </div>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          {user && (
            <Link to="/portal" onClick={() => setMenuOpen(false)}>
              Portal
            </Link>
          )}
        </nav>

        <div className={styles.actions}>
          {/* <Link to="#" className={styles.cartBadge}>
            🛒
            {cartItems.length > 0 && (
              <span className={styles.badge}>{cartItems.length}</span>
            )}
          </Link> */}
          {user ? (
            <>
              <span className={styles.userName}>{user.name}</span>
              <button onClick={logout} className={styles.logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="#" className={styles.authLink}>
                Login
              </Link>
              <Link to="#" className={styles.authLink}>
                Sign In
              </Link>
            </>
          )}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
