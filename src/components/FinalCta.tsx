import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mayaContent } from "@/data/mayaContent";

export default function FinalCta() {
  const { eyebrow, supportingCopy, primaryCta, secondaryCta, image } = mayaContent.finalCta;

  return (
    <section id="contact" className="relative w-full bg-[#F8F5EF] py-16 md:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        <div className="bg-[#FFFFFF] border border-[#D8D1C6]/60 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-eyebrow mb-3">{eyebrow}</p>
              <h2 className="heading-section text-[#29332F] font-normal mb-6">
                You don&apos;t have to have everything figured out before{" "}
                <span className="italic text-[#5F7167]">reaching out.</span>
              </h2>

              <p className="font-body font-light text-base md:text-lg text-[#626963] leading-relaxed mb-8 max-w-xl">
                {supportingCopy}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.text}
                </Link>
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.text}
                </Link>
              </div>

              {/* Practice Location & Availability Info */}
              <div className="pt-6 border-t border-[#D8D1C6]/50 text-xs text-[#626963] font-light space-y-1">
                <p>
                  <strong className="font-medium text-[#29332F]">Office:</strong> 123th Street 45 W, Santa Monica, CA 90401
                </p>
                <p>
                  <strong className="font-medium text-[#29332F]">Care Model:</strong> In-person individual adult therapy &amp; secure California telehealth
                </p>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-sm border border-[#D8D1C6]/40 bg-[#EEEAE2]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
