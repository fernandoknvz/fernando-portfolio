import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl } from '@/utils/helpers';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const links = [
    {
      icon: <MessageCircle size={18} />,
      label: t.contact.links.whatsapp.label,
      value: t.contact.links.whatsapp.value,
      href: buildWhatsAppUrl(t.whatsappMessages.contact),
      external: true,
      accent: 'jade',
    },
    {
      icon: <Mail size={18} />,
      label: t.contact.links.email.label,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
      accent: 'crimson',
    },
    {
      icon: <Github size={18} />,
      label: t.contact.links.github.label,
      value: t.contact.links.github.value,
      href: siteConfig.github,
      external: true,
      accent: 'white',
    },
    {
      icon: <Linkedin size={18} />,
      label: t.contact.links.linkedin.label,
      value: t.contact.links.linkedin.value,
      href: siteConfig.linkedin,
      external: true,
      accent: 'white',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />

      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="section-divider" />
              <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">{t.contact.eyebrow}</span>
            </div>
            <h2 className="heading-section text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              {t.contact.titleBefore}{' '}
              <span className="text-crimson">{t.contact.titleAccent}</span>{t.contact.titleAfter}
            </h2>
            <p className="text-muted font-body leading-relaxed mb-8 max-w-sm">
              {t.contact.intro}
            </p>

            {/* Email copy */}
            <div className="premium-panel flex items-center gap-3 p-4 w-fit">
              <span className="text-muted text-sm font-body">{siteConfig.email}</span>
              <button
                onClick={copyEmail}
                className="text-subtle hover:text-foreground transition-colors"
                title={copied ? t.contact.copiedEmail : t.contact.copyEmail}
              >
                {copied ? <Check size={14} className="text-jade" /> : <Copy size={14} />}
              </button>
            </div>
          </motion.div>

          {/* Right: Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                className="premium-card group flex items-center gap-4 p-5"
              >
                <div className={`w-9 h-9 flex items-center justify-center border transition-colors ${
                  link.accent === 'jade'
                    ? 'border-jade/20 text-jade group-hover:border-jade/50'
                    : link.accent === 'crimson'
                    ? 'border-crimson/20 text-crimson group-hover:border-crimson/50'
                    : 'border-border/10 text-muted group-hover:border-border/30 group-hover:text-foreground'
                }`}>
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-subtle text-xs font-display tracking-wide uppercase">{link.label}</span>
                  <span className="text-foreground text-sm font-body">{link.value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
