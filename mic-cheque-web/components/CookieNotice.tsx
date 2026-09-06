"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mc-cookie-consent";

const WIN_FONT = "Tahoma, Geneva, 'MS Sans Serif', sans-serif";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState<"ok" | "cancel" | null>(null);

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

  if (!visible) return null;

  const bevelRaised = {
    borderTop: "2px solid #fff",
    borderLeft: "2px solid #fff",
    borderBottom: "2px solid #404040",
    borderRight: "2px solid #404040",
  };

  const bevelInset = {
    borderTop: "2px solid #404040",
    borderLeft: "2px solid #404040",
    borderBottom: "2px solid #fff",
    borderRight: "2px solid #fff",
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-50 w-[320px]"
      style={{ background: "#c0c0c0", ...bevelRaised, fontFamily: WIN_FONT }}
    >
      {/* title bar */}
      <div
        className="flex items-center justify-between px-1.5 py-1"
        style={{
          background: "linear-gradient(90deg, #000080, #1084d0)",
        }}
      >
        <span
          className="text-white text-xs font-bold truncate"
          style={{ fontFamily: WIN_FONT }}
        >
          🍪 cookies.exe
        </span>
        <button
          onClick={() => respond("declined")}
          className="text-black text-xs font-bold leading-none px-1"
          style={{
            background: "#c0c0c0",
            ...bevelRaised,
            width: 18,
            height: 18,
          }}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* body */}
      <div className="p-3">
        <div className="flex gap-3">
          <div className="text-3xl leading-none select-none">🍪</div>
          <p className="text-xs leading-snug" style={{ color: "#000" }}>
            This website uses <b>COOKIES</b> to enhance your browsing
            experience!! Click OK to continue or Cancel to browse without
            the good stuff.
          </p>
        </div>

        {/* marquee */}
        <div
          className="mt-2 overflow-hidden whitespace-nowrap text-xs"
          style={{ background: "#000", color: "#0f0", ...bevelInset, padding: "2px 0" }}
        >
          <div className="inline-block" style={{ animation: "mc-marquee 9s linear infinite" }}>
            ★彡 THANKS FOR VISITING MIC CHEQUE PODCAST 彡★ BEST VIEWED AT
            800x600 ★彡 NEW EPISODES EVERY WED &amp; SUN 彡★ SIGN OUR
            GUESTBOOK 彡★&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-2">
          <span
            className="text-[10px] font-bold px-1"
            style={{
              background: "#ff0",
              color: "#000",
              animation: "mc-blink 1s steps(1) infinite",
            }}
          >
            NEW!
          </span>
          <span className="text-[10px]" style={{ color: "#000" }}>
            hits: 004213
          </span>
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-2 mt-3">
          <button
            onMouseDown={() => setPressed("cancel")}
            onMouseUp={() => setPressed(null)}
            onMouseLeave={() => setPressed(null)}
            onClick={() => respond("declined")}
            className="text-xs px-4 py-1"
            style={{
              background: "#c0c0c0",
              color: "#000",
              ...(pressed === "cancel" ? bevelInset : bevelRaised),
              fontFamily: WIN_FONT,
            }}
          >
            Cancel
          </button>
          <button
            onMouseDown={() => setPressed("ok")}
            onMouseUp={() => setPressed(null)}
            onMouseLeave={() => setPressed(null)}
            onClick={() => respond("accepted")}
            className="text-xs px-4 py-1 font-bold"
            style={{
              background: "#c0c0c0",
              color: "#000",
              ...(pressed === "ok" ? bevelInset : bevelRaised),
              fontFamily: WIN_FONT,
            }}
          >
            OK
          </button>
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
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
