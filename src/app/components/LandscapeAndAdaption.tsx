"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Bootloaders & Updatability",
    desc: "Ensure reliable system startup and enable over-the-air updates for enhanced functionality and security.",
    img: "/images/bootloaders.png",
  },
  {
    title: "Drivers & Reusability",
    desc: "Develop efficient and reusable drivers for seamless hardware integration and reduced development time.",
    img: "/images/drivers.png",
  },
  {
    title: "Middleware & Interoperability",
    desc: "Implement middleware solutions for seamless communication and interoperability between different system components.",
    img: "/images/middleware.png",
  },
  {
    title: "Microcontroller Proliferation",
    desc: "Navigate the diverse landscape of microcontrollers and choose the optimal solution for your application.",
    img: "/images/microcontrollers.png",
  },
];

export default function LandscapeAndAdaption() {
  return (
    <section className="py-16 px-6 bg-white flex justify-center">
      <div className="max-w-[900px] w-full">
        {/* Heading and Description */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[18px] font-semibold mb-2 text-gray-900 text-left"
        >
          Embedded Landscape & Adoption
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-gray-700 text-[14.5px] leading-relaxed mb-10 text-left"
        >
          Microcontrollers are ubiquitous in modern devices, from smartphones to
          industrial machinery. They require specialized software components such
          as bootloaders for system initialization, drivers for hardware
          interaction, and middleware for communication and functionality
          abstraction.
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              {/* Text */}
              <div className="sm:w-[65%] w-full">
                <h3 className="text-[15px] font-semibold text-gray-900 mb-1">
                  {section.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#4D7399]">
                  {section.desc}
                </p>
              </div>

              {/* Image */}
              <div className="sm:w-[35%] w-full sm:max-w-[220px] flex justify-start sm:justify-end">
                <Image
                  src={section.img}
                  alt={section.title}
                  width={210}
                  height={130}
                  className="rounded-md object-cover w-[210px] h-[130px]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
