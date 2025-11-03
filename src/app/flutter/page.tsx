"use client";

import { motion } from "framer-motion";
import {
  NextSeo,
  WebPageJsonLd,
  LocalBusinessJsonLd,
  ProductJsonLd,
  LogoJsonLd,
} from "next-seo";
import NavbarFlutter from "@/app/components/NavbarFlutter";
import HeroSection from "@/app/components/HeroSection";
import FlutterSection from "@/app/components/FlutterSection";
import FlutterServiceOffering from "@/app/components/FlutterServiceOffering";
import IndustriesWeServe3 from "@/app/components/IndustriesWeServe3";
import Technologies3 from "@/app/components/Technologies3";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import ContactSection from "../components/ContactSection";
import Footer from "@/app/components/Footer";
import Head from "next/head";

export default function FlutterPage() {
  // ✅ Canonical setup for both environments
  const productionCanonical = "https://ankiom.com/flutter";
  const previewCanonical = "https://ankiom.vercel.app/flutter";
  const canonicalUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
      ? productionCanonical
      : previewCanonical;

  // ✅ Structured Data Schemas
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flutter App Development Services",
    description:
      "Ankiom provides expert Flutter app development for Android, iOS, and Web — delivering scalable and high-performance mobile solutions.",
    provider: {
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://ankiom.com",
      logo: "https://ankiom.com/images/logo.png",
    },
    serviceType: "Cross-Platform Mobile App Development",
    areaServed: { "@type": "Place", name: "India" },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: "Custom Quote",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
    },
    hasPart: [
      {
        "@type": "Service",
        name: "Flutter Android App Development",
        description:
          "Build smooth, native-quality Android apps using Flutter's robust framework.",
      },
      {
        "@type": "Service",
        name: "Flutter iOS App Development",
        description:
          "Develop high-performing iOS applications with a single Flutter codebase.",
      },
      {
        "@type": "Service",
        name: "Flutter Web App Development",
        description:
          "Extend your Flutter apps to the web seamlessly for broader reach.",
      },
    ],
  };

  const breadcrumbSchema = {
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
        item: "https://ankiom.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Flutter App Development",
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why choose Flutter for app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flutter enables building high-performance, cross-platform apps for Android, iOS, and Web with a single codebase, reducing time and cost.",
        },
      },
      {
        "@type": "Question",
        name: "What industries does Ankiom serve with Flutter development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ankiom provides Flutter app solutions across industries like healthcare, fintech, logistics, e-commerce, and education.",
        },
      },
      {
        "@type": "Question",
        name: "Does Ankiom provide maintenance for Flutter apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer continuous maintenance, updates, and performance optimization for all Flutter-based projects.",
        },
      },
    ],
  };

  return (
    <>
      {/* ✅ Meta and OpenGraph SEO */}
      <NextSeo
        title="Flutter App Development Services in Bangalore | Ankiom Technologies"
        description="Ankiom builds fast, scalable, and visually stunning Flutter apps for Android, iOS, and Web. Delivering cross-platform excellence with Flutter."
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: "Flutter App Development Services | Ankiom",
          description:
            "Expert Flutter development company in Bangalore delivering high-quality cross-platform mobile apps for startups and enterprises.",
          type: "website",
          locale: "en_IN",
          siteName: "Ankiom Technologies",
          images: [
            {
              url: "https://ankiom.com/images/application-interface.jpg",
              width: 1200,
              height: 630,
              alt: "Flutter App Development Solutions by Ankiom",
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
              "Flutter development company, Flutter app developers Bangalore, cross-platform apps, mobile app development, Flutter for iOS Android, Ankiom Technologies",
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
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          { rel: "manifest", href: "/manifest.json" },
        ]}
      />

      {/* ✅ Structured Data: Rendered in HTML Source for SEO Tools */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              serviceSchema,
              breadcrumbSchema,
              faqSchema,
            ]),
          }}
        />
      </Head>

      {/* ✅ next-seo Built-in Structured Data Components */}
      <WebPageJsonLd
        id={canonicalUrl}
        description="Ankiom provides expert Flutter app development services for Android, iOS, and Web — empowering businesses with cross-platform performance."
        lastReviewed="2025-01-15"
        reviewedBy={{
          type: "Organization",
          name: "Ankiom Technologies",
        }}
      />

      <LogoJsonLd
        logo="https://ankiom.com/images/logo.png"
        url="https://ankiom.com"
      />

      <LocalBusinessJsonLd
        type="LocalBusiness"
        id="https://ankiom.com/#localbusiness"
        name="Ankiom Technologies"
        description="A software development company specializing in Flutter app development, IoT, and web solutions in Bangalore, India."
        url="https://ankiom.com"
        telephone="+91-7090703720"
        address={{
          streetAddress:
            "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560048",
          addressCountry: "IN",
        }}
        geo={{
          latitude: 12.9716,
          longitude: 77.5946,
        }}
        sameAs={[
          "https://in.linkedin.com/company/ankiom-soft-india",
          "https://twitter.com/ankiom_official",
        ]}
        images={["https://ankiom.com/images/application-interface.jpg"]}
        priceRange="₹₹₹"
      />

      <ProductJsonLd
        productName="Flutter App Development Services"
        description="Professional Flutter app development services for Android, iOS, and Web — offered by Ankiom Technologies, Bangalore."
        brand="Ankiom Technologies"
        url={canonicalUrl}
        images={["https://ankiom.com/images/application-interface.jpg"]}
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
      <NavbarFlutter />

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
              "Build beautiful, high-performance apps for any platform with a single codebase.",
          }}
        />
      </motion.div>

      <FlutterSection />
      <FlutterServiceOffering />
      <IndustriesWeServe3 />
      <Technologies3 />
      <WhyChooseSection />
      <ContactSection heading="Ready to Transform Your Business with Mobile App?" />
      <Footer />
    </>
  );
}
