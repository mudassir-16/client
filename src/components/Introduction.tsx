import React from "react";
import Image from "next/image";
import { mayaContent } from "@/data/mayaContent";

export default function Introduction() {
  const { callout, paragraph1, paragraph2, image } = mayaContent.introduction;

  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-[#D8D1C6]/40">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading and Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="heading-section text-[#29332F] mb-6 font-normal">
              You don&apos;t have to keep carrying everything on your{" "}
              <span className="italic text-[#5F7167]">own.</span>
            </h2>

            <div className="space-y-5 text-[#626963] font-light text-base leading-relaxed">
              <p className="font-normal text-lg text-[#29332F] leading-snug border-l-2 border-[#5F7167] pl-4 italic">
                {callout}
              </p>
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>
          </div>

          {/* Right Column: Editorial Lifestyle Image */}
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
