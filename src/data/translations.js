export const translations = {
  en: {
    nav: {
      sections: [
        { id: 'about',      label: 'About' },
        { id: 'projects',   label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'education',  label: 'Education' },
        { id: 'passions',   label: 'Passions' },
      ],
    },
    hero: {
      description: "Passionate about new technologies, I aim to master the entire development chain while deepening my understanding of the theoretical foundations of the tools and systems I use.",
      viewProjects: "View Projects",
      aboutMe: "About Me",
      downloadCV: "Download Resume",
    },
    about: {
      title: "About Me",
      p1: `I'm a passionate software engineer with ${new Date().getFullYear() - 2022} years of experience building software & web applications that solve real-world problems. I specialize in creating scalable, performant, and user-friendly solutions.`,
      p2: "My expertise spans across modern JavaScript frameworks, backend development, and cloud infrastructure. I'm constantly learning and staying up-to-date with the latest technologies to deliver cutting-edge solutions.",
      p3: "When I'm not coding, you'll find me exploring the world. I love traveling, trying new cuisines, and immersing myself in different cultures.",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
    },
    experience: {
      title: "Experience",
    },
    education: {
      title: "Education",
    },
    passions: {
      title: "Passions",
      items: [
        { emoji: '🥾', title: 'Hiking',      description: "Whether in the mountains or through the forest, every trail is a new adventure." },
        { emoji: '⚽', title: 'Football',    description: "A passionate football fan, I enjoy following matches and cheering for my favorite club, FC Barcelona." },
        { emoji: '✈️', title: 'Travelling',  description: "Travelling allows me to discover new cultures and meet people from different backgrounds." },
        { emoji: '💻', title: 'Technology',  description: "Passionate about technology, I enjoy exploring new tools, programming languages, and innovations." },
      ],
    },
    footer: {
      heading: "LET'S WORK",
      headingAccent: "TOGETHER",
      tagline: "I'm always interested in hearing about new projects and opportunities.",
      cta: "Get In Touch",
      rights: "All rights reserved.",
    },
    projects_data: [
      {
        title: "HomeLab",
        description: "Self-hosted home server built on a GMKtec K11 (Ryzen 9 8945HS, 32GB RAM) running Proxmox VE. Hosts 7 LXC containers and VMs including a media server stack (Plex, Jellyfin, Radarr, Sonarr, Lidarr), network-wide ad blocking (AdGuard Home with custom DHCP), Nextcloud for personal cloud storage, automated backups via Proxmox Backup Server, and a workflow automation engine (n8n) with custom pipelines. Exposed securely via Cloudflare Tunnels and Tailscale VPN.",
        tech: ["Proxmox", "Docker", "Linux", "n8n", "Tailscale", "Cloudflare"],
        featured: true,
      },
      {
        title: "Sportify",
        description: "Social platform dedicated to sports enthusiasts, offering an immersive experience for sharing highlights, interacting with the community, participating in sports predictions, and gaming.",
        tech: ["PHP", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/KeapRoof/Sportify",
      },
      {
        title: "TakeNote",
        description: "Secure note management platform with user authentication. Users can create, edit, and delete notes. Connected to a database for data persistence with code quality monitoring.",
        tech: ["Angular", "FastAPI", "SonarQube"],
        link: "https://github.com/KeapRoof/TakeNote",
      },
      {
        title: "Hospital Aid - Graph Pathfinding",
        description: "Application simulating optimal routes between multiple dispensaries for patient transport. Implements Dijkstra's algorithm for graph traversal with a graphical user interface.",
        tech: ["Java"],
        link: "https://github.com/KeapRoof/Parcours_de_graphe_JAVA",
      },
      {
        title: "Directory Management",
        description: "CSV-based directory management application with advanced search capabilities and operation tracking. Allows client lookup based on user-defined characteristics.",
        tech: ["C"],
        link: "https://github.com/KeapRoof/Gestion_Annuaire_C",
      },
      {
        title: "Weather Mobile App",
        description: "Android mobile application for real-time weather consultation. Features favorite cities list, city search, and interactive map, connected to weather API.",
        tech: ["Kotlin", "Firebase"],
        link: "https://github.com/KeapRoof/App_meteo",
      },
      {
        title: "MinhList",
        description: "Secure shopping list web application with user authentication. Users can add, delete, and modify items. Connected to a database for data persistence.",
        tech: ["Symfony"],
        link: "https://github.com/KeapRoof/MinhList",
      },
    ],
    experience_data: [
      {
        role: "Software Engineer Apprentice",
        company: "ChemAI",
        period: "Sept. 2025 - Present",
        description: "Apprenticeship in software engineering focused on developing AI-driven solutions for chemical research and data analysis.",
        achievements: [
          "Contributed to the development of the SmartChemistry platform, an AI-powered tool for chemical data analysis and visualization",
        ],
      },
      {
        role: "Full-stack Developer Apprentice",
        company: "Bayard",
        period: "Sept. 2024 - Aug. 2025",
        description: "Apprenticeship in full-stack development working on industrial web applications with modern frameworks and DevOps practices.",
        achievements: [
          "Designed and deployed valve sizing web application based on engineering parameters and calculation models",
          "Containerized application using Docker ensuring portability and simplified deployment across environments",
          "Implemented RESTful API with Django and Angular front-end for real-time parameter configuration",
          "Set up CI/CD pipeline with SonarQube for code quality standards and static analysis",
          "Maintained IoT web and mobile application for remote management of connected products across municipalities",
        ],
      },
      {
        role: "Software Developer Intern",
        company: "LIRIS",
        period: "Apr. 2024 - June 2024",
        description: "Internship focused on developing and deploying the QUALITOP platform for health data analysis with AI-based clustering models.",
        achievements: [
          "Developed, tested, and deployed QUALITOP platform dedicated to health data analysis",
          "Managed and secured sensitive patient data in full compliance with data protection regulations",
          "Designed and implemented AI-based clustering models for advanced data analysis and insights extraction",
          "Tech Stack: Python, Pandas, Scikit-learn",
        ],
      },
    ],
    education_data: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "IUT Lyon 1",
        period: "2022 - 2025",
        details: "Focus on Software Engineering and Web Development.",
      },
      {
        degree: "Engineering Degree in Computer Science",
        institution: "IMT Mines Alès",
        period: "2025 - 2028",
        details: "Currently pursuing a degree in Computer Science with a focus on software engineering. Expected graduation in 2028.",
      },
    ],
  },

  fr: {
    nav: {
      sections: [
        { id: 'about',      label: 'À propos' },
        { id: 'projects',   label: 'Projets' },
        { id: 'experience', label: 'Expérience' },
        { id: 'education',  label: 'Formation' },
        { id: 'passions',   label: 'Passions' },
      ],
    },
    hero: {
      description: "Passionné par les nouvelles technologies, je cherche à maîtriser l'intégralité de la chaîne de développement tout en approfondissant ma compréhension des fondements théoriques des outils et systèmes que j'utilise.",
      viewProjects: "Voir les projets",
      aboutMe: "À propos",
      downloadCV: "Télécharger le CV",
    },
    about: {
      title: "À propos",
      p1: `Je suis un ingénieur logiciel passionné avec ${new Date().getFullYear() - 2022} ans d'expérience dans la création d'applications web et logicielles qui résolvent des problèmes concrets. Je me spécialise dans la conception de solutions évolutives, performantes et conviviales.`,
      p2: "Mon expertise couvre les frameworks JavaScript modernes, le développement back-end et l'infrastructure cloud. Je me forme continuellement pour rester à jour avec les dernières technologies.",
      p3: "Quand je ne code pas, je pars en randonnée ou je joue au football. J'aime aussi voyager et découvrir de nouvelles cultures.",
    },
    projects: {
      title: "Projets",
      viewProject: "Voir le projet",
    },
    experience: {
      title: "Expérience",
    },
    education: {
      title: "Formation",
    },
    passions: {
      title: "Passions",
      items: [
        { emoji: '🥾', title: 'Randonnée',  description: "Que ce soit en montagne ou en forêt, chaque sentier est une nouvelle aventure." },
        { emoji: '⚽', title: 'Football',   description: "Passionné de football, j'aime suivre les matchs et soutenir mon club favori, le FC Barcelone." },
        { emoji: '✈️', title: 'Voyages',    description: "Les voyages me permettent de découvrir de nouvelles cultures et de rencontrer des personnes d'horizons différents." },
        { emoji: '💻', title: 'Technologie', description: "Passionné par la technologie, j'aime explorer de nouveaux outils, langages de programmation et innovations." },
      ],
    },
    footer: {
      heading: "TRAVAILLONS",
      headingAccent: "ENSEMBLE",
      tagline: "Je suis toujours intéressé par de nouveaux projets et opportunités.",
      cta: "Me Contacter",
      rights: "Tous droits réservés.",
    },
    projects_data: [
      {
        title: "HomeLab",
        description: "Serveur auto-hébergé sur un GMKtec K11 (Ryzen 9 8945HS, 32 Go RAM) tournant sous Proxmox VE. Héberge 7 conteneurs LXC et VMs incluant une stack média (Plex, Jellyfin, Radarr, Sonarr, Lidarr), blocage de publicités réseau (AdGuard Home avec DHCP personnalisé), Nextcloud pour le stockage cloud personnel, des sauvegardes automatisées via Proxmox Backup Server et un moteur d'automatisation (n8n) avec des pipelines personnalisés. Exposé de façon sécurisée via Cloudflare Tunnels et Tailscale VPN.",
        tech: ["Proxmox", "Docker", "Linux", "n8n", "Tailscale", "Cloudflare"],
        featured: true,
      },
      {
        title: "Sportify",
        description: "Plateforme sociale dédiée aux passionnés de sport, offrant une expérience immersive pour partager des moments forts, interagir avec la communauté, participer à des pronostics sportifs et des jeux.",
        tech: ["PHP", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/KeapRoof/Sportify",
      },
      {
        title: "TakeNote",
        description: "Plateforme de gestion de notes sécurisée avec authentification. Les utilisateurs peuvent créer, modifier et supprimer des notes. Connectée à une base de données pour la persistance des données avec surveillance de la qualité du code.",
        tech: ["Angular", "FastAPI", "SonarQube"],
        link: "https://github.com/KeapRoof/TakeNote",
      },
      {
        title: "Hospital Aid - Parcours de Graphe",
        description: "Application simulant des itinéraires optimaux entre plusieurs dispensaires pour le transport de patients. Implémente l'algorithme de Dijkstra pour le parcours de graphes avec une interface graphique.",
        tech: ["Java"],
        link: "https://github.com/KeapRoof/Parcours_de_graphe_JAVA",
      },
      {
        title: "Gestion d'Annuaire",
        description: "Application de gestion d'annuaire basée sur CSV avec des capacités de recherche avancées et un suivi des opérations. Permet la recherche de clients selon des caractéristiques définies par l'utilisateur.",
        tech: ["C"],
        link: "https://github.com/KeapRoof/Gestion_Annuaire_C",
      },
      {
        title: "Application Météo Mobile",
        description: "Application mobile Android pour la consultation météo en temps réel. Fonctionnalités : liste de villes favorites, recherche de villes et carte interactive, connectée à une API météo.",
        tech: ["Kotlin", "Firebase"],
        link: "https://github.com/KeapRoof/App_meteo",
      },
      {
        title: "MinhList",
        description: "Application web de liste de courses sécurisée avec authentification. Les utilisateurs peuvent ajouter, supprimer et modifier des articles. Connectée à une base de données pour la persistance des données.",
        tech: ["Symfony"],
        link: "https://github.com/KeapRoof/MinhList",
      },
    ],
    experience_data: [
      {
        role: "Apprenti Ingénieur Logiciel",
        company: "ChemAI",
        period: "Sept. 2025 - Présent",
        description: "Altrnance en ingénierie logicielle axé sur le développement de solutions basées sur l'IA pour la recherche chimique et l'analyse de données.",
        achievements: [
          "Contribution au développement de la plateforme SmartChemistry, un outil propulsé par l'IA pour l'analyse et la visualisation de données chimiques",
        ],
      },
      {
        role: "Apprenti Développeur Full-stack",
        company: "Bayard",
        period: "Sept. 2024 - Août 2025",
        description: "Alternance en développement full-stack sur des applications web industrielles avec des frameworks modernes et des pratiques DevOps.",
        achievements: [
          "Conception et déploiement d'une application web de dimensionnement de vannes basée sur des paramètres d'ingénierie et des modèles de calcul",
          "Conteneurisation de l'application avec Docker assurant la portabilité et le déploiement simplifié",
          "Implémentation d'une API RESTful avec Django et un front-end Angular pour la configuration des paramètres en temps réel",
          "Mise en place d'un pipeline CI/CD avec SonarQube pour les standards de qualité du code et l'analyse statique",
          "Maintenance d'une application web et mobile IoT pour la gestion à distance de produits connectés dans les communes",
        ],
      },
      {
        role: "Stagiaire Développeur Logiciel",
        company: "LIRIS",
        period: "Avr. 2024 - Juin 2024",
        description: "Stage axé sur le développement et le déploiement de la plateforme QUALITOP pour l'analyse de données de santé avec des modèles de clustering basés sur l'IA.",
        achievements: [
          "Développement, test et déploiement de la plateforme QUALITOP dédiée à l'analyse de données de santé",
          "Gestion et sécurisation de données patients sensibles en conformité totale avec les réglementations de protection des données",
          "Conception et implémentation de modèles de clustering basés sur l'IA pour l'analyse avancée des données",
          "Stack technique : Python, Pandas, Scikit-learn",
        ],
      },
    ],
    education_data: [
      {
        degree: "BUT Informatique",
        institution: "IUT Lyon 1",
        period: "2022 - 2025",
        details: "Spécialisation en Génie Logiciel et Développement Web.",
      },
      {
        degree: "Diplôme d'Ingénieur en Informatique",
        institution: "IMT Mines Alès",
        period: "2025 - 2028",
        details: "Formation en informatique avec une spécialisation en génie logiciel. Diplôme prévu en 2028.",
      },
    ],
  },
};
