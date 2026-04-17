import { pgTable, text, timestamp, varchar, jsonb } from 'drizzle-orm/pg-core';

export const siteSettings = pgTable('site_settings', {
  id: varchar('id', { length: 255 }).primaryKey(),
  key: varchar('key', { length: 255 }).unique().notNull(),
  value: jsonb('value').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const projects = pgTable('projects', {
  id: varchar('id', { length: 255 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  description: text('description').notNull(),
  image: text('image'),
  tags: jsonb('tags').$type<string[]>(),
  link: text('link'),
  featured: text('featured').default('false'),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  // Expanded fields for detailed pages
  content: text('content'),
  category: varchar('category', { length: 255 }),
  // SEO & AI fields
  focusKeyword: varchar('focus_keyword', { length: 255 }),
  seoTitle: varchar('seo_title', { length: 100 }),
  seoDescription: varchar('seo_description', { length: 255 }),
});

export const testimonials = pgTable('testimonials', {
  id: varchar('id', { length: 255 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  role: varchar('role', { length: 255 }).notNull(),
  content: text('content').notNull(),
  avatar: text('avatar'),
  company: varchar('company', { length: 255 }),
  rating: text('rating').default('5'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const blogPosts = pgTable('blog_posts', {
  id: varchar('id', { length: 255 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  author: varchar('author', { length: 255 }).notNull(),
  category: varchar('category', { length: 255 }).notNull(),
  published: text('published').default('false'),
  image: text('image'),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  // SEO & AI fields
  focusKeyword: varchar('focus_keyword', { length: 255 }),
  seoTitle: varchar('seo_title', { length: 100 }),
  seoDescription: varchar('seo_description', { length: 255 }),
  keywords: text('keywords'),
  readingTime: varchar('reading_time', { length: 50 }),
  toc: text('toc'),
});

