import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  // Redirect to the wallet page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-2); // Redirect to the specified URL
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <div className="text-green-500">
        <FaCheckCircle size={80} />
      </div>
      <h1 className="text-4xl font-bold mt-4 text-gray-800">
        Payment Successful!a
      </h1>
      <p className="text-gray-600 mt-2">Thank you for your payment.</p>
      <p className="text-gray-600">
        Redirecting you to your dashboard in a moment...
      </p>

      <div className="mt-8">
        <button
          onClick={() => navigate(-2)} // Navigate to the wallet page
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
