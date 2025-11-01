"use client";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { FaIndustry, FaBolt, FaCity, FaTruck, FaHeartbeat } from "react-icons/fa";

export default function Industries() {
  const industries = [
    { name: "Manufacturing", icon: FaIndustry },
    { name: "Utilities", icon: FaBolt },
    { name: "Smart Cities", icon: FaCity },
    { name: "Logistics", icon: FaTruck },
    { name: "Healthcare", icon: FaHeartbeat },
  ];

  return (
    <>
      <NextSeo
        title="IoT Industries We Serve | Ankiom"
        description="Ankiom provides IoT solutions for Manufacturing, Utilities, Smart Cities, Logistics, and Healthcare industries."
        canonical="https://ankiom.com/iot#industries"
      />
      <motion.section
        className="py-16 px-4 bg-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[22px] font-bold mb-8 mt-0 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {industries.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center justify-center gap-4 w-full max-w-[250px] h-[80px] px-5 py-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <Icon className="text-xl text-gray-700" />
              <span className="font-semibold text-sm md:text-base">{name}</span>
            </motion.div>
          ))}
        </div>
        <div className="sr-only">
          <p>IoT solutions for Manufacturing, Utilities, Smart Cities, Logistics, and Healthcare industries.</p>
        </div>
      </motion.section>
    </>
  );
}
