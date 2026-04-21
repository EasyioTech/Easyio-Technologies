export const siteConfig = {
  name: "Easyio Technologies",
  shortName: "Easyio",
  description:
    "The premier software engineering firm in Kashmir, dedicated to architecting high-performance systems and next-generation business solutions for global enterprises.",
  url: "https://easyiotech.com",
  ogImage: "https://easyiotech.com/og-image.png",
  links: {
    twitter: "https://twitter.com/easyiotech",
    linkedin: "https://linkedin.com/company/easyio",
    instagram: "https://instagram.com/easyiotech",
    github: "https://github.com/easyiotech",
  },
  email: {
    contact: "hello@easyiotech.com",
    support: "support@easyiotech.com",
    careers: "careers@easyiotech.com",
  },
  location: "Srinagar, Kashmir",
  year: new Date().getFullYear(),
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Guides", href: "/guides" },
      { label: "Community", href: "/community" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
};

export const services = [
  {
    title: "Custom Software Development",
    description: "High-performance, scalable applications tailored to your needs.",
    icon: "Code",
  },
  {
    title: "System Architecture",
    description: "Design robust, modular systems that grow with your business.",
    icon: "Layers",
  },
  {
    title: "Performance Optimization",
    description: "Eliminate bottlenecks and maximize throughput.",
    icon: "Zap",
  },
  {
    title: "DevOps & Infrastructure",
    description: "Secure, automated, cloud-native deployment pipelines.",
    icon: "Server",
  },
];

export const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Team Members", value: "25+" },
  { label: "Years of Expertise", value: "10+" },
  { label: "Companies Served", value: "40+" },
];
