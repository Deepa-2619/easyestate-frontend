import { Link } from "react-router-dom";

function PropertyList() {
  const properties = [
    { id: 1, title: "Luxury Villa", price: "₹1.2 Cr", location: "Bhubaneswar" },
    { id: 2, title: "Modern Apartment", price: "₹75 Lakh", location: "Cuttack" },
    { id: 3, title: "Independent House", price: "₹90 Lakh", location: "Puri" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>🏘 Property Listings</h2>

      {properties.map((property) => (
        <div key={property.id} style={cardStyle}>
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p><strong>{property.price}</strong></p>
          <Link to={`/property/${property.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  margin: "15px 0",
  borderRadius: "10px",
};

export default PropertyList;