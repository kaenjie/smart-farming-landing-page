import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/faqItems";
import Reveal from "./Reveal";

export default function FAQ() {
  // Storing only the currently open id (not a set) ensures opening one
  // question automatically collapses whichever was open before.
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-mint-50 py-20 dark:bg-navy-900 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-accent-dark">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
            Frequently Asked{" "}
            <span className="text-emerald-accent-dark">Questions</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-400 dark:text-slate-500 sm:text-base">
            Find answers to common questions about AIGRA's smart monitoring,
            automation, and prediction features.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqItems.map(({ id, question, answer }, i) => {
            const isOpen = openId === id;
            return (
              <Reveal key={id} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/10 dark:bg-navy-800 dark:shadow-none dark:hover:shadow-black/30">
                  <button
                    type="button"
                    onClick={() => handleToggle(id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-ink-900 transition-colors duration-200 group-hover:text-emerald-accent-dark dark:text-white sm:text-base">
                      {question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-emerald-accent-dark transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-400 dark:text-slate-500">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink-400 dark:text-slate-500">
            Still have questions? We're happy to help.
          </p>
          <a
            href="#about"
            className="mt-4 inline-block rounded-full bg-emerald-accent px-6 py-3 text-sm font-semibold text-navy-950 transition-all duration-200 hover:scale-[1.03] hover:bg-emerald-accent-dark active:scale-95"
          >
            Contact Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
