"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRobot, FaMicrochip, FaWifi, FaChartLine } from "react-icons/fa";

export default function Services5() {
  const services = [
    {
      icon: <FaRobot size={36} />,
      title: "Next.js Application Services",
      desc: "Fast, scalable, and SEO-optimized web apps built with Next.js.",
      link: "/nextjs",
    },
    {
      icon: <FaMicrochip size={36} />,
      title: "Embedded Systems",
      desc: "Custom embedded solutions for industrial and consumer applications.",
      link: "/embedded",
    },
    {
      icon: <FaWifi size={36} />,
      title: "IoT Development",
      desc: "End-to-end IoT solutions from sensors to cloud platforms.",
      link: "/iot",
    },
    {
      icon: <FaChartLine size={36} />,
      title: "Flutter Application Services",
      desc: "Cross-platform mobile apps with native performance using Flutter.",
      link: "/flutter",
    },
    {
      icon: <FaChartLine size={36} />,
      title: "QT-QML Application Services",
      desc: "High-performance GUI apps with modern design using Qt and QML.",
      link: "/services",
    },
  ];

  return (
    <section id="services5" className="py-20 bg-[#f9fcff]">
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
          <div
            key={index}
            className="group relative bg-white p-8 rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl overflow-hidden"
          >
            {/* top gradient bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6366F1] to-[#00C9FF] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>

            {/* inner tilting content */}
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

            {/* Learn More link */}
            <div className="mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Link
                href={service.link}
                className="font-medium text-[#6C63FF] hover:text-[#7E74FF] transition-colors duration-300"
              >
                Learn More 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
