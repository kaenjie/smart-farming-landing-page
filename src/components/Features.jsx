import { features } from "../data/features";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-mint-50 py-20 dark:bg-navy-900 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-accent-dark">
            Core Features
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
            Why Farmers &amp; Investors{" "}
            <span className="text-emerald-accent-dark">Trust AIGRA</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-400 dark:text-slate-500 sm:text-base">
            Smart technology designed to accelerate monitoring, prediction, and
            operational decision-making in real time.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map(
            ({ id, icon: Icon, title, description, featured }, i) => (
              <Reveal key={id} delay={i * 90}>
                <div className="group relative h-full rounded-2xl bg-white p-7 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/10 dark:bg-navy-800 dark:shadow-none dark:hover:shadow-black/30">
                  {featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-emerald-accent/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-accent-dark">
                      Featured
                    </span>
                  )}
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-accent/10 text-emerald-accent-dark transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400 dark:text-slate-500">
                    {description}
                  </p>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
