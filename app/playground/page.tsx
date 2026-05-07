"use client";

import { useState } from "react";

export default function Playground() {
  const [impact, setImpact] = useState(65);
  const [stillness, setStillness] = useState(40);

  const fallRisk = Math.min(100, Math.round(impact * 0.7 + stillness * 0.3));

  return (
    <main className="min-h-screen bg-slate-950 px-8 py-20 text-slate-200">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-teal-300 hover:underline">
          ← Back Home
        </a>

        <h1 className="mt-10 text-5xl font-bold text-white">
          Engineering Playground
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          This is a small interactive demo inspired by my fall detection project.
          Move the sliders to simulate motion impact and stillness after impact.
        </p>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <label className="block text-sm uppercase tracking-widest text-slate-400">
            Impact Level: {impact}
          </label>

          <input
            type="range"
            min="0"
            max="100"
            value={impact}
            onChange={(e) => setImpact(Number(e.target.value))}
            className="mt-4 w-full"
          />

          <label className="mt-8 block text-sm uppercase tracking-widest text-slate-400">
            Stillness After Impact: {stillness}
          </label>

          <input
            type="range"
            min="0"
            max="100"
            value={stillness}
            onChange={(e) => setStillness(Number(e.target.value))}
            className="mt-4 w-full"
          />

          <div className="mt-10">
            <p className="text-sm uppercase tracking-widest text-slate-400">
              Fall Risk Score
            </p>

            <div className="mt-4 h-5 rounded-full bg-slate-800">
              <div
                className="h-5 rounded-full bg-teal-300 transition-all"
                style={{ width: `${fallRisk}%` }}
              />
            </div>

            <p className="mt-4 text-3xl font-bold text-white">
              {fallRisk}%
            </p>

            <p className="mt-2 text-slate-400">
              {fallRisk > 70
                ? "High risk: impact and stillness suggest a possible fall."
                : fallRisk > 40
                ? "Medium risk: motion pattern may need more checking."
                : "Low risk: motion looks closer to normal movement."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}