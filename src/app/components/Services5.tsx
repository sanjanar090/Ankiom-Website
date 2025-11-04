"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import {
  FaRobot,
  FaMicrochip,
  FaWifi,
  FaChartLine,
  FaPalette,
} from "react-icons/fa";

// ✅ Advanced no-flicker hydration hook
function useMountedOnce() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true)); // waits 1 frame after hydration
    return () => cancelAnimationFrame(t);
  }, []);
  return mounted;
}

export default function Services5() {
  const mounted = useMountedOnce();
  const [ready, setReady] = useState(false);

  // ✅ Delays render slightly for hydration-safe animation
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !ready) return null;

  const services = [
    {
      icon: <FaRobot size={36} aria-label="Next.js Application Services Icon" />,
      title: "Next.js Application Services",
      desc: "Fast, scalable, and SEO-optimized web apps built with Next.js.",
      link: "/nextjs",
    },
    {
      icon: <FaMicrochip size={36} aria-label="Embedded Systems Icon" />,
      title: "Embedded Systems",
      desc: "Custom embedded solutions for industrial and consumer applications.",
      link: "/embedded",
    },
    {
      icon: <FaWifi size={36} aria-label="IoT Development Icon" />,
      title: "IoT Development",
      desc: "End-to-end IoT solutions from sensors to cloud platforms.",
      link: "/iot",
    },
    {
      icon: (
        <FaChartLine size={36} aria-label="Flutter Application Services Icon" />
      ),
      title: "Flutter Application Services",
      desc: "Cross-platform mobile apps with native performance using Flutter.",
      link: "/flutter",
    },
    {
      icon: (
        <FaChartLine size={36} aria-label="QT-QML Application Services Icon" />
      ),
      title: "QT-QML Application Services",
      desc: "High-performance GUI apps with modern design using Qt and QML.",
      link: "/qtqml",
    },
    {
      icon: <FaPalette size={36} aria-label="UI/UX Design Services Icon" />,
      title: "UI/UX Design Services",
      desc: "Designing intuitive, engaging, and visually consistent user experiences that enhance brand identity and usability across all platforms.",
      link: "/uiux",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IoT and App Development Services",
    description:
      "Comprehensive Next.js, Flutter, IoT, and Embedded system development services.",
    provider: {
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://www.ankiom.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital & Embedded Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
          url: `https://www.ankiom.com${s.link}`,
        },
      })),
    },
  };

  return (
    <>
      <NextSeo
        title="Our Services | Ankiom Technologies"
        description="Explore Ankiom's range of services — from Next.js web apps and Flutter mobile apps to IoT and Embedded solutions."
        canonical="https://www.ankiom.com/services"
        openGraph={{
          url: "https://www.ankiom.com/services",
          title: "Our Services | Ankiom Technologies",
          description:
            "Explore Ankiom's range of services — Next.js, Flutter, IoT, and Embedded solutions for the modern digital world.",
          images: [
            {
              url: "https://www.ankiom.com/images/services-banner.jpg",
              width: 1200,
              height: 630,
              alt: "Ankiom Services Overview",
            },
          ],
          site_name: "Ankiom Technologies",
        }}
        twitter={{
          handle: "@ankiomtech",
          site: "@ankiomtech",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next.js, Flutter, IoT, Embedded Systems, Web Development, Mobile Apps, Ankiom Technologies",
          },
          { name: "robots", content: "index, follow" },
        ]}
        additionalLinkTags={[
          { rel: "icon", href: "/favicon.ico" },
          { rel: "canonical", href: "https://www.ankiom.com/services" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ✅ Whole section fade-in after hydration */}
      <motion.section
        id="services5"
        className="py-20 bg-white min-h-screen"
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              background: "linear-gradient(90deg, #6366F1 0%, #00C9FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Services
          </h2>

          <p className="text-gray-600 text-md">
            Comprehensive solutions for the connected world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6366F1] to-[#00C9FF] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>

              <motion.div
                whileHover={{
                  rotateY: -8,
                  rotateX: 5,
                  y: -6,
                  transition: { type: "spring", stiffness: 200, damping: 15 },
                }}
                className="flex flex-col items-start text-left space-y-4 transition-transform duration-500"
              >
                <div
                  className="text-white p-4 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366F1 0%, #00C9FF 100%)",
                    boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>

              <div className="mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <Link
                  href={service.link}
                  className="font-medium text-[#6C63FF] hover:text-[#7E74FF] transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
