// src/App.jsx
import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
    
      <AppRoutes />   {/* Routes work correctly */}
    </div>
  );
}
