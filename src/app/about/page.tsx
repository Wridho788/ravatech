'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

const values = [
  {
    title: 'Clarity',
    description: 'Clear communication, clear decisions.'
  },
  {
    title: 'Usefulness',
    description: 'If it\'s not used, it\'s not done.'
  },
  {
    title: 'Ownership',
    description: 'We treat products like our own.'
  },
  {
    title: 'Sustainability',
    description: 'Built to last, not to impress.'
  }
]

const workingPrinciples = [
  'Problem first, not features',
  'Clear scope before building',
  'Honest trade-offs',
  'Long-term thinking'
]

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Hero */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
              About Ravatech
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Digital Systems That Make Sense
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Ravatech is a small, focused studio building digital products for real operational needs.
            </p>
          </div>
          
          {/* Why We Exist */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Ravatech Exists</h2>
            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>
                We started Ravatech after seeing too many digital products that looked good but failed in real use.
              </p>
              <p className="font-medium text-primary">
                Our focus is simple: build systems that are actually used, maintained, and trusted.
              </p>
            </div>
          </section>

          {/* Founder Section */}
          <section className="mb-16 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-6">The Builder</h2>
            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>
                <span className="font-bold text-primary">Ridho</span> is a product-focused engineer who designs and builds digital systems end-to-end — from UX and architecture to production deployment.
              </p>
              <p>
                He works closely with clients to understand real workflows, not just feature requests.
              </p>
            </div>
            
            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-secondary">Shipped production systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-secondary">Worked with communities & organizations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-secondary">Focused on long-term maintainability</span>
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="mb-16 bg-secondary/5 rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">How Ravatech Works</h2>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              We follow principles that ensure quality and sustainability:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {workingPrinciples.map((principle, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium">{principle}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What We Value */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">What We Value</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Want to see what we've built?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              View our case studies and real projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <Button variant="primary">
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="border-white text-white hover:bg-white/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
