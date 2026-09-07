"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type Host = {
  number: string;
  name: string;
  role: string;
  bio: string; // treated as a personal tagline/quote, not a biography
  photo: string;
};

export default function HostRow({
  host,
  align,
  tint,
}: {
  host: Host;
  align: "left" | "right";
  tint?: boolean;
}) {
  const reverse = align === "right";

  return (
    <motion.div
      className={`relative overflow-hidden py-16 ${
        tint ? "bg-marigold/10" : "bg-paper"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* giant ghost number — bleeds to the true page edge */}
      <span
        aria-hidden
        className="absolute select-none pointer-events-none font-display text-ink"
        style={{
          fontSize: "clamp(9rem, 26vw, 16rem)",
          lineHeight: 1,
          opacity: 0.05,
          top: "-0.18em",
          [reverse ? "right" : "left"]: "-0.04em",
        }}
      >
        {host.number}
      </span>

      <div className="relative px-6 max-w-5xl mx-auto">
        <div
          className={`relative flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-10 md:gap-16`}
        >
          {/* photo — tilted, taped, like a pinned print */}
          <div className="relative w-full md:w-5/12 shrink-0">
            <div
              className="relative w-full aspect-[4/5] overflow-hidden border-[6px] border-paper"
              style={{
                transform: `rotate(${reverse ? 2 : -2}deg)`,
                boxShadow: "0 14px 0 rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={host.photo}
                alt={host.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                style={{ filter: "grayscale(1) contrast(1.08)" }}
                priority={host.number === "01"}
              />
            </div>
            <div
              className="absolute -top-2 bg-ink/10"
              style={{
                width: 44,
                height: 16,
                left: reverse ? undefined : 32,
                right: reverse ? 32 : undefined,
                transform: `rotate(${reverse ? 4 : -4}deg)`,
              }}
            />
          </div>

          {/* identity + pull-quote */}
          <div className="relative w-full md:w-7/12">
            <div className="flex items-baseline gap-3">
              <span className="font-body font-bold text-xs text-static">
                {host.number}
              </span>
              <h2 className="font-display uppercase leading-[0.85] text-ink text-[clamp(2.4rem,5.5vw,4rem)]">
                {host.name}
              </h2>
            </div>
            <p className="font-body font-bold text-xs uppercase tracking-wide text-signal mt-2">
              {host.role}
            </p>

            {/* the tagline, treated as a real pull-quote */}
            <div className="mt-6 flex gap-3">
              <span
                className="font-display text-signal leading-none shrink-0"
                style={{ fontSize: "2.5rem" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p
                className="text-ink leading-snug"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                }}
              >
                {host.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
