"use client";

import Image from "next/image";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import image1 from "../assets/bootloaderImage.png";
import image2 from "../assets/devicedriverImage.png";
import image3 from "../assets/middlewareImage.png";
import image4 from "../assets/embeddedCImage.png";
import image5 from "../assets/embeddedCPlusPlusImage.png";
import image6 from "../assets/firmwareImage.png";

export default function EmbeddedServiceOffering() {
  const cards = [
    {
      img: image1,
      title: "Bootloader Development",
      desc: "Custom bootloader solutions for secure and efficient system initialization.",
    },
    {
      img: image2,
      title: "Device Driver Development",
      desc: "Develop drivers for various peripherals and interfaces, ensuring optimal performance.",
    },
    {
      img: image3,
      title: "Middleware Development",
      desc: "Implement middleware for communication, data processing, and system management.",
    },
    {
      img: image4,
      title: "Embedded C Programming",
      desc: "Develop robust and efficient embedded applications using C.",
    },
    {
      img: image5,
      title: "Embedded C++ Programming",
      desc: "Leverage the power of C++ for complex embedded systems with object-oriented design.",
    },
    {
      img: image6,
      title: "Microcontroller & Firmware Development",
      desc: "Comprehensive firmware development for microcontrollers, optimizing for performance and power.",
    },
    
  ];

  return (
    <section className="max-w-6xl mx-auto mt-[-100px] mb-2 p-10 bg-white rounded-3xl">
      <NextSeo
        title="Embedded Systems Development | Ankiom"
        description="Designing and building intelligent, efficient, and reliable embedded solutions for a wide range of industries."
        canonical="https://www.ankiom.com/embedded"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Embedded services, Embedded Systems development, Embedded integration, Embedded maintenance, Ankiom Embedded Systems",
          },
        ]}
      />

      <motion.div
        className="text-center mb-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-[22px] mb-1 mt-15">Service Offerings</h2>
      </motion.div>

      {/* === Cards grid with staggered animation === */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-xl w-full max-w-xs mx-auto h-[420px]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="h-[200px] w-[300px] mb-1 flex justify-center items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={card.img}
                alt={`${card.title} - Embedded service`}
                width={200}
                height={180}
                className="object-cover rounded-lg"
              />
            </motion.div>
            <h3 className="text-[15px] font-semibold text-center mb-2">{card.title}</h3>
            <p className="text-sm text-[#4D8C99] text-center mb-1">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
