import RetroTV, { Episode } from "./RetroTV";

const episodes: Episode[] = [
  { n: "368", title: "Kalasha Season", tag: "LIVE", isStatic: false, antenna: true },
  { n: "367", title: "World Cup Talk ft. TOBIT", tag: "NEW", isStatic: false, antenna: false },
  { n: "365", title: "Eldoret Hangout Recap", tag: "HOT", isStatic: false, antenna: true },
];

export default function TuneIn() {
  return (
    <section id="episodes" className="px-6 py-16 max-w-4xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-display uppercase leading-none text-ink text-[clamp(2rem,4.5vw,3.2rem)]">
          Tune In
        </h2>
        <span className="font-body font-semibold text-sm uppercase tracking-wide text-static">
          Latest &amp; hottest
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {episodes.map((ep, i) => (
          <RetroTV ep={ep} index={i} key={ep.n} />
        ))}
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
