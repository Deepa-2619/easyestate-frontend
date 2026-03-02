import { useParams } from "react-router-dom";

function PropertyDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h2>📄 Property Details</h2>
      <p>Showing details for property ID: {id}</p>

      <p>Beautiful house with modern design.</p>
      <p>Price: ₹1 Cr</p>
      <p>Location: Bhubaneswar</p>
      <button>Contact Builder</button>
    </div>
  );
}

export default PropertyDetails;