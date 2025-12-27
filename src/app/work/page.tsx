'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '@/data/caseStudies'
import { ExternalLink, X } from 'lucide-react'

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-secondary mb-12 max-w-2xl">
            Real projects solving real problems. Each case represents systems built, deployed, and actively used.
          </p>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setSelectedCase(study.id)}
                  className="w-full text-left bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold">{study.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      study.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {study.status}
                    </span>
                  </div>
                  <p className="text-secondary mb-4">{study.subtitle}</p>
                  <p className="text-sm text-secondary line-clamp-3 mb-4">
                    {study.context}
                  </p>
                  <span className="text-accent text-sm font-medium">
                    View Case Study →
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Case Study Detail Modal */}
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
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {selectedStudy.title}
                    </h2>
                    <p className="text-xl text-secondary">{selectedStudy.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedStudy.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
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
                      Visit Site <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Context</h3>
                    <p className="text-secondary leading-relaxed">
                      {selectedStudy.context}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">Problem</h3>
                    <p className="text-secondary leading-relaxed">
                      {selectedStudy.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">Solution</h3>
                    <p className="text-secondary leading-relaxed">
                      {selectedStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">Tech Stack</h3>
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

                  <div>
                    <h3 className="text-2xl font-bold mb-3">Role</h3>
                    <p className="text-secondary leading-relaxed">
                      {selectedStudy.role}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">Impact</h3>
                    <p className="text-secondary leading-relaxed">
                      {selectedStudy.impact}
                    </p>
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
