import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { translations } from '../data/translations';
import { skills } from '../data/skills';

interface AboutProps {
    language: 'fr' | 'en';
    darkMode: boolean;
}

const CountingNumber = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            onUpdate: (latest) => setCount(Math.floor(latest)),
        });
        return () => controls.stop();
    }, [value]);

    return <span>{count}</span>;
};

export default function About({ language, darkMode }: AboutProps) {
    const t = translations;
    const cardClass = darkMode
        ? 'glass-card'
        : 'bg-white/80 border-gray-200 backdrop-blur-md';
    const borderColor = darkMode ? 'border-zinc-800' : 'border-zinc-200';
    const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
    const textTertiary = darkMode ? 'text-gray-500' : 'text-gray-500';

    const highPriority = ['C', 'C++', 'Django', 'Django REST Framework', 'Git', 'Docker'];
    const mediumPriority = ['Python', 'Rust', 'PostgreSQL', 'GitHub Actions', 'SDL'];

    // Flatten skills for the Bento grid
    const flattenedSkills = Object.entries(skills).flatMap(([category, items]) =>
        items.map(skill => ({ ...skill, category }))
    );

    return (
        <div className="min-h-screen py-24 overflow-x-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-24">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className={`text-sm uppercase tracking-widest text-zinc-500 font-bold mb-4`}>{t[language].about.subtitle}</p>
                    <h2 className="text-5xl font-bold">{t[language].about.title}</h2>
                </motion.div>

                {/* Top Content: Intro & Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className={`space-y-6 text-xl ${textSecondary} leading-relaxed font-medium`}>
                            {Object.entries(t[language].about)
                                .filter(([key]) => key.startsWith('description'))
                                .sort()
                                .map(([key, value]) => (
                                    <p key={key}>{value as string}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className={`${cardClass} p-6 rounded-2xl border ${borderColor}`}>
                            <h3 className="font-bold text-xl mb-4 text-zinc-500">{t[language].about.formation}</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium">Bachelor d'expertise informatique</p>
                                    <p className={`text-sm ${textSecondary}`}>EPITECH Benin 6th semester (in progress)</p>
                                    <p className={`text-sm ${textTertiary}`}>Feb 2024</p>
                                </div>
                                <div>
                                    <p className="font-medium">BAC D</p>
                                    <p className={`text-sm ${textSecondary}`}>Cardinal Bernandin Gantin (CBG)</p>
                                    <p className={`text-sm ${textTertiary}`}>Jun 2023</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${cardClass} p-6 rounded-2xl border ${borderColor}`}>
                            <h3 className="font-bold text-xl mb-4 text-zinc-500">{t[language].about.languages}</h3>
                            <div className="space-y-2">
                                <p><span className="font-medium">{t[language].about.lang_fr}:</span> {t[language].about.lang_native}</p>
                                <p><span className="font-medium">{t[language].about.lang_en}:</span> {t[language].about.lang_intermediate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Stats Section */}
            <div className="mt-20 mb-24 w-full relative">
                <div className={`w-full h-px ${darkMode ? 'bg-zinc-800/50' : 'bg-zinc-200'} mb-8`} />
                <div className="px-6 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-col xl:flex-row items-center xl:items-end justify-between gap-12"
                    >
                        <div className="flex items-baseline gap-4">
                            <span className={`text-[8rem] md:text-[10rem] font-mono font-bold leading-none tracking-tighter ${darkMode ? 'text-zinc-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'text-zinc-900 drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]'}`}>
                                <CountingNumber value={t[language].about.stats.total} />
                            </span>
                            <span className="text-4xl md:text-6xl font-bold text-zinc-500 leading-none">+</span>
                        </div>

                        <div className="flex-1 max-w-4xl space-y-8 text-center xl:text-left pb-4">
                            <div className="space-y-4">
                                <p className={`text-[14px] uppercase tracking-[0.6em] font-black ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                    {t[language].about.stats.total_label}
                                </p>
                                <h4 className={`text-2xl md:text-4xl font-black leading-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                                    {(t[language].about.stats as any).details}
                                </h4>
                            </div>
                            <div className="flex flex-wrap justify-center xl:justify-start gap-4">
                                {['Web', 'Low-level', 'DevOps'].map((tag) => (
                                    <span key={tag} className={`px-8 py-2 text-[12px] uppercase tracking-[0.3em] font-black rounded-full border ${borderColor} ${darkMode ? 'bg-zinc-900/50 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className={`w-full h-px ${darkMode ? 'bg-zinc-800/50' : 'bg-zinc-200'} mt-8`} />
            </div>

            {/* Truly Full Width Bento Skills Section - Perfectly Filled */}
            <div className="w-full px-6 lg:px-24 pb-24 max-w-[2000px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <h3 className="font-bold text-4xl text-center md:text-left tracking-tight">{t[language].about.skills_title}</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-flow-dense gap-4 md:gap-6 w-full">
                        {flattenedSkills.map((skill, index) => {
                            const isHigh = highPriority.includes(skill.name);
                            const isMed = mediumPriority.includes(skill.name);

                            // Responsive span logic
                            // On mobile (cols-2): high/med span 2 (full width), others span 1
                            // On desktop (cols-6): high/med span 2, others span 1
                            const spanClass = isHigh ? 'col-span-2' : (isMed ? 'col-span-2' : 'col-span-1');

                            return (
                                <motion.div
                                    key={`${skill.name}-${index}`}
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    className={`${cardClass} p-8 md:p-10 rounded-[2.5rem] border ${borderColor} flex flex-col items-center justify-center gap-6 group hover-glow transition-all duration-300 ${spanClass} min-h-[200px] md:min-h-[220px] relative overflow-hidden`}
                                >

                                    <div className={`flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${isHigh ? 'w-24 h-24' : 'w-14 h-14'}`}>
                                        {(() => {
                                            const logoSrc = skill.logo.startsWith('/')
                                                ? skill.logo
                                                : `https://cdn.simpleicons.org/${skill.logo}/${darkMode ? 'white' : 'black'}`;
                                            return (
                                                <img
                                                    src={logoSrc}
                                                    alt={skill.name}
                                                    className={`object-contain transition-all duration-500 ${isHigh ? 'w-20 h-20 opacity-100' : 'w-10 h-10 opacity-60 group-hover:opacity-100'}`}
                                                />
                                            );
                                        })()}
                                    </div>
                                    <div className="text-center">
                                        <span className={`${isHigh ? 'text-2xl font-black' : isMed ? 'text-xl font-bold' : 'text-base font-bold'} tracking-tight block uppercase text-zinc-500 group-hover:text-inherit transition-colors`}>
                                            {skill.name}
                                        </span>
                                        <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-2">
                                            {skill.name === 'SDL' ? (language === 'fr' ? 'Outil' : 'Tool') :
                                                skill.name === 'C' ? (language === 'fr' ? 'Langage' : 'Language') :
                                                    t[language].about.skill_cats[skill.category as keyof typeof t.en.about.skill_cats]}
                                        </p>
                                    </div>

                                    {/* Active border indicator on hover */}
                                    <div className={`absolute bottom-0 left-0 h-1 bg-zinc-500/10 w-0 group-hover:w-full transition-all duration-500`} />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
