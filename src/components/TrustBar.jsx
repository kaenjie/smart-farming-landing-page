import { trustStats } from "../data/trustStats";
import Reveal from "./Reveal";

export default function TrustBar() {
  return (
    <section
      id="product"
      className="bg-mint-50 py-20 dark:bg-navy-900 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-accent-dark">
            Why AIGRA Works
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
            Trusted to help farmers act faster and lose less.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {trustStats.map(({ id, icon: Icon, value, title, caption }, i) => (
            <Reveal key={id} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 dark:bg-navy-800 dark:shadow-none dark:hover:shadow-black/30">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-accent/10 text-emerald-accent-dark">
                  <Icon size={20} />
                </span>
                <p className="mt-4 text-3xl font-extrabold text-ink-900 dark:text-white">
                  {value}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900 dark:text-slate-200">
                  {title}
                </p>
                <p className="mt-1 text-xs text-ink-400 dark:text-slate-500">
                  {caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
