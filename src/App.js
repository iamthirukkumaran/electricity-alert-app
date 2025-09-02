import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import LandingPage from "./components/LandingPage";
import CustomerAuth from "./components/CustomerAuth";
import StaffAuth from "./components/StaffAuth";
import CustomerDashboard from "./components/CustomerDashboard";
import StaffDashboard from "./components/StaffDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customer-auth" element={<CustomerAuth />} />
          <Route path="/staff-auth" element={<StaffAuth />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;