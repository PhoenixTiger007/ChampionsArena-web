import React from "react";
import { Trophy, Users, Star } from "lucide-react";

export default function SocialProofSection() {
  const stats = [
    { icon: Trophy, value: "200+", label: "Tournaments Hosted" },
    { icon: Users, value: "50,000+", label: "Active Players" },
    { icon: Star, value: "4.8", label: "Average Event Rating" },
  ];

  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}>
              <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-xl text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
