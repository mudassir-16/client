import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/content";

export default function Contact() {
  const { address, email, phone, serviceAreas, image } = siteContent.contact;

  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-[#E3DDD3]/40">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Contact Info Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Address */}
            <div className="space-y-1">
              <p className="font-body text-base text-[#2B2B2B]">{address.street}</p>
              <p className="font-body text-base text-[#2B2B2B]">{address.suites}</p>
              <p className="font-body text-base text-[#2B2B2B]">{address.cityStateZip}</p>
            </div>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="font-body text-base text-[#2B2B2B] hover:text-[#86B3B3] transition-colors underline underline-offset-4"
            >
              {email}
            </a>

            {/* Phone */}
            <a
              href={`tel:${phone.replace(/\./g, "")}`}
              className="font-body text-base text-[#2B2B2B] hover:text-[#86B3B3] transition-colors underline underline-offset-4"
            >
              {phone}
            </a>

            {/* Service Areas */}
            <p className="font-body font-light text-sm text-[#666] leading-relaxed pt-4">
              {serviceAreas}
            </p>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative aspect-[16/10] w-full overflow-hidden shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                style={{ objectPosition: "63% 53%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
