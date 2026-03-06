import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">🏡 EasyEstate</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>

        {/* ✅ Added Here */}
        <Link to="/add-property">Add Property</Link>

        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="register-btn">
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;