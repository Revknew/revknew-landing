'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: '“RevKnew replaced four tools I was juggling. My team is faster and I finally have everything in one place.”',
    name: 'Ashley C.',
    role: 'Owner, SparkClean Services',
  },
  {
    quote: '“Clients love how easy scheduling is now. We get more 5-star reviews without asking twice.”',
    name: 'Marco D.',
    role: 'Founder, PoolFlex AZ',
  },
  {
    quote: '“RevKnew helps me follow up automatically. My response time is faster, and I don’t forget leads.”',
    name: 'Lena W.',
    role: 'Admin, DryPro Roofing',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-dark text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-accent drop-shadow-glow">
          What Service Pros Are Saying
        </h2>

        <div className="space-y-12">
          {testimonials.map((t, index) => (
            <motion.blockquote
              key={t.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="max-w-3xl mx-auto bg-white bg-opacity-5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg text-accent hover:shadow-[0_0_12px_#7eff00] transition-all"
            >
              <p className="text-lg italic mb-4">“{t.quote.replace(/“|”/g, '')}”</p>
              <footer className="text-sm text-gray-400">
                — {t.name}, {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
