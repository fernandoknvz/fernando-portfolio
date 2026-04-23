import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Calendar, Check, MessageCircle, RotateCcw, Sparkles } from 'lucide-react';
import { qualificationSteps } from '@/data/botFlow';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl, cn } from '@/utils/helpers';
import type {
  QualificationAnswers,
  QualificationCta,
  QualificationNeed,
  QualificationOptionId,
  QualificationPriority,
  QualificationStage,
  QualificationStepId,
} from '@/types/qualification';

type RecommendationKey = 'technical' | 'ecommerce' | 'website' | 'urgent' | 'default';

const technicalNeeds: QualificationNeed[] = ['custom_system', 'automation', 'api_integration'];

function getRecommendationKey(answers: QualificationAnswers): RecommendationKey {
  if (answers.stage === 'urgent_problem') return 'urgent';
  if (answers.need === 'ecommerce') return 'ecommerce';
  if (answers.need === 'professional_website') return 'website';
  if (answers.need && technicalNeeds.includes(answers.need)) return 'technical';
  return 'default';
}

function getPrimaryCta(answers: QualificationAnswers): QualificationCta {
  if (answers.stage === 'initial_idea') return 'whatsapp';

  if (
    answers.stage === 'running_business' ||
    answers.stage === 'existing_system' ||
    answers.stage === 'urgent_problem'
  ) {
    return 'calendly';
  }

  return 'whatsapp';
}

