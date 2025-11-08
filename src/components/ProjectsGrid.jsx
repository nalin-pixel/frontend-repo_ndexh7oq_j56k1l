import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Cpu, Database, ScanEye } from 'lucide-react';

const projects = [
  {
    title: 'Pipe Fault Detection (BARC)',
    desc: 'Deep learning + OpenCV system with 95% precision for industrial pipelines.',
    tags: ['Deep Learning', 'OpenCV', 'Python'],
    icon: <ScanEye className="w-6 h-6 text-sky-700" />,
  },
  {
    title: 'ML Crop Yield Predictor',
    desc: 'Preprocessing + Scikit-learn based recommendation model for yields.',
    tags: ['Pandas', 'Scikit-learn', 'ML'],
    icon: <Sprout className="w-6 h-6 text-emerald-700" />,
  },
  {
    title: 'HireEase Job Portal',
    desc: 'Full-stack Java + MySQL application with modern UI and role-based features.',
    tags: ['Java', 'MySQL', 'Web'],
    icon: <Database className="w-6 h-6 text-amber-700" />,
  },
];

const ProjectTile = ({ p, i }) => (
  <motion.a
    href="#"
    whileHover={{ y: -6, rotate: [-0.5, 0.5, 0] }}
    className="group relative rounded-3xl bg-white/80 backdrop-blur p-6 border-2 border-dashed border-[#ffd7c2] shadow-lg hover:shadow-xl"
  >
    <div className="absolute -top-3 -left-3 bg-peach-100 text-amber-700 px-3 py-1 rounded-full text-xs">Project</div>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-[#fbf8f1] flex items-center justify-center shadow-inner">
        {p.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
    </div>
    <p className="mt-3 text-gray-700 text-sm leading-relaxed">{p.desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full bg-white border border-gray-200 text-gray-700 text-xs px-2 py-1">{t}</span>
      ))}
    </div>
  </motion.a>
);

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 bg-[#fbf8f1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Projects</h2>
          <p className="mt-2 text-gray-700">Interactive picks from ML and full‑stack work.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectTile key={i} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
