export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-16 bg-black/50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
        © {new Date().getFullYear()} Operandi. Next.js + Tailwind + Prisma + Supabase.
      </div>
    </footer>
  );
}
