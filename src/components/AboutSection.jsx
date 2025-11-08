import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cog, Cloud, Quote } from 'lucide-react';

const Float = ({ delay = 0, children }) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    whileInView={{ y: [0, -8, 0], opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-[#fbf8f1]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-6 w-24 h-24 rounded-full bg-[#c9ffe1]/40 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-[#bfe6ff]/40 blur-2xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl border-2 border-dashed border-amber-200 bg-white/70 backdrop-blur px-6 sm:px-10 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="absolute -top-4 left-6 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold shadow">About</div>
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Hello! I’m Vijay.</h2>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                I’m a software engineer passionate about building scalable applications and solving real-world problems through machine learning, computer vision, and web development.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-gray-700">
                <Float>
                  <div className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2 border border-emerald-100 shadow-sm">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">Research</span>
                  </div>
                </Float>
                <Float delay={0.3}>
                  <div className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2 border border-sky-100 shadow-sm">
                    <Cog className="w-4 h-4 text-sky-600" />
                    <span className="text-sm">Systems</span>
                  </div>
                </Float>
                <Float delay={0.6}>
                  <div className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2 border border-amber-100 shadow-sm">
                    <Cloud className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">Cloud</span>
                  </div>
                </Float>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
                <Quote className="w-6 h-6 text-amber-500" />
                <p className="mt-3 text-gray-700">
                  "Curiosity drives my craft — from optimizing backend systems to teaching models how to see the world. I love turning complex ideas into intuitive, playful experiences."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
