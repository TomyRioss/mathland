'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        MathLand is more than a platform, it&apos;s a new way of seeing math.
      </motion.h2>
      <motion.p
        className="mb-8 text-lg text-amber-50 text-shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Join us and discover how fun learning can be.
      </motion.p>
      <div className="flex flex-col items-center justify-center">
        <a
          href="#coming"
          className="bg-white text-amber-600 px-10 py-4 rounded-full text-xl font-semibold shadow-xl hover:scale-105 hover:bg-amber-50 transition-transform duration-200 inline-block"
        >
          Coming soon...
        </a>
        <Image
          src="/mathland_logo.png"
          alt="MathLand Logo"
          width={150}
          height={150}
          className="rounded-xl  items-center justify-center"
          priority
        />
      </div>
    </section>
  );
}
