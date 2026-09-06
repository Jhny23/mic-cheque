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
          className="fixed bottom-5 left-5 right-5 sm:right-auto sm:w-96 z-50"
          initial={{ opacity: 0, y: 40, rotate: 0 }}
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

            <div className="flex items-start gap-2 mb-2">
              <span
                className="inline-block bg-signal mt-2"
                style={{ width: 8, height: 8, borderRadius: "9999px" }}
              />
              <h2 className="font-display uppercase text-2xl text-ink leading-none">
                Real Talk
              </h2>
            </div>

            <p className="font-body text-sm text-ink leading-relaxed opacity-80">
              We use cookies to keep the banter running smoothly. Not the
              edible kind — no crumbs, just data that makes the site work
              better.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => respond("accepted")}
                className="font-body font-bold px-4 py-2 uppercase text-xs tracking-wide bg-ink text-paper"
              >
                Bet, accept
              </button>
              <button
                onClick={() => respond("declined")}
                className="font-body font-bold px-4 py-2 uppercase text-xs tracking-wide border-2 border-ink text-ink"
              >
                Nah, I&apos;m good
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
