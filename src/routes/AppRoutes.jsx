// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<div>Register Page</div>} />
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  );
}
