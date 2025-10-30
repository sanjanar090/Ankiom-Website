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

  const structuredData = {
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
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content={siteName} />
        <meta name="theme-color" content="#0b1223" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([structuredData, webPageSchema]),
          }}
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
