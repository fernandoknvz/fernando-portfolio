import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Left accent glow */}
      <div className="absolute left-0 top-1/3 w-[300px] h-[300px] bg-crimson/5 blur-[100px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-divider" />
            <span className="text-subtle text-xs font-display font-semibold tracking-[0.2em] uppercase">
              {t.projects.eyebrow}
            </span>
          </div>
          <h2 className="heading-section text-4xl lg:text-5xl text-foreground max-w-xl text-balance">
            {t.projects.titleBefore}{' '}
            <span className="text-crimson">{t.projects.titleAccent}</span>{' '}
            {t.projects.titleAfter}
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-3">
          {displayed.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="premium-card group relative"
            >
              {(() => {
                const content = t.projects.items[project.id as keyof typeof t.projects.items];

                return (
                  <>
              {/* Hover left border */}
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-crimson scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400" />

              <div className="p-8 grid md:grid-cols-[1fr_auto] gap-6 items-start pl-10">
                <div className="flex flex-col gap-4">
                  {/* Category + number */}
                  <div className="flex items-center gap-3">
                    <span className="text-subtle font-display text-xs tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="chip-red">{content.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-700 text-xl text-foreground transition-colors">
                    {content.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-sm font-body leading-relaxed max-w-2xl">
                    {content.description}
                  </p>

                  {/* Impact */}
                  <div className="flex items-start gap-2 p-3 border border-jade/20 bg-jade/5">
                    <TrendingUp size={14} className="text-jade mt-0.5 flex-shrink-0" />
                    <p className="text-jade/80 text-xs font-body leading-relaxed">
                      {content.impact}
                    </p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-2 md:flex-col md:items-end">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-border/10 flex items-center justify-center text-muted hover:text-foreground hover:border-border/30 transition-all"
                      title={t.projects.viewProject}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
                  </>
                );
              })()}
            </motion.article>
          ))}
        </div>

        {/* Show more / less */}
        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline"
            >
              {t.projects.showAll} ({projects.length})
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
