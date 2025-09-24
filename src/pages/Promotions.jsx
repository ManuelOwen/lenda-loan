import React from "react";

function Promotions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">
          Promotions & News
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people who transformed their lives with
              LendPlus
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Colo",
                business: "Delivery Services",
                image: "🚚",
                review:
                  "I do delivery services around Nairobi. I started with delivering small stuff and it wasn't easy for me due to high cost of fuel. But there comes a time as I was scrolling the internet, I got to know about an online lending application called LendPlus. Within a few minutes of applying, I received the amount I needed to salvage my business. Looking forward to continue partnering with them in this financial journey!",
                rating: 5,
              },
              {
                name: "Ruth",
                business: "General Shop Owner",
                image: "🏪",
                review:
                  "I started my general shop in 2019. When I did, I had few challenges but since I joined LendPlus my life has changed and I'm able to manage my business better. I use my loans to buy new stock when I have a shortage, I'm now at the loan limit of 30000 and my business is growing 3 times now since I started. Thank you so much LendPlus for your input in my business.",
                rating: 5,
              },
              {
                name: "Susan",
                business: "Kiosk Owner",
                image: "🛒",
                review:
                  "I come from a large family. It pushed me to want to be independent and be able to provide for myself. I opened a small kiosk, but it was on the brink of failure and I didn't have any more money to invest in the business. One day I came across an online lending app LendPlus and decided to ask them for help and they saved my business! Now my business is up and running and I continue to use LendPlus!",
                rating: 5,
              },
            ].map((customer, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(customer.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{customer.review}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white">
                    {customer.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {customer.name}
                    </h4>
                    <p className="text-purple-600 font-medium">
                      {customer.business}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-purple-100">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "₦500M+", label: "Loans Disbursed" },
              { number: "15min", label: "Average Approval" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotions;
