import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonials/Testimonials";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
