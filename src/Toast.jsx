import React from "react";

const Toast = ({ message, title, type, onClose }) => {
  const toastStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed top-5 right-5 mb-4 p-4 rounded shadow-lg ${toastStyles[type]} text-white`}
    >
      {title && <h4 className="font-bold">{title}</h4>}
      <p>{message}</p>
      <button onClick={onClose} className="ml-2 text-white underline">
        Close
      </button>
    </div>
  );
};

export default Toast;
