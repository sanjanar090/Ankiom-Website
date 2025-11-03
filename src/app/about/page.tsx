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

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ankiom.com/#organization",
        name: "Ankiom Soft India LLP",
        url: "https://ankiom.com",
        logo: "https://ankiom.com/images/newankiom2.jpg",
        sameAs: [
          "https://www.linkedin.com/company/ankiomsoft/",
          "https://twitter.com/ankiomsoft",
        ],
        description:
          "Ankiom Soft India LLP is a technology firm delivering intelligent, connected, and scalable software and IoT solutions.",
        foundingDate: "2014",
        founder: {
          "@type": "Person",
          name: "Ankiom Founders Team",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-XXXXXXXXXX",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bengaluru, Karnataka",
          addressLocality: "Bengaluru",
          addressRegion: "KA",
          postalCode: "560001",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://ankiom.com/#website",
        url: "https://ankiom.com",
        name: "Ankiom Soft India LLP",
        publisher: {
          "@id": "https://ankiom.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://ankiom.com/about#webpage",
        url: "https://ankiom.com/about",
        name: "About Ankiom Soft India LLP",
        description:
          "Learn about Ankiom Soft India LLP — our vision, mission, expertise, and company culture built around innovation and collaboration.",
        isPartOf: {
          "@id": "https://ankiom.com/#website",
        },
        about: {
          "@id": "https://ankiom.com/#organization",
        },
      },
    ],
  };

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
              url: "https://ankiom.com/images/newankiom2.jpg",
              width: 1200,
              height: 630,
              alt: "Ankiom Soft India LLP - About Us",
            },
          ],
        }}
        twitter={{
          handle: "@ankiomsoft",
          site: "@ankiomsoft",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Ankiom Soft India LLP, About Ankiom, IoT solutions, Embedded systems, Flutter apps, Next.js web development, Qt QML applications, software engineering, Bengaluru tech company",
          },
          { name: "author", content: "Ankiom Soft India LLP" },
          { name: "robots", content: "index, follow" },
        ]}
      />

      {/* ✅ Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <NavbarReuse />

      {/* HERO SECTION */}
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
              Building Smart, Scalable & Connected Solutions
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
           Ankiom Soft India LLP is a Bengaluru-based technology company specializing in embedded systems, IoT, and software development.
          </motion.p>
        </div>
      </motion.section>

      {/* WHO WE ARE */}
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
           Founded in 2014 and headquartered in Bengaluru, Ankiom Soft India LLP specializes in embedded systems, IoT engineering, automation, and product lifecycle services. The company supports custom software product development, desktop-to-mobile applications, QA/testing and cloud-hybrid deployments for clients across automotive, telecom and consumer-electronics sectors. Our team blends innovation with deep technical expertise to deliver robust, scalable and intelligent solutions for global clients.          </p>
        </motion.div>
      </section>

      {/* VISION & MISSION */}
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
              To lead the future of intelligent, connected, and scalable technologies, transforming ideas into impactful digital experiences across industries.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To engineer smart, secure, and high-performance solutions by uniting embedded systems, IoT, and cloud innovation — empowering businesses to build the future, faster.
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
{/* CORE EXPERTISE */}
<section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
  <motion.h3
    className="text-3xl font-semibold text-center mb-10 text-gray-900"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Our Core Expertise
  </motion.h3>
<div className="flex flex-col items-center">
  {/* Top Row (3 cards) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        icon: "🌐",
        title: "Embedded & IoT Systems",
        desc: "Engineering reliable device firmware, hardware integration, and connected IoT ecosystems for smarter industries.",
      },
      {
        icon: "⚙️",
        title: "Qt / QML Applications",
        desc: "Delivering robust cross-platform desktop and embedded GUI applications tailored for industrial and enterprise needs.",
      },
      {
        icon: "💻",
        title: "Web & Cloud Platforms",
        desc: "Developing modern, scalable, and secure applications using React, Next.js, and cloud-native architectures.",
      },
    ].map((val, i) => (
      <motion.div
        key={val.title}
        className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition-transform hover:-translate-y-2 w-[280px]"
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

  {/* Bottom Row (2 centered cards) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mt-8 md:mt-10">
    {[
      {
        icon: "📱",
        title: "Cross-Platform Mobile Apps",
        desc: "Building performant mobile solutions with seamless user experiences across Android, iOS, and embedded devices.",
      },
      {
        icon: "🎨",
        title: "UI / UX Design Services",
        desc: "Crafting intuitive, visually engaging digital experiences focused on usability, accessibility, and brand impact.",
      },
    ].map((val, i) => (
      <motion.div
        key={val.title}
        className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition-transform hover:-translate-y-2 w-[280px]"
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
</div>




  <motion.div
    className="text-center mt-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
   
  </motion.div>
</section>

<section className="bg-white py-10 border-t border-gray-100 relative z-10">
  <div className="max-w-6xl mx-auto px-6">
    <motion.h3
      className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Life at Ankiom
    </motion.h3>

    <motion.p
      className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      At Ankiom, work is a celebration. We foster an open, team-driven culture that values collaboration, continuous learning, and professional growth. Join us to be part of building meaningful, tech-driven solutions in a supportive environment.
    </motion.p>

    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
      {[
        {
          title: "Open & Collaborative Culture",
          desc: "We encourage open communication and cross-team collaboration to solve complex challenges together.",
          color: "from-[#F8FBFF] to-[#EEF5FF]",
        },
        {
          title: "Learning & Growth",
          desc: "Continuous learning is core to our teams — we invest in training, exposure and career development opportunities.",
          color: "from-[#EEF5FF] to-[#F5F8FF]",
        },
        {
          title: "Innovation & Impact",
          desc: "We build embedded and IoT solutions at scale, enabling our clients to innovate and perform.",
          color: "from-[#F5F8FF] to-[#F8FBFF]",
        },
        {
          title: "Recognition & Ownership",
          desc: "You’ll own your work and be recognised for your contributions in a high-trust environment.",
          color: "from-[#F8FBFF] to-[#EEF5FF]",
        },
        {
          title: "Work-Life Balance",
          desc: "We aim for a balanced work experience so you can bring your best self to both work and life.",
          color: "from-[#F5F8FF] to-[#F8FBFF]",
        },
        {
          title: "Supportive Team Environment",
          desc: "Our teams thrive on mentorship, peer support and shared problem-solving across domains.",
          color: "from-[#EEF5FF] to-[#F8FBFF]",
        },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          className={`rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${card.color}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            {card.title}
          </h4>
          <p className="text-gray-700 leading-relaxed">{card.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="text-center mt-20 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <blockquote className="italic text-lg text-gray-600 leading-relaxed">
        “At Ankiom, work is a celebration. Strong people-management practices and an open work culture ensure that each day is personally and professionally satisfying.”  
      </blockquote>
      <p className="mt-4 text-sm text-gray-500">
       — That’s the Ankiom way.
      </p>
    </motion.div>
  </div>
</section>


      <Footer5 />
    </>
  );
}
