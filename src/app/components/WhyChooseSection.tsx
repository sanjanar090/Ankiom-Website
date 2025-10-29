
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { FiArrowRightCircle, FiGrid, FiMessageCircle, FiHelpCircle } from "react-icons/fi";

export default function WhyChooseSection({ content }: any) {
  const features = content?.features || [
    { icon: <FiArrowRightCircle />, title: "Expert Developers", description: "Experienced Flutter developers delivering top-tier mobile apps." },
    { icon: <FiGrid />, title: "Agile Process", description: "Adaptive and flexible project delivery using agile methodology." },
    { icon: <FiMessageCircle />, title: "Transparent Communication", description: "Open updates and clear progress tracking." },
    { icon: <FiHelpCircle />, title: "Ongoing Support", description: "Continuous post-launch support and optimization." },
  ];

  return (
    <>
      <NextSeo
        title="Why Choose Ankiom? | Flutter App Development Experts"
        description="Discover why Ankiom stands out — expert Flutter developers, agile processes, transparent communication, and continuous support."
        canonical="https://www.ankiom.com/flutter"
      />

      <section className="max-w-7xl mx-auto my-18 px-5 text-center  ">
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
          {features.map((feature: any, index: number) => (
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
