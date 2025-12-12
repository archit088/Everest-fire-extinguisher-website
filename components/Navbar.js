"use client";

import { useState } from "react";
import useScrollSpy from "./useScrollSpy";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const sections = ["home", "services", "products", "testimonials", "brands"];
  const active = useScrollSpy(sections);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Everest<span className="text-red-500">Fire</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`transition-all ${
                    active === sec
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-400"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl py-4">
            <ul className="flex flex-col gap-6 text-center text-white text-lg">
              {sections.map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    onClick={() => setOpen(false)}
                    className={`transition-all ${
                      active === sec
                        ? "text-red-500 font-bold"
                        : "hover:text-red-400"
                    }`}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
