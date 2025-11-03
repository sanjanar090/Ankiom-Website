"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";
import { motion } from "framer-motion";
import NavbarNextjs from "@/app/components/NavbarNextjs";
import HeroSection from "../components/HeroSection";
import ApplicationServices from "../assets/application-services.jpg";
import NextAdoption4 from "@/app/components/NextAdoption4";
import OurServices4 from "@/app/components/OurServices4";
import Industries4 from "@/app/components/Industries4";
import Technologies4 from "@/app/components/Technologies4";
import Benefits4 from "@/app/components/Benefits4";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import {
  FiArrowRightCircle,
  FiGrid,
  FiMessageCircle,
  FiHelpCircle,
} from "react-icons/fi";

export default function NextJsPage() {
  const canonicalUrl = "https://ankiom.com/nextjs";

  const nextjsFeatures = [
    {
      icon: <FiArrowRightCircle />,
      title: "Expert Next.js Developers",
      description:
        "Our team consists of experienced Next.js developers with a proven track record.",
    },
    {
      icon: <FiGrid />,
      title: "Agile Development Process",
      description:
        "We follow an agile methodology to ensure flexibility and adaptability throughout the development process.",
    },
    {
      icon: <FiMessageCircle />,
      title: "Transparent Communication",
      description:
        "We maintain open and transparent communication with our clients throughout the project lifecycle.",
    },
    {
      icon: <FiHelpCircle />,
      title: "Ongoing Support & Maintenance",
      description:
        "We provide ongoing support and maintenance to ensure your application remains up-to-date and performs optimally.",
    },
  ];

  // ✅ Combined Structured Data (for rich results)
  const structuredData = [
    // 1️⃣ Organization
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
        contactType: "Customer Support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },

    // 2️⃣ LocalBusiness
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
        streetAddress: "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560048",
        addressCountry: "IN",
      },
    },

    // 3️⃣ WebSite
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

    // 4️⃣ WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: "Next.js Web Application Development Services in Bangalore | Ankiom",
      description:
        "Ankiom provides professional Next.js web application development services in Bangalore — delivering fast, SEO-friendly, and scalable web apps for startups and enterprises.",
      isPartOf: {
        "@type": "WebSite",
        url: "https://ankiom.com",
        name: "Ankiom Technologies",
      },
      inLanguage: "en-IN",
    },

    // 5️⃣ Service
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Next.js Web Application Development",
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
        "Ankiom provides custom Next.js web app development, offering SEO-optimized, scalable, and high-performing solutions.",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "Custom Quote",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
      },
    },

    // 6️⃣ Product Schema
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Next.js Web Development Services",
      image: "https://ankiom.com/images/application-services.jpg",
      description:
        "Ankiom’s Next.js web development services create lightning-fast, SEO-friendly, and scalable websites tailored to your business.",
      brand: { "@type": "Brand", name: "Ankiom Technologies" },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "Custom Quote",
        url: canonicalUrl,
        availability: "https://schema.org/InStock",
      },
    },

    // 7️⃣ BreadcrumbList
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
          name: "Next.js Development",
          item: canonicalUrl,
        },
      ],
    },

    // 8️⃣ FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What Next.js services does Ankiom offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom offers full-stack Next.js web app development, API integration, performance optimization, and SEO enhancement services.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Ankiom located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ankiom Technologies is headquartered in Bangalore, India, serving clients globally with custom software development solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Why use Next.js for your web app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Next.js provides server-side rendering, faster page load, and better SEO performance — ideal for modern web apps.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <NextSeo
        title="Next.js Web Application Development Services in Bangalore | Ankiom"
        description="Ankiom provides professional Next.js web application development services in Bangalore — delivering fast, SEO-friendly, and scalable web apps for startups and enterprises."
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          url: canonicalUrl,
          title:
            "Next.js Web Application Development Services in Bangalore | Ankiom",
          description:
            "Build modern, SEO-optimized, and high-performing web applications using Next.js with Ankiom — trusted web development experts in Bangalore.",
          images: [
            {
              url: "https://ankiom.com/images/application-services.jpg",
              width: 1200,
              height: 630,
              alt: "Next.js Application Development by Ankiom",
            },
          ],
          siteName: "Ankiom Technologies",
          locale: "en_IN",
        }}
        twitter={{
          handle: "@ankiomsoftindia",
          site: "@ankiomsoftindia",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "robots", content: "index, follow" },
          { name: "author", content: "Ankiom Technologies" },
          { name: "language", content: "English" },
          { name: "geo.region", content: "IN-KA" },
          { name: "geo.placename", content: "Bangalore" },
          { name: "geo.position", content: "12.9716;77.5946" },
          { name: "ICBM", content: "12.9716, 77.5946" },
          {
            name: "keywords",
            content:
              "Next.js development, Next.js company in Bangalore, web application development, Ankiom Technologies, React development, SEO optimized web apps, full-stack development",
          },
        ]}
        additionalLinkTags={[
          { rel: "canonical", href: canonicalUrl },
          { rel: "alternate", hrefLang: "en-IN", href: canonicalUrl },
          { rel: "icon", href: "/favicon.ico" },
          { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        ]}
      />

      <Head>
        <meta name="theme-color" content="#0b1223" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      {/* ✅ Combined JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <NavbarNextjs />

      <main>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSection
            imagelink={ApplicationServices}
            content={{
              title: "Next.js Application Services",
              description:
                "Build high-performance, scalable, and SEO-friendly web applications with our expert Next.js development team.",
            }}
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <NextAdoption4 />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <OurServices4 />
        </motion.section>

        <Industries4 />
        <Technologies4 />
        <Benefits4 />

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <WhyChooseSection
            content={{ title: "Why Choose Ankiom?", features: nextjsFeatures }}
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactSection
            heading="Ready to Transform Your Business with Next.js?"
            className="py-15 px-5 mb-5 relative -translate-y-10"
          />
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
