import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Champions Arena",
  description:
    "Your ultimate destination for sports tournaments and merchandise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#1C1C1C] text-white min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
