'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '@/data/caseStudies'
import { ExternalLink, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function WorkPage() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null)
  
  const selectedStudy = caseStudies.find(study => study.id === selectedCase)

  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
              Real Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Work and Case Studies
            </h1>
            <p className="text-xl text-secondary max-w-2xl leading-relaxed">
              A selection of systems we have designed, built, and shipped for real users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 0 ? 'md:col-span-2' : ''}
              >
                <button
                  onClick={() => setSelectedCase(study.id)}
                  className="w-full text-left bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-gray-100 h-full group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2 className={`font-bold mb-2 group-hover:text-accent transition-colors ${
                        index === 0 ? 'text-3xl' : 'text-2xl'
                      }`}>
                        {study.title}
                      </h2>
                      <p className="text-secondary text-lg mb-3">{study.subtitle}</p>
                    </div>
                  </div>
                  
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
                  
                  <p className="text-secondary line-clamp-3 leading-relaxed mb-4">
                    {study.context}
                  </p>
                  <span className="text-accent font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View case study <span>→</span>
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {selectedStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        {selectedStudy.title}
                      </h2>
                      <p className="text-xl text-secondary mb-4">{selectedStudy.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide ${
                          selectedStudy.status === 'Live' 
                            ? 'bg-green-100 text-green-800' 
                            : selectedStudy.status === 'In Use'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {selectedStudy.status}
                        </span>
                        {selectedStudy.link && (
                          <a
                            href={selectedStudy.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors inline-flex items-center gap-2"
                          >
                            <span>Visit Site</span> <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCase(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-10">
                  <div className="space-y-8">
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                      <h3 className="text-xl font-bold mb-3 text-red-900">Problem</h3>
                      <p className="text-secondary leading-relaxed">
                        {selectedStudy.problem}
                      </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                      <h3 className="text-xl font-bold mb-3 text-blue-900">Solution</h3>
                      <p className="text-secondary leading-relaxed">
                        {selectedStudy.solution}
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                      <h3 className="text-xl font-bold mb-3 text-green-900">Result</h3>
                      <p className="text-secondary leading-relaxed">
                        {selectedStudy.impact}
                      </p>
                    </div>
                  </div>

                  <div className="bg-secondary/5 rounded-2xl p-6">
                    <h3 className="text-lg font-bold mb-3">Role and Scope</h3>
                    <p className="text-secondary leading-relaxed">
                      {selectedStudy.role}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-primary rounded-2xl p-8 text-center mt-12">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Have a similar problem?
                    </h3>
                    <p className="text-white/80 mb-6">
                      Let us talk about whether we are a good fit.
                    </p>
                    <Link href="/contact">
                      <Button variant="primary" className="shadow-lg">
                        Start a conversation
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
