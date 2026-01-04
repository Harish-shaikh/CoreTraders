import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import styles from "./home.module.css";

export default function Home() {
  const { products, addToCart } = useContext(GlobalContext);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Leading Industrial Supplier</h1>
        <p>High-Quality Engineering Products & Solutions Across India</p>
        <div className={styles.heroCta}>
          <Link to="#products" className={styles.btnPrimary}>
            Explore Products
          </Link>
          <Link to="/contact" className={styles.btnSecondary}>
            Get in Touch
          </Link>
        </div>
      </section>

      <section className={styles.featured} id="products">
        <h2>Featured Products</h2>
        <div className={styles.grid}>
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.cardImage}>{product.image}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {/* <div className={styles.cardFooter}>
                <span className={styles.price}>₹{product.price}</span>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.advantages}>
        <h2>Why Choose Us</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>High-Quality Products</h3>
            <p>Certified products from trusted manufacturers</p>
          </div>
          <div className={styles.card}>
            <h3>Competitive Pricing</h3>
            <p>Best rates with flexible supply options</p>
          </div>
          <div className={styles.card}>
            <h3>Timely Delivery</h3>
            <p>Fast delivery across India</p>
          </div>
          <div className={styles.card}>
            <h3>Professional Support</h3>
            <p>Expert team ready to assist you</p>
          </div>
        </div>
      </section>
    </div>
  );
}
