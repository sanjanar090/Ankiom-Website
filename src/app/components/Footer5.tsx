"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import {
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const router = useRouter();
  

  return (
    <>
      <NextSeo
        title="Ankiom Technologies | Innovating IoT, AI, and Embedded Solutions"
        description="Ankiom is a leading provider of IoT, AI, and embedded system solutions. Connect with us for innovation-driven technology partnerships."
        canonical="https://ankiom.com"
        openGraph={{
          url: "https://ankiom.com",
          title: "Ankiom Technologies | Connected Intelligence for the Future",
          description:
            "Explore Ankiom’s IoT, AI, and embedded solutions driving innovation and digital transformation across industries.",
          siteName: "Ankiom",
          images: [
            {
              url: "https://ankiom.com/images/ankiom-banner.png",
              width: 1200,
              height: 630,
              alt: "Ankiom Technologies - Connected Intelligence",
            },
          ],
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
              "Ankiom, IoT, Embedded Systems, Flutter Application Services, Nextjs Application Services, QT-QML Application Services, Automation, Ankiom Technologies",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "author",
            content: "Ankiom Technologies",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ankiom Technologies",
              url: "https://ankiom.com",
              logo: "https://ankiom.com/images/logo.png",
              description:
                "Ankiom Technologies provides IoT, AI, and embedded system development services, helping industries achieve connected intelligence.",
              sameAs: [
                "https://in.linkedin.com/company/ankiom-soft-india",
                "https://twitter.com/ankiomsoftindia",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7090703720",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: "English",
                },
              ],
            }),
          }}
        />
      </Head>

      <footer
        className="mt-48 bg-[#0b1223] text-white py-26 px-10 relative z-50"
        aria-label="Footer section with company information and social links"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12 items-start pt-6">
            <div className="mt-4">
              <Link href="/" className="flex items-center gap-1 mb-3">
                <motion.img
                  src="/images/logo.png"
                  alt="Ankiom Logo"
                  className="h-12 w-auto -ml-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pioneering the future of connected intelligence.
              </p>
            </div>

            {/* Services Section */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/iot"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    IoT Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flutter"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Flutter Application Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nextjs"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Next.js Application Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Qt-QML Application Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/embedded"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Embedded Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/UI-UX"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    UI/UX Design Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/contact")}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: faLinkedin,
                    url: "https://in.linkedin.com/company/ankiom-soft-india",
                    label: "LinkedIn",
                  },
                  {
                    icon: faTwitter,
                    url: "https://twitter.com/ankiomsoftindia",
                    label: "Twitter",
                  },
                  {
                    icon: faGithub,
                    url: "https://github.com/ankiom",
                    label: "GitHub",
                  },
                 
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Ankiom on ${item.label}`}
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-[#141b2e] text-gray-300 hover:bg-[#2b3461] hover:text-white hover:-translate-y-1 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Ankiom. All rights reserved.
            </p>
          </div>

          <div className="sr-only">
            <p>
              Ankiom Technologies provides IoT and embedded services for global
              industries. Follow us on social media or contact us for partnership
              opportunities.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
