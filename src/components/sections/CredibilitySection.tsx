'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const proofPoints = [
  'Used by local government',
  'Community-scale platforms',
  'Production systems in active use'
]

export function CredibilitySection() {
  return (
    <section className="py-16 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="text-primary font-medium">{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
