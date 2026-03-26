export const translations = {
    fr: {
        nav: { home: 'Accueil', about: 'À propos', projects: 'Projets', experience: 'Expérience', contact: 'Contact' },
        hero: {
            status: '🎯 En recherche d\'alternance',
            role: 'Étudiant en Ingénierie Logicielle',
            description: 'Étudiant en Ingénierie logicielle à Epitech avec une expérience pratique en développement fullstack, automatisation DevOps, architecture de moteur de jeu. Capable de construire des systèmes évolutifs et à résoudre des problèmes complexes dans des environnements collaboratifs.',
            cta_projects: 'Voir mes projets',
            cta_contact: 'Me contacter',
            cv_fr: 'Télécharger CV (FR)',
            cv_en: 'Télécharger CV (EN)',
        },
        about: {
            title: 'Qui suis-je ?',
            subtitle: 'À propos',
            description1: 'Étudiant en 3ème année d\'expertise informatique à EPITECH Benin, passionné d\'informatique et en recherche d\'un stage pour acquérir plus d\'expériences et perfectionner mes compétences.',
            description2: 'Mon parcours m\'a permis de développer une expertise solide en architecture logicielle, DevOps et développement full-stack. De l\'architecture de moteurs de jeu haute performance en C++ à la conception de plateformes d\'automation avec Django, j\'aime relever des défis techniques complexes.',
            description3: 'Ma récente victoire au DISCOVERY 2025 (1ère place) témoigne de ma capacité à innover et à collaborer efficacement en équipe pour créer des solutions digitales impactantes. À ce jour, j\'ai réalisé plus de 120 projets techniques (incluant mes projets académiques à EPITECH et mes projets personnels) allant du développement web aux systèmes bas niveaux.',
            stats: {
                projects: '120+',
                projects_label: 'Projets réalisés',
                tech: '30+',
                tech_label: 'Technologies',
                experience: '3+',
                experience_label: 'Expériences'
            },
            formation: 'Formation',
            languages: 'Langues',
            soft_skills: 'Soft Skills',
            interests: 'Centres d\'intérêt',
            skills_title: 'Compétences Techniques',
            lang_fr: 'Français',
            lang_en: 'Anglais',
            lang_native: 'Natif',
            lang_intermediate: 'Intermédiaire',
            skill_cats: {
                languages: 'Langages',
                frameworks: 'Frameworks',
                devops: 'DevOps & CI/CD',
                databases: 'Bases de données',
                tools: 'Outils'
            }
        },
        projects: {
            title: 'Projets Techniques',
            subtitle: 'Portfolio',
            timeline: 'Chronologie de mes réalisations',
            view_details: 'Voir les détails',
            highlights: 'Points Forts',
            github: 'Voir'
        },
        contact: {
            title: 'Travaillons Ensemble',
            subtitle: 'Contact',
            description: 'Je suis ouvert aux opportunités de stage, collaboration et projets innovants. N\'hésitez pas à me contacter.',
            form_name: 'Nom',
            form_email: 'Email',
            form_message: 'Message',
            form_send: 'Envoyer le message',
        },
        experience: {
            title: 'Expérience',
            subtitle: 'Parcours',
            period: 'Période',
            location: 'Lieu'
        },
        footer: {
            bio: 'Étudiant en ingénierie logicielle à EPITECH, passionné par la création d\'applications modernes et efficaces.',
            nav: 'Navigation',
            socials: 'Réseaux',
            contact: 'Contact',
            cta: 'Me contacter',
            rights: 'Tous droits réservés.',
            designed: 'Conçu avec'
        },
        projects_data: [
            {
                title: 'ArbitraChain',
                role: 'Développeur Backend Rust',
                description: 'Bot d\'arbitrage automatisé pour les marchés de prédiction (Polymarket). Infrastructure haute performance capable d\'identifier et d\'exécuter des opportunités d\'arbitrage en temps réel.',
                highlights: [
                    'Refonte complète de l\'architecture backend pour une modularité accrue',
                    'Implémentation d\'un moteur d\'arbitrage haute performance en Rust',
                    'Intégration d\'APIs complexes (Gamma, CLOB) et gestion asynchrone des flux de données',
                    'Système de rédemption unifié et sécurisé pour la gestion des positions'
                ],
                tech: ['Rust', 'PostgreSQL', 'Tokio', 'Serialization', 'Trading API'],
                category: 'Backend & High-Frequency Trading',
                period: 'Février 2026 - Présent',
                date: '2026-02',
                github: 'https://arbitrachain.com',
                media: '/arbitrachain.png'
            },
            {
                title: 'Chocolatine',
                role: 'Ingénieur DevOps',
                description: 'Mise en place de GitHub Actions pour automatiser des tâches (GitHub Technologie).',
                highlights: [
                    'Vérification de l\'existence des fichiers et du building effectif du projet',
                    'Mirroring de répertoire GitHub'
                ],
                tech: ['GitHub Actions', 'CI/CD', 'Bash'],
                category: 'DevOps',
                period: '2024 2024',
                date: '2024-01',
                github: 'https://github.com/Akashi05/CHOCOLATINE_PROJET',
                media: '/cholatine.png'
            },
            {
                title: 'JEB Incubator',
                role: 'Développeur Backend',
                description: 'Conception d\'une application web pour une entreprise d\'incubateur.',
                highlights: [
                    'Conception de l\'application web',
                    'Chargé du backend en utilisant Django'
                ],
                tech: ['Django', 'Python', 'Web'],
                category: 'Développement Web',
                period: 'Septembre 2025',
                date: '2025-09',
                github: 'https://github.com/yourusername/jeb-incubator',
                media: '/jeb.png'
            },
            {
                title: 'AREA - Automation Platform',
                role: 'Lead Backend & Architecte',
                description: 'Clone d\'IFTTT/Zapier avec architecture microservices Django/DRF. Moteur d\'automation asynchrone avec workers multithreads pour intégrations API (Google, Discord, GitHub, etc).',
                highlights: [
                    'Architecture microservices avec Django/DRF',
                    'Moteur d\'automation asynchrone avec workers multithreads',
                    'Backend OAuth2 "Central Hub" unifiant Web/Mobile',
                    'Migration SQLite → PostgreSQL et déploiement Railway'
                ],
                tech: ['Django', 'DRF', 'Docker', 'PostgreSQL', 'OAuth2', 'Railway'],
                category: 'Full-Stack & Architecture',
                period: '2025 2025',
                date: '2025-12',
                github: 'https://github.com/evra0/G-DEV-500-COT-5-2-area-10/tree/main',
                media: '/area.png'
            },
            {
                title: 'Whanos - DevOps Platform',
                role: 'Ingénieur DevOps',
                description: 'Plateforme d\'automatisation CI/CD capable de détecter la technologie d\'un dépôt, builder des images Docker et les déployer automatiquement.',
                highlights: [
                    'Conception d\'une plateforme CI/CD avec Jenkins',
                    'Détection automatique de la stack technologique',
                    'Build d\'images Docker optimisées et standardisées',
                    'Déploiement automatisé des applications'
                ],
                tech: ['Jenkins', 'Docker', 'Bash', 'Groovy'],
                category: 'DevOps & Automation',
                period: '2025 2025',
                date: '2025-10',
                github: 'https://github.com/yourusername/whanos',
                media: '/whanos.png'
            },
            {
                title: 'R-Type Game Engine',
                role: 'Développeur Moteur',
                description: 'Moteur de jeu 2D haute performance développé from scratch en C++17 avec architecture ECS.',
                highlights: [
                    'Architecture ECS (Entity Component System) en C++17',
                    'Moteur réseau UDP bas-latence pour multijoueur',
                    'Chiffrement custom des paquets pour la sécurité',
                    'Performance optimisée pour le temps réel'
                ],
                tech: ['C++', 'ECS', 'UDP', 'Network'],
                category: 'Systems Programming',
                period: '2025 2025',
                date: '2025-10',
                github: 'https://github.com/yourusername/rtype',
                media: '/rtype.png'
            },
            {
                title: 'Arcade - Virtual Console',
                role: 'Développeur Core & Jeux',
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
                github: 'https://github.com/yourusername/arcade',
                media: '/arcade.png'
            }
        ],
        experience_data: [
            {
                title: 'Voyage d\'immersion tech à Lagos',
                company: 'EPITECH (Study Trip)',
                location: 'Lagos, Nigeria',
                period: 'Janvier 2026',
                achievements: [
                    'Immersion d\'une semaine pour découvrir l\'écosystème technologique dynamique du Nigeria.',
                    'Rencontres stratégiques avec des acteurs clés : Maliyo Games, ALX Nigeria, Rank et Oracle.',
                    'Analyse des opportunités et des défis technologiques sur le marché nigérian.'
                ]
            },
            {
                title: 'DISCOVERY 2025',
                company: 'Future Studio',
                location: 'Cotonou, Bénin',
                period: 'Février 2025',
                achievements: [
                    '1ère place au concours d\'innovation digitale DISCOVERY 2025',
                    'Conception d\'une solution digitale innovante pour le secteur du sport',
                    'Collaboration en équipe axée sur la créativité et l\'implémentation pratique'
                ]
            },
            {
                title: 'Stagiaire Développeur Web & Jeu',
                company: 'Africereal',
                location: 'Cotonou, Bénin',
                period: 'Novembre 2024 - Janvier 2025',
                achievements: [
                    'Conception d\'une maquette pour un site web d\'e-learning (WordPress, HTML/CSS)',
                    'Contribution au développement d\'un jeu éducatif de simulation d\'agriculture (Godot Engine)'
                ]
            }
        ]
    },
    en: {
        nav: { home: 'Home', about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
        hero: {
            status: 'Looking for an Internship',
            role: 'Software Engineering Student',
            description: 'Software Engineering student at Epitech with hands-on experience in full-stack development, DevOps automation, and game engine architecture. Capable of building scalable systems and solving complex problems in collaborative environments.',
            cta_projects: 'View my projects',
            cta_contact: 'Contact me',
            cv_fr: 'Download CV (FR)',
            cv_en: 'Download CV (EN)',
        },
        about: {
            title: 'Who am I?',
            subtitle: 'About',
            description1: '3rd-year Software Engineering student at EPITECH Benin, passionate about IT and looking for an internship to gain more experience and perfect my skills.',
            description2: 'My background has allowed me to develop solid expertise in software architecture, DevOps, and full-stack development. From architecting high-performance C++ game engines to designing automation platforms with Django, I enjoy tackling complex technical challenges.',
            description3: 'My recent victory at DISCOVERY 2025 (1st place) demonstrates my ability to innovate and collaborate effectively in a team to create impactful digital solutions. To date, I have completed over 120 technical projects (including my academic projects at EPITECH and my personal projects) ranging from web development to low-level systems.',
            stats: {
                projects: '120+',
                projects_label: 'Projects completed',
                tech: '30+',
                tech_label: 'Technologies',
                experience: '3+',
                experience_label: 'Experiences'
            },
            formation: 'Education',
            languages: 'Languages',
            soft_skills: 'Soft Skills',
            interests: 'Interests',
            skills_title: 'Technical Skills',
            lang_fr: 'French',
            lang_en: 'English',
            lang_native: 'Native',
            lang_intermediate: 'Intermediate',
            skill_cats: {
                languages: 'Languages',
                frameworks: 'Frameworks',
                devops: 'DevOps & CI/CD',
                databases: 'Databases',
                tools: 'Tools'
            }
        },
        projects: {
            title: 'Technical Projects',
            subtitle: 'Portfolio',
            timeline: 'Timeline of my achievements',
            view_details: 'View details',
            highlights: 'Key Features',
            github: 'View'
        },
        experience: {
            title: 'Experience',
            subtitle: 'Journey',
            period: 'Period',
            location: 'Location'
        },
        contact: {
            title: 'Let\'s Work Together',
            subtitle: 'Contact',
            description: 'I am open to internship opportunities, collaborations, and innovative projects. Feel free to contact me.',
            form_name: 'Name',
            form_email: 'Email',
            form_message: 'Message',
            form_send: 'Send Message',
        },
        footer: {
            bio: 'Software Engineer student at EPITECH, passionate about building modern and efficient applications.',
            nav: 'Navigation',
            socials: 'Socials',
            contact: 'Contact',
            cta: 'Get in touch',
            rights: 'All rights reserved.',
            designed: 'Designed with'
        },
        projects_data: [
            {
                title: 'ArbitraChain',
                role: 'Rust Backend Developer',
                description: 'Automated arbitrage bot for prediction markets (Polymarket). High-performance infrastructure capable of identifying and executing arbitrage opportunities in real-time.',
                highlights: [
                    'Complete refactoring of the backend architecture for increased modularity',
                    'Implementation of a high-performance arbitrage engine in Rust',
                    'Integration of complex APIs (Gamma, CLOB) and asynchronous data stream management',
                    'Unified and secure redemption system for position management'
                ],
                tech: ['Rust', 'PostgreSQL', 'Tokio', 'Serialization', 'Trading API'],
                category: 'Backend & High-Frequency Trading',
                period: 'February 2026 - Present',
                date: '2026-02',
                github: 'https://arbitrachain.com',
                media: '/arbitrachain.png'
            },
            {
                title: 'Chocolatine',
                role: 'DevOps Engineer',
                description: 'Implementation of GitHub Actions to automate tasks (GitHub Technology).',
                highlights: [
                    'Verification of file existence and effective project building',
                    'Mirroring GitHub repository'
                ],
                tech: ['GitHub Actions', 'CI/CD', 'Bash'],
                category: 'DevOps',
                period: '2024 2024',
                date: '2024-01',
                github: 'https://github.com/Akashi05/CHOCOLATINE_PROJET',
                media: '/cholatine.png'
            },
            {
                title: 'JEB Incubator',
                role: 'Backend Developer',
                description: 'Design of a web application for an incubator company.',
                highlights: [
                    'Web application design',
                    'Backend development using Django'
                ],
                tech: ['Django', 'Python', 'Web'],
                category: 'Web Development',
                period: 'September 2025',
                date: '2025-09',
                github: 'https://github.com/yourusername/jeb-incubator',
                media: '/jeb.png'
            },
            {
                title: 'Whanos - DevOps Platform',
                role: 'DevOps Engineer',
                description: 'CI/CD automation platform capable of detecting repo technology, building Docker images, and auto-deploying.',
                highlights: [
                    'Engineered a Jenkins CI/CD platform',
                    'Automatic detection of repository technology stack',
                    'Built robust and standardized Docker images',
                    'Automated application deployment'
                ],
                tech: ['Jenkins', 'Docker', 'Bash', 'Groovy'],
                category: 'DevOps & Automation',
                period: '2025 2025',
                date: '2025-05',
                github: 'https://github.com/yourusername/whanos',
                media: '/whanos.png'
            },
            {
                title: 'AREA - Automation Platform',
                role: 'Lead Backend & Architect',
                description: 'IFTTT/Zapier clone with Django/DRF microservices architecture. Asynchronous automation engine with multithreaded workers for API integrations (Google, Discord, GitHub, etc).',
                highlights: [
                    'Microservices architecture with Django/DRF',
                    'Asynchronous automation engine with multithreaded workers',
                    'OAuth2 "Central Hub" backend unifying Web/Mobile',
                    'SQLite → PostgreSQL migration and Railway deployment'
                ],
                tech: ['Django', 'DRF', 'Docker', 'PostgreSQL', 'OAuth2', 'Railway'],
                category: 'Full-Stack & Architecture',
                period: '2025 2025',
                date: '2025-12',
                github: 'https://github.com/evra0/G-DEV-500-COT-5-2-area-10/tree/main',
                media: '/area.png'
            },
            {
                title: 'R-Type Game Engine',
                role: 'Engine Developer',
                description: 'High-performance 2D game engine developed from scratch in C++17 with ECS architecture.',
                highlights: [
                    'ECS (Entity Component System) architecture in C++17',
                    'Low-latency UDP network engine for multiplayer',
                    'Custom packet encryption for security',
                    'Optimized performance for real-time'
                ],
                tech: ['C++', 'ECS', 'UDP', 'Network'],
                category: 'Systems Programming',
                period: '2025 2025',
                date: '2025-10',
                github: 'https://github.com/yourusername/rtype',
                media: '/rtype.png'
            },
            {
                title: 'Arcade - Virtual Console',
                role: 'Core & Game Developer',
                description: 'Virtual console with multiple games and different display types (SFML, Ncurses, SDL).',
                highlights: [
                    'Implementation of game logic in C++',
                    'Core management linking GUI and games',
                    'Multi-display support (SFML, Ncurses, SDL)',
                    'Modular architecture for adding new games'
                ],
                tech: ['C++', 'SFML', 'Ncurses', 'SDL'],
                category: 'Game Development',
                period: 'March - April 2025',
                date: '2025-04',
                github: 'https://github.com/yourusername/arcade',
                media: '/arcade.png'
            }
        ],
        experience_data: [
            {
                title: 'Tech Immersion Trip to Lagos',
                company: 'EPITECH (Study Trip)',
                location: 'Lagos, Nigeria',
                period: 'January 2026',
                achievements: [
                    'One-week immersion to discover Nigeria\'s dynamic tech ecosystem.',
                    'Strategic meetings with key players: Maliyo Games, ALX Nigeria, Rank, and Oracle.',
                    'Analysis of technological opportunities and challenges in the Nigerian market.'
                ]
            },
            {
                title: 'DISCOVERY 2025',
                company: 'Future Studio',
                location: 'Cotonou, Benin',
                period: 'February 2025',
                achievements: [
                    '1st place in the DISCOVERY 2025 digital innovation competition',
                    'Designed an innovative digital solution for the sports sector',
                    'Collaborated in a team focused on creativity and practical implementation'
                ]
            },
            {
                title: 'Web & Game Developer Intern',
                company: 'Africereal',
                location: 'Cotonou, Benin',
                period: 'November 2024 - January 2025',
                achievements: [
                    'Designed a mockup for an e-learning website (WordPress, HTML/CSS)',
                    'Contributed to the development of an educational farming simulation game (Godot Engine)'
                ]
            }
        ]
    }
};
