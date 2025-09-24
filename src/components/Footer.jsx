import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Lend Plus</h3>
            <p className="text-gray-400">
              Your trusted partner for quick and secure loans.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/advantages" className="hover:text-white">
                  Our Advantages
                </Link>
              </li>
              <li>
                <Link to="/how-to-borrow" className="hover:text-white">
                  How to Borrow
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="hover:text-white">
                  Promotions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <div>📞 0709-029-000</div>
              <div>Mon-Sun: 8am - 6pm</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Download App</h4>
            <div className="flex space-x-4">
            
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lend Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
