export const portfolioData = {
  es: {
    personalInfo: {
      name: "Andrés Rivera",
      title: "Senior Full Stack Engineer | React Native | Tech Lead",
      bio: "Ingeniero de Software Senior con +8 años de experiencia construyendo aplicaciones móviles y plataformas web escalables en entornos fintech, startups y productos propios. Especialista en React Native, Node.js y AWS, con fuerte enfoque en arquitectura limpia, performance y sistemas distribuidos. He liderado migraciones de 18 compañías y +14.000 inventarios sin pérdida de datos, optimizando estabilidad de plataformas críticas.",
      email: "riveragu.andres@gmail.com",
      github: "https://gitlab.com/riveragu.andres",
      linkedin: "https://linkedin.com/in/andres-rivera838",
      whatsapp: "https://wa.me/573116299751",
    },
    skills: [
      { name: "React Native (Expo)", level: 95, category: "Mobile" },
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 60, category: "Frontend" },
      { name: "TypeScript / JavaScript (ES6+)", level: 95, category: "Languages" },
      { name: "AWS (Lambda, Cognito, S3, DynamoDB)", level: 90, category: "Infrastructure" },
      { name: "Node.js / NestJS", level: 90, category: "Backend" },
      { name: "Laravel / PHP", level: 40, category: "Backend" },
      { name: "Clean Architecture / SOLID", level: 95, category: "Architecture" },
      { name: "Microfrontends (Single-SPA)", level: 75, category: "Frontend" },
      { name: "Angular / AngularJS", level: 80, category: "Frontend" },
      { name: "Ionic / Capacitor", level: 85, category: "Mobile" },
      { name: "CI/CD (Amplify, Bamboo, Forge)", level: 80, category: "Infrastructure" },
      { name: "State Management (Redux, Zustand)", level: 90, category: "Frontend" }
    ],
    stats: [
      { key: "XP", label: "Años de Exp.", value: "8+" },
      { key: "Migraciones", label: "Migraciones Críticas", value: "18" },
      { key: "Inventarios", label: "Datos Migrados", value: "+14K" },
      { key: "Deployments", label: "Apps en Tiendas", value: "+2" }
    ],
    achievements: [
      { id: '1', title: "Migración de Arquitectura", description: "Lideré la migración de 18 compañías y 14k inventarios sin pérdida de datos mediante rediseño de modelos y sincronización incremental." },
      { id: '2', title: "Arquitectura Microfrontend", description: "Implementación exitosa de Single-SPA para desacoplar monolitos, permitiendo despliegues independientes por equipo." },
      { id: '3', title: "Escalabilidad Fintech", description: "Diseño y desarrollo de microservicios serverless en AWS para Nequi, garantizando alta disponibilidad bajo demanda." },
      {
        "id": "4",
        "title": "Ecosistema Serverless apPuebliar",
        "description": "Diseño y despliegue de una infraestructura 100% Serverless en AWS para una plataforma turística, optimizando costos operativos y logrando escalabilidad automática para miles de usuarios."
      }
    ],
    experience: [
      {
        id: "exp-appuebliar",
        role: "Co-Founder / Full Stack Engineer",
        company: "apPuebliar",
        period: "2023 - Presente",
        description: "Co-fundador y desarrollador principal del ecosistema de promoción turística. Diseño e implementación de apps móviles, panel administrativo y arquitectura AWS Serverless.",
        technologies: ["Ionic", "React", "AWS Lambda", "DynamoDB", "Cognito"]
      },
      {
        id: "exp1",
        role: "Senior Full Stack Engineer / Tech Lead",
        company: "Innovaa Tech",
        period: "2024 - 2026",
        description: "Liderazgo en migración de datos masivos y evolución de plataforma hacia arquitecturas modernas. Diseño de apps móviles offline-first con React Native.",
        technologies: ["React Native", "Expo", "Laravel", "AWS"]
      },
      {
        id: "exp2",
        role: "Microfrontend Engineer",
        company: "ABATeche",
        period: "2023",
        description: "Desacoplamiento de monolitos mediante Single-SPA y optimización de performance web con lazy loading y gestión de estado eficiente.",
        technologies: ["React", "Single-SPA", "Redux", "AWS Amplify"]
      },
      {
        id: "exp3",
        role: "Full Stack Engineer (Fintech)",
        company: "NEQUI",
        period: "2018 - 2021",
        description: "Desarrollo de microservicios serverless y módulos críticos de conciliaciones financieras. Liderazgo del frontend empresarial en Angular.",
        technologies: ["AWS Lambda", "Angular", "Node.js", "Cognito"]
      },
      {
        "id": "exp4",
        "role": "Full Stack / Frontend Engineer",
        "company": "Pragma S.A",
        "period": "2015 - 2021",
        "description": "Desarrollo de soluciones web y móviles para grandes marcas como Pequeñín y Nosotras. Especialista en la creación de aplicaciones híbridas y portales corporativos de alta modularidad.",
        "technologies": ["AngularJS", "Ionic", "JavaScript", "CSS", "APIs REST"]
      }
    ],
    projects: [
      {
        id: "p1",
        title: "apPuebliar",
        description: "Plataforma completa mobile y backend serverless publicada en tiendas oficiales para la promoción del turismo regional.",
        technologies: ["Ionic", "AWS", "Serverless", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Cognito", "Architecture hexagonal", "Architecture Clean"],
        type: "Web/Mobile App",
        results: "Despliegue exitoso en App Store y Play Store con costos operativos optimizados.",
        link: "https://appuebliar.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliar.webp"
      },
      {
        id: "p2",
        title: "IAG v2 - App de Inventarios",
        description: "Rediseño de arquitectura para optimizar el performance percibido y manejo de almacenamiento local en procesos de inventario críticos.",
        technologies: ["React Native", "Zustand", "SQLite", "AWS", "Architecture hexagonal", "Architecture Clean"],
        type: "Mobile App",
        results: "Reducción significativa en tiempos de carga y fallos en producción.",
        link: "https://inventarioagil.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/iag.webp"
      },
      {
        id: "p3",
        title: "Hostpet",
        description: "Ecosistema digital para mascotas con chat en tiempo real, gestión de reservas y pasarela de pagos integrada.",
        technologies: ["Ionic", "AWS", "Wompi", "Sockets", "DynamoDB", "S3", "Cognito"],
        type: "Web/Mobile App",
        results: "Backend distribuido optimizado para alta concurrencia en reservas.",
        link: "#",
        image: "https://picsum.photos/seed/p3/600/400"
      },
      {
        "id": "p4",
        "title": "apPuebliar Admin Dashboard",
        "description": "Panel administrativo desarrollado con React e IA Studio, integrado con la API de apPuebliar para monitoreo en tiempo real, métricas de usuario y visualización de estados del sistema.",
        "technologies": ["React", "IA Studio", "AWS Amplify", "Chart.js"],
        "type": "Web App / Admin Panel",
        "results": "Reducción en tiempos de desarrollo mediante prototipado con IA y despliegue automatizado en Amplify.",
        "link": "https://main.du71pk4lbw6mu.amplifyapp.com/",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliarAdmin.jpeg"
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
      }, {
        "id": "b3",
        "title": "Arquitectura para la Integridad: El Reto de 14k Inventarios",
        "date": "24 Abr 2026",
        "readTime": "8 min",
        "summary": "Reflexiones sobre liderar la migración técnica de 18 compañías. Cómo la Clean Architecture y el enfoque offline-first salvaron la integridad de los datos en condiciones críticas."
      }
    ],
    ui: {
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
      bio: "Senior Software Engineer with 8+ years of experience building scalable mobile and web platforms in fintech, startups, and product environments. Specialist in React Native, Node.js, and AWS, focusing on clean architecture, performance, and distributed systems. I have successfully led the migration of 18 companies and 14,000+ inventories with zero data loss.",
      email: "riveragu.andres@gmail.com",
      github: "https://gitlab.com/riveragu.andres",
      linkedin: "https://linkedin.com/in/andres-rivera838",
      whatsapp: "https://wa.me/573116299751",
    },
    skills: [
      { name: "React Native (Expo)", level: 95, category: "Mobile" },
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 60, category: "Frontend" },
      { name: "TypeScript / JavaScript (ES6+)", level: 95, category: "Languages" },
      { name: "AWS (Lambda, Cognito, S3, DynamoDB)", level: 90, category: "Infrastructure" },
      { name: "Node.js / NestJS", level: 90, category: "Backend" },
      { name: "Laravel / PHP", level: 40, category: "Backend" },
      { name: "Clean Architecture / SOLID", level: 95, category: "Architecture" },
      { name: "Microfrontends (Single-SPA)", level: 75, category: "Frontend" },
      { name: "Angular / AngularJS", level: 80, category: "Frontend" },
      { name: "Ionic / Capacitor", level: 85, category: "Mobile" },
      { name: "CI/CD (Amplify, Bamboo, Forge)", level: 80, category: "Infrastructure" },
      { name: "State Management (Redux, Zustand)", level: 90, category: "Frontend" }
    ],
    stats: [
      { key: "XP", label: "Years Exp.", value: "8+" },
      { key: "Migrations", label: "Critical Migrations", value: "18" },
      { key: "Inventories", label: "Data Migrated", value: "+14K" },
      { key: "Deployments", label: "App Store Deploys", value: "+2" }
    ],
    achievements: [
      { id: '1', title: "Architecture Migration", description: "Led the migration of 18 companies to a modern architecture with zero data loss using incremental sync strategies." },
      { id: '2', title: "Microfrontend Implementation", description: "Successfully decoupled a legacy monolith using Single-SPA, enabling independent team deployments." },
      { id: '3', title: "Fintech Scalability", description: "Engineered high-availability serverless microservices for Nequi, handling massive financial transaction volumes." },
      {
        "id": "4",
        "title": "apPuebliar Serverless Ecosystem",
        "description": "Designed and deployed a 100% Serverless infrastructure on AWS for a tourism platform, optimizing operational costs and achieving automatic scalability for thousands of users."
      }
    ],
    experience: [
      {
        id: "exp-appuebliar",
        role: "Co-Founder / Full Stack Engineer",
        company: "apPuebliar",
        period: "2023 - Present",
        description: "Co-founder and lead developer of a regional tourism ecosystem. Architected and implemented mobile apps, an admin dashboard, and 100% Serverless AWS infrastructure.",
        technologies: ["Ionic", "React", "AWS Lambda", "DynamoDB", "Cognito"]
      },
      {
        id: "exp1",
        role: "Senior Full Stack Engineer / Tech Lead",
        company: "Innovaa Tech",
        period: "2024 - 2026",
        description: "Technical leadership in platform evolution and massive data migrations. Designing offline-first mobile apps using Clean Architecture.",
        technologies: ["React Native", "Expo", "Laravel", "AWS"]
      },
      {
        id: "exp2",
        role: "Microfrontend Engineer",
        company: "ABATeche",
        period: "2023",
        description: "Modernizing legacy stacks by refactoring to functional components and implementing independent deployment pipelines.",
        technologies: ["React", "Single-SPA", "AWS Amplify", "Storybook"]
      },
      {
        id: "exp3",
        role: "Full Stack Engineer (Fintech)",
        company: "NEQUI",
        period: "2018 - 2021",
        description: "Developed secure authentication flows and critical financial reconciliation modules in a serverless environment.",
        technologies: ["AWS Lambda", "Angular", "Cognito", "S3"]
      },
      {
        "id": "exp4",
        "role": "Full Stack / Frontend Engineer",
        "company": "Pragma S.A",
        "period": "2015 - 2021",
        "description": "Developed web and mobile solutions for major corporate clients, including platforms for Pequeñín and Nosotras. Built hybrid apps with Ionic and high-modularity enterprise portals.",
        "technologies": ["AngularJS", "Ionic", "JavaScript", "CSS", "REST APIs"]
      }
    ],
    projects: [
      {
        id: "p1",
        title: "apPuebliar",
        description: "Full-stack mobile platform built on AWS serverless architecture to promote regional tourism.",
        technologies: ["Ionic", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Cognito"],
        type: "Mobile App",
        results: "Successfully launched on App Store and Play Store with high scalability.",
        link: "#",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliar.webp"
      },
      {
        id: "p2",
        title: "IAG v2 - Inventory App",
        description: "High-performance mobile solution for inventory management featuring advanced local storage and offline capabilities.",
        technologies: ["React Native", "Clean Architecture", "Zustand", "AWS", "SQLite"],
        type: "Mobile App",
        results: "Significant improvement in UI stability and load times across critical modules.",
        link: "#",
        image: "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/iag.webp"
      },
      {
        id: "p3",
        title: "Hostpet",
        description: "Pet-care ecosystem featuring real-time chat, booking management, and integrated payment gateways.",
        technologies: ["Ionic", "DynamoDB", "Wompi", "WebSockets", "AWS Lambda", "API Gateway", "S3", "Cognito"],
        type: "Web/Mobile App",
        results: "Optimized distributed backend for high-volume booking management.",
        link: "#",
        image: "https://picsum.photos/seed/p3/600/400"
      },
      {
        "id": "p4",
        "title": "apPuebliar Admin Dashboard",
        "description": "Administrative dashboard built with React and AI Studio, integrated with the apPuebliar API for real-time monitoring, user metrics, and system status visualization.",
        "technologies": ["React", "AI Studio", "AWS Amplify", "Chart.js"],
        "type": "Web App / Admin Panel",
        "results": "Accelerated development lifecycle through AI-assisted prototyping and automated Amplify deployment.",
        "link": "https://main.du71pk4lbw6mu.amplifyapp.com/",
        "image": "https://almima-appuebliar-assets.s3.us-east-1.amazonaws.com/rivera/appuebliarAdmin.jpeg"
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
        "id": "b3",
        "title": "Architecting for Integrity: The 14k Inventory Challenge",
        "date": "Apr 24, 2026",
        "readTime": "8 min",
        "summary": "Reflections on leading the technical migration for 18 companies. How Clean Architecture and an offline-first approach safeguarded data integrity under critical conditions."
      }
    ],
    ui: {
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