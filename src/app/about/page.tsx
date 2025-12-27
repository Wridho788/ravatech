'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ravatech</h1>
          
          {/* Company Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>
                Ravatech was founded on a simple observation: too many businesses struggle with software that doesn't fit their actual needs. Either they're forced into rigid SaaS products that require changing their workflows, or they're promised custom solutions that never materialize properly.
              </p>
              <p>
                We exist to build real systems that solve real problems. Not to chase trends, not to oversell capabilities, but to engineer practical solutions that work.
              </p>
              <p>
                Every project we take on starts with understanding the problem deeply. We don't believe in one-size-fits-all solutions because we know that meaningful software comes from understanding specific contexts, constraints, and requirements.
              </p>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Engineer-Driven</h3>
                <p className="text-secondary">
                  Decisions are made based on technical merit and practical requirements, not marketing buzzwords or fashionable frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Problem-First</h3>
                <p className="text-secondary">
                  We start with your problem, not our solutions. Technology choices follow from requirements, not the other way around.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Long-Term Thinking</h3>
                <p className="text-secondary">
                  Systems are built to be maintainable, scalable, and adaptable. Quick hacks and technical debt are avoided from day one.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Honest Communication</h3>
                <p className="text-secondary">
                  We tell you what's possible, what's not, and why. No inflated promises, no hidden complexities discovered halfway through.
                </p>
              </div>
            </div>
          </section>

          {/* Founder Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How We Work</h2>
            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>
                Every project follows a disciplined engineering process: understand the problem, design a practical solution, build it properly, and support it long-term.
              </p>
              <p>
                We handle everything end-to-end—from initial problem analysis through system architecture, implementation, testing, deployment, and ongoing maintenance. This ensures consistency and accountability throughout the entire lifecycle.
              </p>
              <p>
                Our approach is iterative and collaborative. We expect requirements to evolve as understanding deepens, and we build systems flexible enough to accommodate necessary changes without requiring complete rewrites.
              </p>
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
              Working on something that needs proper engineering?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can help.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-white/90">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
