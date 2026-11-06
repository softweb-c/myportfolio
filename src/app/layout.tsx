import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph O. — Software Developer & Product Builder",
  description: "Portfolio of Joseph O., software developer and product builder. Specializing in custom web applications, fintech platforms, government portals, and mobile apps. Building analytics-powered products that solve real world problems.",
  openGraph: {
    title: "Joseph O. — Software Developer & Product Builder",
    description: "Building useful digital products that solve real world problems with clean code and elegant design.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable} dark`}>
      <body className="font-sans text-soft-white antialiased">
        {children}
      </body>
    </html>
  );
}