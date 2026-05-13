import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { faqsByLanguage } from '@/data/seo';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { language } = useLanguage();
  const faqs = faqsByLanguage[language];

  const copy =
    language === 'es'
      ? {
          eyebrow: 'Preguntas frecuentes',
          title: 'Sobre mi perfil, proyectos y formación.',
          intro:
            'Contexto directo sobre mi experiencia práctica en desarrollo web, automatización, e-commerce, sistemas para negocios y aprendizaje en ciencia de datos.',
          local:
            'Portafolio personal de desarrollador en Santiago, Chile, disponible para proyectos, colaboración y nuevas oportunidades.',
        }
      : {
          eyebrow: 'FAQ',
          title: 'About my profile, projects and education.',
          intro:
            'Direct context about my practical experience in web development, automation, ecommerce, business systems and data science learning.',
          local:
            'Personal developer portfolio based in Santiago, Chile, available for projects, collaboration and new opportunities.',
        };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="section-divider" />
            <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">
              {copy.eyebrow}
            </span>
          </div>
          <h2 className="heading-section text-4xl lg:text-5xl text-foreground text-balance">
            {copy.title}
          </h2>
          <p className="text-muted mt-4 font-body leading-relaxed">{copy.intro}</p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="premium-panel p-6 flex gap-4 items-start"
          >
            <div className="w-10 h-10 border border-jade/20 flex items-center justify-center text-jade flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-display font-700 text-lg text-foreground mb-2">
                {siteConfig.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{copy.local}</p>
              <p className="text-subtle text-xs mt-4">
                {siteConfig.location.city}, {siteConfig.location.region}
              </p>
            </div>
          </motion.aside>

          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
                className="premium-card p-6"
              >
                <h3 className="font-display font-700 text-lg text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
