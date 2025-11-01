"use client";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Strategy & Roadmap", desc: "Define your IoT vision and create a tailored roadmap for successful implementation." },
    { title: "Hardware & Connectivity", desc: "Select and integrate the right hardware and connectivity solutions for your specific needs." },
    { title: "Edge & Cloud", desc: "Leverage edge computing and cloud platforms for efficient data processing and management." },
    { title: "Analytics", desc: "Gain actionable insights from your IoT data with advanced analytics and reporting." },
  ];

  return (
    <motion.section
      id="services"
      className="py-2 px-4 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <NextSeo
        title="IoT Service Offerings | Ankiom"
        description="Explore Ankiom’s IoT services including Strategy, Hardware, Edge Computing, and Analytics for smarter business solutions."
        
      />

      <h2 className="text-[22px] font-bold mb-8 mt-2 text-center">Our Service Offerings</h2>
      <hr className="border-gray-300 max-w-[1200px] mx-auto mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-[1200px] mx-auto relative">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="p-4 rounded transition-shadow duration-300"
            whileHover={{
              scale: 1.03,
              y: -3,
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
          >
            <h3 className="text-[15px] font-semibold text-[#617d8a] mb-1">{service.title}</h3>
            <p className="text-[15px] text-[#121717] leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
        <hr className="absolute top-1/2 left-0 w-full border-gray-300" />
      </div>

      <div className="sr-only">
        {services.map((s, i) => (
          <p key={i}>
            {s.title}: {s.desc}
          </p>
        ))}
      </div>
    </motion.section>
  );
}
