"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowLeft } from "lucide-react";
import { navigationData } from "@/data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveFolder(null);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 w-full bg-[#F8F5EF]/95 backdrop-blur-sm z-50 transition-colors border-b border-[#D8D1C6]/50">
      <div className="page-container py-4 md:py-5 flex items-center justify-between">
        {/* Brand / Logo Text Treatment */}
        <Link href="/" className="group flex flex-col transition-opacity hover:opacity-90">
          <span className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-normal tracking-wide text-[#29332F] leading-tight">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="font-body text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.16em] text-[#5F7167] font-medium mt-0.5">
            Licensed Clinical Psychologist • Santa Monica
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navigationData.map((item) => {
            if (item.items) {
              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center text-[0.82rem] tracking-[0.12em] uppercase font-normal text-[#29332F] hover:text-[#5F7167] transition-colors focus:outline-none"
                    aria-expanded={openDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="ml-1 w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-[#5F7167]" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 min-w-[250px] bg-[#F8F5EF] border border-[#D8D1C6] shadow-md py-3 px-1 transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-[0.85rem] text-[#29332F] hover:text-[#5F7167] hover:bg-[#EEEAE2] transition-colors leading-snug font-light normal-case"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="text-[0.82rem] tracking-[0.12em] uppercase font-normal text-[#29332F] hover:text-[#5F7167] transition-colors py-2"
              >
                {item.label}
              </Link>
            );
          })}

          {/* Desktop Consultation Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center font-body text-[0.78rem] uppercase tracking-[0.14em] font-medium px-5 py-2.5 bg-[#5F7167] text-white hover:bg-[#4D5E55] transition-all"
          >
            Schedule a Consultation
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="p-2 text-[#29332F] hover:text-[#5F7167] focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F8F5EF] z-50 flex flex-col lg:hidden animate-in fade-in duration-200">
          {/* Mobile Header Bar */}
          <div className="page-container py-5 flex items-center justify-between border-b border-[#D8D1C6]">
            <Link href="/" onClick={closeMobileMenu} className="flex flex-col">
              <span className="font-heading text-xl font-normal text-[#29332F]">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="font-body text-[0.65rem] uppercase tracking-[0.16em] text-[#5F7167]">
                Licensed Clinical Psychologist
              </span>
            </Link>
            <button
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
              className="p-2 text-[#29332F] hover:text-[#5F7167] focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            {activeFolder === null ? (
              <div className="flex flex-col space-y-4">
                {navigationData.map((item) => {
                  if (item.items) {
                    return (
                      <button
                        key={item.label}
                        onClick={() => setActiveFolder(item.label)}
                        className="flex items-center justify-between text-left text-xl font-heading tracking-wide text-[#29332F] hover:text-[#5F7167] py-2.5 border-b border-[#D8D1C6]/40"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-5 h-5 -rotate-90 text-[#5F7167]" />
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="text-xl font-heading tracking-wide text-[#29332F] hover:text-[#5F7167] py-2.5 border-b border-[#D8D1C6]/40"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => setActiveFolder(null)}
                  className="flex items-center text-xs uppercase tracking-widest text-[#5F7167] hover:text-[#29332F] mb-2 pb-2 border-b border-[#D8D1C6]"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Menu
                </button>
                <h3 className="font-heading text-2xl text-[#29332F] mb-1">{activeFolder}</h3>
                {navigationData
                  .find((item) => item.label === activeFolder)
                  ?.items?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      onClick={closeMobileMenu}
                      className="text-base text-[#29332F] hover:text-[#5F7167] py-2 pl-2 border-b border-[#D8D1C6]/40 font-light"
                    >
                      {subItem.label}
                    </Link>
                  ))}
              </div>
            )}

            {/* Mobile Consultation CTA */}
            <div className="pt-6 mt-6 border-t border-[#D8D1C6]">
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="btn-primary w-full text-center py-3"
              >
                Schedule a Consultation
              </Link>
              <p className="text-center text-xs text-[#626963] mt-3 font-light">
                Santa Monica Office • Secure California Telehealth
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
