import type { Metadata } from "next";
import { Fugaz_One, Open_Sans } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const fugazOne = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fugaz",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.fullName} | ${profile.role}`,
  description: profile.metaDescription,
  openGraph: {
    title: `${profile.fullName} | ${profile.role} Portfolio`,
    description: profile.metaDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fugazOne.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
