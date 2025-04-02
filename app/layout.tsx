import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HorrorTimer from "./components/HorrorTimer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exodia '25 | IIT Mandi",
  description: "The annual technical, cultural and management fest of IIT Mandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#080808] relative`}
      >
        <div className="fixed inset-0 bg-[#1a0000] -z-10" />
        <Header />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
        <HorrorTimer />
      </body>
    </html>
  );
}
