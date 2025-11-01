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
import React from "react";

export default function Hero() {
  const canonicalUrl = "https://ankiom.com";

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

      {/* 🌌 HERO SECTION */}
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
        {/* ✨ Moving Stars */}
        <div className="absolute inset-0 opacity-70 z-0 animate-[moveStarsUp_40s_linear_infinite] bg-[radial-gradient(1.4px_1.4px_at_12%_18%,white_50%,transparent_52%),radial-gradient(1px_1px_at_40%_32%,white_50%,transparent_52%),radial-gradient(1.6px_1.6px_at_78%_22%,white_50%,transparent_52%),radial-gradient(1.1px_1.1px_at_65%_70%,white_50%,transparent_52%),radial-gradient(1.3px_1.3px_at_22%_85%,white_50%,transparent_52%)] bg-[length:260px_260px]" />

        {/* MAIN GRID */}
        <div className="relative z-10 grid items-center max-w-6xl gap-16 px-8 mx-auto md:grid-cols-2">
          {/* LEFT TEXT */}
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
              <button className="relative inline-block px-8 py-3 font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-cyan-400 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get Quote</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:left-[100%]" />
              </button>
            </div>
          </div>

          {/* RIGHT VISUALS */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* SVG Circuit (base) */}
            <svg
              className="absolute w-[450px] h-[450px]"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100 150 H360" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M100 230 H300" stroke="#3b82f6" strokeWidth="1.5" />
              <path d="M100 310 H400" stroke="#3b82f6" strokeWidth="1.5" />

              {[{ x: 360, y: 150 }, { x: 300, y: 230 }, { x: 400, y: 310 }].map(
                (node, i) => (
                  <circle
                    key={i}
                    cx={node.x}
                    cy={node.y}
                    r="6"
                    fill="#06b6d4"
                    className="animate-[glowPulse_2s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                )
              )}

              {[{ y: 150, x2: 360 }, { y: 230, x2: 300 }, { y: 310, x2: 400 }].map(
                (node, i) => (
                  <line
                    key={`pulse-${i}`}
                    x1="100"
                    y1={node.y}
                    x2={node.x2}
                    y2={node.y}
                    stroke="url(#pulseGradient)"
                    strokeWidth="2"
                    strokeDasharray="80 400"
                    className="animate-[movePulse_2s_linear_infinite]"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                )
              )}

              {/* Short–Long Beam Lines */}
              {[
                { x: 360, y: 150, length: 25 },
                { x: 300, y: 230, length: 15 },
                { x: 400, y: 310, length: 40 },
              ].map((beam, i) => (
                <line
                  key={`beam-${i}`}
                  x1={beam.x}
                  y1={beam.y}
                  x2={beam.x + beam.length}
                  y2={beam.y}
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  strokeOpacity="0.9"
                  className="glow-line"
                />
              ))}

              <defs>
                <linearGradient id="pulseGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                  <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* 🌐 CSS Circuit Overlay */}
            <div className="hero-graphic">
              <div className="circuit-board">
                <div className="circuit-line line-1"></div>
                <div className="circuit-line line-2"></div>
                <div className="circuit-line line-3"></div>
                <div className="circuit-node node-1"></div>
                <div className="circuit-node node-2"></div>
                <div className="circuit-node node-3"></div>
              </div>
            </div>

            {/* Floating Cards */}
            {[
              { icon: faMicrochip, label: "AI Chips", pos: "top-[10%] left-[10%]", delay: "0s" },
              { icon: faNetworkWired, label: "IoT Network", pos: "top-[20%] right-[15%]", delay: "1.5s" },
              { icon: faBrain, label: "Machine Learning", pos: "bottom-[30%] left-[5%]", delay: "3s" },
              { icon: faSatellite, label: "Smart Sensors", pos: "bottom-[20%] right-[10%]", delay: "4.5s" },
            ].map((card, i) => (
              <div
                key={i}
                className={`absolute flex flex-col items-center justify-center w-[140px] h-[80px] gap-2 rounded-xl backdrop-blur-md border border-white/20 text-white text-sm font-medium bg-white/10 text-center ${card.pos}`}
                style={{
                  animation: `floatBox 6s ease-in-out infinite`,
                  animationDelay: card.delay,
                }}
              >
                <FontAwesomeIcon icon={card.icon} className="text-[16px]" />
                <span>{card.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[bounce_2s_infinite]">
          <div className="w-[2px] h-[30px] bg-white/50 relative">
            <div className="absolute bottom-0 left-[-3px] w-[8px] h-[8px] border-r-2 border-b-2 border-white/50 rotate-45"></div>
          </div>
        </div>

        {/* 🌈 Extra Animations */}
       <style jsx>{`
  :root {
    --gradient-primary: linear-gradient(90deg, #3b82f6, #06b6d4);
    --secondary-color: #06b6d4;
  }

  /* ⚡ Circuit Animation */
  .hero-graphic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
  }

  .circuit-board {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .circuit-line {
    position: absolute;
    background: var(--gradient-primary);
    border-radius: 2px;
    animation: pulse 2s infinite;
  }

  .line-1 {
    top: 20%;
    left: 10%;
    width: 60%;
    height: 2px;
    animation-delay: 0s;
  }

  /* Shorter angled line */
  .line-2 {
    top: 50%;
    left: 20%;
    width: 40%;
    height: 2px;
    transform: rotate(45deg);
    transform-origin: left;
    animation-delay: 0.5s;
  }

  /* Longer line */
  .line-3 {
    bottom: 30%;
    left: 15%;
    width: 40%;
    height: 2px;
    animation-delay: 1s;
  }

  .circuit-board {
  position: relative;
  width: 100%;
  height: 100%;
}

.circuit-line {
  position: absolute;
  background: var(--gradient-primary);
  border-radius: 2px;
  animation: pulse 2s infinite;
}

  .node-1 {
    top: 18%;
    left: 68%;
    animation-delay: 0s;
  }

  .node-2 {
    top: 48%;
    left: 68%;
    animation-delay: 1s;
  }

  .node-3 {
    bottom: 28%;
    left: 82%;
    animation-delay: 2s;
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px var(--secondary-color);
    }
    50% {
      box-shadow: 0 0 20px var(--secondary-color),
        0 0 30px var(--secondary-color);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }

  /* 🌟 Other existing animations kept same */
  .glow-line {
    filter: drop-shadow(0 0 6px #06b6d4);
    animation: pulse 2s infinite;
  }

  @keyframes steadyGlow {
    0%, 100% {
      filter: drop-shadow(0 0 6px #06b6d4);
    }
    50% {
      filter: drop-shadow(0 0 15px #06b6d4);
    }
  }

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

  @keyframes movePulse {
    0% {
      stroke-dashoffset: 480;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      filter: drop-shadow(0 0 6px #06b6d4);
    }
    50% {
      filter: drop-shadow(0 0 18px #06b6d4);
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
