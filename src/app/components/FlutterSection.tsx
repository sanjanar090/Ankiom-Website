"use client";

import Image from "next/image";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

import image1 from "../assets/imageone.jpg";
import image2 from "../assets/imagetwo.jpg";
import image3 from "../assets/imagethree.jpg";
import image4 from "../assets/imagefour.jpg";
import image5 from "../assets/imagefive.png";

export default function FlutterSection() {
  const cards = [
    {
      img: image1,
      title: "Cross-Platform Reach",
      desc: "Reach a wider audience by deploying your app on multiple platforms (iOS, Android, web, desktop) from a single codebase.",
    },
    {
      img: image2,
      title: "High Performance",
      desc: "Flutter apps deliver native-like performance, ensuring smooth and responsive user experiences.",
    },
    {
      img: image3,
      title: "Rapid Iteration & Hot Reload",
      desc: "Experience faster development cycles with hot reload, allowing you to see changes instantly without restarting the app.",
    },
    {
      img: image4,
      title: "Customizable UI & Rich Widgets",
      desc: "Create unique and engaging user interfaces with Flutter's extensive library of customizable widgets.",
    },
    {
      img: image5,
      title: "Developer Tools & CI/CD Automation",
      desc: "Streamline your development workflow with powerful developer tools and seamless integration with CI/CD pipelines.",
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto my-3 p-10 bg-white rounded-3xl">
      {/* ✅ SEO Meta Tags */}
      <NextSeo
        title="Introduction to Flutter | Ankiom"
        description="Learn about Flutter's capabilities — a UI toolkit to build beautiful, high-performance apps for any platform from a single codebase."
        canonical="https://www.ankiom.com/flutter"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Flutter introduction, Flutter benefits, cross-platform apps, hot reload, Flutter widgets, Ankiom Flutter development",
          },
        ]}
      />

      {/* ✅ Introduction Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-[22px] mb-4 -mt-1">Introduction to Flutter</h2>
        <p className="text-[16px] max-w-5xl mx-auto text-base">
          Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It offers a rich set of widgets, tools, and APIs to create visually appealing and responsive user interfaces. With Flutter, you can achieve native performance, hot-reload for rapid development, and a consistent user experience across all platforms. Its single-codebase approach significantly reduces development time and costs.
        </p>
      </motion.div>

      {/* ✅ Landscape Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="font-bold text-[22px] mb-4">Flutter Landscape & Adoption</h2>
        <p className="text-[16px] max-w-3xl mx-auto text-base">
          Flutter has gained widespread adoption across various industries due to its efficiency, performance, and versatility. Many leading companies leverage Flutter to build their applications, benefiting from its cross-platform capabilities and rich feature set.
        </p>
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-17 gap-y-25 mt-12 justify-items-start"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }}
>
  {cards.map((card, index) => (
    <motion.div
      key={index}
      className="flex flex-col text-left w-[230px] min-h-[420px]"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ✅ Added more bottom margin under image */}
      <div className="relative w-[215px] h-[200px] overflow-hidden rounded-xl mb-2  hover:scale-[1.04] transition-transform duration-300 ease-out">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 230px"
        />
      </div>

      {/* ✅ Clearer separation between title and description */}
      <h3 className="text-[15px] font-semibold text-gray-900 mb-3 leading-snug">
        {card.title}
      </h3>

      {/* ✅ Comfortable paragraph line height & spacing */}
      <p className="text-[14px] text-[#4D8C99] leading-[1.8] tracking-wide pr-2">
        {card.desc}
      </p>
    </motion.div>
  ))}
</motion.div>


      </motion.div>
    </section>
  );
}
