"use client";

import { useRef, useState } from "react";

function SpeakerOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
      <path
        d="M16.5 8.5a5 5 0 010 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19 6a9 9 0 010 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
      <path
        d="M16 9l5 6M21 9l-5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function EpisodeClip() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const el = videoRef.current;
    if (!el) return;
    const next = !muted;
    el.muted = next;
    setMuted(next);
  }

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-display uppercase leading-none text-ink text-[clamp(2rem,4.5vw,3.2rem)]">
          Catch A Clip
        </h2>
        <span className="font-body font-semibold text-sm uppercase tracking-wide text-static">
          Ep. 377
        </span>
      </div>

      <div className="relative aspect-video w-full bg-ink overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/ep377-clip.mp4"
          poster="/videos/ep377-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/ep377-clip.webm" type="video/webm" />
          <source src="/videos/ep377-clip.mp4" type="video/mp4" />
        </video>

        <button
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 flex items-center justify-center bg-ink text-paper border-2 border-paper"
          style={{ width: 38, height: 38 }}
        >
          {muted ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
        </button>

        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-paper">
          <span
            className="inline-block bg-signal"
            style={{ width: 6, height: 6, borderRadius: "9999px" }}
          />
          <span className="font-body font-bold text-ink text-[10px] tracking-wide">
            OnlyFangs ft. King Kaka
          </span>
        </div>
      </div>

      <div className="mt-4">
        <a
          href="https://www.youtube.com/@UpSydDigitalNetworks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body font-bold px-5 py-2.5 uppercase text-xs tracking-wide border-2 border-ink text-ink"
        >
          Watch full episode
        </a>
      </div>
    </section>
  );
}
