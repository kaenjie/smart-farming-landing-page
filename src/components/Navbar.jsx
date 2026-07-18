import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../data/navLinks";
import { useTheme } from "../hooks/useTheme";
import aigraLogo from "../assets/aigra_putih.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Blur effect on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-navy-950/90 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-navy-950"
      } dark:bg-navy-950`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-2 text-white"
        >
          <img src={aigraLogo} alt="AIGRA Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 place-items-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="hidden rounded-full bg-emerald-accent px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:scale-[1.03] hover:bg-emerald-accent-dark active:scale-95 sm:inline-block"
          >
            Get Started
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-200 hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu — slides down as an overlay panel */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-white/10 bg-navy-950 px-5 pb-6 pt-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="mt-2 rounded-full bg-emerald-accent px-5 py-3 text-center text-sm font-semibold text-navy-950 transition-transform hover:scale-[1.02] active:scale-95"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
