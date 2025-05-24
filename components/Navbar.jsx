'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';

const sections = ['features', 'testimonials', 'pricing'];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-dark/70 backdrop-blur-md shadow-md border-b border-white/10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end items-center">
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative pb-1 ${
                    active === id
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-gray-400 hover:text-white border-b-2 border-transparent hover:border-white'
                  }`}
                >
                  <span className="capitalize">{id}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Disclosure.Button className="md:hidden text-white ml-4">
              {open ? <HiX size={26} /> : <HiMenu size={26} />}
            </Disclosure.Button>
          </div>

          {/* Mobile Panel */}
          <Disclosure.Panel className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-dark text-white text-sm">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block px-4 py-2 rounded-md ${
                  active === id ? 'bg-accent text-black' : 'hover:bg-white/10'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
