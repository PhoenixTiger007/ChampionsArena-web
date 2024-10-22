import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
          Contact Us
        </h2>
        <div
          className="max-w-lg mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}>
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button className="w-full bg-gradient-to-r from-[#fe8c00] to-[#f83600] hover:from-[#f83600] hover:to-[#fe8c00] text-white font-bold py-2 px-4 rounded">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
