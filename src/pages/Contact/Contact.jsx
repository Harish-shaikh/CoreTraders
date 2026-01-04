import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1
        style={{ color: "#0d3d56", fontSize: "2.5rem", marginBottom: "2rem" }}
      >
        Contact Us
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Contact Info */}
        <div>
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#0d3d56", marginBottom: "0.5rem" }}>
              📧 Email
            </h3>
            <p>sales@coretraders.in</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#0d3d56", marginBottom: "0.5rem" }}>
              📱 Phone
            </h3>
            <p>+91 9766443646</p>
            <p>+91 9284738270</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#0d3d56", marginBottom: "0.5rem" }}>
              📧 GSTIN
            </h3>
            <p>27AAVFC9922E1Z0</p>
          </div>
          <div
            style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#0d3d56", marginBottom: "0.5rem" }}>
              📍 Location
            </h3>
            <p>7511/3 Madhuri Gali, Azadnagar,</p>
            <p> Boisar (CT) 401506 Palghar</p>
            <p>Maharashtra India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {submitted && (
            <p
              style={{
                color: "green",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              ✅ Thank you! We will contact you soon.
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
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
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
                placeholder="Your Email"
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
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
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
                Message
              </label>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #0d3d56",
                  borderRadius: "0.25rem",
                  minHeight: "150px",
                  fontFamily: "inherit",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                background: "#0d3d56",
                color: "white",
                padding: "0.75rem 2rem",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0a2f45")}
              onMouseOut={(e) => (e.target.style.background = "#0d3d56")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
