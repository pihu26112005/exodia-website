import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HorrorTimer from "./components/HorrorTimer";
import PreLoader from "./components/PreLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Exodia '25 | IIT Mandi",
  description: "The annual cultural fest of IIT Mandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-[#080808] relative`}
      >
        <div className="fixed inset-0 bg-[#1a0000] -z-10" />
        <PreLoader />
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
