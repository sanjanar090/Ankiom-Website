"use client";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const seoContent = [
  "Ankiom Soft India LLP offers professional UI/UX Design Services focused on crafting visually stunning, user-friendly, and conversion-optimized digital experiences.",
  "Our UI/UX designers create responsive, accessible, and intuitive interfaces that elevate user engagement and brand credibility across web and mobile platforms.",
  "We follow a user-centric design process — from wireframes and interactive prototypes to usability testing and final design implementation.",
  "Ankiom Soft India LLP’s UI/UX expertise spans product design, website design, mobile app design, and design system creation for consistent brand experiences.",
  "With a focus on research, interaction design, and accessibility, our UI/UX services help businesses build digital products that users love and trust."
];

export default function IntroductionSection() {
  return (
    <>
      <NextSeo
        title="UI/UX Design Services | Ankiom Soft India LLP"
        description="Enhance your digital presence with Ankiom Soft India LLP’s UI/UX Design Services — creating visually appealing, intuitive, and conversion-driven user experiences for web and mobile platforms."
        canonical="https://ankiomsoft.com/UI-UX"
        openGraph={{
          title: "UI/UX Design Services | Ankiom Soft India LLP",
          description:
            "Ankiom Soft India LLP specializes in UI/UX Design Services — crafting elegant, user-focused interfaces that enhance engagement, retention, and brand identity.",
          url: "https://ankiomsoft.com/UI-UX",
          site_name: "Ankiom Soft India LLP",
          images: [
            {
              url: "https://ankiomsoft.com/og-uiux.png",
              width: 1200,
              height: 630,
              alt: "UI/UX Design Services by Ankiom Soft India LLP",
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
              "UI UX Design Services, User Interface Design, User Experience Design, Website Design, Mobile App Design, Wireframing, Prototyping, Product Design, Interaction Design, Ankiom Soft India LLP",
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

      <motion.section
        className="max-w-[800px] mx-auto mt-10 pt-4 text-[#121717] text-[16px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-[22px] font-bold mb-4 text-center mt-6">
          Introduction to UI/UX Design Services
        </h1>

        <p className="text-center leading-relaxed text-gray-800">
          UI/UX design focuses on creating meaningful and delightful digital experiences. 
          Our design team at Ankiom Soft India LLP blends creativity with user research to craft 
          visually appealing interfaces that are both functional and user-friendly. From concept to 
          launch, we design products that align with your business goals while delivering seamless 
          interactions for your users.
        </p>

        <div className="sr-only">
          {seoContent.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </motion.section>
    </>
  );
}
