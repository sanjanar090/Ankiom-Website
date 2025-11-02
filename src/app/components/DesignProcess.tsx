"use client";

import { NextSeo } from "next-seo";

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
        title="Design Process | UI/UX Design | Ankiom Soft India LLP"
        description="Explore Ankiom Soft India LLP’s user-centered design process — from empathy and ideation to prototyping and testing for exceptional UI/UX solutions."
        canonical="https://ankiomsoft.com/uiux-design-process"
      />

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
