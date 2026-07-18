import { Sprout, AtSign, Mail, Phone } from "lucide-react";
import { footerColumns } from "../data/footerLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-navy-950 pt-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-accent/15 text-emerald-accent-dark">
                <Sprout size={16} strokeWidth={2.5} />
              </span>
              <span className="text-lg font-bold">AIGRA</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              AIGRA is an AI-powered agriculture platform that helps farmers
              monitor, analyze, and automate cultivation environments in real
              time for smarter and more stable farming operations.
            </p>
            <div className="mt-5 flex gap-3">
              <IconLink
                icon={AtSign}
                href="https://instagram.com/aigra.id"
                label="Instagram"
              />
              <IconLink icon={Mail} href="mailto:info@aigra.id" label="Email" />
              <IconLink icon={Phone} href="tel:+6285771480820" label="Phone" />
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.id}>
              <h4 className="text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm transition-colors hover:text-emerald-accent-dark"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold text-white">Get Started</h4>
            <p className="mt-4 text-sm">
              Ready to transform your farming operations with AI and IoT?
            </p>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-accent px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:scale-[1.03] hover:bg-emerald-accent-dark active:scale-95"
            >
              Contact Us →
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row">
          <p>© {year} AIGRA. All rights reserved.</p>
          <p>PT Aigra Eon Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

function IconLink({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:border-emerald-accent/40 hover:text-emerald-accent-dark"
    >
      <Icon size={15} />
    </a>
  );
}
