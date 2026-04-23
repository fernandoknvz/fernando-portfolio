import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl } from '@/utils/helpers';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Subtle right glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 bg-crimson/5 blur-[100px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="section-divider" />
          <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">
            {t.about.eyebrow}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="heading-section text-4xl lg:text-5xl text-foreground mb-8 text-balance">
              {t.about.titleBefore}{' '}
              <span className="text-crimson">{t.about.titleAccent}</span>{' '}
              {t.about.titleAfter}
            </h2>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border/10 flex items-center justify-center text-muted hover:text-foreground hover:border-border/30 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border/10 flex items-center justify-center text-muted hover:text-foreground hover:border-border/30 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 border border-border/10 flex items-center justify-center text-muted hover:text-foreground hover:border-border/30 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-muted text-lg font-body font-light leading-relaxed">
              {t.about.intro}
            </p>

            <p className="text-subtle font-body font-light leading-relaxed">
              {t.about.body}
            </p>

            {/* Principles */}
            <div className="flex flex-col gap-4 pt-4 border-t border-border/[0.08]">
              {t.about.principles.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-display font-semibold text-sm block mb-0.5">
                      {p.label}
                    </span>
                    <span className="text-subtle text-sm font-body">{p.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl(t.whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                {t.about.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
