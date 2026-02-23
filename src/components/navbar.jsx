function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">🏡 EasyEstate</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Properties</a>
        <a href="#">Login</a>
        <a href="#" className="register-btn">Register</a>
      </nav>
    </header>
  );
}

export default Navbar;