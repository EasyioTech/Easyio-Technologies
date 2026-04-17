import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { db } from '../lib/db';
import { projects, testimonials, blogPosts } from '../lib/db/schema';
import { sql } from 'drizzle-orm';

async function seed() {
  console.log('🚀 Starting Seeding Process...');

  // 1. PROJECTS SEEDING
  const mockProjects = [
    {
      id: "PRO_01",
      title: "Enterprise Resource Protocol (ERP)",
      slug: "enterprise-resource-protocol",
      description: "A centralized orchestration core for multi-departmental resource synchronization and automated reporting.",
      tags: ["Business Systems"],
      featured: "true",
      metadata: { short: "ERP System", stats: { modules: "24+", efficiency: "+45%", users: "10k+" } }
    },
    {
      id: "PRO_02",
      title: "Institutional Learning Management (LMS)",
      slug: "institutional-learning-management",
      description: "Cloud-native educational infrastructure with integrated progress tracking and multi-tenant delivery.",
      tags: ["EdTech"],
      featured: "true",
      metadata: { short: "LMS Platform", stats: { delivery: "CDN", latency: "LOW", uptime: "99.9%" } }
    },
    {
      id: "PRO_03",
      title: "Global Commerce Gateway",
      slug: "global-commerce-gateway",
      description: "High-concurrency e-commerce architecture supporting million-scale SKU catalogs and instant checkout.",
      tags: ["E-Commerce"],
      featured: "false",
      metadata: { short: "E-Commerce", stats: { scale: "UNLIMITED", speed: "EXTREME", convert: "HIGH" } }
    },
    {
      id: "PRO_04",
      title: "Hotel Management Platform",
      slug: "hotel-management-platform",
      description: "A sleek, integrated system for property management, guest logistics, and real-time reservation sync.",
      tags: ["Hospitality"],
      featured: "false",
      metadata: { short: "Hotel Management", stats: { bookings: "SYNCED", security: "AES", load: "LOW" } }
    },
    {
      id: "PRO_05",
      title: "Financial Management Suite",
      slug: "financial-management-suite",
      description: "A secure protocol for asset management, portfolio tracking, and regulatory compliance auditing.",
      tags: ["Fintech"],
      featured: "false",
      metadata: { short: "Fintech", stats: { audits: "AUTO", encryption: "PQC", integrity: "100%" } }
    },
    {
      id: "PRO_06",
      title: "Project Management Platform",
      slug: "project-management-platform",
      description: "Agile project management backbone for high-performance teams with automated dependency mapping.",
      tags: ["Productivity"],
      featured: "false",
      metadata: { short: "Project Management", stats: { agility: "MAX", velocity: "HIGH", debt: "LOW" } }
    }
  ];

  console.log('📦 Seeding Projects...');
  for (const p of mockProjects) {
    await db.insert(projects).values(p as any).onConflictDoUpdate({
      target: projects.id,
      set: { title: p.title, description: p.description, metadata: p.metadata as any }
    });
  }

  // 2. TESTIMONIALS SEEDING
  const mockTestimonials = [
    {
      id: 'TES_01',
      name: "Briana Patton",
      role: "Operations Manager",
      company: "Enterprise Solutions",
      content: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      rating: "5"
    },
    {
      id: 'TES_02',
      name: "Bilal Ahmed",
      role: "IT Manager",
      company: "Tech Systems",
      content: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: "5"
    },
    {
      id: 'TES_03',
      name: "Omar Raza",
      role: "CEO",
      company: "Global Logistics",
      content: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      rating: "5"
    }
  ];

  console.log('📦 Seeding Testimonials...');
  for (const t of mockTestimonials) {
    await db.insert(testimonials).values(t as any).onConflictDoUpdate({
      target: testimonials.id,
      set: { content: t.content, role: t.role }
    });
  }

  // 3. BLOG POSTS SEEDING
  const BLOG_DIR = path.join(process.cwd(), 'content/blog');
  if (fs.existsSync(BLOG_DIR)) {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
    console.log(`📦 Seeding ${files.length} Blog Posts...`);
    
    for (const file of files) {
      const source = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(source);
      const slug = file.replace('.mdx', '');
      
      await db.insert(blogPosts).values({
        id: crypto.randomUUID(),
        title: data.title || 'Untitled',
        slug: slug,
        excerpt: data.description || '',
        content: content,
        author: data.author || 'Easyio Team',
        category: data.category || 'Engineering',
        published: 'true',
        publishedAt: data.date ? new Date(data.date) : new Date(),
        updatedAt: new Date()
      }).onConflictDoUpdate({
        target: blogPosts.slug,
        set: { title: data.title, content: content, excerpt: data.description }
      });
    }
  }

  console.log('✅ Seeding Completed successfully!');
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Seeding Failed:', err);
  process.exit(1);
});
