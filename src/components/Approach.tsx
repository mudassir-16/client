import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mayaContent } from "@/data/mayaContent";

export default function Approach() {
  const { eyebrow, paragraphs, ctaText, ctaHref, image } = mayaContent.approach;

  return (
    <section id="approach" className="relative w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-[#D8D1C6]/40">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Eyebrow, Heading, Paragraphs, CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-eyebrow mb-3">{eyebrow}</p>
            <h2 className="heading-section text-[#29332F] font-normal mb-8 max-w-2xl">
              Practical tools, deeper understanding, and a pace that respects your{" "}
              <span className="italic text-[#5F7167]">story.</span>
            </h2>

            <div className="space-y-4 text-[#626963] font-light text-base leading-relaxed mb-8">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div>
              <Link href={ctaHref} className="btn-secondary">
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Approach Still Life Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[480px] overflow-hidden shadow-sm border border-[#D8D1C6]/40 bg-[#EEEAE2]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
