'use client';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-500 text-sm text-center py-8 border-t border-white/10">
      {/* Links */}
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="/privacy">
          <span className="hover:text-white transition">Privacy Policy</span>
        </Link>
        <span>|</span>
        <Link href="/terms">
          <span className="hover:text-white transition">Terms of Service</span>
        </Link>
        <span>|</span>
        <Link href="/sitemap">
          <span className="hover:text-white transition">Sitemap</span>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://x.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://linkedin.com/company/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      {/* Legal Text */}
      <p className="mb-2">
        &copy; {new Date().getFullYear()} RevKnew. All rights reserved.
      </p>
      <p>
        RevKnew is a product of Verrado Desert Ventures LLC, Arizona.
      </p>
    </footer>
  );
}
