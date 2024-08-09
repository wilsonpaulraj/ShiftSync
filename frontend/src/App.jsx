import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import EmployeeSignup from "./Pages/EmployeeSignup";
import OwnerSignup from "./Pages/OwnerSignup";
import ManagerDashboard from "./Pages/ManagerDashboard";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "./Pages/Profile";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup/employee-signup" element={<EmployeeSignup />} />
        <Route path="signup/owner-signup" element={<OwnerSignup />} />
        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoute>
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/manager-dashboard"
          element={
            <PrivateRoute>
              <ManagerDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
