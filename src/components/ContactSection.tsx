"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 px-4 md:px-16 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-cyan"
      >
        Let’s Build Something Awesome
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-softgray max-w-2xl mx-auto mb-10 text-lg"
      >
        Have an idea in mind? Tell us more — we’ll help you bring it to life.
        Whether it's a new product or scaling an existing one, we're here for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center flex-wrap gap-6"
      >
        <Link href="mailto:hello@ravatech.id">
          <button className="flex items-center gap-2 px-6 py-3 bg-cyan text-white rounded-xl hover:bg-cyan/80 transition font-medium">
            <Mail size={18} />
            Send Email
          </button>
        </Link>

        <Link href="https://cal.com/ravatech/15min" target="_blank">
          <button className="flex items-center gap-2 px-6 py-3 border border-cyan text-cyan rounded-xl hover:bg-cyan hover:text-white transition font-medium">
            <Calendar size={18} />
            Book a Call
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
