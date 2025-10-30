"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuoteLeft,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Ankiom transformed our manufacturing process with their AI-powered IoT solution. The results exceeded our expectations - 40% increase in efficiency and real-time monitoring capabilities that we never thought possible.",
      author: "Sarah Johnson",
      role: "CTO, InnovateCorp",
    },
    {
      text: "The embedded systems solution they developed for our smart city project is nothing short of revolutionary. Their expertise in AI integration helped us create a truly intelligent urban infrastructure.",
      author: "Michael Chen",
      role: "Director, SmartCity Solutions",
    },
    {
      text: "Working with Ankiom was a game-changer for our healthcare startup. Their IoT platform enabled us to deliver remote patient monitoring with unprecedented accuracy and reliability.",
      author: "Dr. Emily Rodriguez",
      role: "CEO, HealthTech Innovations",
    },
    {
      text: "The data analytics solution they implemented gave us insights we never had before. Their team's deep understanding of both AI and IoT made the entire process seamless and highly effective.",
      author: "David Thompson",
      role: "VP Engineering, DataFlow Systems",
    },
    {
      text: "Ankiom delivered an exceptional AI-powered automation system that revolutionized our production line. Their attention to detail and innovative approach exceeded all our expectations.",
      author: "Lisa Wang",
      role: "Operations Manager, AutoTech Industries",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="relative py-20 bg-white overflow-hidden">
      {/* ✅ Removed background gradient for solid white background */}

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg border border-gray-200 rounded-2xl p-8 md:p-10 relative transition-transform duration-300 hover:-translate-y-1">
          {/* Quote icon */}
          <div className="absolute -top-6 left-8 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-lg" />
          </div>

          {/* Text */}
          <p className="text-lg text-gray-700 italic leading-relaxed mt-4 mb-8">
            {testimonials[activeIndex].text}
          </p>

          {/* Author */}
          <div className="flex items-center justify-between mt-8">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center text-lg shadow-md">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">
                  {testimonials[activeIndex].author}
                </h4>
                <span className="text-sm text-gray-500 font-medium">
                  {testimonials[activeIndex].role}
                </span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                       bg-indigo-500 hover:bg-indigo-600 text-white 
                       transition-all duration-300 hover:scale-110 shadow-md hover:ring-2 hover:ring-indigo-300"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? "bg-indigo-500 scale-110"
                    : "bg-gray-300 hover:bg-indigo-400"
                }`}
              ></span>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                       bg-indigo-500 hover:bg-indigo-600 text-white 
                       transition-all duration-300 hover:scale-110 shadow-md hover:ring-2 hover:ring-indigo-300"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
