"use client";

import { useEffect, useState } from "react";

export type Episode = {
  n: string;
  title: string;
  tag: string | null;
  isStatic: boolean;
  antenna: boolean;
  size: "large" | "small";
};

const cabinetPalettes = [
  { body: "#3a3530", trim: "#2a2723" }, // dark wood
  { body: "#c9c2b4", trim: "#a89f8e" }, // cream plastic
  { body: "#8a1f1f", trim: "#5e1414" }, // red plastic — matches the brand photo set
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

export default function RetroTV({
  ep,
  index,
}: {
  ep: Episode;
  index: number;
}) {
  const [tuned, setTuned] = useState(false);
  const palette = cabinetPalettes[index % cabinetPalettes.length];

  useEffect(() => {
    const t = setTimeout(() => setTuned(true), 300 + index * 120);
    return () => clearTimeout(t);
  }, [index]);

  const showStatic = ep.isStatic || !tuned;
  const isLarge = ep.size === "large";

  return (
    <div
      className={`flex flex-col items-center ${
        isLarge ? "w-full sm:w-[46%]" : "w-full sm:w-[24%]"
      }`}
    >
      <div className="flex gap-3 h-5 -mb-1">
        {ep.antenna && (
          <>
            <div
              style={{
                width: 2,
                height: isLarge ? 26 : 18,
                background: "#666",
                transform: "rotate(-18deg)",
                transformOrigin: "bottom",
              }}
            />
            <div
              style={{
                width: 2,
                height: isLarge ? 26 : 18,
                background: "#666",
                transform: "rotate(18deg)",
                transformOrigin: "bottom",
              }}
            />
          </>
        )}
      </div>

      <div
        className="relative w-full p-3 pb-4"
        style={{
          background: palette.body,
          borderRadius: "10px 10px 14px 14px",
          boxShadow: `inset 0 0 0 2px ${palette.trim}, 0 6px 0 rgba(0,0,0,0.25)`,
        }}
      >
        <div
          className="relative overflow-hidden bg-[#0a0a0a]"
          style={{
            borderRadius: "6px",
            aspectRatio: isLarge ? "5/4" : "1/1",
            boxShadow: "inset 0 0 12px rgba(0,0,0,0.8)",
          }}
        >
          {showStatic ? (
            <Static />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-marigold">
              <span
                className="font-display text-ink"
                style={{ fontSize: isLarge ? "3.4rem" : "1.9rem", opacity: 0.18 }}
              >
                {ep.n}
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
          {ep.tag && !showStatic && (
            <div className="absolute top-1 left-1 flex items-center gap-1 px-1.5 py-0.5 bg-paper">
              <span
                className="inline-block bg-signal"
                style={{ width: 5, height: 5, borderRadius: "9999px" }}
              />
              <span className="font-body font-bold text-ink text-[8px] tracking-wide">
                {ep.tag}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex gap-1.5">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="inline-block bg-[#888]"
                style={{
                  width: isLarge ? 9 : 6,
                  height: isLarge ? 9 : 6,
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
                style={{ width: 2, height: isLarge ? 7 : 5 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 text-center px-1 h-[34px]">
        <p className="font-body font-medium text-[10px] text-static">
          EP {ep.n}
        </p>
        <p
          className={`font-body font-semibold text-ink leading-tight ${
            isLarge ? "text-sm" : "text-[11px]"
          }`}
        >
          {ep.title}
        </p>
      </div>
    </div>
  );
}
