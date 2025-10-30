"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import React from "react";

interface HeroSectionProps {
  imagelink?: string | StaticImageData;
  content?: {
    title?: string;
    description?: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ imagelink, content }) => {
  return (
    <>
      <NextSeo
        title="IoT Services | Ankiom"
        description="Explore Ankiom’s IoT services — smart automation, cloud integration, and data-driven connected solutions for modern industries."
        canonical="https://ankiom.com/iot#hero"
      />
      <motion.section
        className="relative w-full h-[301px] bg-white my-10 flex justify-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-[1280px] h-[300px] mx-auto my-8 rounded-xl overflow-hidden">
          {imagelink && (
            <Image
              src={imagelink}
              alt={content?.title || "Application services"}
              fill
              className="object-cover object-center"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white px-5"
          >
            {content?.title && (
              <h1 className="font-extrabold text-[38px] mb-2">{content.title}</h1>
            )}
            {content?.description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-[16px] text-white"
              >
                {content.description.replace(/'/g, "&apos;")}
              </motion.p>
            )}
          </motion.div>

          <div className="sr-only">
            <p>
              Explore Ankiom’s IoT services and solutions for smarter automation, connected systems, and business growth.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
