"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";
import { motion } from "framer-motion";
import NavbarEmbedded from "../components/NavbarEmbedded";
import HeroSection from "@/app/components/HeroSection";
import IntroductionSection from "@/app/components/IntroductionSection";
import LandscapeAndAdaption from "@/app/components/LandscapeAndAdaption";
import EmbeddedServiceOffering from "../components/EmbeddedServices";
import EmbeddedIndustries from "../components/EmbeddedIndustries";
import BenefitsPartnering from "../components/BenefitsPartnering";
import WhyChooseEmbedded from "../components/WhyChooseEmbedded";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function EmbeddedPage() {
  const canonicalUrl = "https://www.ankiom.com/embedded";
  const siteName = "Ankiom Technologies";
  const pageTitle = "Embedded Systems Development | Ankiom";
  const pageDescription =
    "Explore Ankiom’s embedded services including firmware design, hardware integration, and real-time systems development across multiple industries.";
  const imageUrl = "https://www.ankiom.com/images/embedded-og.jpg";
  const twitterHandle = "@ankiom_official";

  /* ✅ STRUCTURED DATA JSON-LD SCHEMAS */

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://www.ankiom.com",
    logo: "https://www.ankiom.com/images/logo.png",
    sameAs: [
      "https://twitter.com/ankiom_official",
      "https://www.linkedin.com/company/ankiom",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7090703720",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: "https://www.ankiom.com/images/logo.png",
      },
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Embedded Systems Development",
    description:
      "Ankiom specializes in embedded systems design, firmware development, and hardware integration for automotive, IoT, and industrial applications.",
    provider: {
      "@type": "Organization",
      name: siteName,
      url: "https://www.ankiom.com",
      logo: "https://www.ankiom.com/images/logo.png",
    },
    areaServed: { "@type": "Place", name: "India" },
    serviceType: "Embedded Systems Design & Development",
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: "Contact for quote",
      availability: "https://schema.org/InStock",
      validFrom: "2024-01-01",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ankiom.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.ankiom.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Embedded Systems Development",
        item: canonicalUrl,
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Embedded Systems Solutions",
    image: imageUrl,
    description:
      "High-performance embedded systems and firmware development solutions by Ankiom Technologies for IoT, automotive, and industrial applications.",
    brand: { "@type": "Brand", name: "Ankiom Technologies" },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: "Contact for quote",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is embedded systems development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Embedded systems development involves designing and programming specialized hardware and software that perform dedicated functions within larger systems, such as IoT devices, vehicles, or industrial machines.",
        },
      },
      {
        "@type": "Question",
        name: "What industries does Ankiom serve for embedded development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ankiom provides embedded system solutions for automotive, IoT, healthcare, manufacturing, and industrial automation sectors.",
        },
      },
      {
        "@type": "Question",
        name: "Does Ankiom offer hardware and firmware integration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Ankiom offers complete hardware and firmware integration services, including real-time systems development, PCB design, and microcontroller programming.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get a quote for embedded development services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can get in touch with Ankiom’s experts through the contact section to discuss your project requirements and receive a tailored quote.",
        },
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* ✅ SEO Config */}
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          locale: "en_IN",
          url: canonicalUrl,
          title: pageTitle,
          description: pageDescription,
          siteName,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: "Embedded Systems Development - Ankiom",
            },
          ],
        }}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "embedded systems, firmware design, hardware integration, IoT, real-time systems, Ankiom Technologies",
          },
          { name: "author", content: "Ankiom Technologies" },
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          { name: "language", content: "English" },
        ]}
      />

      {/* ✅ Structured Data Injection */}
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b1223" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              webPageSchema,
              serviceSchema,
              breadcrumbSchema,
              productSchema,
              faqSchema,
            ]),
          }}
        />
      </Head>

      {/* ✅ Page Layout */}
      <NavbarEmbedded />

      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          imagelink="/images/embedded-hero.png"
          content={{
            title: "Embedded Systems Development",
            description:
              "Empowering innovation with robust and efficient embedded solutions tailored to your specific needs.",
          }}
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <IntroductionSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <LandscapeAndAdaption />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <EmbeddedServiceOffering />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <EmbeddedIndustries />
      </motion.section>

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

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactSection
          heading="Ready to Transform Your Business with Embedded Systems?"
          description="Get in touch with our experts to discuss your specific needs and explore how Ankiom can help you achieve your business goals."
        />
      </motion.section>

      <Footer />
    </main>
  );
}
