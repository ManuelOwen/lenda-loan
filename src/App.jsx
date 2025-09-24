// App.jsx

import React from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Make sure this import path is correct
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Advantages from "./pages/Advantages";
import HowToBorrow from "./pages/HowToBorrow";
import Loans from "./pages/Loan";
import Promotions from "./pages/Promotions";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/how-to-borrow" element={<HowToBorrow />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
