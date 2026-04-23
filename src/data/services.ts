// ============================================================
// SERVICES — Structural metadata only. Visible copy lives in translations.ts
// ============================================================

export interface Service {
  id: string;
  icon: string; // Lucide icon name
}

export const services: Service[] = [
  { id: 'fullstack', icon: 'Layers' },
  { id: 'apis', icon: 'Zap' },
  { id: 'ecommerce', icon: 'ShoppingCart' },
  { id: 'automation', icon: 'Bot' },
  { id: 'architecture', icon: 'GitBranch' },
  { id: 'custom', icon: 'Wrench' },
];
