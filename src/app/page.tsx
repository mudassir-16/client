import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Modalities from "@/components/Modalities";
import Approach from "@/components/Approach";
import TraumaApproach from "@/components/TraumaApproach";
import AboutMaya from "@/components/AboutMaya";
import OurOffice from "@/components/OurOffice";
import LocationTelehealth from "@/components/LocationTelehealth";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 01: Hero - Practice Identity, Core Specialties, Portrait */}
        <Hero />

        {/* 02: Introduction - Client Validation, Slowing Down */}
        <Introduction />

        {/* 03: Primary Services - Exactly 3 Focus Areas */}
        <Services />

        {/* 04: Modalities - Mind & Body Integration */}
        <Modalities />

        {/* 05: Approach - Collaborative, Structured, Depth-Oriented */}
        <Approach />

        {/* 06: Trauma - Safety, Regulation, Pacing */}
        <TraumaApproach />

        {/* 07: About - Dr. Maya Reynolds, PsyD Biography */}
        <AboutMaya />

        {/* 08: NEW SECTION - Our Office in Santa Monica with Supplied Photographs */}
        <OurOffice />

        {/* 09: Location & Telehealth - In-Person & CA Online */}
        <LocationTelehealth />

        {/* 10: FAQs - 7 Profile-Grounded Questions */}
        <FaqSection />

        {/* 11: Final Consultation CTA */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
