// ============================================================
// SITE CONFIGURATION - Edit all personal data here
// ============================================================

export const siteConfig = {
  // Personal info
  brand: "Fernando Olguea Dev",
  name: "Fernando Olguea",
  title: "Desarrollador Full Stack en formación",
  subtitle:
    "Estudiante de Ingeniería Informática con mención en Ciencia de Datos",
  tagline:
    "Desarrollo soluciones web, automatizaciones y sistemas reales para negocios.",
  description:
    "Portafolio profesional de Fernando Olguea, desarrollador en formación y estudiante de Ingeniería Informática con mención en Ciencia de Datos. Experiencia práctica en desarrollo web, sistemas a medida, e-commerce, automatización, backend, frontend, bases de datos y proyectos reales para clientes.",
  experienceNote:
    "He desarrollado soluciones tecnológicas y proyectos reales a través de TeHagoLaWeb como parte de mi experiencia práctica.",

  // Contact & Social
  whatsapp: {
    number: "56965510601",
    defaultMessage:
      "Hola Fernando, vi tu portafolio y me interesa hablar sobre un proyecto.",
    heroMessage:
      "Hola Fernando, quiero conversar sobre una solución web o sistema para mi negocio.",
    contactMessage:
      "Hola Fernando, me gustaría contactarte por un proyecto o colaboración.",
  },

  email: "fe.olguea@tehagolaweb.cl",
  github: "https://github.com/fernandoknvz",
  linkedin: "https://www.linkedin.com/in/ferdevolguea/",
  location: {
    country: "CL",
    countryName: "Chile",
    region: "Región Metropolitana",
    city: "Santiago",
    areas: ["Santiago", "Chile"],
    latitude: -33.4489,
    longitude: -70.6693,
  },

  // Booking
  calendly: "https://calendly.com/fernando-olguea/reunion-inicial",
  useMockCalendar: false,

  // SEO
  siteUrl: "https://www.tehagolaweb.cl",
  ogImage: "/profile.jpg",
} as const;
