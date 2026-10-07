"use client";

import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md print:hidden">
      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 md:px-10" aria-label="Main navigation">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-primary md:text-2xl">
          <span className="text-accent">N.</span>
          <span className="text-primary">Rahe</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-accent/80 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </div>

        <div className="relative md:hidden" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-accent shadow-sm transition hover:border-primary hover:text-primary"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "bottom-2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col text-sm font-semibold text-accent/80">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 transition hover:bg-primary/5 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
