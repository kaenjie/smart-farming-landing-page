import { AlertTriangle, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import {
  problemPoints,
  problemQuote,
  solutionPoints,
} from "../data/problemSolution";
import Reveal from "./Reveal";

export default function ProblemSolution() {
  return (
    <section className="bg-white py-20 dark:bg-navy-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-accent-dark">
            The Shift
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
            From Reactive to{" "}
            <span className="text-emerald-accent-dark">Predictive</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-400 dark:text-slate-500 sm:text-base">
            Most traditional farmers only realize there's a pest, disease, or
            crop stress issue after the damage is already visible. AIGRA flips
            that approach entirely.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Problem card */}
          <Reveal>
            <div className="h-full rounded-2xl border border-red-200/60 bg-red-50/60 p-7 dark:border-red-500/15 dark:bg-red-500/5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                <AlertTriangle size={13} /> The Problem
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink-900 dark:text-white">
                Traditional Farming Is Blind
              </h3>
              <ul className="mt-4 space-y-3">
                {problemPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-slate-400"
                  >
                    <XCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-red-400"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-red-200/60 pt-4 text-sm italic text-ink-400 dark:border-red-500/10 dark:text-slate-500">
                {problemQuote}
              </p>
            </div>
          </Reveal>

          {/* Solution card */}
          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-emerald-accent/20 bg-mint-50 p-7 dark:border-emerald-accent/15 dark:bg-emerald-accent/5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-accent/15 px-3 py-1 text-xs font-semibold text-emerald-accent-dark">
                <Sparkles size={13} /> AIGRA's Way
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink-900 dark:text-white">
                Predict Before It Happens
              </h3>
              <ul className="mt-4 space-y-3">
                {solutionPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-slate-300"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-accent-dark"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-emerald-accent/20 pt-4 text-sm text-ink-600 dark:text-slate-400">
                The result: faster prevention, up to{" "}
                <span className="font-semibold text-emerald-accent-dark">
                  30% less potential loss
                </span>
                , and more stable harvest outcomes. Not guesswork anymore — just{" "}
                <span className="font-semibold text-emerald-accent-dark">
                  data-driven farming
                </span>
                .
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex items-center justify-center gap-3 text-xs font-medium text-ink-400 dark:text-slate-600">
          <span className="h-px w-16 bg-ink-400/30 dark:bg-slate-700" />
          Powered by AI &amp; IoT
          <span className="h-px w-16 bg-ink-400/30 dark:bg-slate-700" />
        </Reveal>
      </div>
    </section>
  );
}
