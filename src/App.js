import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import CustomerAuth from "./components/CustomerAuth";
import StaffAuth from "./components/StaffAuth";
import CustomerAuth from "./components/CustomerAuth";
import StaffDashboard from "./components/StaffDashboard";
import CustomerDashboard from "./components/CustomerDashboard";


function App() {
  return (
    <Router basename="/electricity-alert-app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer-auth" element={<CustomerAuth />} />
        <Route path="/staff-auth" element={<StaffAuth />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;  