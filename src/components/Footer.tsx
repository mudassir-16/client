import React from "react";
import Link from "next/link";
import { mayaContent } from "@/data/mayaContent";

export default function Footer() {
  const { name, title, location, telehealthNotice, links, legal, copyright } = mayaContent.footer;

  return (
    <footer className="relative w-full bg-[#EEEAE2] pt-16 pb-12 border-t border-[#D8D1C6]">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Practice Identity Column */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="inline-block mb-3">
              <span className="font-heading text-2xl md:text-3xl text-[#29332F] font-normal tracking-wide">
                {name}
              </span>
            </Link>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-[#5F7167] font-medium mb-4">
              {title}
            </p>
            <p className="font-body font-light text-sm text-[#626963] leading-relaxed mb-2">
              {location}
            </p>
            <p className="font-body font-light text-xs text-[#626963] leading-relaxed max-w-sm">
              {telehealthNotice}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-4">
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#5F7167] mb-4">
              Explore Practice
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body font-light text-sm text-[#626963] hover:text-[#5F7167] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Care Notes */}
          <div className="lg:col-span-3">
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#5F7167] mb-4">
              Practice Information
            </h4>
            <ul className="space-y-2 mb-6">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body font-light text-xs text-[#626963] hover:text-[#5F7167] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-body font-light text-[0.7rem] text-[#626963] leading-relaxed">
              If you are experiencing a mental health emergency, please dial 988 or visit your nearest emergency room.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D8D1C6]/70 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#626963] font-light gap-4">
          <p>{copyright}</p>
          <p className="text-[0.7rem]">
            Private Psychology Practice in Santa Monica, California
          </p>
        </div>
      </div>
    </footer>
  );
}
