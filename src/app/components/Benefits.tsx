"use client";
import { NextSeo } from "next-seo";
import { FaTachometerAlt, FaDatabase, FaArrowsAltH, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const seoContent = [
  "Our IoT benefits include efficiency, data-driven insights, scalability, security, and local expertise.",
  "Industries can leverage IoT solutions to improve operations, make smarter decisions, and grow business.",
];

export default function Benefits() {
  const benefits = [
    { name: "Efficiency", icon: <FaTachometerAlt /> },
    { name: "Data-Driven", icon: <FaDatabase /> },
    { name: "Scalability", icon: <FaArrowsAltH /> },
    { name: "Security", icon: <FaShieldAlt /> },
    { name: "Local Expertise", icon: <FaMapMarkerAlt /> },
  ];

  return (
    <motion.section
      className="py-16 px-4 bg-white text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <NextSeo
        title="IoT Benefits | Ankiom"
        description="Discover the key benefits of IoT with Ankiom — from improved efficiency and scalability to advanced data-driven insights."
        
      />

      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[22px] font-bold mb-10">Benefits of Our IoT Solutions</h2>
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {benefits.map((b, i) => (
            <motion.div
              key={b.name}
              className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-lg w-full max-w-[220px] cursor-pointer"
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
              {b.icon}
              <h3 className="text-sm font-semibold mt-2">{b.name}</h3>
            </motion.div>
          ))}
        </div>
        <div className="sr-only">
          {seoContent.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
