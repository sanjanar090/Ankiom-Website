"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import image1 from "../assets/custom-dev.jpg";
import image2 from "../assets/headless-cms.jpg";
import image3 from "../assets/ecomerce.png";
import image4 from "../assets/performance.png";
import image5 from "../assets/migration.png";

export default function OurServices4() {
  const cards = [
    { img: image1, title: "Custom Web Applications", desc: "Tailored web solutions to meet your specific business needs." },
    { img: image2, title: "Headless CMS Integration", desc: "Seamless integration with headless CMS platforms for flexible content management." },
    { img: image3, title: "E-commerce Portals", desc: "Robust and scalable e-commerce platforms with enhanced user experience." },
    { img: image4, title: "Performance & SEO Optimization", desc: "Optimizing your Next.js application for speed, responsiveness, and search engine visibility." },
    { img: image5, title: "Migration & Modernization", desc: "Migrating existing applications to Next.js for improved performance and maintainability." },
  ];
 
  return (
    <>
      <NextSeo
        title="Our Next.js Services | Ankiom"
        description="Explore Ankiom’s range of Next.js services including custom web apps, SEO optimization, and headless CMS integration."
        canonical="https://ankiom.com/nextjs#services"
      />

      <motion.section
        className="flex flex-col items-center text-center my-26 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-inter font-bold text-[22px] mb-8 text-[#111]">
          Our Next.js Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-start items-start text-left w-[240px]"
            >
              <div className="relative w-full h-[240px] mb-2">
                <Image src={card.img} alt={card.title} fill className="object-cover rounded-xl" />
              </div>
              <h3 className="text-[15px] font-medium text-[#222] mt-2">{card.title}</h3>
              <p className="text-sm text-[#4D8C99] mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
