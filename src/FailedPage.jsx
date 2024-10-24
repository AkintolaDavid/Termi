import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

export default function PaymentFailed() {
  const navigate = useNavigate();

  // Redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/retry-payment"); // Replace with your retry payment URL
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50">
      <div className="text-red-500">
        <FaTimesCircle size={80} />
      </div>
      <h1 className="text-4xl font-bold mt-4 text-gray-800">Payment Failed</h1>
      <p className="text-gray-600 mt-2">
        We're sorry, but your payment could not be processed.
      </p>
      <p className="text-gray-600">
        Redirecting you to the payment retry page in a moment...
      </p>

      <div className="mt-8">
        <button
          onClick={() => navigate("/retry-payment")} // Replace with your retry payment URL
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
}
