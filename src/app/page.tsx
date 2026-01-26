"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, MapPin, Calendar, Award, Code2, Server, Cpu, Globe, Terminal, Database, Sun, Moon } from 'lucide-react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const skills = {
    languages: ['C/C++', 'Python', 'JavaScript', 'Haskell', 'HTML/CSS'],
    frameworks: ['Django', 'Next.js', 'Django REST Framework', 'Tailwind CSS'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'GitHub Actions', 'Git'],
    databases: ['PostgreSQL', 'SQLite'],
    tools: ['WordPress', 'Godot', 'Railway', 'SFML', 'Ncurses', 'SDL']
  };

  const projects = [
    {
      title: 'Arcade - Virtual Console',
      role: 'Core & Game Developer',
      description: 'Console virtuelle avec plusieurs jeux et types d\'affichage différents (SFML, Ncurses, SDL).',
      highlights: [
        'Implémentation de la logique des jeux en C++',
        'Gestion du core reliant interface graphique et jeux',
        'Support multi-display (SFML, Ncurses, SDL)',
        'Architecture modulaire pour ajout de nouveaux jeux'
      ],
      tech: ['C++', 'SFML', 'Ncurses', 'SDL'],
      category: 'Game Development',
      period: 'Mars - Avril 2025',
      date: '2025-04',
      github: 'https://github.com/yourusername/arcade'
    },
    {
      title: 'AREA - Automation Platform',
      role: 'Lead Backend & Architect',
      description: 'Clone d\'IFTTT/Zapier avec architecture microservices Django/DRF. Moteur d\'automation asynchrone avec workers multithreads pour intégrations API (Google, Discord, GitHub).',
      highlights: [
        'Architecture microservices avec Django/DRF',
        'Moteur d\'automation asynchrone avec workers multithreads',
        'Backend OAuth2 "Central Hub" unifiant Web/Mobile',
        'Migration SQLite → PostgreSQL et déploiement Railway'
      ],
      tech: ['Django', 'DRF', 'Docker', 'PostgreSQL', 'OAuth2', 'Railway'],
      category: 'Full-Stack & Architecture',
      period: '2024',
      date: '2024-12',
      github: 'https://github.com/yourusername/area'
    },
    {
      title: 'Burp - Cybersecurity Challenge',
      role: 'Security Analyst',
      description: 'Escalade de privilèges dans différents contextes sur TryHackMe.',
      highlights: [
        'Techniques de bruteforce avancées',
        'Scanning et reconnaissance de vulnérabilités',
        'Exploitation de failles de sécurité',
        'Pratique sur environnements TryHackMe'
      ],
      tech: ['Cybersecurity', 'Bruteforce', 'Scanning', 'TryHackMe'],
      category: 'Cybersecurity',
      period: '2024',
      date: '2024-11',
      github: 'https://github.com/yourusername/burp'
    },
    {
      title: 'Whanos - DevOps Automation Platform',
      role: 'DevOps Engineer',
      description: 'Plateforme CI/CD Jenkins automatisant la détection de technologie, build Docker et déploiement automatique.',
      highlights: [
        'Pipeline Jenkins automatisé de bout en bout',
        'Images Docker robustes pour 5 langages',
        'Détection automatique de stack technologique',
        'Builds optimisés et exécution cohérente'
      ],
      tech: ['Jenkins', 'Docker', 'CI/CD', 'Automation'],
      category: 'DevOps & Infrastructure',
      period: '2024',
      date: '2024-10',
      github: 'https://github.com/yourusername/whanos'
    },
    {
      title: 'EpyTodo - Task Manager API',
      role: 'Backend Developer',
      description: 'Application web de gestion de tâches avec API REST complète.',
      highlights: [
        'Création d\'API REST pour gestion des requêtes',
        'Système d\'authentification avec tokens JWT',
        'Gestion complète des utilisateurs et tâches',
        'Architecture RESTful optimisée'
      ],
      tech: ['Node.js', 'REST API', 'JWT', 'Express'],
      category: 'Web Development',
      period: '2024',
      date: '2024-09',
      github: 'https://github.com/yourusername/epytodo'
    },
    {
      title: 'Chocolatine - CI/CD Automation',
      role: 'DevOps Engineer',
      description: 'Automatisation de tâches via GitHub Actions pour améliorer le workflow de développement.',
      highlights: [
        'Mise en place de GitHub Actions',
        'Vérification automatique de fichiers et build',
        'Mirroring automatique de dépôts GitHub',
        'Pipeline d\'intégration continue'
      ],
      tech: ['GitHub Actions', 'CI/CD', 'Automation', 'Git'],
      category: 'DevOps & Infrastructure',
      period: '2024',
      date: '2024-08',
      github: 'https://github.com/yourusername/chocolatine'
    },
    {
      title: 'R-Type Game Engine',
      role: 'Engine Developer',
      description: 'Moteur de jeu 2D haute performance développé from scratch en C++17 avec architecture ECS.',
      highlights: [
        'Architecture ECS (Entity Component System) en C++17',
        'Moteur réseau UDP bas-latence pour multijoueur',
        'Chiffrement custom des paquets pour la sécurité',
        'Performance optimisée pour le temps réel'
      ],
      tech: ['C++17', 'ECS', 'UDP', 'Networking', 'Encryption'],
      category: 'Game Engine & Systems',
      period: '2024',
      date: '2024-06',
      github: 'https://github.com/yourusername/rtype'
    }
  ];

  const experience = [
    {
      title: 'Web & Game Developer Intern',
      company: 'Africereal',
      location: 'Cotonou, Benin',
      period: 'Nov 2024 – Jan 2025',
      achievements: [
        'Conception d\'une maquette pour un site web d\'e-learning (WordPress, HTML/CSS)',
        'Gestion du ciel dans un jeu éducatif de simulation d\'agriculture (Godot engine)',
        'Contribution aux projets de digitalisation'
      ]
    },
    {
      title: 'Participant, DISCOVERY 2025',
      company: 'Future Studio',
      location: 'Cotonou, Benin',
      period: 'Février 2025',
      achievements: [
        'Participation à une semaine de Discovery sur des problématiques du secteur du sport au Bénin',
        'Collaboration en équipe sur des solutions techniques innovantes',
        '🏆 Retenu comme ayant la meilleure solution (1ère place)'
      ]
    }
  ];

  const bgClass = darkMode
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100'
    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900';

  const cardClass = darkMode
    ? 'bg-gray-800/50 border-gray-700'
    : 'bg-white/80 border-gray-200';

  const hoverCardClass = darkMode
    ? 'hover:bg-gray-700/70 hover:border-gray-600'
    : 'hover:bg-gray-50 hover:border-gray-300';

  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
  const textTertiary = darkMode ? 'text-gray-500' : 'text-gray-500';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  const renderHome = () => (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl w-full">
        <div className="space-y-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-black text-white text-sm font-medium hover:scale-110 hover:shadow-xl transition-all cursor-default">
            🎯 En recherche d'alternance
          </div>

          <div className="space-y-4">
            <p className={`text-sm uppercase tracking-widest ${textTertiary} font-medium`}>Software Engineer Student</p>
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Bérenger<br />
              <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>SESSOU</span>
            </h1>
          </div>

          <p className={`text-xl ${textSecondary} leading-relaxed max-w-2xl mx-auto`}>
            Étudiant en 3ème année d'expertise informatique à EPITECH, spécialisé en architecture DevOps, développement full-stack et systèmes scalables.
          </p>

          <div className={`flex flex-wrap justify-center items-center gap-4 text-sm ${textTertiary}`}>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Cotonou, Benin</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>EPITECH 2024-2027</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>Né le 15/11/2005</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button
              onClick={() => setCurrentPage('projects')}
              className={`px-8 py-4 ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} transition-all flex items-center gap-2 group hover:scale-110 hover:shadow-xl`}
            >
              Voir mes projets
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`px-8 py-4 border-2 ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-all hover:scale-110 hover:shadow-xl`}
            >
              Me contacter
            </button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`p-4 ${cardClass} border-2 ${hoverCardClass} transition-all hover:scale-125 hover:shadow-xl`}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`p-4 ${cardClass} border-2 ${hoverCardClass} transition-all hover:scale-125 hover:shadow-xl`}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:sessouberenger@gmail.com" className={`p-4 ${cardClass} border-2 ${hoverCardClass} transition-all hover:scale-125 hover:shadow-xl`}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className={`text-sm uppercase tracking-widest ${textTertiary} font-medium mb-4`}>À propos</p>
          <h2 className="text-5xl font-bold mb-8">Qui suis-je ?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className={`lg:col-span-2 space-y-6 text-lg ${textSecondary} leading-relaxed`}>
            <p>
              Étudiant en 3ème année d'expertise informatique à EPITECH Benin, passionné d'informatique et en recherche d'une alternance pour acquérir plus d'expériences et perfectionner mes compétences.
            </p>
            <p>
              Mon parcours m'a permis de développer une expertise solide en architecture logicielle, DevOps et développement full-stack. De l'architecture de moteurs de jeu haute performance en C++ à la conception de plateformes d'automation avec Django, j'aime relever des défis techniques complexes.
            </p>
            <p>
              Ma récente victoire au DISCOVERY 2025 (1ère place) témoigne de ma capacité à innover et à collaborer efficacement en équipe pour créer des solutions digitales impactantes dans le secteur du sport au Bénin.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Formation</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Bachelor d'expertise informatique</p>
                  <p className={`text-sm ${textSecondary}`}>EPITECH Benin (en cours)</p>
                  <p className={`text-sm ${textTertiary}`}>Depuis février 2024</p>
                  <p className={`text-xs ${textTertiary} mt-1`}>3ème année - Tek 3</p>
                </div>
                <div className={`pt-3 border-t ${borderColor}`}>
                  <p className="font-medium">Baccalauréat série D</p>
                  <p className={`text-sm ${textSecondary}`}>Cardinal Bernadin Gantin</p>
                  <p className={`text-sm ${textTertiary}`}>Juin 2023</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Langues</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Français:</span> Natif</p>
                <p><span className="font-medium">Anglais:</span> Intermédiaire</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Soft Skills</h3>
              <div className="space-y-2 text-sm">
                <p>• Esprit d'équipe</p>
                <p>• Assimilation rapide</p>
                <p>• Résilient</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Centres d'intérêt</h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 ${cardClass} border text-sm hover:scale-110 hover:shadow-md transition-all cursor-default`}>🏃 Sport</span>
                <span className={`px-3 py-1 ${cardClass} border text-sm hover:scale-110 hover:shadow-md transition-all cursor-default`}>📚 Lecture</span>
                <span className={`px-3 py-1 ${cardClass} border text-sm hover:scale-110 hover:shadow-md transition-all cursor-default`}>🎮 Gaming</span>
                <span className={`px-3 py-1 ${cardClass} border text-sm hover:scale-110 hover:shadow-md transition-all cursor-default`}>🎨 Dessin</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 pt-16 border-t ${borderColor}`}>
          <h3 className="font-bold text-2xl mb-8">Compétences Techniques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className={`font-semibold text-sm uppercase tracking-wider ${textTertiary} mb-4 flex items-center gap-2`}>
                  {category === 'languages' && <Code2 size={16} />}
                  {category === 'frameworks' && <Globe size={16} />}
                  {category === 'devops' && <Server size={16} />}
                  {category === 'databases' && <Database size={16} />}
                  {category === 'tools' && <Terminal size={16} />}
                  {category === 'languages' ? 'Langages' : category === 'frameworks' ? 'Frameworks' : category === 'devops' ? 'DevOps & CI/CD' : category === 'databases' ? 'Databases' : 'Outils'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className={`px-3 py-1 ${cardClass} border text-sm ${hoverCardClass} transition-all cursor-default hover:scale-110 hover:shadow-md`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className={`text-sm uppercase tracking-widest ${textTertiary} font-medium mb-4`}>Portfolio</p>
          <h2 className="text-5xl font-bold">Projets Techniques</h2>
          <p className={`mt-4 ${textSecondary}`}>Chronologie de mes réalisations</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className="relative pl-12 group">
                {/* Timeline dot */}
                <div className={`absolute left-0 top-6 w-4 h-4 rounded-full -translate-x-[7px] ${darkMode ? 'bg-white group-hover:bg-gray-300' : 'bg-black group-hover:bg-gray-700'} transition-colors`}></div>

                <div className={`${cardClass} border-2 p-8 ${hoverCardClass} transition-all hover:scale-105 relative`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <p className={`text-sm ${textTertiary} mb-2`}>{project.category}</p>
                      <h3 className="text-3xl font-bold mb-2 group-hover:opacity-80 transition-opacity">{project.title}</h3>
                      <p className={`text-sm uppercase tracking-wider ${textTertiary}`}>{project.role}</p>
                    </div>
                    <div className={`text-right ${textTertiary}`}>
                      <div className="flex items-center gap-2 justify-end">
                        <Calendar size={16} />
                        <span className="font-medium">{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className={`${textSecondary} text-lg leading-relaxed mb-6`}>{project.description}</p>

                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-gray-400' : 'bg-gray-600'} rounded-full mt-2 flex-shrink-0`}></div>
                        <p className={textSecondary}>{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-4 py-2 border ${borderColor} text-sm ${textSecondary} hover:scale-110 hover:border-current transition-all cursor-default hover:shadow-md`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub arrow button - positioned at bottom right */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-8 right-8 p-4 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} transition-all hover:scale-125 hover:shadow-2xl`}
                    aria-label="Voir le code sur GitHub"
                  >
                    <ArrowRight size={24} className="group-hover:scale-125 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="min-h-screen px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className={`text-sm uppercase tracking-widest ${textTertiary} font-medium mb-4`}>Parcours</p>
          <h2 className="text-5xl font-bold">Expérience Professionnelle</h2>
        </div>

        <div className="space-y-16">
          {experience.map((exp, idx) => (
            <div key={idx} className={`relative pl-8 border-l-2 ${borderColor}`}>
              <div className={`absolute left-0 top-0 w-4 h-4 ${darkMode ? 'bg-white' : 'bg-black'} rounded-full -translate-x-[9px]`}></div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className={`text-xl ${textSecondary} mb-3`}>{exp.company}</p>
                  <div className={`flex flex-wrap gap-4 text-sm ${textTertiary}`}>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`flex items-start gap-3 ${textSecondary}`}>
                      <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-gray-500' : 'bg-gray-400'} rounded-full mt-2 flex-shrink-0`}></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl w-full">
        <div className="mb-16 text-center">
          <p className={`text-sm uppercase tracking-widest ${textTertiary} font-medium mb-4`}>Contact</p>
          <h2 className="text-5xl font-bold mb-6">Travaillons Ensemble</h2>
          <p className={`text-xl ${textSecondary} max-w-2xl mx-auto`}>
            Je suis ouvert aux opportunités de stage, collaboration et projets innovants. N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:sessouberenger@gmail.com" className={`group p-8 ${cardClass} border-2 ${hoverCardClass} transition-all hover:scale-110 hover:shadow-xl`}>
            <Mail size={32} className="mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className={`text-sm ${textSecondary} break-all`}>sessouberenger@gmail.com</p>
          </a>

          <div className={`p-8 ${cardClass} border-2 hover:scale-110 hover:shadow-xl transition-all cursor-default`}>
            <div className="text-2xl mb-4">📱</div>
            <h3 className="font-bold mb-2">Téléphone</h3>
            <p className={`text-sm ${textSecondary}`}>+229 01 64 77 86 82</p>
            <p className={`text-xs ${textTertiary} mt-1`}>+229 66 47 13 14</p>
          </div>

          <div className={`p-8 ${cardClass} border-2 hover:scale-110 hover:shadow-xl transition-all cursor-default`}>
            <MapPin size={32} className="mb-4" />
            <h3 className="font-bold mb-2">Localisation</h3>
            <p className={`text-sm ${textSecondary}`}>Cotonou, Benin</p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className={textSecondary}>Retrouvez-moi également sur :</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`p-4 ${cardClass} border-2 ${hoverCardClass} transition-all hover:scale-125 hover:shadow-xl`}>
              <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`p-4 ${cardClass} border-2 ${hoverCardClass} transition-all hover:scale-125 hover:shadow-xl`}>
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const pages = {
    home: renderHome(),
    about: renderAbout(),
    projects: renderProjects(),
    experience: renderExperience(),
    contact: renderContact()
  };

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${borderColor} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className={`text-2xl font-bold hover:opacity-70 transition-all hover:scale-110`}>
            BS
          </button>

          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`capitalize text-sm font-medium transition-all relative hover:scale-110 ${currentPage === page ? '' : `${textTertiary} hover:opacity-100`
                    }`}
                >
                  {page === 'home' ? 'Accueil' : page === 'about' ? 'À propos' : page === 'projects' ? 'Projets' : page === 'experience' ? 'Expérience' : 'Contact'}
                  {currentPage === page && (
                    <div className={`absolute -bottom-2 left-0 right-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 ${cardClass} border rounded-full ${hoverCardClass} transition-all hover:scale-125 hover:shadow-xl`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-20">
        {pages[currentPage]}
      </div>

      {/* Footer */}
      <footer className={`border-t ${borderColor} py-8 transition-colors duration-300`}>
        <div className={`max-w-7xl mx-auto px-6 text-center text-sm ${textTertiary}`}>
          <p>© 2026 Bérenger SESSOU. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
