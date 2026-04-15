export interface JobPosting {
  id: string;
  title: string;
  department: string;
  level: 'junior' | 'mid' | 'senior' | 'lead';
  type: 'full-time' | 'contract';
  location: 'remote' | 'in-office' | 'hybrid';
  description: string;
  requirements: string[];
  perks: string[];
}

export const jobs: JobPosting[] = [
  {
    id: 'backend-engineer-senior',
    title: 'Senior Backend Engineer',
    department: 'Engineering',
    level: 'senior',
    type: 'full-time',
    location: 'remote',
    description:
      'Design and build scalable backend systems. Work on distributed systems, APIs, and infrastructure.',
    requirements: [
      '5+ years production experience',
      'Go, TypeScript, or Rust',
      'System design expertise',
      'Database optimization',
    ],
    perks: [
      'Competitive salary + equity',
      'Health insurance',
      'Learning budget',
      'Flexible hours',
    ],
  },
  {
    id: 'fullstack-engineer-mid',
    title: 'Full Stack Engineer',
    department: 'Engineering',
    level: 'mid',
    type: 'full-time',
    location: 'hybrid',
    description: 'Build next-gen frontend and backend features. Work across the entire stack.',
    requirements: [
      '3+ years experience',
      'React + Node.js OR TypeScript full stack',
      'SQL databases',
      'Git proficiency',
    ],
    perks: [
      'Competitive salary',
      'Equity options',
      'Remote flexibility',
      'Annual bonus',
    ],
  },
];
