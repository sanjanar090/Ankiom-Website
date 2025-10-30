"use client";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Puzzle,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BenefitsPartnering() {
  const features: Feature[] = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Expertise in Low-Level Design",
      description:
        "Deep understanding of hardware-software interfaces and low-level programming.",
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Innovation & Best Practices",
      description:
        "Utilizing cutting-edge techniques and industry best practices for optimal solutions.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "End-to-End Partnership",
      description:
        "Comprehensive support from concept to deployment and beyond.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security & Compliance",
      description:
        "Ensuring robust security and adherence to relevant industry standards.",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto py-16 px-6 bg-white">
      <motion.h2
        className="text-[22px] font-semibold text-gray-900 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Benefits of Partnering
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white border border-[#E2E8F0] rounded-md p-6 text-left shadow-sm hover:shadow-md transition-all"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-900 mb-3">{feature.icon}</div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
