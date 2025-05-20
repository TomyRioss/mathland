'use client';

import { motion } from 'framer-motion';

const features = [
  {
    href: '#coming',
    desc: 'Structured courses and interactive lessons that guide you step by step, from basic concepts to more advanced challenges, with clear, dynamic, and accessible explanations for all learners.',
    icon: '📚',
  },
  {
    href: '#courses',
    desc: 'ath games and challenges that turn every concept into an adventure, encouraging active participation and critical thinking.',
    icon: '🎲',
  },
  {
    href: '#about',
    desc: 'Digital and downloadable manipulative materials designed to support the understanding of mathematical concepts through objects, colors, and movement. These tools spark imagination and offer a wide range of options to enrich learning in a hands-on and meaningful way. ',
    icon: '🧩',
  },
  {
    href: '#who',
    desc: ' Exploration of patterns, shapes, numbers, and operations in a visual and practical way, helping connect math with real-life situations.',
    icon: '🌐',
  },
  {
    href: '#reasoning',
    desc: 'Activities that help develop skills such as reasoning, observation, problem-solving, and creativity.',
    icon: '🧠',
  },
  {
    href: '#families',
    desc: 'Spaces for families and educators, with guides, suggestions, and tools to support the learning process at home or in the classroom.',
    icon: '👨‍👩‍👧‍👦',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b bg-slate-200" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900/90 text-center mb-4">
            What will you find at MathLand?
          </h2>
          <p className="text-gray-600 text-center text-xl">
            At MathLand, every corner is designed to make learning math an
            engaging, dynamic, and accessible experience for everyone. Our
            platform will offer a wide variety of resources tailored to
            different learning styles and levels:
          </p>
        </motion.div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center border border-amber-200/20 group hover:bg-amber-50/40 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{
                scale: 1.07,
                boxShadow: '0 8px 32px 0 rgba(251,191,36,0.1)',
              }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <p className="text-gray-600 text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
