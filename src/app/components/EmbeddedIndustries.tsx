"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import industry1 from "../assets/automative.png";
import industry3 from "../assets/electronics.png";
import industry4 from "../assets/healthcare.png";
import industry5 from "../assets/iotdevices.png";

export default function EmbeddedIndustries() {
  const industries = [
    {
      img: industry1,
      title: "Automotive & Transportation",
      desc: "Embedded systems for vehicle control, infotainment, and safety.",
    },
    {
      img: industry3,
      title: "Consumer Electronics",
      desc: "Firmware for a wide range of consumer devices, from wearables to home appliances.",
    },
    {
      img: industry4,
      title: "Healthcare & Medical",
      desc: "Embedded software for medical devices, monitoring systems, and diagnostic equipment.",
    },
    {
      img: industry5,
      title: "IoT & Smart Devices",
      desc: "Development of connected devices and IoT platforms for various applications.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-[-40px] mb-4 p-10 bg-white rounded-3xl text-center">
      <NextSeo
        title="Industries We Serve | Embedded Systems | Ankiom"
        description="Discover how Ankiom delivers embedded solutions across industries like automotive, healthcare, consumer electronics, and IoT."
        canonical="https://www.ankiom.com/embedded"
      />

      <motion.h2
        className="font-bold text-[22px] mb-8 text-[#111]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Industries Served
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="rounded-lg p-3 transition-all duration-300 hover:-translate-y-1"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-[250px] h-[220px] mb-3  rounded-lg overflow-hidden">
              <Image
                src={industry.img}
                alt={`${industry.title} industry`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-[#222] mb-1 text-left">
              {industry.title}
            </h3>
            <p className="text-[13.5px] text-[#4D7399] text-left leading-relaxed">
              {industry.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
