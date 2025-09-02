import React, { useState } from "react";
import { toast } from 'react-toastify';
import Notification from "./Notification";

const StaffDashboard = () => {
  const staff = JSON.parse(localStorage.getItem("staff")) || {};
  const [alerts, setAlerts] = useState(JSON.parse(localStorage.getItem("alerts")) || []);
  const [alert, setAlert] = useState({ 
    area: "", 
    pincode: "", 
    type: "Scheduled", 
    start: "", 
    end: "", 
    reason: "", 
    restore: "",
    date: new Date().toISOString().split('T')[0]
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [areas, setAreas] = useState([{ area: "", pincode: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAlerts = [...alerts];
    const timestamp = new Date().toISOString();
    
    if (editingIndex !== null) {
      // Edit existing alert
      newAlerts[editingIndex] = { ...alert, timestamp };
      toast.success("Alert updated successfully!");
    } else {
      // Add new alerts for all areas
      const alertsToAdd = areas.map(a => ({
        ...alert,
        area: a.area,
        pincode: a.pincode,
        timestamp
      }));
      
      newAlerts.push(...alertsToAdd);
      toast.success(`Alert created for ${areas.length} area(s)!`);
    }
    
    localStorage.setItem("alerts", JSON.stringify(newAlerts));
    setAlerts(newAlerts);
    setAlert({ area: "", pincode: "", type: "Scheduled", start: "", end: "", reason: "", restore: "", date: new Date().toISOString().split('T')[0] });
    setEditingIndex(null);
    setAreas([{ area: "", pincode: "" }]);
  };

  const handleDelete = (index) => {
    const newAlerts = [...alerts];
    newAlerts.splice(index, 1);
    localStorage.setItem("alerts", JSON.stringify(newAlerts));
    setAlerts(newAlerts);
    toast.success("Alert deleted successfully!");
  };

  const handleEdit = (index) => {
    const alertToEdit = alerts[index];
    setAlert(alertToEdit);
    setEditingIndex(index);
    setAreas([{ area: alertToEdit.area, pincode: alertToEdit.pincode }]);
  };

  const addArea = () => {
    setAreas([...areas, { area: "", pincode: "" }]);
  };

  const removeArea = (index) => {
    if (areas.length > 1) {
      const newAreas = [...areas];
      newAreas.splice(index, 1);
      setAreas(newAreas);
    }
  };

  const updateArea = (index, field, value) => {
    const newAreas = [...areas];
    newAreas[index][field] = value;
    setAreas(newAreas);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="card mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Staff Dashboard</h1>
              <p className="text-gray-600">Welcome, {staff.staffId}</p>
            </div>
            <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              {alerts.length} Total Alerts
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Alert Form */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {editingIndex !== null ? "Edit Alert" : "Create New Alert"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alert Type</label>
                <select 
                  className="form-input"
                  value={alert.type}
                  onChange={(e) => setAlert({...alert, type: e.target.value})}
                  required
                >
                  <option value="Scheduled">Scheduled Outage</option>
                  <option value="Unscheduled">Unscheduled Outage</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input 
                  type="date"
                  className="form-input"
                  value={alert.date}
                  onChange={(e) => setAlert({...alert, date: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Areas & Pincodes</label>
                  <button 
                    type="button"
                    onClick={addArea}
                    className="text-sm text-green-600 hover:text-green-800 font-medium"
                  >
                    + Add Another Area
                  </button>
                </div>
                
                {areas.map((area, index) => (
                  <div key={index} className="flex space-x-2 mb-2">
                    <input 
                      className="flex-1 p-2 border border-gray-300 rounded-lg"
                      placeholder="Area"
                      value={area.area}
                      onChange={(e) => updateArea(index, "area", e.target.value)}
                      required
                    />
                    <input 
                      className="w-24 p-2 border border-gray-300 rounded-lg"
                      placeholder="Pincode"
                      value={area.pincode}
                      onChange={(e) => updateArea(index, "pincode", e.target.value)}
                      required
                    />
                    {areas.length > 1 && (
                      <button 
                        type="button"
                        onClick={() => removeArea(index)}
                        className="p-2 text-red-600 hover:text-red-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {alert.type === "Scheduled" ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                    <input 
                      type="time"
                      className="form-input"
                      value={alert.start}
                      onChange={(e) => setAlert({...alert, start: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                    <input 
                      type="time"
                      className="form-input"
                      value={alert.end}
                      onChange={(e) => setAlert({...alert, end: e.target.value})}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
                    <textarea 
                      className="form-input"
                      placeholder="Enter reason for outage"
                      value={alert.reason}
                      onChange={(e) => setAlert({...alert, reason: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expected Restore Time</label>
                    <input 
                      type="datetime-local"
                      className="form-input"
                      value={alert.restore}
                      onChange={(e) => setAlert({...alert, restore: e.target.value})}
                      required
                    />
                  </div>
                </>
              )}
              
              <button 
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 mt-4"
              >
                {editingIndex !== null ? "Update Alert" : "Create Alert"}
              </button>
              
              {editingIndex !== null && (
                <button 
                  type="button"
                  onClick={() => {
                    setAlert({ area: "", pincode: "", type: "Scheduled", start: "", end: "", reason: "", restore: "", date: new Date().toISOString().split('T')[0] });
                    setEditingIndex(null);
                    setAreas([{ area: "", pincode: "" }]);
                  }}
                  className="w-full py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 mt-2"
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </div>
          
          {/* Alert List */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Alerts</h2>
            
            {alerts.length === 0 ? (
              <div className="card text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-500 mt-4">No alerts created yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {alerts.slice().reverse().map((alert, i) => (
                  <Notification
                    key={i}
                    type={alert.type}
                    area={alert.area}
                    pincode={alert.pincode}
                    start={alert.start}
                    end={alert.end}
                    reason={alert.reason}
                    restore={alert.restore}
                    onDelete={() => handleDelete(alerts.length - 1 - i)}
                    onEdit={() => handleEdit(alerts.length - 1 - i)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;