"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import NavbarIot from "../components/NavbarIot";
import HeroSection from "@/app/components/HeroSection";
import IotServicesText from "@/app/components/IotServicesText";
import IoTServices from "@/app/components/IoTServices";
import Benefits from "@/app/components/Benefits";
import IndustriesIot from "../components/IndustriesIot";
import WhyChoose from "@/app/components/WhyChoose";
import CloudPartners from "@/app/components/CloudPartners";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function IoTPage() {
  const canonicalUrl = "https://ankiom.com/";

  // ✅ Comprehensive & SEO-optimized JSON-LD Structured Data
  const structuredData = [
    // 1️⃣ Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://ankiom.com",
      logo: "https://ankiom.com/images/logo.png",
      sameAs: [
        "https://in.linkedin.com/company/ankiom-soft-india",
        "https://twitter.com/ankiom_official",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7090703720",
        contactType: "Customer Service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },

    // 2️⃣ LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ankiom Technologies",
      image: "https://ankiom.com/images/iot-opengraph.jpg",
      url: "https://ankiom.com",
      telephone: "+91-7090703720",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560048",
        addressCountry: "IN",
      },
      sameAs: [
        "https://in.linkedin.com/company/ankiom-soft-india",
        "https://twitter.com/ankiom_official",
      ],
    },

    // 3️⃣ WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: "IoT Development Services in Bangalore | Ankiom",
      description:
        "Empower your business with Ankiom’s IoT Development Services in Bangalore — smart automation, connected devices, and scalable cloud integrations for industries.",
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        url: "https://ankiom.com",
        name: "Ankiom Technologies",
      },
    },

    // 4️⃣ Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "IoT Development Services",
      provider: {
        "@type": "Organization",
        name: "Ankiom Technologies",
        url: "https://ankiom.com",
      },
      areaServed: {
        "@type": "Place",
        name: "Bangalore, India",
      },
      description:
        "Ankiom provides IoT development services including connected devices, embedded software, and smart automation solutions for industries.",
      offers: {
        "@type": "Offer",
        price: "Custom Quote",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://ankiom.com/contact",
      },
    },

    // 5️⃣ Product Schema
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "IoT Development Services",
      image: "https://ankiom.com/images/iot-opengraph.jpg",
      description:
        "Custom IoT development solutions by Ankiom Technologies — integrating sensors, cloud, and automation to power modern industries.",
      brand: { "@type": "Brand", name: "Ankiom Technologies" },
      url: canonicalUrl,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "Custom Quote",
        availability: "https://schema.org/InStock",
        url: "https://ankiom.com/contact",
      },
    },

    // 6️⃣ Breadcrumb Schema
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

    // 7️⃣ FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What IoT services does Ankiom offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom offers IoT product development, device connectivity, embedded systems, and smart automation solutions for businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Ankiom located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom Technologies is headquartered in Bangalore, India, offering IoT and cloud-integrated solutions worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "Does Ankiom build custom IoT systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Ankiom provides fully customized IoT system design, development, and integration based on unique business needs.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ✅ SEO + Open Graph + Twitter Metadata */}
      <NextSeo
        title="IoT Development Services in Bangalore | Ankiom"
        description="Empower your business with Ankiom’s IoT Development Services in Bangalore — smart automation, connected devices, and scalable cloud integrations for industries."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "IoT Development Services in Bangalore | Ankiom",
          description:
            "Empower your business with smart automation, connected devices, and cloud-integrated IoT solutions from Ankiom Technologies.",
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
          handle: "@ankiom_official",
          site: "@ankiom_official",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          { name: "author", content: "Ankiom Technologies" },
          { name: "language", content: "English" },
          { name: "geo.region", content: "IN-KA" },
          { name: "geo.placename", content: "Bangalore" },
          { name: "geo.position", content: "12.9716;77.5946" },
          {
            name: "keywords",
            content:
              "IoT development, IoT company in Bangalore, IoT automation, connected devices, Ankiom Technologies, embedded systems, cloud IoT solutions",
          },
        ]}
        additionalLinkTags={[
          { rel: "canonical", href: canonicalUrl },
          { rel: "alternate", hrefLang: "en-IN", href: canonicalUrl },
          { rel: "icon", href: "/favicon.ico" },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
        ]}
      />

      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* ✅ Page Sections */}
      <NavbarIot />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection
          imagelink="/images/hero.jpg"
          content={{
            title: "IoT Development Services",
            description:
              "Empowering businesses with cutting-edge IoT solutions for enhanced efficiency and growth.",
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

      <IoTServices />
      <Benefits />
      <IndustriesIot/>
      <WhyChoose />
      <CloudPartners />
      <ContactSection heading="Ready to Transform Your Business with IoT?" />
      <Footer />
    </>
  );
}
