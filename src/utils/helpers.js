export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatTime = (timeString) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(`2000-01-01T${timeString}`).toLocaleTimeString(undefined, options);
};

export const filterAlerts = (alerts, filters) => {
  return alerts.filter(alert => {
    return (
      (filters.area ? alert.area.toLowerCase().includes(filters.area.toLowerCase()) : true) &&
      (filters.pincode ? alert.pincode === filters.pincode : true) &&
      (filters.type !== 'All' ? alert.type === filters.type : true) &&
      (filters.date ? alert.date === filters.date : true)
    );
  });
};