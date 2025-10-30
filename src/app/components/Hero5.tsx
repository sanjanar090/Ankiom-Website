"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faNetworkWired,
  faBrain,
  faSatellite,
} from "@fortawesome/free-solid-svg-icons";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Hero() {
  const canonicalUrl = "https://ankiom.com"; // Update if this Hero is on a specific route (e.g., /embedded)

  const organizationJSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ankiom Technologies",
    url: "https://ankiom.com",
    logo: "https://ankiom.com/images/logo.png",
    sameAs: [
      "https://in.linkedin.com/company/ankiom-soft-india",
      "https://twitter.com/ankiomsoftindia",
    ],
  };

  const webPageJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonicalUrl,
    name: "AI-Powered Embedded Systems & IoT Solutions | Ankiom",
    description:
      "Explore AI-powered embedded systems and IoT solutions by Ankiom Technologies — delivering intelligent, efficient, and reliable innovations for connected industries.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      url: "https://ankiom.com",
      name: "Ankiom Technologies",
    },
  };

  const serviceJSONLD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI-Powered Embedded Systems & IoT Solutions",
    provider: {
      "@type": "Organization",
      name: "Ankiom Technologies",
      url: "https://ankiom.com",
      logo: "https://ankiom.com/images/logo.png",
    },
    serviceType: "Embedded Systems & IoT",
    description:
      "Design and development of AI-powered embedded systems and IoT solutions for smart connectivity and automation.",
    areaServed: {
      "@type": "Place",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      price: "Custom Quote",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* ✅ SEO Setup */}
      <NextSeo
        title="AI-Powered Embedded Systems & IoT Solutions | Ankiom"
        description="Explore AI-powered embedded systems and IoT services by Ankiom Technologies — empowering industries with intelligent, efficient, and connected innovations."
        canonical={canonicalUrl}
        openGraph={{
          type: "website",
          url: canonicalUrl,
          title: "AI-Powered Embedded Systems & IoT Solutions | Ankiom",
          description:
            "Designing and building intelligent, efficient, and reliable embedded solutions for the future of connectivity.",
          images: [
            {
              url: "https://ankiom.com/images/embedded-hero.png",
              width: 1200,
              height: 630,
              alt: "AI-powered embedded systems and IoT solutions by Ankiom",
            },
          ],
          siteName: "Ankiom Technologies",
          locale: "en_IN",
        }}
        twitter={{
          handle: "@AnkiomOfficial",
          site: "@AnkiomOfficial",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="author" content="Ankiom Technologies" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="theme-color" content="#0f172a" />
      </Head>

      {/* ✅ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationJSONLD,
            webPageJSONLD,
            serviceJSONLD,
          ]),
        }}
      />

      {/* ✅ Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center w-screen min-h-screen overflow-hidden text-white -mt-24"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          background:
            "linear-gradient(to bottom right, #0f172a 0%, #111827 30%, #1e293b 85%)",
        }}
      >
        {/* Stars background */}
        <div className="absolute inset-0 opacity-60 z-0 animate-[moveStarsUp_40s_linear_infinite] bg-[radial-gradient(1.2px_1.2px_at_10%_20%,white_50%,transparent_52%),radial-gradient(1px_1px_at_40%_30%,white_50%,transparent_52%),radial-gradient(1.3px_1.3px_at_75%_25%,white_50%,transparent_52%),radial-gradient(1.1px_1.1px_at_65%_70%,white_50%,transparent_52%),radial-gradient(1.2px_1.2px_at_20%_85%,white_50%,transparent_52%)] bg-[length:250px_250px]" />

        {/* Main content */}
        <div className="relative z-10 grid items-center max-w-6xl gap-16 px-8 mx-auto md:grid-cols-2 transform -translate-y-14 md:-translate-y-20">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl opacity-0 animate-[fadeIn_1s_ease_forwards]">
              AI-Powered Embedded Systems & IoT Solutions
            </h1>
            <p className="mb-8 text-lg text-white/80 opacity-0 animate-[fadeIn_1.5s_ease_forwards]">
              Transforming industries through intelligent connectivity and
              cutting-edge technology.
            </p>

            <div className="flex gap-4 opacity-0 animate-[fadeIn_2s_ease_forwards]">
              <button className="relative inline-block px-8 py-3 font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-cyan-400 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:left-[100%]" />
              </button>

              <button className="px-8 py-3 font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Floating visuals */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute w-full h-full">
              <div className="absolute top-[25%] left-[25%] w-[35%] h-[2px] bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.5)] animate-pulse"></div>
              </div>
              <div className="absolute top-[40%] left-[28%] w-[32%] h-[2px] bg-gradient-to-r from-cyan-400/50 to-blue-400/50 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.5)] animate-pulse [animation-delay:0.25s]"></div>
              </div>
              <div className="absolute top-[55%] left-[25%] w-[35%] h-[2px] bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.5)] animate-pulse [animation-delay:0.5s]"></div>
              </div>
            </div>

            {[
              { icon: faMicrochip, label: "AI Chips", pos: "top-[18%] left-[10%]" },
              { icon: faNetworkWired, label: "IoT Network", pos: "top-[18%] right-[15%]" },
              { icon: faBrain, label: "Machine Learning", pos: "top-[48%] left-[10%]" },
              { icon: faSatellite, label: "Smart Sensors", pos: "top-[58%] right-[15%]" },
            ].map((card, i) => (
              <div
                key={i}
                className={`absolute flex flex-col items-center gap-2 p-4 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-xl animate-[float_6s_ease-in-out_infinite] ${card.pos}`}
                style={{ animationDelay: `${i * 1.2}s` }}
              >
                <FontAwesomeIcon icon={card.icon} className="text-2xl text-cyan-400" />
                <span>{card.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 animate-[bounce_2s_infinite]">
          <div className="relative w-[2px] h-[30px] bg-white/50">
            <div className="absolute bottom-0 left-[-3px] w-2 h-2 border-r-2 border-b-2 border-white/50 rotate-45"></div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: none;
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-20px) rotate(2deg);
            }
            66% {
              transform: translateY(-10px) rotate(-2deg);
            }
          }
          @keyframes moveStarsUp {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 0 -1000px;
            }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            40% {
              transform: translateX(-50%) translateY(-10px);
            }
            60% {
              transform: translateX(-50%) translateY(-5px);
            }
          }
        `}</style>
      </section>
    </>
  );
}
