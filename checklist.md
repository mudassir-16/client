# Execution Checklist: Dr. Maya Reynolds, PsyD Website Redesign

- [x] **Phase 1: Design System, Tokens & Assets Setup**
  - [x] 1.1 Configure Google Fonts (`Cormorant Garamond` and `DM Sans`) in Next.js layout
  - [x] 1.2 Implement the new palette in `globals.css` (Sage `#5F7167`, Sand `#E7DED0`, Terracotta `#B87560`, Ivory `#F8F5EF`, Stone `#EEEAE2`, Charcoal `#29332F`)
  - [x] 1.3 Update button classes (`btn-primary`, `btn-secondary`) with refined styling & hover transitions
  - [x] 1.4 Verify Maya's official portrait and 2 office photographs in `public/images/`
  - [x] 1.5 Generate editorial lifestyle imagery (Anxiety, Trauma, Burnout, Intro, Approach, CTA) with soft natural light and warm neutral palette

- [x] **Phase 2: Content Architecture & Navigation Data**
  - [x] 2.1 Create centralized data file `src/data/mayaContent.ts` containing all factual copy strictly matching the profile
  - [x] 2.2 Update navigation data `src/data/navigation.ts` with Maya's menu structure & consultation CTA

- [x] **Phase 3: Header Component Rebuild**
  - [x] 3.1 Build desktop Header with practice name, credentials subtitle, and clean links
  - [x] 3.2 Implement animated mobile drawer menu with touch-friendly layout and close handlers

- [x] **Phase 4: Core Sections Transformation**
  - [x] 4.1 **Hero Section**: Eyebrow, single H1 ("Therapy for Anxiety, Trauma & Burnout in Santa Monica"), supporting text, dual CTAs, Maya portrait
  - [x] 4.2 **Introduction Section**: "You don't have to keep carrying everything on your own", client-centered narrative, lifestyle imagery
  - [x] 4.3 **Services Section**: 3 primary service areas (Anxiety & Panic, Trauma & Recovery, Burnout & Perfectionism) with editorial cards & CTAs
  - [x] 4.4 **Expertise & Modalities Section**: Mind & body heading, 4 evidence-based modalities (CBT, EMDR, Mindfulness, Body-Oriented)
  - [x] 4.5 **My Approach Section**: Collaborative, grounded, and paced work with structure & depth
  - [x] 4.6 **Trauma Approach Section**: Dedicated safety, regulation, stabilization & pacing focus
  - [x] 4.7 **About Maya Section**: "Meet Dr. Maya Reynolds, PsyD", Licensed Clinical Psychologist subtitle, portrait, authentic bio

- [x] **Phase 5: New Custom Section — "Our Office"**
  - [x] 5.1 Implement `OurOffice.tsx` positioned after About and before Location/CTA
  - [x] 5.2 Display eyebrow `OUR OFFICE` and editorial heading *"A Calm Space to Slow Down"*
  - [x] 5.3 Present narrative on quiet, private, naturally lit, uncluttered space
  - [x] 5.4 Display exact Santa Monica address: `123th Street 45 W, Santa Monica, CA 90401`
  - [x] 5.5 Integrate dual prominent layout of the 2 supplied office photographs

- [x] **Phase 6: Supporting Sections & Footer**
  - [x] 6.1 **Location & Telehealth Section**: Santa Monica in-person + secure California telehealth details
  - [x] 6.2 **FAQ Section**: Interactive accordion with 7 profile-grounded FAQs
  - [x] 6.3 **Final Appointment CTA**: "Starting Therapy" eyebrow, warm invitation, dual CTAs
  - [x] 6.4 **Footer**: Practice credentials, Santa Monica address, navigation, telehealth notice, and copyright

- [x] **Phase 7: Page Assembly & SEO Metadata**
  - [x] 7.1 Assemble all components in `src/app/page.tsx` following the planned narrative flow
  - [x] 7.2 Configure SEO title: `Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA`
  - [x] 7.3 Configure meta description, OpenGraph tags, and canonical metadata in `src/app/layout.tsx`

- [x] **Phase 8: Comprehensive QA, Responsive Testing & Final Acceptance**
  - [x] 8.1 Automated responsive testing across 10 viewports (1440px down to 320px) verifying zero horizontal overflow
  - [x] 8.2 Interactive validation: mobile drawer, FAQ accordions, buttons, navigation links
  - [x] 8.3 Run `npm run lint` and verify 0 errors and 0 warnings
  - [x] 8.4 Run `npm run build` and confirm 100% clean production build
