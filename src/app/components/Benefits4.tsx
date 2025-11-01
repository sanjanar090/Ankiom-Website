"use client";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { MdSpeed, MdOutlineGroups } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineScale } from "react-icons/hi";

export default function Benefits4() {
  const benefits = [
    { title: "Improved Performance", description: "Faster loading times and optimized rendering for a seamless user experience.", icon: <MdSpeed /> },
    { title: "Enhanced SEO", description: "Higher search engine rankings and increased organic traffic.", icon: <RiSearchLine /> },
    { title: "Scalability", description: "Applications that can handle growing user loads and traffic.", icon: <HiOutlineScale /> },
    { title: "Better User Experience", description: "Intuitive and responsive interfaces that keep users engaged.", icon: <MdOutlineGroups /> },
  ];

  return (
    <>
      <NextSeo
        title="Benefits of Next.js Development | Ankiom"
        description="Explore the key benefits of Next.js development — speed, scalability, SEO optimization, and superior user experience."
        canonical="https://ankiom.com/nextjs#benefits"
      />

      <motion.section
        className="bg-white -mt-5 py-20 px-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[22px] font-bold text-gray-900 mb-10 text-center">
          Benefits of Next.js Development
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-[1100px] mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center gap-3 p-5 w-64 min-h-[160px] bg-[#f9fbfc] border border-[#CFDEE8] rounded-lg transition"
            >
              <div className="text-3xl text-gray-900">{benefit.icon}</div>
              <h3 className="text-base font-bold text-gray-900">{benefit.title}</h3>
              <p className="text-sm text-[#4D8099]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
