import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

// import "@uploadthing/react/styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HorrorTimer from "./components/HorrorTimer";
import PreLoader from "./components/PreLoader";
import CanonicalTag from "./components/CanonicalTag";

import { ToasterProvider } from "@/lib/providers/toast-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Exodia | IIT Mandi",
  description: "The annual cultural fest of IIT Mandi, where culture meets chaos!",
  keywords: [
    "Exodia",
    "Exodia IIT Mandi",
    "Exodia 2025",
    "iit mandi cult fest",
    "Exodia",
    "iit mandi",
    "techno-cultural fest",
    "IIT Mandi fest",
    "college fest India",
    "cultural fest",
  ],
  metadataBase: new URL("https://exodia-iitmandi.org/"),
  icons: [{ rel: "icon", url: "/exFav.PNG" }],
  openGraph: {
    title: "Exodia | IIT Mandi",
    description: "The annual cultural fest of IIT Mandi, where culture meets chaos!",
    url: "https://exodia-iitmandi.org/",
    siteName: "Exodia",
    images: [
      {
        url: "/exodia-banner.png",
        width: 1200,
        height: 630,
        alt: "Exodia 2025 Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exodia '25 | IIT Mandi",
    description: "The annual cultural fest of IIT Mandi, where culture meets chaos!",
    images: ["/exodia-banner.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <CanonicalTag />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-[#080808] relative`}>
        <div className="fixed inset-0 bg-[#1a0000] -z-10" />
        <PreLoader />
        <Header />
        <main className="flex-grow relative z-10">
          <ToasterProvider />
          {children}
        </main>
        <Footer />
        <HorrorTimer />
      </body>
    </html>
  );
}