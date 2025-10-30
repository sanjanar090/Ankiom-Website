"use client";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Head from "next/head";

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
  return (
    <>
      <NextSeo
        title="Contact Ankiom | IoT Consultation & Support"
        description="Reach out to Ankiom for expert IoT solutions, automation services, and custom business consultations tailored to your goals."
        canonical="https://ankiom.com/contact"
        openGraph={{
          url: "https://ankiom.com/contact",
          title: "Contact Ankiom | IoT Consultation & Support",
          description:
            "Connect with Ankiom’s experts for tailored IoT, automation, and embedded system solutions.",
          images: [
            {
              url: "https://ankiom.com/images/contact-banner.png",
              width: 1200,
              height: 630,
              alt: "Contact Ankiom - IoT Consultation",
            },
          ],
          siteName: "Ankiom",
        }}
        twitter={{
          handle: "@AnkiomTech",
          site: "@AnkiomTech",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Ankiom contact, IoT services, automation solutions, embedded systems, tech consultation, business automation, digital transformation",
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
          {
            rel: "canonical",
            href: "https://ankiom.com/contact",
          },
        ]}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Ankiom",
              description:
                "Get in touch with Ankiom for IoT, automation, and embedded systems consultation.",
              url: "https://ankiom.com/contact",
              publisher: {
                "@type": "Organization",
                name: "Ankiom Technologies",
                logo: {
                  "@type": "ImageObject",
                  url: "https://ankiom.com/images/logo.png",
                },
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </Head>

      {/* ✅ Contact Section Content */}
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

        <motion.button
          className="bg-[#1273D4] text-white text-[18px] px-8 py-4 rounded-xl font-medium shadow-md hover:bg-[#004FCC] transition-all duration-300"
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
