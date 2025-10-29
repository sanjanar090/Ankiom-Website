"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import FlutterSection from "@/app/components/FlutterSection";
import FlutterServiceOffering from "@/app/components/FlutterServiceOffering";
import IndustriesWeServe3 from "@/app/components/IndustriesWeServe3";
import Technologies3 from "@/app/components/Technologies3";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import Footer from "@/app/components/Footer";

export default function FlutterPage() {
  const productionCanonical = "https://ankiom.com/flutter";
  const previewCanonical = "https://ankiom.vercel.app/flutter";

  const canonicalUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
      ? productionCanonical
      : previewCanonical;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: "Flutter App Development Services in Bangalore | Ankiom",
      description:
        "Ankiom offers cross-platform Flutter app development services for startups and enterprises, ensuring high performance and smooth user experiences across Android and iOS.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://ankiom.com",
        name: "Ankiom Technologies",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Flutter App Development Services",
      alternateName: "Cross-platform Mobile App Development",
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
      serviceType: "Flutter App Development",
      description:
        "Ankiom provides Flutter app development services to build high-performance mobile apps for Android, iOS, and web platforms.",
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
      url: "https://ankiom.com",
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
      url: "https://ankiom.com",
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
        title="Flutter App Development Services in Bangalore | Ankiom"
        description="Build cross-platform apps with Flutter — Ankiom provides seamless, high-performance mobile app development services for Android, iOS, and web."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Flutter App Development Services in Bangalore | Ankiom",
          description:
            "Ankiom builds cross-platform Flutter apps for startups and enterprises, delivering high-quality mobile solutions.",
          images: [
            {
              url: "https://ankiom.com/images/application-interface.jpg",
              width: 1200,
              height: 630,
              alt: "Flutter App Development Solutions by Ankiom",
            },
          ],
          siteName: "Ankiom",
          locale: "en_IN",
          type: "website",
        }}
        twitter={{
          handle: "@ankiom",
          site: "@ankiom",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
        ]}
        additionalLinkTags={[{ rel: "canonical", href: canonicalUrl }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection
          imagelink="/images/application-interface.jpg"
          content={{
            title: "Flutter App Development",
            description:
              "Create stunning cross-platform mobile apps with Flutter. Fast, scalable, and efficient solutions for modern businesses.",
          }}
        />
      </motion.div>

      <FlutterSection />
      <FlutterServiceOffering />
      <IndustriesWeServe3 />
      <Technologies3 />
      <WhyChooseSection />
      <Footer />
    </>
  );
}
