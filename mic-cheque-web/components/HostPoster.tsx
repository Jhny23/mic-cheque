import Image from "next/image";

export type Host = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  block: "marigold" | "signal" | "ink";
};

const BLOCK_STYLES: Record<Host["block"], { bg: string; ghost: string }> = {
  marigold: { bg: "#F2C230", ghost: "#1A1A1A" },
  signal: { bg: "#C41E1E", ghost: "#F5F3EE" },
  ink: { bg: "#1A1A1A", ghost: "#F5F3EE" },
};

export default function HostPoster({ host }: { host: Host }) {
  const style = BLOCK_STYLES[host.block];

  return (
    <div
      className="relative aspect-[3/4] overflow-hidden"
      style={{ background: style.bg }}
    >
      {host.photo ? (
        <>
          <Image
            src={host.photo}
            alt={host.name}
            fill
            sizes="(max-width: 640px) 33vw, 300px"
            className="object-cover"
            style={{ filter: "grayscale(1) contrast(1.2) brightness(1.05)" }}
          />
          {/* halftone/newsprint dot texture over the photo */}
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
        // placeholder until a real photo is uploaded for this host
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display"
            style={{ fontSize: "5rem", color: style.ghost, opacity: 0.3 }}
          >
            {host.name[0]}
          </span>
        </div>
      )}
    </div>
  );
}
