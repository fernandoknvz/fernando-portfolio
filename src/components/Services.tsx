import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Zap, ShoppingCart, Bot, GitBranch, Wrench } from 'lucide-react';
import { services } from '@/data/services';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl } from '@/utils/helpers';

// Map icon string names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers size={22} />,
  Zap: <Zap size={22} />,
  ShoppingCart: <ShoppingCart size={22} />,
  Bot: <Bot size={22} />,
  GitBranch: <GitBranch size={22} />,
  Wrench: <Wrench size={22} />,
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-36 bg-surface relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-divider" />
            <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">
              {t.services.eyebrow}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-section text-4xl lg:text-5xl text-foreground max-w-lg text-balance">
              {t.services.titleBefore}{' '}
              <span className="text-crimson">{t.services.titleAccent}</span>{' '}
              {t.services.titleAfter}
            </h2>
            <p className="text-muted max-w-xs text-sm leading-relaxed font-body">
              {t.services.intro}
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-transparent">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="premium-card group p-8 flex flex-col gap-5 relative overflow-hidden"
            >
              {(() => {
                const content = t.services.items[service.id as keyof typeof t.services.items];

                return (
                  <>
              {/* Hover accent line */}
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-crimson group-hover:w-full transition-all duration-500" />

              {/* Icon */}
              <div className="w-11 h-11 border border-border/10 flex items-center justify-center text-crimson group-hover:border-crimson/40 transition-colors">
                {iconMap[service.icon]}
              </div>

              {/* Title */}
              <h3 className="font-display font-700 text-lg text-foreground transition-colors">
                {content.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm font-body leading-relaxed flex-1">
                {content.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/[0.08]">
                {content.tags.map((tag) => (
                  <span key={tag} className="chip text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
                  </>
                );
              })()}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="premium-panel mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8"
        >
          <div>
            <p className="text-foreground font-display font-semibold text-lg mb-1">
              {t.services.customTitle}
            </p>
            <p className="text-muted text-sm font-body">
              {t.services.customBody}
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(t.services.customMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            {t.services.customCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
