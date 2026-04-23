import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, User, Mail, ChevronRight, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppUrl } from '@/utils/helpers';

// Available time slots for the mock calendar
const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
// Generate next 7 working days from today
function getWorkingDays(): Date[] {
  const days: Date[] = [];
  const today = new Date();
  let d = new Date(today);
  d.setDate(d.getDate() + 1); // start tomorrow
  while (days.length < 7) {
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function formatDay(date: Date, locale: string) {
  return date.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' });
}

interface BookingForm {
  name: string;
  email: string;
  projectType: string;
  date: Date | null;
  time: string;
}

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState<BookingForm>({ name: '', email: '', projectType: '', date: null, time: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const workingDays = getWorkingDays();
  const { t } = useLanguage();

  const useCalendly = !siteConfig.useMockCalendar && siteConfig.calendly;

  function validate() {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = t.booking.errors.name;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = t.booking.errors.email;
    if (!form.projectType) e.projectType = t.booking.errors.projectType;
    if (!form.date) e.date = t.booking.errors.date;
    if (!form.time) e.time = t.booking.errors.time;
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  }

  return (
    <section id="booking" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-jade/5 blur-[100px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="section-divider" />
            <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">
              {t.booking.eyebrow}
            </span>
          </div>
          <h2 className="heading-section text-4xl lg:text-5xl text-foreground max-w-2xl text-balance">
            {t.booking.titleBefore}{' '}
            <span className="text-jade">{t.booking.titleAccent}</span>
          </h2>
          <p className="text-muted mt-4 max-w-lg font-body leading-relaxed">
            {t.booking.intro}
          </p>
        </motion.div>

        {/* Calendly mode */}
        {useCalendly ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group text-base px-8 py-4"
            >
              <Calendar size={16} />
              {t.booking.calendlyCta}
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={buildWhatsAppUrl(t.whatsappMessages.contact)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
            >
              {t.booking.whatsappAlt}
            </a>
          </motion.div>
        ) : (
          /* Mock calendar */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl"
          >
            {submitted ? (
              <div className="premium-panel border-jade/25 p-10 flex flex-col items-center gap-4 text-center">
                <CheckCircle size={40} className="text-jade" />
                <h3 className="font-display font-700 text-xl text-foreground">{t.booking.successTitle}</h3>
                <p className="text-muted font-body">
                  {t.booking.successBody}
                </p>
                <a
                  href={buildWhatsAppUrl(t.whatsappMessages.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-2"
                >
                  {t.booking.successCta}
                </a>
              </div>
            ) : (
              <div className="premium-panel p-8 flex flex-col gap-7">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    icon={<User size={14} />}
                    label={t.booking.labels.name}
                    error={errors.name}
                    input={
                      <input
                        type="text"
                        placeholder={t.booking.placeholders.name}
                        value={form.name}
                        onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })); }}
                        className="w-full bg-transparent text-foreground text-sm placeholder:text-subtle outline-none"
                      />
                    }
                  />
                  <Field
                    icon={<Mail size={14} />}
                    label={t.booking.labels.email}
                    error={errors.email}
                    input={
                      <input
                        type="email"
                        placeholder={t.booking.placeholders.email}
                        value={form.email}
                        onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })); }}
                        className="w-full bg-transparent text-foreground text-sm placeholder:text-subtle outline-none"
                      />
                    }
                  />
                </div>

                {/* Project type */}
                <Field
                  label={t.booking.labels.projectType}
                  error={errors.projectType}
                  input={
                    <select
                      value={form.projectType}
                      onChange={e => { setForm(f => ({ ...f, projectType: e.target.value })); setErrors(er => ({ ...er, projectType: '' })); }}
                      className="w-full bg-transparent text-sm outline-none text-foreground [&>option]:bg-card [&>option]:text-foreground"
                    >
                      <option value="" className="text-subtle">{t.booking.placeholders.projectType}</option>
                      {t.booking.projectTypes.map((projectType) => (
                        <option key={projectType} value={projectType}>{projectType}</option>
                      ))}
                    </select>
                  }
                />

                {/* Date picker */}
                <div>
                  <label className="text-muted text-xs tracking-wide font-display uppercase mb-3 block">
                    {t.booking.labels.preferredDate}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {workingDays.map((day, i) => (
                      <button
                        key={i}
                        onClick={() => { setForm(f => ({ ...f, date: day })); setErrors(er => ({ ...er, date: '' })); }}
                        className={`px-3 py-2 text-xs font-display border transition-all ${
                          form.date?.toDateString() === day.toDateString()
                            ? 'bg-crimson border-crimson text-onAccent'
                            : 'border-border/10 text-muted hover:border-border/30 hover:text-foreground'
                        }`}
                      >
                        {formatDay(day, t.booking.locale)}
                      </button>
                    ))}
                  </div>
                  {errors.date && <p className="text-crimson text-xs mt-2">{errors.date}</p>}
                </div>

                {/* Time picker */}
                <div>
                  <label className="text-muted text-xs tracking-wide font-display uppercase mb-3 block">
                    {t.booking.labels.preferredTime}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.map(t => (
                      <button
                        key={t}
                        onClick={() => { setForm(f => ({ ...f, time: t })); setErrors(er => ({ ...er, time: '' })); }}
                        className={`px-4 py-2 text-xs font-display border transition-all flex items-center gap-1.5 ${
                          form.time === t
                            ? 'bg-crimson border-crimson text-onAccent'
                            : 'border-border/10 text-muted hover:border-border/30 hover:text-foreground'
                        }`}
                      >
                        <Clock size={11} />
                        {t}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="text-crimson text-xs mt-2">{errors.time}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full justify-center py-4 text-base"
                >
                  {t.booking.submit}
                  <ChevronRight size={16} />
                </button>
                <p className="text-subtle text-xs text-center font-body">
                  {t.booking.note}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Reusable form field wrapper
function Field({ icon, label, error, input }: {
  icon?: React.ReactNode;
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-muted text-xs tracking-wide font-display uppercase">{label}</label>
      <div className={`flex items-center gap-2 border-b pb-2 transition-colors ${error ? 'border-crimson/60' : 'border-border/10 focus-within:border-border/30'}`}>
        {icon && <span className="text-subtle">{icon}</span>}
        {input}
      </div>
      {error && <p className="text-crimson text-xs">{error}</p>}
    </div>
  );
}
