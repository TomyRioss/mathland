'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="py-24 px-4 bg-gradient-to-r from-amber-50/50 via-white to-amber-50/50"
      id="about"
    >
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block w-24 h-1 rounded-full bg-amber-300/50"></span>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-amber-900/90 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          About Us
        </motion.h2>
        <motion.div
          className="space-y-4 text-lg sm:text-xl text-gray-600 mb-6 animate-fade-in delay-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="italic text-amber-800/80">
            We&apos;re building a space designed just for you.
          </p>
          <div className="bg-amber-50/40 rounded-xl p-4 shadow-inner border border-amber-200/20">
            <p className="mb-2">
              MathLand, an interactive platform created to transform the way
              math is learned, will be available very soon. In this space,
              numbers become games, challenges spark thinking, and every
              activity invites you to explore, imagine, and build knowledge in a
              fun and engaging way.
            </p>
            <p className="text-amber-800/80">
              Whether you&apos;re just beginning your math journey or looking
              for new ways to strengthen your learning, MathLand will support
              you with practical, entertaining, and colorful resources.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
