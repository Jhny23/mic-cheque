"use client";

import { motion } from "framer-motion";
import HostPoster, { Host } from "./HostPoster";

export default function PosterGrid({ hosts }: { hosts: Host[] }) {
  return (
    <motion.div
      className="bg-ink p-3 sm:p-4"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-3 gap-[3px] bg-ink">
        {hosts.map((host) => (
          <HostPoster host={host} key={host.name} />
        ))}
      </div>
    </motion.div>
  );
}
