import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

/* Final Home.jsx — no framer-motion, no unused imports.
   - TailwindCSS required
   - Place this in src/pages/Home.jsx
*/

export default function Home() {
  const year = new Date().getFullYear();

  return (
    
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Meet people, build real connections — instantly.
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Fast, private and simple: HealMeet pairs you with real users or realistic AI fallback
              profiles so you never wait for a conversation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:scale-[1.02] transition-transform"
              >
                Start free — 1 day trial
              </Link>

              <Link
                to="/features"
                className="inline-flex items-center px-6 py-3 border rounded-lg text-slate-700 hover:bg-slate-100 transition"
              >
                How it works
              </Link>
            </div>

            <ul className="mt-6 text-sm text-slate-500 space-y-2">
              <li>
                <strong>Free:</strong> 1 day full access, per-match free minutes, then coins payment.
              </li>
              <li>Privacy-first: minimal profile data, email OTP & JWT security.</li>
            </ul>
          </div>

          {/* Visual / mock card */}
          <div>
            <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Active now</div>
                  <div className="font-semibold">Olivia, 24</div>
                </div>
                <div className="text-sm text-slate-500">10m free</div>
              </div>

              <div className="mt-5 rounded-xl overflow-hidden h-56 bg-gradient-to-br from-pink-50 to-indigo-50 flex items-end p-4">
                <div className="text-sm text-slate-700">“This felt real — great conversation flow.”</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <MiniStat label="Matches" value="Instant" />
                <MiniStat label="Safety" value="Block & report" />
              </div>
            </div>
          </div>
        </div>


       

        {/* Decorative subtle background shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-200 to-pink-200 opacity-30 blur-3xl" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-center">Why people choose HealMeet</h2>
        <p className="text-center text-slate-500 mt-2">Fast matching, privacy-first, and fair monetization.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="⚡"
            title="Smart Matching"
            desc="Gender-aware pairing, rematch cooldowns, and intelligent AI fallback when no real user is online."
          />
          <FeatureCard
            icon="🔒"
            title="Secure & Private"
            desc="Email OTP, JWT tokens, and minimal profile data to protect your privacy."
          />
          <FeatureCard
            icon="💎"
            title="Fair Monetization"
            desc="Free trial + per-match minutes, then coins for longer calls — transparent pricing."
          />
        </div>
      </section>

      {/* How it works: 3-step */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold">How it works</h3>
          <p className="text-slate-500 mt-2">Three simple steps to start chatting.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Step num="1" title="Register" desc="Sign up with name, email, age & gender." />
            <Step num="2" title="Match" desc="Match instantly to a real user or AI fallback." />
            <Step num="3" title="Chat" desc="Use free minutes or buy coins for longer conversations." />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="rounded-2xl bg-indigo-600 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold">Ready to meet someone new?</h4>
            <p className="text-sm opacity-90">Create your free account and start chatting — no obligation.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/register" className="px-5 py-3 bg-white text-indigo-600 rounded-lg font-semibold">
              Get started
            </Link>
            <Link to="/login" className="px-5 py-3 border rounded-lg bg-white/10">
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-sm text-center text-slate-500">
          © {year} HealMeet — Built with ❤️
        </div>
      </footer>
    </div>
  );
}

/* small components used only here */

function MiniStat({ label, value }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3 text-sm">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <article className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="text-3xl mb-3" aria-hidden>
        {icon}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </article>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="p-6 rounded-lg border bg-white">
      <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 mx-auto flex items-center justify-center font-semibold mb-4">
        {num}
      </div>
      <h5 className="font-semibold mb-1 text-center">{title}</h5>
      <p className="text-sm text-slate-500 text-center">{desc}</p>
    </div>
  );
}
