'use client';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section
      id="join"
      className="relative py-24 px-6 text-center bg-gradient-to-br from-dark via-black to-dark text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-accent drop-shadow-glow">
          Join the Private Beta
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Be the first to experience the next evolution in local service software. Beta slots are limited.
        </p>

        <motion.a
          href="#"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px #7eff00, 0 0 40px #7eff00',
          }}
          className="inline-block bg-accent text-black font-semibold py-3 px-6 rounded-lg transition-all animate-glow focus-ring"
        >
          Request Access Now
        </motion.a>
      </motion.div>

      {/* subtle glowing background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
    </motion.section>
  );
}
