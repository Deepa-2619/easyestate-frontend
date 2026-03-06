import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const propertyName = location.state?.property;

  return (
    <div style={{ padding: "60px", maxWidth: "600px", margin: "auto" }}>
      <h2>📞 Contact Builder</h2>

      {propertyName && (
        <p style={{ marginBottom: "20px" }}>
          Enquiry for: <strong>{propertyName}</strong>
        </p>
      )}

      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea
          placeholder="Your Message"
          rows="4"
          style={{ padding: "10px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;