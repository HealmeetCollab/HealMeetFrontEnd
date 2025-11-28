import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-orange-600">Flirtify</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-orange-600 transition">Home</Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition">Contact</Link>
          <Link to="/history" className="text-gray-700 hover:text-orange-600 transition">History</Link>

          <Link
            to="/login"
            className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
          <Link
            to="/"
            className="block text-gray-700 hover:text-orange-600 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-orange-600 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/history"
            className="block text-gray-700 hover:text-orange-600 transition"
            onClick={() => setOpen(false)}
          >
            History
          </Link>

          <Link
            to="/login"
            className="block px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
