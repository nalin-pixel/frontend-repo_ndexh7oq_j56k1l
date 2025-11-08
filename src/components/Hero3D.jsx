import React, { Suspense, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import { Coffee, Brain, Laptop, FlaskConical, Atom, Sparkles, Layers } from 'lucide-react';

const TechPill = ({ label, color, children }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.05 }}
    className={`flex items-center gap-2 rounded-full px-3 py-1 shadow-md bg-white/70 backdrop-blur border border-white/40 text-sm ${color}`}
  >
    {children}
    <span className="font-medium">{label}</span>
  </motion.div>
);

const FloatingDoodle = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const Hero3D = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [8, -8]);
  const rotateY = useTransform(x, [-200, 200], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fbf8f1]"
    >
      {/* Soft gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#bfe6ff]/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#c9ffe1]/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-[#ffd7c2]/40 blur-3xl" />
      </div>

      {/* Particle wave (simple) */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <svg className="absolute w-[140%] -left-[20%] -bottom-10" viewBox="0 0 1440 320" fill="none">
          <path d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,165.3C672,128,768,64,864,42.7C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#bfe6ff" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#c9ffe1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffd7c2" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div style={{ rotateX, rotateY }} className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl w-full px-6">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Vijay Jagdale
          </motion.h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl">
            Building Intelligent, Scalable & Playful Web Experiences.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <TechPill label="Python" color="text-sky-700">
              <Brain className="w-4 h-4" />
            </TechPill>
            <TechPill label="Java" color="text-amber-700">
              <Layers className="w-4 h-4" />
            </TechPill>
            <TechPill label="React" color="text-sky-700">
              <Atom className="w-4 h-4" />
            </TechPill>
            <TechPill label="Flask" color="text-emerald-700">
              <FlaskConical className="w-4 h-4" />
            </TechPill>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 shadow-lg hover:shadow-xl transition"
            >
              <Sparkles className="w-4 h-4" /> Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-2.5 border border-gray-200 shadow hover:bg-gray-50"
            >
              <Coffee className="w-4 h-4" /> Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-gray-700">
            <FloatingDoodle delay={0.2}>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-2xl px-3 py-2 border border-white/60 shadow">
                <Laptop className="w-4 h-4" />
                <span className="text-sm">Full-Stack Engineer</span>
              </div>
            </FloatingDoodle>
            <FloatingDoodle delay={0.6}>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-2xl px-3 py-2 border border-white/60 shadow">
                <Brain className="w-4 h-4" />
                <span className="text-sm">ML Enthusiast</span>
              </div>
            </FloatingDoodle>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <Suspense fallback={<div className="w-full h-full rounded-3xl bg-white/60 border border-white/60 shadow-inner" /> }>
            <div className="w-full h-full rounded-3xl overflow-hidden border border-white/60 shadow-xl bg-white/40 backdrop-blur">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </Suspense>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
