"use client";

import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <NextSeo
        title="Ankiom Footer | © 2025 All Rights Reserved"
        description="Ankiom official footer section – ensuring reliability, trust, and innovation in every project."
        canonical="https://ankiom.com/"
      />

      <motion.footer
        className="text-center text-gray-500 text-[16px] py-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        © 2025 Ankiom. All rights reserved.
      </motion.footer>
    </>
  );
}
