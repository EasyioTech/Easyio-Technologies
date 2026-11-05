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
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Estimator", href: "/project-estimator" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  product: {
    title: "Product & Solutions",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Cost Estimator", href: "/project-estimator" },
      { label: "Pricing & Plans", href: "/pricing" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Enterprise Systems", href: "/enterprise-software-systems" },
      { label: "Cloud Infrastructure", href: "/cloud-infrastructure" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Engineering Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Product Roadmap", href: "/roadmap" },
      { label: "Changelog", href: "/changelog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  solutions: {
    title: "Regional & Specialized",
    links: [
      { label: "Software Company Kashmir", href: "/software-development-company-in-kashmir" },
      { label: "Software Company Sopore", href: "/software-development-company-in-sopore" },
      { label: "Web Development Srinagar", href: "/web-development-company-in-srinagar" },
      { label: "Custom ERP Kashmir", href: "/custom-erp-software-development-kashmir" },
      { label: "SaaS Application Dev", href: "/saas-application-development-kashmir" },
      { label: "Mobile App Development", href: "/mobile-app-development-company-kashmir" },
    ],
  },
  legal: {
    title: "Security & Legal",
    links: [
      { label: "Enterprise Security", href: "/enterprise-security" },
      { label: "Ultra-Fast Architecture", href: "/ultra-fast-speed" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
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
