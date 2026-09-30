import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Specialties() {
  const banner = siteContent.specialtiesBanner;
  const { items } = siteContent.specialties;

  return (
    <>
      {/* Banner Section with Family Beach Image */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={banner.image.src}
            alt={banner.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 page-container text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-snug max-w-4xl mx-auto">
            Honoring where you&apos;ve been &amp; helping shape where you&apos;re{" "}
            <span className="text-[#86B3B3] italic">headed.</span>
          </h2>
        </div>
      </section>

      {/* Specialties Blocks */}
      <section className="relative w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-[#E3DDD3]/40">
        <div className="page-container">
          {/* Section Heading */}
          <div className="mb-12 md:mb-16 text-center">
            <h3 className="font-heading text-3xl md:text-4xl text-[#2B2B2B] font-normal leading-tight">
              Our{" "}
              <span className="text-[#86B3B3] font-bold italic">specialties</span>{" "}
              include…
            </h3>
          </div>

          {/* 4-Column Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col">
                <h4 className="font-heading text-2xl md:text-3xl font-normal text-[#2B2B2B] mb-4">
                  {item.title}
                </h4>
                <p className="font-body font-light text-[0.95rem] text-[#4A4A4A] leading-relaxed mb-5">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="btn-secondary self-start text-sm"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
