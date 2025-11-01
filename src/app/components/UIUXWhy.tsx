"use client";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import {
  User,
  ChartLineIcon,
  PuzzleIcon,
  Handshake,
} from "lucide-react"; // 👈 Lucide icons

export default function UIUXWhy() {
  const reasons = [
    { name: "User-Centred Design Expertise", icon: <User className="w-6 h-6" /> },
    { name: "Data-Driven Decision-Making & Testing", icon: <ChartLineIcon className="w-6 h-6" /> },
    { name: "End-to-End Design Services", icon: <PuzzleIcon className="w-6 h-6" /> },
    { name: "Commitment to Accessibility & Ethics", icon: <Handshake className="w-6 h-6" /> },
  ];

  return (
    <motion.section
      className="py-9 text-center"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-3 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.name}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg cursor-pointer text-gray-800 justify-center shadow-sm"
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
            <div className="text-black text-xl">{r.icon}</div>
            <span className="font-semibold">{r.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
