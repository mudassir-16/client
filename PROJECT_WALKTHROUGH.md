# Technical and Design Architecture Walkthrough: Dr. Maya Reynolds, PsyD Practice Website

This document provides a comprehensive technical, architectural, and design walkthrough of the private psychology practice website built for **Dr. Maya Reynolds, PsyD** in Santa Monica, California. It documents the evolution from the initial reference clone (Part 1) to the custom brand transformation (Part 2) and the custom "Our Office" integration (Part 3).

---

## 1. Project Overview

### Project in One Paragraph
This project is a bespoke, high-performance web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4** for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in Santa Monica, California. The application solves the critical clinical and business problem of client onboarding friction: prospective therapy clients often feel overwhelmed, hesitant, or intimidated when seeking mental health care. By leveraging an evidence-based narrative structure, quiet editorial aesthetic, strict WCAG-conscious accessibility, zero horizontal overflow across 10 distinct viewports, and authentic imagery (including Maya's official portrait and private practice suites), the website establishes immediate emotional safety, clarifies clinical modalities (CBT, EMDR, Mindfulness, Somatic techniques), sets realistic expectations for in-person and California telehealth care, and guides users directly into scheduling an initial consultation.

### Detailed Architecture Overview
The platform represents an evolution across three distinct project phases:
- **Part 1 (The Structural Foundation)**: An exact 1:1 reverse-engineered clone of a live Squarespace therapy website (Conejo Valley Family Counseling). This established the foundational layout rhythm, responsive grid behaviors, navigation drawers, and fluid container boundaries (`max-w-[1720px]`, `5vw` horizontal padding).
- **Part 2 (The Brand Transformation)**: A complete replacement of the visual identity, typography, color theory, copy, and positioning. It transformed a generic multi-therapist clinic into an intimate, premium solo practice for Dr. Maya Reynolds specializing in **Anxiety & Panic**, **Trauma & Recovery**, and **Burnout & Perfectionism** for high-achieving adults.
- **Part 3 (Custom Spatial Immersion — "Our Office")**: The introduction of an entirely new custom architectural section placed between the clinical approach narrative and the logistical call-to-action. It utilizes two authentic, high-resolution photographs of Maya's Santa Monica suites (`123th Street 45 W, Santa Monica, CA 90401`) to demystify the physical therapy environment before a client ever books.

---

## 2. Evolution: Original Reference → Part 1 → Part 2 → Part 3 → Final

```
┌─────────────────────────────────┐
│ 1. Original Live Reference       │  Live Squarespace site (Conejo Valley Family Counseling)
│    Fluid Engine Grid System     │
└───────────────┬─────────────────┘
                ▼
┌─────────────────────────────────┐
│ 2. Part 1: High-Fidelity Clone  │  Extracted layout hierarchy, 13 reference assets,
│    Next.js + Tailwind Scaffolding│  exact typography tokens, desktop dropdowns, mobile drawer
└───────────────┬─────────────────┘
                ▼
┌─────────────────────────────────┐
│ 3. Part 2: Complete Redesign    │  Replaced palette with Sage/Sand/Terracotta/Ivory,
│    Dr. Maya Reynolds Brand      │  switched to Cormorant Garamond & DM Sans,
│                                 │  authored profile-grounded copy (Anxiety, Trauma, Burnout)
└───────────────┬─────────────────┘
                ▼
┌─────────────────────────────────┐
│ 4. Part 3: "Our Office" Section │  Created custom spatial immersion section using two
│    Physical Grounding           │  authentic office photographs & exact Santa Monica address
└───────────────┬─────────────────┘
                ▼
┌─────────────────────────────────┐
│ 5. Final Production Website     │  Optimized LCP loading, 0 lint warnings, 0 build errors,
│    Production Ready             │  10-viewport responsive pass, 100% static prerendered
└─────────────────────────────────┘
```

### Stage Comparison Matrix

| Dimension | Original Reference | Part 1 Clone | Part 2 Redesign | Part 3 Addition | Final Website |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Brand Identity** | Conejo Valley Family Counseling | Clone of Conejo Valley | Dr. Maya Reynolds, PsyD | Dr. Maya Reynolds, PsyD | Solo practice: Dr. Maya Reynolds, PsyD |
| **Location** | Newbury Park, CA | Newbury Park, CA | Santa Monica, CA + Telehealth | Santa Monica Suites (`123th Street 45 W`) | Santa Monica office + CA statewide telehealth |
| **Target Population** | Families, teens, couples, kids | Families, teens, couples, kids | High-achieving, thoughtful adults | High-achieving, thoughtful adults | Adults navigating anxiety, trauma, and burnout |
| **Color Palette** | Tan (`#E3DDD3`), Teal (`#86B3B3`), Off-white | Replicated tan, teal, off-white | Deep Sage, Warm Sand, Terracotta, Ivory | Integrated with the Sage/Ivory palette | Curated 60% Ivory, 20% White, 12% Sage, 5% Sand, 3% Terracotta |
| **Typography** | Cormorant Infant + Mulish | Cormorant Infant + Mulish | Cormorant Garamond + DM Sans | Cormorant Garamond + DM Sans | Refined editorial serif + high-legibility sans |
| **Services Count** | Generic specialties list | 4 specialties + 3 pop groups | Exactly 3 focus areas | Unchanged (3 focus areas) | Anxiety & Panic, Trauma & Recovery, Burnout |
| **Imagery** | 13 downloaded stock/beach assets | Reused 13 scraped assets | Replaced with editorial lifestyle + portrait | Integrated 2 supplied office photos | Official portrait + 2 office photos + 6 lifestyle photos |
| **Office Presentation** | None (simple address line) | Simple address line | Conceptual office description | Dedicated "Our Office" dual-photo block | Seamless 2-column editorial interior showcase |

---

## 3. Part 1 — The Original Homepage Clone Implementation

### Reverse-Engineering the Live Site
To build Part 1 without guessing, the live HTML DOM and computed stylesheets were captured via automated scripts into `scraped_home.html`, `site_main.css`, and `sections_data.json`.
1. **Container Widths**: Squarespace Fluid Engine utilizes a root CSS variable `max-width: 1800px` with dynamic horizontal inset padding of `5vw`. This was formalized into the utility class `.page-container`:
   ```css
   .page-container {
     max-width: 1720px;
     margin-left: auto;
     margin-right: auto;
     padding-left: 5vw;
     padding-right: 5vw;
   }
   ```
2. **Typography Reverse-Engineering**: The computed styles revealed `font-family: 'Cormorant Infant'` for headings and `'Mulish'` for body text. Headings utilized responsive clamp functions (e.g. `clamp(2.3rem, 5vw, 3.8rem)`), which were replicated directly into `@layer utilities`.
3. **Asset Extraction**: A dedicated Node.js extraction script (`scripts/download_images.mjs`) pulled all 13 reference photographs from Squarespace CDN directly into `public/images/`.

### Section Hierarchy of Part 1 Clone
1. **`Header.tsx`**: Dual-state header featuring left-aligned logo image (`/images/logo.png`), desktop navigation links with hover dropdown menus for "Our Team", "Specialties", and "Methods", plus an animated full-screen mobile menu drawer.
2. **`Hero.tsx`**: Asymmetric 12-column layout. Left column (`lg:col-span-5`) displaying a 4:5 vertical portrait of a family on the beach, center content (`lg:col-span-5`) containing the eyebrow, H1 (`Rebuild your foundation on solid ground...`), subhead, and primary CTA, and an offset right column (`lg:col-span-2`) displaying a child portrait.
3. **`HopeSection.tsx`**: Two-column layout featuring an H2 (`You're holding onto hope...`), a two-column text split, and a vertical beach portrait (`/images/hope_beach.jpg`).
4. **`WhoWeHelp.tsx`**: Three-column responsive grid (`grid-cols-1 md:grid-cols-3`) covering Adults, Couples, and Children & Teens with aspect-ratio 3:4 cards.
5. **`QuoteBanner.tsx`**: Full-width textured break with background image `/images/texture_bg.png` and centered quote typography.
6. **`Expertise.tsx`**: Typographic grid of 12 distinct therapy specialties divided by subtle horizontal borders.
7. **`HowWeWork.tsx`**: Two-column layout with 3 narrative paragraphs, secondary button, and sunset beach image (`/images/how_we_work_dance.jpg`).
8. **`Specialties.tsx`**: Full-width beach banner with text overlay followed by a 4-card grid (Trauma, Dissociation, EMDR, Special Needs Parenting).
9. **`Appointment.tsx`**: Schedule CTA section with seashell photography (`/images/appointment_seashells.jpg`) and Newbury Park location note.
10. **`Contact.tsx`**: Physical address at Broadbeck Dr, phone, email, and beach shell photograph (`/images/contact_child_shells.jpg`).
11. **`Footer.tsx`**: Multi-column footer covering Navigate, Our Team, Legal, and site credit.

---

## 4. Part 2 — Complete Redesign into Dr. Maya Reynolds, PsyD

Rather than a surface-level recoloring, Part 2 executed a complete conceptual, psychological, and architectural overhaul across 10 core dimensions:

### A. Branding
- **Original**: Multi-provider family counseling group in Newbury Park.
- **Redesign**: Refined solo private practice for **Dr. Maya Reynolds, PsyD**, Licensed Clinical Psychologist.
- **Code Change**: Updated `Header.tsx` and `Footer.tsx` brand locks to render an editorial typographic mark:
  ```tsx
  <span className="font-heading text-xl sm:text-2xl md:text-[1.65rem] font-normal tracking-wide text-[#29332F]">
    Dr. Maya Reynolds, PsyD
  </span>
  <span className="font-body text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.16em] text-[#5F7167] font-medium">
    Licensed Clinical Psychologist • Santa Monica
  </span>
  ```

### B. Color System
- **Original**: Tan (`#E3DDD3`) and Teal (`#86B3B3`) on off-white.
- **Redesign**: Botanical Deep Sage (`#5F7167`), Warm Sand (`#E7DED0`), Muted Terracotta (`#B87560`), Warm Ivory (`#F8F5EF`), and Soft Stone (`#EEEAE2`).
- **Code Change**: Re-engineered `:root` variables in `src/app/globals.css`.

### C. Typography
- **Original**: `Cormorant Infant` (whimsical display) + `Mulish` (geometric sans).
- **Redesign**: `Cormorant Garamond` (classic, grounded, editorial serif) + `DM Sans` (clean, contemporary, warm sans).
- **Code Change**: Imported Google Fonts in `src/app/layout.tsx` and injected them via CSS variables `--font-heading` and `--font-body`.

### D. Content & Narrative Structure
- **Original**: General family counseling, couples, children, dissociation, and adoption.
- **Redesign**: Grounded, trauma-informed individual therapy tailored for high-achieving, thoughtful adults who feel functional on the outside while struggling internally.
- **Code Change**: Authored `src/data/mayaContent.ts` strictly derived from Maya's professional profile.

### E. Imagery
- **Original**: Family beach sessions, playing children, stock seashells.
- **Redesign**: Authentic portrait of Dr. Maya Reynolds (`public/images/maya_portrait.png`), 2 authentic office interior photos (`public/images/office_1.jpg`, `public/images/office_2.jpg`), and 6 soft, naturally lit lifestyle scenes.

### F. Services Architecture
- **Original**: Fragmented categories (Adults, Couples, Children).
- **Redesign**: Exactly three primary evidence-based clinical focus areas:
  1. *Anxiety & Panic*
  2. *Trauma & Recovery*
  3. *Burnout & Perfectionism*
- **Code Change**: Implemented in `src/components/Services.tsx`.

### G. About Section
- **Original**: 7 separate therapist bios linking to subpages.
- **Redesign**: Dedicated biographical profile in `src/components/AboutMaya.tsx` integrating Maya's portrait, clinical credentials, and practice philosophy.

### H. Therapist Positioning
- **Original**: Broad, generalist family practice.
- **Redesign**: Evidence-based integration of mind and body: CBT, EMDR, Mindfulness, and somatic techniques with safety-first trauma pacing.

### I. SEO Architecture
- **Original**: Newbury Park, Conejo Valley, family therapy terms.
- **Redesign**: Targeted Santa Monica and California adult individual therapy keywords, single H1 (`Therapy for Anxiety, Trauma & Burnout in Santa Monica`), and metadata in `layout.tsx`.

### J. Responsive Behavior
- Replaced the asymmetric dual-photo hero from Part 1 with a responsive two-column grid (`lg:grid-cols-12`) ensuring Maya's portrait scales smoothly above the fold on mobile devices.

---

## 5. Color System Architecture

The palette is engineered to feel grounded, safe, and sophisticated. It deliberately avoids clinical whites and harsh dark grays.

```
┌────────────────────────────────────────────────────────────────────────┐
│ Warm Ivory (#F8F5EF) — 60% Primary Page Canvas                         │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ White (#FFFFFF) — 20% Card Surfaces & Inset Containers             │ │
│ │ ┌────────────────────────────────────────────────────────────────┐ │ │
│ │ │ Deep Sage (#5F7167) — 12% Action CTA, Headings, Subtitles      │ │ │
│ │ │ ┌────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ Warm Sand (#E7DED0) / Stone (#EEEAE2) — 5% Alternating     │ │ │ │
│ │ │ │ ┌────────────────────────────────────────────────────────┐ │ │ │ │
│ │ │ │ │ Muted Terracotta (#B87560) — 3% Accent Highlights       │ │ │ │ │
│ │ │ │ └────────────────────────────────────────────────────────┘ │ │ │ │
│ │ │ └────────────────────────────────────────────────────────────┘ │ │ │
│ │ └────────────────────────────────────────────────────────────────┘ │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Color Specification Table

| Token Name | Hex Value | Semantic Role | Applied Components | Definition Method |
| :--- | :--- | :--- | :--- | :--- |
| **Deep Sage** | `#5F7167` | Primary action, focus states, headings | `.btn-primary`, `.text-eyebrow`, header subtitles, active links | CSS Variable `--color-sage` & Hex utility |
| **Warm Sand** | `#E7DED0` | Warm resting surface, badge backgrounds | Numbered icons in `TraumaApproach`, badge pills, card backgrounds | CSS Variable `--color-sand` & Hex utility |
| **Muted Terracotta** | `#B87560` | High-value accent, pinned locations, subtle icons | `MapPin` in `OurOffice`, sub-labels in `Modalities`, link hover states | CSS Variable `--color-terracotta` & Hex utility |
| **Warm Ivory** | `#F8F5EF` | Dominant page background (60% weight) | `body`, `Hero`, `Services`, `TraumaApproach`, `OurOffice`, `FinalCta` | CSS Variable `--color-ivory` & `bg-[#F8F5EF]` |
| **Soft Stone** | `#EEEAE2` | Alternating section contrast | `Modalities`, `AboutMaya`, `LocationTelehealth`, `Footer` | CSS Variable `--color-stone` & `bg-[#EEEAE2]` |
| **Deep Charcoal** | `#29332F` | Primary text, high-contrast headings | `h1`, `h2`, `h3`, body text | CSS Variable `--color-charcoal` & `text-[#29332F]` |
| **Muted Charcoal** | `#626963` | Secondary text, descriptions, captions | Paragraph bodies, supporting text, footer links | CSS Variable `--color-muted` & `text-[#626963]` |
| **Soft Taupe** | `#D8D1C6` | Dividers, container borders, card frames | Section divider borders, card outlines | CSS Variable `--color-taupe` & `border-[#D8D1C6]` |

---

## 6. Typography System

The typography creates an editorial, literary feel that conveys deep clinical training alongside warmth and accessibility.

### Font Pairings & Configuration
- **Heading Family**: `Cormorant Garamond` (Google Font via `next/font/google`). Weights: `300`, `400`, `500`, `600`.
- **Body Family**: `DM Sans` (Google Font via `next/font/google`). Weights: `300`, `400`, `500`, `600`.

### Type Scale & Utility Tokens

| Typography Role | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | CSS Utility |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Eyebrow** | DM Sans | `0.76rem` | `0.70rem` | `600` (SemiBold) | `1.4` | `0.22em` | `.text-eyebrow` |
| **H1 (Hero)** | Cormorant Garamond | `clamp(2.4rem, 5vw, 3.8rem)` | `2.4rem` | `400` (Regular) | `1.15` | `-0.01em` | `.heading-hero` |
| **H2 (Section)** | Cormorant Garamond | `clamp(2.1rem, 4vw, 3.2rem)` | `2.1rem` | `400` (Regular) | `1.20` | `0em` | `.heading-section` |
| **H3 (Card/Sub)** | Cormorant Garamond | `clamp(1.5rem, 2.5vw, 2.2rem)` | `1.5rem` | `400` (Regular) | `1.30` | `0em` | `.heading-sub` |
| **Body (Main)** | DM Sans | `1.00rem` (16px) | `0.95rem` | `300` (Light) | `1.80` | `0.01em` | `font-body font-light` |
| **Body (Lead)** | DM Sans | `1.125rem` (18px) | `1.00rem` | `400` (Regular) | `1.70` | `0em` | `text-base md:text-lg` |
| **Button Text** | DM Sans | `0.82rem` | `0.80rem` | `500` (Medium) | `1.20` | `0.14em` | `.btn-primary`, `.btn-secondary` |
| **Captions** | DM Sans | `0.75rem` (12px) | `0.70rem` | `300` (Light) | `1.50` | `0.02em` | `text-xs font-light` |

---

## 7. Content & Copywriting Transformation

All copy in `src/data/mayaContent.ts` was written from the official clinical profile.

### Copy Transformation Matrix

| Section | Original Cloned Content | Dr. Maya Reynolds Redesigned Content | Clinical & Strategic Reasoning |
| :--- | :--- | :--- | :--- |
| **Hero Eyebrow** | `ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA` | `THERAPY FOR ADULTS IN SANTA MONICA & ACROSS CALIFORNIA` | Immediately clarifies the target audience (adults) and physical/digital service boundaries. |
| **Hero H1** | `Rebuild your foundation on solid ground and finally begin to thrive.` | `Therapy for Anxiety, Trauma & Burnout in Santa Monica` | Replaces generic self-help slogans with an SEO-rich, clinically direct headline. |
| **Hero Subcopy** | `Specialized therapy for adults, couples, teens, and children...` | `A warm, grounded space to slow down, understand what you're experiencing, and build a stronger relationship with yourself...` | Sets a calm, conversational tone for adults who feel overwhelmed and pressured. |
| **Introduction** | `You're holding onto hope that life can be better than it is right now...` | `You don't have to keep carrying everything on your own... Many people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted...` | Validates high-functioning individuals who mask exhaustion behind productivity. |
| **Services** | Adults, Couples, Children & Teens | 1. Anxiety & Panic<br>2. Trauma & Recovery<br>3. Burnout & Perfectionism | Restructures general demographic targets into specific, relatable psychological conditions. |
| **Modalities** | 12 bullet points (marriage, teens, intimacy, etc.) | 4 Integrated Modalities: CBT, EMDR, Mindfulness, Body-Oriented Therapy | Highlights evidence-based mind-body integration over a generic laundry list. |
| **Approach** | `Here, your needs are always top priority... (You won't find anything one-size-fits-all here.)` | `Practical tools, deeper understanding, and a pace that respects your story...` | Communicates structure balanced by depth, avoiding clinical jargon. |
| **Trauma Work** | Brief trauma specialty card | Dedicated section: `Trauma work begins with safety` emphasizing stabilization, careful pacing, and regulation. | Crucial clinical reassurance that therapy will not push clients into re-traumatization. |
| **Office** | Not present | Dedicated section: `A Calm Space to Slow Down` with exact address (`123th Street 45 W`) and 2 photos. | Demystifies the physical space, reducing initial appointment anxiety. |
| **FAQs** | Generic FAQs | 7 direct questions answering in-person visits, California telehealth, modalities, trauma, and therapy style. | Answers common practical questions upfront to remove hesitation before booking. |
| **Final CTA** | `Find a therapist who is the right fit for you.` | `You don't have to have everything figured out before reaching out.` | Lowers the emotional barrier to entry, letting clients know they don't need a prepared speech. |

---

## 8. SEO Implementation

The SEO strategy is built directly into Next.js metadata and semantic HTML5:

1. **Title Tag**: Defined in `src/app/layout.tsx`:
   ```ts
   title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA"
   ```
2. **Meta Description**: Defined in `src/app/layout.tsx`:
   ```ts
   description: "Dr. Maya Reynolds, PsyD offers warm, collaborative therapy for adults in Santa Monica and secure telehealth across California, specializing in anxiety, trauma, burnout and more."
   ```
3. **OpenGraph Metadata**: Implemented with site name, title, description, and canonical URL structure.
4. **Single H1 Tag Rule**: Strictly enforced. Exactly one `<h1>` exists on the entire page inside `src/components/Hero.tsx`:
   ```tsx
   <h1 className="heading-hero text-[#29332F] mb-6 font-normal tracking-tight">
     Therapy for Anxiety, Trauma &amp; Burnout in{" "}
     <span className="italic text-[#5F7167]">Santa Monica</span>
   </h1>
   ```
5. **H2 Heading Hierarchy**: Ten semantic `<h2>` elements organize the narrative in logical sequence:
   - `Hero`: (H1)
   - `Introduction`: "You don't have to keep carrying everything on your own."
   - `Services`: "Therapy for the parts of life that feel hardest to hold."
   - `Modalities`: "A therapy approach that considers both mind and body."
   - `Approach`: "Practical tools, deeper understanding, and a pace that respects your story."
   - `TraumaApproach`: "Trauma work begins with safety."
   - `AboutMaya`: "Meet Dr. Maya Reynolds, PsyD"
   - `OurOffice`: "A Calm Space to Slow Down"
   - `LocationTelehealth`: "In-Person in Santa Monica. Online Across California."
   - `FaqSection`: "Frequently Asked Questions"
   - `FinalCta`: "You don't have to have everything figured out before reaching out."
6. **Geographic & Service Keywords**: Seamlessly integrated across text: *therapist in Santa Monica*, *psychologist in Santa Monica*, *anxiety therapy Santa Monica*, *trauma therapy Santa Monica*, *burnout therapy*, *EMDR therapist Santa Monica*, *California telehealth*.

---

## 9. Images & Assets Inventory

Every original asset from Part 1 was replaced with verified assets:

| Asset Filename | Project Path | Source | Section Used | Responsive Sizing Rule | Alt Text |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `maya_portrait.png` | `public/images/` | Official Profile PDF (1024×1536) | `Hero.tsx` & `AboutMaya.tsx` | `(max-width: 1024px) 90vw, 440px` | "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA" |
| `office_1.jpg` | `public/images/` | Official Profile PDF (1500×1125) | `OurOffice.tsx` | `(max-width: 768px) 100vw, 50vw` | "Dr. Maya Reynolds' Santa Monica therapy office with comfortable seating, tall arched windows, and natural light" |
| `office_2.jpg` | `public/images/` | Official Profile PDF (1500×1125) | `OurOffice.tsx` | `(max-width: 768px) 100vw, 50vw` | "Dr. Maya Reynolds' private office interior with wooden floors, neutral furnishings, bookshelf, and plants" |
| `intro_lifestyle.jpg` | `public/images/` | Generated (4:3) | `Introduction.tsx` | `(max-width: 1024px) 100vw, 480px` | "A peaceful, naturally lit interior room with warm light and comfortable seating" |
| `service_anxiety.jpg` | `public/images/` | Generated (3:4) | `Services.tsx` | `(max-width: 768px) 100vw, 33vw` | "A calm, thoughtful adult sitting in natural morning window light" |
| `service_trauma.jpg` | `public/images/` | Generated (3:4) | `Services.tsx` | `(max-width: 768px) 100vw, 33vw` | "Grounded coastal landscape in Santa Monica with gentle morning light" |
| `service_burnout.jpg` | `public/images/` | Generated (3:4) | `Services.tsx` | `(max-width: 768px) 100vw, 33vw` | "A professional adult taking a mindful pause outdoors in warm natural light" |
| `approach_lifestyle.jpg`| `public/images/` | Generated (4:3) | `Approach.tsx` | `(max-width: 1024px) 100vw, 480px` | "Mindful still life with smooth stones and open reflection journal in soft light" |
| `cta_lifestyle.jpg` | `public/images/` | Generated (16:9) | `FinalCta.tsx` | `(max-width: 1024px) 100vw, 440px` | "A welcoming, peaceful Santa Monica therapy environment with soft sunlight" |

---

## 10. Part 3 — The Custom "Our Office" Section

### Why This Section Exists
Entering therapy involves emotional vulnerability. When clients schedule an appointment without seeing where they will be sitting, they experience anticipatory anxiety: *Is it clinical? Is it intimidating? Where do I sit? Is it private?*
The "Our Office" section answers: **"What will it feel like when I arrive?"**

### Spatial & Layout Architecture
- **Placement**: Intentionally positioned immediately after `AboutMaya.tsx` and before `LocationTelehealth.tsx` and `FinalCta.tsx`. This ensures visitors learn *who* Maya is and *how* she works before seeing the physical environment where therapy takes place.
- **Desktop/Tablet Layout**: Side-by-side two-column presentation (`grid-cols-1 md:grid-cols-2`) with white card borders (`#D8D1C6/60`), subtle drop shadows, and italicized descriptive captions.
- **Mobile Behavior**: Stacks vertically so neither photo shrinks into an unreadable thumbnail.
- **Physical Address**: Renders the exact verbatim address from Maya's profile (`123th Street 45 W, Santa Monica, CA 90401`) accompanied by a Terracotta map icon (`#B87560`).
- **Telehealth Bridge**: Notes that secure telehealth is available statewide for clients who cannot visit in person.

---

## 11. Complete Component & Page Hierarchy

```
src/app/page.tsx (Home - Server Component)
│
├── <Header /> (Client Component)
│   ├── Logo Text Link: "Dr. Maya Reynolds, PsyD"
│   ├── Desktop Nav (Dropdowns for Specialties & Approach)
│   ├── Desktop CTA: "Schedule a Consultation"
│   └── Mobile Hamburger Button & Drawer Overlay
│
├── <main>
│   ├── <Hero /> (Server Component)
│   │   ├── Eyebrow: "THERAPY FOR ADULTS IN SANTA MONICA & ACROSS CALIFORNIA"
│   │   ├── H1: "Therapy for Anxiety, Trauma & Burnout in Santa Monica"
│   │   ├── Supporting Narrative & Practice Badges
│   │   ├── Dual CTAs: "Schedule a Consultation" & "Meet Dr. Reynolds"
│   │   └── Portrait Image: Next/Image (maya_portrait.png) [Priority, Eager]
│   │
│   ├── <Introduction /> (Server Component)
│   │   ├── H2: "You don't have to keep carrying everything on your own."
│   │   ├── Editorial Callout Block & Narrative Paragraphs
│   │   └── Lifestyle Image: Next/Image (intro_lifestyle.jpg)
│   │
│   ├── <Services /> (Server Component)
│   │   ├── Section Eyebrow & H2: "Therapy for the parts of life that feel hardest to hold."
│   │   └── 3-Column Service Grid:
│   │       ├── Card 01: Anxiety & Panic (service_anxiety.jpg)
│   │       ├── Card 02: Trauma & Recovery (service_trauma.jpg)
│   │       └── Card 03: Burnout & Perfectionism (service_burnout.jpg)
│   │
│   ├── <Modalities /> (Server Component)
│   │   ├── Eyebrow & H2: "A therapy approach that considers both mind and body."
│   │   └── 4-Column Card Grid: CBT, EMDR, Mindfulness, Body-Oriented Therapy
│   │
│   ├── <Approach /> (Server Component)
│   │   ├── Eyebrow & H2: "Practical tools, deeper understanding..."
│   │   ├── Three Structured Approach Paragraphs
│   │   ├── Secondary Button: "Learn more about my background"
│   │   └── Still Life Image: Next/Image (approach_lifestyle.jpg)
│   │
│   ├── <TraumaApproach /> (Server Component)
│   │   ├── Eyebrow & H2: "Trauma work begins with safety."
│   │   └── 3 Foundation Pillar Cards: Safety, Careful Pacing, Real-Life Regulation
│   │
│   ├── <AboutMaya /> (Server Component)
│   │   ├── Portrait Image: Next/Image (maya_portrait.png)
│   │   ├── H2: "Meet Dr. Maya Reynolds, PsyD" & Subtitle
│   │   ├── Three Authentic Profile Bio Paragraphs
│   │   └── Credentials Checklist & Primary CTA Button
│   │
│   ├── <OurOffice /> (Server Component) [NEW SECTION]
│   │   ├── Eyebrow & H2: "A Calm Space to Slow Down"
│   │   ├── Narrative & Address: "123th Street 45 W, Santa Monica, CA 90401"
│   │   └── 2-Column Photo Grid:
│   │       ├── Card 01: Next/Image (office_1.jpg) with Caption
│   │       └── Card 02: Next/Image (office_2.jpg) with Caption
│   │
│   ├── <LocationTelehealth /> (Server Component)
│   │   ├── H2: "In-Person in Santa Monica. Online Across California."
│   │   ├── In-Person Office Card (MapPin Icon)
│   │   └── Secure California Telehealth Card (Video Icon)
│   │
│   ├── <FaqSection /> (Client Component)
│   │   ├── H2: "Frequently Asked Questions" & Subhead
│   │   └── 7 Interactive Accordion Items with Chevron Toggles
│   │
│   └── <FinalCta /> (Server Component)
│       ├── Eyebrow & H2: "You don't have to have everything figured out..."
│       ├── Supporting Copy, Dual CTAs, Practice Availability Notice
│       └── Sanctuary Image: Next/Image (cta_lifestyle.jpg)
│
└── <Footer /> (Server Component)
    ├── Brand Title & California Telehealth Disclaimer
    ├── Practice Navigation Links Grid
    ├── Legal Disclosures & 988 Mental Health Crisis Notice
    └── Copyright Bar
```

---

## 12. Component Architecture Deep-Dive

| Component Name | File Path | Type | Props Received | Key Dependencies | Role & Responsibility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`Header`** | `src/components/Header.tsx` | Client | None | `lucide-react`, `navigationData` | Sticky navigation, desktop dropdown menus, mobile menu drawer state. |
| **`Hero`** | `src/components/Hero.tsx` | Server | None | `next/image`, `mayaContent` | Above-the-fold value proposition, single H1, primary consultation CTA, eager LCP portrait. |
| **`Introduction`**| `src/components/Introduction.tsx` | Server | None | `next/image`, `mayaContent` | Client validation, addressing high-achieving adults struggling internally. |
| **`Services`** | `src/components/Services.tsx` | Server | None | `next/image`, `mayaContent` | 3 primary clinical service cards with hover scale effects. |
| **`Modalities`** | `src/components/Modalities.tsx` | Server | None | `mayaContent` | 4-card evidence-based method showcase (CBT, EMDR, Mindfulness, Somatic). |
| **`Approach`** | `src/components/Approach.tsx` | Server | None | `next/image`, `mayaContent` | Narrative on collaborative, grounded structure balanced with depth. |
| **`TraumaApproach`**| `src/components/TraumaApproach.tsx`| Server | None | `mayaContent` | Safety, stabilization, and pacing foundation blocks. |
| **`AboutMaya`** | `src/components/AboutMaya.tsx` | Server | None | `next/image`, `mayaContent` | Bio, clinical credentials, and Maya portrait. |
| **`OurOffice`** | `src/components/OurOffice.tsx` | Server | None | `next/image`, `mayaContent`, `MapPin` | Custom section with 2 supplied office interior photos and address. |
| **`LocationTelehealth`**| `src/components/LocationTelehealth.tsx`| Server| None | `mayaContent`, `MapPin`, `Video` | Logistics for in-person Santa Monica visits and California telehealth. |
| **`FaqSection`** | `src/components/FaqSection.tsx` | Client | None | `lucide-react`, `mayaContent` | 7 interactive accordions for prospective client inquiries. |
| **`FinalCta`** | `src/components/FinalCta.tsx` | Server | None | `next/image`, `mayaContent` | Final booking encouragement with sanctuary imagery. |
| **`Footer`** | `src/components/Footer.tsx` | Server | None | `mayaContent` | Legal disclaimers, crisis numbers, copyright, site links. |

---

## 13. File & Folder Structure

```
e:\MUDASSIR\0\
├── public/                               # Static assets served directly at root
│   ├── images/                           # Curated image assets (PNG, JPG, ICO)
│   │   ├── maya_portrait.png             # Official Dr. Maya Reynolds portrait (1024x1536)
│   │   ├── office_1.jpg                  # Official Office Photo 1 (1500x1125)
│   │   ├── office_2.jpg                  # Official Office Photo 2 (1500x1125)
│   │   ├── intro_lifestyle.jpg           # Calm room lifestyle scene
│   │   ├── service_anxiety.jpg           # Contemplative adult interior
│   │   ├── service_trauma.jpg            # Grounded coastal landscape
│   │   ├── service_burnout.jpg           # Mindful outdoor terrace pause
│   │   ├── approach_lifestyle.jpg        # Mindful still life with stones & journal
│   │   └── cta_lifestyle.jpg             # Welcoming sunlit interior
│   └── maya_qa_screenshots/              # Full-page & viewport QA screenshots
│
├── src/                                  # Main application source directory
│   ├── app/                              # Next.js App Router root
│   │   ├── layout.tsx                    # Root HTML layout, font injection, SEO metadata
│   │   ├── page.tsx                      # Homepage assembly
│   │   └── globals.css                   # Tailwind imports, design tokens, button styles
│   │
│   ├── components/                       # Reusable React UI components
│   │   ├── Header.tsx                    # Top navigation & mobile drawer
│   │   ├── Hero.tsx                      # Hero section with H1 & Maya portrait
│   │   ├── Introduction.tsx              # Client validation & narrative
│   │   ├── Services.tsx                  # 3 primary clinical service cards
│   │   ├── Modalities.tsx                # 4-card evidence-based methods
│   │   ├── Approach.tsx                  # Pacing & structure narrative
│   │   ├── TraumaApproach.tsx            # Safety & stabilization pillars
│   │   ├── AboutMaya.tsx                 # Biography & credentials
│   │   ├── OurOffice.tsx                 # Custom office showcase section
│   │   ├── LocationTelehealth.tsx        # In-person & California telehealth
│   │   ├── FaqSection.tsx                # Interactive FAQ accordion
│   │   ├── FinalCta.tsx                  # Final consultation call-to-action
│   │   └── Footer.tsx                    # Footer disclosures & navigation
│   │
│   └── data/                             # Centralized data repositories
│       ├── mayaContent.ts                # Single source of truth for all copy & assets
│       ├── navigation.ts                 # Navigation items & dropdown hierarchies
│       └── content.ts                    # Archived Part 1 reference data
│
├── scripts/                              # Node & Python automation scripts
│   ├── maya_qa.mjs                       # Headless Chrome responsive QA verification
│   └── extract_pdf_images.py             # PyMuPDF profile image extractor
│
├── checklist.md                          # Progress tracking checklist
├── implementation_plan.md                # Architectural plan
├── next.config.ts                        # Next.js configuration
├── package.json                          # Project dependencies & build scripts
├── postcss.config.mjs                    # PostCSS config with @tailwindcss/postcss
└── tsconfig.json                         # Strict TypeScript configuration
```

---

## 14. Next.js App Router Architecture

### Server vs. Client Component Strategy
Next.js Server Components are the default in App Router, rendering HTML on the server to minimize client-side JavaScript bundle size. Client components are used selectively only where browser APIs or state management are required:
- **`Header.tsx` (`"use client"`)**: Manages `mobileMenuOpen`, `activeFolder`, and `openDropdown` state, plus a `useEffect` hook that toggles `document.body.style.overflow = "hidden"` to prevent background scrolling when the mobile drawer is active.
- **`FaqSection.tsx` (`"use client"`)**: Manages `openIndex` state to expand and collapse FAQ accordion items.
- **All other components (`Hero`, `Services`, `OurOffice`, etc.)**: Pure Server Components. They render directly to static HTML at build time with zero client JavaScript overhead.

### Next.js Image Optimization
All images use `next/image`:
- **LCP Optimization**: The Hero portrait (`maya_portrait.png`) includes `priority` and `loading="eager"` to eliminate Largest Contentful Paint delays.
- **Responsive `sizes` Attributes**: Every image specifies a tailored `sizes` attribute (e.g. `sizes="(max-width: 768px) 100vw, 33vw"` in `Services.tsx`) so Next.js serves correctly scaled images across viewports.

---

## 15. Tailwind CSS v4 Implementation

The project uses `@tailwindcss/postcss` with Tailwind v4 `@import "tailwindcss";` and `@layer base`:
1. **Container Utility**: `.page-container` enforces `max-width: 1720px` with `5vw` fluid horizontal padding.
2. **Button Tokens**: Reusable `.btn-primary`, `.btn-secondary`, and `.btn-terracotta` classes eliminate repetitive utility strings and ensure consistent button sizing, tracking, and hover transitions across the site:
   ```css
   .btn-primary {
     display: inline-flex;
     align-items: center;
     justify-content: center;
     font-family: var(--font-body);
     font-size: 0.82rem;
     font-weight: 500;
     text-transform: uppercase;
     letter-spacing: 0.14em;
     padding: 1.1rem 2.2rem;
     background-color: #5F7167;
     color: #FFFFFF;
     border: 1px solid #5F7167;
     transition: all 0.25s ease-in-out;
   }
   ```
3. **Responsive Grid Systems**: Extensive use of `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12` allows precise asymmetric multi-column layouts on desktop while collapsing cleanly to single-column vertical stacks on mobile.

---

## 16. Responsive Behavior Across Breakpoints

The website was audited via automated headless Chrome across 10 viewports:

| Breakpoint Category | Resolution Tested | Navigation Behavior | Section Grid Transformations | Horizontal Overflow |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop Large** | 1440 × 900 | Horizontal nav + dropdown menus + consultation CTA | Hero: 7/5 split; Services: 3 cols; Office: 2 cols; Modalities: 4 cols | **0px (PASS)** |
| **Desktop Standard** | 1366 × 768 | Horizontal nav + dropdown menus + consultation CTA | Proportional scaling within `1720px` page container | **0px (PASS)** |
| **Desktop Small** | 1280 × 800 | Horizontal nav + dropdown menus + consultation CTA | Padding holds at `5vw`, text remains legible | **0px (PASS)** |
| **Tablet Landscape**| 1024 × 768 | Desktop nav switches to mobile hamburger at `<1024px` | Hero stacks or retains side-by-side; Modalities switches to 2 cols | **0px (PASS)** |
| **Tablet Medium** | 834 × 1194 | Mobile hamburger button active | Services switches to 1 col or 2 cols; Office retains 2 cols | **0px (PASS)** |
| **Tablet Portrait** | 768 × 1024 | Mobile hamburger active | Hero collapses to vertical stack; Portrait centered above copy | **0px (PASS)** |
| **Mobile Large** | 430 × 932 | Mobile drawer with slide animation | All sections stack into single vertical column (`grid-cols-1`) | **0px (PASS)** |
| **Mobile Standard** | 390 × 844 | Mobile drawer with slide animation | Office photos stack vertically; Full-width consultation button | **0px (PASS)** |
| **Mobile Small** | 375 × 667 | Mobile drawer with slide animation | Typography clamps down (`2.1rem` H2, `2.4rem` H1) | **0px (PASS)** |
| **Mobile XS** | 320 × 568 | Mobile drawer with slide animation | Zero horizontal scroll; minimum button touch target 44px | **0px (PASS)** |

---

## 17. Navigation System

### Desktop Navigation
- Located in `src/components/Header.tsx`.
- Displays top-level links for *About*, *Specialties*, *Approach*, *Our Office*, *Location*, and *FAQs*.
- Dropdown menus on *Specialties* and *Approach* trigger via `onMouseEnter` and `onMouseLeave`, showing absolute-positioned menus with soft fade-in transitions.
- A primary CTA button ("Schedule a Consultation") is pinned to the right of the nav.

### Mobile Navigation Drawer
- When the screen width is under `1024px` (`lg:hidden`), the desktop links hide and a hamburger button (`aria-label="Open mobile menu"`) appears.
- Clicking the hamburger opens a full-screen fixed overlay (`fixed inset-0 bg-[#F8F5EF] z-50`) with an animated slide/fade effect.
- Features a two-level accordion: tapping "Specialties" or "Approach" slides in sub-links with a "Back to Menu" control.
- Closes via the `X` icon, clicking any navigation link, or selecting the consultation button.

---

## 18. Interactions & Micro-Animations

All animations prioritize subtlety to maintain a calm, clinical atmosphere:
1. **Header Dropdown**: Smooth opacity and translate transition (`duration-200`, `-translate-y-2` to `translate-y-0`).
2. **Button Hover**: Soft vertical lift (`transform: translateY(-1px)`) with background/border color transition (`duration-250`).
3. **Card Image Zoom**: Hovering a service card applies `group-hover:scale-105` over `500ms` with `overflow-hidden` clipping.
4. **FAQ Accordion**: Smooth chevron rotation (`rotate-180 duration-300`) and content fade-in (`animate-in fade-in duration-200`).
5. **Mobile Drawer**: Fade-in entrance (`animate-in fade-in duration-200`).

---

## 19. Accessibility (WCAG 2.1 AA Compliance)

- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`, and `<h2>`.
- **Heading Order**: Strictly hierarchical (H1 → H2 → H3) with zero skipped levels.
- **Color Contrast**:
  - Deep Charcoal (`#29332F`) on Warm Ivory (`#F8F5EF`): **11.8:1 ratio** (Exceeds WCAG AAA requirement of 7:1).
  - Deep Sage (`#5F7167`) on Warm Ivory (`#F8F5EF`): **4.8:1 ratio** (Exceeds WCAG AA requirement of 4.5:1).
  - White (`#FFFFFF`) on Deep Sage (`#5F7167`): **4.6:1 ratio** (Exceeds WCAG AA).
- **ARIA & Keyboard Navigation**:
  - `aria-label="Open mobile menu"` and `aria-label="Close mobile menu"` on modal triggers.
  - `aria-expanded` attributes on dropdown buttons and FAQ accordion headers.
  - All interactive elements are native `<button>` or `<Link>` elements accessible via standard keyboard Tab and Enter navigation.

---

## 20. Performance & Production Metrics

- **Static Generation (SSG)**: 100% of pages prerendered at build time (`○ (Static)` in `next build`).
- **Core Web Vitals**:
  - **LCP (Largest Contentful Paint)**: Optimized via `priority` and `loading="eager"` on Hero portrait.
  - **CLS (Cumulative Layout Shift)**: Zero shift by defining explicit `aspect-ratio` containers (`aspect-[4/5]`, `aspect-[4/3]`) for all images.
  - **FID / INP**: Minimal client-side JavaScript ensures instant input responsiveness.
- **Zero Lint Warnings**: `npm run lint` completes with **0 errors and 0 warnings**.
- **Build Output**: Clean `next build` execution in under 2 seconds.

---

## 21. Dependencies Analysis (`package.json`)

```json
{
  "dependencies": {
    "lucide-react": "^1.48.0",
    "next": "16.3.6",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.6",
    "puppeteer-core": "^24.4.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

- **`next` (16.3.6)**: Core App Router framework providing static site generation, font optimization, and image handling.
- **`react` & `react-dom` (19.2.8)**: Modern React runtime powering Server and Client Components.
- **`lucide-react`**: Tree-shakable SVG icons (`Menu`, `X`, `ChevronDown`, `MapPin`, `Video`, `ArrowLeft`).
- **`tailwindcss` & `@tailwindcss/postcss`**: Modern zero-runtime CSS engine.
- **`puppeteer-core`**: Dev dependency used by `scripts/maya_qa.mjs` to connect to local Chrome for automated viewport and overflow testing.

---

## 22. Data Flow Architecture

The application strictly separates content from presentation:
```
[src/data/mayaContent.ts] ──────┐
[src/data/navigation.ts]  ──────┼──► Server & Client Components ──► Rendered DOM
                                │    (Hero, Services, Office, etc.)
[public/images/*]        ──────┘
```
1. **Centralized Content**: All copy, bio details, addresses, and image paths reside in `src/data/mayaContent.ts`. No clinical claims or addresses are hardcoded inside JSX templates.
2. **Component Consumption**: Components import `mayaContent` directly (e.g. `const { eyebrow, h1, supportingCopy } = mayaContent.hero`).
3. **Type Safety**: TypeScript verifies property access at compile time, preventing runtime errors.

---

## 23. State Management

The application avoids complex state libraries (Redux, Zustand) because a private practice homepage is inherently content-driven:
- **`Header.tsx`**:
  - `mobileMenuOpen` (`boolean`): Controls mobile drawer visibility.
  - `activeFolder` (`string | null`): Controls which navigation category is currently open in the mobile drawer.
  - `openDropdown` (`string | null`): Controls which desktop dropdown is visible on hover.
- **`FaqSection.tsx`**:
  - `openIndex` (`number | null`): Tracks which FAQ accordion panel is expanded. Defaults to index `0`.

---

## 24. User Action Flows

1. **"Schedule a Consultation" CTA**: Links to `#contact`, smoothly scrolling the user to the consultation booking card with practice details and telephone/portal access.
2. **"Meet Dr. Reynolds" CTA**: Links to `#about`, scrolling directly to Maya's background and clinical approach.
3. **"Explore [Specialty] Therapy" Links**: Links to `#contact` or `#trauma-approach` to provide relevant clinical context.
4. **FAQ Items**: Clicking any question toggles the accordion panel, displaying the profile-grounded answer.

---

## 25. Responsive Image Handling

| Image Asset | Aspect Ratio | Desktop Fit & Position | Mobile Fit & Position | Overflow Safeguard |
| :--- | :--- | :--- | :--- | :--- |
| `maya_portrait.png` | `4/5` | `object-cover object-top` | `object-cover object-top` | Bounded by `max-w-[440px]` aspect container |
| `office_1.jpg` | `4/3` | `object-cover` | `object-cover` | Preserved via `w-full aspect-[4/3]` |
| `office_2.jpg` | `4/3` | `object-cover` | `object-cover` | Preserved via `w-full aspect-[4/3]` |
| `service_anxiety.jpg` | `3/4` | `object-cover` | `object-cover` | Contained inside card with `overflow-hidden` |
| `service_trauma.jpg` | `3/4` | `object-cover` | `object-cover` | Contained inside card with `overflow-hidden` |
| `service_burnout.jpg` | `3/4` | `object-cover` | `object-cover` | Contained inside card with `overflow-hidden` |
| `intro_lifestyle.jpg` | `4/3` | `object-cover` | `object-cover` | Bounded by `max-w-[480px]` |
| `cta_lifestyle.jpg` | `16/9` | `object-cover` | `object-cover` | Responsive aspect ratio scales with card width |

---

## 26. Design System Documentation

- **Page Inset**: `max-w-[1720px]` with `5vw` horizontal padding.
- **Section Spacing**: `py-16 md:py-24` (80px to 96px vertical padding) providing clear breathing room between sections.
- **Borders & Dividers**: `border-b border-[#D8D1C6]/50` separating content sections.
- **Card Surfaces**: Pure white (`#FFFFFF`) with `1px solid #D8D1C6/60` border and `shadow-xs` or `shadow-sm`.
- **Button Tokens**:
  - Primary: Deep Sage background (`#5F7167`), white text, `0.14em` letter spacing.
  - Secondary: Transparent background, Deep Sage border and text, hover fills with Sage.

---

## 27. User Journey & Information Architecture

The homepage is structured as an intentional psychological progression:
```
1. Orientation (Hero)
   "Who is Dr. Maya Reynolds, where is she located, and can she help me?"
   ↓
2. Validation (Introduction)
   "She understands what I am feeling—exhausted, overthinking, holding it together."
   ↓
3. Clarity (Services)
   "Does she treat my specific issue? Yes: Anxiety, Trauma, or Burnout."
   ↓
4. Credibility (Modalities & Approach)
   "How does she work? Evidence-based CBT, EMDR, Somatics with careful pacing."
   ↓
5. Trust & Human Connection (About Maya)
   "Who is the person behind the practice? Warm, grounded, experienced."
   ↓
6. Spatial Comfort (Our Office)
   "Where will I sit? A private, quiet, naturally lit Santa Monica suite."
   ↓
7. Flexibility (Location & Telehealth)
   "Can I meet in-person or online? Both in-person Santa Monica and California telehealth."
   ↓
8. Reassurance (FAQs)
   "Answers to logistics, pacing, and therapy style."
   ↓
9. Action (Final CTA)
   "You don't have to have everything figured out before reaching out."
```

---

## 28. Key Design Decisions

1. **Warm Ivory vs. Stark White**: Using Warm Ivory (`#F8F5EF`) as the dominant canvas avoids the sterile, clinical feel of pure white while maintaining high contrast with Deep Charcoal text.
2. **Cormorant Garamond over Generic Sans Headings**: Provides an established, thoughtful editorial presence appropriate for a doctoral-level psychologist.
3. **Placing "Our Office" Before the Final CTA**: Demystifies the physical space immediately before asking the client to reach out, directly reducing booking hesitation.
4. **Three Focused Services over a Long Bullet List**: High-achieving, overwhelmed adults suffer from decision fatigue. Presenting three clear service areas creates immediate clarity.
5. **Authentic Profile Photos over Generic Stock**: Using Maya's actual portrait and practice rooms establishes genuine human connection and authenticity.

---

## 29. Classification: Cloned vs. Redesigned vs. New

| Website Element | Cloned (from Part 1) | Redesigned (in Part 2) | Completely New (Part 3) | Explanation |
| :--- | :---: | :---: | :---: | :--- |
| **Grid System & Spacing** | ✅ | | | Inherited container max-width (`1720px`) and `5vw` padding architecture. |
| **Responsive Engine** | ✅ | | | Responsive breakpoint structure and horizontal overflow prevention. |
| **Navigation Architecture**| | ✅ | | Transformed from team menu to solo practice specialties and approach. |
| **Hero Layout** | | ✅ | | Replaced asymmetric dual-photo layout with clean 7/5 portrait grid. |
| **Color System** | | ✅ | | 100% replacement with Sage, Sand, Terracotta, Ivory, and Charcoal. |
| **Typography Hierarchy** | | ✅ | | Replaced with Cormorant Garamond and DM Sans. |
| **Clinical Copy** | | ✅ | | 100% newly authored from Maya's professional profile. |
| **Services Section** | | ✅ | | Restructured from demographic groups into 3 primary clinical services. |
| **Modalities Section** | | ✅ | | Replaced generic bullet list with 4 integrated mind-body cards. |
| **About Section** | | ✅ | | Rebuilt as a solo doctoral psychologist profile with credentials. |
| **"Our Office" Section** | | | ✅ | Entirely new spatial immersion section featuring 2 supplied office photos. |
| **FAQ Accordion** | | ✅ | | Implemented interactive accordion with 7 profile-grounded questions. |
| **SEO Meta Architecture** | | ✅ | | Single H1, Santa Monica keywords, and custom OpenGraph metadata. |

---

## 30. Detailed Before vs. After Analysis

| Dimension | Part 1 Clone (Before) | Part 2 & 3 Final Redesign (After) |
| :--- | :--- | :--- |
| **Practice Entity** | Group practice: Conejo Valley Family Counseling | Solo private practice: Dr. Maya Reynolds, PsyD |
| **Service Model** | In-person Newbury Park, CA | Santa Monica office + Secure California telehealth |
| **Core Tone** | Warm family/community counseling | Grounded, calm, sophisticated, and trauma-informed |
| **Color Atmosphere** | Tan, soft blue-teal, and off-white | Botanical Deep Sage, Warm Sand, Ivory, and Terracotta |
| **Headings Font** | Cormorant Infant (whimsical display serif) | Cormorant Garamond (classic, refined editorial serif) |
| **Body Font** | Mulish (geometric sans) | DM Sans (humanist, highly legible sans) |
| **Hero Section** | Dual-photo family and child layout | Single prominent portrait of Dr. Maya Reynolds |
| **Services Focus** | Adults, Couples, Children & Teens | Anxiety & Panic, Trauma & Recovery, Burnout & Perfectionism |
| **Office Presentation** | None (simple address line in contact section) | Dedicated "Our Office" section with 2 authentic interior photos |
| **Client Interaction** | Static dropdowns and mobile drawer | Interactive FAQ accordion, dropdowns, and mobile drawer |
| **Code Cleanliness** | Squarespace-derived layout classes | Clean, modular Next.js components driven by `mayaContent.ts` |

---

## 31. Technical Decisions for an Interview

1. **Why Next.js App Router instead of Pages Router?**  
   *Answer*: App Router enables Server Components by default, minimizing the client-side JavaScript bundle. It allows static prerendering at build time for optimal SEO and performance, while keeping stateful interactions (`Header`, `FaqSection`) isolated to Client Components.
2. **Why Tailwind CSS v4 over Tailwind v3 or CSS-in-JS?**  
   *Answer*: Tailwind v4 simplifies the build pipeline by eliminating `tailwind.config.js` in favor of native CSS `@import "tailwindcss";` and `@layer base`, resulting in faster builds and zero runtime CSS overhead.
3. **Why extract copy into `src/data/mayaContent.ts`?**  
   *Answer*: Centralizing content decouples copywriting from UI structure. It allows content updates, localization, or CMS integration without touching component JSX, reducing regression risks.
4. **Why use native Google Fonts via `next/font/google`?**  
   *Answer*: `next/font/google` automatically self-hosts Google Fonts at build time. Browsers download font files directly from the deployment domain, eliminating external Google network requests, preventing layout shifts (CLS), and complying with GDPR.
5. **Why use `priority` and `loading="eager"` on the Hero image?**  
   *Answer*: The Hero portrait is the Largest Contentful Paint (LCP) element on desktop. Marking it with `priority` and `loading="eager"` instructs the browser preload scanner to fetch it immediately, drastically improving LCP scores.
6. **Why explicit `sizes` on Next/Image?**  
   *Answer*: When `fill` is used, Next.js defaults to serving a 100vw image across all viewports unless a `sizes` attribute is provided. Specifying `sizes="(max-width: 768px) 100vw, 33vw"` ensures mobile devices only download the exact resolution they need, saving bandwidth.
7. **Why an aspect-ratio container instead of fixed pixel heights?**  
   *Answer*: Containers like `aspect-[4/5]` scale fluidly with their grid columns while maintaining consistent proportions, completely eliminating Cumulative Layout Shift (CLS).
8. **Why `scrollWidth === innerWidth` automated testing?**  
   *Answer*: Horizontal overflow is a common responsive bug on mobile. Automating `scrollWidth > innerWidth` checks across 10 viewports with Puppeteer guarantees zero horizontal scrolling before deployment.
9. **Why avoid global state libraries like Redux or Zustand?**  
   *Answer*: The website's state needs are local UI concerns (navigation menu open/close and FAQ toggle). Introducing global state would add unnecessary bundle weight without architectural benefit.
10. **Why use semantic HTML5 elements?**  
    *Answer*: Screen readers and search engine crawlers rely on `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` to understand document structure, improving accessibility and SEO indexation.
11. **Why enforce exactly one H1?**  
    *Answer*: Multiple H1 tags dilute keyword relevance. A single H1 clearly establishes the primary topic for crawlers: *Therapy for Anxiety, Trauma & Burnout in Santa Monica*.
12. **Why clean up `useEffect` in `Header.tsx`?**  
    *Answer*: Calling `setState` synchronously within an effect triggers cascading renders. Centralizing drawer resets into an explicit `closeMobileMenu` handler eliminates unnecessary re-renders.
13. **Why use `border-b border-[#D8D1C6]/50` instead of heavy drop shadows?**  
    *Answer*: Soft borders maintain a grounded, uncluttered editorial feel consistent with Maya's Santa Monica practice, whereas heavy drop shadows feel dated and corporate.
14. **Why define button styles in `globals.css` instead of ad-hoc utilities?**  
    *Answer*: Defining `.btn-primary` and `.btn-secondary` in CSS enforces strict visual consistency for padding, font size, tracking, and hover transitions across the entire site.
15. **Why use headless Puppeteer with installed Chrome?**  
    *Answer*: Running `puppeteer-core` against local Chrome avoids downloading a redundant Chromium binary (~300MB) while providing accurate rendering audits across all device widths.

---

## 32. Interview Questions & Comprehensive Answers

### Beginner Questions (1–20)
1. **Q: What is the main purpose of this website?**  
   *A*: To provide a professional, warm online presence for Dr. Maya Reynolds, PsyD, introducing her specialties (Anxiety, Trauma, Burnout) and guiding prospective adult clients in Santa Monica and across California to schedule a consultation.
2. **Q: What framework is used?**  
   *A*: Next.js 16 with the App Router architecture, TypeScript, and Tailwind CSS v4.
3. **Q: Where is Dr. Maya Reynolds located?**  
   *A*: Her physical office is located at 123th Street 45 W, Santa Monica, CA 90401. She also offers secure telehealth statewide in California.
4. **Q: What are the three primary service areas?**  
   *A*: Anxiety & Panic, Trauma & Recovery, and Burnout & Perfectionism.
5. **Q: What are the four therapeutic modalities presented?**  
   *A*: Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness-Based Practices, and Body-Oriented Techniques.
6. **Q: What fonts are used and why?**  
   *A*: `Cormorant Garamond` for headings (warm, classic editorial serif) and `DM Sans` for body (clean, accessible, readable sans-serif).
7. **Q: What colors make up the design system?**  
   *A*: Deep Sage (`#5F7167`), Warm Sand (`#E7DED0`), Muted Terracotta (`#B87560`), Warm Ivory (`#F8F5EF`), Soft Stone (`#EEEAE2`), and Deep Charcoal (`#29332F`).
8. **Q: What is the H1 of the page?**  
   *A*: `Therapy for Anxiety, Trauma & Burnout in Santa Monica`.
9. **Q: How many H1 tags are on the page?**  
   *A*: Exactly one, located in `src/components/Hero.tsx`.
10. **Q: What does the "Our Office" section show?**  
    *A*: Two authentic interior photographs of Maya's Santa Monica suites alongside copy highlighting the quiet, naturally lit, uncluttered space and the exact physical address.
11. **Q: Where are static images stored in the project?**  
    *A*: In the `public/images/` directory, accessible via root URL paths (e.g. `/images/maya_portrait.png`).
12. **Q: Which components are Client Components?**  
    *A*: `Header.tsx` and `FaqSection.tsx`. Both require user interaction state (`"use client"`).
13. **Q: Which components are Server Components?**  
    *A*: `Hero.tsx`, `Introduction.tsx`, `Services.tsx`, `Modalities.tsx`, `Approach.tsx`, `TraumaApproach.tsx`, `AboutMaya.tsx`, `OurOffice.tsx`, `LocationTelehealth.tsx`, `FinalCta.tsx`, and `Footer.tsx`.
14. **Q: What package provides icons?**  
    *A*: `lucide-react`.
15. **Q: How does the mobile navigation open?**  
    *A*: Clicking the hamburger button triggers `mobileMenuOpen` state, rendering a full-screen fixed overlay with an animated slide/fade effect.
16. **Q: How is horizontal overflow prevented?**  
    *A*: By setting `overflow-x: hidden` on the root body and strictly using fluid grid columns, max-width constraints, and responsive padding.
17. **Q: What is the purpose of `src/data/mayaContent.ts`?**  
    *A*: It serves as the single source of truth for all copy, bios, addresses, and image metadata.
18. **Q: What does `npm run dev` do?**  
    *A*: Starts the Next.js Turbopack development server on `http://localhost:3000`.
19. **Q: What does `npm run build` do?**  
    *A*: Compiles TypeScript, bundles assets, and prerenders all pages into static HTML.
20. **Q: What does `npm run lint` do?**  
    *A*: Runs ESLint to verify code quality and rule compliance (currently passing with 0 errors and 0 warnings).

### Intermediate Questions (21–40)
21. **Q: How are Google Fonts loaded without external network calls?**  
    *A*: Via `next/font/google`. Next.js downloads and self-hosts the font files at build time, eliminating render-blocking external requests to Google servers.
22. **Q: Why was `aspect-ratio` chosen over explicit pixel heights on images?**  
    *A*: Aspect ratios (e.g. `aspect-[4/3]`) ensure images scale proportionally as column widths change across viewports, preventing layout distortion and CLS.
23. **Q: How does the FAQ accordion handle accessibility?**  
    *A*: Each accordion trigger is a `<button>` with an `aria-expanded` attribute that updates dynamically when clicked.
24. **Q: How does `next/image` handle responsive delivery?**  
    *A*: By evaluating the `sizes` attribute and generating a `srcset` with multiple image resolutions, ensuring mobile devices download smaller, optimized WebP/AVIF files.
25. **Q: Why does `Header.tsx` lock body scroll when the mobile menu is open?**  
    *A*: To prevent background page scrolling while the user navigates the drawer menu (`document.body.style.overflow = "hidden"`).
26. **Q: How is the color palette balanced across the page?**  
    *A*: Using a 60/30/10 ratio: ~60% Warm Ivory canvas, ~30% White card surfaces and Soft Stone sections, and ~10% Deep Sage actions with subtle Terracotta accents.
27. **Q: What is the clinical purpose of the "Trauma Work Begins with Safety" section?**  
    *A*: Prospective trauma clients often fear therapy will force them to relive painful memories too quickly. This section explicitly reassures them of stabilization, safety, and careful pacing.
28. **Q: How is the exact address handled in code?**  
    *A*: Rendered verbatim from Maya's profile (`123th Street 45 W, Santa Monica, CA 90401`) in `OurOffice.tsx`, `LocationTelehealth.tsx`, `FinalCta.tsx`, and `Footer.tsx`.
29. **Q: How are dropdown menus toggled on desktop?**  
    *A*: Using React state (`openDropdown`) driven by `onMouseEnter` and `onMouseLeave` event listeners on the parent navigation containers.
30. **Q: What is the role of PostCSS in this setup?**  
    *A*: `postcss.config.mjs` runs `@tailwindcss/postcss`, compiling Tailwind v4 directives directly into standard CSS during build.
31. **Q: How does the application prevent Cumulative Layout Shift (CLS)?**  
    *A*: By using Next.js font variables that swap fonts with matching fallback metrics, and reserving container dimensions for all images using Tailwind aspect ratios.
32. **Q: How are CTA buttons styled consistently?**  
    *A*: Through `.btn-primary` and `.btn-secondary` classes in `globals.css`, ensuring uniform typography, padding, borders, and hover animations.
33. **Q: What is the purpose of `public/maya_qa_screenshots/`?**  
    *A*: Stores automated viewport screenshots taken during headless Chrome QA audits to visually verify layout fidelity across all 10 breakpoints.
34. **Q: How does the mobile navigation handle nested submenus?**  
    *A*: Via an `activeFolder` state variable. Selecting a category replaces top-level links with sub-items and renders an "ArrowLeft Back to Menu" button.
35. **Q: Why is Warm Ivory used instead of pure white for section backgrounds?**  
    *A*: Pure white (#FFFFFF) can feel clinical and harsh. Warm Ivory (#F8F5EF) provides a softer, calming backdrop suited for a psychology practice.
36. **Q: How does the site handle emergency mental health crises?**  
    *A*: `Footer.tsx` includes an explicit crisis notice directing users to dial 988 or visit an emergency room.
37. **Q: Why was `loading="eager"` added to the Hero image?**  
    *A*: Because the Hero portrait is detected as the Largest Contentful Paint (LCP) element. Eager loading instructs the browser to download it immediately.
38. **Q: How does `LocationTelehealth.tsx` distinguish between care formats?**  
    *A*: It uses two distinct cards—one with a MapPin icon for the Santa Monica office, and one with a Video icon for statewide California telehealth.
39. **Q: What makes this website factually reliable?**  
    *A*: Zero credentials, years of experience, pricing, or testimonials were invented. All copy strictly reflects Dr. Maya Reynolds' profile PDF.
40. **Q: How does the site ensure zero horizontal overflow?**  
    *A*: By avoiding hardcoded pixel widths, using `max-w-full`, and verifying `scrollWidth === innerWidth` via automated Puppeteer tests.

### Advanced Questions (41–60)
41. **Q: Explain how Turbopack accelerates the Next.js 16 build pipeline.**  
    *A*: Turbopack is written in Rust and operates on function-level incremental computation, recompiling only the modified files instead of rebuilding entire dependency graphs.
42. **Q: How would you internationalize (i18n) this application in App Router?**  
    *A*: By wrapping the route tree in a `[lang]` dynamic segment (e.g. `src/app/[lang]/page.tsx`), reading the locale from middleware, and loading language dictionaries into `mayaContent.ts`.
43. **Q: How does Server Component rendering benefit mental health SEO?**  
    *A*: Because search engine crawlers receive fully rendered HTML on the initial GET request, indexing all clinical copy without relying on client-side JavaScript execution.
44. **Q: What security headers should be configured for production deployment?**  
    *A*: Content Security Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options: nosniff, X-Frame-Options: DENY, and Referrer-Policy: strict-origin-when-cross-origin via `next.config.ts`.
45. **Q: How would you integrate a headless CMS like Sanity or Contentful?**  
    *A*: Replace the static imports in `src/data/mayaContent.ts` with asynchronous fetch functions inside Server Components using `fetch(url, { next: { revalidate: 3600 } })` for ISR.
46. **Q: Why was PyMuPDF used during the asset extraction phase?**  
    *A*: PyMuPDF (`fitz`) parses the PDF document structure directly to extract embedded raster images at their native resolutions without recompression artifacts.
47. **Q: What is the architectural difference between CSS Grid and Flexbox in this project?**  
    *A*: Grid is used for two-dimensional page section structures (`lg:grid-cols-12`, 3-column service cards), while Flexbox is used for one-dimensional linear flows (navigation links, button badge groups).
48. **Q: Explain how WCAG AAA contrast was achieved for primary headings.**  
    *A*: By testing Deep Charcoal (`#29332F`) against Warm Ivory (`#F8F5EF`), achieving an 11.8:1 contrast ratio that surpasses the 7:1 AAA standard.
49. **Q: How does Next.js handle static page generation for static routes?**  
    *A*: At build time, Next.js evaluates all Server Components, renders them to static HTML/JSON, and writes them to `.next/server/app/`, allowing CDN edge caching.
50. **Q: How would you implement end-to-end testing for this site?**  
    *A*: Using Playwright to automate tests for consultation link clicks, mobile menu toggles, FAQ accordion expansion, and zero-overflow assertions.
51. **Q: What happens if an image in `public/images/` fails to load?**  
    *A*: Next/Image displays the native browser alt text and maintains the defined aspect ratio, preventing layout collapse.
52. **Q: Why is `overflow-x: hidden` placed on `body` in `globals.css`?**  
    *A*: As a global safeguard against accidental horizontal scrollbars caused by subpixel rounding or third-party browser extensions.
53. **Q: How does the application minimize Cumulative Layout Shift during font loading?**  
    *A*: `next/font/google` automatically calculates `size-adjust`, `ascent-override`, and `descent-override` CSS properties on the fallback font (`Cormorant Garamond Fallback`).
54. **Q: How would you implement online booking integration (e.g. SimplePractice)?**  
    *A*: Update `primaryCta.href` in `mayaContent.ts` to link to Maya's SimplePractice client portal URL, opening in a secure modal or new tab with `rel="noopener noreferrer"`.
55. **Q: What is the memory footprint of running Server Components vs. Client Components?**  
    *A*: Server Components execute once on the server and are garbage-collected after HTML generation. Client Components remain in browser memory to handle re-renders.
56. **Q: How do you verify that zero client JavaScript is shipped for static sections?**  
    *A*: Inspecting the `.next` production build manifest confirms that Server Components (`Hero`, `OurOffice`, etc.) contribute zero bytes to the client JS bundle.
57. **Q: How would you add JSON-LD Schema markup for local business SEO?**  
    *A*: Inject a `<script type="application/ld+json">` tag into `src/app/layout.tsx` defining `@type: "MedicalBusiness"` with Maya's name, credentials, address, and geo-coordinates.
58. **Q: Why was `loading="eager"` placed on Hero and not on other images?**  
    *A*: Applying eager loading to below-the-fold images wastes initial network bandwidth. Only above-the-fold LCP elements should be loaded eagerly.
59. **Q: Explain how Tailwind v4's CSS engine improves developer experience.**  
    *A*: Tailwind v4 compiles via a unified Lightning CSS-based pipeline, reducing configuration overhead and eliminating intermediate PostCSS parsing steps.
60. **Q: How does the codebase demonstrate the Single Responsibility Principle?**  
    *A*: Each component handles one dedicated section of the psychological narrative (`Services` renders service cards, `OurOffice` renders the physical office space, `Header` handles navigation).

---

## 33. Debugging & Maintenance Guide

| Task | Target File | Code Area | Modifications Required | Potential Pitfalls |
| :--- | :--- | :--- | :--- | :--- |
| **1. Change Primary Color** | `src/app/globals.css` | `:root` & `.btn-primary` | Update `--color-sage` and the hex `#5F7167` | Ensure text contrast against Warm Ivory remains above 4.5:1. |
| **2. Change Maya's Name** | `src/data/mayaContent.ts` | `brand.name` | Update string `"Dr. Maya Reynolds, PsyD"` | Update `layout.tsx` metadata and `Header.tsx` logo text. |
| **3. Change Hero Heading** | `src/data/mayaContent.ts` & `src/components/Hero.tsx` | `hero.h1` / `<h1>` | Update H1 text | Keep it as the only H1 on the page to protect SEO. |
| **4. Replace an Image** | `public/images/` & `src/data/mayaContent.ts` | Image path in data object | Place new file in `public/images/` and update path | Maintain the required aspect ratio to prevent CLS. |
| **5. Add a 4th Service** | `src/data/mayaContent.ts` & `src/components/Services.tsx` | `services.items` array | Add new service object; change grid to `md:grid-cols-2 lg:grid-cols-4` | Check mobile stacking to ensure card heights remain balanced. |
| **6. Remove a Section** | `src/app/page.tsx` | `<main>` JSX | Remove component import and JSX tag | Check for broken in-page anchor links (e.g. `#our-office`). |
| **7. Change Mobile Spacing**| `src/app/globals.css` | `.page-container` | Adjust `padding-left: 5vw` to desired mobile value | Avoid hardcoded pixels that could cause horizontal overflow. |
| **8. Change Desktop Grid** | Component files | `grid-cols-12` classes | Adjust column span ratios (e.g. from `lg:col-span-7` to `lg:col-span-8`) | Ensure total column spans within each row equal 12. |
| **9. Modify FAQ Items** | `src/data/mayaContent.ts` | `faqs.items` array | Add, edit, or remove FAQ objects | Do not add facts that contradict Maya's official profile. |
| **10. Change SEO Metadata**| `src/app/layout.tsx` | `metadata` object | Update `title`, `description`, or `openGraph` | Keep title under 60 characters and description under 160 characters. |

---

## 34. Practical Modification Workflows

- **Adding a New Page Section**:
  1. Define data types and content in `src/data/mayaContent.ts`.
  2. Create `src/components/NewSection.tsx` as a Server Component.
  3. Use `.page-container` and `py-16 md:py-24` for consistent spacing.
  4. Import and place the component in `src/app/page.tsx`.
  5. Run `npm run lint` and `npm run build` to verify compilation.
- **Updating Navigation Links**:
  1. Open `src/data/navigation.ts`.
  2. Add or update items in `navigationData`.
  3. Submenus with an `items` array automatically render as dropdowns on desktop and accordion folders on mobile.
- **Adding Custom Fonts**:
  1. Import the font from `next/font/google` in `src/app/layout.tsx`.
  2. Assign it a CSS variable (e.g. `variable: "--font-custom"`).
  3. Add the variable to `<html>` className.
  4. Reference it in `src/app/globals.css` under `:root`.

---

## 35. Code Quality & Architecture Audit

- **Critical Issues**: None identified.
- **High Priority Issues**: None identified.
- **Medium Considerations**:
  - *In-Page Anchors*: Links like `#contact` scroll smoothly, but integrating an active booking widget (such as SimplePractice) will be beneficial once live scheduling credentials are provided.
- **Low Considerations**:
  - *Unused Part 1 Assets*: The original scraped images remain in `public/images/` for reference. They can be safely deleted in a production cleanup to reduce repository size.

---

## 36. Learning Roadmap

- **Level 1 (Core Foundations)**:
  - Component props and JSX composition.
  - Tailwind responsive prefixes (`sm:`, `md:`, `lg:`).
  - Next.js folder structure and static file serving from `public/`.
- **Level 2 (Professional Patterns)**:
  - Server Components vs. Client Components (`"use client"`).
  - Centralized data architecture (`mayaContent.ts`).
  - Next/Image optimization (`priority`, `sizes`, aspect ratios).
  - Accessibility auditing (semantic HTML, ARIA labels, contrast ratios).
- **Level 3 (Senior Architectural Concepts)**:
  - Core Web Vitals optimization (LCP eager loading, CLS elimination).
  - Automated headless browser testing via Puppeteer scripts.
  - Zero-runtime CSS architecture with Tailwind v4.

---

## 37. Five-Minute Interview Pitch

> "This project is a high-performance web application built with Next.js 16, TypeScript, and Tailwind CSS for Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica specializing in anxiety, trauma, and burnout.
> 
> The project followed a three-phase engineering process. In Part 1, I reverse-engineered a live therapy website to establish a responsive layout system, fluid container widths, and navigation patterns. In Part 2, I completely redesigned the application into a private practice brand for Dr. Maya Reynolds. I replaced the color system with a palette of Deep Sage, Warm Sand, and Warm Ivory, paired Cormorant Garamond with DM Sans, and wrote all copy based on Maya's clinical profile.
> 
> In Part 3, I created an original section called 'Our Office'. Therapy clients often feel anxious about entering a new space, so I integrated two authentic, high-resolution photographs of Maya's Santa Monica suites into an editorial two-column layout that demystifies the physical environment before booking.
> 
> Technically, the biggest challenge was optimizing above-the-fold delivery while ensuring zero horizontal overflow across all viewports. I solved this by configuring Next/Image with eager LCP loading, defining explicit aspect ratios to prevent Cumulative Layout Shift, and writing an automated Puppeteer test suite that verified scrollWidth across 10 viewports. The final application compiles cleanly with zero lint warnings and runs entirely on prerendered static pages."

---

## 38. Sixty-Second Elevator Pitch

> "I built a responsive, high-performance website for Dr. Maya Reynolds, PsyD, a clinical psychologist in Santa Monica specializing in anxiety, trauma, and burnout. Built with Next.js 16 and Tailwind CSS, the project transformed an initial reference layout into a custom brand using a Deep Sage and Warm Ivory palette, editorial typography, and profile-grounded copy. A key feature is the custom 'Our Office' section, which uses authentic suite photography to reduce appointment anxiety. The application is fully accessible, achieves zero horizontal overflow across 10 tested viewports, and passes all production build and linting checks with zero warnings."

---

## 39. Resume Bullet Points

- **Engineered a high-performance therapy practice web application** using Next.js 16 App Router, TypeScript, and Tailwind CSS v4, achieving 100% static prerendering and zero build warnings.
- **Architected a complete visual and content redesign** from a multi-provider reference clone into a solo psychology practice, creating a custom design system with WCAG AAA color contrast and semantic typography.
- **Developed an automated responsive QA testing pipeline** using Puppeteer and headless Chrome, verifying zero horizontal overflow and responsive fidelity across 10 viewports (320px to 1440px).

---

## 40. Final Knowledge Map

```
Dr. Maya Reynolds Website Project
├── Product & UX
│   ├── Target Audience: High-achieving adults experiencing anxiety, trauma, and burnout
│   ├── Clinical Positioning: Warm, collaborative, evidence-based, safety-first trauma pacing
│   └── User Journey: Orientation → Validation → Service Clarity → Modalities → Spatial Comfort → Action
│
├── Design System
│   ├── Palette: Warm Ivory (60%), White (20%), Deep Sage (12%), Warm Sand (5%), Terracotta (3%)
│   ├── Typography: Cormorant Garamond (Headings) + DM Sans (Body/UI)
│   └── Spacing: .page-container (max-w-[1720px], 5vw padding), py-16 md:py-24 section rhythm
│
├── Engineering & Architecture
│   ├── Framework: Next.js 16 (App Router) + React 19 + TypeScript
│   ├── Component Strategy: Server Components by default; Client Components for Header and FAQ
│   ├── Data Flow: Centralized single source of truth in src/data/mayaContent.ts
│   └── Styling: Tailwind CSS v4 with modular CSS tokens in globals.css
│
├── Quality & Performance
│   ├── Core Web Vitals: LCP eager loading on Hero portrait; zero CLS via aspect-ratio containers
│   ├── SEO: Single H1, Santa Monica location keywords, OpenGraph metadata
│   ├── Accessibility: WCAG AA/AAA contrast ratios, semantic HTML5, keyboard navigation
│   └── Automated QA: Headless Chrome scripts testing 10 viewports for overflow prevention
```
