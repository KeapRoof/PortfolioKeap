// Portfolio data - Edit this file to update your portfolio content

export const projects = [
  {
    title: "HomeLab",
    description: "Self-hosted home server built on a GMKtec K11 (Ryzen 9 8945HS, 32GB RAM) running Proxmox VE. Hosts 7 LXC containers and VMs including a media server stack (Plex, Jellyfin, Radarr, Sonarr, Lidarr), network-wide ad blocking (AdGuard Home with custom DHCP), Nextcloud for personal cloud storage, automated backups via Proxmox Backup Server, and a workflow automation engine (n8n) with custom pipelines. Exposed securely via Cloudflare Tunnels and Tailscale VPN.",
    tech: ["Proxmox", "Docker", "Linux", "n8n", "Tailscale", "Cloudflare"],
    featured: true
  },
  {
    title: "Sportify",
    description: "Social platform dedicated to sports enthusiasts, offering an immersive experience for sharing highlights, interacting with the community, participating in sports predictions, and gaming.",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/KeapRoof/Sportify",
    featured: false
  },
  {
    title: "TakeNote",
    description: "Secure note management platform with user authentication. Users can create, edit, and delete notes. Connected to a database for data persistence with code quality monitoring.",
    tech: ["Angular", "FastAPI", "SonarQube"],
    link: "https://github.com/KeapRoof/TakeNote",
    featured: false
  },
  {
    title: "Hospital Aid - Graph Pathfinding",
    description: "Application simulating optimal routes between multiple dispensaries for patient transport. Implements Dijkstra's algorithm for graph traversal with a graphical user interface.",
    tech: ["Java"],
    link: "https://github.com/KeapRoof/Parcours_de_graphe_JAVA",
    featured: false
  },
  {
    title: "Directory Management",
    description: "CSV-based directory management application with advanced search capabilities and operation tracking. Allows client lookup based on user-defined characteristics.",
    tech: ["C"],
    link: "https://github.com/KeapRoof/Gestion_Annuaire_C",
    featured: false
  },
  {
    title: "Weather Mobile App",
    description: "Android mobile application for real-time weather consultation. Features favorite cities list, city search, and interactive map, connected to weather API.",
    tech: ["Kotlin", "Firebase"],
    link: "https://github.com/KeapRoof/App_meteo",
    featured: false
  },
  {
    title: "MinhList",
    description: "Secure shopping list web application with user authentication. Users can add, delete, and modify items. Connected to a database for data persistence.",
    tech: ["Symfony"],
    link: "https://github.com/KeapRoof/MinhList",
    featured: false
  }
];

export const experience = [
  {
    role: "Software Engineer Apprentice",
    company: "ChemAI",
    period: "Sept. 2025 - Present",
    description: "Apprenticeship in software engineering focused on developing AI-driven solutions for chemical research and data analysis.",
    achievements: [
      "Contributed to the development of the SmartChemistry platform, an AI-powered tool for chemical data analysis and visualization"
    ]
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
      "Maintained IoT web and mobile application for remote management of connected products across municipalities"
    ]
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
      "Tech Stack: Python, Pandas, Scikit-learn"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "IUT Lyon 1",
    period: "2022 - 2025",
    details: "Focus on Software Engineering and Web Development."
  },
  {
    degree: "Engineering Degree in Computer Science",
    institution: "IMT Mines Alès",
    period: "2025 - 2028",
    details: "Currently pursuing a degree in Computer Science with a focus on software engineering. Expected graduation in 2028."
  }
];

export const skills = {
  "Frontend": ["React", "Vue.js", "Angular", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Express", "Python", "Django", "REST APIs"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL"],
  "Tools": ["Linux","Git", "Docker", "AWS", "CI/CD", "Testing"]
};
