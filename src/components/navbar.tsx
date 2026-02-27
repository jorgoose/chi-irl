"use client";

import { useState } from "react";

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Submit Event", href: "#submit" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo wordmark */}
        <a href="#" className="flex items-center gap-2.5">
          {/* Location pin icon */}
          <div className="w-8 h-8 bg-cyan rounded-lg flex items-center justify-center">
            <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">CHI IRL</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hero"
            className="text-sm font-semibold text-white bg-cyan hover:bg-sky-600 px-5 py-2 rounded-full transition-colors"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-slate-600 hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center text-sm font-semibold text-white bg-cyan hover:bg-sky-600 px-5 py-2.5 rounded-full transition-colors"
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
}
