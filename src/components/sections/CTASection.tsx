'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Have a project in mind?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              No sales pitch. Just a short conversation to see if we're a good fit.
            </p>
            <Link href="/contact">
              <Button variant="primary" className="text-lg px-10 py-4 shadow-lg hover:shadow-xl">
                Contact Ravatech
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
