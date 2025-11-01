"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import industry1 from "../assets/users.png";
import industry3 from "../assets/strategy.png";
import industry4 from "../assets/information.png";
import industry5 from "../assets/wireframing.png";
import industry6 from "../assets/visual.png";
import industry7 from "../assets/usability.png";

export default function UIUXServices() {
  const industries = [
    {
      img: industry1,
      title: "User & Market Research",
      desc: "In-depth research to understand your target audience and market trends.",
    },
    {
      img: industry3,
      title: "UX Strategy & Persona Development",
      desc: "Developing a strategic UX vision and creating detailed user personas.",
    },
    {
      img: industry4,
      title: "Information Architecture & Interaction Design",
      desc: "Structuring content and designing intuitive interactions.",
    },
    {
      img: industry5,
      title: "Wireframing & Prototyping",
      desc: "Creating low and high-fidelity wireframes and interactive prototypes.",
    },
    {
      img: industry6,
      title: "Visual/UI Design",
      desc: "Crafting visually appealing and consistent user interfaces.",
    },
    {
      img: industry7,
      title: "Usability Testing & Accessibility Compliance",
      desc: "Testing with real users and ensuring accessibility standards are met.",
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
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-start"

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
            <div className="relative w-[200px] h-[220px] mb-3  rounded-xl overflow-hidden">
              <Image
                src={industry.img}
                alt={`${industry.title} industry`}
                fill
                className="object-cover rounded-xl"
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
