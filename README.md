# Astro + Starwind UI Blog Template

<img width="1536" height="1024" alt="free-astro-theme" src="https://github.com/user-attachments/assets/0419a038-def9-4e88-916d-23add03ce366" />

Plantilla de blog lista para producción con Astro, usando Tailwind CSS v4 y patrones de Starwind UI, con un sistema de temas completo mediante variables CSS y componentes reutilizables `.astro`.

Demo en https://free-astro-template.netlify.app/

## ✨ Características

- ✅ Astro SSG con experiencia de desarrollo rápida
- ✅ Tailwind CSS v4 + patrones y theming de Starwind UI
- ✅ Tema oscuro mediante variables CSS (`.dark` / `[data-theme="dark"]`)
- ✅ Datos centralizados en TypeScript (`skills`, `work`, `studies`, `projects`, `logos`)
- ✅ Componentes UI reutilizables (Badge, Button, Timeline, Carousel, Separators)
- ✅ Secciones organizadas (Header, Hero, Skills, Work Experience, Studies, Footer)
- ✅ Blog con colecciones de contenido Markdown & MDX
- ✅ SEO: URLs canónicas, OpenGraph, sitemap, RSS feed, iconos de compartir, etc
- ✅ Tokens orientados a accesibilidad (listos para contraste) y utilidades de superficie de tarjetas

<img width="941" height="519" alt="image" src="https://github.com/user-attachments/assets/e88187b8-6ed1-459e-bb81-61b64e06ee2a" />

## 🔧 Requisitos

- Node.js 18+ (o 20+ recomendado)
- npm (o pnpm/yarn)

## 🚀 Inicio rápido

```bash
# 1) Instala dependencias
npm install

# 2) Inicia el servidor de desarrollo
npm run dev
# abre http://localhost:4321
```

Construir y previsualizar:

```bash
npm run build
npm run preview
```

## 📁 Estructura del proyecto

```text
free-astro-template/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── icons/               # Iconos inline para la UI (ej: timeline)
│   │   ├── images/              # Imágenes JPG/PNG para hero/blog
│   │   └── logos/               # Logos de marcas usados por Carousel & projects
│   ├── components/
│   │   ├── sections/            # Secciones de página
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── SkillsSection.astro
│   │   │   ├── WorkExperience.astro
│   │   │   └── Studies.astro
│   │   └── ui/                  # Componentes UI reutilizables
│   │       ├── badge/Badge.astro
│   │       ├── button/Button.astro
│   │       ├── card/            # Variantes de tarjeta (ej: PostCard)
│   │       ├── carousel/Carousel.astro
│   │       ├── separator/
│   │       │   ├── ArrowSeparator.astro
│   │       │   └── GlowLineSeparator.astro
│   │       └── timeline/Timeline.astro
│   ├── content/
│   │   └── blog/                # Posts en Markdown & MDX
│   ├── data/                    # Todos los datos estructurados para secciones/UI
│   │   ├── skills.ts
│   │   ├── work.ts
│   │   ├── studies.ts
│   │   ├── projects.ts
│   │   └── logos.ts             # Globs SVG logos y normaliza nombres
│   ├── layouts/
│   │   └── BlogPost.astro
│   ├── lib/
│   │   └── svg.ts               # sanitizeToOutline(svg, size)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── portfolio.astro
│   │   ├── demo.astro  # Muestra de componentes
│   │   └── blog/[...slug].astro
│   └── styles/
│       ├── global.css           # Importa estilos base en el orden correcto
│       ├── starwind.css         # Tailwind + base y orden de capas Starwind
│       ├── tokens.css           # Tokens claros & mapeo de variables Starwind
│       ├── themes/dark.css      # Overrides para tema oscuro
│       └── utilities.css        # Utilidades, efectos y animaciones del proyecto
├── astro.config.mjs
├── starwind.config.json
├── tsconfig.json
└── package.json
```

## 🧩 Componentes y secciones

- Header: favicon, navegación alineada a la izquierda, iconos sociales con hover.
- HeroSection: CTAs principales usando el componente `Button` compartido.
- SkillsSection: usa datos de `src/data/skills.ts`; efectos hover en iconos.
- WorkExperience: usa `Timeline.astro`, iconos sanitizados vía `lib/svg.ts`.
- Studies: lista simple de estudios desde `src/data/studies.ts`.
- Componentes UI: `Badge`, `Button`, `Timeline`, `Carousel`, `ArrowSeparator`, `GlowLineSeparator`.

