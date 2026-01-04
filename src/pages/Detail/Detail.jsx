import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Detail() {
  const { id } = useParams();
  const { products, addToCart } = useContext(GlobalContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#0d3d56" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "5rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          {product.image}
        </div>
        <h1 style={{ color: "#0d3d56", marginBottom: "1rem" }}>
          {product.name}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "1rem",
            lineHeight: "1.8",
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            background: "#fef3c7",
            padding: "1rem",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ color: "#0d3d56", fontWeight: "bold" }}>
            Category: {product.category}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #ddd",
            paddingTop: "1.5rem",
          }}
        >
          <h2 style={{ color: "#facc15", fontSize: "2rem" }}>
            ₹{product.price}
          </h2>
          <button
            onClick={() => addToCart(product)}
            style={{
              background: "#0d3d56",
              color: "white",
              padding: "0.75rem 2rem",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0a2f45")}
            onMouseOut={(e) => (e.target.style.background = "#0d3d56")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
