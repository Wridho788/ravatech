'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'

export function ProofSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Live Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="/work">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{study.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        study.status === 'Live' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {study.status}
                      </span>
                    </div>
                    <p className="text-secondary mb-4">{study.subtitle}</p>
                    <p className="text-sm text-secondary line-clamp-3">
                      {study.solution}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
