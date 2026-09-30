"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";

export default function FaqSection() {
  const { heading, subheading, items } = mayaContent.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-3">COMMON QUESTIONS</p>
            <h2 className="heading-section text-[#29332F] font-normal mb-4">
              {heading}
            </h2>
            <p className="font-body font-light text-base text-[#626963] leading-relaxed">
              {subheading}
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="border border-[#D8D1C6]/60 bg-[#F8F5EF] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-xl md:text-[1.35rem] font-normal text-[#29332F] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5F7167] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#626963] font-light text-base leading-relaxed border-t border-[#D8D1C6]/30 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
