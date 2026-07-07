import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRUTHA — The Creative Cloud Infrastructure",
  description:
    "Purpose-built cloud infrastructure for creative development — AI-powered tools, autonomous agents, and limitless compute.",
  openGraph: {
    title: "BRUTHA — The Creative Cloud Infrastructure",
    description:
      "Purpose-built cloud infrastructure for creative development — AI-powered tools, autonomous agents, and limitless compute.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EFEFE9] text-[#1A1E24] overflow-x-hidden">
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
