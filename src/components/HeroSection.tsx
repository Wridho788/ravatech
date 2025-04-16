"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-[#0c1329] text-white py-28 px-4 md:px-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('/pattern/bg.svg')] bg-cover bg-center" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Build. Scale. Evolve. <br /> with <span className="text-cyan">Ravatech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-softgray text-lg max-w-2xl mx-auto mb-10"
        >
          Kami bantu membangun solusi digital yang modern, scalable, dan berdampak — dari web, mobile hingga blockchain apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Link href="#portfolio">
            <button className="px-6 py-3 bg-cyan text-white rounded-xl hover:bg-cyan/80 transition font-medium">
              Lihat Karya Kami
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-3 border border-cyan text-cyan rounded-xl hover:bg-cyan hover:text-white transition font-medium">
              Hubungi Kami
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
