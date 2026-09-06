export type HangoutEvent = {
  day: string;
  month: string;
  city: string;
  venue: string;
  blurb: string;
};

export default function EventRow({ event }: { event: HangoutEvent }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6 py-8">
      {/* date block */}
      <div className="flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-0 sm:w-24 shrink-0">
        <span className="font-display text-ink leading-none text-4xl">
          {event.day}
        </span>
        <span className="font-body font-bold text-xs uppercase tracking-wide text-signal">
          {event.month}
        </span>
      </div>

      {/* info */}
      <div className="flex-1">
        <h3 className="font-display uppercase text-xl text-ink leading-none">
          {event.city}
        </h3>
        <p className="font-body font-medium text-sm text-static mt-1">
          {event.venue}
        </p>
        <p className="font-body text-sm text-ink mt-2 leading-relaxed opacity-80 max-w-md">
          {event.blurb}
        </p>
      </div>

      {/* action */}
      <div className="sm:shrink-0">
        <a
          href="#"
          className="inline-block font-body font-bold px-5 py-2.5 uppercase text-xs tracking-wide bg-ink text-paper"
        >
          RSVP
        </a>
      </div>
    </div>
  );
}
