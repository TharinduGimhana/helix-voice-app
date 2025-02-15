import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Helix Voice
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/product" className="text-gray-700 hover:text-blue-600">Product</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/product" className="block text-gray-700 hover:text-blue-600">Product</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600">About Us</Link>
            <Link to="/testimonials" className="block text-gray-700 hover:text-blue-600">Testimonials</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
