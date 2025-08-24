"use client";
import Link from "next/link";
export default function HireMeFloat(){
  return (
    <Link
      href="/contratar"
      className="fixed bottom-5 right-5 z-50 rounded-full border border-white/20 bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
      aria-label="Contrátame"
    >
      Contrátame
    </Link>
  );
}
