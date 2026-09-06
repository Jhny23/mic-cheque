import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Mic Cheque Podcast — All the scoop served silly",
  description:
    "Mic Cheque Podcast with Chaxy, Mariah and Mwass. New episodes every Wednesday and Sunday. #BanterTime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${spaceGrotesk.variable} font-body bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
