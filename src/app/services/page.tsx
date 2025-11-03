"use client";

import { motion } from "framer-motion";
import {
  NextSeo,
  WebPageJsonLd,
  LocalBusinessJsonLd,
  ProductJsonLd,
  LogoJsonLd,
} from "next-seo";
import Head from "next/head";
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

export default function QMLPage() {
  const productionCanonical = "https://ankiom.com/services";
  const previewCanonical = "https://ankiom.vercel.app/services";
  const canonicalUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
      ? productionCanonical
      : previewCanonical;

  // ✅ Structured Data JSON-LD Definitions
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ankiom Technologies",
    url: "https://ankiom.com",
    logo: "https://ankiom.com/images/logo.png",
    sameAs: [
      "https://twitter.com/ankiom_official",
      "https://www.linkedin.com/company/ankiom",
      "https://github.com/ankiom",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7090703720",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Qt QML Application Development",
    description:
      "Ankiom delivers Qt QML application development services — building cross-platform, responsive, and high-performance UIs for modern enterprises.",
    provider: {
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://ankiom.com",
      logo: "https://ankiom.com/images/logo.png",
    },
    serviceType: "Qt/QML Development Services",
    areaServed: { "@type": "Place", name: "Bangalore, India" },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: "Contact for Quote",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ankiom.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: canonicalUrl },
      { "@type": "ListItem", position: 3, name: "Qt QML Application Development", item: canonicalUrl },
    ],
  };

  const qmlFeatures = [
    {
      icon: <FiArrowRightCircle />,
      title: "Expert Qt/QML Developers",
      description:
        "Our engineers specialize in Qt/QML development for high-performance cross-platform applications.",
    },
    {
      icon: <FiGrid />,
      title: "Agile Development Process",
      description: "We follow agile practices ensuring rapid and reliable delivery.",
    },
    {
      icon: <FiMessageCircle />,
      title: "Transparent Communication",
      description: "Stay updated with transparent, consistent communication throughout the project.",
    },
    {
      icon: <FiHelpCircle />,
      title: "Continuous Maintenance",
      description: "We offer ongoing updates and performance support post-deployment.",
    },
  ];

  return (
    <>
      <NextSeo
        title="Qt QML Application Development Services in Bangalore | Ankiom"
        description="Ankiom offers Qt QML application development services — building responsive, high-performance, and cross-platform user interfaces for embedded and enterprise software."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Qt QML Application Development Services in Bangalore | Ankiom",
          description:
            "Build next-gen Qt QML applications with Ankiom — scalable, elegant, and performance-driven solutions for enterprises and startups.",
          type: "website",
          locale: "en_IN",
          siteName: "Ankiom Technologies",
          images: [
            {
              url: "https://ankiom.com/images/digital-chip.jpg",
              width: 1200,
              height: 630,
              alt: "Qt QML App Development by Ankiom",
            },
          ],
        }}
        twitter={{
          handle: "@ankiom_official",
          site: "@ankiom_official",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Qt QML development, cross-platform UI, embedded software, QML user interface design, Ankiom Technologies, QML services Bangalore, software development India",
          },
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          { name: "author", content: "Ankiom Technologies" },
          { name: "language", content: "English" },
        ]}
        additionalLinkTags={[
          { rel: "canonical", href: canonicalUrl },
          { rel: "icon", href: "/favicon.ico" },
          { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
          { rel: "manifest", href: "/manifest.json" },
        ]}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              serviceSchema,
              breadcrumbSchema,
            ]),
          }}
        />
      </Head>

      <WebPageJsonLd
        id={canonicalUrl}
        description="Ankiom offers Qt QML app development services — delivering responsive, high-performance, and visually engaging UI experiences for enterprise software."
        lastReviewed="2025-01-20"
        reviewedBy={{ type: "Organization", name: "Ankiom Technologies" }}
      />

      <LogoJsonLd
        logo="https://ankiom.com/images/logo.png"
        url="https://ankiom.com"
      />

      <LocalBusinessJsonLd
        type="LocalBusiness"
        id="https://ankiom.com/#localbusiness"
        name="Ankiom Technologies"
        description="A software development company specializing in Qt/QML, IoT, and cross-platform application solutions in Bangalore, India."
        url="https://ankiom.com"
        telephone="+91-7090703720"
        address={{
          streetAddress: "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560048",
          addressCountry: "IN",
        }}
        geo={{ latitude: 12.9716, longitude: 77.5946 }}
        sameAs={[
          "https://in.linkedin.com/company/ankiom-soft-india",
          "https://twitter.com/ankiom_official",
        ]}
        images={["https://ankiom.com/images/digital-chip.jpg"]}
        priceRange="₹₹₹"
      />

      <ProductJsonLd
        productName="Qt QML Application Development Services"
        description="Professional Qt QML application development services by Ankiom — delivering modern, responsive, and cross-platform UI applications."
        brand="Ankiom Technologies"
        url={canonicalUrl}
        images={["https://ankiom.com/images/digital-chip.jpg"]}
        offers={{
          price: "Custom Quote",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: canonicalUrl,
        }}
        manufacturerName="Ankiom Technologies"
        manufacturerLogo="https://ankiom.com/images/logo.png"
      />

      {/* ✅ Page Layout */}
      <NavbarServices />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          imagelink={DigitalChip}
          content={{
            title: "Qt QML Application Services",
            description:
              "Crafting high-performance, cross-platform user interfaces with Qt QML for a seamless user experience.",
          }}
        />
      </motion.div>

      <QMLSection />
      <QMLServiceOffering />
      <IndustriesWeServe />
      <BenefitsQML />
      <WhyChooseSection content={{ title: "Why Choose Ankiom?", features: qmlFeatures }} />
      <ContactSection heading="Ready to Transform Your Business with Qt / QML?" />
      <Footer />
    </>
  );
}
