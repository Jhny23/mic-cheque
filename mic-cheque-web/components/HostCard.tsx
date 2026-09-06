"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export type Host = {
  number: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  cabinet: "wood" | "cream" | "black";
  tilt?: number;
};

const CABINETS: Record<Host["cabinet"], { body: string; trim: string }> = {
  wood: { body: "#3a3530", trim: "#2a2723" },
  cream: { body: "#c9c2b4", trim: "#a89f8e" },
  black: { body: "#1c1c1c", trim: "#0a0a0a" },
};

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

export default function HostCard({ host }: { host: Host }) {
  const screenRef = useRef(null);
  const inView = useInView(screenRef, { once: true, amount: 0.5 });
  const palette = CABINETS[host.cabinet];

  return (
    <motion.div
      className="relative bg-paper p-5"
      style={{
        transform: `rotate(${host.tilt ?? 0}deg)`,
        boxShadow: "0 6px 0 rgba(0,0,0,0.08)",
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      {/* tape corner accent */}
      <div
        className="absolute -top-2 left-6 bg-ink/10"
        style={{ width: 40, height: 16, transform: "rotate(-4deg)" }}
      />

      {/* channel number */}
      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="font-body font-bold text-signal text-xs uppercase tracking-wide">
          CH.
        </span>
        <span className="font-display text-3xl text-ink leading-none">
          {host.number}
        </span>
      </div>

      {/* TV cabinet */}
      <div
        className="relative w-full p-3 pb-4"
        style={{
          background: palette.body,
          borderRadius: "10px 10px 14px 14px",
          boxShadow: `inset 0 0 0 2px ${palette.trim}, 0 6px 0 rgba(0,0,0,0.25)`,
        }}
      >
        <div
          ref={screenRef}
          className="relative overflow-hidden bg-[#0a0a0a] aspect-square"
          style={{
            borderRadius: "6px",
            boxShadow: "inset 0 0 12px rgba(0,0,0,0.8)",
          }}
        >
          {!inView ? (
            <Static />
          ) : host.photo ? (
            <Image
              src={host.photo}
              alt={host.name}
              fill
              sizes="(max-width: 640px) 90vw, 300px"
              className="object-cover"
              style={{ filter: "grayscale(1) contrast(1.1)" }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-marigold">
              <span
                className="font-display text-ink"
                style={{ fontSize: "3.5rem", opacity: 0.25 }}
              >
                {host.name[0]}
              </span>
            </div>
          )}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15), transparent 40%)",
            }}
          />
        </div>

        {/* control panel strip */}
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex gap-1.5">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="inline-block bg-[#888]"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "9999px",
                  boxShadow: "inset 0 1px 1px rgba(0,0,0,0.4)",
                }}
              />
            ))}
          </div>
          <div className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="inline-block bg-[#666]"
                style={{ width: 2, height: 6 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* identity */}
      <h3 className="font-display uppercase text-2xl text-ink mt-4 leading-none">
        {host.name}
      </h3>
      <p className="font-body font-bold text-xs uppercase tracking-wide text-signal mt-1.5">
        {host.role}
      </p>
      <p className="font-body text-sm text-ink mt-2 leading-snug opacity-80">
        {host.bio}
      </p>

      {/* social buttons — placeholders, wire up real links later */}
      <div className="flex gap-2 mt-4">
        {["IG", "X", "TT"].map((s) => (
          <span
            key={s}
            className="font-body font-bold text-[10px] px-2 py-1 border-2 border-ink text-ink"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
