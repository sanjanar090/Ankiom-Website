"use client";

import { NextSeo } from "next-seo";
import Head from "next/head";

export default function DesignProcess() {
  const steps = [
    { title: "Empathize", description: "Understand user needs and pain points through research." },
    { title: "Define", description: "Clearly articulate the problem to be solved." },
    { title: "Ideate", description: "Generate a wide range of creative solutions." },
    { title: "Prototype", description: "Create interactive models to test and refine." },
    { title: "Test", description: "Evaluate solutions with real users for feedback." },
  ];

  return (
    <>
      <NextSeo
        title="Design Process | UI/UX Design Services | Ankiom Soft India LLP"
        description="Explore Ankiom Soft India LLP’s user-centered design process — from empathy and ideation to prototyping and testing for exceptional UI/UX design solutions."
        canonical="https://www.ankiom.com/uiux-design-process"
        openGraph={{
          type: "website",
          url: "https://www.ankiom.com/UI/UX",
          title: "Design Process | UI/UX Design | Ankiom Soft India LLP",
          description:
            "Ankiom Soft India LLP follows a structured UI/UX design process — Empathize, Define, Ideate, Prototype, and Test to craft user-focused digital experiences.",
          images: [
            {
              url: "https://www.ankiom.com/images/uiux-design-process-preview.jpg",
              width: 1200,
              height: 630,
              alt: "UI/UX Design Process | Ankiom Soft India LLP",
            },
          ],
          site_name: "Ankiom Soft India LLP",
        }}
        twitter={{
          handle: "@ankiomofficial",
          site: "@ankiomofficial",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "UI UX Design Process, UX Research, Design Thinking, Wireframes, Prototyping, User Testing, Ankiom Soft India LLP, UI UX Agency, Product Design, Empathize Define Ideate Prototype Test",
          },
          { name: "author", content: "Ankiom Soft India LLP" },
          { name: "robots", content: "index, follow" },
          { name: "language", content: "en" },
          { name: "revisit-after", content: "7 days" },
        ]}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Design Process | UI/UX Design Services | Ankiom Soft India LLP",
              description:
                "Ankiom Soft India LLP’s design process emphasizes user research, empathy, ideation, prototyping, and testing to create human-centered experiences.",
              url: "https://www.ankiom.com/UI/UX",
              publisher: {
                "@type": "Organization",
                name: "Ankiom Soft India LLP",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.ankiom.com/images/logo.png",
                },
              },
              mainEntity: {
                "@type": "HowTo",
                name: "UI/UX Design Process",
                step: steps.map((step) => ({
                  "@type": "HowToStep",
                  name: step.title,
                  text: step.description,
                })),
              },
            }),
          }}
        />
      </Head>

      {/* ✅ Page Content (Unchanged) */}
      <section className="max-w-xl mx-auto py-6 px-3 mt-5">
        <h1 className="text-[22px] font-bold mb-10 text-center">Our Design Process</h1>

        <div className="relative pl-10">
          <div className="absolute left-[18px] top-0 bottom-[42px] border-l border-gray-300 border-dotted"></div>

          <ul>
            {steps.map((step, index) => (
              <li key={index} className="relative mb-8">
                <span className="absolute left-[-21px] top-[2px] w-2 h-2 bg-black rounded-full -translate-x-1/2"></span>

                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 text-[15px]">{step.title}</h3>
                  <p className="text-[#637587] text-[14px] leading-relaxed mt-[2px]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
