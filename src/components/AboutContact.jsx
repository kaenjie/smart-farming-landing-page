import { useState } from "react";
import { Leaf, Send, CheckCircle2 } from "lucide-react";
import { contactInfo, aboutBadges } from "../data/contactInfo";
import aboutImage from "../assets/aigra-about.png";
import Reveal from "./Reveal";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: "", email: "", message: "" };

export default function AboutContact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const next = {};
    if (!values.name.trim()) next.name = "Full name is required.";
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Message is required.";
    return next;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="about" className="bg-white py-20 dark:bg-navy-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-accent-dark">
            About &amp; Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 dark:text-white sm:text-3xl">
            Let's Grow{" "}
            <span className="text-emerald-accent-dark">Together</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* About card */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl bg-navy-950 text-slate-300 overflow-hidden">
              {/* Cover photo */}
              <div className="relative h-48 w-full sm:h-56">
                <img
                  src={aboutImage}
                  alt="AIGRA smart farming facility"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-accent/15 text-emerald-accent-dark">
                      <Leaf size={17} />
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      About AIGRA
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed">
                    <span className="font-semibold text-white">
                      PT Aigra Eon Indonesia
                    </span>{" "}
                    is an AI-powered IoT platform designed to help farmers
                    monitor, predict, and stabilize cultivation environments in
                    real time. Built for indoor farming and mushroom
                    cultivation, AIGRA combines smart sensors, automation, and
                    intelligent data analysis to reduce crop failure risks,
                    improve environmental stability, and support more consistent
                    harvest quality.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {aboutBadges.map((badge) => (
                      <span
                        key={badge}
                        className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-emerald-accent/30 hover:bg-emerald-accent/10 hover:text-emerald-accent-dark"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-6 border-t border-white/10 pt-5 text-sm italic text-slate-400">
                  "We believe the future of farming isn't about guessing the
                  weather — it's about growing with data."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact form + info */}
          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm shadow-black/5 dark:border-white/5 dark:bg-navy-800 dark:shadow-none sm:p-8">
              <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="mt-1 text-sm text-ink-400 dark:text-slate-500">
                Have questions about our product or want a demo? Send us a
                message.
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-6 space-y-4"
              >
                <Field
                  label="Full Name"
                  name="name"
                  placeholder="e.g. Budi Santoso"
                  value={form.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                />
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={4}
                  placeholder="Tell us about your farming or monitoring needs..."
                  value={form.message}
                  onChange={handleChange("message")}
                  error={errors.message}
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-accent px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:scale-[1.01] hover:bg-emerald-accent-dark active:scale-95"
                >
                  <Send size={16} /> Send Message
                </button>

                {submitted && (
                  <p className="flex items-center gap-2 rounded-lg bg-emerald-accent/10 px-4 py-3 text-sm font-medium text-emerald-accent-dark">
                    <CheckCircle2 size={16} /> Message sent! We'll get back to
                    you soon.
                  </p>
                )}
              </form>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm shadow-black/5 dark:border-white/5 dark:bg-navy-800 dark:shadow-none sm:p-8">
              <h4 className="text-sm font-bold text-ink-900 dark:text-white">
                Contact Info
              </h4>
              <ul className="mt-4 space-y-3">
                {contactInfo.map(({ id, icon: Icon, label }) => (
                  <li
                    key={id}
                    className="flex items-start gap-3 text-sm text-ink-600 dark:text-slate-400"
                  >
                    <Icon
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-accent-dark"
                    />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, error, as = "input", ...rest }) {
  const Tag = as;
  const baseClasses = `w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400/60 focus:border-emerald-accent dark:text-white dark:placeholder:text-slate-600 ${
    error ? "border-red-400" : "border-black/10 dark:border-white/10"
  }`;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-ink-900 dark:text-slate-300"
      >
        {label} <span className="text-red-400">*</span>
      </label>
      <Tag id={name} name={name} className={baseClasses} {...rest} />
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}
