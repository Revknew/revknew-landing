'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? 'bg-dark/70 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left Spacer */}
        <div className="w-1/3" />

        {/* Center Nav Links */}
        <nav className="hidden md:flex justify-center w-1/3 space-x-8 text-accent font-medium text-sm">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        {/* Right (Removed Buttons) */}
        <div className="w-1/3" />
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark px-6 py-4 space-y-4 text-accent"
        >
          <a href="#features" className="block hover:text-white transition">Features</a>
          <a href="#testimonials" className="block hover:text-white transition">Testimonials</a>
          <a href="#pricing" className="block hover:text-white transition">Pricing</a>
          {/* Removed Login & Get Started */}
        </motion.div>
      )}
    </motion.header>
  );
}
