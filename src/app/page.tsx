"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import IotServicesText from "./components/IotServicesText";
import Industries from "./components/Industries";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import WhyChoose from "./components/WhyChoose";
import CloudPartners from "./components/CloudPartners";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  const canonicalUrl = "https://ankiom.com/";

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: "IoT Development Services in Bangalore | Ankiom",
      description:
        "Empower your business with Ankiom’s IoT Development Services in Bangalore — smart automation, connected devices, and scalable cloud integrations for industries.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://ankiom.com",
        name: "Ankiom Technologies",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "IoT Development Services",
      alternateName: "Internet of Things Solutions",
      provider: {
        "@type": "Organization",
        name: "Ankiom Technologies",
        url: "https://ankiom.com",
        logo: "https://ankiom.com/images/logo.png",
        sameAs: [
          "https://in.linkedin.com/company/ankiom-soft-india",
          "https://twitter.com/ankiomsoftindia",
        ],
      },
      serviceType: "IoT Development and Integration",
      description:
        "Ankiom provides end-to-end IoT product development, embedded systems, and cloud-integrated automation solutions for smart and connected industries.",
      areaServed: { "@type": "Place", name: "Bangalore, India" },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "Custom Quote",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    },
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
      "@type": "WebSite",
      name: "Ankiom Technologies",
      url: "https://ankiom.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ankiom.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ankiom Technologies",
      image: "https://ankiom.com/images/logo.png",
      "@id": "https://ankiom.com/#localbusiness",
      url: "https://ankiom.com/",
      telephone: "+91-70907 03720",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560048",
        addressCountry: "IN",
      },
      sameAs: [
        "https://in.linkedin.com/company/ankiom-soft-india",
        "https://twitter.com/ankiomsoftindia",
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
            "Empower your business with Ankiom’s IoT Development Services in Bangalore — smart automation, connected devices, and scalable cloud integrations for industries.",
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
            {
              url: "https://ankiom.com/images/hero.jpg",
              width: 1200,
              height: 630,
              alt: "IoT Automation Solutions - Ankiom Technologies",
            },
          ],
        }}
        twitter={{
          handle: "@ankiom",
          site: "@ankiom",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          { name: "googlebot", content: "index, follow" },
          { name: "bingbot", content: "index, follow" },
          { property: "og:region", content: "IN" },
          { property: "og:locality", content: "Bangalore" },
          { name: "keywords", content: "IoT development, IoT company in Bangalore, IoT automation, connected devices, Ankiom Technologies" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

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
      <ContactSection heading="Get in Touch with Our IoT Experts" />
      <Footer />
    </>
  );
}
