import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';

interface ProjectsProps {
    language: 'fr' | 'en';
    darkMode: boolean;
    setSelectedProject: (project: any) => void;
}

export default function Projects({ language, darkMode, setSelectedProject }: ProjectsProps) {
    const t = translations;

    const cardClass = darkMode
        ? 'glass-card'
        : 'bg-white/80 border-gray-200 backdrop-blur-md';
    const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';

    const projects = t[language].projects_data;
    const sortedProjects = [...projects].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className="min-h-screen px-6 lg:px-12 py-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`text-sm uppercase tracking-widest text-zinc-500 font-bold mb-4`}
                    >
                        {t[language].projects.subtitle}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold"
                    >
                        {t[language].projects.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`mt-4 ${textSecondary}`}
                    >
                        {t[language].projects.timeline}
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Main Vertical Line (Left Aligned on Desktop) */}
                    <div className="absolute left-4 lg:left-32 top-0 bottom-0 w-px bg-zinc-500/20 hidden md:block"></div>

                    <div className="space-y-20 lg:space-y-32">
                        {sortedProjects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="relative flex flex-col md:flex-row items-start gap-8 lg:gap-12 group"
                            >
                                {/* Date / Year Indicator (Sticky-ish on the left) */}
                                <div className="hidden md:flex md:w-32 flex-col items-end pt-2 pr-8 sticky top-24">
                                    <span className="text-sm font-bold text-zinc-500 uppercase tracking-tighter">{project.period.split(' ')[0]}</span>
                                    <span className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                        {project.date.split('-')[0]}
                                    </span>
                                </div>

                                {/* Timeline Point */}
                                <div className="absolute left-4 lg:left-32 w-3 h-3 bg-zinc-400 rounded-full -translate-x-1/2 mt-4 z-10 border-2 border-white dark:border-[#0a0a0a] group-hover:bg-white transition-colors duration-500 hidden md:block"></div>
                                <div className="absolute left-4 lg:left-32 w-8 h-8 bg-zinc-500/10 rounded-full -translate-x-1/2 mt-1.5 z-0 blur-sm scale-0 group-hover:scale-150 transition-transform duration-500 hidden md:block"></div>

                                {/* Horizontal Content Card */}
                                <div
                                    className={`flex-1 ${cardClass} rounded-3xl overflow-hidden border flex flex-col lg:flex-row h-full lg:h-72 hover:shadow-2xl transition-all duration-500 group/card cursor-pointer`}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Image Side */}
                                    <div className="w-full lg:w-2/5 h-48 lg:h-full overflow-hidden relative">
                                        <img
                                            src={project.media}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/0 transition-colors duration-500"></div>
                                    </div>

                                    {/* Text Side */}
                                    <div className="flex-1 p-8 flex flex-col justify-center">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{project.category}</p>
                                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                            </div>
                                            <span className="md:hidden text-xs text-zinc-500 font-medium">{project.period}</span>
                                        </div>

                                        <p className={`text-sm ${textSecondary} line-clamp-2 lg:line-clamp-3 mb-6 leading-relaxed`}>
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="text-[10px] px-3 py-1 bg-zinc-500/5 dark:bg-white/5 border border-zinc-500/10 dark:border-white/10 rounded-full text-zinc-500 dark:text-zinc-400 font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Floating Detail Button */}
                                    <div className="absolute bottom-6 right-6 opacity-0 lg:group-hover/card:opacity-100 transition-all translate-y-2 lg:group-hover/card:translate-y-0 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
