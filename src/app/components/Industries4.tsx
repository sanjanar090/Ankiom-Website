"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import image1 from "../assets/ecommerce-retail.png";
import image2 from "../assets/corporate.png";
import image3 from "../assets/saas-dashboards.png";
import image4 from "../assets/education.png";
import image5 from "../assets/startups.png";

export default function Industries4() {
  const industries = [
    { img: image1, title: "E-commerce & Retail", desc: "High-converting online shopping experiences." },
    { img: image2, title: "Corporate Websites", desc: "Professional and modern business websites." },
    { img: image3, title: "SaaS Dashboards", desc: "Interactive and data-driven admin dashboards." },
    { img: image4, title: "Education", desc: "Engaging and accessible learning platforms." },
    { img: image5, title: "Startups / MVPs", desc: "Quick and efficient MVP launches for startups." },
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
              <h3 className="text-[15px] font-medium text-[#222] mt-2">{card.title}</h3>
              <p className="text-sm text-[#4D8C99] mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
