import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
      <Header />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/product" element={<h1>Product</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/testimonials" element={<h1>Testimonials</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
