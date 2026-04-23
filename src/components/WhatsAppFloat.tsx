import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildWhatsAppUrl } from '@/utils/helpers';
import { useLanguage } from '@/context/LanguageContext';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useLanguage();

  // Show after 3 seconds scroll delay
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Pulse tooltip after appearing
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 1500);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="premium-panel relative px-4 py-2.5 max-w-[220px]"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-1.5 right-1.5 text-subtle hover:text-foreground"
                >
                  <X size={10} />
                </button>
                <p className="text-foreground text-xs font-body leading-relaxed pr-3">
                  {t.whatsappFloat.tooltip}
                </p>
                <p className="text-muted text-[11px] mt-0.5">{t.whatsappFloat.response}</p>
                {/* Arrow */}
                <span className="absolute -bottom-1.5 right-4 w-3 h-3 bg-card border-b border-r border-border/10 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={buildWhatsAppUrl(t.whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 bg-jade hover:bg-jade-light transition-colors flex items-center justify-center shadow-xl shadow-jade/20 group"
            aria-label={t.whatsappFloat.label}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {/* Ping ring */}
            <span className="absolute inset-0 bg-jade animate-ping opacity-20 rounded-none" />
            <MessageCircle size={24} className="text-[#080808] relative z-10 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
