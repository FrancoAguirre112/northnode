import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import localFont from "next/font/local";

const neueMachina = localFont({
  src: [
    {
      path: "./fonts/neue-machina/NeueMachina-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/neue-machina/NeueMachina-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-machina/NeueMachina-Ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NORTHNODE",
  description: "Astrology meets finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueMachina.variable} antialiased w-screen overflow-x-hidden h-screen bg-[#0d1018]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
