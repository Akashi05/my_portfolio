import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';
import { skills } from '../data/skills';

interface AboutProps {
    language: 'fr' | 'en';
    darkMode: boolean;
}

export default function About({ language, darkMode }: AboutProps) {
    const t = translations;
    const cardClass = darkMode
        ? 'glass-card'
        : 'bg-white/80 border-gray-200 backdrop-blur-md';
    const borderColor = darkMode ? 'border-gray-800' : 'border-gray-200';
    const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
    const textTertiary = darkMode ? 'text-gray-500' : 'text-gray-500';

    return (
        <div className="min-h-screen px-6 lg:px-12 py-24">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <p className={`text-sm uppercase tracking-widest text-zinc-500 font-bold mb-4`}>{t[language].about.subtitle}</p>
                    <h2 className="text-5xl font-bold mb-8">{t[language].about.title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className={`lg:col-span-2 space-y-6 text-lg ${textSecondary} leading-relaxed`}>
                        <p>{t[language].about.description1}</p>
                        <p>{t[language].about.description2}</p>
                        <p>{t[language].about.description3}</p>
                    </div>

                    <div className="space-y-8">
                        <div className={`${cardClass} p-6 rounded-2xl border`}>
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

                        <div className={`${cardClass} p-6 rounded-2xl border`}>
                            <h3 className="font-bold text-xl mb-4 text-zinc-500">{t[language].about.languages}</h3>
                            <div className="space-y-2">
                                <p><span className="font-medium">{t[language].about.lang_fr}:</span> {t[language].about.lang_native}</p>
                                <p><span className="font-medium">{t[language].about.lang_en}:</span> {t[language].about.lang_intermediate}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`mt-16 pt-16 border-t ${borderColor}`}
                >
                    <h3 className="font-bold text-2xl mb-8">{t[language].about.skills_title}</h3>
                    <div className="flex flex-wrap gap-4">
                        {Object.entries(skills).flatMap(([category, items]) =>
                            items.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className={`${cardClass} px-6 py-4 rounded-2xl border flex flex-col items-center justify-center gap-3 min-w-[120px] hover-glow transition-all duration-300 group`}
                                >
                                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        <img
                                            src={`https://cdn.simpleicons.org/${skill.logo}/${darkMode ? 'white' : 'black'}`}
                                            alt={skill.name}
                                            className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <span className="text-sm font-bold tracking-tight">{skill.name}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
                                        {t[language].about.skill_cats[category as keyof typeof t.en.about.skill_cats]}
                                    </span>
                                </motion.div>
                            ))
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
