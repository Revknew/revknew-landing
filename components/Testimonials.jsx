'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jenna B.',
    title: 'Founder @ HandyHouse',
    quote: 'RevKnew replaced 4 tools in one move. Our ops team is faster and leaner now.',
  },
  {
    name: 'Marcus T.',
    title: 'Ops Lead @ PoolPro',
    quote: 'Finally, a CRM that doesn’t feel like a spreadsheet in disguise.',
  },
  {
    name: 'Leah R.',
    title: 'Director @ HomeRun Services',
    quote: 'It’s like having a virtual assistant who never sleeps. Game changer.',
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="bg-dark text-white py-20 px-6"
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
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-accent drop-shadow-glow">
          What Operators Are Saying
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 12px #7eff00, 0 0 24px #7eff00',
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass-card p-6 text-left transition-all"
            >
              <div className="text-accent text-lg italic mb-4">“{t.quote}”</div>
              <div className="mt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

