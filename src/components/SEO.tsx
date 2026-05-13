import { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getStructuredData, seoByLanguage } from '@/data/seo';
import { useLanguage } from '@/context/LanguageContext';

const managedJsonLdSelector = 'script[data-managed-seo="json-ld"]';
const siteUrl = siteConfig.siteUrl.replace(/\/$/, '');
const absoluteOgImage = `${siteUrl}${siteConfig.ogImage}`;

function ensureHeadElement<T extends HTMLMetaElement | HTMLLinkElement>(
  selector: string,
  create: () => T,
) {
  const existing = document.head.querySelector<T>(selector);
  if (existing) return existing;

  const element = create();
  document.head.appendChild(element);
  return element;
}

export default function SEO() {
  const { language } = useLanguage();
  const seo = seoByLanguage[language];

  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = language === 'es' ? 'es-CL' : 'en-US';

    const metaDefinitions = [
      ['name', 'description', seo.description],
      ['name', 'keywords', seo.keywords.join(', ')],
      ['name', 'author', siteConfig.name],
      [
        'name',
        'robots',
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      ],
      ['name', 'theme-color', '#080808'],
      ['name', 'geo.region', 'CL-RM'],
      ['name', 'geo.placename', `${siteConfig.location.city}, ${siteConfig.location.countryName}`],
      ['name', 'geo.position', `${siteConfig.location.latitude};${siteConfig.location.longitude}`],
      ['name', 'ICBM', `${siteConfig.location.latitude}, ${siteConfig.location.longitude}`],
      ['property', 'og:title', seo.ogTitle],
      ['property', 'og:description', seo.ogDescription],
      ['property', 'og:type', 'profile'],
      ['property', 'og:url', siteUrl],
      ['property', 'og:image', absoluteOgImage],
      ['property', 'og:image:alt', `${siteConfig.name}, desarrollador Full Stack en formación en Santiago, Chile`],
      ['property', 'og:site_name', siteConfig.brand],
      ['property', 'og:locale', seo.locale],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', seo.ogTitle],
      ['name', 'twitter:description', seo.ogDescription],
      ['name', 'twitter:image', absoluteOgImage],
    ] as const;

    metaDefinitions.forEach(([attribute, key, content]) => {
      const meta = ensureHeadElement(`meta[${attribute}="${key}"]`, () => {
        const next = document.createElement('meta');
        next.setAttribute(attribute, key);
        return next;
      });
      meta.setAttribute('content', content);
    });

    const canonical = ensureHeadElement('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.rel = 'canonical';
      return link;
    });
    canonical.href = siteUrl;

    const manifest = ensureHeadElement('link[rel="manifest"]', () => {
      const link = document.createElement('link');
      link.rel = 'manifest';
      return link;
    });
    manifest.href = '/manifest.webmanifest';

    document.head.querySelectorAll(managedJsonLdSelector).forEach((node) => node.remove());
    getStructuredData(language).forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.managedSeo = 'json-ld';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [language, seo]);

  return null;
}
