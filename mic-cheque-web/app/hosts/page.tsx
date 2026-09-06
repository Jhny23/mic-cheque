import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HostCard, { Host } from "@/components/HostCard";

export const metadata: Metadata = {
  title: "Hosts — Mic Cheque Podcast",
  description: "Meet Chaxy, Mwass and Mariah — the voices behind Mic Cheque Podcast.",
};

// Placeholder copy — swap in real bios/roles and photo paths once ready.
const hosts: Host[] = [
  {
    number: "01",
    name: "Chaxy",
    role: "The Wildcard",
    bio: "Placeholder bio — drop Chaxy's real one-liner here once it's ready.",
    cabinet: "cream",
    tilt: -1.5,
  },
  {
    number: "02",
    name: "Mwass",
    role: "The Anchor",
    bio: "Placeholder bio — drop Mwass's real one-liner here once it's ready.",
    cabinet: "wood",
    tilt: 1,
  },
  {
    number: "03",
    name: "Mariah",
    role: "The Chaos",
    bio: "Placeholder bio — drop Mariah's real one-liner here once it's ready.",
    cabinet: "black",
    tilt: -1,
  },
];

export default function HostsPage() {
  return (
    <main>
      <Navbar variant="solid" />

      <section className="bg-marigold px-6 py-16 border-b-[3px] border-ink">
        <div className="max-w-5xl mx-auto">
          <span className="font-body font-bold text-xs uppercase tracking-wide text-ink opacity-70">
            Behind the mics
          </span>
          <h1 className="font-display uppercase text-ink leading-[0.85] mt-2 text-[clamp(2.5rem,7vw,5rem)]">
            Channel Lineup
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {hosts.map((host) => (
            <HostCard host={host} key={host.number} />
          ))}
        </div>
      </section>
    </main>
  );
}
