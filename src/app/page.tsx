"use client";

import { NextSeo } from "next-seo";
import Navbar from "@/app/components/Navbar";
import Hero5 from "@/app/components/Hero5";
import Services5 from "@/app/components/Services5";
import AboutSection5 from "@/app/components/AboutSection5";
import Testimonials5 from "@/app/components/Testimonials5";
import Contacts5 from "@/app/components/Contacts5";
import Footer5 from "@/app/components/Footer5";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ankiom Technologies",
    url: "https://www.ankiom.com",
    logo: "https://www.ankiom.com/images/logo.png",
    sameAs: [
      "https://twitter.com/ankiomsoftindia",
      "https://in.linkedin.com/company/ankiom-soft-india"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-70907 03720",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <>
      <NextSeo
        title="Ankiom | Innovative IoT & Web Solutions"
        description="Ankiom delivers IoT, Next.js, and Flutter-based software solutions designed for scalability and performance across industries."
        canonical="https://www.ankiom.com/"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Ankiom, IoT development, Next.js, Flutter apps, web development, digital transformation, software company, Ankiom Technologies",
          },
          {
            name: "author",
            content: "Ankiom Technologies",
          },
          {
            name: "robots",
            content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          {
            name: "language",
            content: "English",
          },
          {
            httpEquiv: "Content-Type",
            content: "text/html; charset=utf-8",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=5",
          },
        ]}
        openGraph={{
          url: "https://www.ankiom.com/",
          title: "Ankiom | Innovative IoT & Web Solutions",
          description:
            "Modern IoT and Next.js web development services for startups and enterprises — designed by Ankiom for scale, security, and speed.",
          type: "website",
          locale: "en_IN",
          siteName: "Ankiom",
          images: [
            {
              url: "https://www.ankiom.com/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Ankiom Website Preview",
            },
          ],
        }}
        twitter={{
          handle: "@ankiom_official",
          site: "@ankiom_official",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            rel: "alternate",
            hrefLang: "en",
            href: "https://www.ankiom.com/",
          },
          {
            rel: "alternate",
            hrefLang: "hi",
            href: "https://www.ankiom.com/hi",
          },
        ]}
        noindex={false}
        nofollow={false}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
