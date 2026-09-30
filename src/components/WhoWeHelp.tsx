import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function WhoWeHelp() {
  const { heading, items } = siteContent.whoWeHelp;

  return (
    <section className="relative w-full bg-[#F6F5F1] py-16 md:py-24 border-b border-[#E3DDD3]/30">
      <div className="page-container">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="heading-section text-[#2B2B2B] font-normal">
            {heading}
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col">
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-sm mb-6">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl font-normal text-[#2B2B2B] mb-3">
                <Link
                  href={item.href}
                  className="hover:underline underline-offset-4 decoration-[#86B3B3] transition-all"
                >
                  {item.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="font-body font-light text-[0.95rem] text-[#4A4A4A] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
