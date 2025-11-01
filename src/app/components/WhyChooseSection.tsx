import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { FiArrowRightCircle, FiGrid, FiMessageCircle, FiHelpCircle } from "react-icons/fi";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface WhyChooseSectionProps {
  content?: {
    title?: string;
    features?: Feature[];
  };
}

export default function WhyChooseSection({ content }: WhyChooseSectionProps) {
  const features: Feature[] =
    content?.features || [
      {
        icon: <FiArrowRightCircle />,
        title: "Expert Flutter Developers",
        description: "Our team consists of experienced Flutter developers with a proven track record.",
      },
      {
        icon: <FiGrid />,
        title: "Agile Development Process",
        description: "We follow an agile methodology to ensure flexibility and adaptability throughout the development process.",
      },
      {
        icon: <FiMessageCircle />,
        title: "Transparent Communication",
        description: "We maintain open and transparent communication with our clients throughout the project lifecycle.",
      },
      {
        icon: <FiHelpCircle />,
        title: "Ongoing Support & Maintenance",
        description: "We provide ongoing support and maintenance to ensure your application remains up-to-date and performs optimally.",
      },
    ];

  return (
    <>
      <NextSeo
        title="Why Choose Ankiom? | Flutter App Development Experts"
        description="Discover why Ankiom stands out — expert Flutter developers, agile processes, transparent communication, and continuous support."
        canonical="https://www.ankiom.com/flutter"
      />

      <section className="max-w-7xl mx-auto my-15 px-5 text-center">
        <motion.h2
          className="text-[22px] font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {content?.title || "Why Choose Ankiom?"}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#F7FAFC] border border-[#bdd0ea] rounded-lg p-4 h-60 w-full max-w-[285px] text-left shadow-sm hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-2xl text-gray-900 mb-2">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4D8099] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