export default function QualificationBot() {
  const { t } = useLanguage();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QualificationAnswers>({});
  const [completed, setCompleted] = useState(false);

  const steps = qualificationSteps;
  const currentStep = steps[stepIndex];
  const totalSteps = steps.length;
  const progress = completed ? 100 : ((stepIndex + 1) / totalSteps) * 100;

  const recommendationKey = getRecommendationKey(answers);
  const recommendation = t.qualificationBot.recommendations[recommendationKey];
  const primaryCta = getPrimaryCta(answers);

  const selectedLabels = useMemo(() => {
    const need = answers.need ? t.qualificationBot.steps.need.options[answers.need] : '';
    const stage = answers.stage ? t.qualificationBot.steps.stage.options[answers.stage] : '';
    const priority = answers.priority ? t.qualificationBot.steps.priority.options[answers.priority] : '';

    return { need, stage, priority };
  }, [answers.need, answers.priority, answers.stage, t]);

  const whatsAppMessage = t.qualificationBot.whatsappMessage
    .replace('{need}', selectedLabels.need)
    .replace('{stage}', selectedLabels.stage)
    .replace('{priority}', selectedLabels.priority);

  const whatsAppUrl = buildWhatsAppUrl(whatsAppMessage);
  const calendlyUrl = siteConfig.calendly || '#booking';

  const getOptionLabel = (stepId: QualificationStepId, optionId: QualificationOptionId) => {
    if (stepId === 'need') {
      return t.qualificationBot.steps.need.options[optionId as QualificationNeed];
    }

    if (stepId === 'stage') {
      return t.qualificationBot.steps.stage.options[optionId as QualificationStage];
    }

    return t.qualificationBot.steps.priority.options[optionId as QualificationPriority];
  };

  const getSelectedOption = (stepId: QualificationStepId) => answers[stepId];

  const handleOption = (stepId: QualificationStepId, optionId: QualificationOptionId) => {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [stepId]: optionId,
    }));

    if (stepIndex === totalSteps - 1) {
      setCompleted(true);
      return;
    }

    setStepIndex((currentStepIndex) => currentStepIndex + 1);
  };

  const handleBack = () => {
    if (completed) {
      setCompleted(false);
      setStepIndex(totalSteps - 1);
      return;
    }

    setStepIndex((currentStepIndex) => Math.max(0, currentStepIndex - 1));
  };

  const reset = () => {
    setAnswers({});
    setCompleted(false);
    setStepIndex(0);
  };

  return (
    <section id="qualification" className="relative overflow-hidden bg-surface py-24 lg:py-36">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 bg-crimson/5 blur-[140px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />

      <div className="section-container relative">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="section-divider" />
              <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">
                {t.qualificationBot.eyebrow}
              </span>
            </div>
            <h2 className="heading-section max-w-2xl text-4xl text-foreground text-balance lg:text-5xl">
              {t.qualificationBot.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:justify-self-end">
            {t.qualificationBot.intro}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="premium-panel p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-crimson/30 bg-crimson/10 text-crimson">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                  {t.qualificationBot.progress}
                </p>
                <p className="text-sm text-foreground">
                  {completed
                    ? `${totalSteps} ${t.qualificationBot.of} ${totalSteps}`
                    : `${stepIndex + 1} ${t.qualificationBot.of} ${totalSteps}`}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {steps.map((step, index) => {
                const selected = getSelectedOption(step.id);
                const active = !completed && index === stepIndex;
                const done = Boolean(selected);

                return (
                  <div
                    key={step.id}
                    className={cn(
                      'border-l-2 pl-4 transition-colors',
                      active ? 'border-crimson' : done ? 'border-jade/60' : 'border-border/10',
                    )}
                  >
                    <p className={cn('text-xs font-display font-semibold', active ? 'text-crimson' : 'text-subtle')}>
                      {t.qualificationBot.steps[step.id].question}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {selected ? getOptionLabel(step.id, selected) : '...'}
                    </p>
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="premium-panel">
            <div className="h-1 bg-foreground/5">
              <motion.div
                className="h-full bg-crimson"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>

            <div className="flex min-h-[430px] flex-col p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={!completed && stepIndex === 0}
                  className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wide text-muted transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-25"
                >
                  <ArrowLeft size={13} />
                  {t.qualificationBot.back}
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wide text-muted transition-colors hover:text-foreground"
                >
                  <RotateCcw size={13} />
                  {t.qualificationBot.restart}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {!completed ? (
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.28 }}
                    className="flex flex-1 flex-col"
                  >
                    <h3 className="mb-8 max-w-xl font-display text-3xl font-700 leading-tight text-foreground sm:text-4xl">
                      {t.qualificationBot.steps[currentStep.id].question}
                    </h3>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {currentStep.options.map((optionId) => {
                        const active = getSelectedOption(currentStep.id) === optionId;

                        return (
                          <button
                            key={optionId}
                            type="button"
                            onClick={() => handleOption(currentStep.id, optionId)}
                            className={cn(
                              'group flex min-h-16 items-center justify-between gap-4 border p-4 text-left transition-all duration-200',
                              active
                                ? 'border-crimson bg-crimson text-onAccent'
                                : 'surface-inset text-muted hover:border-crimson/40 hover:bg-elevated hover:text-foreground',
                            )}
                          >
                            <span className="text-sm font-body leading-snug">
                              {getOptionLabel(currentStep.id, optionId)}
                            </span>
                            <span
                              className={cn(
                                'flex h-5 w-5 shrink-0 items-center justify-center border transition-colors',
                                active ? 'border-onAccent text-onAccent' : 'border-border/20 text-subtle group-hover:text-crimson',
                              )}
                            >
                              {active && <Check size={12} />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.28 }}
                    className="flex flex-1 flex-col"
                  >
                    <span className="mb-4 text-xs font-display font-semibold uppercase tracking-[0.2em] text-crimson">
                      {t.qualificationBot.resultEyebrow}
                    </span>
                    <h3 className="mb-5 max-w-2xl font-display text-3xl font-700 leading-tight text-foreground sm:text-4xl">
                      {recommendation.title}
                    </h3>
                    <div className="mb-8 grid gap-4 sm:grid-cols-2">
                      <p className="border-l-2 border-crimson pl-4 text-sm leading-relaxed text-muted">
                        {recommendation.interpretation}
                      </p>
                      <p className="border-l-2 border-jade/70 pl-4 text-sm leading-relaxed text-muted">
                        {recommendation.nextStep}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                      <a
                        href={primaryCta === 'calendly' ? calendlyUrl : whatsAppUrl}
                        target={primaryCta === 'calendly' && siteConfig.calendly ? '_blank' : '_blank'}
                        rel="noopener noreferrer"
                        className="btn-primary flex-1 justify-center"
                      >
                        {primaryCta === 'calendly' ? <Calendar size={16} /> : <MessageCircle size={16} />}
                        {primaryCta === 'calendly' ? t.qualificationBot.calendlyCta : t.qualificationBot.whatsappCta}
                      </a>
                      <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex-1 justify-center"
                      >
                        <MessageCircle size={15} />
                        {t.qualificationBot.secondaryCta}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
