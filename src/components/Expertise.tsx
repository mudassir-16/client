import React from "react";
import Link from "next/link";

interface ExpertiseItem {
  label: string;
  href?: string;
}

const column1: ExpertiseItem[] = [
  { label: "Dissociation", href: "/dissociative-identity-disorder-therapist-newbury-park" },
  { label: "Trauma", href: "/trauma-counseling-newbury-park" },
  { label: "Family conflict" },
  { label: "Special needs parenting", href: "/counseling-special-needs-parents-newbury-park" },
  { label: "Depression", href: "/anxiety-depression" },
  { label: "marriage", href: "/couples-therapy" },
];

const column2: ExpertiseItem[] = [
  { label: "anxiety", href: "/anxiety-depression" },
  { label: "relationships" },
  { label: "children", href: "/children-and-teens" },
  { label: "teens", href: "/children-and-teens" },
  { label: "intimacy & connection", href: "/couples-therapy" },
  { label: "…and more." },
];

export default function Expertise() {
  const renderItem = (item: ExpertiseItem) => (
    <div key={item.label} className="border-b border-[#DDD7CD] py-4">
      {item.href ? (
        <Link
          href={item.href}
          className="font-heading italic font-bold text-xl md:text-2xl text-[#2B2B2B] hover:text-[#86B3B3] transition-colors inline-block"
        >
          {item.label}
        </Link>
      ) : (
        <span className="font-heading italic font-bold text-xl md:text-2xl text-[#2B2B2B] inline-block">
          {item.label}
        </span>
      )}
    </div>
  );

  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-[#E3DDD3]/40">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h3 className="font-heading text-3xl md:text-4xl text-[#2B2B2B] font-normal leading-tight">
              Our areas of{" "}
              <span className="text-[#86B3B3] font-bold italic">expertise</span>
            </h3>
          </div>

          {/* Right Columns: Typographic List in 2 columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            <div>
              {column1.map(renderItem)}
            </div>
            <div>
              {column2.map(renderItem)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
