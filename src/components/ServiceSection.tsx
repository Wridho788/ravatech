"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web & Mobile Apps",
    description: "Tailor-made solutions that match your business goals.",
    icon: "🧠",
  },
  {
    title: "E-Commerce & POS System",
    description: "From online stores to integrated point-of-sale platforms.",
    icon: "🛒",
  },
  {
    title: "ERP & Business Automation",
    description: "Automate operations and gain full control over workflows.",
    icon: "⚙️",
  },
  {
    title: "NFT & Blockchain Solutions",
    description: "Secure, scalable Web3 apps built for tomorrow.",
    icon: "🧬",
  },
  {
    title: "Tech Consultation & Prototyping",
    description: "Validate ideas fast and launch with confidence.",
    icon: "🚀",
    recommended: true,
  },
  {
    title: "UI/UX Design & Branding",
    description: "Design experiences that connect and convert.",
    icon: "🎨",
  },
];

// Mengurutkan services sehingga recommended item selalu di depan
const sortedServices = [...services].sort((a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0));

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-28 px-4 md:px-16 bg-gradient-to-b from-[#0f1a2f] to-[#0c1329] text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-cyan"
        >
          Our Services
        </motion.h2>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto space-x-8 pb-6">
          {sortedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#11152e] hover:shadow-glow hover:border-cyan/50 border border-transparent p-6 rounded-2xl transition-all duration-300 shadow-md flex-none w-80 flex flex-col items-center"
            >
              {service.recommended && (
                <span className="text-xs bg-cyan text-white px-2 py-1 rounded-md mb-3 font-medium">
                  ⭐ Top Recommended
                </span>
              )}

              <div className="text-6xl bg-[#1f2a45] p-4 rounded-full mb-4 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-softgray text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
