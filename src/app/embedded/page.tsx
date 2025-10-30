"use client";
import { NextSeo } from "next-seo";
import HeroSection from "@/app/components/HeroSection";
import IntroductionSection from "@/app/components/IntroductionSection";
import LandscapeAndAdaption from "@/app/components/LandscapeAndAdaption";
import EmbeddedServiceOffering from "../components/EmbeddedServices";
import EmbeddedIndustries from "../components/EmbeddedIndustries";
import BenefitsPartnering from "../components/BenefitsPartnering";
import WhyChooseEmbedded from "../components/WhyChooseEmbedded";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function EmbeddedPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <HeroSection
        imagelink="/images/embedded-hero.png"
        content={{
          title: "Embedded Systems Development",
          description:
            "Designing and building intelligent, efficient, and reliable embedded solutions for a wide range of industries.",
        }}
        seo={{
          title: "Embedded Systems Development | Ankiom",
          description:
            "Explore Ankiom’s embedded services including firmware design, hardware integration, and real-time systems development.",
          canonical: "https://ankiom.com/embedded",
        }}
      />

      <IntroductionSection />
      <LandscapeAndAdaption />
      <EmbeddedServiceOffering/>
      <EmbeddedIndustries/>
      <BenefitsPartnering/>
      <WhyChooseEmbedded/>

      <ContactSection
        heading="Ready to discuss your project?"
        description="Contact us today to explore how our embedded systems development services can help you achieve your goals."
        buttonText="Discuss Your Project"
      />

      <Footer />
    </main>
  );
}
