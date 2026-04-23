# Fernando Olguea — Portfolio Personal

> Full Stack Developer · Arquitecto de Soluciones  
> Construido con React, Vite, TypeScript y Tailwind CSS.

---

## Stack

| Tecnología | Versión |
|------------|---------|
| React | 18 |
| Vite | 5 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| Lucide React | 0.363 |

---

## Estructura de carpetas

```
fernando-portfolio/
├── public/
│   ├── profile.jpg          ← Tu foto de perfil
│   └── favicon.svg
├── src/
│   ├── components/          ← Un archivo por sección
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Stack.tsx
│   │   ├── Bot.tsx
│   │   ├── Booking.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── data/                ← EDITA AQUÍ tus datos personales
│   │   ├── siteConfig.ts    ← Nombre, contacto, links, WhatsApp
│   │   ├── services.ts      ← Tus servicios
│   │   ├── projects.ts      ← Tus proyectos
│   │   └── botFlow.ts       ← Preguntas y respuestas del bot
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── helpers.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── netlify.toml
└── package.json
```

---

## Instalación y desarrollo local

```bash
# 1. Cloná el repositorio
git clone https://github.com/tuusuario/fernando-portfolio.git
cd fernando-portfolio

# 2. Instalá dependencias
npm install

# 3. Levantá el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Build para producción

```bash
npm run build
```

Los archivos compilados quedan en `/dist`.

---

## Deploy en Netlify

### Opción 1 — Interfaz web (recomendado para empezar)

1. Subí el proyecto a GitHub
2. Entrá a [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Conectá tu repositorio
4. Configurá:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

El archivo `netlify.toml` ya está configurado, así que Netlify lo detecta automáticamente.

### Opción 2 — CLI de Netlify

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## Cómo personalizar el contenido

### 📸 Reemplazar la foto de perfil

Reemplazá el archivo `public/profile.jpg` con tu foto.  
Recomendado: imagen cuadrada de al menos 800×800px, fondo oscuro para mejor integración.

### 👤 Cambiar nombre y datos personales

Editá `src/data/siteConfig.ts`:

```ts
export const siteConfig = {
  name: "Tu Nombre",
  title: "Tu Título",
  // ...
  whatsapp: {
    number: "549XXXXXXXXXX", // Sin + ni espacios
    defaultMessage: "Hola, vi tu web...",
  },
  email: "tu@email.com",
  github: "https://github.com/tuusuario",
  linkedin: "https://linkedin.com/in/tuusuario",
  calendly: "https://calendly.com/tuusuario", // O dejá "" y activá mock
};
```

### 💬 Editar mensajes de WhatsApp

En `src/data/siteConfig.ts`, dentro de `whatsapp`:
- `defaultMessage` → mensaje del botón flotante
- `heroMessage` → CTA del Hero
- `contactMessage` → sección de Contacto

### 🛠️ Editar servicios

Editá `src/data/services.ts`. Podés agregar, quitar o modificar los objetos del array.  
Íconos disponibles: cualquier nombre de ícono de [Lucide](https://lucide.dev/icons/) (agregalo al `iconMap` en `Services.tsx`).

### 💼 Editar proyectos

Editá `src/data/projects.ts`. Cada proyecto tiene:
- `featured: true/false` → controla cuáles aparecen primero
- `url` y `github` opcionales
- `impact` → el resultado de negocio que más impacta

### 🤖 Editar el bot de precalificación

Editá `src/data/botFlow.ts`:
- `botSteps` → las preguntas y opciones
- `botRecommendations` → las recomendaciones según respuestas

La clave del mapa es `[project_type]-[stage]-[priority]`. Si no hay match exacto, usa `"default"`.

### 📅 Agenda: Calendly vs Mock

En `src/data/siteConfig.ts`:
```ts
calendly: "https://calendly.com/tulink", // Tu link de Calendly
useMockCalendar: false, // true = muestra calendario interno
```

Si `useMockCalendar: true`, se muestra el formulario de reserva interno.  
Si `calendly` tiene un link y `useMockCalendar: false`, redirige a Calendly.

---

## Variables de entorno (opcional)

Si en el futuro conectás un backend para formularios, creá un `.env.local`:

```
VITE_API_URL=https://tu-api.com
```

Y accedé con `import.meta.env.VITE_API_URL`.

---

## Licencia

Proyecto personal. Todos los derechos reservados.
