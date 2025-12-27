'use client'

import { motion } from 'framer-motion'
import { Globe, LayoutDashboard, Users, Layout } from 'lucide-react'
import { products } from '@/data/products'

const iconMap = {
  Globe,
  LayoutDashboard,
  Users,
  Layout
}

export function ProductsOverview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What We Build
          </h2>
          <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
            Custom digital products tailored to solve specific problems.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const Icon = iconMap[product.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    product.category === 'available' 
                      ? 'bg-accent/10' 
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      product.category === 'available' 
                        ? 'text-accent' 
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-secondary">
                    {product.description}
                  </p>
                  {product.category === 'coming-later' && (
                    <span className="inline-block mt-2 text-xs text-gray-500">
                      Coming Later
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
