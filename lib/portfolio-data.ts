import { title } from "process";

export const portfolioData = {
  personal: {
    name: "Damián Piazza",
    role: {
      es: "Estudiante de Ingeniería en Sistemas. Desarrollador / Analista Funcional",
      en: "Systems Engineering Student. Developer / Functional Analyst",
    },
    bio: {
      es: "Quiero enfocarme en el desarrollo de software y el análisis de sistemas, aplicando buenas prácticas, patrones de diseño y comprensión del dominio. Mi formación integral en Ingeniería en Sistemas me permite adaptarme rápidamente a distintos proyectos y tecnologías mientras continúo ampliando mis conocimientos.",
      en: "I want to focus on software development and systems analysis, applying best practices, design patterns, and domain understanding. My comprehensive training in Systems Engineering allows me to quickly adapt to different projects and technologies while continuing to expand my knowledge.",
    },
    email: "damipiazza11@gmail.com",
    phone: "",
    location: "La Plata ✦ CABA, Buenos Aires, Argentina",
    social: {
      github: "https://github.com/Damianpiazz?tab=repositories",
      linkedin: "https://www.linkedin.com/in/damian-piazza-854a6723a/",
    },
    cv: {
      es: "/cv-damian-piazza-es.pdf",
      en: "/cv-damian-piazza-en.pdf",
    },
  },
  experience: [
    {
      id: "1",
      company: "LINA — Laboratorio de Innovación Abierta, UTN",
      position: {
        es: "Analista Funcional & Desarrollador",
        en: "Functional Analyst & Developer",
      },
      startDate: "2025-06",
      endDate: null,
      description: {
        es: "Análisis de requerimientos para una aplicación de mensajería peer-to-peer con cifrado de extremo a extremo, desarrollada para el proyecto Cripto UTN. Desarrollo de scripts en Python para evaluar y seleccionar el algoritmo de compresión óptimo, orientado a futuras etapas del proyecto.",
        en: "Requirements analysis for a peer-to-peer messaging application with end-to-end encryption, developed for the Cripto UTN project. Development of Python scripts to evaluate and identify the optimal compression algorithm, supporting future stages of the project.",
      },
      technologies: ["Python", "UML", "Use Cases", "Design Patterns", "Database Modeling"],
      icon: "/icons/LINA.jpeg",
    },
    {
      id: "2",
      company: "LINA — Laboratorio de Innovación Abierta, UTN",
      position: {
        es: "Desarrollador Mobile",
        en: "Mobile Developer",
      },
      startDate: "2024-05",
      endDate: "2025-05",
      description: {
        es: "Desarrollé componentes mobile con React Native e integré el backend para el proyecto UTNConecta. Trabajé en equipo dentro de un entorno ágil, utilizando Jira como herramienta y Figma para el diseño.",
        en: "I developed mobile components using React Native and integrated the backend for the UTNConecta project. I collaborated with the team in an agile environment, using Jira as a tool and Figma for design.",
      },
      technologies: ["React Native", "Expo", "Axios", "MySQL", "Docker", "Figma", "Jira"],
      icon: "/icons/LINA.jpeg",
    },
  ],
  projects: [
    {
      id: "1",
      title: "FinoFino",
      description: {
        es: "Proyecto práctico para la materia Comunicación de Datos de la UTN. FinoFino es una aplicación móvil desarrollada con Expo y React Native que permite a los músicos afinar guitarra, bajo, ukelele y violín en tiempo real utilizando el micrófono del dispositivo.",
        en: "Practical project for the Data Communication course at UTN. FinoFino is a mobile application developed with Expo and React Native that allows musicians to tune guitar, bass, ukulele, and violin in real time using the device's microphone.",
      },
      image: "/FinoFino.jpeg",
      technologies: ["Expo", "React Native", "React Native Pitch Detector", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Damianpiazz/FinoFino",
      demo: "",
      video: "",
    },
    {
      id: "2",
      title: "Novarub Landing Page",
      description: {
        es: "Desarrollo una demo de una landing page corporativa para Novarub, una empresa local de Las Flores, utilizando Astro. La landing page tiene como objetivo principal presentar la empresa, sus servicios, contacto y generar conversiones mediante formularios o botones de acción (call-to-action).",
        en: "Development of a corporate landing page for Novarub, a local company in Las Flores, using Astro. The landing page's main objective is to showcase the company, its services, provide contact options, and generate conversions through forms or call-to-action buttons.",
      },
      image: "/Novarub-Landing-Page.png",
      technologies: ["Astro", "React", "Shadcn UI", "GitHub Actions", "Tailwind CSS"],
      github: "https://github.com/Damianpiazz/novarub-landing",
      demo: "https://damianpiazz.github.io/novarub-landing/",
      video: "",
    },
    {
      id: "3",
      title: "Cripto UTN – Etapas 1 y 2",
      description: {
        es: "Desarrollé scripts en Python para realizar análisis estadístico de caracteres y evaluar algoritmos de compresión (Huffman, Shannon-Fano, Lempel-Ziv), estudiando la eficiencia y el comportamiento de los datos como base para futuras etapas de compresión y criptografía.",
        en: "Developed Python scripts to perform character statistical analysis and evaluate compression algorithms (Huffman, Shannon-Fano, Lempel-Ziv), assessing data efficiency and behavior as a foundation for future compression and cryptography stages.",
      },
      image: "/Cripto-UTN.png",
      technologies: ["Python"],
      github: "https://github.com/Damianpiazz/Cripto-UTN",
      demo: "",
      video: "",
    },
  ],
  education: [
    {
      id: "1",
      badge: "En Curso",
      institution: "Universidad Tecnológica Nacional - Facultad Regional La Plata",
      degree: {
        es: "Ingeniería en Sistemas de Información",
        en: "Systems Engineering Degree",
      },
      startDate: "2023",
      endDate: "2028 (estimado)",
      description: {
        es: "Formación integral en análisis y diseño de sistemas, desarrollo de software, bases de datos, redes y comunicaciones, seguridad informática, inteligencia artificial y gestión de proyectos tecnológicos.",
        en: "Comprehensive training in systems analysis and design, software development, databases, networks and communications, cybersecurity, artificial intelligence, and technology project management.",
      },
    },
    {
      id: "2",
      badge: "Finalizado",
      institution: "Escuela Técnica Industrial N°1 Gral. Manuel Belgrano",
      degree: {
        es: "Técnico Informático",
        en: "Computer Systems Technician",
      },
      startDate: "2015",
      endDate: "2022",
      description: {
        es: "Formación práctica en mantenimiento de hardware y software, redes y comunicaciones, soporte técnico, programación básica y administración de sistemas informáticos.",
        en: "Practical training in hardware and software maintenance, networks and communications, technical support, basic programming, and IT systems administration.",
      },
    }

  ],
  certifications: [
    {
      id: "1",
      name: "Backend / Java",
      issuer: "Ciudad Autónoma de Buenos Aires",
      date: "2025",
      image: "/JAVA_-_Certificacin.jpg",
      credentialUrl: "",
    },
    {
      id: "2",
      name: "Introducción a la Ciencia de Datos",
      issuer: "Santander Open Academy",
      date: "2025",
      image: "/introduccion-ciencia-datos.jpg",
      credentialUrl: "",
    },
    {
      id: "3",
      name: "Versionado y Automatización de Despliegue (Git a Docker)",
      issuer: "UTN - Facultad Regional La Plata",
      date: "2025",
      image: "/versionado-automatizacion.jpg",
      credentialUrl: "",
    },
  ],
  skills: {
    languages: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
    frontend: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" }
    ],
    backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }
    ],
    database: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "EER", icon: "/design.png" },
      { name: "Normalization", icon: "/design.png" },
      { name: "Relational Model", icon: "/design.png" },
    ],
    other: [
      { name: "UML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg" },
      { name: "BPMN", icon: "/bpmn.webp" },
      { name: "GoF", icon: "/design.png" },
      { name: "GRASP", icon: "/design.png" },
      { name: "SOLID", icon: "/design.png" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
    ]
  }
}
