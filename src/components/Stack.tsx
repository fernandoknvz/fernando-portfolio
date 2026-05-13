import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface TechItem {
  name: string;
  level: 'expert' | 'proficient' | 'working';
}

interface TechCategory {
  category: string;
  items: TechItem[];
}

const stack: TechCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', level: 'expert' },
      { name: 'CSS', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'React', level: 'proficient' },
      { name: 'Vite', level: 'proficient' },
      { name: 'Responsive Design', level: 'expert' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', level: 'expert' },
      { name: 'Django', level: 'proficient' },
      { name: 'Django REST Framework', level: 'proficient' },
      { name: 'Node.js básico/intermedio', level: 'working' },
      { name: 'APIs REST', level: 'proficient' },
    ],
  },
  {
    category: 'Bases de datos',
    items: [
      { name: 'MySQL', level: 'expert' },
      { name: 'SQL', level: 'expert' },
      { name: 'Modelado relacional', level: 'proficient' },
      { name: 'Consultas', level: 'proficient' },
      { name: 'Datos operacionales', level: 'proficient' },
    ],
  },
  {
    category: 'DevOps / despliegue',
    items: [
      { name: 'Git', level: 'expert' },
      { name: 'GitHub', level: 'expert' },
      { name: 'Docker', level: 'proficient' },
      { name: 'Portainer', level: 'proficient' },
      { name: 'Netlify', level: 'proficient' },
      { name: 'Render', level: 'proficient' },
      { name: 'Railway', level: 'proficient' },
      { name: 'Nginx básico', level: 'working' },
      { name: 'Cloudflare básico/intermedio', level: 'working' },
    ],
  },
  {
    category: 'Data Science / aprendizaje',
    items: [
      { name: 'Python para datos', level: 'proficient' },
      { name: 'Pandas', level: 'working' },
      { name: 'NumPy', level: 'working' },
      { name: 'Machine Learning', level: 'working' },
      { name: 'Deep Learning', level: 'working' },
      { name: 'Notebooks', level: 'working' },
      { name: 'Análisis de datos', level: 'working' },
      { name: 'Árboles de decisión', level: 'working' },
      { name: 'Métricas de clasificación', level: 'working' },
    ],
  },
  {
    category: 'Herramientas / negocio',
    items: [
      { name: 'Excel avanzado', level: 'expert' },
      { name: 'Automatización de procesos', level: 'proficient' },
      { name: 'Sistemas de inventario', level: 'proficient' },
      { name: 'Sistemas de ventas', level: 'proficient' },
      { name: 'E-commerce', level: 'proficient' },
      { name: 'Integración de sistemas', level: 'proficient' },
    ],
  },
];

const levelColor: Record<string, string> = {
  expert: 'bg-crimson',
  proficient: 'bg-muted',
  working: 'bg-subtle',
};

const levelLabel: Record<string, string> = {
  expert: 'Experiencia práctica',
  proficient: 'He trabajado con',
  working: 'Actualmente aprendiendo',
};

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const translatedStack = stack.map((category, index) => ({
    ...category,
    category: t.stack.categories[index].category,
    items: category.items.map((item, itemIndex) => ({
      ...item,
      name: t.stack.categories[index].items[itemIndex],
    })),
  }));

  return (
    <section id="stack" className="py-24 lg:py-36 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent" />

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
              {t.stack.eyebrow}
            </span>
          </div>
          <h2 className="heading-section text-4xl lg:text-5xl text-foreground max-w-xl text-balance">
            {t.stack.titleBefore}{' '}
            <span className="text-crimson">{t.stack.titleAccent}</span>{' '}
            {t.stack.titleAfter}
          </h2>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-5 mb-10"
        >
          {Object.entries(levelLabel).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${levelColor[key]}`} />
              <span className="text-muted text-xs font-body">
                {t.stack.levels[key as keyof typeof t.stack.levels] ?? label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {translatedStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="premium-card p-6"
            >
              <h3 className="font-display font-600 text-sm text-muted uppercase tracking-widest mb-5">
                {cat.category}
              </h3>
              <div className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3">
                    <span className="text-foreground text-sm font-body">{item.name}</span>
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${levelColor[item.level]}`}
                      title={t.stack.levels[item.level]}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
