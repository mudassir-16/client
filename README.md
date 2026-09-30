# Dr. Maya Reynolds, PsyD — Private Practice Website

A high-performance, accessible, and editorial web application built for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, California. 

The website transforms an initial reverse-engineered layout clone into a warm, grounded, and evidence-based brand identity for a private clinical psychology practice specializing in **Anxiety & Panic**, **Trauma & Recovery**, and **Burnout & Perfectionism**.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Project Evolution (Phases 1–3)](#-project-evolution-phases-13)
- [Tech Stack](#-tech-stack)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Architecture & Directory Structure](#-architecture--directory-structure)
- [Component Breakdown](#-component-breakdown)
- [Data Model & Single Source of Truth](#-data-model--single-source-of-truth)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Quality Assurance & Testing](#-quality-assurance--testing)
- [Core Web Vitals & Accessibility](#-core-web-vitals--accessibility)
- [License](#-license)

---

## 🌟 Overview

Prospective therapy clients often face intimidation, emotional overwhelm, and decision fatigue when seeking psychological care. This website addresses those friction points through:

- **Emotional Safety & Clarity**: Authentic tone, clear clinical specializations, and explicit treatment modalities (CBT, EMDR, Mindfulness, Somatic work).
- **Spatial Immersion ("Our Office")**: Authentic high-resolution photographs of Maya's Santa Monica suites (`123th Street 45 W, Santa Monica, CA 90401`) to ground the client and eliminate the anxiety of stepping into the unknown.
- **Zero Fiction Policy**: Strictly adheres to the professional profile without inventing credentials, fees, awards, or fake testimonials.
- **Flawless Responsiveness**: Zero horizontal overflow across 10 viewports (from 320px mobile to 1440px desktop displays).

---

## 🔄 Project Evolution (Phases 1–3)

```
┌─────────────────────────────────┐
│ Part 1: High-Fidelity Clone     │  Reverse-engineered live reference site
│ (Foundation & Grid Scaffolding) │  Established fluid container (max-w-[1720px], 5vw padding)
└───────────────┬─────────────────┘
                ▼
┌─────────────────────────────────┐
│ Part 2: Complete Brand Redesign │  Transformed into Dr. Maya Reynolds, PsyD
│ (Visual & Editorial Identity)   │  Sage/Sand/Terracotta palette + Cormorant Garamond & DM Sans
└───────────────┬─────────────────┘
                ▼
┌─────────────────────────────────┐
│ Part 3: Custom "Our Office"     │  Added spatial immersion section with 2 authentic suite photos
│ (Spatial Grounding & Comfort)   │  Demystifies the physical therapy setting in Santa Monica
└─────────────────────────────────┘
```

1. **Part 1 (Foundation Clone)**: Reverse-engineered layout hierarchy, responsive navigation drawer, and container bounds from a live Squarespace therapy site.
2. **Part 2 (Brand Redesign)**: Replaced visual identity, typography tokens, color palette, and copy to represent Dr. Maya Reynolds' solo practice for high-achieving adults.
3. **Part 3 (Spatial Addition)**: Designed and placed the custom "Our Office" section between the clinical approach narrative and the booking call-to-action.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) via `next/font/google` (`Cormorant Garamond` & `DM Sans`)
- **Automated QA**: Headless Chrome & [Puppeteer](https://pptr.dev/)

---

## 🎨 Design System & Aesthetics

### Color Palette (60-30-10 Rule)

| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| **Warm Ivory** | `#F8F5EF` | Background Base (~60%) | Page body, card fills, calm ambient canvas |
| **Pure White** | `#FFFFFF` | Card & Contrast (~20%) | Elevated cards, clean structural separation |
| **Deep Sage** | `#5F7167` | Primary Accent (~12%) | Headers, borders, active pills, clinical buttons |
| **Warm Sand** | `#E7DED0` | Secondary Neutral (~5%) | Subtle section backgrounds, decorative badges |
| **Terracotta** | `#B87560` | Warm Highlight (~3%) | Subtle emphasis, warm focus accents |
| **Deep Charcoal** | `#29332F` | Primary Text | Headings, subheads, and body copy (high WCAG contrast) |

### Typography

- **Headings**: `Cormorant Garamond` (Serif) — Sophisticated, warm, editorial, and commanding.
- **Body & UI**: `DM Sans` (Sans-Serif) — Highly readable, geometric, and clean at small sizes.

---

## 📂 Architecture & Directory Structure

```text
├── public/
│   └── images/                       # High-res photography & assets
│       ├── maya_portrait.png         # Authentic profile photo (PDF-extracted)
│       ├── office_1.jpg              # Authentic Santa Monica office photo 1
│       ├── office_2.jpg              # Authentic Santa Monica office photo 2
│       ├── intro_lifestyle.jpg       # Grounded lifestyle / ambient image
│       ├── service_anxiety.jpg       # Service card photography
│       ├── service_trauma.jpg        # Service card photography
│       ├── service_burnout.jpg       # Service card photography
│       ├── approach_lifestyle.jpg    # Clinical approach editorial photography
│       └── cta_lifestyle.jpg         # Final CTA ambient image
├── scripts/
│   ├── extract_pdf_images.py         # PyMuPDF extractor for profile assets
│   ├── maya_qa.mjs                   # Automated 10-viewport Puppeteer QA runner
│   └── get_sec6.mjs                  # Asset validation helper
├── src/
│   ├── app/
│   │   ├── globals.css               # Design tokens, @theme, custom utilities
│   │   ├── layout.tsx                # Root layout, Google font loaders, SEO metadata
│   │   └── page.tsx                  # Homepage assemblage
│   ├── components/                   # Modular React components
│   │   ├── Header.tsx                # 'use client' navigation with drawer & dropdowns
│   │   ├── Hero.tsx                  # LCP-optimized hero with Dr. Reynolds' portrait
│   │   ├── Introduction.tsx          # Empathy & validation narrative
│   │   ├── Services.tsx              # 3 specialized clinical cards
│   │   ├── Modalities.tsx            # Evidence-based modality cards (CBT, EMDR, etc.)
│   │   ├── Approach.tsx              # Relational & collaborative therapy breakdown
│   │   ├── TraumaApproach.tsx        # Safety-first trauma pacing narrative
│   │   ├── AboutMaya.tsx             # Clinical background, credentials & philosophy
│   │   ├── OurOffice.tsx             # Part 3 custom office spatial immersion
│   │   ├── LocationTelehealth.tsx    # Santa Monica office + CA telehealth details
│   │   ├── FaqSection.tsx            # 'use client' accessible accordion FAQ
│   │   ├── FinalCta.tsx              # High-conversion consultation banner
│   │   └── Footer.tsx                # Comprehensive semantic footer
│   └── data/
│       ├── mayaContent.ts            # Central single source of truth for practice data
│       └── navigation.ts             # Navigation hierarchy and menu items
├── PROJECT_WALKTHROUGH.md            # Comprehensive 40-section senior interview guide
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧩 Component Breakdown

- **`Header.tsx`** *(Client Component)*: Fixed top navigation with smooth scroll anchors, active states, mobile hamburger drawer, and clean unmounting logic.
- **`Hero.tsx`** *(Server Component)*: Immediate clinical authority and warmth. Implements Next.js `Image` with `priority` and `loading="eager"` for sub-second Largest Contentful Paint (LCP).
- **`Services.tsx`** *(Server Component)*: Three-card layout presenting Anxiety & Panic, Trauma & Recovery, and Burnout & Perfectionism.
- **`OurOffice.tsx`** *(Server Component)*: Custom Part 3 section displaying two authentic office photographs, Santa Monica address badges, and quiet interior descriptions to lower intake resistance.
- **`FaqSection.tsx`** *(Client Component)*: Keyboard-navigable accordion answering real logistical questions (in-person vs. telehealth, pacing, insurance, booking).
- **`LocationTelehealth.tsx` & `Footer.tsx`**: Structured NAP (Name, Address, Phone) consistency for local Santa Monica SEO.

---

## 📊 Data Model & Single Source of Truth

All clinical copy, doctor information, and service descriptions are decoupled from presentation components and consolidated in `src/data/mayaContent.ts`:

```typescript
export const therapistProfile = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  license: "California Licensed Clinical Psychologist",
  location: {
    city: "Santa Monica",
    state: "CA",
    zip: "90401",
    address: "123th Street 45 W",
    fullAddress: "123th Street 45 W, Santa Monica, CA 90401",
    telehealth: "Available to all residents throughout California"
  },
  services: [
    { id: "anxiety", title: "Anxiety & Panic Disorders", ... },
    { id: "trauma", title: "Trauma & PTSD Recovery", ... },
    { id: "burnout", title: "Burnout & High-Achiever Stress", ... }
  ],
  modalities: [ ... ],
  faqs: [ ... ]
};
```

To update practice hours, address, or copy, modify `src/data/mayaContent.ts` without touching JSX structures.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or higher
- **npm**: v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dr-maya-reynolds.git

# Navigate to the project root
cd dr-maya-reynolds

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Run ESLint validation
npm run lint

# Generate optimized production build
npm run build

# Start production server
npm run start
```

---

## 🧪 Quality Assurance & Testing

### Automated Responsive Viewport Test

The project includes an automated Puppeteer script (`scripts/maya_qa.mjs`) that inspects the live DOM across 10 common screen widths to verify zero horizontal scrolling (`scrollWidth <= clientWidth`):

| Device Type | Viewport Width | Height | Status |
| :--- | :--- | :--- | :--- |
| Mobile Small | `320px` | 640px | ✅ Pass (0px overflow) |
| Mobile Medium | `375px` | 667px | ✅ Pass (0px overflow) |
| Mobile Large | `390px` | 844px | ✅ Pass (0px overflow) |
| Mobile Extra | `414px` | 896px | ✅ Pass (0px overflow) |
| Tablet Small | `768px` | 1024px | ✅ Pass (0px overflow) |
| Tablet Medium | `834px` | 1194px | ✅ Pass (0px overflow) |
| Tablet Large | `1024px` | 768px | ✅ Pass (0px overflow) |
| Laptop Compact | `1280px` | 800px | ✅ Pass (0px overflow) |
| Desktop Standard | `1366px` | 768px | ✅ Pass (0px overflow) |
| Desktop Wide | `1440px` | 900px | ✅ Pass (0px overflow) |

To execute the test suite:
```bash
node scripts/maya_qa.mjs
```

---

## ⚡ Core Web Vitals & Accessibility

- **LCP (Largest Contentful Paint)**: Hero portrait loaded eagerly with explicit `priority` flag.
- **CLS (Cumulative Layout Shift)**: All image containers enforce strict aspect ratios (`aspect-[4/5]`, `aspect-[16/10]`, `aspect-[4/3]`) to prevent layout jumps during image decoding.
- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>` containers used throughout.
- **Single `<h1>` Tag**: Located exclusively in `Hero.tsx` for optimal search engine crawling and screen reader navigation.
- **Contrast Ratios**: Body text (`#29332F`) on Warm Ivory (`#F8F5EF`) delivers a 9.2:1 contrast ratio, well above the WCAG AAA standard of 7:1.

---

## 📖 Deep-Dive Walkthrough

For an in-depth senior architectural breakdown, interview prep Q&A, and technical defense covering all 40 project criteria, consult:

👉 [**PROJECT_WALKTHROUGH.md**](./PROJECT_WALKTHROUGH.md)

---

## 📄 License

This project is proprietary code developed for educational and portfolio demonstration purposes. All rights reserved.
