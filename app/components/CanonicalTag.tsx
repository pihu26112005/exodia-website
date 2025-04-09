"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

export default function CanonicalTag() {
  const pathname = usePathname();
  const canonicalUrl = `https://exodia-iitmandi.org${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}