'use client';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 'Coming Soon',
    description: 'For solo operators just getting organized.',
    features: [
      'Lead & Contact CRM',
      'Basic Review Requests',
      'Manual Scheduling Tools',
      'Email Support',
    ],
  },
  {
    name: 'Pro',
    price: 'Coming Soon',
    description: 'Best for growing teams with regular client flow.',
    features: [
      'Everything in Starter',
      'Smart Review Automation',
      'Online Booking (Calendar Sync)',
      'Auto Follow-Up Flows',
      'Advanced CRM Search & Tags',
      'Performance Dashboard',
    ],
    badge: 'Most Popular',
  },
  {
    name: 'Growth',
    price: 'Coming Soon',
    description: 'Advanced automation and integrations for scaling.',
    features: [
      'Everything in Pro',
      'Automated Intake Forms',
      'SMS & Email Campaigns',
      'Custom Reports & Analytics',
      'Payments & Invoicing',
      'Staff Scheduling Tools',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-dark text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-accent drop-shadow-glow">Pricing Plans</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Simple pricing for serious local businesses. Start small, scale up as you grow.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`glass-card p-6 flex flex-col justify-between text-center relative transition hover:shadow-[0_0_12px_#7eff00] ${
              plan.badge ? 'border-2 border-accent' : ''
            }`}
          >
            {plan.badge && (
              <div className="absolute top-4 right-4 bg-accent text-black text-xs font-semibold px-2 py-1 rounded">
                {plan.badge}
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold text-accent mb-2">{plan.name}</h3>
              <p className="text-lg text-white font-semibold mb-1">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="text-gray-300 space-y-2 mb-6 text-left list-disc list-inside">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <button
              disabled
              className="btn-primary w-full opacity-50 cursor-not-allowed"
            >
              Coming Soon
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
