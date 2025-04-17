"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 md:px-16 bg-[#0c1329] text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-cyan"
        >
          Who We Are
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-softgray text-lg mb-12 max-w-3xl mx-auto"
        >
          Ravatech is a digital partner for founders and companies who want to
          build products that scale. We turn ideas into powerful, modern apps —
          crafted with purpose, precision, and the future in mind.
        </motion.p>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#121d34] p-8 md:p-10 rounded-2xl shadow-xl text-left max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan">Our Mission</h3>
          <p className="text-softgray text-base md:text-lg leading-relaxed">
            Empower innovators through clean code, smart design, and lean
            execution. We make building products feel effortless — without
            cutting corners.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="mt-24 bg-[#0f1a2f] rounded-3xl px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-cyan"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Value Cards */}
            {[
              {
                icon: "💡",
                title: "Clarity",
                desc: "Simple, intentional, and focused solutions.",
              },
              {
                icon: "⚡",
                title: "Speed",
                desc: "Move fast with confidence, iterate smarter.",
              },
              {
                icon: "🎯",
                title: "Precision",
                desc: "Every detail matters, from UX to architecture.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                desc: "Honest communication. No BS, no shortcuts.",
              },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="bg-[#1a2635] p-6 rounded-xl shadow-md text-left flex flex-col items-start hover:shadow-lg transition-all duration-300"
              >
                <div className="text-cyan mb-4 text-3xl">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-softgray text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
