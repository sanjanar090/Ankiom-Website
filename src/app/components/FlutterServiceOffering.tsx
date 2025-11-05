"use client";

import Image from "next/image";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

import image1 from "../assets/one.jpg";
import image2 from "../assets/two.jpg";
import image3 from "../assets/three.jpg";
import image4 from "../assets/four.jpg";
import image5 from "../assets/five.jpg";
import image6 from "../assets/SIX.jpg";
import image7 from "../assets/SEVEN.jpg";
import image8 from "../assets/EIGHT.jpg";

export default function FlutterServiceOffering() {
  const cards = [
    {
      img: image1,
      title: "Custom App Development",
      desc: "Tailored Flutter app development to meet your specific business requirements and user needs.",
    },
    {
      img: image2,
      title: "Cross-Platform Mobile & Web",
      desc: "Build responsive and consistent apps for both mobile (iOS, Android) and web platforms using Flutter.",
    },
    {
      img: image3,
      title: "UI/UX Design & Prototyping",
      desc: "Create visually appealing and user-friendly interfaces with our expert UI/UX design and prototyping services.",
    },
    {
      img: image4,
      title: "Migration & Modernisation",
      desc: "Migrate existing applications to Flutter or modernise legacy systems to leverage Flutter's capabilities.",
    },
    {
      img: image5,
      title: "Backend & Integration",
      desc: "Seamlessly integrate your Flutter app with backend systems, APIs, and cloud services.",
    },
    {
      img: image6,
      title: "Performance Optimisation",
      desc: "Enhance the performance and responsiveness of your Flutter app through optimisation techniques.",
    },
    {
      img: image7,
      title: "Testing & Quality Assurance",
      desc: "Ensure the quality and reliability of your Flutter app with comprehensive testing and quality assurance services.",
    },
    {
      img: image8,
      title: "Maintenance & DevOps",
      desc: "Provide ongoing maintenance, updates, and DevOps support to keep your Flutter app running smoothly.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-[-100px] mb-10 p-10 bg-white rounded-3xl">
      {/* SEO */}
      <NextSeo
        title="Flutter App Development Services | Ankiom"
        description="Comprehensive Flutter app development services — from UI/UX to integration, testing, and maintenance."
        canonical="https://www.ankiom.com/flutter"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Flutter services, Flutter app development, Flutter UI/UX, Flutter integration, Flutter maintenance, Ankiom Flutter apps",
          },
        ]}
      />

      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-[24px] text-gray-900">
          Our Flutter Service Offerings
        </h2>
      </motion.div>

      {/* First Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {cards.slice(0, 5).map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start bg-white p-4 rounded-2xl w-[220px] h-[390px]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="w-[220px] h-[200px] mb-3 overflow-hidden rounded-lg hover:scale-[1.04] transition-transform duration-300 ease-out">
              <motion.div transition={{ duration: 0.3 }} className="w-full h-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={220}
                  height={200}
                  className="object-cover w-full h-full rounded-lg hover:scale-[1.04] transition-transform duration-300 ease-out"
                />
              </motion.div>
            </div>

            <h3 className="text-[15px] font-semibold mb-1 text-gray-900">
              {card.title}
            </h3>
            <p className="text-sm text-[#4D8C99] leading-[1.8] tracking-wide pr-2">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row */}
      <motion.div
        className="mt-8 flex flex-wrap gap-1 justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {cards.slice(5, 8).map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start bg-white p-4 rounded-2xl w-[250px] h-[390px]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-[220px] h-[200px] mb-3 overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={220}
                  height={200}
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>
            </div>

            <h3 className="text-[15px] font-semibold mb-1 text-gray-900">
              {card.title}
            </h3>
            <p className="text-sm text-[#4D8C99] leading-[1.8] tracking-wide pr-2">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
