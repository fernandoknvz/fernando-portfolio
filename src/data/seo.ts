import { siteConfig } from '@/data/siteConfig';
import type { Language } from '@/data/translations';

const siteUrl = siteConfig.siteUrl.replace(/\/$/, '');
const absoluteOgImage = `${siteUrl}${siteConfig.ogImage}`;

export const seoByLanguage = {
  es: {
    title:
      'Fernando Olguea | Portafolio desarrollador Full Stack en Santiago, Chile',
    description:
      'Portafolio de Fernando Olguea, desarrollador Full Stack en formación y estudiante de Ingeniería Informática con mención en Ciencia de Datos. Proyectos web, automatización, e-commerce, React, Django, Python y bases de datos.',
    keywords: [
      'Fernando Olguea desarrollador web',
      'Fernando Olguea portafolio',
      'desarrollador full stack Chile',
      'estudiante ingeniería informática ciencia de datos',
      'desarrollador React Django Python Chile',
      'proyectos web y automatización',
      'portafolio desarrollador Santiago Chile',
      'desarrollo web Santiago',
      'sistemas a medida Chile',
      'automatización de procesos',
      'ecommerce Chile',
      'React',
      'Django',
      'Python',
      'MySQL',
    ],
    locale: 'es_CL',
    ogTitle: 'Fernando Olguea | Desarrollador Full Stack en formación',
    ogDescription:
      'Portafolio profesional con proyectos reales en desarrollo web, sistemas a medida, e-commerce, automatización, backend, frontend, bases de datos y ciencia de datos en aprendizaje.',
  },
  en: {
    title:
      'Fernando Olguea | Full Stack Developer Portfolio in Santiago, Chile',
    description:
      'Portfolio of Fernando Olguea, Full Stack developer in training and Computer Engineering student focused on Data Science. Web projects, automation, ecommerce, React, Django, Python and databases.',
    keywords: [
      'Fernando Olguea web developer',
      'Fernando Olguea portfolio',
      'full stack developer Chile',
      'computer engineering data science student',
      'React Django Python developer Chile',
      'web projects and automation',
      'developer portfolio Santiago Chile',
      'web development Santiago',
      'custom systems Chile',
      'process automation',
      'ecommerce Chile',
      'React',
      'Django',
      'Python',
      'MySQL',
    ],
    locale: 'en_US',
    ogTitle: 'Fernando Olguea | Full Stack Developer in training',
    ogDescription:
      'Professional portfolio with real projects in web development, custom systems, ecommerce, automation, backend, frontend, databases and data science learning.',
  },
} as const;

export const faqsByLanguage = {
  es: [
    {
      question: '¿Quién es Fernando Olguea?',
      answer:
        'Fernando Olguea es desarrollador Full Stack en formación y estudiante de Ingeniería Informática con mención en Ciencia de Datos en Santiago, Chile.',
    },
    {
      question: '¿Qué tipo de proyectos desarrolla?',
      answer:
        'Desarrolla sitios y sistemas web, e-commerce, automatizaciones de procesos, APIs REST, paneles administrativos, sistemas de inventario, sistemas de ventas y soluciones para negocios.',
    },
    {
      question: '¿Tiene experiencia en proyectos reales?',
      answer:
        'Sí. Ha trabajado en proyectos reales para clientes, incluyendo soluciones tecnológicas desarrolladas a través de TeHagoLaWeb como parte de su experiencia práctica.',
    },
    {
      question: '¿Qué tecnologías utiliza?',
      answer:
        'Ha trabajado con HTML, CSS, JavaScript, React, Vite, Python, Django, Django REST Framework, MySQL, SQL, Git, GitHub, Docker, Netlify, Render, Railway y APIs REST.',
    },
    {
      question: '¿Está aprendiendo ciencia de datos?',
      answer:
        'Sí. Actualmente se está formando en ciencia de datos con Python para datos, Pandas, NumPy, notebooks, análisis de datos, modelos supervisados, árboles de decisión, métricas de clasificación, Machine Learning y Deep Learning en aprendizaje.',
    },
    {
      question: '¿Cómo contactarlo?',
      answer:
        'Puedes contactar a Fernando por WhatsApp, email, GitHub o LinkedIn desde este portafolio para conversar sobre proyectos, colaboraciones o desarrollo de soluciones web.',
    },
  ],
  en: [
    {
      question: 'Who is Fernando Olguea?',
      answer:
        'Fernando Olguea is a Full Stack developer in training and Computer Engineering student focused on Data Science in Santiago, Chile.',
    },
    {
      question: 'What type of projects does he build?',
      answer:
        'He builds websites and web systems, ecommerce, process automations, REST APIs, admin panels, inventory systems, sales systems and business solutions.',
    },
    {
      question: 'Does he have experience with real projects?',
      answer:
        'Yes. He has worked on real client projects, including technology solutions developed through TeHagoLaWeb as part of his practical experience.',
    },
    {
      question: 'What technologies does he use?',
      answer:
        'He has worked with HTML, CSS, JavaScript, React, Vite, Python, Django, Django REST Framework, MySQL, SQL, Git, GitHub, Docker, Netlify, Render, Railway and REST APIs.',
    },
    {
      question: 'Is he learning data science?',
      answer:
        'Yes. He is currently training in data science with Python for data, Pandas, NumPy, notebooks, data analysis, supervised models, decision trees, classification metrics, Machine Learning and Deep Learning in progress.',
    },
    {
      question: 'How can I contact him?',
      answer:
        'You can contact Fernando through WhatsApp, email, GitHub or LinkedIn from this portfolio to discuss projects, collaborations or web solution development.',
    },
  ],
} as const;

export function getStructuredData(language: Language) {
  const seo = seoByLanguage[language];
  const faqs = faqsByLanguage[language];

  const knowsAbout = [
    ...seo.keywords,
    'Desarrollo web',
    'React',
    'Django',
    'Python',
    'JavaScript',
    'Bases de datos',
    'MySQL',
    'APIs REST',
    'Automatización',
    'Ciencia de datos',
    'Machine Learning',
    'Deep Learning en aprendizaje',
  ];

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: siteConfig.name,
    alternateName: siteConfig.brand,
    jobTitle: `${siteConfig.title} / ${siteConfig.subtitle}`,
    description: seo.description,
    url: siteUrl,
    image: absoluteOgImage,
    email: siteConfig.email,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Ingeniería Informática con mención en Ciencia de Datos',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: `${siteConfig.name} - Portafolio`,
    description: seo.description,
    publisher: { '@id': `${siteUrl}/#person` },
    inLanguage: language === 'es' ? 'es-CL' : 'en-US',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: siteConfig.name,
        item: siteUrl,
      },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return [person, website, breadcrumb, faqPage];
}
