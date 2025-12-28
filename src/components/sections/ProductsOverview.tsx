'use client'

import { motion } from 'framer-motion'
import { LayoutDashboard, Globe, Wrench } from 'lucide-react'

const offerings = [
  {
    id: 'internal-systems',
    title: 'Internal Systems',
    description: 'Dashboards, admin panels, automation tools',
    icon: LayoutDashboard,
    examples: 'For teams needing better operational control'
  },
  {
    id: 'public-platforms',
    title: 'Public Platforms',
    description: 'Web apps, PWAs, community & marketplace platforms',
    icon: Globe,
    examples: 'For businesses serving external users'
  },
  {
    id: 'custom-products',
    title: 'Custom Digital Products',
    description: 'Tailored systems for specific operational needs',
    icon: Wrench,
    examples: 'For unique workflows and requirements'
  }
]

export function ProductsOverview() {
  return (
    <section className="py-20 px-4">
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
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Help You Build
            </h2>
            <p className="text-lg text-secondary">
              Digital systems designed for how your business actually works
            </p>
          </div>
          
          {/* Offering Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <motion.div
                  key={offering.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-secondary mb-4 leading-relaxed">
                    {offering.description}
                  </p>
                  <p className="text-sm text-secondary/80 italic">
                    {offering.examples}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
