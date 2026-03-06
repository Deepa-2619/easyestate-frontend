import { useParams, useNavigate } from "react-router-dom";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const properties = [
    {
      id: "1",
      title: "Luxury Villa",
      price: "₹1.2 Cr",
      location: "Bhubaneswar",
      description:
        "Beautiful luxury villa with garden, swimming pool and parking area.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: "2",
      title: "Modern Apartment",
      price: "₹75 Lakh",
      location: "Cuttack",
      description:
        "Modern apartment in city center with lift and parking facility.",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
      id: "3",
      title: "Independent House",
      price: "₹90 Lakh",
      location: "Puri",
      description:
        "Spacious independent house near beach with open terrace.",
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9b639c9",
    },
  ];

  const property = properties.find((item) => item.id === id);

  if (!property) {
    return <h2 style={{ padding: "40px" }}>❌ Property Not Found</h2>;
  }

  return (
    <div style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      <img
        src={property.image}
        alt={property.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <h2>{property.title}</h2>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> {property.price}</p>
      <p style={{ marginTop: "15px" }}>{property.description}</p>

      <button
        onClick={() =>
          navigate("/contact", { state: { property: property.title } })
        }
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Contact Builder
      </button>
    </div>
  );
}

export default PropertyDetails;