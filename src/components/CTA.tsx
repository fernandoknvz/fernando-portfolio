import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl, scrollToSection } from '@/utils/helpers';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Big red background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-crimson/8 blur-[120px] rounded-full" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-crimson" />
            <span className="text-crimson text-xs font-display font-semibold tracking-[0.2em] uppercase">
              {t.cta.eyebrow}
            </span>
            <span className="w-6 h-px bg-crimson" />
          </div>

          {/* Headline */}
          <h2 className="heading-display text-[clamp(2.5rem,6vw,5rem)] text-foreground text-balance leading-none">
            {t.cta.titleLine1}<br />
            <span className="text-crimson">{t.cta.titleAccent}</span>
          </h2>

          <p className="text-muted text-xl font-body font-light max-w-xl leading-relaxed">
            {t.cta.bodyLine1}<br />
            {t.cta.bodyLine2}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={buildWhatsAppUrl(t.whatsappMessages.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp group text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              {t.cta.whatsapp}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('booking')}
              className="btn-outline group text-base px-8 py-4"
            >
              <Calendar size={16} />
              {t.cta.meeting}
            </button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-border/[0.08] w-full max-w-lg">
            {t.cta.trustSignals.map((item) => (
              <span key={item} className="text-subtle text-xs font-body flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-jade" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
