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
            description1: 'Étudiant en 3ᵉ année d’expertise informatique à EPITECH Bénin, je suis passionné par le développement logiciel et la création de solutions concrètes à des problématiques réelles.',
            description2: 'Au-delà de l’aspect technique, je m’intéresse à la manière dont les systèmes sont conçus pour être utiles, performants et durables. Mon parcours m’a amené à travailler aussi bien sur des systèmes bas niveau en C++ que sur des applications web et des architectures complètes.',
            description3: 'Formé dans un environnement exigeant, j’ai développé une forte autonomie ainsi qu’une capacité à apprendre rapidement et à m’adapter à des contextes variés.',
            description4: 'J’accorde une importance particulière au travail en équipe, convaincu que les meilleures solutions émergent d’une collaboration efficace et d’une bonne communication.',
            description5: 'Aujourd’hui, je cherche à évoluer dans des environnements stimulants, académiques comme professionnels, où je pourrai continuer à apprendre, contribuer et participer à la création de solutions à impact.',
            stats: {
                total: 60,
                total_label: 'Projets au total (mini projets & projets)',
                school: 50,
                school_label: 'Projets scolaires',
                personal: 10,
                personal_label: 'Projets personnels',
                details: 'dont 50+ scolaires et 10+ personnels',
                tech: 30,
                tech_label: 'Technologies',
                experience: 5,
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
            description: 'Je suis ouvert aux collaboration et projets innovants. N\'hésitez pas à me contacter.',
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
                period: 'Janvier 2026',
                date: '2026-01',
                github: 'https://github.com/evra0/G-DEV-500-COT-5-2-area-10/tree/main',
                media: '/area.png'
            },
            {
                title: 'Gomoku',
                role: 'Développeur IA',
                description: 'Implémentation d\'une IA performante pour le jeu Gomoku utilisant l\'algorithme Minimax avec élagage Alpha-Beta.',
                highlights: [
                    'IA basée sur l\'algorithme Minimax',
                    'Optimisation par Zobrist Hashing et élagage Alpha-Beta',
                    'Heuristiques avancées pour l\'évaluation et la gestion du temps'
                ],
                tech: ['C++', 'Minimax', 'AI'],
                category: 'Intelligence Artificielle',
                period: 'Janvier 2026',
                date: '2026-01',
                github: 'https://github.com/Akashi05/Gomoku',
                media: '/gomoku.png'
            },
            {
                title: 'NeuralNetwork',
                role: 'Chercheur en IA',
                description: 'Implémentation complète d\'un framework de réseaux de neurones (type PyTorch) à partir de zéro en Python avec NumPy. Inclut la gestion des couches, fonctions d\'activation, de perte et optimiseurs.',
                highlights: [
                    'Framework de deep learning reproduisant les fonctionnalités de PyTorch',
                    'Optimisation avec NumPy pour le calcul matriciel',
                    'Entraînement sur la classification de positions d\'échecs et problème XOR'
                ],
                tech: ['Python', 'NumPy', 'Machine Learning', 'Framework Design'],
                category: 'Intelligence Artificielle',
                period: 'Novembre 2025',
                date: '2025-11',
                github: 'https://github.com/Akashi05/NeuralNetwork',
                media: '/nn.png'
            },
            {
                title: 'R-Type Game Engine',
                role: 'Développeur Moteur',
                description: 'Moteur de jeu 2D haute performance développé de zéro en C++17 avec architecture ECS.',
                highlights: [
                    'Architecture ECS (Entity Component System) sur mesure',
                    'Moteur réseau UDP faible latence pour le multijoueur',
                    'Gestion de projet avec Conan et CMake',
                    'Performances optimisées pour le multijoueur'
                ],
                tech: ['C++', 'ECS', 'UDP', 'Réseau'],
                category: 'Programmation Système',
                period: 'Novembre 2025',
                date: '2025-11',
                github: 'https://github.com/Akashi05/rtype',
                media: '/rtype.png'
            },
            {
                title: 'Whanos - DevOps Platform',
                role: 'Ingénieur DevOps',
                description: 'Plateforme PaaS automatisant la détection de technologie, la création d\'images Docker et le déploiement sur Kubernetes.',
                highlights: [
                    'Conception d\'une plateforme CI/CD avec Jenkins',
                    'Détection automatique de la stack technologique',
                    'Création d\'images Docker standardisées',
                    'Déploiement automatisé d\'applications sur Kubernetes'
                ],
                tech: ['Jenkins', 'Ansible', 'Kubernetes', 'Docker'],
                category: 'DevOps & Automatisation',
                period: 'Novembre 2025',
                date: '2025-11',
                github: 'https://github.com/Akashi05/Whanos',
                media: '/whanos.png'
            },
            {
                title: 'JEB Incubator',
                role: 'Développeur Backend',
                description: 'Plateforme de gestion pour incubateur de startups. Backend robuste avec Django et frontend dynamique en Next.js.',
                highlights: [
                    'Architecture en microservices',
                    'Gestion en temps réel via WebSockets',
                    'Déploiement Docker & orchestration',
                    'Plateforme web complète (Django + Next.js)'
                ],
                tech: ['Django', 'Next.js', 'PostgreSQL', 'DRF'],
                category: 'Full-Stack & Architecture',
                period: 'Décembre 2025',
                date: '2025-12',
                github: 'https://github.com/Akashi05/JEB_Incubator',
                media: '/jeb.png'
            },
            {
                title: 'Raytracer',
                role: 'Développeur Graphique',
                description: 'Moteur de rendu 3D utilisant le ray tracing pour générer des images avec gestion des ombres, reflets et transparences.',
                highlights: [
                    'Gestion des lumières, ombres portées et réflexions',
                    'Rendu de formes géométriques : sphères, cylindres et cônes',
                    'Simulations d\'interaction lumineuse complexe',
                    'Support des transformations géométriques'
                ],
                tech: ['C++', 'Mathématiques 3D', 'Ray Tracing'],
                category: 'Programmation Graphique',
                period: 'Juin 2025',
                date: '2025-06',
                github: 'https://github.com/Akashi05/Raytracer',
                media: '/raytracer.png'
            },
            {
                title: 'MyPandoc',
                role: 'Développeur Fonctionnel',
                description: 'Convertisseur de documents haute fidélité supportant Markdown, JSON et XML, développé en Haskell.',
                highlights: [
                    'Parsing et génération de données structurées (XML, JSON, MD)',
                    'Développement en programmation fonctionnelle Haskell'
                ],
                tech: ['Haskell', 'Functional Programming', 'Parsing'],
                category: 'Outils de Développement',
                period: 'Mai 2025',
                date: '2025-05',
                github: 'https://github.com/Akashi05/MyPandoc',
                media: '/mypandoc.png'
            },
            {
                title: 'Arcade - Virtual Console',
                role: 'Développeur Core & Jeux',
                description: 'Console virtuelle modulaire capable de charger dynamiquement des jeux et des moteurs graphiques (SFML, SDL2, Ncurses) au runtime.',
                highlights: [
                    'Chargement dynamique de bibliothèques partagées',
                    'Abstraction totale du moteur graphique',
                    'Jeux implémentés : Snake, Nibbler',
                    'Changement de moteur graphique en plein jeu'
                ],
                tech: ['C++', 'SFML', 'Ncurses', 'SDL2'],
                category: 'Game Development',
                period: 'Mars - Avril 2025',
                date: '2025-04',
                github: 'https://github.com/Akashi05/Arcade',
                media: '/arcade.png'
            },
            {
                title: 'MiniLibC',
                role: 'Développeur Système',
                description: 'Réimplémentation partielle de la bibliothèque standard C en assembleur x86-64.',
                highlights: [
                    'Réécriture de fonctions systèmes (strlen, strcpy, etc.)',
                    'Utilisation exclusive de l\'assembleur x86-64',
                    'Optimisation bas niveau pour la performance'
                ],
                tech: ['Assembly x86-64', 'NASM', 'System'],
                category: 'Programmation Bas Niveau',
                period: 'Mars 2025',
                date: '2025-03',
                github: 'https://github.com/Akashi05/MiniLibC',
                media: '/libc.png'
            },
            {
                title: 'AutoMakefile',
                role: 'Développeur Outils',
                description: 'Script d\'automatisation Bash permettant de générer automatiquement des Makefiles complexes.',
                highlights: [
                    'Génération automatique de dépendances',
                    'Support pour les projets C et C++',
                    'Scripting shell pour l\'automatisation'
                ],
                tech: ['Shell', 'Bash', 'Makefile'],
                category: 'DevOps & Outils',
                period: 'Octobre 2024',
                date: '2024-10',
                github: 'https://github.com/Akashi05/AutoMakefile',
                media: '/automake.png'
            },
            {
                title: 'MyRPG',
                role: 'Développeur Jeu Vidéo',
                description: 'Moteur de jeu 2D avec gestion d\'inventaire, quêtes et combats en utilisant la bibliothèque CSFML.',
                highlights: [
                    'Moteur de jeu 2D avec CSFML',
                    'Système de gestion de personnages et d\'inventaire',
                    'Cartes interactives et PNJ'
                ],
                tech: ['C', 'CSFML', 'Game Development'],
                category: 'Développement de Jeux',
                period: 'Octobre 2024',
                date: '2024-10',
                github: 'https://github.com/Akashi05/MyRPG',
                media: '/rpg.png'
            },
            {
                title: 'Minishell2',
                role: 'Développeur Système',
                description: 'Interpréteur de commandes avancé gérant les pipes, les redirections et les variables d\'environnement.',
                highlights: [
                    'Gestion des pipes et des redirections',
                    'Exécution de commandes via execve',
                    'Gestion précise de l\'environnement Unix et des signaux'
                ],
                tech: ['C', 'Unix', 'Shell'],
                category: 'Programmation Système',
                period: 'Septembre 2024',
                date: '2024-09',
                github: 'https://github.com/Akashi05/Minishell2',
                media: '/minishell.png'
            },
            {
                title: 'Chocolatine',
                role: 'Ingénieur DevOps',
                description: 'Automatisation de la compilation et du respect des normes de codage (Epitech Coding Style) via GitHub Actions.',
                highlights: [
                    'Vérification de l\'existence des fichiers et du building effectif du projet',
                    'Mirroring de répertoire GitHub'
                ],
                tech: ['GitHub Actions', 'CI/CD', 'Bash'],
                category: 'DevOps',
                period: 'Août 2024',
                date: '2024-08',
                github: 'https://github.com/Akashi05/CHOCOLATINE_PROJET',
                media: '/cholatine.png'
            }
        ],
        experience_data: [
            {
                title: 'Stage académique (troisième année)',
                company: 'Future Studio (incubateur)',
                location: 'Cotonou, Bénin',
                period: 'Avril 2026 - Juillet 2026',
                achievements: [
                    'Développement d\'ArbitraChain, une plateforme d\'accessibilité aux marchés de prédiction, au sein de l\'incubateur Future Studio.',
                    'Conception et implémentation d\'un moteur d\'arbitrage haute performance en Rust.',
                    'Accompagnement par Future Studio pour la mise sur le marché et l\'optimisation de l\'efficacité du produit.'
                ]
            },
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
                title: 'Hackaton Beyond Memories',
                company: 'Team Genesis',
                location: 'Cotonou, Bénin',
                period: 'Novembre 2025',
                achievements: [
                    'Conception d\'un mémorial virtuel universel (mémoire humaine numérique) visant à préserver l\'héritage numérique.',
                    'Utilisation de technologies innovantes pour la gestion de données mémorielles.',
                    'Projet labellisé #TechForGood et #Innovation.'
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
            description1: 'Junior software engineering student at EPITECH Benin, I am passionate about software development and creating concrete solutions to real-world problems.',
            description2: 'Beyond technical aspects, I am interested in how systems are designed to be useful, efficient, and sustainable. My background has led me to work on both low-level systems in C++ as well as web applications and complete architectures.',
            description3: 'Trained in a demanding environment, I have developed strong autonomy along with an ability to learn quickly and adapt to various contexts.',
            description4: 'I place particular importance on teamwork, convinced that the best solutions emerge from effective collaboration and good communication.',
            description5: 'Today, I am looking to grow in stimulating environments, both academic and professional, where I can continue to learn, contribute, and participate in creating impactful solutions.',
            stats: {
                total: 60,
                total_label: 'Total projects (mini projects & projects)',
                school: 50,
                school_label: 'Academic projects',
                personal: 10,
                personal_label: 'Personal projects',
                details: 'including 60+ academic and 10+ personal',
                tech: 30,
                tech_label: 'Technologies',
                experience: 5,
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
            description: 'I am open to collaborations and innovative projects. Feel free to contact me.',
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
                period: 'January 2026',
                date: '2026-01',
                github: 'https://github.com/evra0/G-DEV-500-COT-5-2-area-10/tree/main',
                media: '/area.png'
            },
            {
                title: 'Gomoku',
                role: 'AI Developer',
                description: 'High-performance AI implementation for the Gomoku game using the Minimax algorithm with Alpha-Beta pruning.',
                highlights: [
                    'AI based on the Minimax algorithm',
                    'Optimization via Zobrist Hashing and Alpha-Beta pruning',
                    'Advanced heuristics for evaluation and time management'
                ],
                tech: ['C++', 'Minimax', 'AI'],
                category: 'Artificial Intelligence',
                period: 'January 2026',
                date: '2026-01',
                github: 'https://github.com/Akashi05/Gomoku',
                media: '/gomoku.png'
            },
            {
                title: 'NeuralNetwork',
                role: 'AI Researcher',
                description: 'Complete implementation of a neural network framework (PyTorch-like) from scratch in Python using NumPy. Features layers, activation functions, loss functions, and optimizers.',
                highlights: [
                    'Deep learning framework reproducing PyTorch functionalities',
                    'NumPy optimization for matrix computations',
                    'Trained on chess position classification and XOR problem'
                ],
                tech: ['Python', 'NumPy', 'Machine Learning', 'Framework Design'],
                category: 'Artificial Intelligence',
                period: 'November 2025',
                date: '2025-11',
                github: 'https://github.com/Akashi05/NeuralNetwork',
                media: '/nn.png'
            },
            {
                title: 'R-Type Game Engine',
                role: 'Engine Developer',
                description: 'High-performance 2D game engine developed from scratch in C++17 with ECS architecture.',
                highlights: [
                    'Custom ECS (Entity Component System) architecture',
                    'Low-latency UDP network engine for multiplayer',
                    'Project management with Conan and CMake',
                    'Optimized performance for real-time multiplayer'
                ],
                tech: ['C++', 'ECS', 'UDP', 'Network'],
                category: 'Systems Programming',
                period: 'November 2025',
                date: '2025-11',
                github: 'https://github.com/Akashi05/rtype',
                media: '/rtype.png'
            },
            {
                title: 'Whanos - DevOps Platform',
                role: 'DevOps Engineer',
                description: 'PaaS platform automating technology detection, Docker image creation, and Kubernetes deployment.',
                highlights: [
                    'Engineered a Jenkins CI/CD platform',
                    'Automatic detection of repository technology stack',
                    'Built robust and standardized Docker images',
                    'Automated application deployment on Kubernetes'
                ],
                tech: ['Jenkins', 'Ansible', 'Kubernetes', 'Docker'],
                category: 'DevOps & Automation',
                period: 'November 2025',
                date: '2025-11',
                github: 'https://github.com/Akashi05/Whanos',
                media: '/whanos.png'
            },
            {
                title: 'JEB Incubator',
                role: 'Backend Developer',
                description: 'Management platform for startup incubators. Robust Django backend and dynamic Next.js frontend.',
                highlights: [
                    'Microservices architecture',
                    'Real-time management via WebSockets',
                    'Docker deployment & orchestration',
                    'Full web platform (Django + Next.js)'
                ],
                tech: ['Django', 'Next.js', 'PostgreSQL', 'DRF'],
                category: 'Full-Stack & Architecture',
                period: 'December 2025',
                date: '2025-12',
                github: 'https://github.com/Akashi05/JEB_Incubator',
                media: '/jeb.png'
            },
            {
                title: 'Raytracer',
                role: 'Graphics Developer',
                description: '3D rendering engine using ray tracing to generate images with shadow, reflection, and transparency management.',
                highlights: [
                    'Light, shadow, and reflection management',
                    'Rendering of geometric shapes: spheres, cylinders, and cones',
                    'Complex light interaction simulations',
                    'Support for geometric transformations'
                ],
                tech: ['C++', '3D Mathematics', 'Ray Tracing'],
                category: 'Graphics Programming',
                period: 'June 2025',
                date: '2025-06',
                github: 'https://github.com/Akashi05/Raytracer',
                media: '/raytracer.png'
            },
            {
                title: 'MyPandoc',
                role: 'Functional Developer',
                description: 'High-fidelity document converter supporting Markdown, JSON, and XML, developed in Haskell.',
                highlights: [
                    'Parsing and generation of structured data (XML, JSON, MD)',
                    'Haskell functional programming development'
                ],
                tech: ['Haskell', 'Functional Programming', 'Parsing'],
                category: 'Development Tools',
                period: 'May 2025',
                date: '2025-05',
                github: 'https://github.com/Akashi05/MyPandoc',
                media: '/mypandoc.png'
            },
            {
                title: 'Arcade - Virtual Console',
                role: 'Core & Game Developer',
                description: 'Modular virtual console capable of dynamically loading games and graphics engines (SFML, SDL2, Ncurses) at runtime.',
                highlights: [
                    'Dynamic loading of shared libraries',
                    'Total abstraction of the graphics engine',
                    'Implemented games: Snake, Nibbler',
                    'In-game graphics engine switching'
                ],
                tech: ['C++', 'SFML', 'Ncurses', 'SDL2'],
                category: 'Game Development',
                period: 'March - April 2025',
                date: '2025-04',
                github: 'https://github.com/Akashi05/Arcade',
                media: '/arcade.png'
            },
            {
                title: 'MiniLibC',
                role: 'System Developer',
                description: 'Partial reimplementation of the standard C library in x86-64 assembly.',
                highlights: [
                    'Rewriting system functions (strlen, strcpy, etc.)',
                    'Exclusive use of x86-64 assembly',
                    'Low-level optimization for performance'
                ],
                tech: ['Assembly x86-64', 'NASM', 'System'],
                category: 'Low-Level Programming',
                period: 'March 2025',
                date: '2025-03',
                github: 'https://github.com/Akashi05/MiniLibC',
                media: '/libc.png'
            },
            {
                title: 'AutoMakefile',
                role: 'Tool Developer',
                description: 'Automation tool for generating complex Makefiles for C/C++ projects.',
                highlights: [
                    'Automatic dependency generation',
                    'Support for C and C++ projects',
                    'Shell scripting for automation'
                ],
                tech: ['Shell', 'Bash', 'Makefile'],
                category: 'DevOps & Tooling',
                period: 'October 2024',
                date: '2024-10',
                github: 'https://github.com/Akashi05/AutoMakefile',
                media: '/automake.png'
            },
            {
                title: 'MyRPG',
                role: 'Game Developer',
                description: '2D game engine with inventory, quest, and combat management using the CSFML library.',
                highlights: [
                    '2D game engine with CSFML',
                    'Character and inventory management system',
                    'Interactive maps and NPCs'
                ],
                tech: ['C', 'CSFML', 'Game Development'],
                category: 'Game Development',
                period: 'October 2024',
                date: '2024-10',
                github: 'https://github.com/Akashi05/MyRPG',
                media: '/rpg.png'
            },
            {
                title: 'Minishell2',
                role: 'System Developer',
                description: 'Advanced command interpreter managing pipes, redirections, and environment variables.',
                highlights: [
                    'Pipes and redirections management',
                    'Command execution via execve',
                    'Unix environment and signals management'
                ],
                tech: ['C', 'Unix', 'Shell'],
                category: 'System Programming',
                period: 'September 2024',
                date: '2024-09',
                github: 'https://github.com/Akashi05/Minishell2',
                media: '/minishell.png'
            },
            {
                title: 'Chocolatine',
                role: 'DevOps Engineer',
                description: 'Automation of compilation and Epitech Coding Style compliance via GitHub Actions.',
                highlights: [
                    'Verification of file existence and effective project building',
                    'Mirroring GitHub repository'
                ],
                tech: ['GitHub Actions', 'CI/CD', 'Bash'],
                category: 'DevOps',
                period: 'August 2024',
                date: '2024-08',
                github: 'https://github.com/Akashi05/CHOCOLATINE_PROJET',
                media: '/cholatine.png'
            }
        ],
        experience_data: [
            {
                title: 'Academic Internship (Third Year)',
                company: 'Future Studio (incubator)',
                location: 'Cotonou, Benin',
                period: 'April 2026 - July 2026',
                achievements: [
                    'Development of ArbitraChain, a prediction market accessibility platform, within the Future Studio incubator.',
                    'Design and implementation of a high-performance arbitrage engine in Rust.',
                    'Support from Future Studio for product effectiveness and market readiness.'
                ]
            },
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
                title: 'Hackathon Beyond Memories',
                company: 'Team Genesis',
                location: 'Cotonou, Benin',
                period: 'November 2025',
                achievements: [
                    'Design of a universal virtual memorial (digital human memory) aiming to preserve digital legacy.',
                    'Utilization of innovative technologies for memorial data management.',
                    'Project labeled #TechForGood and #Innovation.'
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
