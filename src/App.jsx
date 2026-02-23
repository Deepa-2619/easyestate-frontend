import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Properties from "./components/property.jsx";
import WhyUs from "./components/whyus.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Properties />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;