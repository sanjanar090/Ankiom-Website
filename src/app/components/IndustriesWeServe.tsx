"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import industry1 from "../assets/industry1.png";
import industry2 from "../assets/industry2.png";
import industry3 from "../assets/industry3.png";
import industry4 from "../assets/industry4.png";
import industry5 from "../assets/industry5.png";

export default function IndustriesWeServe() {
  const industries = [
    { img: industry1, title: "Automotive & Transport" },
    { img: industry2, title: "Industrial Automation" },
    { img: industry3, title: "Healthcare & Medical" },
    { img: industry4, title: "Consumer Electronics" },
    { img: industry5, title: "Education & Training" },
  ];

  return (
    <>
      <NextSeo
        title="Industries We Serve | Ankiom QML Solutions"
        description="Ankiom delivers QML solutions across industries — automotive, healthcare, automation, education, and consumer electronics."
        canonical="https://www.ankiom.com/services"
      />

      <section id="about" className="max-w-[1280px] mx-auto mt-23 mb-16 text-center px-4">
        <motion.h2
          className="font-inter font-bold text-[22px] mb-8 text-[#111]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Industries We Serve
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative w-full h-[235px] mb-3 mx-auto overflow-hidden rounded-xl">
                <Image src={industry.img} alt={industry.title} fill className="object-cover" />
              </div>
              <h3 className="mt-2 text-sm text-left font-medium text-[#222]">{industry.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
