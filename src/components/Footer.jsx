import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white flex items-center justify-center font-bold shadow">
            HM
          </div>
          <span className="font-semibold text-slate-800">HealMeet</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/features" className="hover:text-indigo-600 transition">Features</Link>
          <Link to="/pricing" className="hover:text-indigo-600 transition">Pricing</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          <Link to="/login" className="ml-2 px-4 py-2 rounded-lg border text-sm hover:shadow">Sign in</Link>
          <Link to="/register" className="ml-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:scale-[1.02] transition-transform">Create account</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 rounded-md border"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-max-height duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-4 pb-4 flex flex-col gap-2">
          <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
          <Link to="/features" onClick={() => setOpen(false)} className="py-2">Features</Link>
          <Link to="/pricing" onClick={() => setOpen(false)} className="py-2">Pricing</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
          <div className="flex gap-2 pt-2">
            <Link to="/login" onClick={() => setOpen(false)} className="px-4 py-2 border rounded-lg w-full text-center">Sign in</Link>
            <Link to="/register" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-indigo-600 text-white w-full text-center">Create</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
