// components/Navigation.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-purple-200 transition-colors"
            onClick={closeMobileMenu}
          >
            LendPlus
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/advantages"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Advantages
            </Link>
            <Link
              to="/how-to-borrow"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              How to Borrow
            </Link>
            <Link
              to="/loans"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Loans
            </Link>
            <Link
              to="/promotions"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Promotions
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-purple-200 transition-colors font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-purple-700 py-4">
            <Link
              to="/"
              className="block py-3 px-4 text-white hover:bg-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/advantages"
              className="block py-3 px-4 text-white hover:bg-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Advantages
            </Link>
            <Link
              to="/how-to-borrow"
              className="block py-3 px-4 text-white hover:bg-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              How to Borrow
            </Link>
            <Link
              to="/loans"
              className="block py-3 px-4 text-white hover:bg-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Loans
            </Link>
            <Link
              to="/promotions"
              className="block py-3 px-4 text-white hover:bg-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Promotions
            </Link>
            <Link
              to="/login"
              className="block py-3 px-4 text-white hover:bg-purple-600 transition-colors"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
