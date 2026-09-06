import Image from "next/image";

export type Episode = {
  n: string;
  title: string;
  tag: string | null;
  photo?: string; // episode screenshot to place inside the screen
};

export type TVFrame = {
  src: string;
  imgW: number;
  imgH: number;
  screen: { leftPct: number; topPct: number; widthPct: number; heightPct: number };
};

// Measured from the actual photo — see /public/tvs source notes.
export const TV_FRAMES: TVFrame[] = [
  {
    src: "/tvs/tv-1.png",
    imgW: 330,
    imgH: 225,
    screen: { leftPct: 12.12, topPct: 17.78, widthPct: 59.09, heightPct: 65.33 },
  },
  {
    src: "/tvs/tv-2.png",
    imgW: 270,
    imgH: 180,
    screen: { leftPct: 9.26, topPct: 11.11, widthPct: 61.48, heightPct: 67.78 },
  },
  {
    src: "/tvs/tv-3.png",
    imgW: 206,
    imgH: 145,
    screen: { leftPct: 15.05, topPct: 2.76, widthPct: 54.37, heightPct: 62.07 },
  },
];

export default function RetroTV({
  ep,
  frame,
}: {
  ep: Episode;
  frame: TVFrame;
}) {
  const { screen } = frame;

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative w-full"
        style={{ aspectRatio: `${frame.imgW} / ${frame.imgH}` }}
      >
        {/* episode screenshot, sitting behind the frame, positioned to
            exactly fill the measured screen hole */}
        <div
          className="absolute overflow-hidden bg-[#0a0a0a]"
          style={{
            left: `${screen.leftPct}%`,
            top: `${screen.topPct}%`,
            width: `${screen.widthPct}%`,
            height: `${screen.heightPct}%`,
          }}
        >
          {ep.photo ? (
            <Image
              src={ep.photo}
              alt={ep.title}
              fill
              sizes="(max-width: 640px) 33vw, 260px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-marigold">
              <span
                className="font-display text-ink"
                style={{ fontSize: "1.6rem", opacity: 0.25 }}
              >
                {ep.n}
              </span>
            </div>
          )}
          {ep.tag && (
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

        {/* the TV photo itself, on top, with a transparent hole where the
            screen is — this is what actually frames the screenshot */}
        <Image
          src={frame.src}
          alt=""
          fill
          sizes="(max-width: 640px) 33vw, 260px"
          className="object-contain pointer-events-none select-none"
        />
      </div>

      <div className="mt-3 text-center px-1">
        <p className="font-body font-medium text-[10px] text-static">
          EP {ep.n}
        </p>
        <p className="font-body font-semibold text-[11px] text-ink leading-tight">
          {ep.title}
        </p>
      </div>
    </div>
  );
}
