# Design Token Architecture

This reference provides complete CSS custom property templates for building consistent design
systems. Copy and adapt these tokens as the foundation for any project.

---

## Complete Token Template

```css
/* ==========================================================================
   DESIGN TOKENS
   All design decisions as CSS custom properties.
   Change values here — they cascade through every component.
   ========================================================================== */

:root {
  /* --- Spacing Scale (4px base unit) --- */
  --space-1: 0.25rem;   /* 4px  */
  --space-2: 0.5rem;    /* 8px  */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-7: 2rem;      /* 32px */
  --space-8: 2.5rem;    /* 40px */
  --space-9: 3rem;      /* 48px */
  --space-10: 4rem;     /* 64px */
  --space-11: 5rem;     /* 80px */
  --space-12: 6rem;     /* 96px */
  --space-section: 8rem; /* 128px — between major page sections */

  /* --- Color Primitives: Modern OKLCH (Perceptually Uniform) --- */
  --blue-50: oklch(0.97 0.02 240);
  --blue-100: oklch(0.93 0.05 240);
  --blue-200: oklch(0.86 0.09 240);
  --blue-300: oklch(0.78 0.13 240);
  --blue-400: oklch(0.68 0.17 240);
  --blue-500: oklch(0.58 0.21 240);
  --blue-600: oklch(0.50 0.22 240);
  --blue-700: oklch(0.42 0.20 240);
  --blue-800: oklch(0.34 0.17 240);
  --blue-900: oklch(0.26 0.14 240);
  --blue-950: oklch(0.18 0.10 240);

  --gray-50: oklch(0.98 0.005 250);
  --gray-100: oklch(0.95 0.01 250);
  --gray-200: oklch(0.90 0.015 250);
  --gray-300: oklch(0.82 0.02 250);
  --gray-400: oklch(0.70 0.025 250);
  --gray-500: oklch(0.55 0.03 250);
  --gray-600: oklch(0.42 0.03 250);
  --gray-700: oklch(0.32 0.03 250);
  --gray-800: oklch(0.22 0.025 250);
  --gray-900: oklch(0.15 0.02 250);
  --gray-950: oklch(0.10 0.015 250);

  --green-500: oklch(0.65 0.19 145);
  --green-600: oklch(0.55 0.18 145);
  --red-500: oklch(0.62 0.22 25);
  --red-600: oklch(0.52 0.21 25);
  --amber-500: oklch(0.75 0.18 75);
  --amber-600: oklch(0.65 0.17 75);

  /* --- Semantic Color Tokens (use these in components) --- */
  --color-text-primary: var(--gray-900);
  --color-text-secondary: var(--gray-600);
  --color-text-muted: var(--gray-400);
  --color-text-inverse: #ffffff;

  --color-surface: #ffffff;
  --color-surface-elevated: var(--gray-50);
  --color-surface-sunken: var(--gray-100);

  --color-border: var(--gray-200);
  --color-border-strong: var(--gray-300);

  --color-accent: var(--blue-600);
  --color-accent-hover: var(--blue-700);
  --color-accent-subtle: var(--blue-50);

  --color-success: var(--green-600);
  --color-error: var(--red-600);
  --color-warning: var(--amber-600);

  /* --- Glassmorphism & Surface Tokens --- */
  --glass-bg: color-mix(in oklch, var(--color-surface) 75%, transparent);
  --glass-border: color-mix(in oklch, var(--color-border) 40%, transparent);
  --glass-blur: blur(16px);

  /* --- Typography Scale (fluid with clamp) --- */
  --text-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.8rem);     /* ~12-13px */
  --text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 0.95rem);    /* ~14-15px */
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);        /* ~16-18px */
  --text-lg:   clamp(1.125rem, 1rem + 0.6vw, 1.25rem);       /* ~18-20px */
  --text-xl:   clamp(1.25rem, 1rem + 1.2vw, 1.75rem);        /* ~20-28px */
  --text-2xl:  clamp(1.5rem, 1rem + 2vw, 2.5rem);            /* ~24-40px */
  --text-3xl:  clamp(2rem, 1.2rem + 3vw, 3.5rem);            /* ~32-56px */
  --text-4xl:  clamp(2.5rem, 1.5rem + 4vw, 5rem);            /* ~40-80px */

  --leading-tight: 1.15;
  --leading-snug: 1.3;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;

  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;

  /* --- Border Radius --- */
  --radius-sm: 0.25rem;   /* 4px  */
  --radius-md: 0.5rem;    /* 8px  */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;

  /* --- Shadows (layered for realistic depth) --- */
  --shadow-sm:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-md:
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.06),
    0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-lg:
    0 4px 6px rgba(0, 0, 0, 0.03),
    0 10px 20px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-xl:
    0 8px 16px rgba(0, 0, 0, 0.04),
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 2px 4px rgba(0, 0, 0, 0.03);

  /* --- Transitions --- */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  /* --- Z-Index Scale --- */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

---

## Dark Mode Token Mapping

Remap semantic tokens to different primitives — same variable names, different values:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: var(--gray-100);
    --color-text-secondary: var(--gray-400);
    --color-text-muted: var(--gray-500);
    --color-text-inverse: var(--gray-900);

    --color-surface: var(--gray-950);
    --color-surface-elevated: var(--gray-900);
    --color-surface-sunken: #000000;

    --color-border: var(--gray-800);
    --color-border-strong: var(--gray-700);

    --color-accent: var(--blue-400);
    --color-accent-hover: var(--blue-300);
    --color-accent-subtle: var(--blue-950);

    /* Shadows need reduced opacity in dark mode */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
    --shadow-md:
      0 2px 4px rgba(0, 0, 0, 0.2),
      0 4px 8px rgba(0, 0, 0, 0.3);
    --shadow-lg:
      0 4px 6px rgba(0, 0, 0, 0.2),
      0 10px 20px rgba(0, 0, 0, 0.4);
  }
}

/* Class-based toggle (for manual dark mode switch) */
.dark-theme {
  --color-text-primary: var(--gray-100);
  --color-text-secondary: var(--gray-400);
  /* ... same mappings as above ... */
}
```

---

## Font Loading Pattern

```html
<!-- Preload the primary font for fastest LCP -->
<link rel="preload" href="/fonts/display-font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/body-font.woff2" as="font" type="font/woff2" crossorigin>
```

```css
/* Define fonts with fallback metrics to prevent CLS */
@font-face {
  font-family: 'DisplayFont';
  src: url('/fonts/display-font.woff2') format('woff2');
  font-display: swap;
  font-weight: 100 900; /* variable font range */
}

@font-face {
  font-family: 'BodyFont';
  src: url('/fonts/body-font.woff2') format('woff2');
  font-display: swap;
}

/* Fallback with size-adjust to minimize CLS during swap */
@font-face {
  font-family: 'BodyFont-Fallback';
  src: local('Arial');
  size-adjust: 100.4%;
  ascent-override: 96%;
  descent-override: 24%;
  line-gap-override: 0%;
}

body {
  font-family: 'BodyFont', 'BodyFont-Fallback', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'DisplayFont', sans-serif;
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}
```
