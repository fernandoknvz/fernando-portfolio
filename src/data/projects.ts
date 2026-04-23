// ============================================================
// PROJECTS — Structural metadata only. Visible copy lives in translations.ts
// ============================================================

export interface Project {
  id: string;
  stack: string[];
  url?: string; // Optional live URL
  github?: string; // Optional GitHub URL
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'pos-system',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    featured: true,
  },
  {
    id: 'ecommerce-integration',
    stack: ['WooCommerce', 'REST API', 'Node.js', 'MySQL'],
    featured: true,
  },
  {
    id: 'automation-pipeline',
    stack: ['n8n', 'Google Sheets API', 'WhatsApp API', 'Node.js'],
    featured: true,
  },
  {
    id: 'booking-platform',
    stack: ['React', 'TypeScript', 'Supabase', 'Twilio'],
    featured: false,
  },
  {
    id: 'payment-gateway',
    stack: ['Stripe', 'MercadoPago', 'Node.js', 'Redis'],
    featured: false,
  },
  {
    id: 'dashboard-analytics',
    stack: ['React', 'Chart.js', 'WebSockets', 'PostgreSQL'],
    featured: false,
  },
];
