import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-[4.25rem] items-center border border-border/[0.15] bg-panel/90 px-1 text-muted backdrop-blur-sm shadow-[0_10px_24px_rgb(var(--shadow)/0.06)] transition-all duration-200 hover:border-border/[0.25] hover:text-foreground"
      aria-label={t.controls.themeLabel}
      title={isLight ? t.controls.light : t.controls.dark}
    >
      <span
        className={`absolute h-7 w-7 bg-crimson transition-transform duration-300 ${
          isLight ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1">
        <Moon size={14} className={isLight ? 'opacity-40' : 'text-onAccent'} />
        <Sun size={14} className={isLight ? 'text-onAccent' : 'opacity-40'} />
      </span>
    </button>
  );
}
