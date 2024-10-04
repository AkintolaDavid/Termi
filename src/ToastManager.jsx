import React, { useState } from "react";
import Toast from "./Toast";

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now(); // unique ID based on timestamp
    setToasts([...toasts, { id, message, type }]);

    // Remove the toast after 3 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <div>
      {/* Example buttons to trigger toasts */}
      <button
        onClick={() => addToast("Action completed successfully!", "success")}
      >
        Show Success Toast
      </button>
      <button onClick={() => addToast("An error occurred!", "error")}>
        Show Error Toast
      </button>

      {/* Render toasts */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => {}}
        />
      ))}
    </div>
  );
};

export default ToastManager;
