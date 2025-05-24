// Pricing.jsx
'use client';
import { motion } from 'framer-motion';

const tiers = [
  {
    title: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started with RevKnew.',
    features: ['CRM Access', 'Basic Automations', 'Email Support'],
    highlighted: false,
  },
  {
    title: 'Pro',
    price: '$29/mo',
    description: 'Full power for growing teams and operators.',
    features: ['All Starter Features', 'Advanced Reviews', 'AI Follow-ups', 'Priority Support'],
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: 'Let’s Talk',
    description: 'Custom automation and onboarding for large operations.',
    features: ['Custom Workflows', 'Onboarding Help', 'Dedicated Rep'],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="bg-dark text-white py-24 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-accent drop-shadow-glow">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 mb-16 max-w-xl mx-auto">
          Get started free. Upgrade only when you're ready to scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px #7eff00',
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`glass-card p-8 text-left relative transition-all ${
                tier.highlighted ? 'border-2 border-accent' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 right-4 bg-accent text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-accent mb-2">{tier.title}</h3>
              <p className="text-3xl font-bold mb-4">{tier.price}</p>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                {tier.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <a href="#" className="btn-primary w-full text-center block">
                {tier.price === 'Free' ? 'Get Started' : 'Choose Plan'}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}