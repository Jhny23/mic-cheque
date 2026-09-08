"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { TV_FRAMES } from "@/components/RetroTV";

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
        animation: "static-flicker 0.15s steps(2) infinite",
      }}
    />
  );
}

export default function NotFound() {
  const frame = TV_FRAMES[0];
  const { screen } = frame;

  return (
    <main>
      <Navbar variant="solid" />

      <section className="px-6 py-20 max-w-3xl mx-auto flex flex-col items-center text-center">
        <span className="font-body font-bold text-xs uppercase tracking-wide text-signal mb-2">
          CH. 404
        </span>

        <div
          className="relative w-full max-w-xs mb-8"
          style={{ aspectRatio: `${frame.imgW} / ${frame.imgH}` }}
        >
          <div
            className="absolute overflow-hidden bg-[#0a0a0a]"
            style={{
              left: `${screen.leftPct}%`,
              top: `${screen.topPct}%`,
              width: `${screen.widthPct}%`,
              height: `${screen.heightPct}%`,
            }}
          >
            <Static />
          </div>
          <Image
            src={frame.src}
            alt=""
            fill
            sizes="320px"
            className="object-contain pointer-events-none select-none"
          />
        </div>

        <h1 className="font-display uppercase leading-[0.85] text-ink text-[clamp(2.5rem,8vw,4.5rem)]">
          Signal Lost
        </h1>
        <p className="font-body text-ink opacity-70 mt-4 max-w-sm">
          This page went off air. Check the antenna, or just head back to
          the good stuff.
        </p>

        <Link
          href="/"
          className="inline-block font-body font-bold px-6 py-3 uppercase text-sm tracking-wide bg-ink text-paper mt-8"
        >
          Back to the show
        </Link>
      </section>

      <style jsx global>{`
        @keyframes static-flicker {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
