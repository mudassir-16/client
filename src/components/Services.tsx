import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mayaContent } from "@/data/mayaContent";

export default function Services() {
  const { heading, subheading, items } = mayaContent.services;

  return (
    <section id="services" className="relative w-full bg-[#F8F5EF] py-16 md:py-24 border-b border-[#D8D1C6]/40">
      <div className="page-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-eyebrow mb-3">AREAS OF FOCUS</p>
          <h2 className="heading-section text-[#29332F] font-normal mb-4">
            {heading}
          </h2>
          <p className="font-body font-light text-base text-[#626963] leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 3 Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {items.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col bg-[#FFFFFF] border border-[#D8D1C6]/60 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#5F7167]/40 group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-[#EEEAE2]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#F8F5EF]/90 backdrop-blur-xs px-2.5 py-1 text-[0.7rem] uppercase tracking-widest text-[#5F7167] font-medium">
                  Service 0{index + 1}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl lg:text-[1.75rem] font-normal text-[#29332F] mb-3 group-hover:text-[#5F7167] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body font-light text-[0.93rem] text-[#626963] leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* CTA Link */}
              <div className="pt-4 border-t border-[#D8D1C6]/40">
                <Link
                  href={service.href}
                  className="inline-flex items-center text-xs uppercase tracking-[0.14em] font-medium text-[#5F7167] hover:text-[#B87560] transition-colors"
                >
                  <span>{service.ctaText}</span>
                  <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
