"use client";
import { NextSeo } from "next-seo";
import { FaMapMarkerAlt, FaLightbulb, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChoose() {
  const reasons = [
    { name: "Local Expertise", icon: <FaMapMarkerAlt /> },
    { name: "Innovation", icon: <FaLightbulb /> },
    { name: "Sustainability", icon: <FaLeaf /> },
  ];

  return (
    <motion.section
      className="py-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <NextSeo
        title="Why Choose Ankiom | IoT Expertise, Innovation & Sustainability"
        description="Choose Ankiom for local IoT expertise, innovation, and sustainability in connected solutions for modern businesses."
        
      />

      <h2 className="text-[22px] font-bold mb-10">Why Choose Ankiom?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5 max-w-3xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.name}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg cursor-pointer"
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
            {r.icon}
            <span className="font-semibold">{r.name}</span>
          </motion.div>
        ))}
      </div>
      <div className="sr-only">
        <p>Reasons to choose Ankiom include local expertise, innovation, and sustainable IoT solutions for businesses.</p>
      </div>
    </motion.section>
  );
}
