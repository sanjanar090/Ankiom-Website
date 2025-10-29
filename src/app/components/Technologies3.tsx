"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

export default function Technologies3() {
  return (
    <>
      <NextSeo
        title="Technologies We Use | Flutter App Development | Ankiom"
        description="Explore the technologies Ankiom uses to build robust Flutter applications — Flutter SDK, Dart, CI/CD, backend integrations, and more."
        canonical="https://www.ankiom.com/flutter"
      />

      <section className="mx-auto my-10 px-4 text-center justify-center">
        <motion.h1
          className="text-[22px] font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technologies We Use
        </motion.h1>

        <motion.p
          className="text-[16px] text-[#0D1A1C] max-w-3xl mx-auto tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We leverage a comprehensive set of technologies to build robust and
          scalable Flutter applications, including Flutter SDK & Dart, state
          management, UI & custom widgets, backend & cloud integrations,
          plugins & packages, testing & DevTools, CI/CD automation, FFI & native modules.
        </motion.p>
      </section>
    </>
  );
}
