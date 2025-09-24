import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Page Components
const Home = () => (
  <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
    {/* Hero Section */}
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="mb-6">
              {/* <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                LendPlus Loan App
              </span> */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Get first loan online within{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  15 minutes
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fast and safe apply process with instant approval. Get the funds
                you need when you need them.
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
                <div className="text-4xl font-bold mb-2">$1,000 - $50,000</div>
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
              description: "Get approved in minutes with our automated process",
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
  </div>
);

const Advantages = () => (
  <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Advantages</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "Fast Processing",
            description:
              "Get your loan approved within 15 minutes with our automated system.",
            icon: "⚡",
          },
          {
            title: "Low Interest Rates",
            description:
              "Competitive rates starting from just 1.95% with flexible terms.",
            icon: "💰",
          },
          {
            title: "No Hidden Fees",
            description:
              "Transparent pricing with no surprise charges or fees.",
            icon: "🔍",
          },
          {
            title: "24/7 Support",
            description:
              "Round-the-clock customer support for all your queries.",
            icon: "📞",
          },
        ].map((advantage, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl text-white mb-4">
              {advantage.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {advantage.title}
            </h3>
            <p className="text-gray-600 text-lg">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HowToBorrow = () => (
  <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-12">How to Borrow</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            step: "01",
            title: "Apply Online",
            description:
              "Fill out our simple application form in just 5 minutes",
            icon: "📱",
          },
          {
            step: "02",
            title: "Get Approved",
            description: "Receive instant approval decision within 15 minutes",
            icon: "✅",
          },
          {
            step: "03",
            title: "Receive Funds",
            description: "Get money transferred directly to your account",
            icon: "💳",
          },
        ].map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-6 relative">
              <span className="text-4xl">{step.icon}</span>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {step.step}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Promotions = () => (
  <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-12">
        Promotions & News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Special Offer: 0% Interest for First-Time Borrowers",
            date: "Dec 15, 2024",
            description:
              "New customers can enjoy 0% interest on their first loan up to $5,000.",
          },
          {
            title: "Extended Repayment Terms Now Available",
            date: "Dec 10, 2024",
            description:
              "We've extended our maximum repayment period to 36 months for better flexibility.",
          },
          {
            title: "Mobile App Update Released",
            date: "Dec 5, 2024",
            description:
              "New features include biometric login and instant notifications.",
          },
          {
            title: "Holiday Season Special Rates",
            date: "Nov 28, 2024",
            description:
              "Enjoy reduced interest rates during the holiday season.",
          },
        ].map((news, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
          >
            <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              {news.date}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {news.title}
            </h3>
            <p className="text-gray-600">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Login = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 pt-20 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Log In to LendPlus
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
);

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-purple-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Lend Plus
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/advantages"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Our advantages
            </Link>
            <Link
              to="/how-to-borrow"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              How to borrow
            </Link>
            <Link
              to="/promotions"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Promotions & News
            </Link>

            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-purple-700">
              <span className="text-lg">📞</span>
              <div>
                <div className="font-semibold">0709-029-000</div>
                <div className="text-xs text-gray-600">Mon-Sun: 8am - 6pm</div>
              </div>
            </div>

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
            >
              Log in
            </Link>
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 py-4">
            <div className="px-4 space-y-4">
              <Link
                to="/advantages"
                className="block text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our advantages
              </Link>
              <Link
                to="/how-to-borrow"
                className="block text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How to borrow
              </Link>
              <Link
                to="/promotions"
                className="block text-gray-700 hover:text-purple-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Promotions & News
              </Link>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-purple-700 mb-4">
                  <div className="font-semibold">📞 0709-029-000</div>
                  <div className="text-sm text-gray-600">
                    Mon-Sun: 8am - 6pm
                  </div>
                </div>
                <Link
                  to="/login"
                  className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/how-to-borrow" element={<HowToBorrow />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Lend Plus
                </h3>
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
                {/* <h4 className="font-semibold mb-4">Download App</h4> */}
                <div className="flex space-x-4">
                  {/* <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                    Google Play
                  </button>
                  <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                    App Store
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
