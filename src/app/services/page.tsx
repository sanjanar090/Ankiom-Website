"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
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

  const webSiteJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ankiom Technologies",
    url: "https://ankiom.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ankiom.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const webPageJSONLD = {
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
  };

  const serviceJSONLD = {
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
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  const organizationJSONLD = {
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
  };

  const localBusinessJSONLD = {
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
  };

  return (
    <>
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
      />

      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            webSiteJSONLD,
            webPageJSONLD,
            serviceJSONLD,
            organizationJSONLD,
            localBusinessJSONLD,
          ]),
        }}
      />

      <Navbar />
      <HeroSection
        imagelink={DigitalChip}
        content={{
          title: "Qt QML Application Services",
          description:
            "Craft high-performance, cross-platform UI experiences with Qt QML.",
        }}
      />
      <QMLSection />
      <QMLServiceOffering />
      <IndustriesWeServe />
      <BenefitsQML />
      <WhyChooseSection
        content={{ title: "Why Choose Ankiom?", features: qmlFeatures }}
      />
      <ContactSection
        heading="Ready to Transform Your Business with Qt / QML?"
        className="py-16 px-5 mb-8"
      />
      <Footer />
    </>
  );
}
