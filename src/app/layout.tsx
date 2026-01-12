import type { Metadata } from "next";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "White RAB Cybersecurity Agency",
  description:
    "White RAB is a full-spectrum cybersecurity agency providing Red Teaming, Blue Teaming, and Purple Teaming services.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-foreground">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}

