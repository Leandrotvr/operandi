"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Login (demo)</h1>
      <input value={email} onChange={e=>setEmail(e.target.value)}
             placeholder="tu@email.com"
             className="border px-3 py-2 rounded w-64" />
      <button onClick={()=>signIn("credentials", { email, callbackUrl:"/" })}
              className="border px-3 py-2 rounded">Entrar</button>
    </main>
  );
}
