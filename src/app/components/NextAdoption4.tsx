"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import netflixLogo from "../assets/netflix.png";
import twitchLogo from "../assets/twitch.png";
import uberLogo from "../assets/uber.png";

export default function NextAdoption4() {
  return (
    <>
      <NextSeo
        title="Next.js Adoption | Ankiom"
        description="Discover why global brands like Netflix, Twitch, and Uber trust Next.js for performance and scalability."
        canonical="https://ankiom.com/nextjs#adoption"
        openGraph={{
          url: "https://ankiom.com/nextjs#adoption",
          title: "Next.js Adoption | Ankiom",
          description:
            "Next.js is rapidly becoming the preferred framework for modern web apps. Trusted by Netflix, Twitch, and Uber.",
          images: [
            {
              url: "https://ankiom.com/images/netflix.png",
              width: 1200,
              height: 630,
              alt: "Next.js Adoption by Netflix and Uber",
            },
          ],
          site_name: "Ankiom",
        }}
      />

      <motion.section
        className="w-full flex justify-center mt-5 px-5 py-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1280px] w-full bg-white text-center px-5 py-5">
          <h2 className="font-inter font-bold text-xl mt-1 mb-2">
            What is Next.js?
          </h2>
          <p className="max-w-[800px] mx-auto mb-8 text-base">
            Next.js is a React framework that enables server-side rendering and generates static websites for React-based web applications. It offers features like optimized performance, SEO-friendliness, and a streamlined development experience.
          </p>

          <h2 className="font-inter font-bold text-xl mt-15 mb-2">
            Next.js Adoption
          </h2>
          <p className="max-w-[800px] mx-auto mb-8 text-base">
            Next.js is rapidly becoming the preferred framework for modern web
            development. By 2025, it&apos;s projected that over 60% of new web
            applications will be built using Next.js. Leading brands like
            Netflix, Twitch, and Uber already rely on Next.js for their web
            platforms.
          </p>

          <motion.div
            className="flex flex-wrap gap-5 mt-5 justify-center"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { img: netflixLogo, name: "Netflix" },
              { img: twitchLogo, name: "Twitch" },
              { img: uberLogo, name: "Uber" },
            ].map((brand) => (
              <motion.div
                key={brand.name}
                className="min-w-[200px] h-[301px] text-left"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full rounded-md mb-2"
                />
                <p className="text-sm font-medium text-gray-900">
                  {brand.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
