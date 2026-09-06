import RetroTV, { Episode } from "./RetroTV";

const episodes: Episode[] = [
  {
    n: "368",
    title: "Kalasha Season",
    tag: "LIVE",
    isStatic: false,
    antenna: true,
    size: "large",
  },
  {
    n: "367",
    title: "World Cup Talk ft. TOBIT",
    tag: "NEW",
    isStatic: false,
    antenna: false,
    size: "small",
  },
  {
    n: "365",
    title: "Eldoret Hangout Recap",
    tag: "HOT",
    isStatic: false,
    antenna: true,
    size: "small",
  },
];

export default function TuneIn() {
  const [featured, ...rest] = episodes;

  return (
    <section id="episodes" className="px-6 py-16 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-display uppercase leading-none text-ink text-[clamp(2rem,4.5vw,3.2rem)]">
          Tune In
        </h2>
        <span className="font-body font-semibold text-sm uppercase tracking-wide text-static">
          Latest &amp; hottest
        </span>
      </div>

      <div className="relative">
        {/* the sets sit on this shelf — grounds the composition instead of
            letting each TV float at its own arbitrary height */}
        <div className="flex items-end justify-center sm:justify-start gap-6 sm:gap-8 flex-wrap sm:flex-nowrap pb-4">
          <RetroTV ep={featured} index={0} />
          <div className="flex items-end gap-4 w-full sm:w-auto flex-1">
            {rest.map((ep, i) => (
              <RetroTV ep={ep} index={i + 1} key={ep.n} />
            ))}
          </div>
        </div>
        <div
          className="h-2 bg-ink"
          style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.15)" }}
        />
      </div>

      <div className="mt-10">
        <a
          href="#"
          className="inline-block font-body font-bold px-5 py-2.5 uppercase text-xs tracking-wide border-2 border-ink text-ink"
        >
          View full archive
        </a>
      </div>
    </section>
  );
}
