"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HeroSection from "./HeroSection";
import KeyBenefitsSection from "./KeyBenefitsSection";
import UpcomingEventsSection from "./UpcomingEventsSection";
import EcommerceSection from "./EcommerceSection";
import TestimonialsSection from "./TestimonialsSection";
import { PhotoCollageSection } from "./PhotoCollageSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";

interface LazyLoadSectionProps {
  children: React.ReactNode;
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}>
      {children}
    </div>
  );
};

export default function LandingPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "#1c1c1c";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <LazyLoadSection>
        <KeyBenefitsSection />
      </LazyLoadSection>
      <LazyLoadSection>
        <UpcomingEventsSection />
      </LazyLoadSection>
      <LazyLoadSection>
        <TestimonialsSection />
      </LazyLoadSection>
      <LazyLoadSection>
        <EcommerceSection />
      </LazyLoadSection>
      <LazyLoadSection>
        <PhotoCollageSection />
      </LazyLoadSection>
      <LazyLoadSection>
        <FAQSection />
      </LazyLoadSection>
      <LazyLoadSection>
        <ContactSection />
      </LazyLoadSection>
    </div>
  );
}
