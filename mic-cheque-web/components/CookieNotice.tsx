"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "mc-cookie-consent";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  function respond(choice: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 left-5 right-5 sm:right-auto sm:w-[360px] z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative bg-paper p-5 shadow-[0_8px_0_rgba(0,0,0,0.15)]">
            {/* tape corner */}
            <div
              className="absolute -top-2 left-8 bg-ink/10"
              style={{ width: 44, height: 16, transform: "rotate(-3deg)" }}
            />

            {/* eyebrow + blinking badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-body font-bold text-[10px] uppercase tracking-wide text-static">
                cookies.txt
              </span>
              <span
                className="font-body font-bold text-[9px] uppercase tracking-wide bg-signal text-paper px-1.5 py-0.5"
                style={{ animation: "mc-blink 1.1s steps(1) infinite" }}
              >
                New
              </span>
            </div>

            <h2 className="font-display uppercase text-2xl text-ink leading-none">
              Real Talk
            </h2>

            <p className="font-body text-sm text-ink leading-relaxed opacity-80 mt-2">
              We use cookies to keep the banter running smoothly. Not the
              edible kind — no crumbs, just data that makes the site work
              better.
            </p>

            {/* marquee ticker, in-brand */}
            <div className="mt-3 overflow-hidden whitespace-nowrap bg-ink py-1.5">
              <div
                className="inline-block font-body font-bold text-[10px] uppercase tracking-wide text-marigold"
                style={{ animation: "mc-marquee 10s linear infinite" }}
              >
                ★ new episodes every wed &amp; sun ★ #bantertime ★ pull up
                to the next hangout ★ new episodes every wed &amp; sun ★
                #bantertime ★ pull up to the next hangout ★
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="font-body font-medium text-[10px] text-static">
                visitor no. 004213
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => respond("declined")}
                  className="font-body font-bold px-3 py-1.5 uppercase text-[11px] tracking-wide border-2 border-ink text-ink"
                >
                  Nah
                </button>
                <button
                  onClick={() => respond("accepted")}
                  className="font-body font-bold px-3 py-1.5 uppercase text-[11px] tracking-wide bg-ink text-paper"
                >
                  Bet
                </button>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes mc-marquee {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(-100%);
              }
            }
            @keyframes mc-blink {
              50% {
                opacity: 0.25;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
