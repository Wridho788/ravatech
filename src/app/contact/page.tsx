'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-secondary mb-12 max-w-2xl">
            Have a problem that needs solving? Reach out and let's discuss how we can help.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.a
              href="mailto:contact@ravatech.com"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Email</h2>
              <p className="text-secondary mb-4">
                Send us a detailed message about your project
              </p>
              <span className="text-accent font-medium">
                contact@ravatech.com
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">WhatsApp</h2>
              <p className="text-secondary mb-4">
                Quick questions or initial discussion
              </p>
              <span className="text-green-600 font-medium">
                Chat with us
              </span>
            </motion.a>
          </div>

          {/* What to Include */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary text-white rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6">What to Include in Your Message</h2>
            <ul className="space-y-4 text-lg text-white/90">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What problem are you trying to solve?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Who will use this system and how?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What constraints or requirements do you have?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>What's your timeline and budget range?</span>
              </li>
            </ul>
            <p className="mt-6 text-white/80">
              The more context you provide, the better we can understand if we're the right fit for your project.
            </p>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-secondary">
              We typically respond within 24-48 hours. If your project is urgent, mention it in your message.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
