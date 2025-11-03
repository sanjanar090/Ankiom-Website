"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Technologies3() {
  return (
    <>
      <NextSeo
        title="Technologies We Use | UI/UX Design Services | Ankiom Soft India LLP"
        description="Discover the cutting-edge UI/UX design technologies used by Ankiom Soft India LLP — Figma, Sketch, Adobe XD, Miro, Prototyping Tools, Accessibility Solutions & User Research Platforms."
        canonical="https://www.ankiom.com/ui-ux-design-services"
        openGraph={{
          type: "website",
          url: "https://www.ankiom.com/ui-ux-design-services",
          title: "Technologies We Use | UI/UX Design Services | Ankiom Soft India LLP",
          description:
            "Explore the advanced design tools and workflows we use for UI/UX Design — Wireframing, Prototyping, Accessibility, Interaction Design & Visual Design Systems.",
          images: [
            {
              url: "https://www.ankiom.com/images/ui-ux-design-preview.jpg",
              width: 1200,
              height: 630,
              alt: "UI/UX Design Services at Ankiom",
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
              "UI/UX Design, Figma, Adobe XD, Sketch, Miro, Prototyping, Wireframing, Interaction Design, Accessibility Design, User Experience Research, Visual Design, Design Systems, Ankiom UI UX Services",
          },
          { name: "author", content: "Ankiom Soft India LLP" },
          { name: "robots", content: "index, follow" },
          { name: "language", content: "en" },
          { name: "revisit-after", content: "7 days" },
        ]}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "UI/UX Design Services | Ankiom Soft India LLP",
              description:
                "Ankiom provides innovative and user-centered UI/UX design solutions leveraging world-class tools like Figma, Adobe XD & Sketch for web and mobile platforms.",
              url: "https://www.ankiom.com/ui-ux-design-services",
              serviceType: "UI/UX Design",
              areaServed: "Worldwide",
              brand: "Ankiom",
              logo: {
                "@type": "ImageObject",
                url: "https://www.ankiom.com/images/logo.png",
              },
              publisher: {
                "@type": "Organization",
                name: "Ankiom Soft India LLP",
              },
            }),
          }}
        />
      </Head>

      {/* ✅ Page Content */}
      <section className="mx-auto my-9 px-4 text-center justify-center">
        <motion.h1
          className="text-[22px] font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technologies We Use
        </motion.h1>

        <motion.p
          className="text-[15px] text-[#1F2937] font-medium leading-relaxed tracking-tight text-center max-w-[780px] mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We leverage industry-leading design tools and technologies to deliver exceptional UI/UX solutions, including Figma, Sketch, Adobe XD, Axure, InVision, Miro, user research platforms, and accessibility audit tools.
        </motion.p>
      </section>
    </>
  );
}
