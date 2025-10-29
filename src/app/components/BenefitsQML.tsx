"use client";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

export default function BenefitsQML() {
  const benefits = [
    { title: "Fluid User Experiences", description: "Create smooth and responsive UIs with animations and transitions." },
    { title: "High Performance", description: "Leverage Qt's C++ backend for optimal performance." },
    { title: "Tailored Scalability", description: "Scale your application's complexity and features as needed." },
    { title: "Tooling & Community Support", description: "Access a wealth of resources, tools, and community expertise." },
    { title: "Cross-Platform Reach", description: "Deploy applications across various platforms with minimal code changes." },
  ];

  return (
    <>
      <NextSeo
        title="Benefits of Choosing QML | Ankiom"
        description="Discover the benefits of Qt QML — high performance, scalability, cross-platform compatibility, and rich community support."
        canonical="https://www.ankiom.com/services"
      />

      <section className="w-full max-w-[1200px] mx-auto mt-[85px] mb-[55px] font-[inter]">
        <motion.h2
          className="font-extrabold text-[24px] text-[#111] text-center mb-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Benefits of Choosing QML
        </motion.h2>

        <motion.p
          className="text-center text-[17px] text-black mb-[26px] font-normal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          QML offers numerous advantages for UI development, including:
        </motion.p>

        <div>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="mb-[28px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-[17px] font-bold text-[#4D8C99] mb-[6px]">
                {benefit.title}
              </h3>
              <p className="text-[17px] text-light mb-[12px]">
                {benefit.description}
              </p>
              <hr className="mt-[18px] border-0 border-t border-gray-300" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
