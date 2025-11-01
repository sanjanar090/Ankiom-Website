"use client";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const seoContent = [
  "Our IoT solutions empower industries by connecting devices for real-time data exchange, automation, and scalable business operations.",
  "We integrate with top cloud providers like AWS IoT Core, Microsoft Azure IoT, Google Cloud IoT, and IBM IoT.",
  "IoT benefits include efficiency, insights, scalability, and security."
];

export default function IotServicesText() {
  return (
    <>
      <NextSeo
        title="What is IoT | Ankiom"
        description="Understand what IoT is and how Ankiom’s IoT services revolutionize industries with real-time connectivity and smart automation."
        canonical="https://ankiom.com/iot#what-is-iot"
      />
      <motion.section
        className="max-w-[783px] mx-auto mt-8 pt-2 text-[#121717] text-[16px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-center leading-relaxed">
        
        The Internet of Things (IoT) is revolutionizing industries by connecting
        devices and systems, enabling real-time data exchange and automation.
        For businesses, this translates to improved operational efficiency,
        data-driven decision-making, and new revenue streams.
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











