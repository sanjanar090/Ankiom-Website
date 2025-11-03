"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import image1 from "../assets/ecommerce-retail.png";
import image2 from "../assets/corporate.png";
import image3 from "../assets/saas-dashboards.png";
import image4 from "../assets/education1.png";
import image5 from "../assets/startups1.png";

export default function Industries4() {
  const industries = [
    { img: image1, title: "E-commerce & Retail", desc: "Creating engaging and high-converting online shopping experiences." },
    { img: image2, title: "Corporate & Marketing Websites", desc: "Building professional and effective websites for businesses of all sizes." },
    { img: image3, title: "SaaS Dashboards", desc: "Developing intuitive and feature-rich dashboards for SaaS applications." },
    { img: image4, title: "Education", desc: "Delivering interactive and accessible learning platforms." },
    { img: image5, title: "Startups / MVPs", desc: "Helping startups build and launch their Minimum Viable Products quickly and efficiently." },
  ];

  return (
    <>
      <NextSeo
        title="Industries We Serve | Ankiom"
        description="Ankiom builds custom Next.js applications for industries including e-commerce, SaaS, education, and startups."
        canonical="https://ankiom.com/nextjs#industries"
      />

      <motion.section
        className="flex flex-col items-center justify-center text-center my-15 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-inter font-bold text-[22px] mb-8 text-[#111]">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-5 gap-6 justify-center items-start">
          {industries.map((card, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex flex-col w-[240px]">
              <div className="relative w-full h-[240px] mb-2">
                <Image src={card.img} alt={card.title} fill className="object-cover rounded-xl" />
              </div>
              <h3 className="text-[15px] text-left font-medium text-[#222] mt-2">{card.title}</h3>
              <p className="text-sm  text-left text-[#4D8C99] mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
