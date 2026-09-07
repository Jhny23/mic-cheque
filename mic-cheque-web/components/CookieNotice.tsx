"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "mc-cookie-consent";

function CornerMark({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const vertical: React.CSSProperties = {
    position: "absolute",
    width: 1,
    height: 9,
    background: "#1A1A1A",
  };
  const horizontal: React.CSSProperties = {
    position: "absolute",
    width: 9,
    height: 1,
    background: "#1A1A1A",
  };

  const pos: Record<string, React.CSSProperties> = {
    tl: { top: -1, left: -1 },
    tr: { top: -1, right: -1 },
    bl: { bottom: -1, left: -1 },
    br: { bottom: -1, right: -1 },
  };

  return (
    <>
      <div style={{ ...vertical, ...pos[position] }} />
      <div style={{ ...horizontal, ...pos[position] }} />
    </>
  );
}

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
          className="fixed bottom-5 left-5 right-5 sm:right-auto sm:w-[380px] z-50"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div
            className="relative bg-paper p-6"
            style={{ border: "1px solid #1A1A1A" }}
          >
            <CornerMark position="tl" />
            <CornerMark position="tr" />
            <CornerMark position="bl" />
            <CornerMark position="br" />

            {/* icon + label */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="flex items-center justify-center bg-ink text-paper"
                style={{ width: 20, height: 20, fontSize: 11 }}
              >
                ❋
              </span>
              <span
                className="font-body font-semibold text-[11px] uppercase tracking-[0.15em] text-ink"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
              >
                Cookies
              </span>
            </div>

            {/* body copy */}
            <p
              className="text-ink leading-relaxed"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "15px",
              }}
            >
              This site uses cookies to remember your preferences across
              visits. Nothing is sold or shared.
            </p>

            {/* buttons */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => respond("accepted")}
                className="px-4 py-2 bg-ink text-paper text-sm"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
              >
                (accept)
              </button>
              <button
                onClick={() => respond("declined")}
                className="px-4 py-2 text-sm text-static"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
              >
                (decline)
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
