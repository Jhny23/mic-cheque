"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HOSTS = [
  { src: "/hosts/host-1.jpg", alt: "Chaxy" },
  { src: "/hosts/host-2.jpg", alt: "Mwass" },
  { src: "/hosts/host-3.jpg", alt: "Mariah" },
];

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
      style={{ minHeight: "88vh" }}
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
        {/* host cutouts — "tune in" from static to filled */}
        <div className="flex items-end mb-4">
          {HOSTS.map((host, i) => (
            <motion.div
              key={host.alt}
              className="relative"
              style={{ marginLeft: i === 0 ? 0 : -24, zIndex: 3 - i }}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
            >
              <div
                className="relative overflow-hidden border-4 border-paper"
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "9999px",
                  boxShadow: "0 4px 0 rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src={host.src}
                  alt={host.alt}
                  fill
                  sizes="96px"
                  className="object-cover"
                  style={{ filter: "grayscale(1) contrast(1.1)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* sticker logo lockup */}
        <div
          className="relative inline-block px-6 py-4 bg-paper"
          style={{ transform: "rotate(-1deg)" }}
        >
          <span
            className="inline-block absolute -top-1.5 -left-1.5 bg-signal"
            style={{ width: 10, height: 10, borderRadius: "9999px" }}
          />
          <h1
            className="font-display leading-[0.82] uppercase text-ink"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Mic Cheque
            <br />
            Podcast
          </h1>
        </div>

        <p className="font-body font-medium mt-6 max-w-md text-base leading-relaxed text-ink">
          All the scoop served silly. New episodes every Wednesday and Sunday
          — your weekly dose of madness.
        </p>

        <div className="mt-8 flex items-center gap-6">
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
