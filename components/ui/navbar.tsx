"use client";
import Link from "next/link";
export default function Navbar(){
  return (
    <header className="border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight" aria-label="Inicio">Operandi</Link>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <Link className="hover:text-white" href="/about" aria-label="Sobre mí">Sobre mí</Link>
          <Link className="hover:text-white" href="/contacto" aria-label="Contacto">Contacto</Link>
          <Link className="px-3 py-1 rounded-md border border-white/20 hover:bg-white hover:text-black transition" href="/contratar" aria-label="Contrátame">Contrátame</Link>
          <Link className="hover:text-white" href="/login" aria-label="Login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
