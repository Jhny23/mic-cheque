import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HostRow, { Host } from "@/components/HostRow";

export const metadata: Metadata = {
  title: "Hosts — Mic Cheque Podcast",
  description:
    "Meet Chaxy, Mariah and Mwass — the voices behind Mic Cheque Podcast.",
};

// Placeholder bios/roles — swap in real copy once ready.
const hosts: Host[] = [
  {
    number: "01",
    name: "Chaxy",
    role: "The Wildcard",
    bio: "Placeholder bio — drop Chaxy's real one-liner here once it's ready.",
    photo: "/hosts/chaxy.jpg",
  },
  {
    number: "02",
    name: "Mariah",
    role: "The Chaos",
    bio: "Placeholder bio — drop Mariah's real one-liner here once it's ready.",
    photo: "/hosts/mariah.jpg",
  },
  {
    number: "03",
    name: "Mwass",
    role: "The Anchor",
    bio: "Placeholder bio — drop Mwass's real one-liner here once it's ready.",
    photo: "/hosts/mwass.jpg",
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

      <section className="px-6 max-w-5xl mx-auto divide-y-2 divide-ink/10">
        {hosts.map((host, i) => (
          <HostRow
            host={host}
            align={i % 2 === 0 ? "left" : "right"}
            key={host.name}
          />
        ))}
      </section>
    </main>
  );
}
