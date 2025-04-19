"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = {
  monthly: [
    {
      title: "Starter",
      price: "$99/mo",
      description: "Best for MVPs or small business websites.",
      features: ["1–2 pages", "Basic UI Design", "Frontend Dev", "Simple CMS Integration"],
      cta: "Get Started",
      highlight: false,
    },
    {
      title: "Growth",
      price: "$199/mo",
      description: "Perfect for startups building SaaS or web apps.",
      features: ["Up to 5 pages", "Custom UI/UX", "Full-stack Dev", "Basic Dashboard", "API Integration"],
      cta: "Most Popular",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For complex systems, integrations, or enterprise needs.",
      features: ["Unlimited Pages", "Advanced Architecture", "CI/CD & Deployment", "Consultation & Support"],
      cta: "Contact Us",
      highlight: false,
    },
  ],
  onetime: [
    {
      title: "Starter",
      price: "$1,200+",
      description: "Best for MVPs or small business websites.",
      features: ["1–2 pages", "Basic UI Design", "Frontend Dev", "Simple CMS Integration"],
      cta: "Get Started",
      highlight: false,
    },
    {
      title: "Growth",
      price: "$2,500+",
      description: "Perfect for startups building SaaS or web apps.",
      features: ["Up to 5 pages", "Custom UI/UX", "Full-stack Dev", "Basic Dashboard", "API Integration"],
      cta: "Most Popular",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For complex systems, integrations, or enterprise needs.",
      features: ["Unlimited Pages", "Advanced Architecture", "CI/CD & Deployment", "Consultation & Support"],
      cta: "Contact Us",
      highlight: false,
    },
  ]
};

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const currentPlans = isMonthly ? plans.monthly : plans.onetime;

  return (
    <section id="pricing" className="py-28 px-4 md:px-16 bg-[#0f1a2f] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-cyan"
        >
          Pricing Plans
        </motion.h2>
        <p className="text-softgray mb-6 max-w-xl mx-auto">
          Flexible packages tailored to fit every stage of your product journey.
        </p>

        <div className="flex justify-center items-center gap-4 mb-10">
          <span className={isMonthly ? "text-cyan" : "text-softgray"}>Monthly</span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className="w-14 h-8 bg-[#1a2635] rounded-full flex items-center px-1 transition-all"
          >
            <div
              className={`w-6 h-6 bg-cyan rounded-full transition-transform duration-300 ${isMonthly ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>
          <span className={!isMonthly ? "text-cyan" : "text-softgray"}>One-time</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl p-8 shadow-lg transition border border-[#1f2c42] ${
                plan.highlight ? "bg-[#15213a] border-cyan ring-2 ring-cyan" : "bg-[#1a2635]"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 text-sm bg-cyan text-navy inline-block px-3 py-1 rounded-full font-semibold">
                  ⭐ {plan.cta}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4 text-cyan">{plan.price}</p>
              <p className="text-softgray mb-6 text-sm">{plan.description}</p>

              <ul className="text-sm text-left space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-cyan text-navy font-semibold py-2 rounded-xl hover:opacity-90 transition">
                {plan.highlight ? "Choose Plan" : plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-cyan">Plan Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1a2635] text-white">
                  <th className="p-4">Feature</th>
                  <th className="p-4">Starter</th>
                  <th className="p-4">Growth</th>
                  <th className="p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-4">Custom Design</td><td className="p-4">✔</td><td className="p-4">✔</td><td className="p-4">✔</td></tr>
                <tr><td className="p-4">API Integration</td><td className="p-4">-</td><td className="p-4">✔</td><td className="p-4">✔</td></tr>
                <tr><td className="p-4">CMS Integration</td><td className="p-4">✔</td><td className="p-4">✔</td><td className="p-4">✔</td></tr>
                <tr><td className="p-4">Full Deployment</td><td className="p-4">-</td><td className="p-4">✔</td><td className="p-4">✔</td></tr>
                <tr><td className="p-4">Premium Support</td><td className="p-4">-</td><td className="p-4">-</td><td className="p-4">✔</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-cyan text-center">FAQ</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-white mb-1">How long does it take to build a project?</h4>
              <p className="text-softgray text-sm">Depends on scope. Small MVPs can take 2–3 weeks. Larger apps might take 6–8 weeks or more.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Can I upgrade my plan later?</h4>
              <p className="text-softgray text-sm">Yes, we offer flexibility and can scale your plan as your needs grow.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Do you offer UI/UX design only?</h4>
              <p className="text-softgray text-sm">Absolutely. We can collaborate just on the design if needed.</p>
            </div>
          </div>
        </div>

        {/* Book a Call CTA */}
        <div className="mt-20 text-center">
          <h4 className="text-xl font-semibold text-white mb-4">Still not sure what fits your need?</h4>
          <a
            href="/contact"
            className="inline-block bg-cyan text-navy font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Book a Free Call →
          </a>
        </div>
      </div>
    </section>
  );
}
