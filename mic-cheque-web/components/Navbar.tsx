"use client";

import { useState } from "react";

const LINKS = [
  { label: "Episodes", href: "#episodes" },
  { label: "Hosts", href: "#hosts" },
  { label: "Hangouts", href: "#hangouts" },
  { label: "Shop", href: "#shop" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <a
          href="#"
          className="font-body font-semibold text-sm tracking-wide text-ink"
        >
          MIC CHEQUE PODCAST
        </a>

        {/* desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body font-medium text-sm text-ink hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <span className="flex items-center gap-2 pl-2">
            <span className="inline-block w-2 h-2 rounded-full bg-signal animate-pulse" />
            <span className="font-body font-bold text-xs uppercase tracking-wide text-ink">
              Wed &amp; Sun
            </span>
          </span>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden font-body font-bold text-xs uppercase tracking-wide text-ink"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden flex flex-col gap-4 px-6 pb-6 bg-marigold border-b-[3px] border-ink">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display uppercase text-2xl text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
