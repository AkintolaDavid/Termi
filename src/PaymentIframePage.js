// PaymentIframe.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PaymentIframe() {
  const location = useLocation();
  const paymentUrl = location.state?.paymentUrl;
  const navigate = useNavigate();

  useEffect(() => {
    if (!paymentUrl) {
      navigate("/payment"); // Redirect if paymentUrl is missing
    }
  }, [paymentUrl, navigate]);

  return paymentUrl ? (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={paymentUrl}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Payment"
      ></iframe>
    </div>
  ) : null;
}
