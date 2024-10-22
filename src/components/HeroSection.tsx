import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/heroimages/pexels-chuck-2474131.jpg"
        alt="Champions Arena Hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] z-20"></div>
      <div className="text-center z-30 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-white">
          Welcome to Champions Arena
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 animate-fade-in-up text-white"
          style={{ animationDelay: "0.2s" }}>
          Experience the thrill of 3x3 Basketball and 5x5 Soccer tournaments
        </p>
        <Button
          className="bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}>
          Get Started
        </Button>
      </div>
    </section>
  );
}
