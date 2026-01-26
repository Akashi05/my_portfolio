import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { translations } from '../data/translations';

interface ContactProps {
    language: 'fr' | 'en';
    darkMode: boolean;
}

export default function Contact({ language, darkMode }: ContactProps) {
    const t = translations;
    const cardClass = darkMode
        ? 'glass-card'
        : 'bg-white/80 border-gray-200 backdrop-blur-md';
    const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';

    return (
        <div className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-24">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <p className={`text-sm uppercase tracking-widest text-zinc-500 font-bold mb-4`}>{t[language].contact.subtitle}</p>
                    <h2 className="text-5xl font-bold mb-6">{t[language].contact.title}</h2>
                    <p className={`text-xl ${textSecondary} max-w-2xl mx-auto`}>
                        {t[language].contact.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <a href="mailto:sessouberenger@gmail.com" className={`${cardClass} flex items-center gap-6 p-8 rounded-3xl border hover-glow`}>
                            <div className="p-4 bg-zinc-500/10 text-zinc-500 rounded-2xl">
                                <Mail size={32} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-xl">Email</h3>
                                <p className={`${textSecondary} break-all`}>sessouberenger@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://wa.me/2290164778682" target="_blank" rel="noopener noreferrer" className={`${cardClass} flex items-center gap-6 p-8 rounded-3xl border hover-glow`}>
                            <div className="p-4 bg-zinc-500/10 text-zinc-500 rounded-2xl">
                                <Phone size={32} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-xl">WhatsApp</h3>
                                <p className={`${textSecondary} break-words`}>+229 01 64 77 86 82</p>
                            </div>
                        </a>
                    </div>

                    <form className={`${cardClass} p-8 rounded-3xl border space-y-6`}>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-zinc-500">{t[language].contact.form_name}</label>
                            <input
                                type="text"
                                className="w-full bg-zinc-500/5 border border-zinc-500/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-zinc-500">{t[language].contact.form_email}</label>
                            <input
                                type="email"
                                className="w-full bg-zinc-500/5 border border-zinc-500/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-zinc-500">{t[language].contact.form_message}</label>
                            <textarea
                                rows={4}
                                className="w-full bg-zinc-500/5 border border-zinc-500/10 rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-500 transition-colors"
                            ></textarea>
                        </div>
                        <button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">
                            {t[language].contact.form_send}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
