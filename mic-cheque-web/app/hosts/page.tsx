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
    role: "Mastermind",
    bio: "Give me some time, I’ll paint a picture of myself!",
    photo: "/hosts/chaxy.jpg",
  },
  {
    number: "02",
    name: "Mariah",
    role: " Media Personality",
    bio: "Black and unstoppable!",
    photo: "/hosts/mariah.jpg",
  },
  {
    number: "03",
    name: "Mwass",
    role: "The Anchor",
    bio: "half human, a third bad at fractions. as seen in the movie about a guy lying about being in a movie. desiderata. Writing..",
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
