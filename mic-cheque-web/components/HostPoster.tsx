import Image from "next/image";

export type HostBase = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export type BlockColor = "red" | "blue" | "cream";

export const BLOCK_STYLES: Record<BlockColor, { bg: string; ghost: string }> =
  {
    red: { bg: "#D2463C", ghost: "#ECE1C4" },
    blue: { bg: "#84A8DF", ghost: "#1A1A1A" },
    cream: { bg: "#ECE1C4", ghost: "#1A1A1A" },
  };

// same turbulence noise used for the hero's paper grain, reused here so the
// color panels read as printed paper rather than flat digital swatches
const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function HostPoster({
  host,
  block,
}: {
  host: HostBase;
  block: BlockColor;
}) {
  const style = BLOCK_STYLES[block];

  return (
    <div
      className="relative aspect-[3/4] overflow-hidden"
      style={{ background: style.bg }}
    >
      {/* printed-paper grain on the panel itself */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: GRAIN_URL, mixBlendMode: "multiply" }}
      />

      {host.photo ? (
        <>
          <Image
            src={host.photo}
            alt={host.name}
            fill
            sizes="(max-width: 640px) 33vw, 260px"
            className="object-cover"
            style={{ filter: "grayscale(1) contrast(1.25) brightness(1.05)" }}
          />
          {/* halftone/newsprint dot texture over the cutout */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1px, transparent 1.2px)",
              backgroundSize: "4px 4px",
              mixBlendMode: "multiply",
              opacity: 0.25,
            }}
          />
        </>
      ) : (
        // placeholder until a real cutout is uploaded for this host
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display"
            style={{ fontSize: "4rem", color: style.ghost, opacity: 0.35 }}
          >
            {host.name[0]}
          </span>
        </div>
      )}
    </div>
  );
}
