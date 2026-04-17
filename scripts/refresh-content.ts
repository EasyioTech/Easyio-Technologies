import { db } from "../lib/db";
import { projects, blogPosts, testimonials } from "../lib/db/schema";
import { eq } from "drizzle-orm";

async function seed() {
  console.log("Initializing high-performance technical content refresh...");

  // 1. Projects Refresh (Detailed Case Studies)
  const existingProjects = await db.select().from(projects);
  const projectMocks = [
    {
      id: crypto.randomUUID(),
      title: "Sovereign ERP Protocol",
      slug: "sovereign-erp-protocol",
      category: "INDUSTRIAL_LOGIC",
      description: "Digital transformation for a leading regional manufacturer, reducing operational lag by 45%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      content: "## The Objective\nTo modernize a 20-year old manufacturing operational logic into a high-performance web-based protocol.\n\n## Technical Implementation\nBuilt with a Go-based core and a Next.js 14 HUD interface. We implemented real-time inventory tracking with <100ms latency across 5 regional warehouses.",
      tags: ["Go", "Next.js", "Redis", "PostgreSQL"],
      featured: "true",
      focusKeyword: "ERP Modernization",
      seoTitle: "Sovereign ERP Protocol | Industrial Case Study | Easyio",
      seoDescription: "How we reduced operational lag by 45% using Go and Next.js for a leading manufacturer.",
      metadata: { short: "Sovereign ERP", stats: { "Lag Reduction": "45%", "Uptime": "99.99%", "Latency": "<100ms" }, icon: "Cpu" }
    },
    {
      id: crypto.randomUUID(),
      title: "Global Supply Hub",
      slug: "global-supply-hub",
      category: "DISTRIBUTED_SYSTEMS",
      description: "Go-based backend infrastructure for international logistics management with 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1494412574743-019463ae8d63?auto=format&fit=crop&q=80&w=1200",
      content: "## The Objective\nScaling logistics tracking for a trans-continental supply chain provider.\n\n## Solution Architecture\nWe deployed a geographically distributed cluster of microservices using Kubernetes. The system handles over 1 million concurrent updates during peak shipping windows.",
      tags: ["Kubernetes", "Rust", "gRPC", "Kafka"],
      featured: "false",
      focusKeyword: "Distributed Logistics",
      seoTitle: "Case Study: Global Supply Hub Infrastructure | Easyio",
      seoDescription: "Architecting a global logistics hub capable of handling 1M+ concurrent updates with Rust and gRPC.",
      metadata: { short: "Supply Hub", stats: { "Concurrent Users": "1M+", "Throughput": "10Gb/s", "Global Nodes": "24" }, icon: "Globe" }
    }
  ];

  for (const mock of projectMocks) {
    const existing = existingProjects.find(p => p.slug === mock.slug);
    if (existing) {
      console.log(`Updating project: ${mock.title}`);
      const { id, ...updateData } = mock;
      await db.update(projects).set(updateData).where(eq(projects.id, existing.id));
    } else {
      console.log(`Inserting project: ${mock.title}`);
      await db.insert(projects).values(mock);
    }
  }

  // 2. Blog Posts Refresh (Technical Manifests)
  const existingBlogs = await db.select().from(blogPosts);
  const blogMocks = [
    {
      id: crypto.randomUUID(),
      title: "The Death of Traditional ERP",
      slug: "death-of-traditional-erp",
      excerpt: "Why legacy monolithic ERP systems are failing the modern enterprise and how sovereign protocols are taking over.",
      content: "# The Death of Traditional ERP\n\nLegacy systems are the silent killer of enterprise velocity. \n\n## Why Monoliths Fail\n1. Rigid data structures\n2. High maintenance latency\n3. Lack of real-time operational visibility\n\n## The Rise of Sovereign Protocols\nBy decoupling the core logic from the interface, we can achieve 100x better performance.",
      author: "Zaid bin Javaid",
      category: "ENTERPRISE",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      published: "true",
      focusKeyword: "ERP Future",
      seoTitle: "The Death of Traditional ERP | Future of Enterprise Logic",
      seoDescription: "Explore why monolithic ERP systems are obsolete and how new sovereign protocols are redefining enterprise velocity.",
      readingTime: "6 min read",
      keywords: "ERP, Enterprise Software, Modernization, Software Architecture",
      toc: JSON.stringify([
        { id: "why-monoliths-fail", title: "Why Monoliths Fail" },
        { id: "the-rise-of-sovereign-protocols", title: "The Rise of Sovereign Protocols" }
      ])
    },
    {
      id: crypto.randomUUID(),
      title: "Building High-Performance HUDs",
      slug: "building-high-performance-huds",
      excerpt: "Designing technical interfaces that don't just look cool, but provide immediate operational clarity.",
      content: "# Building High-Performance HUDs\n\nDesign is secondary to information density when it comes to industrial control systems.\n\n## HUD Philosophy\n- Absolute contrast\n- Zero-latency feedback\n- Contextual data layering",
      author: "Engineering Team",
      category: "DESIGN",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      published: "true",
      focusKeyword: "HUD Design",
      seoTitle: "Building High-Performance HUDs | Industrial UX Principles",
      seoDescription: "Learn how to design mission-critical technical interfaces for high-stakes industrial environments.",
      readingTime: "4 min read",
      keywords: "HUD, UI/UX, Design Systems, Industrial Software",
      toc: JSON.stringify([
        { id: "hud-philosophy", title: "HUD Philosophy" }
      ])
    }
  ];

  for (const mock of blogMocks) {
    const existing = existingBlogs.find(b => b.slug === mock.slug);
    if (existing) {
      console.log(`Updating blog: ${mock.title}`);
      const { id, ...updateData } = mock;
      await db.update(blogPosts).set(updateData).where(eq(blogPosts.id, existing.id));
    } else {
      console.log(`Inserting blog: ${mock.title}`);
      await db.insert(blogPosts).values(mock);
    }
  }

  console.log("Technical content refresh completed successfully.");
}

seed().catch(err => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
