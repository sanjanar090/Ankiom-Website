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
            Founded in 2014 and headquartered in Bengaluru, Ankiom Soft India LLP
            specializes in embedded and IoT systems, cloud solutions, mobile
            applications, and web platforms. Our team combines innovation with
            engineering expertise to deliver robust, scalable, and secure
            digital ecosystems for global clients.
          </p>
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

      {/* LIFE AT ANKIOM */}
      <section className="bg-white py-24 border-t border-gray-100 relative z-10">
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
            At Ankiom, work is a celebration. The company fosters an open,
            team-driven work culture that values creativity, collaboration, and
            continuous growth. Employees experience a stimulating environment
            filled with freedom, trust, and recognition — ensuring both personal
            and professional satisfaction.
          </motion.p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Open Work Culture",
                desc: "Ankiom encourages open communication and collaboration, removing obstacles that hinder creativity and innovation.",
                color: "from-cyan-50 to-blue-100",
              },
              {
                title: "Team Spirit & Freedom",
                desc: "The company nurtures an atmosphere of teamwork, empowerment, and fun — helping every individual thrive.",
                color: "from-blue-50 to-indigo-100",
              },
              {
                title: "Continuous Growth",
                desc: "Strong people-management practices ensure that every team member’s professional and personal development is valued.",
                color: "from-sky-50 to-cyan-100",
              },
              {
                title: "Innovation at Core",
                desc: "Employees are inspired to experiment and deliver cutting-edge solutions across IoT, Embedded, and Software domains.",
                color: "from-indigo-50 to-blue-100",
              },
              {
                title: "Recognition & Motivation",
                desc: "Ankiom believes in motivating and recognizing every contribution, building a workplace defined by pride and purpose.",
                color: "from-cyan-50 to-sky-100",
              },
              {
                title: "Work–Life Balance",
                desc: "A balanced, supportive work environment empowers employees to do their best work while enjoying what they do.",
                color: "from-indigo-50 to-blue-100",
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
              “Ankiom has an atmosphere of team spirit, freedom, and fun —
              creating a stimulating environment where innovation thrives and
              every individual grows with purpose.”
            </blockquote>
            <p className="mt-4 text-sm text-gray-500">
              — As described by Ankiom Soft India LLP’s official website
            </p>
          </motion.div>
        </div>
      </section>

      <Footer5 />
    </>
  );
}