Nota: Mantén los componentes libres de CSS scoped siempre que sea posible. Prefiere utilidades en `styles/utilities.css` y tokens en `styles/tokens.css` y `styles/themes/dark.css`.

## 🎨 Temas y estilos

Esta plantilla usa patrones de theming de Starwind UI con Tailwind v4:

- `src/styles/starwind.css`: importa Tailwind y capas base de Starwind.
- `src/styles/tokens.css`: tokens base claros y mapeo a variables Starwind.
- `src/styles/themes/dark.css`: overrides para modo oscuro (fondos, texto, sombras, colores semánticos).
- `src/styles/utilities.css`: utilidades y efectos específicos del proyecto, incluyendo:
  - `.card-surface` estilo de superficie (fondo translúcido, radio, sombra, backdrop-filter)
  - Animación de carousel (`@keyframes carousel-scroll`, `.animate-carousel`)
  - Efectos de separador (flecha y línea glow)

El modo oscuro se activa aplicando `.dark` o `[data-theme="dark"]` en un elemento raíz. La home usa dark por defecto. Para personalizar:

1) Edita los tokens en `styles/tokens.css` (base claro).
2) Ajusta overrides en `styles/themes/dark.css` (ej: `--background`, `--card`, sombras, colores semánticos).
3) Prefiere ajustar `.card-surface` y utilidades en `styles/utilities.css` en vez de estilos scoped en componentes.

Accesibilidad: Si Lighthouse marca contraste, sube la luminancia de fondo y/o aumenta el contraste de texto ajustando tokens en `dark.css` (ej: `--background`, `--card` y variables de color de texto).

## 🗂️ Editar contenido

- Posts del blog: agrega archivos Markdown o MDX en `src/content/blog/`.
- Skills: edita `src/data/skills.ts` (icono, título, descripción). Se soportan SVGs inline.
- Experiencia laboral: edita `src/data/work.ts` (título, empresa, región, descripción, tecnologías).
- Estudios: edita `src/data/studies.ts`.
- Proyectos: edita `src/data/projects.ts` (icono, título, stack, descripción, link).
- Logos para carousel: sube SVGs a `src/assets/logos/`. Se recogen y normalizan en `src/data/logos.ts` usando `import.meta.glob` (configurado para Vite v5 con `{ query: '?url', import: 'default', eager: true }`). Nombres como "Something-logo.svg" se normalizan quitando el sufijo "logo" y capitalizando automáticamente.

## 🧠 Manejo de SVG

- Usa `lib/svg.ts` → `sanitizeToOutline(svg: string, size: number)` para normalizar SVGs inline (remueve XML/comentarios, fuerza `fill="none"`, `stroke="currentColor"` y aplica width/height). Así los iconos de timeline se ven nítidos y tematizables.

## 🖱️ Uso del Carousel

- Componente: `src/components/ui/carousel/Carousel.astro`
- Datos: `src/data/logos.ts`
- Props:
  - `tools`: array de logos normalizados desde `logos.ts`
  - `speedMs` (opcional): valor bajo → scroll más rápido. Sube para ralentizar.
- Comportamiento: los logos se ven blancos por defecto; al hacer hover muestran sus colores originales.

## 📌 Añadir logos al carousel

- Sube SVGs a `src/assets/logos/` y se auto-globearán en `src/data/logos.ts`. Los nombres se normalizan (quita `-logo`, capitaliza, etc).

## 🧰 Tarjetas y superficies

- Usa la utilidad `.card-surface` para tarjetas consistentes:
  - fondo oscuro y translúcido vía `--card`
  - sin borde; usa sombras para profundidad
  - sombra base más fuerte en modo oscuro; más ligera en hover con glow de acento
- Ajusta en `styles/utilities.css` y `styles/themes/dark.css`.

## 🔗 Header y Footer

- La navegación del header está alineada a la izquierda; los iconos sociales usan group hover para cambiar color al pasar el mouse.
- El footer incluye un CTA con un botón principal.

