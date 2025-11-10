"use client";

import Image from "next/image";
import strategyImg from "../assets/strategy.png";
import edgeImg from "../assets/edge.png";
import hardwareImg from "../assets/hardwaree.png";
import analyticsImg from "../assets/analytics.png";

export default function IoTServices() {
  const services = [
    {
      img: strategyImg,
      title: "Strategy & Roadmap",
      description:
        "Define your IoT vision and create a tailored roadmap for successful implementation.",
    },
    {
      img: edgeImg,
      title: "Edge & Cloud",
      description:
        "Leverage edge computing and cloud platforms for efficient data processing and management.",
    },
    {
      img: hardwareImg,
      title: "Hardware & Connectivity",
      description:
        "Select and integrate the right hardware and connectivity solutions for your specific needs.",
    },
    {
      img: analyticsImg,
      title: "Analytics",
      description:
        "Gain actionable insights from your IoT data with advanced analytics and reporting.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-12">Our IoT Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
            >
              <div className="w-50 h-48 relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
              <p className="text-[#4D8099] text-sm mt-2 max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
