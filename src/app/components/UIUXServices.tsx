"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import research from "../assets/users.png";
import strategy from "../assets/strategy.png";
import information from "../assets/information.png";
import wireframing from "../assets/wireframing.png";
import visual from "../assets/visual.png";
import usability from "../assets/usability.png";

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
    <section className="max-w-6xl mx-auto mt-[-40px] mb-10 p-10 bg-white rounded-3xl text-center">
      {/* 🔍 SEO Meta */}
      <NextSeo
        title="UI/UX Design Services | Ankiom Soft India LLP"
        description="Ankiom Soft India LLP provides end-to-end UI/UX design services — from user research and wireframing to usability testing and accessibility compliance."
        canonical="https://ankiomsoft.com/ui-ux-design"
        openGraph={{
          title: "UI/UX Design Services | Ankiom Soft India LLP",
          description:
            "Explore Ankiom Soft India LLP’s expert UI/UX Design Services that create visually appealing, intuitive, and user-centered digital experiences.",
          url: "https://ankiomsoft.com/ui-ux-design",
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
              "UI UX Design Services, User Research, Wireframing, Prototyping, Visual Design, Usability Testing, Accessibility, Ankiom Soft India LLP, Product Design",
          },
          {
            name: "author",
            content: "Ankiom Soft India LLP",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />

      {/* 🧩 Heading */}
      <motion.h2
        className="font-bold text-[22px] mb-8 text-[#111]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our UI/UX Design Services
      </motion.h2>

      {/* 🖼️ Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
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
            className="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-[230px]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-[200px] h-[200px] mb-4 rounded-xl overflow-hidden mx-auto">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-[15.5px] font-semibold text-[#222] mb-1 text-left">
              {service.title}
            </h3>
            <p className="text-[13.5px] text-[#4D7399] text-left leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
