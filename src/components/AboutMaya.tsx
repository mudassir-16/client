import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mayaContent } from "@/data/mayaContent";

export default function AboutMaya() {
  const { eyebrow, heading, subtitle, image, bioParagraphs, credentials } = mayaContent.about;

  return (
    <section id="about" className="relative w-full bg-[#EEEAE2] py-16 md:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Dr. Maya Reynolds Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden shadow-sm border border-[#D8D1C6]/50 bg-[#F8F5EF]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-eyebrow mb-2">{eyebrow}</p>
            <h2 className="heading-section text-[#29332F] font-normal mb-1">
              {heading}
            </h2>
            <p className="font-body text-sm font-medium tracking-[0.14em] uppercase text-[#B87560] mb-6">
              {subtitle}
            </p>

            <div className="space-y-4 text-[#626963] font-light text-base leading-relaxed mb-8">
              {bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Practice Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-y border-[#D8D1C6]/60 mb-8">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5F7167] shrink-0" />
                  <span className="font-body text-xs text-[#29332F] font-normal">
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <Link href="#contact" className="btn-primary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
