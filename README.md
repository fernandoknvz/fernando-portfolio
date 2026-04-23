# Fernando Olguea - Portfolio

Portfolio personal construido con React, Vite, TypeScript y Tailwind CSS.

## Stack

- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Funcionalidades

- Landing responsive.
- Tema dark/light persistido en `localStorage`.
- Idioma ES/EN persistido en `localStorage`.
- Bot de precalificacion y diagnostico.
- CTA a WhatsApp con mensajes dinamicos.
- Integracion con Calendly.
- Configuracion lista para Netlify.

## Estructura

```txt
public/
  favicon.svg
  profile.jpg
src/
  components/
  context/
  data/
    botFlow.ts
    projects.ts
    services.ts
    siteConfig.ts
    translations.ts
  styles/
    global.css
  types/
  utils/
index.html
netlify.toml
package.json
tailwind.config.js
vite.config.ts
```

## Desarrollo Local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build

```bash
npm run build
```

El build de produccion queda en `dist/`.

Para revisar el build local:

```bash
npm run preview
```

## Deploy En Netlify

El proyecto incluye `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Pasos:

1. Sube el repo a GitHub.
2. En Netlify: **Add new site** -> **Import from Git**.
3. Selecciona el repo.
4. Netlify detectara `npm run build` y `dist` desde `netlify.toml`.
5. Deploy.

No hace falta crear `_redirects` porque el redirect de SPA ya esta en `netlify.toml`.

## Personalizacion

Datos personales y enlaces:

```ts
src/data/siteConfig.ts
```

Textos ES/EN:

```ts
src/data/translations.ts
```

Servicios y proyectos:

```ts
src/data/services.ts
src/data/projects.ts
```

Estos archivos contienen metadatos estructurales. El texto visible vive en `translations.ts`.

Bot y precalificacion:

```ts
src/data/botFlow.ts
src/components/Bot.tsx
src/components/QualificationBot.tsx
```

Tema:

```ts
src/context/ThemeContext.tsx
src/styles/global.css
```

Idioma:

```ts
src/context/LanguageContext.tsx
src/data/translations.ts
```

## Variables De Entorno

Actualmente no se requieren variables de entorno.

Si en el futuro agregas integraciones privadas, usa `.env.local` y no lo subas al repo:

```env
VITE_API_URL=https://tu-api.com
```

## Checklist Antes Del Primer Commit

```bash
npm run build
git status
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

## Licencia

Proyecto personal. Todos los derechos reservados.
