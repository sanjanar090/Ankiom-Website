"use client";

export default function DesignProcess() {
  const steps = [
    {
      title: "Empathize",
      description: "Understand user needs and pain points through research.",
    },
    {
      title: "Define",
      description: "Clearly articulate the problem to be solved.",
    },
    {
      title: "Ideate",
      description: "Generate a wide range of creative solutions.",
    },
    {
      title: "Prototype",
      description: "Create interactive models to test and refine.",
    },
    {
      title: "Test",
      description: "Evaluate solutions with real users for feedback.",
    },
  ];

  return (
    <section className="max-w-xl mx-auto py-6 px-6 mt-8">
      <ul className="relative border-l border-gray-300 border-dotted pl-6">
        <h1 className="text-[22px] font-bold mb-10 text-center">Our Design Process </h1>
        {steps.map((step, index) => (
          <li key={index} className="mb-8 ml-2">
            <span className="absolute left-0 mt-1 -translate-x-1/2 w-2 h-2 bg-black rounded-full"></span>
            <h3 className="font-semibold text-gray-900">{step.title}</h3>
            <p className="text-[#637587] text-sm leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
