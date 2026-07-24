export const portfolioData = {
  es: {
    personalInfo: {
      name: "Andrés Rivera",
      title: "Senior Full Stack Engineer | React Native | Tech Lead",
      bio: "Ingeniero de Software Senior con +9 años de experiencia profesional construyendo aplicaciones móviles y plataformas web escalables en entornos fintech, startups y productos propios. Especialista en React Native, Node.js y AWS, con un fuerte enfoque en arquitectura limpia, performance y sistemas distribuidos. He liderado con éxito la migración de 18 compañías y +14.000 inventarios sin pérdida de datos, optimizando la estabilidad de plataformas críticas bajo condiciones complejas.",
      email: "riveragu.andres@gmail.com",
      github: "https://gitlab.com/riveragu.andres",
      linkedin: "https://linkedin.com/in/andres-rivera838",
      whatsapp: "https://wa.me/573116299751",
    },
    skills: [
      // Mobile Stack
      { name: "React Native (Expo)", level: 95, category: "Mobile" },
      { name: "Ionic Framework", level: 90, category: "Mobile" },
      { name: "Capacitor / Apache Cordova", level: 85, category: "Mobile" },
      { name: "Offline-First Synchronization", level: 90, category: "Mobile" },

      // Frontend Stack
      { name: "React", level: 95, category: "Frontend" },
      { name: "Remix.js", level: 85, category: "Frontend" },
      { name: "Next.js", level: 65, category: "Frontend" },
      { name: "Angular / AngularJS", level: 80, category: "Frontend" },
      { name: "Microfrontends (Single-SPA)", level: 80, category: "Frontend" },
      { name: "State Management (Redux, Zustand)", level: 90, category: "Frontend" },
      { name: "HTML5 / CSS3 / WebSockets", level: 90, category: "Frontend" },

      // Languages
      { name: "TypeScript", level: 95, category: "Languages" },
      { name: "JavaScript (ES6+)", level: 95, category: "Languages" },
      { name: "PHP", level: 70, category: "Languages" },
      { name: "C#", level: 60, category: "Languages" },
      { name: "Java", level: 50, category: "Languages" },

      // Backend Stack
      { name: "Node.js", level: 92, category: "Backend" },
      { name: "NestJS", level: 75, category: "Backend" },
      { name: "Laravel", level: 70, category: "Backend" },
      { name: "Serverless Microservices", level: 92, category: "Backend" },
      { name: "REST APIs / JSON", level: 95, category: "Backend" },

      // Architecture & Practices
      { name: "Clean Architecture", level: 90, category: "Architecture" },
      { name: "Hexagonal Architecture", level: 85, category: "Architecture" },
      { name: "SOLID Principles", level: 95, category: "Architecture" },
      { name: "Design Patterns", level: 90, category: "Architecture" },

      // Database & Storage
      { name: "SQLite", level: 85, category: "Database" },
      { name: "Amazon DynamoDB", level: 88, category: "Database" },
      { name: "Firebase (Realtime DB / Firestore)", level: 80, category: "Database" },
      { name: "MySQL", level: 75, category: "Database" },
      { name: "PostgreSQL", level: 75, category: "Database" },
      { name: "MongoDB", level: 60, category: "Database" },

      // Cloud, DevOps & Tools
      { name: "AWS (Lambda, Cognito, S3, API Gateway, Amplify, DynamoDB, SNS, SQS, CloudFront)", level: 90, category: "Cloud & DevOps" },
      { name: "Google Cloud Platform (Firebase, App Engine, Analytics)", level: 75, category: "Cloud & DevOps" },
      { name: "CI/CD (Bamboo, Capgo OTA, Gitlab CI, Forge, AWS CodePipeline, GitHub Actions)", level: 85, category: "Cloud & DevOps" },
      { name: "Git / Bitbucket / GitHub", level: 95, category: "Tools" },
      { name: "Storybook", level: 80, category: "Tools" },
      { name: "AI Studio (AI-Assisted Prototyping)", level: 75, category: "Tools" },
    ],
    stats: [
      { key: "XP", label: "Años de Exp.", value: "9+" },
      { key: "Migraciones", label: "Migraciones Críticas", value: "18" },
      { key: "Inventarios", label: "Datos Migrados", value: "+14K" },
      { key: "Deployments", label: "Apps en Tiendas", value: "+2" }
    ],
    achievements: [
      { id: '1', title: "Migración de Arquitectura", description: "Lideré la migración de 18 compañías y 14k inventarios sin pérdida de datos mediante rediseño de modelos y sincronización incremental." },
      { id: '2', title: "Arquitectura Microfrontend", description: "Implementación exitosa de Single-SPA para desacoplar monolitos, permitiendo despliegues independientes por equipo." },
      { id: '3', title: "Escalabilidad Fintech", description: "Diseño y desarrollo de microservicios serverless en AWS para Nequi, garantizando alta disponibilidad bajo demanda." },
      { id: '4', title: "Ecosistema Serverless apPuebliar", description: "Diseño y despliegue de una infraestructura 100% Serverless en AWS para una plataforma turística, optimizando costos operativos y logrando escalabilidad automática." }
    ],
    experience: [
      {
        id: "exp-appuebliar",
        role: "Co-Founder / Lead Full Stack Developer",
        company: "apPuebliar",
        period: "2023 - Presente",
        description: "Co-fundador y desarrollador principal del ecosistema de promoción turística. Diseño e implementación de apps móviles, panel administrativo y arquitectura AWS Serverless, gestionando ciclos de producción y actualizaciones Over-The-Air (OTA) con Capgo.",
        technologies: ["Ionic", "React", "AWS Lambda", "DynamoDB", "Cognito", "Capgo", "WebSockets"]
      },
      {
        id: "exp1",
        role: "Senior Full Stack Engineer / Tech Lead",
        company: "InnovaaTech",
        period: "2024 - Abril 2026",
        description: "Liderazgo en migración de datos masivos y evolución de plataforma hacia arquitecturas modernas. Diseño de la app móvil offline-first de inventarios (IAG v2) con React Native y SQLite, reduciendo fallos y optimizando tiempos de carga. Implementación de dominios backend en Laravel.",
        technologies: ["React Native", "Expo", "SQLite", "Laravel", "AWS", "Zustand", "Clean Architecture"]
      },
      {
        id: "exp2",
        role: "Microfrontend Engineer (Senior Frontend)",
        company: "ABATeche",
        period: "2023",
        description: "Desacoplamiento de monolitos mediante Single-SPA y optimización de performance web con lazy loading. Refactorización de componentes legacy a funcionales y creación de sistemas de diseño con Storybook.",
        technologies: ["React", "Single-SPA", "Redux", "AWS Amplify", "Storybook", "TypeScript"]
      },
      {
        id: "exp-imagemaker",
        role: "Hybrid / Frontend Engineer",
        company: "Imagemaker",
        period: "2022",
        description: "Desarrollo de interfaces híbridas utilizando React + Remix.js para aplicaciones empresariales. Implementación de flujos DevOps con Bamboo y mantenimiento de aplicaciones móviles híbridas basadas en Apache Cordova.",
        technologies: ["React", "Remix.js", "Apache Cordova", "Bamboo", "Bitbucket", "Git"]
      },
      {
        id: "exp3",
        role: "Full Stack Engineer (Fintech Asignado)",
        company: "NEQUI",
        period: "2018 - 2021",
        description: "Desarrollo de microservicios serverless en AWS y módulos críticos de conciliaciones financieras con alta disponibilidad. Liderazgo del frontend empresarial implementando programación reactiva en Angular y flujos seguros con Cognito.",
        technologies: ["AWS Lambda", "API Gateway", "Angular", "Node.js", "Cognito", "S3", "Serverless"]
      },
      {
        id: "exp4",
        role: "Full Stack / Frontend Engineer",
        company: "Pragma S.A",
        period: "2015 - 2018",
        description: "Desarrollo de soluciones web y móviles para grandes marcas corporativas como Pequeñín y Nosotras. Especialista en la creación de aplicaciones híbridas con Ionic y portales empresariales modulares en AngularJS.",
        technologies: ["AngularJS", "Ionic", "JavaScript", "CSS", "APIs REST"]
      }
    ],
    projects: [
      {
        id: "p1",
        title: "apPuebliar",
        description: "Plataforma completa mobile y backend serverless publicada en tiendas oficiales para la promoción del turismo regional.",
        technologies: ["Ionic", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Cognito", "Hexagonal Architecture", "Clean Architecture"],
        type: "Web/Mobile App",
        results: "Despliegue exitoso en App Store y Play Store con costos operativos optimizados.",
        link: "https://apPuebliar.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliar.webp"
      },
      {
        id: "p2",
        title: "IAG v2 - App de Inventarios",
        description: "Rediseño completo de arquitectura para optimizar el performance percibido y manejo de almacenamiento local offline-first en procesos de inventario críticos.",
        technologies: ["React Native", "Zustand", "SQLite", "AWS", "Hexagonal Architecture", "Clean Architecture"],
        type: "Mobile App",
        results: "Reducción significativa en tiempos de carga y fallos en producción.",
        link: "https://inventarioagil.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/iag.webp"
      },
      {
        id: "p3",
        title: "Hostpet",
        description: "Ecosistema digital para mascotas con chat en tiempo real, gestión de reservas y pasarela de pagos integrada.",
        technologies: ["Ionic", "AWS Lambda", "Wompi", "WebSockets", "DynamoDB", "S3", "Cognito"],
        type: "Web/Mobile App",
        results: "Backend distribuido optimizado para alta concurrencia en reservas.",
        link: "#",
        image: "https://picsum.photos/seed/p3/600/400"
      },
      {
        id: "p4",
        title: "apPuebliar Admin Dashboard",
        description: "Panel administrativo desarrollado con React e IA Studio, integrado con la API de apPuebliar para monitoreo en tiempo real y visualización de estados.",
        technologies: ["React", "IA Studio", "AWS Amplify", "Chart.js"],
        type: "Web App / Admin Panel",
        results: "Reducción en tiempos de desarrollo mediante prototipado asistido por IA y despliegue automatizado en Amplify.",
        link: "https://main.du71pk4lbw6mu.amplifyapp.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliarAdmin.jpeg"
      },
      {
        id: "p5",
        title: "KYJ Tienda Multimarca",
        description: "E-commerce creado con Next.js con conexión a Firebase y subido a Vercel.",
        technologies: ["Next.js", "Firebase", "Vercel"],
        type: "Web App / E-commerce",
        results: "Tienda multimarca desplegada exitosamente con alta disponibilidad.",
        link: "https://kjtiendamultimarca.com/",
        image: "/kjmultimarcas.jpeg"
      },
      {
        id: "p6",
        title: "Servidor de Automatización n8n",
        description: "Servidor de automatización autoalojado corriendo n8n en una Raspberry Pi 3 B+ y expuesto de forma segura usando Cloudflare Tunnels. Este mismo servidor aloja y sirve actualmente la página web del portafolio que estás viendo en este momento.",
        technologies: ["n8n", "Raspberry Pi", "Cloudflare Tunnels", "Docker", "Node.js"],
        type: "Server / DevOps",
        results: "2 agentes de IA básicos activos en producción gestionando tareas y automatizaciones.",
        link: "https://n8n.andresrivera.dev/",
        image: "/n8n-diagram.png"
      }
    ],
    blogPosts: [
      {
        id: "b1",
        title: "Migraciones Cloud sin Miedo: Lecciones de 18 Compañías",
        date: "24 Abr 2026",
        readTime: "7 min",
        summary: "Estrategias de sincronización incremental y rediseño de modelos para migrar miles de registros sin downtime."
      },
      {
        id: "b2",
        title: "Clean Architecture en React Native",
        date: "14 Feb 2026",
        readTime: "6 min",
        summary: "Cómo estructurar apps móviles para escalabilidad y mantenibilidad usando principios de arquitectura limpia."
      },
      {
        id: "b3",
        title: "Arquitectura para la Integridad: El Reto de 14k Inventarios",
        date: "24 Abr 2026",
        readTime: "8 min",
        summary: "Reflexiones sobre liderar la migración técnica de 18 compañías. Cómo la Clean Architecture y el enfoque offline-first salvaron la integridad de los datos."
      }
    ],
    ui: {
      heroGreeting: "Hola, soy",
      aboutMeTitle: "Sobre mí",
      navAbout: "Acerca de",
      navExperience: "Experiencia",
      navContact: "Contacto",
      contactMeBtn: "Contáctame",
      contactHeading: "¿Hablamos?",
      heroSystemStatus: "Sistema: Online",
      heroInitBtn: "Inicializar View()",
      heroDownloadPdf: "Descargar_CV.pdf",
      heroScroll: "Desplázate hacia abajo",
      navProjects: "Proyectos",
      navArchives: "Archivos",
      navInsights: "Artículos",
      skillsTitle: "Habilidades Técnicas",
      dashTitle: "LOGROS_SYS",
      dashSubtitle: "Dashboard de Entregas",
      dashDesc: "Métricas de alto impacto",
      dashGraphTitle: "Hitos de Arquitectura",
      expTitle: "EXPERIENCIA",
      expSubtitle: "Historial Laboral",
      expDesc: "Línea de tiempo profesional",
      expViewDetails: "Ver detalles",
      expHideDetails: "Ocultar detalles",
      projTitle: "PROYECTOS",
      projSubtitle: "Despliegue de Proyectos",
      projAll: "TODOS",
      blogTitle: "INSIGHTS",
      blogSubtitle: "Últimos Pensamientos",
      blogViewAll: "Ver Todo",
      contactTitle: "CONTACT_INIT",
      contactSubtitle: "Establecer Conexión",
      contactName: "NOMBRE",
      contactEmail: "CORREO",
      contactMessage: "MENSAJE",
      contactPlaceholderName: "JUAN PEREZ",
      contactPlaceholderEmail: "JUAN@SISTEMA.COM",
      contactPlaceholderMessage: "INICIANDO HANDSHAKE...",
      contactSend: "ENVIAR_MENSAJE",
      contactSending: "TRANSMITIENDO...",
      contactSent: "RECIBIDO ✓"
    }
  },
  en: {
    personalInfo: {
      name: "Andrés Rivera",
      title: "Senior Full Stack Engineer | React Native | Tech Lead",
      bio: "Senior Software Engineer with +9 years of professional experience building scalable mobile and web platforms in fintech, startups, and product environments. Specialist in React Native, Node.js, and AWS, focusing on clean architecture, performance, and distributed systems. I have successfully led the migration of 18 companies and 14,000+ inventories with zero data loss under critical conditions.",
      email: "riveragu.andres@gmail.com",
      github: "https://gitlab.com/riveragu.andres",
      linkedin: "https://linkedin.com/in/andres-rivera838",
      whatsapp: "https://wa.me/573116299751",
    },
    skills: [
      // Mobile Stack
      { name: "React Native (Expo)", level: 95, category: "Mobile" },
      { name: "Ionic Framework", level: 90, category: "Mobile" },
      { name: "Capacitor / Apache Cordova", level: 85, category: "Mobile" },
      { name: "Offline-First Synchronization", level: 90, category: "Mobile" },

      // Frontend Stack
      { name: "React", level: 95, category: "Frontend" },
      { name: "Remix.js", level: 85, category: "Frontend" },
      { name: "Next.js", level: 65, category: "Frontend" },
      { name: "Angular / AngularJS", level: 80, category: "Frontend" },
      { name: "Microfrontends (Single-SPA)", level: 80, category: "Frontend" },
      { name: "State Management (Redux, Zustand)", level: 90, category: "Frontend" },
      { name: "HTML5 / CSS3 / WebSockets", level: 90, category: "Frontend" },

      // Languages
      { name: "TypeScript", level: 95, category: "Languages" },
      { name: "JavaScript (ES6+)", level: 95, category: "Languages" },
      { name: "PHP", level: 70, category: "Languages" },
      { name: "C#", level: 60, category: "Languages" },
      { name: "Java", level: 50, category: "Languages" },

      // Backend Stack
      { name: "Node.js", level: 92, category: "Backend" },
      { name: "NestJS", level: 75, category: "Backend" },
      { name: "Laravel", level: 70, category: "Backend" },
      { name: "Serverless Microservices", level: 92, category: "Backend" },
      { name: "REST APIs / JSON", level: 95, category: "Backend" },

      // Architecture & Practices
      { name: "Clean Architecture", level: 90, category: "Architecture" },
      { name: "Hexagonal Architecture", level: 85, category: "Architecture" },
      { name: "SOLID Principles", level: 95, category: "Architecture" },
      { name: "Design Patterns", level: 90, category: "Architecture" },

      // Database & Storage
      { name: "SQLite", level: 85, category: "Database" },
      { name: "Amazon DynamoDB", level: 88, category: "Database" },
      { name: "Firebase (Realtime DB / Firestore)", level: 80, category: "Database" },
      { name: "MySQL", level: 75, category: "Database" },
      { name: "PostgreSQL", level: 75, category: "Database" },
      { name: "MongoDB", level: 60, category: "Database" },

      // Cloud, DevOps & Tools
      { name: "AWS (Lambda, Cognito, S3, API Gateway, Amplify, DynamoDB, SNS, SQS, CloudFront)", level: 90, category: "Cloud & DevOps" },
      { name: "Google Cloud Platform (Firebase, App Engine, Analytics)", level: 75, category: "Cloud & DevOps" },
      { name: "CI/CD (Bamboo, Capgo OTA, Gitlab CI, Forge, AWS CodePipeline, GitHub Actions)", level: 85, category: "Cloud & DevOps" },
      { name: "Git / Bitbucket / GitHub", level: 95, category: "Tools" },
      { name: "Storybook", level: 80, category: "Tools" },
      { name: "AI Studio (AI-Assisted Prototyping)", level: 75, category: "Tools" },
    ],
    stats: [
      { key: "XP", label: "Years Exp.", value: "9+" },
      { key: "Migrations", label: "Critical Migrations", value: "18" },
      { key: "Inventories", label: "Data Migrated", value: "+14K" },
      { key: "Deployments", label: "App Store Deploys", value: "+2" }
    ],
    achievements: [
      { id: '1', title: "Architecture Migration", description: "Led the migration of 18 companies to a modern architecture with zero data loss using incremental sync strategies." },
      { id: '2', title: "Microfrontend Implementation", description: "Successfully decoupled a legacy monolith using Single-SPA, enabling independent team deployments." },
      { id: '3', title: "Fintech Scalability", description: "Engineered high-availability serverless microservices for Nequi, handling massive financial transaction volumes." },
      { id: '4', title: "apPuebliar Serverless Ecosystem", description: "Designed and deployed a 100% Serverless infrastructure on AWS for a tourism platform, optimizing operational costs and achieving automatic scalability." }
    ],
    experience: [
      {
        id: "exp-appuebliar",
        role: "Co-Founder / Lead Full Stack Developer",
        company: "apPuebliar",
        period: "2023 - Present",
        description: "Co-founder and lead developer of a regional tourism ecosystem. Architected and implemented mobile apps, an admin dashboard, and 100% Serverless AWS infrastructure while managing Over-The-Air (OTA) production updates via Capgo.",
        technologies: ["Ionic", "React", "AWS Lambda", "DynamoDB", "Cognito", "Capgo", "WebSockets"]
      },
      {
        id: "exp1",
        role: "Senior Full Stack Engineer / Tech Lead",
        company: "InnovaaTech",
        period: "2024 - April 2026",
        description: "Technical leadership in platform evolution and massive data migrations. Designed the offline-first mobile app for inventory management (IAG v2) using React Native and SQLite, enhancing stability and performance. Built backend modules with Laravel.",
        technologies: ["React Native", "Expo", "SQLite", "Laravel", "AWS", "Zustand", "Clean Architecture"]
      },
      {
        id: "exp2",
        role: "Microfrontend Engineer (Senior Frontend)",
        company: "ABATeche",
        period: "2023",
        description: "Modernized legacy stacks by decoupling monoliths into micro frontends with Single-SPA and optimizing load times. Refactored to functional components and created design systems with Storybook.",
        technologies: ["React", "Single-SPA", "Redux", "AWS Amplify", "Storybook", "TypeScript"]
      },
      {
        id: "exp-imagemaker",
        role: "Hybrid / Frontend Engineer",
        company: "Imagemaker",
        period: "2022",
        description: "Developed hybrid interfaces using React + Remix.js for enterprise applications. Set up DevOps deployment workflows with Bamboo and managed hybrid mobile applications using Apache Cordova.",
        technologies: ["React", "Remix.js", "Apache Cordova", "Bamboo", "Bitbucket", "Git"]
      },
      {
        id: "exp3",
        role: "Full Stack Engineer (Assigned Fintech)",
        company: "NEQUI",
        period: "2018 - 2021",
        description: "Developed secure authentication flows and critical financial reconciliation modules in a serverless AWS environment. Led enterprise frontend development implementing reactive programming in Angular.",
        technologies: ["AWS Lambda", "API Gateway", "Angular", "Cognito", "S3", "Serverless"]
      },
      {
        id: "exp4",
        role: "Full Stack / Frontend Engineer",
        company: "Pragma S.A",
        period: "2015 - 2018",
        description: "Developed web and mobile solutions for major corporate clients, including platforms for Pequeñín and Nosotras. Built hybrid apps with Ionic and enterprise portals using AngularJS.",
        technologies: ["AngularJS", "Ionic", "JavaScript", "CSS", "REST APIs"]
      }
    ],
    projects: [
      {
        id: "p1",
        title: "apPuebliar",
        description: "Full-stack mobile platform built on AWS serverless architecture to promote regional tourism.",
        technologies: ["Ionic", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Cognito", "Hexagonal Architecture", "Clean Architecture"],
        type: "Mobile App",
        results: "Successfully launched on App Store and Play Store with high scalability and optimized costs.",
        link: "https://apPuebliar.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliar.webp"
      },
      {
        id: "p2",
        title: "IAG v2 - Inventory App",
        description: "High-performance mobile solution for inventory management featuring advanced local storage and offline-first capabilities.",
        technologies: ["React Native", "Zustand", "SQLite", "AWS", "Hexagonal Architecture", "Clean Architecture"],
        type: "Mobile App",
        results: "Significant improvement in UI stability and load times across critical modules.",
        link: "https://inventarioagil.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/iag.webp"
      },
      {
        id: "p3",
        title: "Hostpet",
        description: "Pet-care ecosystem featuring real-time chat, booking management, and integrated payment gateways.",
        technologies: ["Ionic", "AWS Lambda", "Wompi", "WebSockets", "DynamoDB", "S3", "Cognito"],
        type: "Web/Mobile App",
        results: "Optimized distributed backend for high-volume booking management.",
        link: "#",
        image: "https://picsum.photos/seed/p3/600/400"
      },
      {
        id: "p4",
        title: "apPuebliar Admin Dashboard",
        description: "Administrative dashboard built with React and AI Studio, integrated with the apPuebliar API for real-time monitoring and analytics.",
        technologies: ["React", "AI Studio", "AWS Amplify", "Chart.js"],
        type: "Web App / Admin Panel",
        results: "Accelerated development lifecycle through AI-assisted prototyping and automated Amplify deployment.",
        link: "https://main.du71pk4lbw6mu.amplifyapp.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliarAdmin.jpeg"
      },
      {
        id: "p5",
        title: "KYJ Tienda Multimarca",
        description: "E-commerce built with Next.js, connected to Firebase and deployed on Vercel.",
        technologies: ["Next.js", "Firebase", "Vercel"],
        type: "Web App / E-commerce",
        results: "Successfully deployed multibrand online store with high availability.",
        link: "https://kjtiendamultimarca.com/",
        image: "/kjmultimarcas.jpeg"
      },
      {
        id: "p6",
        title: "n8n Automation Server",
        description: "Self-hosted workflow automation server running n8n on a Raspberry Pi 3 B+ and securely exposed via Cloudflare Tunnels. This very server currently hosts and serves the portfolio page you are viewing right now.",
        technologies: ["n8n", "Raspberry Pi", "Cloudflare Tunnels", "Docker", "Node.js"],
        type: "Server / DevOps",
        results: "2 basic AI agents active in production managing tasks and automated workflows.",
        link: "https://n8n.andresrivera.dev/",
        image: "/n8n-diagram.png"
      }
    ],
    blogPosts: [
      {
        id: "b1",
        title: "Fearless Cloud Migrations: Lessons from 18 Companies",
        date: "Apr 24, 2026",
        readTime: "7 min",
        summary: "Incremental sync strategies and data model redesigns for migrating thousands of records without downtime."
      },
      {
        id: "b2",
        title: "Clean Architecture in React Native",
        date: "Feb 14, 2026",
        readTime: "6 min",
        summary: "Structuring mobile apps for scalability and maintainability using clean architecture principles."
      },
      {
        id: "b3",
        title: "Architecting for Integrity: The 14k Inventory Challenge",
        date: "Apr 24, 2026",
        readTime: "8 min",
        summary: "Reflections on leading the technical migration for 18 companies. How Clean Architecture and an offline-first approach safeguarded data integrity."
      }
    ],
    ui: {
      heroGreeting: "Hi, i'm",
      aboutMeTitle: "About me",
      navAbout: "About",
      navExperience: "Experience",
      navContact: "Contact",
      contactMeBtn: "Contact Me",
      contactHeading: "Let's Talk",
      heroSystemStatus: "System Status: Online",
      heroInitBtn: "Initialize View()",
      heroDownloadPdf: "Download_CV.pdf",
      heroScroll: "Scroll Down",
      navProjects: "Projects",
      navArchives: "Archives",
      navInsights: "Insights",
      skillsTitle: "Core Proficiencies",
      dashTitle: "SYSTEM_ACHIEVEMENTS",
      dashSubtitle: "Impact Dashboard",
      dashDesc: "High-level metrics",
      dashGraphTitle: "Architectural Milestones",
      expTitle: "EXPERIENCE",
      expSubtitle: "Work History",
      expDesc: "Professional timeline",
      expViewDetails: "View details",
      expHideDetails: "Hide details",
      projTitle: "PROJECTS",
      projSubtitle: "Deployed Solutions",
      projAll: "ALL",
      blogTitle: "INSIGHTS",
      blogSubtitle: "Latest Thoughts",
      blogViewAll: "View All",
      contactTitle: "CONTACT_INIT",
      contactSubtitle: "Establish Connection",
      contactName: "NAME",
      contactEmail: "EMAIL",
      contactMessage: "MESSAGE",
      contactPlaceholderName: "JOHN DOE",
      contactPlaceholderEmail: "JOHN@SYSTEM.COM",
      contactPlaceholderMessage: "HANDSHAKE_INIT...",
      contactSend: "SEND_MESSAGE",
      contactSending: "TRANSMITTING...",
      contactSent: "MESSAGE_RECEIVED ✓"
    }
  }
};