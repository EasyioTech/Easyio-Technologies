export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface EmailData {
  success: boolean;
  error?: any;
  id?: string;
}
