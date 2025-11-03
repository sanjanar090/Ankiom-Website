"use client";

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

  // ✅ Structured Data Objects
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: canonicalUrl,
    logo: `${canonicalUrl}images/logo.png`,
    sameAs: [
      "https://twitter.com/ankiomsoftindia",
      "https://in.linkedin.com/company/ankiom-soft-india",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7090703720",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: canonicalUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${canonicalUrl}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonicalUrl,
    description,
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${canonicalUrl}images/logo.png`,
      },
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    image: `${canonicalUrl}images/logo.png`,
    url: canonicalUrl,
    telephone: "+91-70907 03720",
    address: {
      "@type": "PostalAddress",
      streetAddress: " 3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru, Karnataka ",
      addressLocality: "Bangolore",
      addressRegion: "Karnataka",
      postalCode: "560048",
      addressCountry: "IN",
    },
    priceRange: "$$",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl,
      },
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
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IoT, Next.js, and Flutter Development",
    provider: {
      "@type": "Organization",
      name: siteName,
      url: canonicalUrl,
    },
    description:
      "We offer IoT, Next.js, and Flutter-based solutions for startups and enterprises, focusing on scalable web and mobile development.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
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
              "End-to-end Internet of Things development services including hardware integration and data analytics.",
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
              "Cross-platform mobile apps built with Flutter for seamless performance on Android and iOS.",
          },
        },
      ],
    },
  };

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
              alt: "Ankiom Technologies Website Preview",
            },
          ],
        }}
        twitter={{
          handle: twitterHandle,
          site: twitterHandle,
          cardType: "summary_large_image",
        }}
        noindex={false}
        nofollow={false}
      />

      <Head>
        {/* Standard Meta */}
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content={siteName} />
        <meta name="theme-color" content="#0b1223" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Open Graph & Twitter Meta */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:alt" content="Ankiom Website Preview" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Ankiom Website Preview" />

        {/* ✅ Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              webSiteSchema,
              webPageSchema,
              localBusinessSchema,
              breadcrumbSchema,
              serviceSchema,
            ]),
          }}
        />
      </Head>

      {/* Page Content */}
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
