"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Static() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, #999 0px, #999 1px, #666 2px, #ccc 3px)",
        backgroundSize: "3px 3px",
        filter: "contrast(1.4) brightness(0.9)",
        mixBlendMode: "luminosity",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-marigold"
      style={{ minHeight: "100vh" }}
    >
      {/* paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* vertical repeated label */}
      <div className="absolute left-6 top-24 flex flex-col gap-1 select-none">
        {["BANTER TIME", "BANTER TIME", "BANTER TIME"].map((t, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-widest text-ink"
            style={{ opacity: 0.55 - i * 0.12 }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* rope/cable diagonal accent */}
      <div
        className="absolute -right-10 -top-10 w-40 h-[140%] rotate-12 opacity-25 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(115deg, #1A1A1A 0 8px, transparent 8px 14px)",
        }}
      />

      <div className="relative flex flex-col items-start justify-center h-full px-6 pt-40 pb-16 max-w-5xl mx-auto">
        {/* visually hidden but present for SEO/accessibility — the visible
            title lives inside the sticker lockup image below */}
        <h1 className="sr-only">Mic Cheque Podcast</h1>

        {/* the original sticker lockup — hosts + wordmark as one asset */}
        <motion.div
          className="relative w-full max-w-xl -ml-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/brand/mic-cheque-lockup.png"
            alt="Mic Cheque Podcast — Chaxy, Mwass and Mariah"
            width={1626}
            height={900}
            priority
            className="w-full h-auto"
          />
        </motion.div>

        <p className="font-body font-medium mt-2 max-w-md text-base leading-relaxed text-ink">
          We like to talk. You like to hear us. We love that you listen.
          Thank you for supporting the show and rocking the merch.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="#episodes"
            className="font-body font-bold px-6 py-3 uppercase text-sm tracking-wide bg-ink text-paper"
          >
            Watch latest episode
          </a>
          <div className="flex items-center gap-2">
            <span
              className="inline-block animate-pulse bg-signal"
              style={{ width: 8, height: 8, borderRadius: "9999px" }}
            />
            <span className="font-body font-bold text-sm uppercase tracking-wide text-ink">
              Wed &amp; Sun
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
