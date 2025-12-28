'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Abstract Visual */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-wider text-accent font-medium mb-6"
          >
            Building Real-World Digital Systems
          </motion.p>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            We Build Digital Products<br />
            <span className="text-secondary">That Actually Get Used</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-secondary mb-10 leading-relaxed"
          >
            From internal tools to public platforms — designed, built, and shipped with real users in mind.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <Button className="text-lg px-8 py-4 min-w-50">
                Start a Conversation
              </Button>
            </Link>
            <Link href="#work-preview">
              <Button variant="secondary" className="text-lg px-8 py-4 min-w-50">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
