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

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-zinc-500/20 -translate-x-1/2 hidden lg:block"></div>

                    {sortedProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 lg:left-1/2 w-4 h-4 bg-zinc-500 rounded-full -translate-x-1/2 z-10 hidden lg:block border-4 border-white dark:border-[#0a0a0a]"></div>

                            {/* Content Card */}
                            <div
                                className={`w-full lg:w-1/2 ${cardClass} rounded-3xl overflow-hidden border group hover-glow cursor-pointer transition-all duration-500`}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={project.media} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">{t[language].projects.view_details}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{project.category}</p>
                                        <p className="text-xs text-zinc-500 font-medium">{project.period}</p>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className={`text-sm ${textSecondary} line-clamp-2 mb-4`}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-[10px] px-2 py-1 border border-zinc-500/20 rounded-md text-zinc-500/70">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for the other side in desktop */}
                            <div className="hidden lg:block lg:w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
