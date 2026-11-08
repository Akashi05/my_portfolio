import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { translations } from '../data/translations';
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
    language: 'fr' | 'en';
    darkMode: boolean;
}

export default function Contact({ language, darkMode }: ContactProps) {
    const [state, handleSubmit] = useForm("xdapdrpv"); // Remplace avec ton ID Formspree si tu en as un, sinon il faudra en créer un
    const t = translations;
    const cardClass = '';
    const textSecondary = 'text-muted-foreground';

    return (
        <div className="editorial-section flex items-center justify-center px-6 lg:px-12">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <p className={`text-sm uppercase tracking-widest text-muted-foreground font-bold mb-4`}>04 / {t[language].contact.subtitle}</p>
                    <h2 className="section-title font-bold mb-6">{t[language].contact.title}</h2>
                    <p className={`text-xl ${textSecondary} max-w-2xl`}>
                        {t[language].contact.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className={`${cardClass} flex items-center gap-4 py-8 border-t border-border`}>
                            <div className="p-4 bg-secondary/10 text-muted-foreground rounded-lg">
                                <Mail size={32} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-bold text-xl mb-1">Email</h3>
                                <a href="mailto:sessouberenger@gmail.com" className="block text-muted-foreground hover:text-foreground  transition-colors truncate">
                                    sessouberenger@gmail.com
                                </a>
                                <a href="mailto:berenger.sessou@epitech.eu" className="block text-muted-foreground hover:text-foreground  transition-colors truncate mt-1">
                                    berenger.sessou@epitech.eu
                                </a>
                            </div>
                        </div>

                        <a href="https://wa.me/2290164778682" target="_blank" rel="noopener noreferrer" className={`${cardClass} flex items-center gap-4 py-8 border-t border-border`}>
                            <div className="p-4 bg-secondary/10 text-muted-foreground rounded-lg">
                                <Phone size={32} />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-xl">WhatsApp</h3>
                                <p className={`${textSecondary} break-words`}>+229 01 64 77 86 82</p>
                            </div>
                        </a>
                    </div>

                    <form onSubmit={handleSubmit} className={`${cardClass} space-y-6`}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold mb-2 text-muted-foreground">{t[language].contact.form_name}</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                className="w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus:outline-none focus:border-border transition-colors"
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-2 text-muted-foreground">{t[language].contact.form_email}</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                className="w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus:outline-none focus:border-border transition-colors"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold mb-2 text-muted-foreground">{t[language].contact.form_message}</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus:outline-none focus:border-border transition-colors"
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <Button type="submit" disabled={state.submitting} className="w-full bg-primary text-primary-foreground  font-bold h-auto py-4 rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-50">
                            {state.succeeded ? (language === 'fr' ? 'Message envoyé !' : 'Message sent!') : t[language].contact.form_send}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
