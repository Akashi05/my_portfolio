import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Sun, Moon, Globe, Heart, X, ArrowRight, Menu } from 'lucide-react';
import { translations } from '@/data/translations';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const sections = ['home', 'about', 'projects', 'experience', 'contact'] as const;
type Section = typeof sections[number];
type Project = typeof translations.fr.projects_data[number];

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [darkMode, setDarkMode] = useState(true);
  const [themeReady, setThemeReady] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true' || savedMode === 'false') setDarkMode(savedMode === 'true');
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode, themeReady]);

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  useEffect(() => {
    const updateSection = () => {
      let active: Section = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 150) active = section;
      }
      setCurrentSection(active);
    };
    window.addEventListener('scroll', updateSection, { passive: true });
    updateSection();
    return () => window.removeEventListener('scroll', updateSection);
  }, []);

  useEffect(() => {
    if (!selectedProject && !isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setSelectedProject(null); setIsMenuOpen(false); }
    };
    document.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', escape); };
  }, [selectedProject, isMenuOpen]);

  const scrollToSection = (section: Section) => {
    setIsMenuOpen(false);
    setCurrentSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    window.history.replaceState(null, '', `#${section}`);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className={`portfolio min-h-screen bg-background text-foreground font-sans transition-colors duration-500 selection:bg-foreground/20 ${darkMode ? 'dark' : ''}`}>
        <nav aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'} className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 py-4 lg:px-12 bg-background/90 border-b border-border backdrop-blur-md">
          <Button variant="ghost" onClick={() => scrollToSection('home')} className="px-0 font-display text-2xl font-black" aria-label="Accueil">BS.</Button>
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="hidden lg:flex items-center gap-3">
              {sections.map(section => <Button variant="ghost" key={section} onClick={() => scrollToSection(section)} aria-current={currentSection === section ? 'location' : undefined} className={`relative uppercase text-xs font-bold ${currentSection === section ? 'text-foreground' : 'text-muted-foreground'}`}>
                {t.nav[section]}{currentSection === section && <span className="absolute bottom-0 inset-x-4 h-px bg-foreground" />}
              </Button>)}
            </div>
            <Button variant="ghost" onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'} className="px-2 text-xs font-bold"><Globe /> {language.toUpperCase()}</Button>
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Mode clair' : 'Mode sombre'} title={darkMode ? 'Mode clair' : 'Mode sombre'}>{darkMode ? <Sun /> : <Moon />}</Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isMenuOpen} className="lg:hidden">{isMenuOpen ? <X /> : <Menu />}</Button>
          </div>
        </nav>
        {isMenuOpen && <div className="fixed inset-0 z-40 lg:hidden bg-background flex flex-col items-center justify-center gap-6">
          {sections.map(section => <Button variant="ghost" key={section} onClick={() => scrollToSection(section)} className="font-display text-3xl font-bold h-auto">{t.nav[section]}</Button>)}
        </div>}
        <main>
          <section id="home" aria-label={t.nav.home}><Hero language={language} setCurrentPage={scrollToSection} darkMode={darkMode} /></section>
          <section id="about" aria-label={t.nav.about} className="border-t border-border"><About language={language} darkMode={darkMode} /></section>
          <section id="projects" aria-label={t.nav.projects} className="border-t border-border"><Projects language={language} darkMode={darkMode} setSelectedProject={setSelectedProject} /></section>
          <section id="experience" aria-label={t.nav.experience} className="border-t border-border"><Experience language={language} darkMode={darkMode} /></section>
          <section id="contact" aria-label={t.nav.contact} className="border-t border-border"><Contact language={language} darkMode={darkMode} /></section>
        </main>
        <footer className="py-12 border-t border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
              <div className="lg:col-span-2 space-y-4"><h3 className="text-2xl font-black">BS.</h3><p className="text-muted-foreground max-w-md">{t.footer.bio}</p></div>
              <div><h4 className="font-bold mb-4">{t.footer.nav}</h4><ul className="space-y-2 text-sm text-muted-foreground">{sections.map(section => <li key={section}><Button variant="link" onClick={() => scrollToSection(section)} className="p-0 h-auto text-muted-foreground">{t.nav[section]}</Button></li>)}</ul></div>
              <div><h4 className="font-bold mb-4">{t.footer.contact}</h4><ul className="space-y-2 text-sm text-muted-foreground break-words">
                <li><a href="mailto:sessouberenger@gmail.com" className="hover:text-foreground">sessouberenger@gmail.com</a></li>
                <li><a href="mailto:berenger.sessou@epitech.eu" className="hover:text-foreground">berenger.sessou@epitech.eu</a></li>
                <li><a href="https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a></li>
                <li><a href="https://github.com/Akashi05" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a></li>
              </ul></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4 items-center pt-8 border-t border-border text-sm text-muted-foreground"><p>© {new Date().getFullYear()} Bérenger SESSOU. {t.footer.rights}</p><p className="flex items-center gap-1">{t.footer.designed} <Heart size={14} /></p></div>
          </div>
        </footer>
        {selectedProject && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="project-title">
          <div className="absolute inset-0 bg-overlay backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className="bg-card text-card-foreground w-full max-w-5xl max-h-[90svh] overflow-y-auto rounded-lg border border-border relative z-10 flex flex-col lg:flex-row">
            <Button autoFocus variant="secondary" size="icon" onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20" aria-label="Fermer le projet"><X /></Button>
            <div className="lg:w-1/2 h-64 lg:h-auto bg-secondary flex items-center justify-center p-4"><img src={selectedProject.media} alt={selectedProject.title} className="w-full h-full object-contain rounded-lg" /></div>
            <div className="lg:w-1/2 p-6 lg:p-12"><p className="text-muted-foreground font-bold uppercase mb-4">{selectedProject.category}</p><h3 id="project-title" className="text-4xl font-bold mb-6">{selectedProject.title}</h3><p className="text-lg text-muted-foreground mb-8 leading-relaxed">{selectedProject.description}</p>
              <h4 className="font-bold text-xl mb-4">{t.projects.highlights}</h4><ul className="space-y-3 mb-8">{selectedProject.highlights.map((highlight, i) => <li key={i} className="flex items-start gap-3"><span className="w-1.5 h-1.5 shrink-0 bg-foreground rounded-full mt-2.5" /><span className="text-muted-foreground">{highlight}</span></li>)}</ul>
              <div className="flex flex-wrap gap-2 mb-8">{selectedProject.tech.map(tech => <span key={tech} className="px-3 py-2 bg-secondary border border-border rounded-md text-muted-foreground text-sm">{tech}</span>)}</div>
              <Button asChild className="h-auto py-4 px-6"><a href={selectedProject.github} target="_blank" rel="noopener noreferrer"><ArrowRight />{t.projects.github}</a></Button>
            </div>
          </div>
        </div>}
      </div>
    </MotionConfig>
  );
}
