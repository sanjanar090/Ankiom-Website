"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";
import { motion } from "framer-motion";
import NavbarUIUX from "../components/NavbarUIUX";
import UIUXText from "../components/UIUXText";
import DesignProcess from "../components/DesignProcess";
import UIUXServices from "../components/UIUXServices";
import UIUXBenefits from "../components/UIUXBenefits";
import UIUXTechnologies from "../components/UIUXTechnologies";
import UIUXWhy from "../components/UIUXWhy";
import ContactSection from "../components/ContactSection";
import HeroSection from "@/app/components/HeroSection";
import Footer from "@/app/components/Footer";

export default function UIUXPage() {
  const canonicalUrl = "https://www.ankiom.com/ui-ux";
  const siteName = "Ankiom Technologies";
  const pageTitle = "UI/UX Design Services | Ankiom Technologies";
  const pageDescription =
    "Enhance your digital experience with Ankiom’s professional UI/UX design services. We create intuitive, engaging, and conversion-driven designs tailored for your business.";
  const imageUrl = "https://www.ankiom.com/images/uiux-og.jpg";
  const twitterHandle = "@ankiom_official";

  // 🔹 Structured Data (JSON-LD)

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: "https://www.ankiom.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ankiom.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://www.ankiom.com",
    logo: "https://www.ankiom.com/images/logo.png",
    sameAs: [
      "https://twitter.com/ankiom_official",
      "https://www.linkedin.com/company/ankiom",
      "https://github.com/ankiom",
      "https://www.youtube.com/@ankiom",
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
    isPartOf: { "@type": "WebSite", url: "https://www.ankiom.com" },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: { "@type": "ImageObject", url: "https://www.ankiom.com/images/logo.png" },
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design Services",
    serviceType: "Digital Design & Experience",
    provider: {
      "@type": "Organization",
      name: siteName,
      url: "https://www.ankiom.com",
      logo: "https://www.ankiom.com/images/logo.png",
    },
    areaServed: { "@type": "Place", name: "India" },
    description:
      "Ankiom’s UI/UX design services help businesses create user-friendly, modern, and visually stunning digital experiences that drive results.",
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: "Custom Quote",
      availability: "https://schema.org/InStock",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ankiom Technologies",
    image: "https://www.ankiom.com/images/logo.png",
    "@id": "https://www.ankiom.com/#localbusiness",
    url: "https://www.ankiom.com",
    telephone: "+91-7090703720",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560048",
      addressCountry: "IN",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ankiom.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ankiom.com/services" },
      { "@type": "ListItem", position: 3, name: "UI/UX Design Services", item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Ankiom’s UI/UX service include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide end-to-end UI/UX services — from user research and wireframing to interactive prototypes, usability testing, and final design delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Why is UI/UX design important for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good UI/UX design improves user satisfaction, boosts engagement, and helps increase conversions and brand loyalty.",
        },
      },
    ],
  };

  return (
    <main className="bg-white">
      {/* ✅ NextSEO Setup */}
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
              alt: "UI/UX Design Services - Ankiom",
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
              "UI design, UX design, product design, web design, user interface, mobile app UX, design systems, Ankiom Technologies, Bangalore UI/UX",
          },
          { name: "author", content: siteName },
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          { name: "language", content: "English" },
        ]}
      />

      {/* ✅ Meta + Structured Data */}
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="theme-color" content="#0b1223" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="author" content={siteName} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              webSiteSchema,
              organizationSchema,
              webPageSchema,
              serviceSchema,
              localBusinessSchema,
              breadcrumbSchema,
              faqSchema,
            ]),
          }}
        />
      </Head>

      {/* ✅ Page Content */}
      <NavbarUIUX />

      <motion.section initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <HeroSection
          imagelink="/images/uiux-hero.png"
          content={{
            title: "UI/UX Design Services",
            description: "Crafting intuitive and engaging digital experiences that drive business success.",
          }}
        />
        <UIUXText />
        <DesignProcess />
        <UIUXServices />
        <UIUXBenefits />
        <UIUXTechnologies />
        <UIUXWhy />
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <ContactSection
          heading="Ready to Transform Your Business with UI/UX Design?"
          description="Get in touch with our experts to discuss how Ankiom can help you build meaningful user experiences that deliver results."
        />
      </motion.section>

      <Footer />
    </main>
  );
}
