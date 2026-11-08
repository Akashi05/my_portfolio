import { o as __toESM } from "../_runtime.mjs";
import { n as V, r as require_react, t as J } from "../_libs/@formspree/react+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { a as MotionConfig, i as motion, n as useTransform, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { a as Menu, c as Heart, d as Download, f as ArrowUpRight, i as Moon, l as Globe, m as ArrowDown, n as Sun, o as Mail, p as ArrowRight, r as Phone, s as Linkedin, t as X, u as Github } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CMD16hK2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var translations = {
	fr: {
		nav: {
			home: "Accueil",
			about: "À propos",
			projects: "Projets",
			experience: "Expérience",
			contact: "Contact"
		},
		hero: {
			status: "🎯 En recherche d'alternance",
			role: "Étudiant en Ingénierie Logicielle",
			description: "Étudiant en Ingénierie logicielle à Epitech avec une expérience pratique en développement fullstack, automatisation DevOps, architecture de moteur de jeu. Capable de construire des systèmes évolutifs et à résoudre des problèmes complexes dans des environnements collaboratifs.",
			cta_projects: "Voir mes projets",
			cta_contact: "Me contacter",
			cv_fr: "Télécharger CV (FR)",
			cv_en: "Télécharger CV (EN)"
		},
		about: {
			title: "Qui suis-je ?",
			subtitle: "À propos",
			description1: "Étudiant en 3ᵉ année d’expertise informatique à EPITECH Bénin, je suis passionné par le développement logiciel et la création de solutions concrètes à des problématiques réelles.",
			description2: "Au-delà de l’aspect technique, je m’intéresse à la manière dont les systèmes sont conçus pour être utiles, performants et durables. Mon parcours m’a amené à travailler aussi bien sur des systèmes bas niveau en C++ que sur des applications web et des architectures complètes.",
			description3: "Formé dans un environnement exigeant, j’ai développé une forte autonomie ainsi qu’une capacité à apprendre rapidement et à m’adapter à des contextes variés.",
			description4: "J’accorde une importance particulière au travail en équipe, convaincu que les meilleures solutions émergent d’une collaboration efficace et d’une bonne communication.",
			description5: "Aujourd’hui, je cherche à évoluer dans des environnements stimulants, académiques comme professionnels, où je pourrai continuer à apprendre, contribuer et participer à la création de solutions à impact.",
			stats: {
				total: 60,
				total_label: "Projets au total (mini projets & projets)",
				school: 50,
				school_label: "Projets scolaires",
				personal: 10,
				personal_label: "Projets personnels",
				details: "dont 50+ scolaires et 10+ personnels",
				tech: 30,
				tech_label: "Technologies",
				experience: 5,
				experience_label: "Expériences"
			},
			formation: "Formation",
			languages: "Langues",
			soft_skills: "Soft Skills",
			interests: "Centres d'intérêt",
			skills_title: "Compétences Techniques",
			lang_fr: "Français",
			lang_en: "Anglais",
			lang_native: "Natif",
			lang_intermediate: "Intermédiaire",
			skill_cats: {
				languages: "Langages",
				frameworks: "Frameworks",
				devops: "DevOps & CI/CD",
				databases: "Bases de données",
				tools: "Outils"
			}
		},
		projects: {
			title: "Projets Techniques",
			subtitle: "Portfolio",
			timeline: "Chronologie de mes réalisations",
			view_details: "Voir les détails",
			highlights: "Points Forts",
			github: "Voir"
		},
		contact: {
			title: "Travaillons Ensemble",
			subtitle: "Contact",
			description: "Je suis ouvert aux collaboration et projets innovants. N'hésitez pas à me contacter.",
			form_name: "Nom",
			form_email: "Email",
			form_message: "Message",
			form_send: "Envoyer le message"
		},
		experience: {
			title: "Expérience",
			subtitle: "Parcours",
			period: "Période",
			location: "Lieu"
		},
		footer: {
			bio: "Étudiant en ingénierie logicielle à EPITECH, passionné par la création d'applications modernes et efficaces.",
			nav: "Navigation",
			socials: "Réseaux",
			contact: "Contact",
			cta: "Me contacter",
			rights: "Tous droits réservés.",
			designed: "Conçu avec"
		},
		projects_data: [
			{
				title: "ArbitraChain",
				role: "Développeur Backend Rust",
				description: "Bot d'arbitrage automatisé pour les marchés de prédiction (Polymarket). Infrastructure haute performance capable d'identifier et d'exécuter des opportunités d'arbitrage en temps réel.",
				highlights: [
					"Refonte complète de l'architecture backend pour une modularité accrue",
					"Implémentation d'un moteur d'arbitrage haute performance en Rust",
					"Intégration d'APIs complexes (Gamma, CLOB) et gestion asynchrone des flux de données",
					"Système de rédemption unifié et sécurisé pour la gestion des positions"
				],
				tech: [
					"Rust",
					"PostgreSQL",
					"Tokio",
					"Serialization",
					"Trading API"
				],
				category: "Backend & High-Frequency Trading",
				period: "Février 2026 - Présent",
				date: "2026-02",
				github: "https://arbitrachain.com",
				media: "/arbitrachain.png"
			},
			{
				title: "AREA - Automation Platform",
				role: "Lead Backend & Architecte",
				description: "Clone d'IFTTT/Zapier avec architecture microservices Django/DRF. Moteur d'automation asynchrone avec workers multithreads pour intégrations API (Google, Discord, GitHub, etc).",
				highlights: [
					"Architecture microservices avec Django/DRF",
					"Moteur d'automation asynchrone avec workers multithreads",
					"Backend OAuth2 \"Central Hub\" unifiant Web/Mobile",
					"Migration SQLite → PostgreSQL et déploiement Railway"
				],
				tech: [
					"Django",
					"DRF",
					"Docker",
					"PostgreSQL",
					"OAuth2",
					"Railway"
				],
				category: "Full-Stack & Architecture",
				period: "Janvier 2026",
				date: "2026-01",
				github: "https://github.com/evra0/G-DEV-500-COT-5-2-area-10/tree/main",
				media: "/area.png"
			},
			{
				title: "Gomoku",
				role: "Développeur IA",
				description: "Implémentation d'une IA performante pour le jeu Gomoku utilisant l'algorithme Minimax avec élagage Alpha-Beta.",
				highlights: [
					"IA basée sur l'algorithme Minimax",
					"Optimisation par Zobrist Hashing et élagage Alpha-Beta",
					"Heuristiques avancées pour l'évaluation et la gestion du temps"
				],
				tech: [
					"C++",
					"Minimax",
					"AI"
				],
				category: "Intelligence Artificielle",
				period: "Janvier 2026",
				date: "2026-01",
				github: "https://github.com/Akashi05/Gomoku",
				media: "/gomoku.png"
			},
			{
				title: "NeuralNetwork",
				role: "Chercheur en IA",
				description: "Implémentation complète d'un framework de réseaux de neurones (type PyTorch) à partir de zéro en Python avec NumPy. Inclut la gestion des couches, fonctions d'activation, de perte et optimiseurs.",
				highlights: [
					"Framework de deep learning reproduisant les fonctionnalités de PyTorch",
					"Optimisation avec NumPy pour le calcul matriciel",
					"Entraînement sur la classification de positions d'échecs et problème XOR"
				],
				tech: [
					"Python",
					"NumPy",
					"Machine Learning",
					"Framework Design"
				],
				category: "Intelligence Artificielle",
				period: "Novembre 2025",
				date: "2025-11",
				github: "https://github.com/Akashi05/NeuralNetwork",
				media: "/nn.png"
			},
			{
				title: "R-Type Game Engine",
				role: "Développeur Moteur",
				description: "Moteur de jeu 2D haute performance développé de zéro en C++17 avec architecture ECS.",
				highlights: [
					"Architecture ECS (Entity Component System) sur mesure",
					"Moteur réseau UDP faible latence pour le multijoueur",
					"Gestion de projet avec Conan et CMake",
					"Performances optimisées pour le multijoueur"
				],
				tech: [
					"C++",
					"ECS",
					"UDP",
					"Réseau"
				],
				category: "Programmation Système",
				period: "Novembre 2025",
				date: "2025-11",
				github: "https://github.com/Akashi05/rtype",
				media: "/rtype.png"
			},
			{
				title: "Whanos - DevOps Platform",
				role: "Ingénieur DevOps",
				description: "Plateforme PaaS automatisant la détection de technologie, la création d'images Docker et le déploiement sur Kubernetes.",
				highlights: [
					"Conception d'une plateforme CI/CD avec Jenkins",
					"Détection automatique de la stack technologique",
					"Création d'images Docker standardisées",
					"Déploiement automatisé d'applications sur Kubernetes"
				],
				tech: [
					"Jenkins",
					"Ansible",
					"Kubernetes",
					"Docker"
				],
				category: "DevOps & Automatisation",
				period: "Novembre 2025",
				date: "2025-11",
				github: "https://github.com/Akashi05/Whanos",
				media: "/whanos.png"
			},
			{
				title: "JEB Incubator",
				role: "Développeur Backend",
				description: "Plateforme de gestion pour incubateur de startups. Backend robuste avec Django et frontend dynamique en Next.js.",
				highlights: [
					"Architecture en microservices",
					"Gestion en temps réel via WebSockets",
					"Déploiement Docker & orchestration",
					"Plateforme web complète (Django + Next.js)"
				],
				tech: [
					"Django",
					"Next.js",
					"PostgreSQL",
					"DRF"
				],
				category: "Full-Stack & Architecture",
				period: "Décembre 2025",
				date: "2025-12",
				github: "https://github.com/Akashi05/JEB_Incubator",
				media: "/jeb.png"
			},
			{
				title: "Raytracer",
				role: "Développeur Graphique",
				description: "Moteur de rendu 3D utilisant le ray tracing pour générer des images avec gestion des ombres, reflets et transparences.",
				highlights: [
					"Gestion des lumières, ombres portées et réflexions",
					"Rendu de formes géométriques : sphères, cylindres et cônes",
					"Simulations d'interaction lumineuse complexe",
					"Support des transformations géométriques"
				],
				tech: [
					"C++",
					"Mathématiques 3D",
					"Ray Tracing"
				],
				category: "Programmation Graphique",
				period: "Juin 2025",
				date: "2025-06",
				github: "https://github.com/Akashi05/Raytracer",
				media: "/raytracer.png"
			},
			{
				title: "MyPandoc",
				role: "Développeur Fonctionnel",
				description: "Convertisseur de documents haute fidélité supportant Markdown, JSON et XML, développé en Haskell.",
				highlights: ["Parsing et génération de données structurées (XML, JSON, MD)", "Développement en programmation fonctionnelle Haskell"],
				tech: [
					"Haskell",
					"Functional Programming",
					"Parsing"
				],
				category: "Outils de Développement",
				period: "Mai 2025",
				date: "2025-05",
				github: "https://github.com/Akashi05/MyPandoc",
				media: "/mypandoc.png"
			},
			{
				title: "Arcade - Virtual Console",
				role: "Développeur Core & Jeux",
				description: "Console virtuelle modulaire capable de charger dynamiquement des jeux et des moteurs graphiques (SFML, SDL2, Ncurses) au runtime.",
				highlights: [
					"Chargement dynamique de bibliothèques partagées",
					"Abstraction totale du moteur graphique",
					"Jeux implémentés : Snake, Nibbler",
					"Changement de moteur graphique en plein jeu"
				],
				tech: [
					"C++",
					"SFML",
					"Ncurses",
					"SDL2"
				],
				category: "Game Development",
				period: "Mars - Avril 2025",
				date: "2025-04",
				github: "https://github.com/Akashi05/Arcade",
				media: "/arcade.png"
			},
			{
				title: "MiniLibC",
				role: "Développeur Système",
				description: "Réimplémentation partielle de la bibliothèque standard C en assembleur x86-64.",
				highlights: [
					"Réécriture de fonctions systèmes (strlen, strcpy, etc.)",
					"Utilisation exclusive de l'assembleur x86-64",
					"Optimisation bas niveau pour la performance"
				],
				tech: [
					"Assembly x86-64",
					"NASM",
					"System"
				],
				category: "Programmation Bas Niveau",
				period: "Mars 2025",
				date: "2025-03",
				github: "https://github.com/Akashi05/MiniLibC",
				media: "/libc.png"
			},
			{
				title: "AutoMakefile",
				role: "Développeur Outils",
				description: "Script d'automatisation Bash permettant de générer automatiquement des Makefiles complexes.",
				highlights: [
					"Génération automatique de dépendances",
					"Support pour les projets C et C++",
					"Scripting shell pour l'automatisation"
				],
				tech: [
					"Shell",
					"Bash",
					"Makefile"
				],
				category: "DevOps & Outils",
				period: "Octobre 2024",
				date: "2024-10",
				github: "https://github.com/Akashi05/AutoMakefile",
				media: "/automake.png"
			},
			{
				title: "MyRPG",
				role: "Développeur Jeu Vidéo",
				description: "Moteur de jeu 2D avec gestion d'inventaire, quêtes et combats en utilisant la bibliothèque CSFML.",
				highlights: [
					"Moteur de jeu 2D avec CSFML",
					"Système de gestion de personnages et d'inventaire",
					"Cartes interactives et PNJ"
				],
				tech: [
					"C",
					"CSFML",
					"Game Development"
				],
				category: "Développement de Jeux",
				period: "Octobre 2024",
				date: "2024-10",
				github: "https://github.com/Akashi05/MyRPG",
				media: "/rpg.png"
			},
			{
				title: "Minishell2",
				role: "Développeur Système",
				description: "Interpréteur de commandes avancé gérant les pipes, les redirections et les variables d'environnement.",
				highlights: [
					"Gestion des pipes et des redirections",
					"Exécution de commandes via execve",
					"Gestion précise de l'environnement Unix et des signaux"
				],
				tech: [
					"C",
					"Unix",
					"Shell"
				],
				category: "Programmation Système",
				period: "Septembre 2024",
				date: "2024-09",
				github: "https://github.com/Akashi05/Minishell2",
				media: "/minishell.png"
			},
			{
				title: "Chocolatine",
				role: "Ingénieur DevOps",
				description: "Automatisation de la compilation et du respect des normes de codage (Epitech Coding Style) via GitHub Actions.",
				highlights: ["Vérification de l'existence des fichiers et du building effectif du projet", "Mirroring de répertoire GitHub"],
				tech: [
					"GitHub Actions",
					"CI/CD",
					"Bash"
				],
				category: "DevOps",
				period: "Août 2024",
				date: "2024-08",
				github: "https://github.com/Akashi05/CHOCOLATINE_PROJET",
				media: "/cholatine.png"
			}
		],
		experience_data: [
			{
				title: "Stage académique (troisième année)",
				company: "Future Studio (incubateur)",
				location: "Cotonou, Bénin",
				period: "Avril 2026 - Juillet 2026",
				achievements: [
					"Développement d'ArbitraChain, une plateforme d'accessibilité aux marchés de prédiction, au sein de l'incubateur Future Studio.",
					"Conception et implémentation d'un moteur d'arbitrage haute performance en Rust.",
					"Accompagnement par Future Studio pour la mise sur le marché et l'optimisation de l'efficacité du produit."
				]
			},
			{
				title: "Voyage d'immersion tech à Lagos",
				company: "EPITECH (Study Trip)",
				location: "Lagos, Nigeria",
				period: "Janvier 2026",
				achievements: [
					"Immersion d'une semaine pour découvrir l'écosystème technologique dynamique du Nigeria.",
					"Rencontres stratégiques avec des acteurs clés : Maliyo Games, ALX Nigeria, Rank et Oracle.",
					"Analyse des opportunités et des défis technologiques sur le marché nigérian."
				]
			},
			{
				title: "Hackaton Beyond Memories",
				company: "Team Genesis",
				location: "Cotonou, Bénin",
				period: "Novembre 2025",
				achievements: [
					"Conception d'un mémorial virtuel universel (mémoire humaine numérique) visant à préserver l'héritage numérique.",
					"Utilisation de technologies innovantes pour la gestion de données mémorielles.",
					"Projet labellisé #TechForGood et #Innovation."
				]
			},
			{
				title: "DISCOVERY 2025",
				company: "Future Studio",
				location: "Cotonou, Bénin",
				period: "Février 2025",
				achievements: [
					"1ère place au concours d'innovation digitale DISCOVERY 2025",
					"Conception d'une solution digitale innovante pour le secteur du sport",
					"Collaboration en équipe axée sur la créativité et l'implémentation pratique"
				]
			},
			{
				title: "Stagiaire Développeur Web & Jeu",
				company: "Africereal",
				location: "Cotonou, Bénin",
				period: "Novembre 2024 - Janvier 2025",
				achievements: ["Conception d'une maquette pour un site web d'e-learning (WordPress, HTML/CSS)", "Contribution au développement d'un jeu éducatif de simulation d'agriculture (Godot Engine)"]
			}
		]
	},
	en: {
		nav: {
			home: "Home",
			about: "About",
			projects: "Projects",
			experience: "Experience",
			contact: "Contact"
		},
		hero: {
			status: "Looking for an Internship",
			role: "Software Engineering Student",
			description: "Software Engineering student at Epitech with hands-on experience in full-stack development, DevOps automation, and game engine architecture. Capable of building scalable systems and solving complex problems in collaborative environments.",
			cta_projects: "View my projects",
			cta_contact: "Contact me",
			cv_fr: "Download CV (FR)",
			cv_en: "Download CV (EN)"
		},
		about: {
			title: "Who am I?",
			subtitle: "About",
			description1: "Junior software engineering student at EPITECH Benin, I am passionate about software development and creating concrete solutions to real-world problems.",
			description2: "Beyond technical aspects, I am interested in how systems are designed to be useful, efficient, and sustainable. My background has led me to work on both low-level systems in C++ as well as web applications and complete architectures.",
			description3: "Trained in a demanding environment, I have developed strong autonomy along with an ability to learn quickly and adapt to various contexts.",
			description4: "I place particular importance on teamwork, convinced that the best solutions emerge from effective collaboration and good communication.",
			description5: "Today, I am looking to grow in stimulating environments, both academic and professional, where I can continue to learn, contribute, and participate in creating impactful solutions.",
			stats: {
				total: 60,
				total_label: "Total projects (mini projects & projects)",
				school: 50,
				school_label: "Academic projects",
				personal: 10,
				personal_label: "Personal projects",
				details: "including 60+ academic and 10+ personal",
				tech: 30,
				tech_label: "Technologies",
				experience: 5,
				experience_label: "Experiences"
			},
			formation: "Education",
			languages: "Languages",
			soft_skills: "Soft Skills",
			interests: "Interests",
			skills_title: "Technical Skills",
			lang_fr: "French",
			lang_en: "English",
			lang_native: "Native",
			lang_intermediate: "Intermediate",
			skill_cats: {
				languages: "Languages",
				frameworks: "Frameworks",
				devops: "DevOps & CI/CD",
				databases: "Databases",
				tools: "Tools"
			}
		},
		projects: {
			title: "Technical Projects",
			subtitle: "Portfolio",
			timeline: "Timeline of my achievements",
			view_details: "View details",
			highlights: "Key Features",
			github: "View"
		},
		experience: {
			title: "Experience",
			subtitle: "Journey",
			period: "Period",
			location: "Location"
		},
		contact: {
			title: "Let's Work Together",
			subtitle: "Contact",
			description: "I am open to collaborations and innovative projects. Feel free to contact me.",
			form_name: "Name",
			form_email: "Email",
			form_message: "Message",
			form_send: "Send Message"
		},
		footer: {
			bio: "Software Engineer student at EPITECH, passionate about building modern and efficient applications.",
			nav: "Navigation",
			socials: "Socials",
			contact: "Contact",
			cta: "Get in touch",
			rights: "All rights reserved.",
			designed: "Designed with"
		},
		projects_data: [
			{
				title: "ArbitraChain",
				role: "Rust Backend Developer",
				description: "Automated arbitrage bot for prediction markets (Polymarket). High-performance infrastructure capable of identifying and executing arbitrage opportunities in real-time.",
				highlights: [
					"Complete refactoring of the backend architecture for increased modularity",
					"Implementation of a high-performance arbitrage engine in Rust",
					"Integration of complex APIs (Gamma, CLOB) and asynchronous data stream management",
					"Unified and secure redemption system for position management"
				],
				tech: [
					"Rust",
					"PostgreSQL",
					"Tokio",
					"Serialization",
					"Trading API"
				],
				category: "Backend & High-Frequency Trading",
				period: "February 2026 - Present",
				date: "2026-02",
				github: "https://arbitrachain.com",
				media: "/arbitrachain.png"
			},
			{
				title: "AREA - Automation Platform",
				role: "Lead Backend & Architect",
				description: "IFTTT/Zapier clone with Django/DRF microservices architecture. Asynchronous automation engine with multithreaded workers for API integrations (Google, Discord, GitHub, etc).",
				highlights: [
					"Microservices architecture with Django/DRF",
					"Asynchronous automation engine with multithreaded workers",
					"OAuth2 \"Central Hub\" backend unifying Web/Mobile",
					"SQLite → PostgreSQL migration and Railway deployment"
				],
				tech: [
					"Django",
					"DRF",
					"Docker",
					"PostgreSQL",
					"OAuth2",
					"Railway"
				],
				category: "Full-Stack & Architecture",
				period: "January 2026",
				date: "2026-01",
				github: "https://github.com/evra0/G-DEV-500-COT-5-2-area-10/tree/main",
				media: "/area.png"
			},
			{
				title: "Gomoku",
				role: "AI Developer",
				description: "High-performance AI implementation for the Gomoku game using the Minimax algorithm with Alpha-Beta pruning.",
				highlights: [
					"AI based on the Minimax algorithm",
					"Optimization via Zobrist Hashing and Alpha-Beta pruning",
					"Advanced heuristics for evaluation and time management"
				],
				tech: [
					"C++",
					"Minimax",
					"AI"
				],
				category: "Artificial Intelligence",
				period: "January 2026",
				date: "2026-01",
				github: "https://github.com/Akashi05/Gomoku",
				media: "/gomoku.png"
			},
			{
				title: "NeuralNetwork",
				role: "AI Researcher",
				description: "Complete implementation of a neural network framework (PyTorch-like) from scratch in Python using NumPy. Features layers, activation functions, loss functions, and optimizers.",
				highlights: [
					"Deep learning framework reproducing PyTorch functionalities",
					"NumPy optimization for matrix computations",
					"Trained on chess position classification and XOR problem"
				],
				tech: [
					"Python",
					"NumPy",
					"Machine Learning",
					"Framework Design"
				],
				category: "Artificial Intelligence",
				period: "November 2025",
				date: "2025-11",
				github: "https://github.com/Akashi05/NeuralNetwork",
				media: "/nn.png"
			},
			{
				title: "R-Type Game Engine",
				role: "Engine Developer",
				description: "High-performance 2D game engine developed from scratch in C++17 with ECS architecture.",
				highlights: [
					"Custom ECS (Entity Component System) architecture",
					"Low-latency UDP network engine for multiplayer",
					"Project management with Conan and CMake",
					"Optimized performance for real-time multiplayer"
				],
				tech: [
					"C++",
					"ECS",
					"UDP",
					"Network"
				],
				category: "Systems Programming",
				period: "November 2025",
				date: "2025-11",
				github: "https://github.com/Akashi05/rtype",
				media: "/rtype.png"
			},
			{
				title: "Whanos - DevOps Platform",
				role: "DevOps Engineer",
				description: "PaaS platform automating technology detection, Docker image creation, and Kubernetes deployment.",
				highlights: [
					"Engineered a Jenkins CI/CD platform",
					"Automatic detection of repository technology stack",
					"Built robust and standardized Docker images",
					"Automated application deployment on Kubernetes"
				],
				tech: [
					"Jenkins",
					"Ansible",
					"Kubernetes",
					"Docker"
				],
				category: "DevOps & Automation",
				period: "November 2025",
				date: "2025-11",
				github: "https://github.com/Akashi05/Whanos",
				media: "/whanos.png"
			},
			{
				title: "JEB Incubator",
				role: "Backend Developer",
				description: "Management platform for startup incubators. Robust Django backend and dynamic Next.js frontend.",
				highlights: [
					"Microservices architecture",
					"Real-time management via WebSockets",
					"Docker deployment & orchestration",
					"Full web platform (Django + Next.js)"
				],
				tech: [
					"Django",
					"Next.js",
					"PostgreSQL",
					"DRF"
				],
				category: "Full-Stack & Architecture",
				period: "December 2025",
				date: "2025-12",
				github: "https://github.com/Akashi05/JEB_Incubator",
				media: "/jeb.png"
			},
			{
				title: "Raytracer",
				role: "Graphics Developer",
				description: "3D rendering engine using ray tracing to generate images with shadow, reflection, and transparency management.",
				highlights: [
					"Light, shadow, and reflection management",
					"Rendering of geometric shapes: spheres, cylinders, and cones",
					"Complex light interaction simulations",
					"Support for geometric transformations"
				],
				tech: [
					"C++",
					"3D Mathematics",
					"Ray Tracing"
				],
				category: "Graphics Programming",
				period: "June 2025",
				date: "2025-06",
				github: "https://github.com/Akashi05/Raytracer",
				media: "/raytracer.png"
			},
			{
				title: "MyPandoc",
				role: "Functional Developer",
				description: "High-fidelity document converter supporting Markdown, JSON, and XML, developed in Haskell.",
				highlights: ["Parsing and generation of structured data (XML, JSON, MD)", "Haskell functional programming development"],
				tech: [
					"Haskell",
					"Functional Programming",
					"Parsing"
				],
				category: "Development Tools",
				period: "May 2025",
				date: "2025-05",
				github: "https://github.com/Akashi05/MyPandoc",
				media: "/mypandoc.png"
			},
			{
				title: "Arcade - Virtual Console",
				role: "Core & Game Developer",
				description: "Modular virtual console capable of dynamically loading games and graphics engines (SFML, SDL2, Ncurses) at runtime.",
				highlights: [
					"Dynamic loading of shared libraries",
					"Total abstraction of the graphics engine",
					"Implemented games: Snake, Nibbler",
					"In-game graphics engine switching"
				],
				tech: [
					"C++",
					"SFML",
					"Ncurses",
					"SDL2"
				],
				category: "Game Development",
				period: "March - April 2025",
				date: "2025-04",
				github: "https://github.com/Akashi05/Arcade",
				media: "/arcade.png"
			},
			{
				title: "MiniLibC",
				role: "System Developer",
				description: "Partial reimplementation of the standard C library in x86-64 assembly.",
				highlights: [
					"Rewriting system functions (strlen, strcpy, etc.)",
					"Exclusive use of x86-64 assembly",
					"Low-level optimization for performance"
				],
				tech: [
					"Assembly x86-64",
					"NASM",
					"System"
				],
				category: "Low-Level Programming",
				period: "March 2025",
				date: "2025-03",
				github: "https://github.com/Akashi05/MiniLibC",
				media: "/libc.png"
			},
			{
				title: "AutoMakefile",
				role: "Tool Developer",
				description: "Automation tool for generating complex Makefiles for C/C++ projects.",
				highlights: [
					"Automatic dependency generation",
					"Support for C and C++ projects",
					"Shell scripting for automation"
				],
				tech: [
					"Shell",
					"Bash",
					"Makefile"
				],
				category: "DevOps & Tooling",
				period: "October 2024",
				date: "2024-10",
				github: "https://github.com/Akashi05/AutoMakefile",
				media: "/automake.png"
			},
			{
				title: "MyRPG",
				role: "Game Developer",
				description: "2D game engine with inventory, quest, and combat management using the CSFML library.",
				highlights: [
					"2D game engine with CSFML",
					"Character and inventory management system",
					"Interactive maps and NPCs"
				],
				tech: [
					"C",
					"CSFML",
					"Game Development"
				],
				category: "Game Development",
				period: "October 2024",
				date: "2024-10",
				github: "https://github.com/Akashi05/MyRPG",
				media: "/rpg.png"
			},
			{
				title: "Minishell2",
				role: "System Developer",
				description: "Advanced command interpreter managing pipes, redirections, and environment variables.",
				highlights: [
					"Pipes and redirections management",
					"Command execution via execve",
					"Unix environment and signals management"
				],
				tech: [
					"C",
					"Unix",
					"Shell"
				],
				category: "System Programming",
				period: "September 2024",
				date: "2024-09",
				github: "https://github.com/Akashi05/Minishell2",
				media: "/minishell.png"
			},
			{
				title: "Chocolatine",
				role: "DevOps Engineer",
				description: "Automation of compilation and Epitech Coding Style compliance via GitHub Actions.",
				highlights: ["Verification of file existence and effective project building", "Mirroring GitHub repository"],
				tech: [
					"GitHub Actions",
					"CI/CD",
					"Bash"
				],
				category: "DevOps",
				period: "August 2024",
				date: "2024-08",
				github: "https://github.com/Akashi05/CHOCOLATINE_PROJET",
				media: "/cholatine.png"
			}
		],
		experience_data: [
			{
				title: "Academic Internship (Third Year)",
				company: "Future Studio (incubator)",
				location: "Cotonou, Benin",
				period: "April 2026 - July 2026",
				achievements: [
					"Development of ArbitraChain, a prediction market accessibility platform, within the Future Studio incubator.",
					"Design and implementation of a high-performance arbitrage engine in Rust.",
					"Support from Future Studio for product effectiveness and market readiness."
				]
			},
			{
				title: "Tech Immersion Trip to Lagos",
				company: "EPITECH (Study Trip)",
				location: "Lagos, Nigeria",
				period: "January 2026",
				achievements: [
					"One-week immersion to discover Nigeria's dynamic tech ecosystem.",
					"Strategic meetings with key players: Maliyo Games, ALX Nigeria, Rank, and Oracle.",
					"Analysis of technological opportunities and challenges in the Nigerian market."
				]
			},
			{
				title: "Hackathon Beyond Memories",
				company: "Team Genesis",
				location: "Cotonou, Benin",
				period: "November 2025",
				achievements: [
					"Design of a universal virtual memorial (digital human memory) aiming to preserve digital legacy.",
					"Utilization of innovative technologies for memorial data management.",
					"Project labeled #TechForGood and #Innovation."
				]
			},
			{
				title: "DISCOVERY 2025",
				company: "Future Studio",
				location: "Cotonou, Benin",
				period: "February 2025",
				achievements: [
					"1st place in the DISCOVERY 2025 digital innovation competition",
					"Designed an innovative digital solution for the sports sector",
					"Collaborated in a team focused on creativity and practical implementation"
				]
			},
			{
				title: "Web & Game Developer Intern",
				company: "Africereal",
				location: "Cotonou, Benin",
				period: "November 2024 - January 2025",
				achievements: ["Designed a mockup for an e-learning website (WordPress, HTML/CSS)", "Contributed to the development of an educational farming simulation game (Godot Engine)"]
			}
		]
	}
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var ease = [
	.22,
	1,
	.36,
	1
];
function Hero({ language, setCurrentPage }) {
	const t = translations[language].hero;
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const contentY = useTransform(scrollYProgress, [0, 1], [0, -72]);
	const contentOpacity = useTransform(scrollYProgress, [
		0,
		.72,
		1
	], [
		1,
		1,
		.15
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "hero-editorial relative z-10 mx-auto max-w-7xl px-6 lg:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "hero-content",
			style: reduced ? {} : {
				y: contentY,
				opacity: contentOpacity
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "hero-name font-display font-black leading-[1.02]",
				children: ["Bérenger", "Sessou."].map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block overflow-hidden pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "block",
						initial: { y: "110%" },
						animate: { y: 0 },
						transition: {
							duration: 1.1,
							delay: i * .15,
							ease
						},
						children: name
					})
				}, name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 18
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .9,
					delay: .5,
					ease
				},
				className: "hero-caption",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium text-muted-foreground",
					children: ["Fullstack · DevOps · ", language === "fr" ? "Systèmes" : "Systems"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCurrentPage("projects"),
						variant: "outline",
						className: "group h-12 rounded-full border-foreground/40 bg-background/60 px-6 backdrop-blur-sm",
						children: [t.cta_projects, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => setCurrentPage("contact"),
						className: "h-12 px-3",
						children: [t.cta_contact, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-bottom flex flex-wrap items-center justify-between gap-4 border-t border-border py-5 text-xs text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: () => setCurrentPage("about"),
					className: "h-auto gap-3 p-0 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 16 }), language === "fr" ? "Découvrir mon univers" : "Explore my world"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:block",
					children: "Cotonou, Bénin · EPITECH"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/CV_Bérenger_Sessou_FR.pdf",
							download: "CV_Berenger_Sessou_FR.pdf",
							className: "flex items-center gap-1",
							title: t.cv_fr,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), "CV FR"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/CV_Berenger_Sessou_EN.pdf",
							download: "CV_Berenger_Sessou_EN.pdf",
							className: "flex items-center gap-1",
							title: t.cv_en,
							children: "CV EN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/Akashi05",
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 17 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/",
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "LinkedIn",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 17 })
						})
					]
				})
			]
		})]
	});
}
var skills = {
	languages: [
		{
			name: "SDL",
			logo: "/sdl.svg"
		},
		{
			name: "C++",
			logo: "cplusplus"
		},
		{
			name: "Rust",
			logo: "rust"
		},
		{
			name: "Python",
			logo: "python"
		},
		{
			name: "JavaScript",
			logo: "javascript"
		},
		{
			name: "Haskell",
			logo: "haskell"
		},
		{
			name: "HTML",
			logo: "html5"
		},
		{
			name: "CSS",
			logo: "css"
		}
	],
	frameworks: [
		{
			name: "Django",
			logo: "django"
		},
		{
			name: "Next.js",
			logo: "nextdotjs"
		},
		{
			name: "Django REST Framework",
			logo: "django"
		},
		{
			name: "Tailwind CSS",
			logo: "tailwindcss"
		}
	],
	devops: [
		{
			name: "Docker",
			logo: "docker"
		},
		{
			name: "Kubernetes",
			logo: "kubernetes"
		},
		{
			name: "Jenkins",
			logo: "jenkins"
		},
		{
			name: "Ansible",
			logo: "ansible"
		},
		{
			name: "GitHub Actions",
			logo: "githubactions"
		},
		{
			name: "Git",
			logo: "git"
		}
	],
	databases: [{
		name: "PostgreSQL",
		logo: "postgresql"
	}, {
		name: "SQLite",
		logo: "sqlite"
	}],
	tools: [
		{
			name: "WordPress",
			logo: "wordpress"
		},
		{
			name: "Godot",
			logo: "godotengine"
		},
		{
			name: "Railway",
			logo: "railway"
		},
		{
			name: "SFML",
			logo: "sfml"
		},
		{
			name: "Ncurses",
			logo: "gnubash"
		},
		{
			name: "C",
			logo: "c"
		}
	]
};
function About({ language }) {
	const t = translations[language].about;
	const paragraphs = Object.entries(t).filter(([key]) => key.startsWith("description")).sort(([a], [b]) => a.localeCompare(b, void 0, { numeric: true }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "editorial-section mx-auto max-w-7xl px-6 lg:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-rail",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "section-index",
						children: [
							"01 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-40",
								children: "/"
							}),
							" ",
							t.subtitle
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-6",
						children: t.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "about-copy space-y-7",
					children: paragraphs.map(([key, value], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							amount: .25
						},
						transition: {
							duration: .7,
							delay: index * .04
						},
						children: String(value)
					}, key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-10 border-y border-border py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[0.9]",
							children: [t.stats.total, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "+"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground",
							children: t.stats.total_label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: t.stats.details
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-5 text-xs uppercase tracking-[0.16em] text-muted-foreground",
							children: t.formation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base",
							children: "Bachelor d'expertise informatique"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "EPITECH Benin 6th semester (in progress) · Feb 2024"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base",
							children: "BAC D"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Cardinal Bernandin Gantin (CBG) · Jun 2023"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-5 text-xs uppercase tracking-[0.16em] text-muted-foreground",
							children: t.languages
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-base",
							children: [t.lang_fr, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [" — ", t.lang_native]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-base",
							children: [t.lang_en, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [" — ", t.lang_intermediate]
							})]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "section-title text-[clamp(1.75rem,3.2vw,2.75rem)]",
					children: t.skills_title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: Object.entries(skills).map(([category, items], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .5 },
						className: "grid gap-3 border-t border-border py-7 md:grid-cols-[240px_1fr] md:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mr-4 opacity-50",
								children: ["0", index + 1]
							}), t.skill_cats[category]]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-x-7 gap-y-3",
							children: items.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-medium",
								children: skill.name
							}, skill.name))
						})]
					}, category))
				})]
			})
		]
	});
}
function Projects({ language, setSelectedProject }) {
	const t = translations[language];
	const projects = [...t.projects_data].sort((a, b) => b.date.localeCompare(a.date));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "editorial-section mx-auto max-w-7xl px-6 lg:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "section-head flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "section-index",
				children: [
					"02 ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-40",
						children: "/"
					}),
					" ",
					t.projects.subtitle
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title mt-6",
				children: t.projects.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs uppercase tracking-[0.14em] text-muted-foreground md:mb-2",
				children: [
					t.projects.timeline,
					" — ",
					String(projects.length).padStart(2, "0")
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-x-14 lg:gap-y-24",
			children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .12
				},
				transition: { duration: .7 },
				className: i === 0 ? "md:col-span-2" : "",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => setSelectedProject(project),
						"aria-label": `${t.projects.view_details} — ${project.title}`,
						className: `project-image group relative flex h-auto w-full overflow-hidden rounded-xl border border-border bg-secondary p-0 ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.media,
							alt: project.title,
							loading: "lazy",
							className: "h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.035]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:-rotate-45",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 20 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground",
							children: [
								String(i + 1).padStart(2, "0"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "opacity-40",
									children: "/"
								}),
								" ",
								project.category
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold sm:text-3xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "link",
								onClick: () => setSelectedProject(project),
								className: "h-auto whitespace-normal p-0 text-left font-display text-inherit",
								children: project.title
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "shrink-0 pt-1 text-xs text-muted-foreground",
							children: project.date.split("-")[0]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: project.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground",
						children: project.tech.join(" · ")
					})
				]
			}, project.title))
		})]
	});
}
function Experience({ language }) {
	const t = translations[language];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "editorial-section mx-auto max-w-7xl px-6 lg:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "section-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "section-index",
				children: [
					"03 ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-40",
						children: "/"
					}),
					" ",
					t.experience.subtitle
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title mt-6",
				children: t.experience.title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: t.experience_data.map((exp, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				amount: .15
			},
			transition: { duration: .6 },
			className: "exp-row grid gap-5 border-t border-border py-10 md:grid-cols-[240px_1fr] md:gap-10 md:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-6 text-sm text-muted-foreground md:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tabular-nums opacity-60",
						children: ["0", index + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "md:mt-5",
						children: exp.period
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "md:mt-2",
						children: exp.location
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold sm:text-3xl",
					children: exp.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-base text-muted-foreground",
					children: exp.company
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground",
					children: exp.achievements.map((achievement) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "text-foreground/40",
							children: "—"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: achievement })]
					}, achievement))
				})
			] })]
		}, exp.title)) })]
	});
}
function Contact({ language }) {
	const [state, handleSubmit] = J("xdapdrpv");
	const t = translations[language];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "editorial-section mx-auto max-w-7xl px-6 lg:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: { duration: .7 },
			className: "section-head grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "section-index",
				children: [
					"04 ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "opacity-40",
						children: "/"
					}),
					" ",
					t.contact.subtitle
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title mt-6",
				children: t.contact.title
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-lede",
				children: t.contact.description
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "inline-block size-1.5 rounded-full bg-foreground/60"
				}), t.hero.status.replace(/^[^\p{L}\p{N}]+/u, "")]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-5 border-t border-border py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
						size: 22,
						className: "mt-1 shrink-0 text-muted-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:sessouberenger@gmail.com",
								className: "block truncate text-lg transition-colors hover:text-muted-foreground",
								children: "sessouberenger@gmail.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:berenger.sessou@epitech.eu",
								className: "mt-1 block truncate text-lg transition-colors hover:text-muted-foreground",
								children: "berenger.sessou@epitech.eu"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://wa.me/2290164778682",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-start gap-5 border-t border-border py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						size: 22,
						className: "mt-1 shrink-0 text-muted-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							children: "+229 01 64 77 86 82"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border py-8 text-sm text-muted-foreground",
					children: "Cotonou, Bénin · EPITECH"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-8",
				"aria-label": t.contact.form_send,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "name",
							className: "mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground",
							children: t.contact.form_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							type: "text",
							name: "name",
							autoComplete: "name",
							required: true,
							className: "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base focus:border-foreground focus:outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
							prefix: "Name",
							field: "name",
							errors: state.errors
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "email",
							className: "mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground",
							children: t.contact.form_email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							type: "email",
							name: "email",
							autoComplete: "email",
							required: true,
							className: "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base focus:border-foreground focus:outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
							prefix: "Email",
							field: "email",
							errors: state.errors
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground",
							children: t.contact.form_message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							name: "message",
							required: true,
							rows: 4,
							className: "w-full resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base focus:border-foreground focus:outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
							prefix: "Message",
							field: "message",
							errors: state.errors
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: state.submitting,
						className: "h-14 w-full rounded-full font-bold uppercase tracking-[0.1em] transition-transform hover:scale-[1.01] disabled:opacity-50",
						children: state.succeeded ? language === "fr" ? "Message envoyé !" : "Message sent!" : t.contact.form_send
					})
				]
			})]
		})]
	});
}
var HeroScene = (0, import_react.lazy)(() => import("./HeroScene-CvfVOBIO.mjs"));
/**
* The ribbon belongs to the hero only: it is anchored to the hero stage, drifts
* as the first viewport scrolls away, and is fully gone before the editorial
* sections start so it never crosses body copy.
*/
function SculptureStage({ darkMode }) {
	const target = (0, import_react.useRef)(null);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target,
		offset: ["start start", "end start"]
	});
	const x = useTransform(scrollYProgress, [0, 1], ["28%", "34%"]);
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 82]);
	const scale = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		1,
		1.08,
		1.02
	]);
	const opacity = useTransform(scrollYProgress, [
		0,
		.7,
		1
	], [
		1,
		1,
		0
	]);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: target,
		className: "sculpture-stage",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sculpture-sticky",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "sculpture-canvas",
				style: reduced ? {} : {
					x,
					y,
					rotate,
					scale,
					opacity
				},
				children: mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: null,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScene, { darkMode })
				})
			})
		})
	});
}
var sections = [
	"home",
	"about",
	"projects",
	"experience",
	"contact"
];
function Portfolio() {
	const [currentSection, setCurrentSection] = (0, import_react.useState)("home");
	const [darkMode, setDarkMode] = (0, import_react.useState)(true);
	const [themeReady, setThemeReady] = (0, import_react.useState)(false);
	const [language, setLanguage] = (0, import_react.useState)("fr");
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
	const t = translations[language];
	(0, import_react.useEffect)(() => {
		const savedMode = localStorage.getItem("darkMode");
		if (savedMode === "true" || savedMode === "false") setDarkMode(savedMode === "true");
		setThemeReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!themeReady) return;
		localStorage.setItem("darkMode", JSON.stringify(darkMode));
		document.documentElement.classList.toggle("dark", darkMode);
	}, [darkMode, themeReady]);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = language;
	}, [language]);
	(0, import_react.useEffect)(() => {
		const updateSection = () => {
			let active = "home";
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element && element.getBoundingClientRect().top <= 150) active = section;
			}
			setCurrentSection(active);
		};
		window.addEventListener("scroll", updateSection, { passive: true });
		updateSection();
		return () => window.removeEventListener("scroll", updateSection);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!selectedProject && !isMenuOpen) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const escape = (event) => {
			if (event.key === "Escape") {
				setSelectedProject(null);
				setIsMenuOpen(false);
			}
		};
		document.addEventListener("keydown", escape);
		return () => {
			document.body.style.overflow = previous;
			document.removeEventListener("keydown", escape);
		};
	}, [selectedProject, isMenuOpen]);
	const scrollToSection = (section) => {
		setIsMenuOpen(false);
		setCurrentSection(section);
		document.getElementById(section)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
		window.history.replaceState(null, "", `#${section}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionConfig, {
		reducedMotion: "user",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `portfolio min-h-screen bg-background text-foreground font-sans transition-colors duration-500 selection:bg-foreground/20 ${darkMode ? "dark" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": language === "fr" ? "Navigation principale" : "Main navigation",
					className: "floating-nav fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center gap-3 w-[calc(100%-2rem)] max-w-5xl px-3 py-2 lg:px-4 lg:py-2.5 bg-background/85 border border-border rounded-full backdrop-blur-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => scrollToSection("home"),
						className: "px-0 font-display text-2xl font-black",
						"aria-label": "Accueil",
						children: "BS."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 lg:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:flex items-center gap-2",
								children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									onClick: () => scrollToSection(section),
									"aria-current": currentSection === section ? "location" : void 0,
									className: `relative uppercase text-xs font-bold ${currentSection === section ? "text-foreground" : "text-muted-foreground"}`,
									children: [t.nav[section], currentSection === section && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 inset-x-4 h-px bg-foreground" })]
								}, section))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: () => setLanguage(language === "fr" ? "en" : "fr"),
								"aria-label": language === "fr" ? "Switch to English" : "Passer en français",
								className: "px-2 text-xs font-bold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {}),
									" ",
									language.toUpperCase()
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => setDarkMode(!darkMode),
								"aria-label": darkMode ? "Mode clair" : "Mode sombre",
								title: darkMode ? "Mode clair" : "Mode sombre",
								children: darkMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => setIsMenuOpen(!isMenuOpen),
								"aria-label": isMenuOpen ? "Fermer le menu" : "Ouvrir le menu",
								"aria-expanded": isMenuOpen,
								className: "lg:hidden",
								children: isMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						]
					})]
				}),
				isMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-30 bg-overlay backdrop-blur-sm lg:hidden",
					onClick: () => setIsMenuOpen(false),
					"aria-hidden": "true"
				}),
				isMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed top-24 left-4 right-4 z-40 flex flex-col rounded-3xl border border-border bg-background p-3 shadow-2xl lg:hidden",
					children: sections.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => scrollToSection(section),
						className: "h-auto w-full justify-start gap-5 border-b border-border px-5 py-5 font-display text-2xl font-bold last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium tabular-nums text-muted-foreground",
							children: ["0", index + 1]
						}), t.nav[section]]
					}, section))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-stage",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SculptureStage, { darkMode }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "home",
							"aria-label": t.nav.home,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
								language,
								setCurrentPage: scrollToSection,
								darkMode
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about",
						"aria-label": t.nav.about,
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {
							language,
							darkMode
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "projects",
						"aria-label": t.nav.projects,
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {
							language,
							darkMode,
							setSelectedProject
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "experience",
						"aria-label": t.nav.experience,
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {
							language,
							darkMode
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contact",
						"aria-label": t.nav.contact,
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
							language,
							darkMode
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "py-12 border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-6xl mx-auto px-6 lg:px-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lg:col-span-2 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-black",
										children: "BS."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground max-w-md",
										children: t.footer.bio
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold mb-4",
									children: t.footer.nav
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-sm text-muted-foreground",
									children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "link",
										onClick: () => scrollToSection(section),
										className: "p-0 h-auto text-muted-foreground",
										children: t.nav[section]
									}) }, section))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold mb-4",
									children: t.footer.contact
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-sm text-muted-foreground break-words",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:sessouberenger@gmail.com",
											className: "hover:text-foreground",
											children: "sessouberenger@gmail.com"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:berenger.sessou@epitech.eu",
											className: "hover:text-foreground",
											children: "berenger.sessou@epitech.eu"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://www.linkedin.com/in/b%C3%A9renger-sessou-b36ab1314/",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "hover:text-foreground",
											children: "LinkedIn"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://github.com/Akashi05",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "hover:text-foreground",
											children: "GitHub"
										}) })
									]
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col lg:flex-row justify-between gap-4 items-center pt-8 border-t border-border text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Bérenger SESSOU. ",
								t.footer.rights
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1",
								children: [
									t.footer.designed,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 14 })
								]
							})]
						})]
					})
				}),
				selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "project-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-overlay backdrop-blur-sm",
						onClick: () => setSelectedProject(null)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card text-card-foreground w-full max-w-5xl max-h-[90svh] overflow-y-auto rounded-lg border border-border relative z-10 flex flex-col lg:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								autoFocus: true,
								variant: "secondary",
								size: "icon",
								onClick: () => setSelectedProject(null),
								className: "absolute top-4 right-4 z-20",
								"aria-label": "Fermer le projet",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:w-1/2 h-64 lg:h-auto bg-secondary flex items-center justify-center p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: selectedProject.media,
									alt: selectedProject.title,
									className: "w-full h-full object-contain rounded-lg"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:w-1/2 p-6 lg:p-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground font-bold uppercase mb-4",
										children: selectedProject.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										id: "project-title",
										className: "text-4xl font-bold mb-6",
										children: selectedProject.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg text-muted-foreground mb-8 leading-relaxed",
										children: selectedProject.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-xl mb-4",
										children: t.projects.highlights
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3 mb-8",
										children: selectedProject.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 shrink-0 bg-foreground rounded-full mt-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: highlight
											})]
										}, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 mb-8",
										children: selectedProject.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-3 py-2 bg-secondary border border-border rounded-md text-muted-foreground text-sm",
											children: tech
										}, tech))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "h-auto py-4 px-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: selectedProject.github,
											target: "_blank",
											rel: "noopener noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}), t.projects.github]
										})
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
var SplitComponent = Portfolio;
//#endregion
export { SplitComponent as component };
