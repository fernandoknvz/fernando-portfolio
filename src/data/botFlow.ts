// ============================================================
// BOT FLOW — Structural metadata only. Visible copy lives in translations.ts
// ============================================================

export interface BotOption {
  id: string;
}

export interface BotStep {
  id: 'project_type' | 'stage' | 'priority';
  options: BotOption[];
}

export interface BotRecommendation {
  cta: 'whatsapp' | 'calendar';
}

export const botSteps: BotStep[] = [
  {
    id: 'project_type',
    options: [{ id: 'web_app' }, { id: 'ecommerce' }, { id: 'integration' }, { id: 'pos' }],
  },
  {
    id: 'stage',
    options: [{ id: 'idea' }, { id: 'defined' }, { id: 'existing' }, { id: 'urgent' }],
  },
  {
    id: 'priority',
    options: [{ id: 'speed' }, { id: 'quality' }, { id: 'cost' }, { id: 'integration' }],
  },
];

export const botRecommendations: Record<string, BotRecommendation> = {
  default: { cta: 'calendar' },
  'web_app-idea-speed': { cta: 'whatsapp' },
  'web_app-defined-quality': { cta: 'calendar' },
  'integration-existing-integration': { cta: 'whatsapp' },
  'ecommerce-defined-speed': { cta: 'whatsapp' },
  'pos-urgent-speed': { cta: 'whatsapp' },
};

export const qualificationSteps = [
  {
    id: 'need',
    options: [
      'professional_website',
      'ecommerce',
      'custom_system',
      'automation',
      'api_integration',
      'other',
    ],
  },
  {
    id: 'stage',
    options: ['initial_idea', 'running_business', 'existing_system', 'urgent_problem'],
  },
  {
    id: 'priority',
    options: [
      'sell_more',
      'save_time',
      'organize_operations',
      'integrate_systems',
      'improve_customer_experience',
    ],
  },
] as const;
