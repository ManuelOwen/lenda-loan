

function Loan() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">
          How to Borrow
        </h1>

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
              description:
                "Receive instant approval decision within 15 minutes",
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
  )
}

export default Loan