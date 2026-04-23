import { buildWhatsAppUrl, scrollToSection } from '@/utils/helpers';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const navLinkIds = ['about', 'services', 'projects', 'stack', 'contact'] as const;

export default function Footer() {
  const { t } = useLanguage();
  const navLinks = navLinkIds.map((id) => ({ id, label: t.nav.links[id] }));

  return (
    <footer className="bg-background border-t border-border/[0.08] py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <span className="font-display font-800 text-xl text-foreground">
              <span className="text-crimson">F</span>O<span className="text-subtle">.</span>
            </span>
            <span className="text-subtle text-xs font-body max-w-xs">
              {t.footer.role}
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-subtle hover:text-foreground text-xs font-body tracking-wide transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href={buildWhatsAppUrl(t.whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-jade text-xs font-display font-semibold hover:text-jade-light transition-colors"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-subtle text-xs font-body">
            © {new Date().getFullYear()} Fernando Olguea. {t.footer.copyright}
          </p>
          <p className="text-subtle text-xs font-body">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
