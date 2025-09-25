import { useState } from "react";

function Loan() {
  const [showForm, setShowForm] = useState(false);
  const [showLoanOptions, setShowLoanOptions] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    loan_amount: "",
  });
  const [customAmount, setCustomAmount] = useState("");

  const loanOptions = [
    { range: "0 - 1,000", fee: 10, min: 0, max: 1000 },
    { range: "1,000 - 3,500", fee: 300, min: 1000, max: 3500 },
    { range: "3,500 - 6,000", fee: 600, min: 3500, max: 6000 },
    { range: "6,000 - 8,000", fee: 1000, min: 6000, max: 8000 },
    { range: "8,000 - 10,000", fee: 1250, min: 8000, max: 10000 },
    { range: "10,000 - 15,000", fee: 2000, min: 10000, max: 15000 },
  ];

  const calculateFee = (amount) => {
    const loanAmount = parseInt(amount.replace(/,/g, "")) || 0;

    if (loanAmount <= 1000) return 10;
    if (loanAmount <= 3500) return 300;
    if (loanAmount <= 6000) return 600;
    if (loanAmount <= 8000) return 1000;
    if (loanAmount <= 10000) return 1250;
    if (loanAmount <= 15000) return 2000;
    return 2000; // Default fee for amounts above 15,000
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedLoan(null);
    }
  };

  const handleLoanSelect = (loan) => {
    setSelectedLoan(loan);
    setCustomAmount("");
    setFormData((prevState) => ({
      ...prevState,
      loan_amount: loan.range,
    }));
    setShowLoanOptions(false);
    setShowForm(true);
  };

  const handleCustomAmountSubmit = () => {
    if (customAmount && parseInt(customAmount) > 0) {
      const amount = parseInt(customAmount);
      const fee = calculateFee(customAmount);

      setSelectedLoan({
        range: `Custom: ${formatAmount(amount)}`,
        fee: fee,
        min: amount,
        max: amount,
        custom: true,
      });

      setFormData((prevState) => ({
        ...prevState,
        loan_amount: amount.toLocaleString(),
      }));

      setShowLoanOptions(false);
      setShowForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanAmount = selectedLoan?.custom ? customAmount : selectedLoan?.max;
    const fee = selectedLoan?.fee || calculateFee(customAmount);

    console.log(
      "Form submitted:",
      formData,
      "Loan amount:",
      loanAmount,
      "Fee:",
      fee
    );
    alert(
      `Loan application submitted successfully!\nLoan Amount: KSH ${formatAmount(
        loanAmount
      )}\nService Fee: KSH ${fee.toLocaleString()}`
    );
    setShowForm(false);
    setShowLoanOptions(false);
    setSelectedLoan(null);
    setCustomAmount("");
    setFormData({ full_name: "", email: "", phone: "", loan_amount: "" });
  };

  const handleApplyLoan = () => {
    setShowLoanOptions(true);
  };

  const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const currentFee = customAmount
    ? calculateFee(customAmount)
    : selectedLoan?.fee || 0;
  const loanAmountValue = selectedLoan?.custom
    ? customAmount
    : selectedLoan?.max || "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 md:py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            How to Borrow
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Simple, fast, and transparent loan application process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
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
            <div
              key={index}
              className="text-center bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-xl md:text-2xl text-white mx-auto mb-4 md:mb-6 relative">
                <span className="text-2xl md:text-3xl">{step.icon}</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-purple-700 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Apply Loan Button */}
        <div className="text-center">
          <button
            onClick={handleApplyLoan}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg w-full max-w-xs mx-auto"
          >
            Apply for Loan
          </button>
        </div>

        {/* Loan Options Modal */}
        {showLoanOptions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Choose Your Loan Amount
                  </h2>
                  <button
                    onClick={() => setShowLoanOptions(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl md:text-3xl"
                  >
                    ×
                  </button>
                </div>

                {/* Custom Amount Input */}
                <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                    Enter Your Desired Amount
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={customAmount ? formatAmount(customAmount) : ""}
                        onChange={handleCustomAmountChange}
                        placeholder="Enter amount in KSH"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                      />
                    </div>
                    <button
                      onClick={handleCustomAmountSubmit}
                      disabled={!customAmount || parseInt(customAmount) <= 0}
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm md:text-base whitespace-nowrap"
                    >
                      Continue with Amount
                    </button>
                  </div>
                  {customAmount && (
                    <p className="text-sm text-gray-600 mt-2">
                      Service Fee: KSH{" "}
                      {calculateFee(customAmount).toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="mb-4 md:mb-6">
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Or select from our predefined loan amounts:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                  {loanOptions.map((loan, index) => (
                    <div
                      key={index}
                      onClick={() => handleLoanSelect(loan)}
                      className="border-2 border-purple-100 rounded-lg md:rounded-xl p-3 md:p-4 cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="text-center">
                        <h3 className="text-lg md:text-xl font-bold text-purple-700 mb-2">
                          KSH {loan.range}
                        </h3>
                        <div className="bg-purple-100 rounded-lg py-1 md:py-2 px-2 md:px-3">
                          <span className="text-purple-800 font-semibold text-sm md:text-base">
                            Fee: KSH {loan.fee.toLocaleString()}
                          </span>
                        </div>
                        <button className="mt-2 md:mt-3 bg-purple-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-purple-700 transition-colors duration-300 w-full">
                          Select
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-3 md:p-4 mb-3 md:mb-4">
                  <div className="flex">
                    <div className="ml-2">
                      <p className="text-xs md:text-sm text-green-700">
                        <strong>Important:</strong> The service fee is separate
                        and will not be added to your loan amount. You only pay
                        back the loan amount you receive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowLoanOptions(false)}
                    className="px-4 py-2 md:px-6 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium text-sm md:text-base"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Loan Application Form */}
        {showForm && selectedLoan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto max-h-[90vh] overflow-y-auto">
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="pr-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      Loan Application
                    </h2>
                    <p className="text-purple-600 font-semibold mt-1 text-sm md:text-base">
                      {selectedLoan.custom
                        ? `Amount: KSH ${formatAmount(customAmount)}`
                        : `Selected: KSH ${selectedLoan.range}`}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setSelectedLoan(null);
                      setCustomAmount("");
                    }}
                    className="text-gray-500 hover:text-gray-700 text-2xl md:text-3xl flex-shrink-0"
                  >
                    ×
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="full_name"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="loan_amount"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Loan Amount Needed (KSH)
                    </label>
                    <input
                      type="text"
                      id="loan_amount"
                      name="loan_amount"
                      value={
                        selectedLoan.custom
                          ? formatAmount(customAmount)
                          : selectedLoan.range
                      }
                      readOnly
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm md:text-base"
                    />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                      Loan Summary
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-gray-600">
                          Amount to Receive:
                        </span>
                        <span className="font-semibold text-green-700">
                          KSH{" "}
                          {selectedLoan.custom
                            ? formatAmount(customAmount)
                            : selectedLoan.range}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="text-gray-600">Service Fee:</span>
                        <span className="font-semibold text-purple-700">
                          KSH {currentFee.toLocaleString()}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-gray-600 font-semibold">
                            Amount to Pay Back:
                          </span>
                          <span className="font-bold text-green-700">
                            KSH{" "}
                            {selectedLoan.custom
                              ? formatAmount(customAmount)
                              : selectedLoan.range}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 md:p-4">
                    <div className="flex">
                      <div className="ml-2">
                        <p className="text-xs md:text-sm text-blue-700">
                          <strong>Note:</strong> The service fee is separate and
                          will be processed upfront. You only need to pay back
                          the loan amount shown above.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3 md:space-x-4 pt-3 md:pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setSelectedLoan(null);
                        setCustomAmount("");
                        setShowLoanOptions(true);
                      }}
                      className="flex-1 px-4 py-2 md:px-6 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium text-sm md:text-base"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium text-sm md:text-base"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Loan;
