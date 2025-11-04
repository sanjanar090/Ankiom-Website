"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer5 from "../components/Footer5";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const canonicalUrl = "https://www.ankiom.com/careers";
  const siteName = "Ankiom Soft India LLP";
  const pageTitle = "Careers | Ankiom Soft India LLP";
  const pageDescription =
    "Explore career opportunities at Ankiom Soft India LLP — join innovators in IoT, AI, and Embedded Systems to build the connected future.";

  const roles = [
    { title: "React.js Developer", location: "Hyderabad / Remote", type: "Full-time" },
    { title: "Embedded Software Engineer", location: "Bangalore", type: "Full-time" },
    { title: "IoT Solutions Architect", location: "Remote", type: "Full-time" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    if (resumeFile) formData.append("resume", resumeFile);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("✅ Application submitted successfully!");
        e.currentTarget.reset();
        setSelectedRole(null);
        setResumeFile(null);
      } else {
        alert("❌ Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ankiom Soft India LLP",
    url: "https://www.ankiom.com",
    logo: "https://www.ankiom.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/ankiom-soft-india-llp/",
      "https://twitter.com/ankiomsoft",
    ],
    description:
      "Ankiom Soft India LLP specializes in IoT,  Embedded Systems, and digital transformation services.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "India",
    },
    jobPostings: roles.map((role) => ({
      "@type": "JobPosting",
      title: role.title,
      employmentType: role.type,
      hiringOrganization: {
        "@type": "Organization",
        name: "Ankiom Soft India LLP",
        sameAs: "https://www.ankiom.com",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: role.location,
          addressCountry: "IN",
        },
      },
      datePosted: new Date().toISOString(),
      validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      description:
        "Join Ankiom Soft India LLP as a " +
        role.title +
        " to build scalable IoT, AI, and digital solutions shaping the connected future.",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "India",
      },
    })),
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
          siteName,
          type: "website",
          locale: "en_IN",
          images: [
            {
              url: "https://www.ankiom.com/images/careers-banner.jpg",
              width: 1200,
              height: 630,
              alt: "Ankiom Careers",
            },
          ],
        }}
        twitter={{
          handle: "@ankiomsoft",
          site: "@ankiomsoft",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Ankiom careers, IoT jobs, AI jobs, React developer jobs, Embedded systems, India tech company" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ankiom Soft India LLP" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      <motion.section
        className="relative text-white py-48 md:py-56 px-6 text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.98, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950" />
        <motion.div
          className="absolute w-[180%] h-[180%] -top-[40%] -left-[40%] rounded-full 
          bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f6_0deg,#1e3a8a_120deg,#0f172a_240deg,#3b82f6_360deg)] 
          opacity-20 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        />

        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          className="text-6xl font-extrabold mb-6 drop-shadow-2xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Build the Future with Ankiom
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          Founded in 2014, Ankiom Soft India LLP delivers software solutions across IoT, embedded systems,
          and digital transformation. From automotive to healthcare, we build scalable and intelligent
          products for the connected future.
        </motion.p>
      </motion.section>

      <section className="max-w-6xl mx-auto py-10 -mt-25 px-8 space-y-35 pb-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
    
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Open Positions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white border border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.location}</p>
                <p className="text-gray-500 text-xs mb-4">{role.type}</p>
                <button
                  onClick={() => setSelectedRole(role.title)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {selectedRole && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-lg"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                Apply for {selectedRole}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <textarea
                  name="message"
                  placeholder="Why do you want to join Ankiom?"
                  className="w-full border border-gray-300 rounded-lg p-3 h-24"
                />
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3"
                />
                <input type="hidden" name="role" value={selectedRole || ""} />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg text-white font-semibold ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </section>

      <Footer5 />
    </>
  );
}
