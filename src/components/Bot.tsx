import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronRight, RotateCcw, Calendar, MessageCircle } from 'lucide-react';
import { botSteps, botRecommendations } from '@/data/botFlow';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl } from '@/utils/helpers';

type Answers = Record<string, string>;

function getRecommendationKey(answers: Answers) {
  const key = Object.values(answers).join('-');
  return botRecommendations[key] ? key : 'default';
}

export default function BotSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const { t } = useLanguage();

  const currentStep = botSteps[step];
  const recommendationKey = done ? getRecommendationKey(answers) : 'default';
  const recommendation = done ? t.bot.recommendations[recommendationKey as keyof typeof t.bot.recommendations] : null;
  const recommendationMeta = botRecommendations[recommendationKey] ?? botRecommendations.default;

  const handleOption = (optionId: string) => {
    const newAnswers = { ...answers, [currentStep.id]: optionId };
    setAnswers(newAnswers);

    if (step < botSteps.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  const progressPct = done ? 100 : (step / botSteps.length) * 100;

  return (
    <section id="bot" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-crimson/5 blur-[150px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-divider" />
            <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">
              {t.bot.eyebrow}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="heading-section text-4xl lg:text-5xl text-foreground max-w-lg text-balance">
              {t.bot.titleBefore}{' '}
              <span className="text-crimson">{t.bot.titleAccent}</span>{' '}
              {t.bot.titleAfter}
            </h2>
            <p className="text-muted text-sm font-body max-w-xs leading-relaxed">
              {t.bot.intro}
            </p>
          </div>
        </motion.div>

        {/* Bot card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="premium-panel relative overflow-hidden">
            {/* Progress bar */}
            <div className="h-0.5 bg-foreground/5">
              <motion.div
                className="h-full bg-crimson"
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            {/* Step indicator */}
            <div className="px-8 pt-6 pb-2 flex items-center justify-between">
              <span className="text-subtle text-xs font-display tracking-widest">
                {done ? t.bot.completed : `${t.bot.question} ${step + 1} / ${botSteps.length}`}
              </span>
              {(step > 0 || done) && (
                <button
                  onClick={reset}
                  className="text-subtle hover:text-muted transition-colors flex items-center gap-1.5 text-xs"
                >
                  <RotateCcw size={11} />
                  {t.bot.reset}
                </button>
              )}
            </div>

            {/* Content area */}
            <div className="px-8 pb-8 pt-4 min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {!done ? (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="font-display font-700 text-xl text-foreground leading-tight">
                      {t.bot.steps[currentStep.id as keyof typeof t.bot.steps].question}
                    </h3>
                    <div className="flex flex-col gap-2.5">
                      {currentStep.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOption(option.id)}
                          className="surface-inset group flex items-center justify-between gap-4 p-4 hover:border-crimson/40 hover:bg-elevated transition-all duration-200 text-left"
                        >
                          <span className="text-muted group-hover:text-foreground text-sm font-body transition-colors">
                            {
                              t.bot.steps[currentStep.id as keyof typeof t.bot.steps].options[
                                option.id as keyof (typeof t.bot.steps)[keyof typeof t.bot.steps]['options']
                              ]
                            }
                          </span>
                          <ChevronRight
                            size={14}
                            className="text-subtle group-hover:text-crimson flex-shrink-0 transition-colors"
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Result header */}
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-jade mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-subtle text-xs font-display tracking-widest mb-2">
                          {t.bot.recommendationEyebrow}
                        </p>
                        <h3 className="font-display font-700 text-xl text-foreground leading-tight">
                          {recommendation!.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted text-sm font-body leading-relaxed border-l-2 border-border/10 pl-4">
                      {recommendation!.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      {recommendationMeta.cta === 'whatsapp' ? (
                        <a
                          href={buildWhatsAppUrl(
                            t.bot.whatsappMessage.replace('{title}', recommendation!.title)
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp flex-1 justify-center"
                        >
                          <MessageCircle size={15} />
                          {recommendation!.ctaLabel}
                        </a>
                      ) : (
                        <a
                          href={siteConfig.calendly || '#agenda'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex-1 justify-center"
                        >
                          <Calendar size={15} />
                          {recommendation!.ctaLabel}
                        </a>
                      )}
                      <a
                        href={buildWhatsAppUrl(t.whatsappMessages.default)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex-1 justify-center text-xs"
                      >
                        <MessageCircle size={13} />
                        {t.bot.fallbackWhatsapp}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
