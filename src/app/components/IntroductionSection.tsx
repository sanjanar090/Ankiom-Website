"use client";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const seoContent = [
  "Ankiom Soft India LLP specializes in cutting-edge Embedded Systems development for industrial automation, IoT, and smart devices.",
  "Our embedded solutions are designed to provide real-time performance, low power consumption, and high reliability across multiple domains.",
  "We build custom firmware and embedded applications that integrate seamlessly with IoT and cloud platforms.",
  "Ankiom Soft India LLP’s expertise spans microcontrollers, embedded Linux, and real-time operating systems for scalable innovation."
];

export default function IntroductionSection() {
  return (
    <>
      <NextSeo
        title="Embedded Systems | Ankiom Soft India LLP"
        description="Ankiom Soft India LLP delivers high-performance Embedded Systems solutions for IoT, automation, and smart devices with reliable firmware and hardware integration."
        canonical="https://ankiomsoft.com/embedded"
        openGraph={{
          title: "Embedded Systems Development | Ankiom Soft India LLP",
          description:
            "Explore Ankiom Soft India LLP’s expertise in Embedded Systems engineering — delivering innovative IoT, automation, and connected device solutions.",
          url: "https://ankiomsoft.com/embedded",
          site_name: "Ankiom Soft India LLP",
          images: [
            {
              url: "https://ankiomsoft.com/og-embedded.png",
              width: 1200,
              height: 630,
              alt: "Embedded Systems by Ankiom Soft India LLP",
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
              "Ankiom Soft India LLP, Embedded Systems, IoT, Firmware, Embedded Software, Microcontrollers, RTOS, Bangalore software company, Automation Solutions",
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
        className="max-w-[800px] mx-auto mt-7 pt-4 text-[#121717] text-[16px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-[22px] font-bold mb-4 text-center">
          Introduction to Embedded Systems
        </h1>

        <p className="text-center leading-relaxed text-gray-800">
          Embedded systems are specialized computer systems designed to perform specific tasks within larger devices or systems. They often involve microcontrollers, which are compact integrated circuits that control the functionality of these systems. The advantages of using embedded systems include increased efficiency, reliability, and real-time responsiveness, making them ideal for applications ranging from consumer electronics to industrial automation.
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
