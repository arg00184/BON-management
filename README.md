# BON Management

Base tecnica para una landing profesional de scroll orientada a una agencia de OnlyFans management.

## Stack

- Astro 6 con TypeScript estricto.
- Tailwind CSS 4 mediante `@tailwindcss/vite`.
- GSAP + ScrollTrigger para animaciones vinculadas al scroll.
- React configurado como isla opcional para componentes interactivos.
- Lucide React preparado para iconos cuando se construyan controles o CTAs.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```txt
src/
  layouts/BaseLayout.astro
  pages/index.astro
  styles/global.css
```

La pagina inicial ya incluye secciones de hero, sistema, servicios, proceso y CTA para validar el flujo visual antes de entrar en identidad final, copywriting y assets.

## Assets

- `public/images/creator-studio.jpg`: imagen editorial de Unsplash usada como placeholder visual para el hero.
