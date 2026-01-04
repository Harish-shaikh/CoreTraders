import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
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
          Create Account
        </h1>
        {error && (
          <p
            style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}
          >
            ⚠️ {error}
          </p>
        )}
        {success && (
          <p
            style={{
              color: "green",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            ✅ Account created! Redirecting to login...
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
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
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
              placeholder="Create a password"
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
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "#0d3d56",
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
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
            Create Account
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem", color: "#666" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#facc15", fontWeight: "bold" }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
