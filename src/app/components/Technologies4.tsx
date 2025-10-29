"use client";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiVercel } from "react-icons/si";
import { MdSecurity, MdOutlineAnalytics } from "react-icons/md";
import { GiServerRack } from "react-icons/gi";
import { RiLayoutMasonryFill } from "react-icons/ri";

export default function Technologies4() {
  const techStack = [
    { name: "Next.js / React", icon: <SiNextdotjs /> },
    { name: "Node.js & API Routes", icon: <FaNodeJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Headless CMS Integrations", icon: <GiServerRack /> },
    { name: "Styling Frameworks", icon: <RiLayoutMasonryFill /> },
    { name: "Hosting & DevOps", icon: <SiVercel /> },
    { name: "Authentication / Security", icon: <MdSecurity /> },
    { name: "Analytics", icon: <MdOutlineAnalytics /> },
  ];

  return (
    <>
      <NextSeo
        title="Technologies We Use | Ankiom Next.js Development"
        description="Explore Ankiom’s advanced tech stack — Next.js, TypeScript, Node.js, and Vercel hosting for modern web solutions."
        canonical="https://ankiom.com/nextjs#technologies"
      />

      <motion.section
        className="bg-white py-10 px-5 -mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-[22px] font-bold mb-10 text-gray-900">Technologies We Use</h2>

        <div className="flex flex-wrap justify-center gap-5 max-w-[1200px] mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-4 w-48 h-24 bg-[#f9fcff] border border-[#ccdbf2] rounded-md font-semibold text-gray-900"
            >
              <div className="text-xl">{tech.icon}</div>
              <div className="text-base text-left">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
