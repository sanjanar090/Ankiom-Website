"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  const canonical = "https://ankiom.com/about";
  const title = "About Ankiom Soft India LLP";
  const description =
    "Ankiom Soft India LLP — a Bengaluru-based technology company specializing in IoT, Embedded Systems, Flutter, Next.js, and Qt/QML development for connected digital experiences.";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title,
          description,
          siteName: "Ankiom Soft India LLP",
          images: [
            {
              url: "/images/newankiom2.jpg",
              width: 1200,
              height: 630,
              alt: "Ankiom Soft India LLP - About Us",
            },
          ],
        }}
      />

      <Navbar />

      <motion.section
        className="relative min-h-[90vh] flex items-center justify-center bg-[#020617] text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              filter: "blur(0.5px)",
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="cyan" strokeWidth="1">
              <path d="M100 200 L150 250 L200 200 L250 250 L300 200" />
              <path d="M400 150 L450 200 L500 150 L550 200 L600 150" />
              <path d="M250 400 L300 350 L350 400 L400 350 L450 400" />
              <circle cx="150" cy="250" r="3" fill="cyan" />
              <circle cx="550" cy="200" r="3" fill="cyan" />
              <circle cx="400" cy="350" r="3" fill="cyan" />
            </g>
          </svg>
        </div>

        <motion.div
          className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent leading-tight"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Intelligent, Connected & Scalable Experiences
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ankiom Soft India LLP is a multidisciplinary product engineering company
            building next-generation IoT systems, mobile applications, embedded
            software, and modern web platforms that connect ideas with technology.
          </motion.p>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Based in Bengaluru, Ankiom Soft India LLP focuses on end-to-end digital
            product engineering. Our team bridges embedded hardware with modern
            cloud and web ecosystems, delivering solutions that are reliable,
            intelligent, and future-ready.
          </p>
        </motion.div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To empower industries by building connected ecosystems — combining
              embedded intelligence, cloud scalability, and elegant digital experiences.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To engineer human-centered technologies that simplify connectivity
              and accelerate innovation across IoT, embedded, and software landscapes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/newankiom2.jpg"
              alt="Ankiom Soft India LLP Office"
              width={800}
              height={500}
              priority
              className="object-cover w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <motion.h3
          className="text-3xl font-semibold text-center mb-10 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Core Expertise
        </motion.h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[ 
            {
              icon: "🌐",
              title: "IoT & Embedded Systems",
              desc: "Designing intelligent devices, firmware, and connected solutions that integrate seamlessly with cloud infrastructure.",
            },
            {
              icon: "📱",
              title: "Flutter App Development",
              desc: "Building high-performance, cross-platform mobile apps with stunning UI and optimized performance.",
            },
            {
              icon: "💻",
              title: "Next.js Web Solutions",
              desc: "Developing modern, SEO-optimized, and scalable web platforms using React and Next.js.",
            },
            {
              icon: "⚙️",
              title: "Qt / QML Applications",
              desc: "Delivering cross-platform desktop and embedded UI applications for industries and enterprises.",
            },
          ].map((val, i) => (
            <motion.div
              key={val.title}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl mb-4">{val.icon}</div>
              <h4 className="font-semibold text-xl mb-2 text-gray-900">
                {val.title}
              </h4>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
