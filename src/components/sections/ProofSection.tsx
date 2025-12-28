'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'
import { ExternalLink } from 'lucide-react'

export function ProofSection() {
  // Show only first 2 case studies as preview
  const featuredCases = caseStudies.slice(0, 2)
  
  return (
    <section id="work-preview" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
              Proof Before Promise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Real systems, built and deployed for real users
            </p>
          </div>
          
          {/* Case Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/work" className="block h-full">
                  <div className="bg-secondary/5 rounded-2xl p-8 border border-secondary/10 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-secondary text-base mb-3">
                          {study.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                        study.status === 'Live' 
                          ? 'bg-green-100 text-green-800' 
                          : study.status === 'In Use'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {study.status}
                      </span>
                      {study.link && (
                        <ExternalLink className="w-4 h-4 text-secondary" />
                      )}
                    </div>
                    
                    <p className="text-secondary line-clamp-3 leading-relaxed">
                      {study.solution}
                    </p>
                    
                    <div className="mt-6 text-accent font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View case study <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* CTA to Full Work Page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-lg font-medium group"
            >
              See full case studies
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
