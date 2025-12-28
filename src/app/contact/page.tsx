'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

const whatHappensNext = [
  {
    step: '1',
    title: 'You reach out',
    description: 'Send us a message via email or WhatsApp'
  },
  {
    step: '2',
    title: 'We review your message',
    description: 'We will carefully read your context and requirements'
  },
  {
    step: '3',
    title: 'We reply with next steps',
    description: 'Usually within 24-48 hours with clear next actions'
  }
]

const proofPoints = [
  'Projects used in production',
  'Worked with communities & organizations',
  'Systems built to last'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page Hero */}
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-wider text-accent font-medium mb-4">
              Let's Talk
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start a Conversation
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              No sales pitch. Just a short discussion to understand your problem.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.a
              href="mailto:contact@ravatech.com"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Email</h2>
              <p className="text-secondary mb-4 leading-relaxed">
                Prefer a detailed message? Email works best.
              </p>
              <span className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                contact@ravatech.com <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">WhatsApp</h2>
              <p className="text-secondary mb-4 leading-relaxed">
                Prefer a quick chat? WhatsApp works best.
              </p>
              <span className="text-green-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Chat with us <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Or send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
                <p className="text-sm text-secondary mt-2">
                  You don't need a full brief. A short context is enough.
                </p>
              </div>
              <Button type="submit" className="w-full md:w-auto px-8 py-4">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary/5 rounded-2xl p-8 md:p-10 mb-12"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">What happens next?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whatHappensNext.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trust & Credibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {proofPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-secondary font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
