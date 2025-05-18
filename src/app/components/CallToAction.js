'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-800 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Ready to Start Your Math Journey?
      </motion.h2>
      <motion.p
        className="mb-8 text-lg text-purple-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Sign up now and unlock a world of mathematical exploration!
      </motion.p>
      <a
        href="#coming"
        className="bg-white text-purple-800 px-10 py-4 rounded-full text-xl font-semibold shadow-xl hover:scale-105 hover:bg-purple-100 transition-transform duration-200 inline-block"
      >
        Sign Up for Free
      </a>
    </section>
  );
}
