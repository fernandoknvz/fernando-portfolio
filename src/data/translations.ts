export const languages = ['es', 'en'] as const;

export type Language = (typeof languages)[number];

export const translations = {
  es: {
    nav: {
      links: {
        about: 'Sobre mí',
        services: 'Servicios',
        projects: 'Proyectos',
        stack: 'Stack',
        contact: 'Contacto',
      },
      cta: 'Hablemos',
      mobileCta: 'Hablemos por WhatsApp',
      menuLabel: 'Abrir menú',
      closeMenuLabel: 'Cerrar menú',
    },
    hero: {
      role: 'Full Stack Developer · Solutions Architect',
      name: 'Fernando',
      surname: 'Olguea',
      taglineLine1: 'No hago páginas simples.',
      taglineLine2: 'Construyo sistemas que transforman negocios.',
      stats: [
        { value: '2+', label: 'Años de experiencia' },
        { value: '10+', label: 'Proyectos entregados' },
        { value: '100%', label: 'Proyectos a medida' },
      ],
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Escribir ahora',
      availability: 'Disponible para proyectos',
      imageAlt: 'Fernando Olguea — Full Stack Developer',
      scroll: 'SCROLL',
    },
    about: {
      eyebrow: 'Sobre mí',
      titleBefore: 'Desarrollo que',
      titleAccent: 'mueve',
      titleAfter: 'negocios.',
      intro:
        'Soy Full Stack Developer y Arquitecto de Soluciones con más de 2 años construyendo sistemas para empresas reales. Me especializo en proyectos que tienen impacto directo en el negocio: automatización, ecommerce, integraciones y sistemas operativos a medida.',
      body:
        'No trabajo como freelancer genérico. Entro en cada proyecto como un socio tecnológico: entiendo el contexto, propongo la arquitectura correcta y entrego algo que funciona en producción el día 1. Sin re-trabajo. Sin sorpresas.',
      principles: [
        {
          label: 'Soluciones, no features',
          desc: 'Entiendo el problema de negocio antes de escribir código.',
        },
        {
          label: 'Código que dura',
          desc: 'Arquitectura pensada para crecer, no para rehacer.',
        },
        {
          label: 'Comunicación clara',
          desc: 'Sin tecnicismos innecesarios. Con el cliente, no para el cliente.',
        },
      ],
      cta: 'Hablemos de tu proyecto →',
    },
    cta: {
      eyebrow: 'Siguiente paso',
      titleLine1: 'Tu problema tiene',
      titleAccent: 'solución.',
      bodyLine1: 'Otros desarrolladores te dicen que es complicado.',
      bodyLine2: 'Yo te digo cuánto tarda y qué necesitas para lograrlo.',
      whatsapp: 'Escribir por WhatsApp',
      meeting: 'Agendar reunión',
      trustSignals: [
        'Primera consulta gratuita',
        'Respuesta en menos de 24h',
        'Sin compromiso inicial',
      ],
    },
    qualificationBot: {
      eyebrow: 'Precalificación estratégica',
      title: 'Encuentra el siguiente paso correcto antes de invertir.',
      intro:
        'Responde 3 preguntas y te diré si conviene partir por una conversación rápida o una reunión de diagnóstico.',
      progress: 'Paso',
      of: 'de',
      back: 'Volver',
      restart: 'Reiniciar',
      resultEyebrow: 'Recomendación',
      primaryCtaFallback: 'Continuar',
      secondaryCta: 'Escribir por WhatsApp',
      calendlyCta: 'Agendar diagnóstico',
      whatsappCta: 'Enviar contexto por WhatsApp',
      whatsappMessage:
        'Hola Fernando, necesito ayuda con un {need}. Estoy en etapa de {stage} y mi prioridad es {priority}.',
      steps: {
        need: {
          question: '¿Qué necesitas?',
          options: {
            professional_website: 'Página web profesional',
            ecommerce: 'Ecommerce',
            custom_system: 'Sistema a medida',
            automation: 'Automatización',
            api_integration: 'API / Integración',
            other: 'Otro',
          },
        },
        stage: {
          question: '¿En qué etapa estás?',
          options: {
            initial_idea: 'Idea inicial',
            running_business: 'Negocio en marcha',
            existing_system: 'Ya tengo un sistema y necesito mejoras',
            urgent_problem: 'Tengo un problema urgente',
          },
        },
        priority: {
          question: '¿Cuál es tu prioridad?',
          options: {
            sell_more: 'Vender más',
            save_time: 'Ahorrar tiempo',
            organize_operations: 'Ordenar operaciones',
            integrate_systems: 'Integrar sistemas',
            improve_customer_experience: 'Mejorar experiencia del cliente',
          },
        },
      },
      recommendations: {
        technical: {
          title: 'Necesitas una solución técnica bien diseñada.',
          interpretation:
            'Por tus respuestas, el riesgo no está solo en construir rápido: está en elegir una arquitectura que no te obligue a rehacer todo después.',
          nextStep:
            'Lo mejor es una reunión breve para revisar contexto, sistemas actuales y prioridades antes de proponer una ruta.',
        },
        ecommerce: {
          title: 'Tu foco debería ser ventas con operación ordenada.',
          interpretation:
            'Un ecommerce serio no termina en el checkout. Pagos, stock, gestión y experiencia deben trabajar juntos para vender sin fricción.',
          nextStep:
            'Agendemos una llamada para mapear catálogo, flujo de compra e integración operativa.',
        },
        website: {
          title: 'Necesitas una presencia comercial clara y premium.',
          interpretation:
            'La prioridad es convertir confianza en conversación: posicionamiento, mensaje, estructura y una experiencia que haga fácil avanzar.',
          nextStep:
            'Podemos partir por WhatsApp con contexto rápido y definir si conviene una landing, sitio completo o embudo.',
        },
        urgent: {
          title: 'Conviene diagnosticarlo con prioridad.',
          interpretation:
            'Cuando el problema es urgente, primero hay que separar lo crítico de lo deseable para evitar parches caros.',
          nextStep:
            'Agenda una reunión inicial para revisar el bloqueo y decidir una solución viable.',
        },
        default: {
          title: 'Hay una oportunidad clara para ordenar el proyecto.',
          interpretation:
            'Tus respuestas muestran que vale la pena definir alcance, prioridad y ruta técnica antes de presupuestar.',
          nextStep:
            'Envíame el contexto por WhatsApp y te digo cuál sería el mejor primer paso.',
        },
      },
    },
    services: {
      eyebrow: 'Qué hago',
      titleBefore: 'Soluciones que',
      titleAccent: 'resuelven',
      titleAfter: 'problemas reales.',
      intro:
        'Trabajo con empresas que necesitan sistemas que funcionen, no demos que impresionen a nadie.',
      customTitle: '¿Necesitas algo que no está en esta lista?',
      customBody: 'Si tu problema es específico, te diseño la solución exacta.',
      customCta: 'Cuéntame tu caso →',
      customMessage: 'Hola Fernando, tengo un proyecto específico que quiero comentarte.',
      items: {
        fullstack: {
          title: 'Desarrollo Full Stack',
          description:
            'Aplicaciones web completas, desde la base de datos hasta la interfaz. Arquitectura sólida, código limpio y escalable desde el primer día.',
          tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
        },
        apis: {
          title: 'APIs & Integraciones',
          description:
            'Conecto sistemas que no hablan entre sí. APIs REST, webhooks, sincronización de datos y automatización de flujos críticos de negocio.',
          tags: ['REST', 'Webhooks', 'OAuth', 'Microservicios'],
        },
        ecommerce: {
          title: 'Ecommerce & POS',
          description:
            'Plataformas de venta online y sistemas de punto de venta a medida. Gestión de inventario, pagos y reportes en tiempo real.',
          tags: ['WooCommerce', 'Stripe', 'POS', 'Inventario'],
        },
        automation: {
          title: 'Automatización',
          description:
            'Elimino tareas repetitivas y errores humanos. Flujos automáticos, notificaciones, sincronización de datos y pipelines de información.',
          tags: ['n8n', 'Zapier', 'Cron', 'Pipelines'],
        },
        architecture: {
          title: 'Arquitectura de Soluciones',
          description:
            'Diseño sistemas pensando en el futuro. Escalabilidad, mantenibilidad y bajo costo operativo a largo plazo.',
          tags: ['Cloud', 'Docker', 'CI/CD', 'Infraestructura'],
        },
        custom: {
          title: 'Soluciones a Medida',
          description:
            'Si tu problema no cabe en un template, te diseño la solución exacta. Sin sobre-ingeniería. Sin venderte más de lo que necesitas.',
          tags: ['Consultoría', 'Análisis', 'Prototipado', 'Entrega'],
        },
      },
    },
    projects: {
      eyebrow: 'Proyectos destacados',
      titleBefore: 'Sistemas que ya',
      titleAccent: 'funcionan',
      titleAfter: 'en producción.',
      viewProject: 'Ver proyecto',
      showAll: 'Ver todos los proyectos',
      items: {
        'pos-system': {
          title: 'Sistema POS Multisucursal',
          category: 'Punto de Venta',
          description:
            'POS con gestión de inventario en tiempo real para cadena de 8 sucursales. Sincronización automática, reportes por turno y control de caja.',
          impact: 'Redujo errores de inventario un 94% y tiempo de cierre de caja a 3 min.',
        },
        'ecommerce-integration': {
          title: 'Integración Ecommerce + ERP',
          category: 'Integración',
          description:
            'Sincronización bidireccional entre tienda WooCommerce y sistema ERP legacy. Pedidos, stock, facturas y clientes en un flujo automatizado.',
          impact: 'Eliminó 4 horas de trabajo manual diario y cero pedidos duplicados.',
        },
        'automation-pipeline': {
          title: 'Pipeline de Automatización Comercial',
          category: 'Automatización',
          description:
            'Sistema de seguimiento de leads con notificaciones automáticas, asignación de ejecutivos y reportes semanales en Google Sheets.',
          impact: 'Aumentó tasa de cierre un 31% en 60 días.',
        },
        'booking-platform': {
          title: 'Plataforma de Reservas Online',
          category: 'Web App',
          description:
            'Sistema de agendamiento para clínica estética. Turnos, recordatorios SMS, historial de clientes y panel de administración.',
          impact: 'Redujo no-shows un 60% con recordatorios automáticos.',
        },
        'payment-gateway': {
          title: 'Gateway de Pagos Personalizado',
          category: 'Fintech',
          description:
            'Integración de múltiples métodos de pago con reconciliación automática y reportes fiscales.',
          impact: 'Procesando +$2M/mes sin incidentes desde el lanzamiento.',
        },
        'dashboard-analytics': {
          title: 'Dashboard de Analytics en Tiempo Real',
          category: 'Business Intelligence',
          description:
            'Panel ejecutivo con KPIs en tiempo real, alertas configurables y exportación de reportes para empresa de distribución.',
          impact: 'CEO tomando decisiones con datos actualizados cada 5 min.',
        },
      },
    },
    stack: {
      eyebrow: 'Stack tecnológico',
      titleBefore: 'Herramientas que',
      titleAccent: 'domino',
      titleAfter: 'en producción.',
      levels: {
        expert: 'Experto',
        proficient: 'Avanzado',
        working: 'Conocimiento',
      },
      categories: [
        {
          category: 'Frontend',
          items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
        },
        {
          category: 'Backend',
          items: ['Node.js', 'Express', 'NestJS', 'Python', 'GraphQL'],
        },
        {
          category: 'Bases de datos',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase'],
        },
        {
          category: 'DevOps & Cloud',
          items: ['Docker', 'GitHub Actions', 'AWS', 'Netlify / Vercel', 'Linux / VPS'],
        },
        {
          category: 'Integraciones',
          items: ['Stripe / MP', 'WhatsApp API', 'n8n / Zapier', 'REST APIs', 'Webhooks'],
        },
        {
          category: 'Ecommerce',
          items: ['WooCommerce', 'Shopify', 'POS custom', 'Inventario', 'Facturación'],
        },
      ],
    },
    bot: {
      eyebrow: 'Diagnóstico rápido',
      titleBefore: '¿Qué tipo de',
      titleAccent: 'solución',
      titleAfter: 'necesitas?',
      intro: '3 preguntas. Te digo exactamente cómo puedo ayudarte y por dónde empezar.',
      completed: 'DIAGNÓSTICO COMPLETADO',
      question: 'PREGUNTA',
      reset: 'Reiniciar',
      recommendationEyebrow: 'MI RECOMENDACIÓN',
      fallbackWhatsapp: 'Hablar por WhatsApp',
      whatsappMessage:
        'Hola Fernando, completé el diagnóstico en tu web y me recomendaste: "{title}". Me gustaría hablar.',
      steps: {
        project_type: {
          question: '¿Qué tipo de proyecto necesitas?',
          options: {
            web_app: 'Aplicación web / sistema',
            ecommerce: 'Ecommerce o tienda online',
            integration: 'Integración o automatización',
            pos: 'Sistema de punto de venta',
          },
        },
        stage: {
          question: '¿En qué etapa está tu proyecto?',
          options: {
            idea: 'Es una idea, necesito orientación',
            defined: 'Está definido, necesito desarrollo',
            existing: 'Tengo algo, necesito mejorarlo',
            urgent: 'Es urgente, necesito solución ya',
          },
        },
        priority: {
          question: '¿Cuál es tu prioridad principal?',
          options: {
            speed: 'Velocidad de entrega',
            quality: 'Calidad y escalabilidad',
            cost: 'Optimizar presupuesto',
            integration: 'Integrarse con lo que ya tengo',
          },
        },
      },
      recommendations: {
        default: {
          title: 'Hagamos una consultoría rápida',
          description:
            'Tu proyecto suena interesante y tiene potencial. Lo mejor es una llamada de 20 minutos para entender el contexto y darte una propuesta concreta.',
          ctaLabel: 'Agendar consultoría gratuita',
        },
        'web_app-idea-speed': {
          title: 'Prototipo rápido es el camino',
          description:
            'Para una idea en etapa inicial con urgencia de velocidad, lo ideal es un MVP funcional. Puedo tener algo real en tus manos en 2-3 semanas.',
          ctaLabel: 'Hablar sobre el MVP',
        },
        'web_app-defined-quality': {
          title: 'Arquitectura sólida desde el día 1',
          description:
            'Con el proyecto definido y foco en calidad, podemos diseñar la arquitectura correcta antes de escribir una sola línea. Ahorra meses de re-trabajo.',
          ctaLabel: 'Agendar sesión de arquitectura',
        },
        'integration-existing-integration': {
          title: 'Integración a medida sin romper lo que funciona',
          description:
            'Conecto tu sistema actual con lo que necesitas, sin migrar ni reemplazar. La solución más segura y rentable.',
          ctaLabel: 'Describir mi sistema actual',
        },
        'ecommerce-defined-speed': {
          title: 'Tienda lista para vender rápido',
          description:
            'Ecommerce funcional con pagos, stock y panel de administración. Sin plantillas genéricas, sin configuraciones que no entendés.',
          ctaLabel: 'Hablar sobre la tienda',
        },
        'pos-urgent-speed': {
          title: 'POS en tiempo récord',
          description:
            'Tengo experiencia implementando sistemas de punto de venta con urgencia. Podemos tener un sistema básico operativo en días.',
          ctaLabel: 'Hablar sobre el POS urgente',
        },
      },
    },
    booking: {
      eyebrow: 'Agendar reunión',
      titleBefore: '30 minutos que pueden',
      titleAccent: 'cambiar tu proyecto',
      intro:
        'Una consultoría breve y gratuita para entender tu proyecto y decirte exactamente qué necesitas.',
      calendlyCta: 'Agendar consultoría gratuita',
      whatsappAlt: 'O escribir por WhatsApp',
      successTitle: '¡Solicitud recibida!',
      successBody: 'Te confirmaré la reunión en las próximas horas por email o WhatsApp.',
      successCta: 'También puedes escribirme →',
      labels: {
        name: 'Tu nombre',
        email: 'Tu email',
        projectType: 'Tipo de proyecto',
        preferredDate: 'Fecha preferida',
        preferredTime: 'Horario preferido',
      },
      placeholders: {
        name: 'Juan Pérez',
        email: 'juan@empresa.com',
        projectType: 'Selecciona una opción',
      },
      projectTypes: [
        'Desarrollo de aplicación web',
        'Ecommerce / tienda online',
        'Integración / automatización',
        'Sistema POS',
        'Consultoría técnica',
        'Otro',
      ],
      errors: {
        name: 'Tu nombre es requerido',
        email: 'Email inválido',
        projectType: 'Selecciona un tipo de proyecto',
        date: 'Elige una fecha',
        time: 'Elige un horario',
      },
      submit: 'Confirmar solicitud de reunión',
      note: 'Te confirmaré disponibilidad por email en las próximas horas.',
      locale: 'es-CL',
    },
    contact: {
      eyebrow: 'Contacto',
      titleBefore: '¿Listo para',
      titleAccent: 'construir',
      titleAfter: '?',
      intro:
        'Elige el canal que prefieras. Estoy disponible para proyectos nuevos, consultas técnicas y auditorías de sistemas existentes.',
      copyEmail: 'Copiar email',
      copiedEmail: 'Email copiado',
      links: {
        whatsapp: { label: 'WhatsApp', value: 'Respondo en minutos' },
        email: { label: 'Email' },
        github: { label: 'GitHub', value: '@fernandoknvz' },
        linkedin: { label: 'LinkedIn', value: 'Fernando Olguea' },
      },
    },
    footer: {
      role: 'Full Stack Developer · Arquitecto de Soluciones',
      copyright: 'Todos los derechos reservados.',
      builtWith: 'Construido con React · Vite · TypeScript · Tailwind',
    },
    whatsappFloat: {
      label: 'Contactar por WhatsApp',
      tooltip: '¿Tienes un proyecto en mente?',
      response: 'Respondemos rápido',
    },
    whatsappMessages: {
      default: 'Hola Fernando, vi tu web y me interesa hablar sobre un proyecto.',
      hero: 'Hola Fernando, quiero hablar sobre una solución para mi negocio.',
      contact: 'Hola Fernando, me gustaría agendar una consultoría.',
    },
    controls: {
      languageLabel: 'Cambiar idioma',
      themeLabel: 'Cambiar tema',
      dark: 'Tema oscuro',
      light: 'Tema claro',
    },
  },
  en: {
    nav: {
      links: {
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        stack: 'Stack',
        contact: 'Contact',
      },
      cta: "Let's talk",
      mobileCta: 'Talk on WhatsApp',
      menuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
    },
    hero: {
      role: 'Full Stack Developer · Solutions Architect',
      name: 'Fernando',
      surname: 'Olguea',
      taglineLine1: "I don't build simple pages.",
      taglineLine2: 'I build systems that transform businesses.',
      stats: [
        { value: '2+', label: 'Years of experience' },
        { value: '10+', label: 'Projects delivered' },
        { value: '100%', label: 'Custom-built projects' },
      ],
      primaryCta: 'View projects',
      secondaryCta: 'Message now',
      availability: 'Available for projects',
      imageAlt: 'Fernando Olguea — Full Stack Developer',
      scroll: 'SCROLL',
    },
    about: {
      eyebrow: 'About me',
      titleBefore: 'Development that',
      titleAccent: 'moves',
      titleAfter: 'business.',
      intro:
        'I am a Full Stack Developer and Solutions Architect with 2+ years building systems for real companies. I specialize in projects with direct business impact: automation, ecommerce, integrations, and custom operational systems.',
      body:
        'I do not work like a generic freelancer. I join each project as a technology partner: I understand the context, propose the right architecture, and deliver something production-ready on day one. No rework. No surprises.',
      principles: [
        {
          label: 'Solutions, not features',
          desc: 'I understand the business problem before writing code.',
        },
        {
          label: 'Code that lasts',
          desc: 'Architecture designed to grow, not to be rebuilt.',
        },
        {
          label: 'Clear communication',
          desc: 'No unnecessary jargon. With the client, not just for the client.',
        },
      ],
      cta: "Let's talk about your project →",
    },
    cta: {
      eyebrow: 'Next step',
      titleLine1: 'Your problem has a',
      titleAccent: 'solution.',
      bodyLine1: 'Other developers tell you it is complicated.',
      bodyLine2: 'I tell you how long it takes and what you need to get there.',
      whatsapp: 'Message on WhatsApp',
      meeting: 'Schedule a meeting',
      trustSignals: [
        'Free first consultation',
        'Reply in under 24h',
        'No initial commitment',
      ],
    },
    qualificationBot: {
      eyebrow: 'Strategic qualification',
      title: 'Find the right next step before investing.',
      intro:
        'Answer 3 questions and I will point you toward a quick conversation or a diagnostic meeting.',
      progress: 'Step',
      of: 'of',
      back: 'Back',
      restart: 'Restart',
      resultEyebrow: 'Recommendation',
      primaryCtaFallback: 'Continue',
      secondaryCta: 'Message on WhatsApp',
      calendlyCta: 'Schedule diagnostic',
      whatsappCta: 'Send context on WhatsApp',
      whatsappMessage:
        'Hi Fernando, I need help with a {need}. I am at the {stage} stage and my priority is {priority}.',
      steps: {
        need: {
          question: 'What do you need?',
          options: {
            professional_website: 'Professional website',
            ecommerce: 'Ecommerce',
            custom_system: 'Custom system',
            automation: 'Automation',
            api_integration: 'API / Integration',
            other: 'Other',
          },
        },
        stage: {
          question: 'What stage are you in?',
          options: {
            initial_idea: 'Initial idea',
            running_business: 'Running business',
            existing_system: 'I already have a system and need improvements',
            urgent_problem: 'I have an urgent problem',
          },
        },
        priority: {
          question: 'What is your priority?',
          options: {
            sell_more: 'Sell more',
            save_time: 'Save time',
            organize_operations: 'Organize operations',
            integrate_systems: 'Integrate systems',
            improve_customer_experience: 'Improve customer experience',
          },
        },
      },
      recommendations: {
        technical: {
          title: 'You need a well-designed technical solution.',
          interpretation:
            'Based on your answers, the risk is not only building fast: it is choosing an architecture that does not force rework later.',
          nextStep:
            'A short meeting is the best next step to review context, current systems, and priorities before proposing a route.',
        },
        ecommerce: {
          title: 'Your focus should be sales with clean operations.',
          interpretation:
            'A serious ecommerce project does not end at checkout. Payments, inventory, management, and experience need to work together.',
          nextStep:
            'Let us map catalog, purchase flow, and operational integrations in a quick call.',
        },
        website: {
          title: 'You need a clear, premium commercial presence.',
          interpretation:
            'The priority is turning trust into conversation: positioning, message, structure, and an experience that makes the next step easy.',
          nextStep:
            'We can start on WhatsApp with quick context and define whether a landing page, full site, or funnel makes sense.',
        },
        urgent: {
          title: 'This deserves a priority diagnosis.',
          interpretation:
            'When the problem is urgent, the first move is separating what is critical from what is optional to avoid expensive patches.',
          nextStep:
            'Schedule an initial meeting so we can review the blocker and decide on a viable solution.',
        },
        default: {
          title: 'There is a clear opportunity to organize the project.',
          interpretation:
            'Your answers show that scope, priority, and technical direction should be clarified before estimating.',
          nextStep:
            'Send me the context on WhatsApp and I will tell you the best first step.',
        },
      },
    },
    services: {
      eyebrow: 'What I do',
      titleBefore: 'Solutions that',
      titleAccent: 'solve',
      titleAfter: 'real problems.',
      intro: 'I work with companies that need systems that work, not demos that impress no one.',
      customTitle: 'Need something that is not on this list?',
      customBody: 'If your problem is specific, I design the exact solution.',
      customCta: 'Tell me your case →',
      customMessage: 'Hi Fernando, I have a specific project I want to discuss.',
      items: {
        fullstack: {
          title: 'Full Stack Development',
          description:
            'Complete web applications, from database to interface. Solid architecture, clean code, and scalable foundations from day one.',
          tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
        },
        apis: {
          title: 'APIs & Integrations',
          description:
            'I connect systems that do not speak to each other. REST APIs, webhooks, data sync, and automation for critical business flows.',
          tags: ['REST', 'Webhooks', 'OAuth', 'Microservices'],
        },
        ecommerce: {
          title: 'Ecommerce & POS',
          description:
            'Custom online sales platforms and point-of-sale systems. Inventory management, payments, and real-time reporting.',
          tags: ['WooCommerce', 'Stripe', 'POS', 'Inventory'],
        },
        automation: {
          title: 'Automation',
          description:
            'I remove repetitive tasks and human error. Automated flows, notifications, data sync, and information pipelines.',
          tags: ['n8n', 'Zapier', 'Cron', 'Pipelines'],
        },
        architecture: {
          title: 'Solutions Architecture',
          description:
            'I design systems with the future in mind: scalability, maintainability, and low long-term operating cost.',
          tags: ['Cloud', 'Docker', 'CI/CD', 'Infrastructure'],
        },
        custom: {
          title: 'Custom Solutions',
          description:
            'If your problem does not fit a template, I design the exact solution. No over-engineering. No selling more than you need.',
          tags: ['Consulting', 'Analysis', 'Prototyping', 'Delivery'],
        },
      },
    },
    projects: {
      eyebrow: 'Featured projects',
      titleBefore: 'Systems already',
      titleAccent: 'running',
      titleAfter: 'in production.',
      viewProject: 'View project',
      showAll: 'View all projects',
      items: {
        'pos-system': {
          title: 'Multi-Branch POS System',
          category: 'Point of Sale',
          description:
            'POS with real-time inventory management for an 8-branch chain. Automatic sync, shift reports, and cash control.',
          impact: 'Reduced inventory errors by 94% and cash closing time to 3 min.',
        },
        'ecommerce-integration': {
          title: 'Ecommerce + ERP Integration',
          category: 'Integration',
          description:
            'Two-way sync between WooCommerce store and legacy ERP. Orders, stock, invoices, and customers in an automated flow.',
          impact: 'Removed 4 hours of daily manual work and eliminated duplicate orders.',
        },
        'automation-pipeline': {
          title: 'Commercial Automation Pipeline',
          category: 'Automation',
          description:
            'Lead tracking system with automatic notifications, executive assignment, and weekly Google Sheets reports.',
          impact: 'Increased close rate by 31% in 60 days.',
        },
        'booking-platform': {
          title: 'Online Booking Platform',
          category: 'Web App',
          description:
            'Scheduling system for an aesthetic clinic. Appointments, SMS reminders, client history, and admin panel.',
          impact: 'Reduced no-shows by 60% with automatic reminders.',
        },
        'payment-gateway': {
          title: 'Custom Payment Gateway',
          category: 'Fintech',
          description:
            'Integration of multiple payment methods with automatic reconciliation and fiscal reporting.',
          impact: 'Processing +$2M/month without incidents since launch.',
        },
        'dashboard-analytics': {
          title: 'Real-Time Analytics Dashboard',
          category: 'Business Intelligence',
          description:
            'Executive dashboard with real-time KPIs, configurable alerts, and report exports for a distribution company.',
          impact: 'CEO making decisions with data updated every 5 min.',
        },
      },
    },
    stack: {
      eyebrow: 'Technology stack',
      titleBefore: 'Tools I',
      titleAccent: 'master',
      titleAfter: 'in production.',
      levels: {
        expert: 'Expert',
        proficient: 'Advanced',
        working: 'Working knowledge',
      },
      categories: [
        {
          category: 'Frontend',
          items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
        },
        {
          category: 'Backend',
          items: ['Node.js', 'Express', 'NestJS', 'Python', 'GraphQL'],
        },
        {
          category: 'Databases',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase'],
        },
        {
          category: 'DevOps & Cloud',
          items: ['Docker', 'GitHub Actions', 'AWS', 'Netlify / Vercel', 'Linux / VPS'],
        },
        {
          category: 'Integrations',
          items: ['Stripe / MP', 'WhatsApp API', 'n8n / Zapier', 'REST APIs', 'Webhooks'],
        },
        {
          category: 'Ecommerce',
          items: ['WooCommerce', 'Shopify', 'Custom POS', 'Inventory', 'Invoicing'],
        },
      ],
    },
    bot: {
      eyebrow: 'Quick diagnosis',
      titleBefore: 'What type of',
      titleAccent: 'solution',
      titleAfter: 'do you need?',
      intro: '3 questions. I will tell you exactly how I can help and where to start.',
      completed: 'DIAGNOSIS COMPLETED',
      question: 'QUESTION',
      reset: 'Restart',
      recommendationEyebrow: 'MY RECOMMENDATION',
      fallbackWhatsapp: 'Talk on WhatsApp',
      whatsappMessage:
        'Hi Fernando, I completed the diagnosis on your website and you recommended: "{title}". I would like to talk.',
      steps: {
        project_type: {
          question: 'What type of project do you need?',
          options: {
            web_app: 'Web application / system',
            ecommerce: 'Ecommerce or online store',
            integration: 'Integration or automation',
            pos: 'Point-of-sale system',
          },
        },
        stage: {
          question: 'What stage is your project in?',
          options: {
            idea: 'It is an idea, I need guidance',
            defined: 'It is defined, I need development',
            existing: 'I have something and need to improve it',
            urgent: 'It is urgent, I need a solution now',
          },
        },
        priority: {
          question: 'What is your main priority?',
          options: {
            speed: 'Delivery speed',
            quality: 'Quality and scalability',
            cost: 'Optimize budget',
            integration: 'Integrate with what I already have',
          },
        },
      },
      recommendations: {
        default: {
          title: 'Let us do a quick consultation',
          description:
            'Your project sounds interesting and has potential. The best next step is a 20-minute call to understand context and give you a concrete proposal.',
          ctaLabel: 'Schedule free consultation',
        },
        'web_app-idea-speed': {
          title: 'A fast prototype is the way forward',
          description:
            'For an early-stage idea with speed as priority, a functional MVP is ideal. I can get something real in your hands in 2-3 weeks.',
          ctaLabel: 'Talk about the MVP',
        },
        'web_app-defined-quality': {
          title: 'Solid architecture from day one',
          description:
            'With a defined project and quality focus, we can design the right architecture before writing a single line. It saves months of rework.',
          ctaLabel: 'Schedule architecture session',
        },
        'integration-existing-integration': {
          title: 'Custom integration without breaking what works',
          description:
            'I connect your current system with what you need, without migrating or replacing everything. The safest and most profitable solution.',
          ctaLabel: 'Describe my current system',
        },
        'ecommerce-defined-speed': {
          title: 'Store ready to sell fast',
          description:
            'Functional ecommerce with payments, stock, and admin panel. No generic templates, no settings you do not understand.',
          ctaLabel: 'Talk about the store',
        },
        'pos-urgent-speed': {
          title: 'POS in record time',
          description:
            'I have experience implementing point-of-sale systems under urgency. We can have a basic operational system in days.',
          ctaLabel: 'Talk about the urgent POS',
        },
      },
    },
    booking: {
      eyebrow: 'Schedule a meeting',
      titleBefore: '30 minutes that can',
      titleAccent: 'change your project',
      intro:
        'A short, free consultation to understand your project and tell you exactly what you need.',
      calendlyCta: 'Schedule free consultation',
      whatsappAlt: 'Or message on WhatsApp',
      successTitle: 'Request received!',
      successBody: 'I will confirm the meeting in the next few hours by email or WhatsApp.',
      successCta: 'You can also message me →',
      labels: {
        name: 'Your name',
        email: 'Your email',
        projectType: 'Project type',
        preferredDate: 'Preferred date',
        preferredTime: 'Preferred time',
      },
      placeholders: {
        name: 'John Smith',
        email: 'john@company.com',
        projectType: 'Select an option',
      },
      projectTypes: [
        'Web application development',
        'Ecommerce / online store',
        'Integration / automation',
        'POS system',
        'Technical consulting',
        'Other',
      ],
      errors: {
        name: 'Your name is required',
        email: 'Invalid email',
        projectType: 'Select a project type',
        date: 'Choose a date',
        time: 'Choose a time',
      },
      submit: 'Confirm meeting request',
      note: 'I will confirm availability by email in the next few hours.',
      locale: 'en-US',
    },
    contact: {
      eyebrow: 'Contact',
      titleBefore: 'Ready to',
      titleAccent: 'build',
      titleAfter: '?',
      intro:
        'Choose the channel you prefer. I am available for new projects, technical questions, and audits of existing systems.',
      copyEmail: 'Copy email',
      copiedEmail: 'Email copied',
      links: {
        whatsapp: { label: 'WhatsApp', value: 'I reply in minutes' },
        email: { label: 'Email' },
        github: { label: 'GitHub', value: '@fernandoknvz' },
        linkedin: { label: 'LinkedIn', value: 'Fernando Olguea' },
      },
    },
    footer: {
      role: 'Full Stack Developer · Solutions Architect',
      copyright: 'All rights reserved.',
      builtWith: 'Built with React · Vite · TypeScript · Tailwind',
    },
    whatsappFloat: {
      label: 'Contact on WhatsApp',
      tooltip: 'Have a project in mind?',
      response: 'We reply fast',
    },
    whatsappMessages: {
      default: 'Hi Fernando, I saw your website and would like to talk about a project.',
      hero: 'Hi Fernando, I want to talk about a solution for my business.',
      contact: 'Hi Fernando, I would like to schedule a consultation.',
    },
    controls: {
      languageLabel: 'Change language',
      themeLabel: 'Change theme',
      dark: 'Dark theme',
      light: 'Light theme',
    },
  },
} as const;

export type Translations = (typeof translations)[Language];
