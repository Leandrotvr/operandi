import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Operandi · Portafolio",
  description: "Front-end con Next.js/TypeScript/Tailwind. Integración Prisma + Supabase y NextAuth.",
};

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
