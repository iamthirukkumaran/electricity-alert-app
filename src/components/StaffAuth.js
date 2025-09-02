import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const StaffAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ staffId: "", area: "", pincode: "", phone: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("staff", JSON.stringify(form));
    toast.success(isLogin ? "Login successful!" : "Registration successful!");
    setTimeout(() => navigate("/staff-dashboard"), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          {isLogin ? "Staff Login" : "Staff Registration"}
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          {isLogin ? "Access the staff dashboard" : "Register for a staff account"}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Staff ID</label>
            <input 
              className="form-input"
              placeholder="Enter your staff ID"
              onChange={(e) => setForm({ ...form, staffId: e.target.value })}
              required
            />
          </div>
          
          {!isLogin && (
            <>
              <div>
                <label className="block text-gray-700 mb-2">Area</label>
                <input 
                  className="form-input"
                  placeholder="Enter your area"
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  required={!isLogin}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Pincode</label>
                <input 
                  className="form-input"
                  placeholder="Enter your pincode"
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  required={!isLogin}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mobile Number</label>
                <input 
                  className="form-input"
                  placeholder="Enter your mobile number"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required={!isLogin}
                />
              </div>
            </>
          )}
          
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password"
              className="form-input"
              placeholder="Enter your password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 mt-6"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        
        <div className="text-center mt-6">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            {isLogin ? "Need an account? Register here" : "Already have an account? Login here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffAuth;