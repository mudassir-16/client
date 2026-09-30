import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function HowWeWork() {
  const { eyebrow, heading, image, paragraphs, ctaText, ctaHref } = siteContent.howWeWork;

  return (
    <section className="relative w-full bg-[#F6F5F1] py-16 md:py-24 border-b border-[#E3DDD3]/30">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left / Main Content Column */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Eyebrow */}
            <p className="text-eyebrow mb-4">
              {eyebrow}
            </p>

            {/* Heading */}
            <h2 className="heading-section text-[#2B2B2B] mb-10 max-w-2xl font-normal">
              {heading}
            </h2>

            {/* Paragraphs in 2 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4A4A4A] font-light text-base leading-relaxed mb-10">
              <div className="space-y-4">
                <p>{paragraphs[0]}</p>
                <p>{paragraphs[1]}</p>
              </div>

              <div>
                <p>{paragraphs[2]}</p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className="btn-primary"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Dancing Beach Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end order-first lg:order-last mb-6 lg:mb-0">
            <div className="relative aspect-[3/4] w-full max-w-[380px] overflow-hidden shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
