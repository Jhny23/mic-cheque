import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EventRow, { HangoutEvent } from "@/components/EventRow";
import RecapTile from "@/components/RecapTile";

export const metadata: Metadata = {
  title: "Hangouts — Mic Cheque Podcast",
  description:
    "Cheque Mates Hangouts — meet up with the Mic Cheque Podcast crew in person.",
};

// Placeholder events — swap in real dates/venues once ready.
const events: HangoutEvent[] = [
  {
    day: "14",
    month: "Nov",
    city: "Eldoret",
    venue: "Placeholder venue name",
    blurb: "Placeholder blurb about what happens at this hangout — swap in real details once confirmed.",
  },
  {
    day: "29",
    month: "Nov",
    city: "Nairobi",
    venue: "Placeholder venue name",
    blurb: "Placeholder blurb about what happens at this hangout — swap in real details once confirmed.",
  },
];

// Placeholder recap cities — swap in real photos once ready.
const recaps = ["Eldoret", "Nairobi", "Mombasa", "Kisumu"];

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

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="font-display uppercase leading-none text-ink text-[clamp(1.6rem,3.5vw,2.4rem)] mb-8">
          Past Hangouts
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {recaps.map((city) => (
            <RecapTile city={city} key={city} />
          ))}
        </div>
      </section>
    </main>
  );
}
