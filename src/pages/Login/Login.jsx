import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      login({ name: formData.email.split("@")[0], email: formData.email });
      navigate("/portal");
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "4rem auto" }}>
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#0d3d56",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Login to Portal
        </h1>
        {error && (
          <p
            style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}
          >
            ⚠️ {error}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "#0d3d56",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "2px solid #0d3d56",
                borderRadius: "0.25rem",
                fontFamily: "inherit",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "#0d3d56",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "2px solid #0d3d56",
                borderRadius: "0.25rem",
                fontFamily: "inherit",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#0d3d56",
              color: "white",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0a2f45")}
            onMouseOut={(e) => (e.target.style.background = "#0d3d56")}
          >
            Login
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem", color: "#666" }}>
          Don't have an account?{" "}
          <a href="/signin" style={{ color: "#facc15", fontWeight: "bold" }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
