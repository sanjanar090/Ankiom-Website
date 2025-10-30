"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NextSeo } from "next-seo";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ankiom Client Testimonials",
    itemListElement: testimonials.map((t, index) => ({
      "@type": "Review",
      position: index + 1,
      author: {
        "@type": "Person",
        name: t.author,
      },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      publisher: {
        "@type": "Organization",
        name: "Ankiom Technologies",
      },
    })),
  };

  return (
    <>
      <NextSeo
        title="Client Testimonials | Ankiom Technologies"
        description="Discover how Ankiom Technologies helps global clients achieve digital transformation through IoT, AI, and Embedded Systems."
        canonical="https://www.ankiom.com/testimonials"
        openGraph={{
          url: "https://www.ankiom.com/testimonials",
          title: "Client Testimonials | Ankiom Technologies",
          description:
            "Real success stories from clients who achieved digital transformation with Ankiom's innovative IoT, AI, and software solutions.",
          images: [
            {
              url: "https://www.ankiom.com/images/testimonials-banner.jpg",
              width: 1200,
              height: 630,
              alt: "Ankiom Client Testimonials",
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
              "Ankiom testimonials, client feedback, IoT solutions, AI projects, software services, customer reviews",
          },
          { name: "robots", content: "index, follow" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section
        id="testimonials"
        className="relative py-20 bg-white overflow-hidden"
        aria-label="Client Testimonials"
      >
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 mt-2">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white shadow-lg border border-gray-200 rounded-2xl p-8 md:p-10 relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-6 left-8 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-lg" />
              </div>

              <p className="text-lg text-gray-700 italic leading-relaxed mt-4 mb-8">
                “{testimonials[activeIndex].text}”
              </p>

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center text-lg shadow-md"
                    aria-label={`${testimonials[activeIndex].author} profile icon`}
                  >
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

                <div className="flex text-yellow-400 text-lg" aria-label="5-star rating">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                        bg-indigo-500 hover:bg-indigo-600 text-white 
                        transition-all duration-300 shadow-md hover:ring-2 hover:ring-indigo-300"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </motion.button>

            <div className="flex gap-2" aria-label="Testimonials navigation dots">
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

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center 
                        bg-indigo-500 hover:bg-indigo-600 text-white 
                        transition-all duration-300 shadow-md hover:ring-2 hover:ring-indigo-300"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
