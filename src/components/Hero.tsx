import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, MapPin, Calendar, Download } from 'lucide-react';
import { translations } from '../data/translations';

interface HeroProps {
    language: 'fr' | 'en';
    setCurrentPage: (page: 'home' | 'about' | 'projects' | 'experience' | 'contact') => void;
    darkMode: boolean;
}

export default function Hero({ language, setCurrentPage, darkMode }: HeroProps) {
    const t = translations;
    const cardClass = darkMode
        ? 'glass-card'
        : 'bg-white/80 border-gray-200 backdrop-blur-md';
    const borderColor = darkMode ? 'border-gray-800' : 'border-gray-200';
    const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
    const textTertiary = darkMode ? 'text-gray-500' : 'text-gray-500';

    return (
        <div className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl w-full relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/3 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-zinc-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-zinc-500/20 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                                    alt="Bérenger SESSOU"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Info badges under image */}
                            <div className="mt-8 space-y-3 text-center lg:text-left">
                                <div className="flex items-center gap-3 text-sm font-medium text-zinc-500">
                                    <MapPin size={16} />
                                    <span>Cotonou, Benin</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium text-zinc-500">
                                    <Calendar size={16} />
                                    <span>EPITECH 2023-2026</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Left Column: Content */}
                    <div className="lg:w-2/3 text-center lg:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1 className="text-6xl lg:text-8xl font-black leading-tight tracking-tighter">
                                Bérenger<br />
                                <span className="text-zinc-500 dark:text-white glow-text">SESSOU</span>
                            </h1>
                            <p className={`text-lg uppercase tracking-[0.4em] ${textTertiary} font-bold`}>
                                {t[language].hero.role}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-6"
                        >
                            <a href="https://github.com/Akashi05" target="_blank" rel="noopener noreferrer" className={`p-3 ${cardClass} rounded-xl hover:scale-110 hover:border-zinc-500 transition-all`}>
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/" target="_blank" rel="noopener noreferrer" className={`p-3 ${cardClass} rounded-xl hover:scale-110 hover:border-zinc-500 transition-all`}>
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:sessouberenger@gmail.com" className={`p-3 ${cardClass} rounded-xl hover:scale-110 hover:border-zinc-500 transition-all`}>
                                <Mail size={20} />
                            </a>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className={`text-xl ${textSecondary} leading-relaxed max-w-2xl`}
                        >
                            {t[language].hero.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
                        >
                            <button
                                onClick={() => setCurrentPage('projects')}
                                className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center gap-2 group shadow-xl"
                            >
                                {t[language].hero.cta_projects}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => setCurrentPage('contact')}
                                className={`px-8 py-4 border-2 ${borderColor} rounded-xl hover:bg-zinc-500/10 hover:border-zinc-500 transition-all hover:scale-105 font-bold`}
                            >
                                {t[language].hero.cta_contact}
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
                        >
                            <a
                                href="/cv_fr.pdf"
                                download="CV_Berenger_Sessou_FR.pdf"
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderColor} text-xs font-bold hover:border-zinc-500 transition-all text-zinc-500`}
                            >
                                <Download size={14} /> {t[language].hero.cv_fr}
                            </a>
                            <a
                                href="/cv_en.pdf"
                                download="CV_Berenger_Sessou_EN.pdf"
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${borderColor} text-xs font-bold hover:border-zinc-500 transition-all text-zinc-500`}
                            >
                                <Download size={14} /> {t[language].hero.cv_en}
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
