import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl, scrollToSection } from '@/utils/helpers';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Red gradient blob — top left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-crimson/10 blur-[120px] pointer-events-none" />

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="section-container w-full pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="flex items-center gap-3"
            >
              <span className="section-divider" />
              <span className="text-crimson text-xs font-display font-semibold tracking-[0.2em] uppercase">
                {t.hero.role}
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
            >
              <h1 className="heading-display text-[clamp(3rem,8vw,6.5rem)] text-heroTitle leading-none">
                {t.hero.name}<br />
                <span className="text-crimson">{t.hero.surname}</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="text-heroSubtitle text-lg lg:text-xl font-body font-light max-w-md leading-relaxed"
            >
              {t.hero.taglineLine1}<br />
              <span className="text-foreground">{t.hero.taglineLine2}</span>
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="flex gap-8 pt-2"
            >
              {t.hero.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display font-800 text-2xl text-foreground">{stat.value}</span>
                  <span className="text-muted text-xs tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary group"
              >
                {t.hero.primaryCta}
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href={buildWhatsAppUrl(t.whatsappMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp group"
              >
                <MessageCircle size={15} />
                {t.hero.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Outer decorative frame */}
            <div className="relative w-[300px] h-[370px] sm:w-[360px] sm:h-[440px] lg:w-[420px] lg:h-[520px]">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson z-10" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-crimson z-10" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border/20 z-10" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border/20 z-10" />

              {/* Red glow behind photo */}
              <div className="absolute inset-0 bg-crimson/20 blur-[60px] rounded-sm -z-10 scale-90" />

              {/* Photo */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt={t.hero.imageAlt}
                  className="w-full h-full object-cover object-top grayscale-[15%]"
                  style={{ filter: 'contrast(1.05) brightness(0.95)' }}
                />
                {/* Subtle red overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="premium-panel absolute -bottom-4 -left-4 px-4 py-2.5 flex items-center gap-2.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jade opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-jade" />
                </span>
                <span className="text-foreground text-xs font-display font-semibold tracking-wide">
                  {t.hero.availability}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-subtle"
        >
          <span className="text-xs tracking-[0.2em] font-display">{t.hero.scroll}</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
