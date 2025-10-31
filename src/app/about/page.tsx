"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { NextSeo } from "next-seo";
import NavbarReuse from "@/app/components/NavbarReuse";
import Footer5 from "@/app/components/Footer5";

export default function AboutPage() {
  const canonical = "https://ankiom.com/about";
  const title = "About Ankiom Soft India LLP";
  const description =
    "Ankiom Soft India LLP — a Bengaluru-based software engineering firm specializing in embedded systems, IoT, Flutter, Next.js, and Qt/QML solutions for connected and intelligent digital experiences.";

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

      <NavbarReuse />

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
      className="text-center text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        style={{
          backgroundImage:
            "linear-gradient(90deg, #22d3ee, #3b82f6, #06b6d4, #3b82f6)",
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Engineering Intelligent, Connected & Scalable Solutions
      </motion.span>
    </motion.h1>



          <motion.p
            className="text-lg md:text-xl text-blue-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ankiom Soft India LLP is a Bengaluru-based technology company
            delivering end-to-end software product engineering — from embedded
            systems and IoT to modern web and mobile platforms. We help
            businesses innovate and scale with intelligent, high-performance
            digital solutions.
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
            Founded in 2014 and headquartered in Bengaluru, Ankiom Soft India LLP
            specializes in embedded and IoT systems, cloud solutions, mobile
            applications, and web platforms. Our team combines innovation with
            engineering expertise to deliver robust, scalable, and secure
            digital ecosystems for global clients.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To be a trusted global partner for engineering connected and
              intelligent systems that power the next generation of digital
              experiences — uniting embedded hardware, software, and cloud
              innovation.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower industries by delivering reliable, high-performance
              software and systems — built on technical excellence, agile
              practices, and a human-centered engineering approach.
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
              title: "Embedded & IoT Systems",
              desc: "Engineering reliable device firmware, hardware integration, and connected IoT ecosystems for smarter industries.",
            },
            {
              icon: "📱",
              title: "Flutter App Development",
              desc: "Building high-performance, cross-platform mobile apps that combine rich UI with exceptional performance.",
            },
            {
              icon: "💻",
              title: "Next.js Web Platforms",
              desc: "Developing modern, SEO-friendly, and scalable web applications using Next.js and React frameworks.",
            },
            {
              icon: "⚙️",
              title: "Qt / QML Applications",
              desc: "Delivering robust cross-platform desktop and embedded GUI applications tailored for industrial and enterprise needs.",
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

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Company Overview
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Ankiom Soft India LLP (LLPIN: <strong>AAC-3011</strong>) was
            incorporated in 2014 and operates from Bengaluru, Karnataka. The
            company provides software development, embedded systems, IoT, and IT
            consulting services to clients across automotive, telecom, and
            enterprise domains.
          </p>
          
        </div>
      </section>

      <Footer5 />
    </>
  );
}
