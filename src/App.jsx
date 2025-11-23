// src/App.jsx
import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import RegisterPage from "./pages/Register";

export default function App() {
  return (

   
    <div className="min-h-screen bg-slate-50">
      {/* <Header />      Header is now safely inside BrowserRouter */}
      <AppRoutes />   {/* Routes work correctly */}
    </div>
  );
}
