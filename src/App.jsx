import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Lend Plus
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Our advantages", "How to borrow", "Promotions & News"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                  >
                    {item}
                  </a>
                )
              )}

              {/* Contact Info */}
              <div className="flex items-center space-x-2 text-purple-700">
                <span className="text-lg">📞</span>
                <div>
                  <div className="font-semibold">0709-029-000</div>
                  <div className="text-xs text-gray-600">
                    Mon-Sun: 8am - 6pm
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg">
                Log in
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 py-4">
            <div className="px-4 space-y-4">
              {["Our advantages", "How to borrow", "Promotions & News"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-700 hover:text-purple-600 font-medium py-2"
                  >
                    {item}
                  </a>
                )
              )}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-purple-700 mb-4">
                  <div className="font-semibold">📞 0709-029-000</div>
                  <div className="text-sm text-gray-600">
                    Mon-Sun: 8am - 6pm
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Log in
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  LendPlus Loan App
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Get first loan online within{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    15 minutes
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Fast and safe apply process with instant approval. Get the
                  funds you need when you need them.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                  Apply for a loan
                </button>

                {/* Features List */}
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">🔒</span>
                    </div>
                    <span>Secure & Safe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Loan Amount</h3>
                  <div className="text-4xl font-bold mb-2">
                    $1,000 - $50,000
                  </div>
                  <p className="text-purple-100">Flexible repayment terms</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1.95%</div>
                    <div className="text-sm text-purple-200">Interest Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm text-purple-200">Approval</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm text-purple-200">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose LendPlus?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the future of digital lending
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Instant Approval",
                description:
                  "Get approved in minutes with our automated process",
              },
              {
                icon: "🔒",
                title: "Secure & Safe",
                description: "Bank-level security to protect your information",
              },
              {
                icon: "💳",
                title: "Flexible Payments",
                description: "Choose repayment terms that work for you",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied customers who trust LendPlus for their
            financial needs.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all transform hover:-translate-y-1 shadow-2xl">
            Apply for a loan now
          </button>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
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
                <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                  Google Play
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                  App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