## 🧞 Comandos (Astro)

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor en `http://localhost:4321`       |
| `npm run build`           | Construye el sitio en `./dist/`                  |
| `npm run preview`         | Previsualiza tu build localmente                 |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Ayuda del CLI de Astro                           |

## ✅ Buenas prácticas

- Mantén los archivos `.astro` libres de CSS scoped salvo que sea necesario.
- Centraliza decisiones de diseño en `tokens.css`, `themes/dark.css` y `utilities.css`.
- Prefiere componentes orientados a datos: mueve contenido a `src/data/` e impórtalo en secciones.
- Usa SVGs inline para iconos cuando necesites controlar stroke/fill; si no, referencia assets estáticos desde `src/assets/`.

## 🛰️ Página demo

Visita `/demo` para ver los componentes Starwind UI tematizados (Badge, Button, Timeline, Carousel) con el estilo de esta plantilla.

---

Docs: [Astro Docs](https://docs.astro.build) • [Starwind UI](https://starwind.dev)

## 🧭 Qué incluye (referencia rápida)

- Colecciones de contenido de blog (Markdown + MDX) con autor, tags y taxonomía de categorías
- Páginas de autor (slugificadas), páginas de tag, páginas de categoría
- Estimación de tiempo de lectura para tarjetas y posts
- Botones de compartir (X, HN, LinkedIn, Reddit)
- Navegación post anterior/siguiente
- Feeds RSS: global, por tag, por categoría (+ autodiscovery `<link>` en páginas)
- SEO: URLs canónicas, Open Graph + Twitter cards, JSON-LD (Article, Breadcrumbs, Organization), sitemap
- Robots: `public/robots.txt`
- Markdown por defecto amigable con modo oscuro (tablas, listas, código, blockquotes)

## 🧱 Modelo de contenido (frontmatter)

Cada post (`src/content/blog/*.md|mdx`) soporta los siguientes campos en el frontmatter:

```yaml
---
title: "Título del post"
description: "Resumen corto para tarjetas y meta"
pubDate: 2025-06-19
updatedDate: 2024-07-02 # opcional
heroImage: ../../assets/images/your-image.jpg # opcional
tags: [astro, ui] # opcional, etiquetas muchas-a-muchas
category: Growth # opcional, 1 categoría amplia por post recomendado
author: Site Author # opcional; por defecto el autor del sitio
---
```

Notas:
- Las páginas de autor usan una versión slugificada del nombre (ej: `site-author`).
- Las páginas de tag usan el nombre slugificado (ej: `astro`).
- Las páginas de categoría usan el nombre slugificado (ej: `growth`).

## 🔖 Rutas y URLs

- Posts: `/blog/<slug>/`
- Autor: `/blog/author/<author-slug>/`
- Tag: `/blog/tag/<tag-slug>/`
- Categoría: `/blog/category/<category-slug>/`

## 📡 Feeds (RSS)

- Global: `/rss.xml`
- Por tag: `/rss/tag/<tag-slug>.xml`
- Por categoría: `/rss/category/<category-slug>.xml`

Tip: Los lectores de feeds pueden descubrir automáticamente los feeds de tag/categoría vía las etiquetas `<link rel="alternate" type="application/rss+xml">` que incluimos en esas páginas. El footer también da enlaces rápidos para Feedly/Inoreader y una acción “Copiar enlace RSS”.

## 🔎 Detalles SEO

- `src/components/BaseHead.astro`: head tags comunes (canónica, OG/Twitter, robots, theme-color, RSS link). Imágenes y URLs absolutas a `Astro.site`.
- `src/layouts/BlogPost.astro`: metas OG de artículo, JSON-LD (Article + BreadcrumbList).
- El índice del blog y páginas de paginación incluyen `<link rel="prev/next">`.
- Sitemap vía `@astrojs/sitemap` se genera al build; `public/robots.txt` lo referencia.

## ✍️ Markdown UX

- Mejoras para tablas y listas en `src/styles/utilities.css` bajo el scope `.prose`.
- Tablas: bordes redondeados, zebra stripes, overflow responsivo; Listas: bullets/numeración restaurados con indentación correcta.

## ⏱️ Tiempo de lectura

- Las tarjetas estiman desde Markdown usando `calculateReadingTimeFromMarkdown()` (`src/lib/reading.ts`).
- Las páginas de post estiman desde HTML renderizado usando `calculateReadingTimeFromHtml()`.
- Velocidad por defecto: 200 WPM; ajusta cambiando el parámetro opcional en estos helpers si prefieres otro valor.

## 🧩 Personalizar taxonomía

- SEO de tags: edita `src/data/tags.ts` (`getTagMeta`).
- SEO de categorías: edita `src/data/categories.ts` (`getCategoryMeta`).

## 🚀 Deploy

- Salida estática en `dist/`. Cualquier host estático funciona (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
- Asegúrate de definir `site` en `astro.config.mjs` para URLs absolutas correctas en feeds y metadatos.

## 🚀 GitHub Pages (deploy)

Despliega en GitHub Pages con un workflow.

1) Configura site y base en `astro.config.mjs` (crítico)

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // User/Org Pages (https://<user>.github.io):
  //   site: 'https://<user>.github.io',
  //   base: '/'
  // Project Pages (https://<user>.github.io/<repo>/):
  //   site: 'https://<user>.github.io/<repo>/',
  //   base: '/<repo>/'
  site: 'https://your-user.github.io',
  base: '/',
});
```

2) Activa GitHub Pages en tu repo
- Settings → Pages → Build and deployment → Source: GitHub Actions

3) Agrega el workflow (listo para copiar)

Crea `.github/workflows/deploy.yml` con:

```yaml
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install deps
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4) Haz commit y push a `main`
- La primera vez puede tardar un minuto. Revisa la pestaña Actions para logs y la URL de Pages.

