import React from 'react';
import { motion } from 'framer-motion';
import { Factory, BadgeCheck } from 'lucide-react';

const experiences = [
  {
    title: 'Bhabha Atomic Research Centre',
    role: 'ML Research Intern',
    period: 'Pipeline Defect Detection',
    details:
      'Built a deep learning pipeline for detecting defects in industrial pipes using CNNs and OpenCV. Achieved 95%+ precision through robust preprocessing and model tuning.',
  },
];

const Bubble = ({ item, index }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative rounded-3xl p-6 bg-white/80 backdrop-blur border border-white/60 shadow-lg hover:shadow-xl"
  >
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-[#bfe6ff] flex items-center justify-center">
        <Factory className="w-6 h-6 text-sky-700" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.role} • {item.period}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-700 text-sm leading-relaxed">{item.details}</p>
    <div className="mt-4 inline-flex items-center gap-2 text-emerald-700 text-sm">
      <BadgeCheck className="w-4 h-4" /> 95%+ precision
    </div>
  </motion.div>
);

const ExperienceCarousel = () => {
  return (
    <section id="experience" className="py-20 bg-[#fbf8f1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Experience</h2>
          <p className="mt-2 text-gray-700">Journey highlights and impact.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((e, i) => (
            <Bubble key={i} item={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
