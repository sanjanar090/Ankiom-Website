"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

export default function QMLSection() {
  const cards = [
    {
      img: image1,
      title: "Declarative & Dynamic UIs",
      desc: "QML's declarative nature simplifies UI design and allows for dynamic updates and animations.",
    },
    {
      img: image2,
      title: "Cross-Platform Reach",
      desc: "Develop applications that run seamlessly on various platforms, including desktop, mobile, and embedded systems.",
    },
    {
      img: image3,
      title: "JavaScript & C++ Integration",
      desc: "Integrate QML with JavaScript for scripting and C++ for performance-critical components.",
    },
    {
      img: image4,
      title: "Strong Community & Tooling",
      desc: "Benefit from a vibrant community, extensive documentation, and powerful development tools.",
    },
  ];

  return (
    <>
      <NextSeo
        title="Introduction to Qt QML | Ankiom"
        description="Explore the power of Qt QML for building dynamic, high-performance, and cross-platform UIs with Ankiom’s expert developers."
        canonical="https://www.ankiom.com/services"
      />

      <section className="max-w-[1280px] mx-auto my-10 p-10 bg-white rounded-3xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[22px] font-bold mb-4">Introduction to Qt QML</h2>
          <p className="text-base max-w-3xl mx-auto">
            Qt QML is a declarative language for creating dynamic and visually appealing
            user interfaces. It allows developers to describe the UI&apos;s appearance and
            behavior concisely. QML leverages the power of Qt&apos;s C++ framework,
            providing performance and flexibility for complex applications.
          </p>
        </motion.div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[22px] font-bold mb-4">QML Landscape</h2>
          <p className="text-base max-w-3xl mx-auto">
            Qt is a mature and widely adopted framework, trusted by major players in
            various industries. QML builds upon this foundation, offering a modern approach
            to UI development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
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
              className="flex flex-col items-center bg-white p-6 rounded-2xl w-full max-w-xs mx-auto transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={223}
                height={223}
                className="w-full h-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-sm font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-[#4D8C99]">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
