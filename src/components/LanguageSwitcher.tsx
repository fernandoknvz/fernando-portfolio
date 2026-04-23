import { languages } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="inline-flex h-9 items-center border border-border/[0.15] bg-panel/90 p-0.5 backdrop-blur-sm shadow-[0_10px_24px_rgb(var(--shadow)/0.06)]"
      aria-label={t.controls.languageLabel}
    >
      {languages.map((item) => {
        const active = item === language;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            className={`h-7 min-w-9 px-2 font-display text-[11px] font-semibold tracking-wide transition-all duration-200 ${
              active
                ? 'bg-crimson text-onAccent shadow-[0_0_18px_rgba(200,16,46,0.2)]'
                : 'text-muted hover:text-foreground'
            }`}
            aria-pressed={active}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
