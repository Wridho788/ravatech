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
          className="text-center bg-primary rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Have a real problem to solve?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's talk.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-white/90">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
