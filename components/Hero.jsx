// Hero.jsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-start px-4 pt-4 pb-hero-bottom text-center bg-dark text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-2 -mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="/RevKnew_logo_transparent.png"
          alt="RevKnew Logo"
          width={400}
          height={400}
          className="mx-auto"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
      >
        CRM & Reviews Supercharged for Local Service Pros
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mb-8"
      >
        RevKnew combines automation, messaging, scheduling, and reputation tools in one sleek platform.
      </motion.p>
    </motion.section>
  );
};

export default Hero;
