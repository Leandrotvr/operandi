import "./globals.css";
import Provider from "@/components/session-provider";
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operandi",
  description: "SaaS multipropósito (MVP)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </Provider></body>
    </html>
  );
}

