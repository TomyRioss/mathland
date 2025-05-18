'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      className="py-24 px-4 bg-gradient-to-br from-gray-950 to-purple-950"
      id="who"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-purple-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Who can use MathLand?
        </motion.h2>
        <motion.p
          className="text-gray-200 mb-12 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          MathLand is designed for anyone interested in learning, teaching, or
          supporting the development of mathematical thinking in a fun,
          practical, and enriching way.
        </motion.p>
        <div className="grid gap-10 sm:grid-cols-2">
          {[0, 1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center animate-fade-in"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {i === 0 && (
                <>
                  <div className="text-5xl mb-3">🧒👦👧</div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Children & Students
                  </h3>
                  <p className="text-gray-100">
                    Of all levels who want to explore math in a more visual,
                    practical, and stimulating way.
                  </p>
                </>
              )}
              {i === 1 && (
                <>
                  <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Families & Caregivers
                  </h3>
                  <p className="text-gray-100">
                    Looking for tools to support learning at home in a fun,
                    hands-on, and effective manner.
                  </p>
                </>
              )}
              {i === 2 && (
                <>
                  <div className="text-5xl mb-3">👩‍🏫🧑‍🏫</div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Teachers & Education Professionals
                  </h3>
                  <p className="text-gray-100">
                    Interested in incorporating active methodologies, digital
                    tools, and new ways of teaching math in their classrooms.
                  </p>
                </>
              )}
              {i === 3 && (
                <>
                  <div className="text-5xl mb-3">🧑‍💻🤔</div>
                  <h3 className="text-xl font-semibold text-purple-200 mb-2">
                    Curious & Self-taught Individuals
                  </h3>
                  <p className="text-gray-100">
                    Who enjoy challenges, logical thinking, and interactive
                    resources to strengthen their skills.
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
