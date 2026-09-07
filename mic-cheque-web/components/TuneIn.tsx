import RetroTV, { Episode, TV_FRAMES } from "./RetroTV";

const episodes: Episode[] = [
  {
    n: "394",
    title: "Live From Kampala ft. Joshua Baraka",
    tag: "LIVE",
    photo: "/episodes/ep-394.jpg",
  },
  {
    n: "392",
    title: "Limited Living ft. Brayo Biker",
    tag: "NEW",
    photo: "/episodes/ep-392.jpg",
  },
  {
    n: "373",
    title: "Saddam Gomorah ft. Etania",
    tag: "HOT",
    photo: "/episodes/ep-373.jpg",
  },
];

export default function TuneIn() {
  return (
    <section id="episodes" className="px-6 py-16 max-w-4xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-2 mb-10">
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
          href="https://www.youtube.com/@UpSydDigitalNetworks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body font-bold px-5 py-2.5 uppercase text-xs tracking-wide border-2 border-ink text-ink"
        >
          View full archive
        </a>
      </div>
    </section>
  );
}
