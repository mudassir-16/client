import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";

export default function HopeSection() {
  const { heading, callout, paragraph1, image, paragraph2 } = siteContent.hope;

  return (
    <section className="relative w-full bg-[#F6F5F1] py-16 md:py-24 border-b border-[#E3DDD3]/30">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading and narrative text */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Top Heading */}
            <h2 className="heading-section text-[#2B2B2B] font-normal leading-snug mb-10 max-w-2xl">
              {heading}
            </h2>

            {/* Split sub-paragraphs in 2 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4A4A4A] font-light text-base leading-relaxed">
              <div className="space-y-4">
                <p className="font-normal text-[#2B2B2B]">
                  {callout}
                </p>
                <p>
                  {paragraph1}
                </p>
              </div>

              <div>
                <p>
                  {paragraph2}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Beach landscape vertical portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
