"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative  text-white py-28 px-4 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/pattern/bg.jpg')] bg-cover bg-center opacity-30" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-wider text-cyan font-medium mb-4 inline-block"
        >
          🚀 Trusted by startups & growing teams
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Build Faster. Scale Smarter. <br /> With{" "}
          <span className="text-cyan">Ravatech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-softgray text-lg max-w-2xl mx-auto mb-10"
        >
          We help you validate, design, and build modern digital products — from
          scratch, with zero friction. Focus on your business, we’ll handle the
          tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link href="#portfolio">
            <button className="px-6 py-3 bg-cyan text-white rounded-xl hover:bg-cyan/80 transition font-medium">
              View Our Work
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-3 border border-cyan text-cyan rounded-xl hover:bg-cyan hover:text-white transition font-medium">
              Get a Free Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