Solución de problemas
- CSS/assets 404 en project pages → falta o está mal el `base`. Pon `base: '/<repo>/'` y reconstruye.
- URLs canónicas/RSS incorrectas → `site` incorrecto. Usa tu URL real de Pages (o tu dominio personalizado si tienes uno).
- Dominio personalizado (CNAME) → Pon `site: 'https://example.com'` y deja `base: '/'`.

## ⚙️ Configuración (haz esto primero)

1) Define la URL canónica de tu sitio en `astro.config.mjs`:
```js
// astro.config.mjs
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
})
```

2) Actualiza meta global en `src/consts.ts`:
```ts
export const SITE_TITLE = 'Título de tu sitio';
export const SITE_DESCRIPTION = 'Descripción corta para social/meta.';
```

3) Perfil de autor en `src/data/author.ts` (nombre, avatar, URLs sociales).

4) Reemplaza favicon/app icons en `public/` (mantén los nombres de archivo).

5) Opcional: Personaliza tokens de tema en `src/styles/tokens.css` y overrides oscuros en `src/styles/themes/dark.css`.

## 🧪 Opcional: Analytics

Esta plantilla no incluye analytics por defecto. Para agregar GA4 después, pon el snippet de GA en `src/components/BaseHead.astro` y (opcionalmente) protégelo con `import.meta.env.PROD`.

## 🔧 Alternar características

- Categorías: el frontmatter soporta una sola `category`. Para desactivar páginas de categoría, elimina `src/pages/blog/category/[category].astro` y la ruta RSS de categoría; los posts seguirán funcionando con tags.
- RSS por tag/categoría: elimina las rutas bajo `src/pages/rss/tag/` y `src/pages/rss/category/` si solo quieres un feed global.

## 🧰 Netlify (ejemplo)

Si despliegas en Netlify, usa:
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

## ✅ Checklist de lanzamiento

- [ ] URL de sitio en `astro.config.mjs` definida
- [ ] `SITE_TITLE` / `SITE_DESCRIPTION` actualizados
- [ ] Datos y avatar de autor definidos
- [ ] Favicons/app icons reemplazados en `public/`
- [ ] Imagen de compartir social (fallback) correcta
- [ ] Lighthouse OK (SEO + Accesibilidad)
- [ ] Desplegar (Netlify/Vercel/etc.) y verificar `/rss.xml` y `/sitemap-index.xml`

## 📄 Licencia

MIT — eres libre de usar, modificar y redistribuir. Ver `LICENSE` para detalles.

Mira mi sitio en vivo en 'https://guihubie.com'
