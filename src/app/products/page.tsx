'use client'

import { motion } from 'framer-motion'
import { productCategories } from '@/data/products'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products & Services</h1>
          <p className="text-xl text-secondary mb-4 max-w-3xl">
            Custom-built digital products designed to solve specific problems.
          </p>
          <p className="text-lg text-secondary mb-12 max-w-3xl">
            We don't sell packages or templates. Every system is built from scratch based on your actual requirements and constraints.
          </p>

          {/* Product Categories */}
          <div className="space-y-8 mb-20">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {category.title}
                </h2>
                <p className="text-secondary mb-6 text-lg">
                  {category.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2 text-primary">For Who</h3>
                    <p className="text-secondary">{category.forWho}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-primary">Output</h3>
                    <p className="text-secondary">{category.output}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Product Explanation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary text-white rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Why Custom-Built?</h2>
            <div className="space-y-4 text-lg text-white/90">
              <p>
                Off-the-shelf solutions work for common problems. But when your business has specific workflows, unique requirements, or particular constraints, you need software built for your exact situation.
              </p>
              <p>
                Custom development means the system fits your process—not the other way around. You get exactly what you need, without paying for features you won't use.
              </p>
              <p>
                Every project starts with understanding your problem deeply, then building a solution that actually solves it.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
