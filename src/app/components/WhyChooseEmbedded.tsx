"use client";
import { NextSeo } from "next-seo";
import { 
  FaCogs,          // for Low-Level Design
  FaLightbulb,     // for Innovation
  FaHandshake,     // for Partnership
  FaShieldAlt       // for Security
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseEmbedded() {
  const reasons = [
    { name: "Expertise in Low-Level Design", icon: <FaCogs /> },
    { name: "Innovation & Best Practices", icon: <FaLightbulb /> },
    { name: "End-to-End Partnership", icon: <FaHandshake /> },
    { name: "Security & Compliance", icon: <FaShieldAlt /> }
  ];

  return (
    <motion.section
      className="py-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <NextSeo
        title="Why Choose Ankiom | Embedded Systems Development"
        description="Choose Ankiom for local IoT expertise, innovation, and sustainability in connected solutions for modern businesses."
      />

      <h2 className="text-[22px] font-bold mb-10">Why Choose Ankiom?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-5 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.name}
            className="flex items-center gap-3 p-5 bg-[#F8FBFD] border border-gray-200 rounded-lg cursor-pointer text-gray-800 justify-center shadow-sm"
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
            <div className="text-black-800 text-xl">{r.icon}</div>
            <span className="font-semibold">{r.name}</span>
          </motion.div>
        ))}
      </div>


    </motion.section>
  );
}
