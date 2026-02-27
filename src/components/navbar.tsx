"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Submit Event", href: "#submit" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + wordmark */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.jpg"
            alt="CHI IRL"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-bold text-gray-900 text-lg">CHI IRL</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-900/70 hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hero"
            className="text-sm font-semibold text-white bg-cyan hover:bg-cyan-dark px-5 py-2 rounded-full transition-colors"
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
            className={`block w-5 h-0.5 bg-gray-900 transition-transform ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-transform ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-900/70 hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center text-sm font-semibold text-white bg-cyan hover:bg-cyan-dark px-5 py-2.5 rounded-full transition-colors"
          >
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
}
