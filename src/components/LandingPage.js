import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-green-50">
      {/* Left - Customer Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white md:rounded-r-3xl shadow-lg">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-2 text-center">Customer Portal</h2>
          <p className="text-gray-600 mb-8 text-center">Stay informed about power outages in your area</p>
          <button 
            onClick={() => navigate("/customer-auth")}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Login / Register
          </button>
        </div>
      </div>

      {/* Right - Staff Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-green-50 to-blue-50 md:rounded-l-3xl shadow-lg">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-green-600 mb-2 text-center">Staff Portal</h2>
          <p className="text-gray-600 mb-8 text-center">Manage power outage notifications</p>
          <button 
            onClick={() => navigate("/staff-auth")}
            className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Login / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;