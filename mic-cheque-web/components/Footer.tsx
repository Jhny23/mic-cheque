import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Episodes", href: "/#episodes" },
  { label: "Hosts", href: "/hosts" },
  { label: "Hangouts", href: "/hangouts" },
  { label: "Shop", href: "/#shop" },
];

// TODO: swap these placeholder hrefs once real links are ready.
const LISTEN_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@UpSydDigitalNetworks" },
  { label: "Spotify", href: "#" },
  { label: "Apple Podcasts", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "IG", href: "#" },
  { label: "X", href: "#" },
  { label: "TT", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper px-6 py-14 overflow-hidden">
      {/* merch badge — decorative, tucked in the corner like a real pin */}
      <div
        className="absolute top-3 right-3 sm:top-4 sm:right-6 pointer-events-none z-10"
        style={{ transform: "rotate(8deg)" }}
      >
        <Image
          src="/brand/chequemate-pin.png"
          alt="#ChequeMate pin badge"
          width={110}
          height={110}
          className="w-12 h-12 sm:w-[110px] sm:h-[110px]"
        />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between gap-x-8 gap-y-10">
          {/* identity */}
          <div className="col-span-2 sm:col-auto max-w-xs">
            <span className="font-body font-semibold text-sm tracking-wide">
              MIC CHEQUE PODCAST
            </span>
            <p className="font-body text-sm text-paper opacity-60 mt-3 leading-relaxed">
              All the scoop served silly. New episodes every Wednesday and
              Sunday.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span
                className="inline-block animate-pulse bg-signal"
                style={{ width: 7, height: 7, borderRadius: "9999px" }}
              />
              <span className="font-body font-bold text-xs uppercase tracking-wide opacity-80">
                Wed &amp; Sun
              </span>
            </div>
          </div>

          {/* nav */}
          <div>
            <span className="font-body font-bold text-xs uppercase tracking-wide opacity-50">
              Site
            </span>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* listen */}
          <div>
            <span className="font-body font-bold text-xs uppercase tracking-wide opacity-50">
              Listen
            </span>
            <ul className="mt-3 space-y-2">
              {LISTEN_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div>
            <span className="font-body font-bold text-xs uppercase tracking-wide opacity-50">
              Follow
            </span>
            <div className="flex gap-2 mt-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-bold text-[11px] px-2.5 py-1.5 border-2 border-paper text-paper opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-paper/20 mt-10 pt-6 flex flex-wrap justify-between gap-2">
          <span className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Mic Cheque Podcast. All rights
            reserved.
          </span>
          <span className="font-body text-xs opacity-50">#BanterTime</span>
        </div>
      </div>
    </footer>
  );
}
