import Image from "next/image";

export type Host = {
  number: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export default function HostRow({
  host,
  align,
}: {
  host: Host;
  align: "left" | "right";
}) {
  const reverse = align === "right";

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16 py-14`}
    >
      <div className="w-full md:w-5/12">
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src={host.photo}
            alt={host.name}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            style={{ filter: "grayscale(1) contrast(1.05)" }}
            priority={host.number === "01"}
          />
        </div>
      </div>

      <div className="w-full md:w-7/12">
        <span className="font-body font-bold text-xs text-static">
          {host.number}
        </span>
        <h2 className="font-display uppercase leading-[0.85] text-ink mt-2 text-[clamp(2.2rem,5vw,3.6rem)]">
          {host.name}
        </h2>
        <p className="font-body font-bold text-xs uppercase tracking-wide text-signal mt-3">
          {host.role}
        </p>
        <p className="font-body text-base text-ink mt-4 leading-relaxed max-w-md opacity-80">
          {host.bio}
        </p>
      </div>
    </div>
  );
}
