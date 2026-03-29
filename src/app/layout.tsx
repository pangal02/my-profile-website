import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Εδώ αλλάζουμε τον τίτλο και την περιγραφή για το SEO
export const metadata: Metadata = {
  title: "PANGAL.DEV | Παναγιώτης Γαλιώτος",
  description: "Προφίλ και έργα του Παναγιώτη Γαλιώτου, Full Stack Developer με εξειδίκευση σε Java Spring Boot, Laravel και Vue3Js, React-Native (Expo) .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el" // Το αλλάξαμε σε "el" για τα Ελληνικά
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}