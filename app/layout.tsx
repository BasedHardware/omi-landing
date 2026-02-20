import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omi - Your Persistent AI Productivity Partner",
  description: "Proactive AI assistant that helps you stay focused, avoid mistakes, and achieve your goals.",
  icons: {
    icon: 'images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
