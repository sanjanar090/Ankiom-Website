"use client";

import Image from "next/image";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

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
    <section className="max-w-6xl mx-auto mt-[-100px] mb-2 p-10 bg-white rounded-3xl">
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

      <motion.div
        className="text-center mb-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-[22px] mb-2">Our Flutter Service Offerings</h2>
      </motion.div>

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
                alt={`${card.title} - Flutter service`}
                width={200}
                height={180}
                className="object-cover rounded-lg"
              />
            </motion.div>
            <h3 className="text-[15px] font-semibold text-left mb-2">{card.title}</h3>
            <p className="text-sm text-[#4D8C99] text-left mb-1">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
