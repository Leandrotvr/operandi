"use client";
import { useSession, signOut } from "next-auth/react";

export function UserBadge() {
  const { data } = useSession();
  if (!data?.user?.email) return null;
  return (
    <div className="fixed top-3 right-3 flex items-center gap-3">
      <span className="text-sm opacity-80">{data.user.email}</span>
      <button className="border px-3 py-1 rounded" onClick={()=>signOut({ callbackUrl:"/login" })}>
        Salir
      </button>
    </div>
  );
}
