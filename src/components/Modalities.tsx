import React from "react";
import { mayaContent } from "@/data/mayaContent";

export default function Modalities() {
  const { supportingCopy, items } = mayaContent.modalities;

  return (
    <section id="modalities" className="relative w-full bg-[#EEEAE2] py-16 md:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-eyebrow mb-3">EVIDENCE-BASED MODALITIES</p>
          <h2 className="heading-section text-[#29332F] font-normal mb-4">
            A therapy approach that considers both{" "}
            <span className="italic text-[#5F7167]">mind and body.</span>
          </h2>
          <p className="font-body font-light text-base md:text-lg text-[#626963] leading-relaxed max-w-2xl mx-auto">
            {supportingCopy}
          </p>
        </div>

        {/* 4 Modalities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((modality, idx) => (
            <div
              key={modality.shortName}
              className="bg-[#F8F5EF] p-7 border border-[#D8D1C6]/60 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs uppercase tracking-[0.16em] text-[#B87560] font-semibold mb-3">
                  0{idx + 1} • {modality.shortName}
                </span>
                <h3 className="font-heading text-2xl font-normal text-[#29332F] mb-3 leading-snug">
                  {modality.name}
                </h3>
                <p className="font-body font-light text-sm text-[#626963] leading-relaxed">
                  {modality.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
