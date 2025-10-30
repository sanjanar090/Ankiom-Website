"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import NavbarIot from "../components/NavbarIot";
import HeroSection from "@/app/components/HeroSection";
import IotServicesText from "@/app/components/IotServicesText";
import Industries from "@/app/components/Industries";
import Services from "@/app/components/Services";
import Benefits from "@/app/components/Benefits";
import WhyChoose from "@/app/components/WhyChoose";
import CloudPartners from "@/app/components/CloudPartners";
import ContactSection from "@/app/components/ContactSection";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  const canonicalUrl = "https://ankiom.com/";

  // 🧠 Structured data (Organization + WebPage + Breadcrumb + FAQ)
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://ankiom.com",
      logo: "https://ankiom.com/images/logo.png",
      sameAs: [
        "https://in.linkedin.com/company/ankiom-soft-india",
        "https://twitter.com/ankiomsoftindia",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: "IoT Development Services in Bangalore | Ankiom",
      description:
        "Empower your business with Ankiom’s IoT Development Services in Bangalore — smart automation, connected devices, and scalable cloud integrations for industries.",
      isPartOf: { "@type": "WebSite", url: "https://ankiom.com", name: "Ankiom Technologies" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ankiom.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "IoT Development Services",
          item: "https://ankiom.com/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What IoT services does Ankiom offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom offers IoT product development, device connectivity, embedded systems, cloud integration, and data-driven automation services.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Ankiom located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom Technologies is located in Bangalore, India, providing IoT and embedded software development services globally.",
          },
        },
        {
          "@type": "Question",
          name: "Does Ankiom provide custom IoT solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Ankiom designs and builds custom IoT solutions tailored to each client’s business goals and technology stack.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="IoT Development Services in Bangalore | Ankiom"
        description="Empower your business with Ankiom’s IoT Development Services in Bangalore — smart automation, connected devices, and scalable cloud integrations for industries."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "IoT Development Services in Bangalore | Ankiom",
          description:
            "Empower your business with smart automation, connected devices, and scalable cloud-integrated IoT solutions with Ankiom Technologies.",
          type: "website",
          siteName: "Ankiom Technologies",
          locale: "en_IN",
          images: [
            {
              url: "https://ankiom.com/images/iot-opengraph.jpg",
              width: 1200,
              height: 630,
              alt: "IoT Development Services - Ankiom Technologies",
            },
          ],
        }}
        twitter={{
          handle: "@ankiom",
          site: "@ankiom",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
          { name: "googlebot", content: "index, follow" },
          { name: "bingbot", content: "index, follow" },
          { property: "og:region", content: "IN" },
          { property: "og:locality", content: "Bangalore" },
          { name: "geo.region", content: "IN-KA" },
          { name: "geo.placename", content: "Bangalore" },
          { name: "geo.position", content: "12.9716;77.5946" },
          { name: "ICBM", content: "12.9716, 77.5946" },
          {
            name: "keywords",
            content:
              "IoT development, IoT company in Bangalore, IoT automation, connected devices, Ankiom Technologies, cloud IoT, embedded systems",
          },
        ]}
        additionalLinkTags={[
          { rel: "canonical", href: canonicalUrl },
          { rel: "alternate", hrefLang: "en-IN", href: canonicalUrl },
          { rel: "alternate", hrefLang: "x-default", href: canonicalUrl },
          { rel: "preload", href: "/images/hero.jpg", as: "image" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <NavbarIot />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection
          imagelink="/images/hero.jpg"
          content={{
            title: "IoT Services",
            description:
              "Empowering industries through connected devices, automation, and smart data-driven solutions.",
          }}
        />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <IotServicesText />
      </motion.section>

      <Industries />
      <Services />
      <Benefits />
      <WhyChoose />
      <CloudPartners />
      <ContactSection heading="Ready to Transform Your Business with IoT?" />
      <Footer />
    </>
  );
}
