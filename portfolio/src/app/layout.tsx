import type { Metadata } from "next";
import {
  Playfair_Display as PlayfairDisplay,
  Source_Sans_3 as SourceSans3,
} from "next/font/google";
import "./globals.css";

const sans = SourceSans3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Morgan Law | Boutique Litigation Counsel",
  description:
    "Alex Morgan Law is a boutique litigation practice offering bespoke legal strategy, impactful advocacy, and trusted counsel for discerning clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
