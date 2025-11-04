"use client";

import { useState, useEffect } from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMicrochip,
  faWifi,
  faMobileAlt,
  faCubes,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const target = { projects: 150, clients: 50, years: 5 };
    const duration = 2000;
    const incrementTime = 20;
    const steps = duration / incrementTime;

    const projectStep = target.projects / steps;
    const clientStep = target.clients / steps;
    const yearStep = target.years / steps;

    const timer = setInterval(() => {
      setProjects((prev) =>
        prev + projectStep >= target.projects ? target.projects : prev + projectStep
      );
      setClients((prev) =>
        prev + clientStep >= target.clients ? target.clients : prev + clientStep
      );
      setYears((prev) =>
        prev + yearStep >= target.years ? target.years : prev + yearStep
      );
    }, incrementTime);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: faLaptopCode, label: "Next.js Application Services" },
    { icon: faMicrochip, label: "Embedded Systems" },
    { icon: faWifi, label: "IoT Development" },
    { icon: faMobileAlt, label: "Flutter Application Services" },
    { icon: faCubes, label: "QT-QML Application Services" },
    {icon: faPalette, label: "UI/UX Design Services"}
  ];

  return (
    <>
      <NextSeo
        title="About Ankiom | Innovating with  IoT & Embedded Systems"
        description="Ankiom is a technology company delivering Next.js, IoT, and embedded system solutions that connect intelligence and innovation across industries."
        canonical="https://ankiom.com/about"
        openGraph={{
          url: "https://ankiom.com/about",
          title: "About Ankiom | Innovating with  IoT & Embedded Systems",
          description:
            "Learn how Ankiom bridges  IoT, and embedded solutions to power intelligent digital transformation.",
          images: [
            {
              url: "https://ankiom.com/images/about-banner.png",
              width: 1200,
              height: 630,
              alt: "Ankiom team innovating IoT and Embedded Systems"
            },
          ],
          site_name: "Ankiom",
          type: "website",
        }}
        twitter={{
          handle: "@ankiom",
          site: "@ankiom",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Ankiom, AI, IoT, Embedded Systems, Next.js, Flutter, QT-QML, Software Development, Tech Solutions, Bangalore",
          },
          {
            name: "author",
            content: "Ankiom Technologies",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />

      <ArticleJsonLd
        type="Organization"
        url="https://ankiom.com/about"
        title="About Ankiom"
        images={["https://ankiom.com/images/about-banner.png"]}
        datePublished="2023-01-01"
        dateModified="2025-10-30"
        authorName="Ankiom Technologies"
        description="Ankiom specializes in AI, IoT, and embedded systems development for global businesses."
        publisherName="Ankiom Technologies"
        publisherLogo="https://ankiom.com/images/logo.png"
      />

      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[2.5rem] font-bold mb-6 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Innovating the Future
              </h2>

              <p className="text-[1.125rem] text-gray-600 leading-relaxed mb-10">
                We specialize in creating intelligent systems that bridge the gap
                between physical and digital worlds. Our expertise in AI, embedded
                systems, and IoT enables us to deliver cutting-edge solutions that
                drive innovation across industries.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <span className="block text-[2.5rem] font-bold text-indigo-500 mb-1">
                    {Math.ceil(projects)}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    Projects Completed
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-[2.5rem] font-bold text-indigo-500 mb-1">
                    {Math.ceil(clients)}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    Happy Clients
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-[2.5rem] font-bold text-indigo-500 mb-1">
                    {Math.ceil(years)}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-8 mt-6">
                <div className="grid grid-cols-2 gap-5 w-[455px]">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-r from-green-500 to-cyan-500 
        rounded-2xl p-5 flex flex-col items-center justify-center 
        text-white text-xl cursor-pointer transform transition-all duration-300 
        hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] h-[110px]"
            >
              <FontAwesomeIcon icon={item.icon} />
              <span
                className="absolute bottom-3 text-sm font-medium opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 text-center px-2"
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
