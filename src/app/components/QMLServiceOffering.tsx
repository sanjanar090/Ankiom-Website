"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import image1 from "../assets/one.png";
import image2 from "../assets/two.png";
import image3 from "../assets/three.png";
import Microcontroller from "../assets/microcontrollerfirmware.png";
import image4 from "../assets/four.png";
import image5 from "../assets/five.png";

export default function QMLServiceOffering() {
  const cards = [
    { img: image1, title: "UI Design & Development", desc: "We create intuitive and visually stunning user interfaces tailored to your specific needs." },
    { img: image2, title: "Cross-Platform Apps", desc: "Develop applications that seamlessly adapt to different screen sizes and platforms." },
    { img: image3, title: "HMI & Embedded Solutions", desc: "Build robust and responsive human-machine interfaces for embedded devices." },
    {img : Microcontroller, title:"Microcontroller & Firmware Development", desc: "Comprehensive firmware development for microcontrollers, optimizing for performance and power."},
    { img: image4, title: "Migration & Modernisation", desc: "Modernise existing applications by migrating to QML for improved performance and maintainability." },
    { img: image5, title: "Prototyping & Design Tools", desc: "Rapidly prototype and iterate on UI designs using QML's flexible and dynamic capabilities." },
  ];

  return (
    <>
      <NextSeo
        title="QML Service Offerings | Ankiom"
        description="Discover Ankiom's QML service offerings — from UI design and embedded solutions to migration, prototyping, and cross-platform app development."
        canonical="https://www.ankiom.com/services"
      />

      <section id="services" className="max-w-[1280px] mx-auto my-8 text-center px-4">
        <motion.h2
          className="font-inter font-bold text-[22px] mb-8 text-[#111]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our QML Service Offerings
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-pointer rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative w-full h-[235px] mb-3 mx-auto">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-[15px] text-left font-medium text-[#222] mt-2">{card.title}</h3>
              <p className="text-sm  text-left text-[#4D8C99] mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
