import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  image: string;
  alt: string;
  caption: string;
}

export interface Stat {
  value?: number;
  decimals?: number;
  suffix?: string;
  text?: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SolarPackage {
  name: string;
  capacity: string;
  inverter: string;
  battery: string;
  panels: string;
  components: string[];
  suitableFor: string[];
  /** Set to a string like "KSh 000,000" to display a price. Leave null to show "Pricing on request". */
  price: string | null;
}

export interface Appliance {
  label: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type ProjectCategory = 'Residential' | 'Commercial' | 'Institutional';

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  location?: string;
}

export interface Article {
  title: string;
  category: string;
  excerpt: string;
  body: string[];
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isPlaceholder: boolean;
}