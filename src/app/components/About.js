'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="py-24 px-4 bg-gradient-to-r from-purple-950 via-gray-900 to-gray-950"
      id="about"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block w-24 h-1 rounded-full bg-purple-400/70"></span>
        </motion.div>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-purple-200 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          About Us
        </motion.h2>
        <motion.div
          className="space-y-4 text-lg sm:text-xl text-purple-100 mb-6 animate-fade-in delay-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="italic text-purple-200">
            We&apos;re building a space designed just for you.
          </p>
          <div className="bg-white/10 rounded-xl p-4 shadow-inner border border-purple-400/10">
            <p className="mb-2">
              MathLand, an interactive platform created to transform the way
              math is learned, will be available very soon. In this space,
              numbers become games, challenges spark thinking, and every
              activity invites you to explore, imagine, and build knowledge in a
              fun and engaging way.
            </p>
            <p className="text-purple-200">
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
