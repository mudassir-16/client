import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";

export default function OurOffice() {
  const { eyebrow, heading, tagline, narrative, address, images } = mayaContent.ourOffice;

  return (
    <section id="our-office" className="relative w-full bg-[#F8F5EF] py-16 md:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        {/* Section Heading & Narrative */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-eyebrow mb-3">{eyebrow}</p>
          <h2 className="heading-section text-[#29332F] font-normal mb-4">
            {heading}
          </h2>
          <p className="font-heading text-xl md:text-2xl text-[#5F7167] font-normal italic mb-6">
            {tagline}
          </p>
          <div className="space-y-4 text-[#626963] font-light text-base leading-relaxed">
            {narrative.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Physical Address Callout */}
          <div className="mt-8 pt-6 border-t border-[#D8D1C6]/60 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#B87560] shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#5F7167] mb-1">
                {address.label}
              </p>
              <p className="font-body text-base text-[#29332F] font-normal">
                {address.street}, {address.cityStateZip}
              </p>
              <p className="font-body text-xs text-[#626963] font-light mt-1">
                {address.note}
              </p>
            </div>
          </div>
        </div>

        {/* Dual Supplied Office Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Office Image 1 */}
          <div className="flex flex-col bg-[#FFFFFF] border border-[#D8D1C6]/60 p-4 sm:p-5 shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 bg-[#EEEAE2]">
              <Image
                src={images.image1.src}
                alt={images.image1.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="font-body font-light text-xs text-[#626963] italic">
              {images.image1.caption}
            </p>
          </div>

          {/* Office Image 2 */}
          <div className="flex flex-col bg-[#FFFFFF] border border-[#D8D1C6]/60 p-4 sm:p-5 shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 bg-[#EEEAE2]">
              <Image
                src={images.image2.src}
                alt={images.image2.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="font-body font-light text-xs text-[#626963] italic">
              {images.image2.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
