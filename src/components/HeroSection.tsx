"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#0c1329] text-white py-28 px-4 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-r from-[#0c1329] via-[#3f4e6e] to-[#1e2a3b] bg-cover bg-center" />

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
          Kami bantu validasi ide, desain, dan bangun produk digital dari nol —
          tanpa drama, tanpa overhead. Fokus ke bisnis, kami urus sisanya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link href="#portfolio">
            <button className="px-6 py-3 bg-cyan text-white rounded-xl hover:bg-cyan/80 transition font-medium">
              Lihat Karya Kami
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-3 border border-cyan text-cyan rounded-xl hover:bg-cyan hover:text-white transition font-medium">
              Konsultasi Gratis
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
