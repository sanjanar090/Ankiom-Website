"use client";
import { NextSeo } from "next-seo";
import { FaAws, FaMicrosoft, FaGoogle, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const seoContent = [
  "We partner with leading cloud providers like AWS IoT Core, Microsoft Azure IoT, Google Cloud IoT Core, and IBM IoT.",
  "Our cloud partnerships ensure secure, scalable, and reliable IoT deployments for businesses.",
];

const partners = [
  { name: "AWS IoT Core", icon: <FaAws /> },
  { name: "Microsoft Azure IoT", icon: <FaMicrosoft /> },
  { name: "Google Cloud IoT Core", icon: <FaGoogle /> },
  { name: "IBM IoT", icon: <FaCloud /> },
];

export default function CloudPartners() {
  return (
    <motion.section
      className="bg-white text-center py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <NextSeo
        title="Cloud Partners for IoT | Ankiom"
        description="Ankiom collaborates with AWS IoT Core, Azure IoT, Google Cloud IoT, and IBM IoT to deliver secure, scalable, and efficient cloud-based IoT solutions."
      />

      <h2 className="text-[22px] font-bold text-[#111] mb-8">Cloud Partners for IoT</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-5 bg-white border border-gray-200 rounded-lg min-w-[200px] cursor-pointer"
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
            <span className="text-xl text-[#111]">{partner.icon}</span>
            <span className="text-sm font-semibold text-[#111]">{partner.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="sr-only">
        {seoContent.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </motion.section>
  );
}
