import React from "react";

function Advantages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Our Advantages
        </h1>

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
}

export default Advantages;
