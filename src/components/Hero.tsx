import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mayaContent } from "@/data/mayaContent";

export default function Hero() {
  const { eyebrow, supportingCopy, primaryCta, secondaryCta, image } = mayaContent.hero;

  return (
    <section className="relative w-full bg-[#F8F5EF] py-12 md:py-20 lg:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Eyebrow, H1, Supporting Copy, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Eyebrow */}
            <p className="text-eyebrow mb-4">
              {eyebrow}
            </p>

            {/* Exactly One SEO H1 */}
            <h1 className="heading-hero text-[#29332F] mb-6 font-normal tracking-tight">
              Therapy for Anxiety, Trauma &amp; Burnout in{" "}
              <span className="italic text-[#5F7167]">Santa Monica</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-body font-light text-base md:text-lg text-[#626963] leading-relaxed mb-8 max-w-xl">
              {supportingCopy}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.text}
              </Link>
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.text}
              </Link>
            </div>

            {/* Location & Format Badges */}
            <div className="mt-10 pt-6 border-t border-[#D8D1C6]/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#626963] font-light">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5F7167]" />
                In-Person Santa Monica Practice
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B87560]" />
                Secure California Telehealth
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5F7167]" />
                Individual Adult Therapy
              </span>
            </div>
          </div>

          {/* Right Column: Dr. Maya Reynolds Portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] overflow-hidden rounded-none shadow-sm border border-[#D8D1C6]/40 bg-[#E7DED0]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
