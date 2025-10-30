"use client";

import { motion } from "framer-motion";
import { LuLifeBuoy } from "react-icons/lu";

export default function IntroductionSection() {
  return (
    <section className="py-16 px-6 bg-white flex justify-center">
      <div className="max-w-[850px] w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[22px] font-semibold mb-4 text-gray-900 text-left"
        >
          Introduction to Embedded Systems
        </motion.h2>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border border-gray-200 bg-white rounded-md shadow-sm p-5 flex gap-4 items-center"
        >
          {/* Icon */}
          <div className="flex-shrink-0 text-gray-600 flex items-center justify-center">
            <LuLifeBuoy size={22} />
          </div>

          {/* Text */}
          <p className="text-gray-800 text-[14px] leading-relaxed font-extrabold text-left">
            Embedded systems are specialized computer systems designed to perform
            specific tasks within larger devices or systems. They often involve
            microcontrollers, which are compact integrated circuits that control
            the functionality of these systems. The advantages of using embedded
            systems include increased efficiency, reliability, and real-time
            responsiveness, making them ideal for applications ranging from
            consumer electronics to industrial automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
