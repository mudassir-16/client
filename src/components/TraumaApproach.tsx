import React from "react";
import { mayaContent } from "@/data/mayaContent";

export default function TraumaApproach() {
  const { eyebrow, lead, points } = mayaContent.traumaApproach;

  return (
    <section id="trauma-approach" className="relative w-full bg-[#F8F5EF] py-16 md:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow and Heading */}
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-3">{eyebrow}</p>
            <h2 className="heading-section text-[#29332F] font-normal mb-6">
              Trauma work begins with{" "}
              <span className="italic text-[#5F7167]">safety.</span>
            </h2>
            <p className="font-body font-light text-base md:text-lg text-[#626963] leading-relaxed max-w-2xl mx-auto">
              {lead}
            </p>
          </div>

          {/* 3 Foundation Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {points.map((pt, idx) => (
              <div
                key={pt.title}
                className="bg-[#FFFFFF] p-7 border border-[#D8D1C6]/60 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#E7DED0] text-[#5F7167] flex items-center justify-center font-heading text-lg mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-heading text-xl font-normal text-[#29332F] mb-3">
                    {pt.title}
                  </h3>
                  <p className="font-body font-light text-sm text-[#626963] leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
