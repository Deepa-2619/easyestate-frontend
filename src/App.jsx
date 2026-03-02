import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Properties from "./components/property.jsx";
import WhyUs from "./components/whyus.jsx";
import Footer from "./components/footer.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import PropertyList from "./pages/PropertyList";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Properties />
              <WhyUs />
            </>
          }
        />

        {/* Property Listing Page */}
        <Route path="/properties" element={<PropertyList />} />

        {/* Property Details Page */}
        <Route path="/property/:id" element={<PropertyDetails />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;