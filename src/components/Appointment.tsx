import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Appointment() {
  const { eyebrow, description, instruction, ctaText, ctaHref, image, locationNote } =
    siteContent.appointment;

  return (
    <section className="relative w-full bg-[#F6F5F1] py-16 md:py-24 border-b border-[#E3DDD3]/30">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Eyebrow */}
            <p className="text-eyebrow mb-4">{eyebrow}</p>

            {/* Heading */}
            <h2 className="heading-section text-[#2B2B2B] font-normal mb-8 max-w-xl">
              Find a therapist who is the right fit for{" "}
              <span className="text-[#86B3B3] italic">you.</span>
            </h2>

            {/* Description */}
            <p className="font-body font-light text-base text-[#4A4A4A] leading-relaxed mb-6 max-w-xl">
              {description}
            </p>

            {/* Instruction */}
            <p className="font-body font-light text-base text-[#4A4A4A] leading-relaxed mb-8">
              {instruction}
            </p>

            {/* CTA */}
            <div>
              <Link
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative aspect-[16/10] w-full max-w-[520px] overflow-hidden shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Location Note */}
        <div className="mt-14 pt-10 border-t border-[#E3DDD3]/60">
          <p className="font-body font-light text-base text-[#4A4A4A] leading-relaxed max-w-3xl">
            {locationNote}
          </p>
        </div>
      </div>
    </section>
  );
}
