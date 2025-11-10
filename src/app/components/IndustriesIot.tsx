"use client";

import Image from "next/image";
import manufacturingImg from "../assets/manufacturingg.png";
import utilitiesImg from "../assets/utilitiess.png";
import smartCitiesImg from "../assets/smartcities.png";
import logisticsImg from "../assets/logisticss.png";
import healthcareImg from "../assets/healthcaree.png";

export default function IndustriesIot() {
  const industries = [
    {
      img: manufacturingImg,
      title: "Manufacturing",
      description:
        "We provide scalable IoT solutions to streamline manufacturing processes and improve efficiency.",
    },
    {
      img: utilitiesImg,
      title: "Utilities",
      description:
        "We provide advanced monitoring and control systems to optimize energy distribution and reduce waste.",
    },
    {
      img: smartCitiesImg,
      title: "Smart Cities",
      description:
        "Enabling data-driven decisions and sustainable urban development through connected IoT solutions.",
    },
    {
      img: logisticsImg,
      title: "Logistics",
      description:
        "Optimizing supply chains and asset tracking with real-time IoT solutions for logistics.",
    },
    {
      img: healthcareImg,
      title: "Healthcare",
      description:
        "Enabling remote patient monitoring and smart health solutions for improved healthcare outcomes.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 text-center">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left transition-transform hover:scale-105 duration-300"
            >
              <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={industry.img}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-[#000000]">
                {industry.title}
              </h3>
              <p className="text-[#4D8099] text-sm mt-2 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
