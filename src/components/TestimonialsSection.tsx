import React from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "3x3 Basketball Player",
      quote:
        "Champions Arena has taken my basketball career to the next level. The 3x3 tournaments are well-organized and the competition is fierce!",
      image: "/assets/socialPProofImages/pexels-43381756-7408382.jpg",
    },
    {
      name: "Sarah Lee",
      role: "Soccer Team Captain",
      quote:
        "We've been participating in Champions Arena's 5x5 soccer tournaments regularly. The platform is reliable and the matches are always exciting.",
      image:
        "/assets/socialPProofImages/pexels-anton-chubarov-602688651-17903171.jpg",
    },
    {
      name: "Mike Brown",
      role: "Amateur Basketball Enthusiast",
      quote:
        "I never thought I could compete at this level, but Champions Arena gave me the opportunity to showcase my skills in 3x3 basketball. It's been an incredible journey!",
      image: "/assets/socialPProofImages/pexels-cottonbro-10537002.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Youth Soccer Coach",
      quote:
        "Champions Arena provides an excellent platform for young players to develop their skills and gain valuable tournament experience. It's been a game-changer for our youth program.",
      image:
        "/assets/socialPProofImages/pexels-malcolm-garret-3023588-13816092.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
          What Our Players Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#272727] p-6 rounded-lg shadow-lg animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}>
              <p className="text-gray-300 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
