"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const JoinExodiaForm = () => {
  const pathname = usePathname();
  
  if (pathname === "/join") {
    return null;
  }

  return (
    <Link href="/join">
      <button 
        className="bg-[#BB0000] border border-[#BB0000] text-white hover:bg-transparent hover:text-[#FF0000] transition-all duration-300 font-medium px-6 py-2 shadow-md shadow-[#BB0000]/20"
        data-cursor-hover
      >
        Join Exodia
      </button>
    </Link>
  );
};

export default JoinExodiaForm; 