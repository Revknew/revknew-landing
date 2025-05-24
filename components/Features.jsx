// Features.jsx
'use client';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Features() {
  const features = [
    {
      title: 'Smart CRM',
      description: 'Manage leads, clients, and communication in one centralized platform.',
    },
    {
      title: 'Automated Reviews',
      description: 'Collect and boost reviews with automated SMS/email flows.',
    },
    {
      title: 'Scheduling',
      description: 'Let customers book directly from your site, synced with your calendar.',
    },
    {
      title: 'AI Follow-Ups',
      description: 'Automatically follow up with leads and no-shows with personalized messages.',
    },
    {
      title: 'Analytics',
      description: 'Know what’s working: open rates, reviews, conversions — at a glance.',
    },
    {
      title: 'One-Click Setup',
      description: 'Get started fast with templates prebuilt for local businesses.',
    },
  ];

  return (
    <motion.section
      id="features"
      className="py-20 px-4 bg-dark text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-accent drop-shadow-glow">
          Key Features
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 12px #7eff00, 0 0 24px #7eff00',
            }}
            viewport={{ once: true }}
            variants={cardVariants}
            className="glass-card text-center transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
