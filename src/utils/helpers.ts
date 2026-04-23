import { siteConfig } from '@/data/siteConfig';

// Build WhatsApp URL with encoded message
export function buildWhatsAppUrl(message?: string): string {
  const msg = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
}

// Smooth scroll to section
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Join class names (thin wrapper around clsx)
export { clsx as cn } from 'clsx';
