"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Head from "next/head";

import research from "../assets/users.jpg";
import strategy from "../assets/strategy.jpg";
import information from "../assets/information.jpg";
import wireframing from "../assets/wireframing.jpg";
import visual from "../assets/visual.jpg";
import usability from "../assets/usability.jpg";

export default function UIUXServices() {
  const services = [
    {
      img: research,
      title: "User & Market Research",
      desc: "We conduct deep research to understand your users’ needs, motivations, and pain points, forming the foundation for informed design decisions.",
    },
    {
      img: strategy,
      title: "UX Strategy & Persona Development",
      desc: "We define your brand’s UX vision and create detailed personas that represent real users, ensuring meaningful and goal-driven experiences.",
    },
    {
      img: information,
      title: "Information Architecture & Interaction Design",
      desc: "We organize content logically and design intuitive interactions, making navigation effortless and engaging for users.",
    },
    {
      img: wireframing,
      title: "Wireframing & Prototyping",
      desc: "From low-fidelity sketches to high-fidelity clickable prototypes, we visualize your product flow before full-scale development.",
    },
    {
      img: visual,
      title: "Visual/UI Design",
      desc: "We craft elegant, modern, and brand-consistent visuals that enhance usability and aesthetic appeal across web and mobile devices.",
    },
    {
      img: usability,
      title: "Usability Testing & Accessibility Compliance",
      desc: "We test real user behavior and ensure compliance with accessibility standards to make your product inclusive and easy to use for everyone.",
    },
  ];

  return (
    <>
      {/* ✅ SEO Metadata */}
      <NextSeo
        title="UI/UX Design Services | Ankiom Soft India LLP"
        description="Ankiom Soft India LLP provides end-to-end UI/UX design services — from user research, wireframing, and visual design to usability testing and accessibility compliance."
        canonical="https://ankiom.com/UI-UX"
        openGraph={{
          title: "UI/UX Design Services | Ankiom Soft India LLP",
          description:
            "Explore Ankiom Soft India LLP’s expert UI/UX Design Services that create visually appealing, intuitive, and user-centered digital experiences.",
          url: "https://ankiom.com/UI-UX",
          type: "website",
          locale: "en_IN",
          site_name: "Ankiom Soft India LLP",
          images: [
            {
              url: "https://ankiomsoft.com/og-uiux.png",
              width: 1200,
              height: 630,
              alt: "UI/UX Design by Ankiom Soft India LLP",
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
              "UI UX Design Services, User Research, Wireframing, Prototyping, Visual Design, Usability Testing, Accessibility, UX Strategy, Interaction Design, Ankiom Soft India LLP, Product Design, UX Consultancy, UX Prototyping, UX Audit",
          },
          {
            name: "author",
            content: "Ankiom Soft India LLP",
          },
          {
            name: "robots",
            content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
      />

      {/* ✅ Schema Markup for Google Rich Results */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Ankiom Soft India LLP - UI/UX Design Services",
              url: "https://ankiom.com/UI-UX",
              logo: "https://ankiom.com/UI-UX.png",
              image: "https://ankiom.com/UI-UX",
              description:
                "Professional UI/UX design services — including user research, wireframing, prototyping, and usability testing for businesses across industries.",
              sameAs: [
                "https://in.linkedin.com/company/ankiom-soft-india",
                "https://twitter.com/ankiomsoftindia",
              ],
              address: {
                "@type": "3rd FLOOR, Tower-2, ARDENTE OFFICE ONE 2322, Bengaluru, Karnataka 560048",
                streetAddress: "Bangalore",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560048",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7090703720",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>

      {/* ✅ UI/UX Section */}
      <section className="max-w-6xl mx-auto mt-[-40px] mb-10 p-10 bg-white rounded-3xl text-center">
        <motion.h2
          className="font-bold text-[22px] mb-8 text-[#111]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our UI/UX Design Services
        </motion.h2>
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 mt-8 justify-items-start"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }}
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      className="flex flex-col bg-white p-4 rounded-xl w-[240px] transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="relative w-[200px] h-[190px] mb-3 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={service.img}
          alt={`${service.title} - Ankiom UI/UX Service`}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </motion.div>
      <h3 className="text-[15px] font-semibold text-left mb-2 text-gray-900">
        {service.title}
      </h3>
      <p className="text-sm text-[#637587] text-left leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  ))}
</motion.div>


      </section>
    </>
  );
}
