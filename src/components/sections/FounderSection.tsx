'use client'

import { motion } from 'framer-motion'

export function FounderSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Built by Engineers, Not Marketers
          </h2>
          <div className="space-y-4 text-lg text-secondary">
            <p>
              Ravatech is founded on the principle that good software comes from understanding real problems deeply, not from following trends or making grand promises.
            </p>
            <p>
              We focus on execution—building systems that work, solve actual problems, and can be maintained over time. No buzzwords, no inflated claims.
            </p>
            <p>
              Every project is approached with engineering discipline: analyze the problem, design a practical solution, build it properly, and support it long-term.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
