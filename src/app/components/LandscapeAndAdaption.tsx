"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const embeddedTopics = [
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

export default function LandscapeAndAdoption() {
  return (
    <section className="py-12 bg-white">
  <motion.div
    className="max-w-6xl mx-auto px-8" 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h2 className="text-[22px] font-bold mb-4 text-center">
      Embedded Landscape & Adoption
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center"> 
      {embeddedTopics.map((topic, i) => (
        <motion.div
          key={i}
          className="text-center bg-white p-4 rounded-xl duration-300 flex flex-col items-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative w-[250px] h-[150px] mb-4 overflow-hidden rounded-lg">
            <Image
              src={topic.img}
              alt={topic.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="font-semibold text-[15px] text-gray-900 mb-2">
              {topic.title}
            </h3>
            <p className="text-[#4D7399] text-[13.5px] leading-relaxed max-w-[260px]">
              {topic.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

  );
}
