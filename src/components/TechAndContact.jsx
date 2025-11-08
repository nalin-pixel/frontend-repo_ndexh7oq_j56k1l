import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, CircuitBoard, Cpu, Database, Atom, FlaskConical, Layers, Box } from 'lucide-react';

const tech = [
  { name: 'Python', color: 'bg-sky-100 text-sky-700', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Java', color: 'bg-amber-100 text-amber-800', icon: <Layers className="w-5 h-5" /> },
  { name: 'Flask', color: 'bg-emerald-100 text-emerald-700', icon: <FlaskConical className="w-5 h-5" /> },
  { name: 'React', color: 'bg-sky-100 text-sky-700', icon: <Atom className="w-5 h-5" /> },
  { name: 'Node.js', color: 'bg-emerald-100 text-emerald-800', icon: <CircuitBoard className="w-5 h-5" /> },
  { name: 'MySQL', color: 'bg-amber-100 text-amber-800', icon: <Database className="w-5 h-5" /> },
  { name: 'OpenCV', color: 'bg-sky-100 text-sky-800', icon: <Box className="w-5 h-5" /> },
  { name: 'TensorFlow', color: 'bg-amber-100 text-amber-800', icon: <Box className="w-5 h-5" /> },
  { name: 'Tailwind', color: 'bg-sky-100 text-sky-700', icon: <Atom className="w-5 h-5" /> },
];

const TechBadge = ({ item, i }) => (
  <motion.div
    whileInView={{ y: [0, -6, 0] }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
    className={`flex items-center gap-2 rounded-full px-3 py-1 ${item.color} shadow border border-white`}
  >
    {item.icon}
    <span className="text-sm font-medium">{item.name}</span>
  </motion.div>
);

const TechAndContact = () => {
  return (
    <section id="contact" className="py-20 bg-[#fbf8f1]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Tech & Contact</h2>
          <p className="mt-2 text-gray-700">Floating badges, gentle motion, and a playful contact form.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-wrap gap-3 items-center">
            {tech.map((t, i) => (
              <TechBadge key={t.name} item={t} i={i} />
            ))}
          </div>

          <div className="relative rounded-3xl bg-white/80 backdrop-blur p-6 border border-white/60 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Say hello</h3>
              <div className="w-10 h-10 rounded-full bg-[#bfe6ff] grid place-items-center shadow">
                <Mail className="w-5 h-5 text-sky-700" />
              </div>
            </div>
            <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input className="col-span-1 rounded-2xl px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Your name" />
              <input className="col-span-1 rounded-2xl px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Email" />
              <textarea className="sm:col-span-2 rounded-2xl px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-200" rows="4" placeholder="Message" />
              <button type="button" className="sm:col-span-2 rounded-full bg-black text-white px-5 py-3 shadow-lg hover:shadow-xl">Send Message</button>
            </form>
            <div className="mt-4 flex items-center gap-3 text-gray-700">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:vijay@example.com" className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="#" className="ml-auto inline-flex items-center gap-2 bg-amber-500 text-white rounded-full px-3 py-1 shadow">
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <motion.div whileHover={{ scale: 1.05 }} className="group relative">
            <div className="rounded-full px-6 py-3 bg-white border border-gray-200 shadow-lg">
              <span className="text-gray-900 font-semibold">Thank you</span>
            </div>
            <div className="absolute -top-3 -right-3 text-amber-500">👋</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechAndContact;
