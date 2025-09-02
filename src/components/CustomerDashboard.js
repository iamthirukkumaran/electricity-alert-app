import React, { useState, useEffect } from "react";
import Notification from "./Notification";

const CustomerDashboard = () => {
  const customer = JSON.parse(localStorage.getItem("customer")) || {};
  const [alerts, setAlerts] = useState(JSON.parse(localStorage.getItem("alerts")) || []);
  const [filter, setFilter] = useState({
    area: customer.area || "",
    pincode: customer.pincode || "",
    type: "All",
    date: ""
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const updatedAlerts = JSON.parse(localStorage.getItem("alerts")) || [];
      setAlerts(updatedAlerts);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const filteredAlerts = alerts
    .filter(a => 
      (filter.area ? a.area.includes(filter.area) : true) &&
      (filter.pincode ? a.pincode === filter.pincode : true) &&
      (filter.type !== "All" ? a.type === filter.type : true) &&
      (filter.date ? a.date === filter.date : true)
    )
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const scheduledAlerts = filteredAlerts.filter(a => a.type === "Scheduled");
  const unscheduledAlerts = filteredAlerts.filter(a => a.type === "Unscheduled");

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome {customer.id}</h1>
              <p className="text-gray-600">Alerts for your area: {customer.area}, {customer.pincode}</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {filteredAlerts.length} Alerts
              </div>
              <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {scheduledAlerts.length} Scheduled
              </div>
              <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {unscheduledAlerts.length} Unscheduled
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Area</label>
              <input 
                type="text"
                className="form-input"
                placeholder="Enter area"
                value={filter.area}
                onChange={(e) => setFilter({...filter, area: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Pincode</label>
              <input 
                type="text"
                className="form-input"
                placeholder="Enter pincode"
                value={filter.pincode}
                onChange={(e) => setFilter({...filter, pincode: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Type</label>
              <select 
                className="form-input"
                value={filter.type}
                onChange={(e) => setFilter({...filter, type: e.target.value})}
              >
                <option value="All">All Types</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Unscheduled">Unscheduled</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scheduled Outages */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Scheduled Outages
            </h2>
            
            {scheduledAlerts.length === 0 ? (
              <div className="card text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-500 mt-2">No scheduled outages</p>
              </div>
            ) : (
              <div className="space-y-4">
                {scheduledAlerts.map((alert, i) => (
                  <Notification
                    key={i}
                    type={alert.type}
                    area={alert.area}
                    pincode={alert.pincode}
                    start={alert.start}
                    end={alert.end}
                    reason={alert.reason}
                    restore={alert.restore}
                    isNew={!alert.viewed}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Unscheduled Outages */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              Emergency Outages
            </h2>
            
            {unscheduledAlerts.length === 0 ? (
              <div className="card text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-gray-500 mt-2">No emergency outages</p>
              </div>
            ) : (
              <div className="space-y-4">
                {unscheduledAlerts.map((alert, i) => (
                  <Notification
                    key={i}
                    type={alert.type}
                    area={alert.area}
                    pincode={alert.pincode}
                    start={alert.start}
                    end={alert.end}
                    reason={alert.reason}
                    restore={alert.restore}
                    isNew={!alert.viewed}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Alert History */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Alert History</h2>
          
          {filteredAlerts.length === 0 ? (
            <div className="card text-center">
              <svg className="w-16 h-16 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-gray-500 mt-4">No alert history found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlerts.map((alert, i) => (
                <div key={i} className="card border-l-4 border-gray-300 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.type === "Scheduled" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {alert.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(alert.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2">{alert.area} ({alert.pincode})</h3>
                  
                  {alert.type === "Scheduled" ? (
                    <p className="text-sm text-gray-600">🕒 {alert.start} – {alert.end}</p>
                  ) : (
                    <p className="text-sm text-gray-600">⚠️ {alert.reason}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;