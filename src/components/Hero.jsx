import { ArrowRight, PlayCircle, Users } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pb-28 pt-14 sm:pt-16 lg:pb-36 lg:pt-20"
    >
      {/* Ambient background glow — purely decorative, sits behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-emerald-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        {/* Left: copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-accent/30 bg-emerald-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-accent-dark">
            Smart Farming Platform
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Monitor
            <br />
            <span className="text-emerald-accent-dark">Everything.</span>
            <br />
            Understand
            <br />
            <span className="text-emerald-accent-dark">Instantly.</span>
            <br />
            Act <span className="text-emerald-accent-dark">Confidently.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            AIGRA brings real-time monitoring, AI analysis, and actionable
            insights into one system — helping you optimize crops, greenhouse
            environments, and daily operations without guesswork.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-accent px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:scale-[1.03] hover:bg-emerald-accent-dark active:scale-95"
            >
              Get Started <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:scale-[1.02] hover:border-white/30 hover:bg-white/5 active:scale-95"
            >
              <PlayCircle size={16} /> See How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
            <Users size={14} />
            Trusted by farmers &amp; agri-investors across Indonesia
          </div>
        </Reveal>

        {/* Right: dashboard mockup card */}
        <Reveal delay={120}>
          <DashboardMockup />
        </Reveal>
      </div>

      {/* Wave divider into the next (light) section */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1 text-mint-50 dark:text-navy-900">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-full sm:h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 20C960 40 1200 80 1440 40V80H0V40Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-navy-800/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
      {/* Floating harvest prediction badge */}
      <div className="absolute -top-5 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-navy-700 px-3.5 py-2.5 text-xs text-slate-300 shadow-lg sm:right-6">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-accent/15 text-emerald-accent-dark">
          ✓
        </span>
        <span>
          Harvest in ~3 days
          <br />
          <span className="text-slate-500">AI prediction · 94% confidence</span>
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Field Monitor</p>
          <p className="text-xs text-slate-500">Live data · 3 areas active</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-accent/10 px-2.5 py-1 text-[11px] font-medium text-emerald-accent-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent-dark" />{" "}
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <StatTile label="Temperature" value="27°C" hint="Optimal range" />
        <StatTile label="Humidity" value="72%" hint="Slightly high" />
        <StatTile label="Soil pH" value="6.8" hint="Normal" />
        <StatTile label="Alert Level" value="Normal" hint="No issues" />
      </div>

      <div className="mt-5 rounded-xl bg-navy-900/60 p-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Temperature Trend</span>
          <span>Last 12h</span>
        </div>
        <svg
          viewBox="0 0 240 60"
          className="mt-3 h-14 w-full"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,45 30,38 60,42 90,25 120,30 150,15 180,20 210,10 240,18"
            fill="none"
            stroke="var(--color-emerald-accent-dark)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs font-medium text-slate-400">Area Status</p>
        <div className="flex items-center gap-2 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent-dark" />{" "}
            A1
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent-dark" />{" "}
            B1
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> B2
          </span>
        </div>
      </div>
    </div>
  );
}

function StatTile({ label, value, hint }) {
  return (
    <div className="rounded-xl bg-navy-900/60 p-3.5">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-white">{value}</p>
      <p className="text-[11px] text-slate-500">{hint}</p>
    </div>
  );
}
