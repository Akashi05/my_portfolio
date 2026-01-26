"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Code2, Server, Cpu, Terminal, Database, Award, Heart, X, Github, Menu } from 'lucide-react';
import { translations } from '../data/translations';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  const pageNames = ['home', 'about', 'projects', 'experience', 'contact'] as const;
  type PageName = typeof pageNames[number];
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations;

  // Tracking de la souris pour l'effet lampe torche
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth mouse tracking
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Persistence de l'état (Page et Mode Sombre)
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) setDarkMode(JSON.parse(savedMode));

    const savedPage = localStorage.getItem('currentPage');
    if (savedPage !== null && pageNames.includes(savedPage as PageName)) {
      setCurrentPage(savedPage as PageName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const bgClass = darkMode
    ? 'bg-[#0a0a0a] text-gray-100'
    : 'bg-gray-50 text-gray-900';

  const cardClass = darkMode
    ? 'glass-card'
    : 'bg-white/80 border-gray-200 backdrop-blur-md';
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Hero language={language} setCurrentPage={setCurrentPage} darkMode={darkMode} />;
      case 'about':
        return <About language={language} darkMode={darkMode} />;
      case 'projects':
        return <Projects language={language} darkMode={darkMode} setSelectedProject={setSelectedProject} />;
      case 'experience':
        return <Experience language={language} darkMode={darkMode} />;
      case 'contact':
        return <Contact language={language} darkMode={darkMode} />;
      default:
        return <Hero language={language} setCurrentPage={setCurrentPage} darkMode={darkMode} />;
    }
  };

  const handlePageChange = (page: PageName) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-zinc-500/30 ${bgClass}`}>
      {/* Flashlight Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-500"
        style={{
          background: darkMode
            ? `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.03), transparent 80%)`
            : `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.03), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 lg:px-12 backdrop-blur-sm">
        <button onClick={() => handlePageChange('home')} className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          BS<span className="text-zinc-500">.</span>
        </button>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            {pageNames.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`hover:text-zinc-500 transition-colors relative group ${currentPage === page ? 'text-zinc-500' : ''}`}
              >
                {t[language].nav[page]}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-zinc-500 transition-all duration-300 group-hover:w-full ${currentPage === page ? 'w-full' : ''}`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="p-2 rounded-full hover:bg-zinc-500/10 transition-colors font-bold text-xs flex items-center gap-1"
            >
              <Globe size={16} /> {language.toUpperCase()}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-zinc-500/10 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-zinc-500/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-40 lg:hidden ${bgClass} flex flex-col items-center justify-center gap-8`}
          >
            {pageNames.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`text-3xl font-black uppercase tracking-tighter hover:text-zinc-500 transition-colors ${currentPage === page ? 'text-zinc-500' : ''}`}
              >
                {t[language].nav[page]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-black tracking-tighter">BS<span className="text-zinc-500">.</span></h3>
              <p className="text-zinc-500 max-w-md">
                {t[language].footer.bio}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t[language].footer.nav}</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                {pageNames.map((page) => (
                  <li key={page}>
                    <button onClick={() => setCurrentPage(page)} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                      {t[language].nav[page]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t[language].footer.contact}</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="mailto:sessouberenger@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">sessouberenger@gmail.com</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-zinc-500/10 text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Bérenger SESSOU. {t[language].footer.rights}</p>
            <p className="flex items-center gap-1">
              {t[language].footer.designed} <Heart size={14} />
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className={`${cardClass} w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border relative z-10 flex flex-col lg:flex-row`}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-black/50 text-white rounded-full hover:bg-zinc-500 transition-all z-20"
            >
              <X size={24} />
            </button>

            <div className="lg:w-1/2 h-64 lg:h-auto">
              <img src={selectedProject.media} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            <div className="lg:w-1/2 p-8 lg:p-12">
              <p className="text-zinc-500 font-bold uppercase tracking-widest mb-4">{selectedProject.category}</p>
              <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>
              <p className={`text-lg ${textSecondary} mb-8 leading-relaxed`}>{selectedProject.description}</p>

              <div className="space-y-6 mb-8">
                <h4 className="font-bold text-xl">{t[language].projects.highlights}</h4>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2.5"></div>
                      <span className={textSecondary}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tech.map((tech: string) => (
                  <span key={tech} className="px-4 py-2 bg-zinc-500/10 border border-zinc-500/20 rounded-xl text-zinc-500 font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:scale-105 transition-all"
              >
                <Github size={20} /> {t[language].projects.github}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
