// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirection
// import Sidebar from "./Sidebar";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile"; // Import your Profile component
// import Wallet from "./Wallet";
// import WalletProceed from "./WalletProceed";
// import ApiConsole from "./ApiConsole";
// import ProtectedRoute from "./ProtectedRoute"; // Import your ProtectedRoute

// export default function Landing() {
//   return (
//     <div className="w-full h-screen flex">
//       <Sidebar />
//       <div className="w-full">
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/wallet"
//             element={
//               <ProtectedRoute>
//                 <Wallet />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/walletproceed"
//             element={
//               <ProtectedRoute>
//                 <WalletProceed />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/api-console"
//             element={
//               <ProtectedRoute>
//                 <ApiConsole />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }
