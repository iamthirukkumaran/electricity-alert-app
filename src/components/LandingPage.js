import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 via-green-100 to-blue-50">
      {/* Title */}
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide drop-shadow-lg">
          ⚡ Electricity Notification Portal
        </h1>
        <p className="mt-3 text-gray-600 text-lg md:text-xl">
          Stay connected. Stay informed. Manage outages with ease.
        </p>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 pb-12">
        
        {/* Customer Section */}
        <div className="flex-1 max-w-md p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-2 text-center">
            Customer Portal
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Stay informed about power outages in your area
          </p>
          <button
            onClick={() => navigate("/customer-auth")}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Login / Register
          </button>
        </div>

        {/* Staff Section */}
        <div className="flex-1 max-w-md p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
          <h2 className="text-3xl font-bold text-green-600 mb-2 text-center">
            Staff Portal
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Manage power outage notifications
          </p>
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
