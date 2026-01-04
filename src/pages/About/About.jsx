import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function About() {
  const {} = useContext(GlobalContext);

  const team = [
    {
      name: "Sanjog Vishwkarma",
      role: "Business Development Executive",
      phone: "+91 9766443646",
    },
    {
      name: "Ashish Suryavanshi",
      role: "Business Development Executive",
      phone: "+91 9284738270",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechFlow Industries",
      text: "Core Traders provided exceptional quality and timely delivery. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      company: "Manufacturing Plus",
      text: "Outstanding service and competitive pricing. Our go-to supplier for all industrial needs.",
    },
    {
      name: "Vikram Singh",
      company: "Industrial Solutions Ltd",
      text: "Professional team, reliable products, and excellent customer support. Best in industry!",
    },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1
        style={{ color: "#0d3d56", fontSize: "2.5rem", marginBottom: "2rem" }}
      >
        About Core Traders
      </h1>

      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          marginBottom: "2rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "1rem",
          }}
        >
          Core Traders is a leading supplier of high-quality engineering
          consumables for industries across India. We specialize in pipes,
          bearings, seals, gaskets, fasteners, and other essential components,
          ensuring reliability and efficiency for your operations.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          Our commitment to timely delivery and quality products makes us the
          preferred partner for businesses of all sizes.
        </p>
      </div>

      <h2 style={{ color: "#0d3d56", fontSize: "2rem", marginBottom: "2rem" }}>
        Our Team
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
        }}
      >
        {team.map((member, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(135deg, #fef3c7 0%, #fef3c7 100%)",
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ color: "#0d3d56", marginBottom: "0.5rem" }}>
              {member.name}
            </h4>
            <p
              style={{
                color: "#facc15",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              {member.role}
            </p>
            <p style={{ color: "#333" }}>📱 {member.phone}</p>
          </div>
        ))}
      </div>

      <h2 style={{ color: "#0d3d56", fontSize: "2rem", marginBottom: "2rem" }}>
        Testimonials
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ color: "gold", marginBottom: "1rem" }}>⭐⭐⭐⭐⭐</p>
            <p
              style={{
                fontStyle: "italic",
                marginBottom: "1rem",
                lineHeight: "1.8",
              }}
            >
              "{testimonial.text}"
            </p>
            <p style={{ fontWeight: "bold", color: "#0d3d56" }}>
              {testimonial.name}
            </p>
            <p style={{ color: "#facc15", fontSize: "0.9rem" }}>
              {testimonial.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
