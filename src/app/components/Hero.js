'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [...Array(18)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-10">
      {particles.map(particle => (
        <span
          key={particle.id}
          className={`absolute w-1.5 h-1.5 rounded-full bg-amber-300/30 animate-float${
            particle.id % 6
          } animate-duration-${4 + (particle.id % 4)}s animate-delay-${
            particle.id * 0.2
          }s`}
          style={{
            left: particle.left,
            top: particle.top,
            filter: 'blur(1.5px)',
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-32 min-h-[60vh] overflow-hidden bg-gradient-to-br from-amber-550 via-yellow-500 to-orange-550">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-300/80 via-yellow-500/60 to-amber-600/90 animate-gradient-x" />
        <svg
          className="absolute left-[-10vw] top-[-10vh] w-[40vw] h-[40vw] opacity-40 blur-2xl animate-spin-slow"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(200 200) rotate(90) scale(180)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fcd34d" stopOpacity="0.5" />
              <stop offset="1" stopColor="#fbbf24" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className="absolute right-[-10vw] bottom-[-10vh] w-[40vw] h-[40vw] opacity-30 blur-2xl animate-spin-reverse-slow"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(200 200) rotate(90) scale(180)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="1" stopColor="#fcd34d" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
        <Particles />
      </div>
      <div className="relative z-20 flex flex-col items-center max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 drop-shadow-2xl leading-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-100 bg-clip-text text-transparent relative inline-block">
            Welcome to MathLand!
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-200 rounded-full blur-md opacity-60 animate-pulse"></span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
          className="w-full"
        >
          <p className="text-xl sm:text-2xl mb-10 font-semibold bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-50 bg-clip-text text-transparent shadow-lg relative inline-block px-2 py-1 rounded-lg">
            <span className="absolute -inset-1 bg-white/10 rounded-lg blur-md opacity-40 -z-10"></span>
            A world where learning math is a fun, creative, and discovery-filled
            experience.
          </p>
        </motion.div>
      </div>
      <style jsx>{`
        .animate-gradient-x {
          animation: gradient-x 12s ease-in-out infinite alternate;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-spin-slow {
          animation: spin 32s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse 36s linear infinite;
        }
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          100% {
            transform: rotate(-360deg);
          }
        }
        .animate-float0 {
          animation: float 6s ease-in-out infinite alternate;
        }
        .animate-float1 {
          animation: float 7s ease-in-out infinite alternate;
        }
        .animate-float2 {
          animation: float 8s ease-in-out infinite alternate;
        }
        .animate-float3 {
          animation: float 9s ease-in-out infinite alternate;
        }
        .animate-float4 {
          animation: float 10s ease-in-out infinite alternate;
        }
        .animate-float5 {
          animation: float 11s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-40px);
          }
        }
      `}</style>
    </section>
  );
}
