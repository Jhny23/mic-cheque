import RetroTV, { Episode, TV_FRAMES } from "./RetroTV";

// photo left empty for now — pass an episode screenshot path once you have one,
// e.g. photo: "/episodes/368.jpg"
const episodes: Episode[] = [
  { n: "368", title: "Kalasha Season", tag: "LIVE" },
  { n: "367", title: "World Cup Talk ft. TOBIT", tag: "NEW" },
  { n: "365", title: "Eldoret Hangout Recap", tag: "HOT" },
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-end">
        {episodes.map((ep, i) => (
          <RetroTV ep={ep} frame={TV_FRAMES[i % TV_FRAMES.length]} key={ep.n} />
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
