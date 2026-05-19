import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathan's Sphere | Fashion House",
  description: "A curated universe of fashion and lifestyle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body>{children}</body>
    </html>
  );
}