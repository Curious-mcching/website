import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./editorial.css";

const rubik = localFont({
  src: [
    { path: "./fonts/Rubik-Variable.ttf", weight: "300 900", style: "normal" },
    { path: "./fonts/Rubik-Italic-Variable.ttf", weight: "300 900", style: "italic" },
  ],
  variable: "--font-rubik",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Michelle Ching — Growth, brand & a challenger mindset",
  description:
    "Marketing and growth leadership grounded in customer insight, courageous creativity, and commercial discipline. Explore Michelle Ching's experience, ways to collaborate, and Challenger Mindset perspectives.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${rubik.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
