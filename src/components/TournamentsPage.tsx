import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Event {
  name: string;
  date: string;
  prize: string;
  image: string;
}

interface TournamentSectionProps {
  title: string;
  description: string;
  image: string;
  events: Event[];
}

const TournamentSection: React.FC<TournamentSectionProps> = ({
  title,
  description,
  image,
  events,
}) => (
  <section className="py-16 bg-[#1C1C1C]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-white text-lg mb-6">{description}</p>
          <Button className="bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded">
            Register Now
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#272727] rounded-lg overflow-hidden shadow-lg">
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
              <p className="text-orange-500 font-bold mb-4">
                Prize Pool: {event.prize}
              </p>
              <Button className="w-full bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function TournamentsPage() {
  const basketballEvents: Event[] = [
    {
      name: "Summer Slam 3x3",
      date: "August 15-17, 2023",
      prize: "$10,000",
      image: "/assets/upcomingevents/pexels-pixabay-2209.jpg",
    },
    {
      name: "Winter Hoops Challenge",
      date: "December 10-12, 2023",
      prize: "$12,000",
      image: "/assets/upcomingevents/pexels-rdne-7005759.jpg",
    },
  ];

  const soccerEvents: Event[] = [
    {
      name: "Fall Soccer Cup",
      date: "October 1-3, 2023",
      prize: "$15,000",
      image: "/assets/upcomingevents/pexels-olly-3755451.jpg",
    },
    {
      name: "Spring Soccer Tournament",
      date: "April 5-7, 2024",
      prize: "$13,000",
      image: "/assets/upcomingevents/pexels-lucaluperto-14719436.jpg",
    },
  ];

  return (
    <div>
      <TournamentSection
        title="3x3 Basketball Tournaments"
        description="Experience the fast-paced action of 3x3 basketball in our exciting tournaments. Showcase your skills, teamwork, and strategy in this intense format of the game."
        image="/assets/Images/basketball-player-having-team-talks.jpg"
        events={basketballEvents}
      />
      <TournamentSection
        title="5x5 Soccer Events"
        description="Join our 5x5 soccer events and be part of the beautiful game. Whether you're a seasoned player or just starting out, our tournaments offer a great opportunity to compete and have fun."
        image="/assets/Images/football-trainer-teaching-his-pupils.jpg"
        events={soccerEvents}
      />
    </div>
  );
}
