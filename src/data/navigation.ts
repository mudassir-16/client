export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  items?: NavSubItem[];
}

export const navigationData: NavItem[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Specialties",
    items: [
      { label: "Anxiety & Panic", href: "#services" },
      { label: "Trauma & Recovery", href: "#services" },
      { label: "Burnout & Perfectionism", href: "#services" },
    ],
  },
  {
    label: "Approach",
    items: [
      { label: "Therapy Approach", href: "#approach" },
      { label: "Mind & Body Modalities", href: "#modalities" },
      { label: "Trauma & Safety", href: "#trauma-approach" },
    ],
  },
  {
    label: "Our Office",
    href: "#our-office",
  },
  {
    label: "Location",
    href: "#location",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
];
