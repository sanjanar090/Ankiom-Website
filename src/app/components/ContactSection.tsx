"use client";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/navigation"; // ✅ Add this import

interface ContactSectionProps {
  heading: string;
  description?: string;
  buttonText?: string;
  className?: string;
}

export default function ContactSection({
  heading,
  description = "Get in touch with our experts to discuss your specific needs and explore how Ankiom can help you achieve your business goals.",
  buttonText = "Get Quote",
  className = "py-16 px-5 mb-10",
}: ContactSectionProps) {

  const router = useRouter(); // ✅ Initialize router

  return (
    <>
      {/* ...SEO + Head remain unchanged... */}

      <motion.section
        id="contact"
        className={`bg-white text-center ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-[28px] md:text-[36px] mb-7 font-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-[14px] md:text-[16px] mb-7 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {description}
        </motion.p>

        {/* ✅ Added navigation to /contact here */}
        <motion.button
          onClick={() => router.push("/contact")}
          className="bg-[#1294D4] text-white text-[18px] px-8 py-4 rounded-xl font-medium shadow-md hover:bg-[#004FCC] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {buttonText}
        </motion.button>

        <div className="sr-only">
          <p>
            Contact Ankiom to discuss IoT solutions, automation services, and
            digital transformation projects. Get a quote or schedule a
            consultation with our technology experts.
          </p>
        </div>
      </motion.section>
    </>
  );
}
