"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";
import { motion } from "framer-motion";
import NavbarServices from "@/app/components/NavbarServices";
import HeroSection from "../components/HeroSection";
import DigitalChip from "../assets/digital-chip.jpg";
import QMLSection from "@/app/components/QMLSection";
import QMLServiceOffering from "@/app/components/QMLServiceOffering";
import IndustriesWeServe from "@/app/components/IndustriesWeServe";
import BenefitsQML from "@/app/components/BenefitsQML";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import {
  FiArrowRightCircle,
  FiGrid,
  FiMessageCircle,
  FiHelpCircle,
} from "react-icons/fi";

export default function Services() {
  const canonicalUrl = "https://ankiom.com/services";

  const qmlFeatures = [
    {
      icon: <FiArrowRightCircle />,
      title: "Expert Qt/QML Developers",
      description:
        "Our engineers specialize in Qt/QML development for rich, cross-platform applications.",
    },
    {
      icon: <FiGrid />,
      title: "Agile Development Process",
      description: "We ensure efficient project delivery through agile workflows.",
    },
    {
      icon: <FiMessageCircle />,
      title: "Transparent Communication",
      description:
        "Clients stay informed with transparent communication at every stage.",
    },
    {
      icon: <FiHelpCircle />,
      title: "Long-term Maintenance",
      description:
        "We provide continuous updates and maintenance for your Qt/QML apps.",
    },
  ];

  // ✅ Structured Data Schemas
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ankiom Technologies",
      url: "https://ankiom.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ankiom.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: "Qt QML Application Development Services | Ankiom Bangalore",
      description:
        "Ankiom delivers Qt QML application development — creating cross-platform, responsive, and performance-driven user interfaces for enterprises.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://ankiom.com",
        name: "Ankiom Technologies",
      },
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
          name: "Services",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Qt QML Application Development Services",
      serviceType: "Software Development",
      provider: {
        "@type": "Organization",
        name: "Ankiom Technologies",
        url: "https://ankiom.com",
        logo: "https://ankiom.com/images/logo.png",
      },
      areaServed: { "@type": "Place", name: "Bangalore, India" },
      description:
        "Ankiom provides Qt QML application development services to help enterprises build high-performance, responsive, and cross-platform UI experiences.",
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Qt/QML development services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Qt/QML development services involve creating responsive, high-performance, cross-platform user interfaces for embedded and desktop applications.",
          },
        },
        {
          "@type": "Question",
          name: "Does Ankiom provide enterprise-level QML solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Ankiom Technologies builds scalable, enterprise-grade QML applications optimized for UI performance and seamless integration.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Ankiom located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom Technologies is located in Bangalore, India, and serves clients globally with end-to-end software development services.",
          },
        },
      ],
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7090703720",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Ankiom Technologies",
      image: "https://ankiom.com/images/logo.png",
      "@id": "https://ankiom.com/#localbusiness",
      url: "https://ankiom.com",
      telephone: "+91-7090703720",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru",
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

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* ✅ SEO Meta Configuration */}
      <NextSeo
        title="Qt QML Application Development Services | Ankiom Bangalore"
        description="Ankiom delivers Qt QML application development — creating cross-platform, responsive, and performance-driven user interfaces for enterprises."
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          url: canonicalUrl,
          title: "Qt QML Application Development Services | Ankiom Bangalore",
          description:
            "Build high-performance and responsive UI applications using Qt QML with Ankiom’s expert team.",
          images: [
            {
              url: "https://ankiom.com/images/digital-chip.jpg",
              width: 1200,
              height: 630,
              alt: "Qt QML Application Development by Ankiom",
            },
          ],
          siteName: "Ankiom",
          locale: "en_IN",
        }}
        twitter={{
          handle: "@AnkiomOfficial",
          site: "@AnkiomOfficial",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow, max-image-preview:large" },
          { name: "author", content: "Ankiom Technologies" },
          {
            name: "keywords",
            content:
              "Qt QML development, QML UI design, Qt software development, cross-platform applications, Ankiom Technologies, embedded UI, Bangalore software company",
          },
        ]}
        additionalLinkTags={[
          { rel: "canonical", href: canonicalUrl },
          { rel: "alternate", hrefLang: "en-IN", href: canonicalUrl },
          { rel: "alternate", hrefLang: "x-default", href: canonicalUrl },
          { rel: "icon", href: "/favicon.ico" },
        ]}
      />

      {/* ✅ Extra Meta Tags for Crawlers */}
      <Head>
        <meta
          name="google-site-verification"
          content="your-google-site-verification-code"
        />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716,77.5946" />
      </Head>

      {/* ✅ Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <NavbarServices />

      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <HeroSection
          imagelink={DigitalChip}
          content={{
            title: "Qt QML Application Services",
            description:
              "Crafting high-performance, cross-platform user interfaces with Qt QML for a seamless user experience.",
          }}
        />
      </motion.div>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <QMLSection />
      </motion.section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <QMLServiceOffering />
      </motion.section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <IndustriesWeServe />
      </motion.section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <BenefitsQML />
      </motion.section>

      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <WhyChooseSection
          content={{ title: "Why Choose Ankiom?", features: qmlFeatures }}
        />
      </motion.section>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ContactSection
          heading="Ready to Transform Your Business with Qt / QML?"
          className="py-16 px-5 mb-8"
        />
      </motion.div>

      <Footer />
    </>
  );
}
