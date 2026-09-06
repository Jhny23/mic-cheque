"use client";

import { motion } from "framer-motion";
import HostPoster, { HostBase, BlockColor } from "./HostPoster";

const COLOR_CYCLE: BlockColor[] = ["red", "blue", "cream"];

// reproduces the reference's exact checkerboard: each column shifts the
// color sequence by one step, so column colors are RED/CREAM/BLUE/RED,
// BLUE/RED/CREAM/BLUE, CREAM/BLUE/RED/CREAM down the 4 rows.
function colorFor(row: number, col: number): BlockColor {
  const idx = (((col - row) % 3) + 3) % 3;
  return COLOR_CYCLE[idx];
}

export default function PosterGrid({ hosts }: { hosts: HostBase[] }) {
  const rows = 4;
  const cols = hosts.length;

  const cells: { key: string; host: HostBase; block: BlockColor }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({
        key: `${r}-${c}`,
        host: hosts[c],
        block: colorFor(r, c),
      });
    }
  }

  return (
    <motion.div
      className="bg-ink p-2 sm:p-3"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {cells.map(({ key, host, block }) => (
          <HostPoster host={host} block={block} key={key} />
        ))}
      </div>
    </motion.div>
  );
}
