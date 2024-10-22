import React from "react";
import { Trophy, Target, Users } from "lucide-react";

export default function KeyBenefitsSection() {
  const benefits = [
    {
      icon: Trophy,
      title: "Competitive Tournaments",
      description:
        "Participate in thrilling 3x3 basketball and 5x5 soccer tournaments.",
    },
    {
      icon: Target,
      title: "Skill Development",
      description:
        "Improve your game with our specialized training programs and workshops.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Join a vibrant community of passionate basketball and soccer players from around the world.",
    },
  ];

  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#272727] p-6 rounded-lg shadow-lg animate-fade-in-up transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}>
              <benefit.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
