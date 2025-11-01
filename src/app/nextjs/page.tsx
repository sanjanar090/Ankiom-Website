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
    name: "Next.js Web Application Development Services in Bangalore | Ankiom",
    description:
      "Ankiom provides professional Next.js web application development services in Bangalore — delivering fast, SEO-friendly, and scalable web apps for startups and enterprises.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://ankiom.com",
      name: "Ankiom Technologies",
    },
  };

  const serviceJSONLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Next.js Web Application Development Services",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://ankiom.com",
      logo: "https://ankiom.com/images/logo.png",
    },
    areaServed: { "@type": "Place", name: "Bangalore, India" },
    description:
      "Ankiom provides full-stack Next.js web development services, delivering fast, secure, and SEO-optimized web applications.",
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
      streetAddress: "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322",
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
          siteName: "Ankiom",
          locale: "en_IN",
        }}
        twitter={{
          handle: "@ankiom",
          site: "@ankiom",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
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
                "Develop high-performance, SEO-optimized web applications with Next.js.",
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

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Industries4 />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Technologies4 />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Benefits4 />
        </motion.section>

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
