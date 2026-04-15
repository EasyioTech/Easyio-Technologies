export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    name: 'Founder & CTO',
    role: 'System Architect',
    bio: 'Built high-performance systems at scale. 10+ years experience.',
    socials: {
      twitter: 'https://twitter.com/easyiotech',
      linkedin: 'https://linkedin.com/company/easyio',
    },
  },
  {
    name: 'Lead Engineer',
    role: 'Full Stack',
    bio: 'TypeScript, Go, Rust. Infrastructure automation expert.',
    socials: {
      github: 'https://github.com/easyiotech',
    },
  },
  {
    name: 'Product Lead',
    role: 'Product & Design',
    bio: 'User-centric design. Previously at scale startups.',
    socials: {
      twitter: 'https://twitter.com/easyiotech',
    },
  },
];
