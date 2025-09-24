import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleApplyForLoan = () => {
    navigate("/loans");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Get first loan online{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    With a Trusted Lender
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Fast and safe apply process with instant approval. Get the
                  funds you need when you need them.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <button
                  onClick={handleApplyForLoan}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl cursor-pointer"
                >
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

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how LendPlus is helping entrepreneurs achieve their dreams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Colo",
                business: "Delivery Services",
                image: "🚚",
                highlight: "Salvaged my delivery business with quick funding",
                review:
                  "Within a few minutes of applying, I received the amount I needed to salvage my business...",
              },
              {
                name: "Ruth",
                business: "General Shop Owner",
                image: "🏪",
                highlight: "Grew my business 3x with LendPlus support",
                review:
                  "My business is growing 3 times now since I started with LendPlus...",
              },
              {
                name: "Susan",
                business: "Kiosk Owner",
                image: "🛒",
                highlight: "Saved my kiosk from failure",
                review:
                  "They saved my business! Now my business is up and running...",
              },
            ].map((customer, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-xl text-white">
                    {customer.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{customer.name}</h4>
                    <p className="text-purple-600 text-sm">
                      {customer.business}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 font-semibold">
                  {customer.highlight}
                </p>
                <p className="text-gray-600 text-sm">"{customer.review}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/promotions"
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all"
            >
              Read More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied customers who trust LendPlus for their
            financial needs.
          </p>
          <button
            onClick={handleApplyForLoan}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Apply for a loan now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
