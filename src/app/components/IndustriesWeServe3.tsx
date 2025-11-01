"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import industry1 from "../assets/industry1.png";
import industry3 from "../assets/industry3.png";
import industry4 from "../assets/industry4.png";
import industry5 from "../assets/industry5.png";

export default function IndustriesWeServe3() {
  const industries = [
    { img: industry1, title: "Automotive & Transport" },
    { img: industry3, title: "Healthcare & Medical" },
    { img: industry4, title: "Consumer Electronics" },
    { img: industry5, title: "Education & Training" },
  ];

  return (
    <section className="max-w-6xl mx-auto my-1 p-10 bg-white rounded-3xl text-center">
      <NextSeo
        title="Industries We Serve | Flutter App Development | Ankiom"
        description="Discover how Ankiom delivers Flutter app solutions across industries like automotive, healthcare, consumer electronics, and education."
        canonical="https://www.ankiom.com/flutter"
      />

      <motion.h2
        className="font-bold text-[22px] mb-8 text-[#111]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Industries We Serve
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
            <div className="relative w-[259px] h-[220px] mb-3 rounded-lg overflow-hidden">
              <Image
                src={industry.img}
                alt={`${industry.title} industry`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-[15px] font-semibold text-left text-[#222]">
              {industry.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
