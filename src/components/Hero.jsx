import React from "react";
import { Link } from "react-router-dom";


/**
 * Hero - main top section
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            1-on-1 Random Video Chat — Meet Real People Instantly.
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            HealMeet connects you with real users worldwide. If no one is online, a realistic AI profile joins
            instantly — no waiting, always a conversation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/register"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg shadow hover:scale-105 transition-transform"
            >
              I am Man
            </Link>

            <Link
              to="/register"
              className="px-6 py-3 bg-white border rounded-lg shadow text-slate-800 hover:bg-slate-100 transition"
            >
              I am Woman
            </Link>

            <Link to="/register" className="px-6 py-3 border border-slate-300 rounded-lg text-slate-600">
              Try for free
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <Stat num="1 000 000+" label="Users joined" />
            <Stat num="10 000" label="Online every day" />
            <Stat num="100" label="Countries" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white shadow-xl rounded-3xl overflow-hidden">
            <img src="/assets/video-preview.jpg" alt="Chat Preview" className="w-full h-64 object-cover" />

            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-slate-400">Trending now</div>
                  <div className="font-semibold">Live profiles</div>
                </div>
                <div className="text-sm text-pink-500 cursor-pointer">See all</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <TrendingCard key={i} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BG glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-pink-100 opacity-40 blur-3xl" />
      </div>
    </section>
  );
}
