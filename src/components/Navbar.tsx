import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl, scrollToSection } from '@/utils/helpers';

const navLinkIds = ['about', 'services', 'projects', 'stack', 'contact'] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = navLinkIds.map((id) => ({
    id,
    label: t.nav.links[id],
  }));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navbar/90 backdrop-blur-md border-b border-border/[0.12] shadow-[0_14px_40px_rgb(var(--shadow)/0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="font-display font-800 text-lg tracking-tight text-foreground hover:text-crimson transition-colors"
        >
          <span className="text-crimson">F</span>O<span className="text-subtle">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200 font-body tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={buildWhatsAppUrl(t.whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-4 py-2"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="text-muted hover:text-foreground transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.nav.closeMenuLabel : t.nav.menuLabel}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navbar/98 backdrop-blur-md border-t border-border/[0.08]">
          <ul className="section-container flex flex-col py-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className="w-full text-left py-3 text-muted hover:text-foreground text-base font-body transition-colors border-b border-border/[0.06] last:border-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={buildWhatsAppUrl(t.whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                {t.nav.mobileCta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
