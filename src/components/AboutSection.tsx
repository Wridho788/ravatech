"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 md:px-16   text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-cyan"
        >
          Tentang Ravatech
        </motion.h2>

        {/* General Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-softgray text-lg mb-10 max-w-3xl mx-auto"
        >
          Di Ravatech, kami membantu perusahaan untuk membangun produk digital yang modern, scalable, dan berdampak. Kami fokus pada ide-ide yang inovatif, memberikan solusi yang efisien dengan teknologi terkini di web, mobile, dan blockchain. Kami bekerja bersama klien untuk memastikan setiap langkah diambil dengan hati-hati, dari perencanaan hingga peluncuran produk.
        </motion.p>

        {/* Misi dan Nilai */}
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1a2635] p-8 rounded-xl shadow-lg text-left"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan">Misi Kami</h3>
            <p className="text-softgray text-lg">
              Misi kami adalah untuk mempercepat pertumbuhan perusahaan dengan menyediakan solusi teknologi yang inovatif, mudah diakses, dan dapat disesuaikan dengan kebutuhan setiap klien. Kami berkomitmen untuk membangun hubungan jangka panjang dengan klien kami melalui kolaborasi yang erat dan kualitas yang konsisten.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1a2635] p-8 rounded-xl shadow-lg text-left"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan">Nilai-Nilai Kami</h3>
            <ul className="text-softgray text-lg list-disc pl-5 space-y-2">
              <li>Innovasi berkelanjutan dalam setiap proyek.</li>
              <li>Fokus pada kolaborasi dan komunikasi yang jelas.</li>
              <li>Menjaga kualitas dan performa yang tak tertandingi.</li>
              <li>Berkomitmen terhadap integritas dan transparansi.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
