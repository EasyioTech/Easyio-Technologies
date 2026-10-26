export const siteConfig = {
  name: "Easyio Technologies",
  shortName: "Easyio",
  description:
    "The premier software engineering firm in Kashmir, dedicated to architecting high-performance systems and next-generation business solutions for global enterprises.",
  url: "https://easyio.tech",
  ogImage: "https://easyio.tech/og-image.png",
  links: {
    twitter: "https://twitter.com/easyiotech",
    linkedin: "https://linkedin.com/company/easyio",
    instagram: "https://instagram.com/easyiotech",
    github: "https://github.com/easyiotech",
  },
  email: {
    contact: "contact@easyio.tech",
    support: "support@easyio.tech",
    careers: "careers@easyio.tech",
  },
  phone: "+91 60056 59527",
  location: "War Complex, Block B, Sopore, J&K 193201",
  year: new Date().getFullYear(),
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Cost Estimator", href: "/project-estimator" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  product: {
    title: "Product & Solutions",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Cost Estimator", href: "/project-estimator" },
      { label: "Pricing & Plans", href: "/pricing" },
      { label: "Case Studies", href: "/case-studies" },
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
  solutions: {
    title: "Locations & Districts",
    links: [
      { label: "Best Tech Company Kashmir", href: "/blog/best-tech-company-in-kashmir" },
      { label: "Best Software Company Kashmir", href: "/software-development-company-in-kashmir" },
      { label: "Best Tech Company Sopore", href: "/software-development-company-in-sopore" },
      { label: "Best Tech Company Baramulla", href: "/blog/best-tech-company-in-baramulla" },
      { label: "Best Tech Company Srinagar", href: "/blog/best-tech-company-in-srinagar" },
      { label: "Best Tech Company Anantnag", href: "/blog/best-tech-company-in-anantnag-south-kashmir" },
      { label: "Custom ERP Systems Kashmir", href: "/custom-erp-software-development-kashmir" },
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
