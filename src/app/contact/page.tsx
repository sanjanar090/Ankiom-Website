"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer5 from "../components/Footer5";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const canonicalUrl = "https://www.ankiom.com/contact";
  const siteName = "Ankiom Technologies";
  const pageTitle = "Contact Us | Ankiom Soft India LLP";
  const pageDescription =
    "Get in touch with Ankiom Soft India LLP for software development, embedded systems, and IoT solutions. We're here to discuss your project needs and ideas.";
  const imageUrl = "https://www.ankiom.com/images/contact-og.jpg";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: "https://www.ankiom.com",
    logo: "https://www.ankiom.com/images/logo.png",
    sameAs: [
      "https://twitter.com/ankiom_official",
      "https://www.linkedin.com/company/ankiom",
      "https://github.com/ankiom",
      "https://www.youtube.com/@ankiom",
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: "https://www.ankiom.com/images/logo.png",
      },
    },
  };

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.message);
      if (data.success) setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: pageTitle,
          description: pageDescription,
          type: "website",
          locale: "en_IN",
          siteName,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: "Contact Ankiom Soft India LLP",
            },
          ],
        }}
        twitter={{
          handle: "@ankiom_official",
          site: "@ankiom_official",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "contact ankiom, ankiom india, software development contact, iot company contact, embedded systems company, ankiom technologies",
          },
          { name: "author", content: "Ankiom Technologies" },
          { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
          { name: "language", content: "English" },
        ]}
      />

      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ankiom_official" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, contactSchema]),
          }}
        />
      </Head>

      <Navbar />

      <motion.section
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
              Get in Touch with <span className="text-blue-600">ANKIOM SOFT INDIA LLP</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status && (
              <p
                className={`mt-4 text-center text-sm ${
                  status.includes("✅")
                    ? "text-green-600"
                    : status.includes("⚠️")
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
              >
                {status}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              <strong>India Office:</strong> ANKIOM SOFT INDIA LLP, #2322, 3rd FLOOR, BLOCK No.II,
              JANAPRIYA HANUMAREDDY COMPLEX (ARDENTE OFFICE ONE), Sy.No.5, HOODI VILLAGE,
              K.R.PURAM HOBLI, BANGALORE SOUTH TALUK, BANGALORE, PIN: 560048, KARNATAKA, INDIA.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +91 7090703720
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@ankiom.com" className="text-blue-600 hover:underline">
                info@ankiom.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Sri Lanka Office:</strong> #36, Barnes Place, Colombo 07, Sri Lanka
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Footer5 />
    </>
  );
}
