"use client";

import { motion } from "framer-motion";
import { SmileIcon, ChartLine, UserRound, Clock, Settings } from "lucide-react";
import { ReactNode } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BenefitsPartnering() {
  const features: Feature[] = [
    {
      icon: <SmileIcon className="w-6 h-6" />,
      title: "Increased User Satisfaction & Conversion",
      description:
        "Intuitive designs lead to happier users and higher conversion rates.",
    },
    {
      icon: <ChartLine className="w-6 h-6" />,
      title: "Reduced Cognitive Load",
      description:
        "Simplified interfaces reduce user effort and improve task completion.",
    },
    {
      icon: <UserRound className="w-6 h-6" />,
      title: "Inclusive and Accessible Experiences",
      description:
        "Designs cater to diverse user needs, ensuring equal access and usability.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Iteration and Time-to-Market",
      description:
        "Rapid prototyping and testing accelerate the design process.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Future-Proof Solutions",
      description:
        "We stay ahead of design trends to create lasting solutions.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Benefits of Partnering - UI/UX Design Services",
    description:
      "Key benefits of partnering with Ankiom Soft India LLP for UI/UX Design Services.",
    itemListElement: features.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.title,
      description: feature.description,
    })),
  };

  const seoHiddenContent = `
    Partnering with Ankiom Soft India LLP for UI/UX Design Services offers multiple advantages —
    including increased user satisfaction, improved conversion rates, reduced cognitive load,
    inclusive design accessibility, faster iteration, and future-proof digital solutions.
  `;

  return (
    <>
      {/* ✅ Main SEO configuration */}
      <NextSeo
        title="Benefits of Partnering | UI/UX Design Services | Ankiom Soft India LLP"
        description="Explore the benefits of partnering with Ankiom Soft India LLP for UI/UX Design Services — from enhanced user satisfaction and accessibility to faster time-to-market."
        canonical="https://ankiomsoft.com/ui-ux-benefits"
        openGraph={{
          title: "Benefits of Partnering | UI/UX Design Services | Ankiom Soft India LLP",
          description:
            "Ankiom Soft India LLP helps businesses gain a competitive edge with superior UI/UX Design — improving satisfaction, conversion, and accessibility.",
          url: "https://ankiomsoft.com/ui-ux-benefits",
          site_name: "Ankiom Soft India LLP",
          images: [
            {
              url: "https://ankiomsoft.com/og-benefits-uiux.png",
              width: 1200,
              height: 630,
              alt: "Benefits of Partnering with Ankiom Soft India LLP",
            },
          ],
        }}
        twitter={{
          handle: "@ankiomsoft",
          site: "@ankiomsoft",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "UI UX Benefits, Partnering Advantages, UI UX Design Services, User Experience, Conversion Optimization, Accessibility Design, Ankiom Soft India LLP",
          },
          { name: "author", content: "Ankiom Soft India LLP" },
          { name: "robots", content: "index, follow" },
          { name: "language", content: "English" },
        ]}
      />

      {/* ✅ JSON-LD structured data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* ✅ Breadcrumb structured data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ankiomsoft.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "UI/UX Design Services",
                  item: "https://ankiomsoft.com/ui-ux-design",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Benefits of Partnering",
                  item: "https://ankiomsoft.com/ui-ux-benefits",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* ✅ Content section */}
      <section className="max-w-[1200px] mx-auto mt-[-40px] mb-10 py-15 px-6 bg-white">
        <motion.h2
          className="text-[22px] font-semibold text-gray-900 mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Benefits of Partnering
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#F7FAFC] border border-[#bdd0ea] rounded-lg p-5 h-[230px] w-[250px] max-w-[230px] flex flex-col justify-start text-left shadow-sm hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gray-900 mb-3">{feature.icon}</div>
              <h3 className="text-[16px] font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-[14.5px] text-[#4D7399] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="sr-only">
          <p>{seoHiddenContent}</p>
        </div>
      </section>
    </>
  );
}
