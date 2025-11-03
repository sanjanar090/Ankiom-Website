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
  const pageTitle = "UI/UX Design Services | Ankiom Technologies Bangalore";
  const pageDescription =
    "Enhance your digital experience with Ankiom’s professional UI/UX design services. We craft user-centered, conversion-focused, and aesthetically refined digital designs that drive engagement and business growth.";
  const imageUrl = "https://www.ankiom.com/images/uiux-og.jpg";
  const twitterHandle = "@ankiom_official";

  // 🔹 JSON-LD Structured Data
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: "https://www.ankiom.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.ankiom.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
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
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "UI/UX Design Services",
      serviceType: "Digital Product Design & User Experience",
      provider: {
        "@type": "Organization",
        name: siteName,
        url: "https://www.ankiom.com",
        logo: "https://www.ankiom.com/images/logo.png",
      },
      areaServed: { "@type": "Place", name: "India" },
      description:
        "Ankiom offers comprehensive UI/UX design services, including research, wireframing, prototyping, usability testing, and interactive design for mobile and web applications.",
      offers: {
        "@type": "Offer",
        url: canonicalUrl,
        priceCurrency: "INR",
        price: "Custom Quote",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ankiom.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ankiom.com/services" },
        { "@type": "ListItem", position: 3, name: "UI/UX Design Services", item: canonicalUrl },
      ],
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What UI/UX services does Ankiom provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We deliver end-to-end UI/UX services including user research, information architecture, interaction design, usability testing, wireframing, and high-fidelity prototyping.",
          },
        },
        {
          "@type": "Question",
          name: "How does Ankiom ensure a great user experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our process focuses on data-driven design, accessibility, and iterative testing to ensure the final product is both user-friendly and business-effective.",
          },
        },
        {
          "@type": "Question",
          name: "Do you design for mobile and web platforms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our team designs responsive and adaptive interfaces for both web and mobile platforms, ensuring consistency and usability across devices.",
          },
        },
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* ✅ SEO Configuration */}
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
              alt: "UI/UX Design Services by Ankiom Technologies",
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
              "UI design, UX design, user experience, product design, mobile app design, wireframing, prototyping, design systems, usability testing, Ankiom Technologies Bangalore",
          },
          { name: "author", content: siteName },
          { name: "robots", content: "index, follow, max-image-preview:large" },
          { name: "language", content: "English" },
        ]}
      />

      {/* ✅ Extra Meta + Structured Data */}
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="theme-color" content="#0b1223" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716,77.5946" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* ✅ Page Components */}
      <NavbarUIUX />

      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          imagelink="/images/uiux-hero.png"
          content={{
            title: "UI/UX Design Services",
            description:
              "Crafting intuitive and engaging digital experiences that drive business success.",
          }}
        />
        <UIUXText />
        <DesignProcess />
        <UIUXServices />
        <UIUXBenefits />
        <UIUXTechnologies />
        <UIUXWhy />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ContactSection
          heading="Ready to Transform Your Business with UI UX Design?"
          description="Get in touch with our expert UI/UX team to design seamless, engaging, and conversion-driven experiences for your business."
        />
      </motion.section>

      <Footer />
    </main>
  );
}
