import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PosterGrid from "@/components/PosterGrid";
import { Host } from "@/components/HostPoster";

export const metadata: Metadata = {
  title: "Hosts — Mic Cheque Podcast",
  description:
    "Meet Chaxy, Mwass and Mariah — the voices behind Mic Cheque Podcast.",
};

// Placeholder copy — swap in real bios/roles and photo paths once ready.
const hosts: Host[] = [
  {
    name: "Chaxy",
    role: "The Wildcard",
    bio: "Placeholder bio — drop Chaxy's real one-liner here once it's ready.",
    block: "marigold",
  },
  {
    name: "Mwass",
    role: "The Anchor",
    bio: "Placeholder bio — drop Mwass's real one-liner here once it's ready.",
    block: "signal",
  },
  {
    name: "Mariah",
    role: "The Chaos",
    bio: "Placeholder bio — drop Mariah's real one-liner here once it's ready.",
    block: "ink",
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
            The Cast
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <PosterGrid hosts={hosts} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {hosts.map((host, i) => (
            <div key={host.name}>
              <span className="font-body font-bold text-xs text-static">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display uppercase text-2xl text-ink leading-none mt-1">
                {host.name}
              </h2>
              <p className="font-body font-bold text-xs uppercase tracking-wide text-signal mt-1.5">
                {host.role}
              </p>
              <p className="font-body text-sm text-ink mt-2 leading-snug opacity-80">
                {host.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
