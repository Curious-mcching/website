import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michelle Ching — Growth, brand & a challenger mindset",
  description:
    "Marketing and growth leadership grounded in customer insight, courageous creativity, and commercial discipline. Explore Michelle Ching's experience, ways to collaborate, and Challenger Mindset perspectives.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
