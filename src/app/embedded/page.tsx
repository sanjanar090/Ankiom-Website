"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Embedded Systems Development",
    description:
      "Ankiom specializes in embedded systems design, firmware development, and hardware integration for automotive, IoT, and industrial applications.",
    provider: {
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://www.ankiom.com",
      logo: "https://www.ankiom.com/images/logo.png",
      sameAs: [
        "https://twitter.com/ankiom_official",
        "https://www.linkedin.com/company/ankiom",
        "https://github.com/ankiom",
      ],
    },
    areaServed: { "@type": "Place", name: "India" },
    serviceType: "Embedded Systems Design & Development",
    offers: {
      "@type": "Offer",
      url: "https://www.ankiom.com/embedded",
      priceCurrency: "INR",
      price: "Contact for quote",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
  };

  return (
    <main className="bg-white">
      {/* ✅ SEO Optimization */}
      <NextSeo
        title="Embedded Systems Development | Ankiom"
        description="Explore Ankiom’s embedded services including firmware design, hardware integration, and real-time systems development across multiple industries."
        canonical="https://www.ankiom.com/embedded"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Embedded systems development, firmware design, hardware integration, IoT devices, embedded C, real-time systems, Ankiom Technologies",
          },
          { name: "author", content: "Ankiom Technologies" },
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          { name: "language", content: "English" },
          {
            httpEquiv: "Content-Type",
            content: "text/html; charset=utf-8",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=5",
          },
        ]}
        openGraph={{
          url: "https://www.ankiom.com/embedded",
          title: "Embedded Systems Development | Ankiom",
          description:
            "Design and develop advanced embedded systems with Ankiom — firmware, hardware, and real-time solutions for the connected world.",
          type: "website",
          locale: "en_IN",
          siteName: "Ankiom",
          images: [
            {
              url: "https://www.ankiom.com/images/embedded-og.jpg",
              width: 1200,
              height: 630,
              alt: "Embedded Systems Development - Ankiom",
            },
          ],
        }}
        twitter={{
          handle: "@ankiom_official",
          site: "@ankiom_official",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          { rel: "icon", href: "/favicon.ico" },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          { rel: "manifest", href: "/manifest.json" },
          {
            rel: "alternate",
            hrefLang: "en",
            href: "https://www.ankiom.com/embedded",
          },
          {
            rel: "alternate",
            hrefLang: "hi",
            href: "https://www.ankiom.com/hi/embedded",
          },
        ]}
        noindex={false}
        nofollow={false}
      />

      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ✅ Content */}
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection
          imagelink="/images/embedded-hero.png"
          content={{
            title: "Embedded Systems Development",
            description:
              "Designing and building intelligent, efficient, and reliable embedded solutions for a wide range of industries.",
          }}
        />
      </motion.section>

      {/* INTRODUCTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <IntroductionSection />
      </motion.section>

      {/* LANDSCAPE & ADAPTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <LandscapeAndAdaption />
      </motion.section>

      {/* SERVICE OFFERING */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <EmbeddedServiceOffering />
      </motion.section>

      {/* INDUSTRIES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <EmbeddedIndustries />
      </motion.section>

      {/* BENEFITS & WHY CHOOSE */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <BenefitsPartnering />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <WhyChooseEmbedded />
      </motion.section>

      {/* CONTACT */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactSection
          heading="Ready to discuss your project?"
          description="Contact us today to explore how our embedded systems development services can help you achieve your goals."
          buttonText="Discuss Your Project"
        />
      </motion.section>

      <Footer />
    </main>
  );
}
