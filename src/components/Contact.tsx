import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { translations } from "../data/translations";
import Reveal from "./Reveal";
import { useForm, ValidationError } from "@formspree/react";

interface ContactProps {
  language: "fr" | "en";
  darkMode: boolean;
}

export default function Contact({ language }: ContactProps) {
  const [state, handleSubmit] = useForm("xdapdrpv");
  const t = translations[language];

  return (
    <div className="editorial-section mx-auto max-w-7xl px-6 lg:px-12">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="section-head grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16"
      >
        <div>
          <p className="section-index">
            04 <span className="opacity-40">/</span> {t.contact.subtitle}
          </p>
          <h2 className="section-title mt-6">
            <Reveal>{t.contact.title}</Reveal>
          </h2>
        </div>
        <div>
          <p className="section-lede">{t.contact.description}</p>
        </div>
      </motion.header>

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="flex items-start gap-5 border-t border-border py-8">
            <Mail size={22} className="mt-1 shrink-0 text-muted-foreground" />
            <div className="min-w-0">
              <h3 className="mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Email
              </h3>
              <a
                href="mailto:sessouberenger@gmail.com"
                className="block truncate text-lg transition-colors hover:text-muted-foreground"
              >
                sessouberenger@gmail.com
              </a>
              <a
                href="mailto:berenger.sessou@epitech.eu"
                className="mt-1 block truncate text-lg transition-colors hover:text-muted-foreground"
              >
                berenger.sessou@epitech.eu
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/2290164778682"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-5 border-t border-border py-8"
          >
            <Phone size={22} className="mt-1 shrink-0 text-muted-foreground" />
            <div className="min-w-0">
              <h3 className="mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                WhatsApp
              </h3>
              <p className="text-lg">+229 01 64 77 86 82</p>
            </div>
          </a>

          <div className="border-t border-border py-8 text-sm text-muted-foreground">
            {t.contact.location}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" aria-label={t.contact.form_send}>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              {t.contact.form_name}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              required
              className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base focus:border-foreground focus:outline-none"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              {t.contact.form_email}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base focus:border-foreground focus:outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              {t.contact.form_message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base focus:border-foreground focus:outline-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button
            type="submit"
            disabled={state.submitting}
            className="h-14 w-full rounded-full font-bold uppercase tracking-[0.1em] transition-transform hover:scale-[1.01] disabled:opacity-50"
          >
            {state.succeeded
              ? language === "fr"
                ? "Message envoyé !"
                : "Message sent!"
              : t.contact.form_send}
          </Button>
        </form>
      </div>
    </div>
  );
}
