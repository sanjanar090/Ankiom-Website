"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const canonicalUrl = "https://ankiom.com";
  const router = useRouter();

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

  return (
    <>
      <NextSeo
        title="AI-Powered Embedded Systems & IoT Solutions | Ankiom"
        description="Explore AI-powered embedded systems and IoT services by Ankiom Technologies — empowering industries with intelligent, efficient, and connected innovations."
        canonical={canonicalUrl}
      />
      <Head>
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJSONLD),
          }}
        />
      </Head>

      <section
        id="home"
        className="relative flex items-center justify-center w-screen min-h-screen overflow-hidden text-white -mt-24"
        style={{
          background:
            "linear-gradient(to bottom right, #0f172a 0%, #111827 30%, #1e293b 85%)",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <div className="absolute inset-0 opacity-70 z-0 animate-[moveStarsUp_40s_linear_infinite] bg-[radial-gradient(1.4px_1.4px_at_12%_18%,white_50%,transparent_52%),radial-gradient(1px_1px_at_40%_32%,white_50%,transparent_52%),radial-gradient(1.6px_1.6px_at_78%_22%,white_50%,transparent_52%),radial-gradient(1.1px_1.1px_at_65%_70%,white_50%,transparent_52%),radial-gradient(1.3px_1.3px_at_22%_85%,white_50%,transparent_52%)] bg-[length:260px_260px]" />

        <div className="relative z-10 grid items-center max-w-6xl gap-16 px-8 mx-auto md:grid-cols-2">
          {/* === LEFT SIDE TEXT === */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block opacity-0 translate-y-8 animate-[slideInUp_0.8s_ease_0.2s_forwards]">
                AI-Powered
              </span>
              <span className="block opacity-0 translate-y-8 animate-[slideInUp_0.8s_ease_0.4s_forwards]">
                Embedded Systems &
              </span>
              <span className="block opacity-0 translate-y-8 animate-[slideInUp_0.8s_ease_0.6s_forwards]">
                IoT Solutions
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 opacity-0 animate-[fadeIn_1s_ease_0.8s_forwards]">
              Transforming industries through intelligent connectivity and
              cutting-edge technology.
            </p>

            <div className="flex gap-4 opacity-0 animate-[fadeIn_1s_ease_1s_forwards]">
              <button
                className="relative inline-block px-8 py-3 font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-cyan-400 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => router.push("/contact")}
              >
                <span className="relative z-10">Get Quote</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:left-[100%]" />
              </button>
            </div>
          </div>

          {/* === RIGHT SIDE IMAGE (Man Photo) === */}
          <div className="relative h-[500px] flex items-center justify-center">
            <img
              src="/images/leader.png" // move your uploaded man image to /public/images/man.png
              alt="Professional"
              className="rounded-2xl shadow-2xl w-[516px] h-[595px] object-cover"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[bounce_2s_infinite]">
          <div className="w-[2px] h-[30px] bg-white/50 relative">
            <div className="absolute bottom-0 left-[-3px] w-[8px] h-[8px] border-r-2 border-b-2 border-white/50 rotate-45"></div>
          </div>
        </div>

        {/* === Styles === */}
        <style jsx>{`
          @keyframes slideInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
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

          @keyframes floatBox {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
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
