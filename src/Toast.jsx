import React from "react";

const Toast = ({ message, type, onClose }) => {
  const toastStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed top-5 right-5 py-6 px-8 rounded-md text-white text-lg shadow-lg transition-opacity duration-300 ${toastStyles[type]}`}
      onClick={onClose}
    >
      {message}
    </div>
  );
};

export default Toast;
