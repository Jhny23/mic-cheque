import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EventRow, { HangoutEvent } from "@/components/EventRow";

export const metadata: Metadata = {
  title: "Hangouts — Mic Cheque Podcast",
  description:
    "Cheque Mates Hangouts — meet up with the Mic Cheque Podcast crew in person.",
};

const events: HangoutEvent[] = [
  {
    day: "07",
    month: "Nov",
    city: "Nairobi",
    venue: "Venue TBC",
    time: "12:00 Noon",
    price: "KES 1,500",
    blurb:
      "It's official! Our final Cheque Mates Hangout of 2026 — let's come together to celebrate the memories, the banter, the friendships, and everything that made 2026 unforgettable. Travel updates: we're organizing transport options for everyone attending, more details dropping soon. Tell a Cheque Mate.",
    ticketUrl: "https://micchequepodcast.hustlesasa.shop",
  },
];

export default function HangoutsPage() {
  return (
    <main>
      <Navbar variant="solid" />

      <section className="bg-marigold px-6 py-16 border-b-[3px] border-ink">
        <div className="max-w-5xl mx-auto">
          <span className="font-body font-bold text-xs uppercase tracking-wide text-ink opacity-70">
            Cheque Mates
          </span>
          <h1 className="font-display uppercase text-ink leading-[0.85] mt-2 text-[clamp(2.5rem,7vw,5rem)]">
            Hangouts
          </h1>
          <p className="font-body font-medium text-ink mt-4 max-w-md">
            The banter doesn&apos;t stay on the mic. We link up with Cheque
            Mates around the country — pull up.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="font-display uppercase leading-none text-ink text-[clamp(1.6rem,3.5vw,2.4rem)] mb-2">
          Upcoming
        </h2>
        <div className="divide-y-2 divide-ink/10">
          {events.map((event) => (
            <EventRow event={event} key={event.city + event.day} />
          ))}
        </div>
      </section>
    </main>
  );
}
