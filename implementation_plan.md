# Implementation Plan: Conejo Valley Family Counseling Homepage Clone

## 1. Project Overview & Objective
Build an exact **1:1 visual, structural, and behavioral reproduction** of the **Conejo Valley Family Counseling** homepage ([reference](https://www.conejovalleycounseling.com/home)) as defined in [prd.md](file:///e:/MUDASSIR/0/prd.md).
- **Core Directive**: Strict fidelity. No modernizing, redesigning, simplifying, or substituting arbitrary components.
- **Tech Stack**: Next.js (App Router), React, Tailwind CSS, Responsive HTML/CSS.

---

## 2. Technical Architecture & Component Tree

```
src/
├── app/
│   ├── layout.tsx         # Google Fonts (Cormorant Infant & Mulish), metadata, favicon
│   ├── page.tsx           # Assembles page sections in strict sequence
│   └── globals.css        # Tailwind directives, custom typography rules, CSS variables
├── components/
│   ├── Header.tsx         # Top nav, logo, dropdown menus, mobile navigation drawer
│   ├── Hero.tsx           # Eyebrow, H1, subhead, CTA button, dual hero imagery
│   ├── HopeSection.tsx    # Intro copy, beach image, validating statement
│   ├── WhoWeHelp.tsx      # 3 columns (Adults, Couples, Children & Teens) + images
│   ├── Expertise.tsx      # Quotation, "Our areas of expertise", divider-separated typographic list
│   ├── HowWeWork.tsx      # Section tag, heading, beach dancing image, 3 paragraphs, link
│   ├── Specialties.tsx    # Heading, subhead, 4 specialty blocks (Trauma, Dissociation, EMDR, Special Needs Parenting)
│   ├── Appointment.tsx    # "SCHEDULE AN APPOINTMENT", CTA, office & virtual therapy details
│   ├── Contact.tsx        # Address, active email & phone links, service areas
│   └── Footer.tsx         # Navigate, Our Team, Legal links, copyright & credit
├── data/
│   ├── navigation.ts      # Header nav items & dropdown links
│   ├── content.ts         # Exact text copy for all sections extracted directly from PRD/reference
│   └── team.ts            # Team & specialties lists for footer and menus
└── public/
    └── images/            # Logo, hero images, beach scenes, and portraits
```

---

## 3. Visual System & Design Tokens
Based on reference inspection:
- **Typography**:
  - Primary Serif / Headings: `Cormorant Infant` (Weights: 400, 700; normal and italic styles)
  - Secondary Sans / Body: `Mulish` (formerly Muli; Weights: 300, 400, 600; normal and italic)
- **Palette**:
  - Backgrounds: Off-white / Warm Sand (`#FBF9F5` / `#F7F5F0`), White (`#FFFFFF`), Soft Earth Neutral (`#EFECE6`)
  - Primary Text: Deep Slate / Charcoal (`#2C302E` / `#333735`)
  - Accent / CTA: Warm Terracotta / Clay Rose (`#C1806B` / `#B57460`) with clean hover states
  - Dividers / Borders: Muted Warm Gray (`#DDD7CD` / `#E5E0D8`)
- **Spacing & Layout**:
  - Max page width: `1800px` (standard container `1280px` - `1400px` with `5vw` responsive padding)
  - Zero horizontal scroll at all breakpoints.

---

## 4. Phase-by-Phase Execution Plan

### Phase 1: Environment Setup & Project Initialization
- Scaffold Next.js project with Tailwind CSS in workspace `e:\MUDASSIR\0`.
- Configure Google Fonts (`Cormorant Infant` and `Mulish`) via `next/font/google`.
- Configure Tailwind theme tokens (fonts, custom colors, breakpoints).
- Fetch & organize image assets into `public/images/`.

### Phase 2: Navigation & Header Implementation
- Implement desktop sticky header with logo, navigation links, and styled hover dropdowns:
  - **Our Team**: 7 therapists.
  - **Specialties**: 7 specialties.
  - **Methods**: 4 therapy methods.
  - **Contact** link.
- Implement mobile hamburger menu and responsive sliding overlay matching reference behavior.

### Phase 3: Core Page Sections Implementation (Strict Sequence)
1. **Hero Section**: Exact eyebrow, H1 wrapping, subhead, "Book an Appointment" CTA, dual photo layout.
2. **Hope / Introduction**: Hope statement, beach landscape image, empathetic validation copy.
3. **Who We Help**: 3-entry responsive grid (Adults, Couples, Children & Teens) with exact descriptions and image placements.
4. **Areas of Expertise**: Quote block, heading, typographic list separated by subtle horizontal dividers.
5. **How We Work**: Eyebrow label, heading, dancing beach image, 3 narrative paragraphs, "Learn more about us" link.
6. **Specialties Section**: Main heading, subhead, 4 distinct specialty narrative blocks with "Learn more" links.
7. **Schedule an Appointment**: Scheduling banner/block, "Book now" CTA, location & virtual care details.
8. **Contact Section**: Physical Newbury Park address, clickable email & phone links, service areas list.
9. **Footer Section**: 4-column layout (Navigate, Our Team, Legal, Credit).

### Phase 4: Responsive Reverse Engineering & Viewport Testing
- Audit and adjust layout across all PRD-mandated viewports:
  - Desktop: `1440×900`, `1366×768`, `1280×800`
  - Tablet: `1024×768`, `834×1194`, `768×1024`
  - Mobile: `430×932`, `390×844`, `375×812`, `320×568`
- Verify zero horizontal overflow at every breakpoint.

### Phase 5: Visual QA Comparison & Polish Loop
- Capture rendered browser screenshots and compare against live reference (`https://www.conejovalleycounseling.com/home`).
- Iteratively tune:
  1. Structure & section order
  2. Font sizes, line heights, letter spacing, heading breaks
  3. Image proportions, aspect ratios, crops
  4. Padding, margins, vertical rhythm
  5. Hover states, active links, button micro-interactions
- Validate clean production build (`npm run build`).
