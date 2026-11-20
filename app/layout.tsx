import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", axes: ["opsz"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${profile.name} | Aspiring Python Developer`,
  description: `${profile.name} is a B.Sc. Computer Science student from ${profile.location}, looking for a first role as a Python developer.`,
  openGraph: { title: `${profile.name} | Portfolio`, description: profile.headline, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
