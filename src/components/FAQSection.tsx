import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I join a tournament?",
      answer:
        "To join a tournament, log in to your account, navigate to the 'Tournaments' section, and click on the 'Register' button for the tournament you're interested in. Make sure you meet all the requirements before signing up.",
    },
    {
      question: "What types of tournaments do you host?",
      answer:
        "We host 3x3 basketball tournaments and 5x5 soccer tournaments for various skill levels, from amateur to professional.",
    },
    {
      question: "How do payouts work for tournament winners?",
      answer:
        "Payouts for tournament winners are processed within 7 business days after the tournament ends. The prize money is transferred to the payment method you have set up in your account settings.",
    },
    {
      question: "Are there age restrictions for participating?",
      answer:
        "Age restrictions may vary depending on the specific tournament. Generally, we have categories for youth, adult, and senior players. Check the tournament details for specific age requirements.",
    },
    {
      question: "Can I form a team with players from different cities?",
      answer:
        "Yes, you can form a team with players from different cities. However, all team members must be registered on Champions Arena and meet the tournament requirements.",
    },
  ];

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const isOpen = (index: number) =>
    hoveredIndex === index || clickedIndex === index;

  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#272727] rounded-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}>
              <div className="px-4 py-3 cursor-pointer text-white hover:text-orange-500 flex justify-between items-center">
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen(index) ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                <p className="text-gray-300 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
