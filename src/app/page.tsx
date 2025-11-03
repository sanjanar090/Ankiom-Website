"use client";

import { useEffect } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Hero5 from "@/app/components/Hero5";
import Services5 from "@/app/components/Services5";
import AboutSection5 from "@/app/components/AboutSection5";
import Testimonials5 from "@/app/components/Testimonials5";
import Contacts5 from "@/app/components/Contacts5";
import Footer5 from "@/app/components/Footer5";

export default function Home() {
  const canonicalUrl = "https://www.ankiom.com/";
  const siteName = "Ankiom Technologies";
  const title = "Ankiom | Innovative IoT & Web Solutions";
  const description =
    "Ankiom delivers IoT, Next.js, and Flutter-based software solutions designed for scalability and performance across industries.";
  const imageUrl = `${canonicalUrl}images/og-image.jpg`;
  const twitterHandle = "@ankiomsoftindia";

  // ✅ All Schemas (same as your current ones)
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      legalName: "Ankiom Technologies Pvt Ltd",
      url: canonicalUrl,
      logo: `${canonicalUrl}images/logo.png`,
      foundingDate: "2021",
      founder: { "@type": "Person", name: "Ankiom Team" },
      sameAs: [
        "https://twitter.com/ankiomsoftindia",
        "https://in.linkedin.com/company/ankiom-soft-india",
        "https://www.youtube.com/@ankiom",
        "https://github.com/ankiom",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7090703720",
          contactType: "Customer Support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: canonicalUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${canonicalUrl}search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: canonicalUrl,
      description,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: siteName, url: canonicalUrl },
      about: {
        "@type": "Thing",
        name: "IoT, Next.js, and Flutter Software Development",
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: { "@type": "ImageObject", url: `${canonicalUrl}images/logo.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteName,
      image: `${canonicalUrl}images/logo.png`,
      url: canonicalUrl,
      telephone: "+91-7090703720",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru, Karnataka",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560048",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "12.9716",
        longitude: "77.5946",
      },
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-18:00",
      sameAs: [
        "https://in.linkedin.com/company/ankiom-soft-india",
        "https://twitter.com/ankiomsoftindia",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "IoT, Next.js, and Flutter Development",
      provider: { "@type": "Organization", name: siteName, url: canonicalUrl },
      description:
        "We offer IoT, Next.js, and Flutter-based web and mobile app development solutions for startups and enterprises.",
      areaServed: { "@type": "Country", name: "India" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ankiom Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IoT Solutions",
              description:
                "Comprehensive IoT solutions including hardware, cloud, and data analytics.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Next.js Web Development",
              description:
                "High-performance, SEO-optimized web applications using Next.js and Tailwind CSS.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flutter App Development",
              description:
                "Cross-platform mobile applications built with Flutter for Android and iOS.",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteName,
      image: `${canonicalUrl}images/logo.png`,
      url: canonicalUrl,
      description:
        "Ankiom provides professional IoT, web, and mobile development services with Next.js, Flutter, and modern cloud tools.",
      areaServed: { "@type": "Country", name: "India" },
      serviceType: [
        "IoT Development",
        "Next.js Development",
        "Flutter App Development",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Ankiom Software Solutions",
      operatingSystem: "Web, Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "Contact for Quote",
        priceCurrency: "INR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "45",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "IoT and Web Solutions by Ankiom",
      image: `${canonicalUrl}images/og-image.jpg`,
      description:
        "End-to-end IoT, Next.js, and Flutter development services tailored for your business.",
      brand: { "@type": "Organization", name: siteName },
      offers: {
        "@type": "Offer",
        url: canonicalUrl,
        priceCurrency: "INR",
        price: "Contact for Quote",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "45",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${canonicalUrl}#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: `${canonicalUrl}#about`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: `${canonicalUrl}#contact`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Ankiom offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom provides IoT development, Next.js web development, and Flutter app development services.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Ankiom located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom Technologies is located in Bengaluru, Karnataka, India.",
          },
        },
        {
          "@type": "Question",
          name: "Does Ankiom build custom IoT solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Ankiom designs and implements full-scale custom IoT systems for businesses.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: { "@type": "Organization", name: siteName },
      author: { "@type": "Person", name: "Verified Client" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Ankiom provided exceptional IoT and web solutions with great communication and delivery.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: canonicalUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${canonicalUrl}search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  // ✅ Inject structured data manually into <head> for Ahrefs visibility
  useEffect(() => {
    const existing = document.getElementById("structured-data");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          locale: "en_IN",
          url: canonicalUrl,
          title,
          description,
          siteName,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: "Ankiom Website Preview",
            },
          ],
        }}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="language" content="English" />
        <meta name="author" content={siteName} />
        <meta name="theme-color" content="#0b1223" />
        <meta
          name="keywords"
          content="Ankiom, IoT Solutions, Next.js Web Development, Flutter App Development, Software Company India, Web Development Bengaluru, Ankiom Technologies"
        />
      </Head>

      <Navbar />
      <section id="home" className="pt-24">
        <Hero5 />
      </section>
      <section id="services">
        <Services5 />
      </section>
      <section id="about">
        <AboutSection5 />
      </section>
      <section id="testimonials">
        <Testimonials5 />
      </section>
      <section id="contact">
        <Contacts5 />
      </section>
      <Footer5 />
    </>
  );
}
