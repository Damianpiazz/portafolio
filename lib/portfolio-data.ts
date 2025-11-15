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
      title: "E-Commerce Platform",
      description: {
        es: "Plataforma de comercio electrónico completa con gestión de inventario, procesamiento de pagos y panel de administración.",
        en: "Complete e-commerce platform with inventory management, payment processing, and admin dashboard.",
      },
      longDescription: {
        es: "Desarrollé una plataforma de e-commerce desde cero que maneja más de 10,000 productos y procesa cientos de transacciones diarias. La plataforma incluye un sistema de gestión de inventario en tiempo real, integración con múltiples pasarelas de pago, y un panel de administración completo para gestionar productos, órdenes y clientes.",
        en: "I developed an e-commerce platform from scratch that handles over 10,000 products and processes hundreds of daily transactions. The platform includes a real-time inventory management system, integration with multiple payment gateways, and a complete admin dashboard to manage products, orders, and customers.",
      },
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/juanperez/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      video: "https://youtube.com/watch?v=example",
      features: {
        es: [
          "Gestión de inventario en tiempo real",
          "Integración con Stripe y MercadoPago",
          "Panel de administración completo",
          "Sistema de búsqueda avanzada",
          "Carrito de compras persistente",
          "Notificaciones por email",
        ],
        en: [
          "Real-time inventory management",
          "Integration with Stripe and MercadoPago",
          "Complete admin dashboard",
          "Advanced search system",
          "Persistent shopping cart",
          "Email notifications",
        ],
      },
      codeExample: `// Product search with filters
export async function searchProducts(filters: SearchFilters) {
  const products = await prisma.product.findMany({
    where: {
      name: { contains: filters.query, mode: 'insensitive' },
      category: filters.category ? { id: filters.category } : undefined,
      price: {
        gte: filters.minPrice,
        lte: filters.maxPrice,
      },
      stock: { gt: 0 },
    },
    include: {
      category: true,
      images: true,
    },
    orderBy: { [filters.sortBy]: filters.sortOrder },
  })
  
  return products
}`,
    },
    {
      id: "2",
      title: "Task Management System",
      description: {
        es: "Sistema de gestión de tareas y proyectos con colaboración en tiempo real y seguimiento de progreso.",
        en: "Task and project management system with real-time collaboration and progress tracking.",
      },
      longDescription: {
        es: "Sistema completo de gestión de proyectos que permite a los equipos colaborar en tiempo real. Incluye tableros Kanban, gráficos de Gantt, asignación de tareas, seguimiento de tiempo, y reportes detallados de productividad.",
        en: "Complete project management system that allows teams to collaborate in real-time. Includes Kanban boards, Gantt charts, task assignment, time tracking, and detailed productivity reports.",
      },
      image: "/project-management-kanban-board.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Material-UI"],
      github: "https://github.com/juanperez/task-manager",
      demo: "https://taskmanager-demo.vercel.app",
      features: {
        es: [
          "Tableros Kanban personalizables",
          "Colaboración en tiempo real",
          "Seguimiento de tiempo",
          "Notificaciones push",
          "Reportes y analytics",
          "Integración con Slack",
        ],
        en: [
          "Customizable Kanban boards",
          "Real-time collaboration",
          "Time tracking",
          "Push notifications",
          "Reports and analytics",
          "Slack integration",
        ],
      },
      codeExample: `// Real-time task updates with Socket.io
socket.on('task:update', (taskData) => {
  setTasks(prevTasks => 
    prevTasks.map(task => 
      task.id === taskData.id ? { ...task, ...taskData } : task
    )
  )
  
  toast.success('Task updated by team member')
})

// Drag and drop task between columns
const handleDragEnd = async (result) => {
  const { destination, source, draggableId } = result
  
  if (!destination) return
  
  await updateTaskStatus(draggableId, destination.droppableId)
  socket.emit('task:moved', { taskId: draggableId, newStatus: destination.droppableId })
}`,
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description: {
        es: "Dashboard de analytics con visualización de datos en tiempo real y reportes personalizables.",
        en: "Analytics dashboard with real-time data visualization and customizable reports.",
      },
      longDescription: {
        es: "Dashboard interactivo de analytics que procesa y visualiza grandes volúmenes de datos en tiempo real. Incluye gráficos personalizables, filtros avanzados, exportación de reportes, y alertas automáticas basadas en métricas.",
        en: "Interactive analytics dashboard that processes and visualizes large volumes of data in real-time. Includes customizable charts, advanced filters, report export, and automatic alerts based on metrics.",
      },
      image: "/analytics-dashboard-charts-graphs.jpg",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js", "Docker"],
      github: "https://github.com/juanperez/analytics-dashboard",
      video: "https://youtube.com/watch?v=example2",
      features: {
        es: [
          "Visualización de datos en tiempo real",
          "Gráficos interactivos personalizables",
          "Exportación a PDF y Excel",
          "Alertas automáticas",
          "Filtros avanzados",
          "API REST completa",
        ],
        en: [
          "Real-time data visualization",
          "Customizable interactive charts",
          "Export to PDF and Excel",
          "Automatic alerts",
          "Advanced filters",
          "Complete REST API",
        ],
      },
      codeExample: `# FastAPI endpoint for real-time metrics
@app.get("/api/metrics/realtime")
async def get_realtime_metrics(
    metric_type: str,
    time_range: int = 3600,
    db: Session = Depends(get_db)
):
    end_time = datetime.now()
    start_time = end_time - timedelta(seconds=time_range)
    
    metrics = db.query(Metric).filter(
        Metric.type == metric_type,
        Metric.timestamp.between(start_time, end_time)
    ).all()
    
    return {
        "data": [m.value for m in metrics],
        "labels": [m.timestamp.isoformat() for m in metrics],
        "summary": calculate_summary(metrics)
    }`,
    },
  ],
  education: [
    {
      id: "1",
      institution: "Universidad Tecnológica Nacional",
      degree: {
        es: "Ingeniería en Sistemas de Información",
        en: "Systems Engineering Degree",
      },
      startDate: "2014",
      endDate: "2019",
      description: {
        es: "Especialización en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
        en: "Specialization in software development, systems architecture, and technology project management.",
      },
    },
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/aws-certification-badge.jpg",
      credentialUrl: "https://aws.amazon.com/verification",
    },
    {
      id: "2",
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      image: "/scrum-master-certification.png",
      credentialUrl: "https://scrum.org/verification",
    },
    {
      id: "3",
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      image: "/mongodb-certification.png",
      credentialUrl: "https://university.mongodb.com/verification",
    },
  ],
  skills: {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Vue.js", icon: "V" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5", icon: "H5" },
      { name: "CSS3", icon: "C3" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "PHP", icon: "🐘" },
      { name: "Express", icon: "E" },
      { name: "Django", icon: "D" },
      { name: "FastAPI", icon: "F" },
    ],
    database: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
      { name: "Prisma", icon: "P" },
    ],
    tools: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Jira", icon: "J" },
      { name: "Figma", icon: "F" },
    ],
  },
}
