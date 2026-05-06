// ============================================================
// SITE CONFIGURATION — Edit all personal data here
// ============================================================

export const siteConfig = {
  // Personal info
  name: "Fernando Olguea",
  title: "Full Stack Developer",
  subtitle: "Arquitecto de Soluciones",
  tagline: "No realizo páginas simples.\nConstruyo sistemas que transforman negocios.",
  description:
    "Especialista en arquitectura de software, automatización y soluciones a medida para empresas que necesitan resultados. APIs, ecommerce, POS, integraciones — todo con criterio estratégico.",

  // ---- Contact & Social ----
  whatsapp: {
    number: "56965510601", // Replace with your number (no + or spaces)
    defaultMessage:
      "Hola Fernando, vi tu web y me interesa hablar sobre un proyecto.",
    heroMessage:
      "Hola Fernando, quiero hablar sobre una solución para mi negocio.",
    contactMessage:
      "Hola Fernando, me gustaría agendar una consultoría.",
  },

  email: "fe.olguea@tehagolaweb.cl",           // ← Replace
  github: "https://github.com/fernandoknvz", // ← Replace
  linkedin: "https://www.linkedin.com/in/ferdevolguea/", // ← Replace

  // ---- Booking ----
  calendly: "https://calendly.com/fernando-olguea/reunion-inicial", // ← Replace (or leave "" to use mock)
  useMockCalendar: false, // Set true to show internal mock calendar instead

  // ---- SEO ----
  siteUrl: "https://www.tehagolaweb.cl", // ← Replace
  ogImage: "/og-image.jpg",
} as const;
