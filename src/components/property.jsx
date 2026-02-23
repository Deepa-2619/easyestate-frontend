function Properties() {
  return (
    <section className="properties">
      <h2>Featured Properties</h2>

      <div className="property-container">

        <div className="card">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" alt="" />
          <div className="card-body">
            <h3>Luxury Villa</h3>
            <p>📍 Bhubaneswar</p>
            <p>₹75,00,000</p>
            <p>Villa</p>
            <button>View Details</button>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be" alt="" />
          <div className="card-body">
            <h3>Modern Apartment</h3>
            <p>📍 Cuttack</p>
            <p>₹45,00,000</p>
            <p>2BHK</p>
            <button>View Details</button>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716" alt="" />
          <div className="card-body">
            <h3>Family House</h3>
            <p>📍 Puri</p>
            <p>₹60,00,000</p>
            <p>3BHK</p>
            <button>View Details</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Properties;