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

const features = [
  {
    title: 'Lead & Client CRM',
    description: 'Track every lead, client, and conversation in one simple dashboard — no more sticky notes or spreadsheets.',
  },
  {
    title: 'Smart Review Requests',
    description: 'Send automated SMS or email review invites after appointments to boost your online reputation.',
  },
  {
    title: 'Online Booking',
    description: 'Let clients schedule services directly through your site — fully synced with your calendar.',
  },
  {
    title: 'Follow-Up Automations',
    description: 'Missed calls? No-shows? RevKnew sends polite reminders or follow-ups automatically.',
  },
  {
    title: 'Performance Insights',
    description: 'See what’s working — from new leads to review counts to response times — all in one place.',
  },
  {
    title: 'Easy Setup',
    description: 'Launch fast with prebuilt settings tuned for local businesses. No tech team needed.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-dark text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-accent drop-shadow-glow">
          What You Can Do with RevKnew
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="glass-card text-center p-6 transition duration-300 ease-in-out hover:shadow-[0_0_12px_#7eff00] hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
