import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Adjust this according to your token storage

  // If no token, redirect to the sign-in page
  if (!token) {
    return <Navigate to="/" />;
  }

  // If token exists, render the child components
  return children;
};

export default ProtectedRoute; // Ensure this line exists
