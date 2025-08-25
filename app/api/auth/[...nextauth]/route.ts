import NextAuth, { type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: { strategy: "jwt" },
  debug: process.env.NODE_ENV === "development",
  providers: [
    Credentials({
      name: "Demo",
      credentials: { email: { label: "Email", type: "text" } },
      async authorize(creds) {
        try {
          const email = (creds?.email || "").toString().toLowerCase().trim();
          if (!email.includes("@")) return null;

          const user = await prisma.user.upsert({
            where: { email },
            create: { email, name: email.split("@")[0] },
            update: {}
          });

          return { id: user.id, name: user.name ?? "", email: user.email };
        } catch (e:any) {
          console.error("[NEXTAUTH AUTHORIZE ERROR]", e);
          throw new Error("AUTH_UPSERT_FAILED: " + (e?.message || String(e)));
        }
      },
    }),
  ],
  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
