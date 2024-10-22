import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function UpcomingEventsSection() {
  const events = [
    {
      name: "Summer Slam 3x3",
      date: "August 15-17, 2023",
      sport: "Basketball",
      prize: "$10,000",
      image: "/assets/upcomingevents/pexels-olly-3755451.jpg",
    },
    {
      name: "Fall Soccer Cup",
      date: "October 1-3, 2023",
      sport: "Soccer",
      prize: "$15,000",
      image: "/assets/upcomingevents/pexels-lucaluperto-14719436.jpg",
    },
    {
      name: "Winter Hoops Challenge",
      date: "December 10-12, 2023",
      sport: "Basketball",
      prize: "$1000",
      image: "/assets/upcomingevents/pexels-rdne-7005759.jpg",
    },
    {
      name: "Spring Soccer Tournament",
      date: "April 5-7, 2024",
      sport: "Soccer",
      prize: "$13,000",
      image: "/assets/upcomingevents/pexels-pixabay-2209.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#272727] rounded-lg overflow-hidden shadow-lg animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}>
              <Image
                src={event.image}
                alt={event.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-300 mb-2">{event.date}</p>
                <p className="text-gray-300 mb-2">Sport: {event.sport}</p>
                <p className="text-orange-500 font-bold mb-4">
                  Prize Pool: {event.prize}
                </p>
                <Button className="w-full bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
