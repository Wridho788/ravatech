'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { LayoutDashboard, Globe, Wrench, CheckCircle2, XCircle } from 'lucide-react'

const productCategories = [
  {
    id: 'internal-systems',
    title: 'Internal Systems',
    description: 'Dashboards, admin panels, automation tools',
    icon: LayoutDashboard,
    forWho: 'Organizations needing better operational control and efficiency',
    problems: [
      'Manual processes taking too much time',
      'Data scattered across multiple systems',
      'Repetitive errors in workflows'
    ],
    output: 'Admin panels, dashboards, automation tools tailored to your workflow'
  },
  {
    id: 'public-platforms',
    title: 'Public Platforms',
    description: 'Web apps, PWAs, community & marketplace systems',
    icon: Globe,
    forWho: 'Businesses serving external users and communities',
    problems: [
      'Need for stable, scalable platform',
      'Complex user interactions',
      'UX requirements for non-technical users'
    ],
    output: 'Web applications, PWAs, community systems ready for real users'
  },
  {
    id: 'custom-products',
    title: 'Custom Digital Products',
    description: 'Tailored systems for specific operational needs',
    icon: Wrench,
    forWho: 'Organizations with unique requirements',
    problems: [
      'Existing SaaS doesn\'t fit your workflow',
      'Business-specific constraints',
      'Non-standard requirements'
    ],
    output: 'Custom-built system designed exactly for your needs'
  }
]

const processSteps = [
  {
    number: '1',
    title: 'Understand the problem',
    description: 'Short discussion, no commitment.'
  },
  {
    number: '2',
    title: 'Define the scope',
    description: 'What we build, what we don\'t.'
  },
  {
    number: '3',
    title: 'Build & iterate',
    description: 'Transparent progress.'
  },
  {
    number: '4',
    title: 'Ship & support',
    description: 'Production-ready delivery.'
  }
]

const whatWeDontDo = [
  'Mass template websites',
  'One-day rush projects',
  'Features without clear purpose'
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Hero */}
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
              What We Build
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Products, Built for Real Operations
            </h1>
            <p className="text-xl text-secondary max-w-3xl leading-relaxed">
              We design and develop systems tailored to how your business actually works.
            </p>
          </div>

          {/* Product Categories */}
          <div className="space-y-8 mb-20">
            {productCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        {category.title}
                      </h2>
                      <p className="text-secondary text-lg mb-4">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-20">
                    <div>
                      <h3 className="font-bold mb-3 text-primary">For Who</h3>
                      <p className="text-secondary leading-relaxed">{category.forWho}</p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-primary">What Problems We Solve</h3>
                      <ul className="space-y-2">
                        {category.problems.map((problem, idx) => (
                          <li key={idx} className="text-secondary flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pl-0 md:pl-20 pt-6 border-t border-gray-100">
                    <p className="text-sm text-secondary">
                      <span className="font-semibold text-primary">Output:</span> {category.output}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* How We Work */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary/5 rounded-2xl p-8 md:p-10 mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">How We Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What We Don't Do */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">What We Don't Do</h2>
            <div className="space-y-3">
              {whatWeDontDo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-secondary italic">
              This helps us maintain quality and serve clients who are serious about building meaningful systems.
            </p>
          </motion.div>

          {/* Cross-sell to Work */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-secondary/5 rounded-2xl p-8 text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">
              Want to see how this looks in real projects?
            </h2>
            <Link href="/work">
              <Button variant="secondary" className="mt-4">
                View Case Studies
              </Button>
            </Link>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-primary text-white rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Not sure what you need yet?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              That's okay. Most good projects start with a conversation.
            </p>
            <Link href="/contact">
              <Button variant="primary">
                Talk to Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
