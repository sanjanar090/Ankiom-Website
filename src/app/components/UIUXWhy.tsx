"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Head from "next/head";
import { User, ChartLineIcon, PuzzleIcon, Handshake } from "lucide-react";

export default function UIUXWhy() {
  const reasons = [
    { name: "User-Centered Design Expertise", icon: <User className="w-6 h-6" /> },
    { name: "Data-Driven Decision Making & Usability Testing", icon: <ChartLineIcon className="w-6 h-6" /> },
    { name: "End-to-End Design Process", icon: <PuzzleIcon className="w-6 h-6" /> },
    { name: "Commitment to Accessibility & Ethical Design", icon: <Handshake className="w-6 h-6" /> },
  ];

  return (
    <>
      <NextSeo
        title="Why Choose Ankiom | UI/UX Design Services | Ankiom Soft India LLP"
        description="Discover why businesses choose Ankiom Soft India LLP for UI/UX Design Services — combining user-centered strategy, data-driven insights, and accessibility-first design for exceptional digital experiences."
        canonical="https://www.ankiom.com/ui-ux-design"
        openGraph={{
          type: "website",
          url: "https://www.ankiom.com/ui-ux-design",
          title: "Why Choose Ankiom | UI/UX Design Services | Ankiom Soft India LLP",
          description:
            "Ankiom stands out in UI/UX design with human-centered approaches, usability testing, accessibility compliance, and data-driven creativity that enhances brand impact.",
          images: [
            {
              url: "https://www.ankiom.com/images/ui-ux-why-choose-ankiom.jpg",
              width: 1200,
              height: 630,
              alt: "Why Choose Ankiom for UI/UX Design",
            },
          ],
          site_name: "Ankiom Soft India LLP",
        }}
        twitter={{
          handle: "@ankiomofficial",
          site: "@ankiomofficial",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Why Choose Ankiom, UI UX Design Services, UX Strategy, User Research, Usability Testing, Accessibility Design, Interaction Design, Visual Design, Ankiom Soft India LLP, UI UX Company India, Design Thinking Agency",
          },
          { name: "author", content: "Ankiom Soft India LLP" },
          { name: "robots", content: "index, follow" },
          { name: "language", content: "en" },
          { name: "revisit-after", content: "7 days" },
        ]}
      />

      <Head>
        {/* ✅ Combined Structured Data (Organization + WebPage + Service) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Ankiom Soft India LLP",
                  url: "https://www.ankiom.com",
                  logo: "https://www.ankiom.com/images/logo.png",
                  sameAs: [
                    "https://www.linkedin.com/company/ankiomsoft",
                    "https://twitter.com/ankiomofficial",
                  ],
                  description:
                    "Ankiom Soft India LLP specializes in UI/UX Design Services, offering user research, interaction design, prototyping, usability testing, and accessibility-focused solutions.",
                },
                {
                  "@type": "WebPage",
                  name: "Why Choose Ankiom | UI/UX Design Services",
                  url: "https://www.ankiom.com/ui-ux-design",
                  description:
                    "Learn why businesses choose Ankiom Soft India LLP for UI/UX Design Services — combining creativity, research, and accessibility to deliver exceptional user experiences.",
                  inLanguage: "en",
                  isPartOf: {
                    "@type": "WebSite",
                    name: "Ankiom Soft India LLP",
                    url: "https://www.ankiom.com",
                  },
                },
                {
                  "@type": "Service",
                  name: "UI/UX Design Services",
                  provider: {
                    "@type": "Organization",
                    name: "Ankiom Soft India LLP",
                    url: "https://www.ankiom.com",
                  },
                  areaServed: "Worldwide",
                  serviceType: "UI/UX Design",
                  description:
                    "We provide user-centered UI/UX design solutions, including usability testing, accessibility design, and data-driven design strategies to enhance digital experiences.",
                  offers: {
                    "@type": "Offer",
                    url: "https://www.ankiom.com/ui-ux-design",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    eligibleRegion: "https://schema.org/World",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* ✅ Page Section */}
      <motion.section
        className="py-9 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[22px] font-bold mb-10">Why Choose Ankiom?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-3 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.name}
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg cursor-pointer text-gray-800 justify-center shadow-sm"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            >
              <div className="text-black text-xl">{r.icon}</div>
              <span className="font-semibold">{r.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
