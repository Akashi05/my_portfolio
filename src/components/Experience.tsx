import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { translations } from '../data/translations';

interface ExperienceProps {
    language: 'fr' | 'en';
    darkMode: boolean;
}

export default function Experience({ language, darkMode }: ExperienceProps) {
    const t = translations;
    const cardClass = 'glass-card';
    const textTertiary = 'text-muted-foreground';
    const textSecondary = 'text-muted-foreground';

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
                    <p className={`text-sm uppercase tracking-widest text-muted-foreground font-bold mb-4`}>{t[language].experience.subtitle}</p>
                    <h2 className="text-5xl font-bold">{t[language].experience.title}</h2>
                </motion.div>

                <div className="space-y-12">
                    {t[language].experience_data.map((exp, idx) => (
                        <div key={idx} className={`${cardClass} p-8 rounded-lg border hover-glow`}>
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-muted-foreground">{exp.title}</h3>
                                    <p className="text-xl font-medium">{exp.company}</p>
                                </div>
                                <div className={`flex flex-wrap gap-4 text-sm ${textTertiary}`}>
                                    <span className="flex items-center gap-2 bg-secondary/5 px-3 py-1 rounded-full border border-border/10">
                                        <MapPin size={14} className="text-muted-foreground" /> {exp.location}
                                    </span>
                                    <span className="flex items-center gap-2 bg-secondary/5 px-3 py-1 rounded-full border border-border/10">
                                        <Calendar size={14} className="text-muted-foreground" /> {exp.period}
                                    </span>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className={`flex items-start gap-3 ${textSecondary}`}>
                                        <div className="w-1.5 h-1.5 bg-secondary/50 rounded-full mt-2.5"></div>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
