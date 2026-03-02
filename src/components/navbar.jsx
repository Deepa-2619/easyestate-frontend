import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">🏡 EasyEstate</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="register-btn">
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;