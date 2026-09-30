import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";

export default function QuoteBanner() {
  const { text } = siteContent.quoteBanner;

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#242927] text-[#FFFFFF]">
      {/* Background Texture Image */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <Image
          src="/images/texture_bg.png"
          alt="Texture background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 page-container text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-heading italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-[#F6F5F1] tracking-wide">
            &ldquo;{text}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
