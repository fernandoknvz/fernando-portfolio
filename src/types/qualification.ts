export type QualificationNeed =
  | 'professional_website'
  | 'ecommerce'
  | 'custom_system'
  | 'automation'
  | 'api_integration'
  | 'other';

export type QualificationStage =
  | 'initial_idea'
  | 'running_business'
  | 'existing_system'
  | 'urgent_problem';

export type QualificationPriority =
  | 'sell_more'
  | 'save_time'
  | 'organize_operations'
  | 'integrate_systems'
  | 'improve_customer_experience';

export type QualificationStepId = 'need' | 'stage' | 'priority';

export type QualificationAnswers = {
  need?: QualificationNeed;
  stage?: QualificationStage;
  priority?: QualificationPriority;
};

export type QualificationOptionId =
  | QualificationNeed
  | QualificationStage
  | QualificationPriority;

export type QualificationStep = {
  id: QualificationStepId;
  options: readonly QualificationOptionId[];
};

export type QualificationCta = 'whatsapp' | 'calendly';
