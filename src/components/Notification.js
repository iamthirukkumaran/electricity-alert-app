import React, { useState, useEffect } from "react";

const Notification = ({ type, area, pincode, start, end, reason, restore, isNew, onDelete, onEdit }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animation on mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 mb-4 border-l-4 ${
      type === "Scheduled" ? "border-green-500" : "border-red-500"
    } transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className={`p-2 rounded-full mr-3 ${
            type === "Scheduled" ? "bg-green-100" : "bg-red-100"
          }`}>
            {type === "Scheduled" ? (
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg">
              {type} Power Cut – {area} ({pincode})
              {isNew && <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">New</span>}
            </h3>
            <p className="text-gray-600 text-sm">
              {type === "Scheduled" ? (
                `🕒 Time: ${start} – ${end}`
              ) : (
                `⚠️ Reason: ${reason}`
              )}
            </p>
          </div>
        </div>
        
        {onDelete && onEdit && (
          <div className="flex space-x-2">
            <button 
              onClick={onEdit}
              className="text-blue-600 hover:text-blue-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </button>
            <button 
              onClick={onDelete}
              className="text-red-600 hover:text-red-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
      
      {type === "Unscheduled" && (
        <div className="mt-3 bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700">🔌 Expected Restore: {restore}</p>
        </div>
      )}
    </div>
  );
};

export default Notification;