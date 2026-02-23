function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Find Your Dream Home Today</h1>
        <p>Buy, Sell & Rent Properties Easily</p>

        <div className="search-box">
          <input type="text" placeholder="Enter Location" />
          <select>
            <option>Property Type</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>2BHK</option>
            <option>3BHK</option>
          </select>
          <input type="text" placeholder="Price Range" />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;