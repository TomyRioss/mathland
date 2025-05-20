'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '#coming', label: 'Coming Soon' },
  { href: '#courses', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '#who', label: 'Who can use MathLand?' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full px-0 sticky top-0 z-50 border-b border-amber-200/30"
      style={{
        background:
          'radial-gradient(ellipse at 60% 0%, rgba(251,191,36,0.15) 0%, rgba(245,158,11,0.15) 60%, rgba(255,255,255,0.95) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px 0 rgba(251,191,36,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center py-2 relative">
        <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-base font-medium">
          <div className="flex gap-6">
            {navItems.slice(0, 2).map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded transition text-gray-700 relative group"
                whileHover={{ scale: 1.08, color: '#f59e0b' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  delay: 0.2 + idx * 0.1,
                  duration: 0.5,
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="group-hover:text-amber-600 transition">
                  {item.label}
                </span>
                <span className="block h-0.5 w-0 group-hover:w-full bg-amber-400 transition-all duration-300 rounded-full absolute left-0 bottom-0"></span>
              </motion.a>
            ))}
          </div>
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center justify-center mx-8 group"
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              delay: 0.4,
              duration: 0.5,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/mathland_logo.png"
              alt="MathLand Logo"
              width={90}
              height={90}
              className="rounded-xl shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300"
              priority
            />
          </motion.a>
          <div className="flex gap-6">
            {navItems.slice(2).map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded transition text-gray-700 relative group"
                whileHover={{ scale: 1.08, color: '#f59e0b' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  delay: 0.5 + idx * 0.1,
                  duration: 0.5,
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="group-hover:text-amber-600 transition">
                  {item.label}
                </span>
                <span className="block h-0.5 w-0 group-hover:w-full bg-amber-400 transition-all duration-300 rounded-full absolute left-0 bottom-0"></span>
              </motion.a>
            ))}
          </div>
        </nav>
        {/* Mobile menu button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setOpen(v => !v)}
          aria-label="Open menu"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span
            className={`block w-6 h-0.5 bg-amber-500 mb-1 transition-transform ${
              open ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-amber-500 mb-1 ${
              open ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-amber-500 transition-transform ${
              open ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </motion.button>
      </div>
      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden flex flex-col gap-2 mt-4 bg-white/95 rounded-xl p-6 shadow-lg animate-fade-in mx-4"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="py-2 rounded text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.3 }}
                whileHover={{ scale: 1.05, color: '#f59e0b' }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
