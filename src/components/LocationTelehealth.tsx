import React from "react";
import { MapPin, Video } from "lucide-react";
import { mayaContent } from "@/data/mayaContent";

export default function LocationTelehealth() {
  const { heading, inPerson, telehealth } = mayaContent.locationTelehealth;

  return (
    <section id="location" className="relative w-full bg-[#EEEAE2] py-16 md:py-24 border-b border-[#D8D1C6]/50">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-3">CONVENIENT CARE</p>
            <h2 className="heading-section text-[#29332F] font-normal">
              {heading}
            </h2>
          </div>

          {/* 2 Service Delivery Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* In-Person */}
            <div className="bg-[#FFFFFF] p-8 border border-[#D8D1C6]/60 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#E7DED0] text-[#5F7167] flex items-center justify-center mb-5">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-2xl font-normal text-[#29332F] mb-3">
                  {inPerson.title}
                </h3>
                <p className="font-body font-light text-base text-[#626963] leading-relaxed mb-6">
                  {inPerson.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D1C6]/50">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#5F7167] mb-1">
                  Santa Monica Office
                </p>
                <p className="font-body text-sm text-[#29332F]">
                  {inPerson.address}
                </p>
              </div>
            </div>

            {/* Telehealth */}
            <div className="bg-[#FFFFFF] p-8 border border-[#D8D1C6]/60 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#E7DED0] text-[#5F7167] flex items-center justify-center mb-5">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-2xl font-normal text-[#29332F] mb-3">
                  {telehealth.title}
                </h3>
                <p className="font-body font-light text-base text-[#626963] leading-relaxed mb-6">
                  {telehealth.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D1C6]/50">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#B87560] mb-1">
                  Statewide Coverage
                </p>
                <p className="font-body text-sm text-[#29332F]">
                  {telehealth.availability}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
