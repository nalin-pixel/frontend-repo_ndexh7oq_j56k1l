import React from 'react';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ExperienceCarousel from './components/ExperienceCarousel';
import ProjectsGrid from './components/ProjectsGrid';
import TechAndContact from './components/TechAndContact';

const App = () => {
  return (
    <div className="font-sans antialiased bg-[#fbf8f1] text-gray-900">
      <Hero3D />
      <AboutSection />
      <ExperienceCarousel />
      <ProjectsGrid />
      <TechAndContact />
    </div>
  );
};

export default App;
