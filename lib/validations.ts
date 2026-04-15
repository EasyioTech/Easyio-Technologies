import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(2, "Name must be at least 2 characters").max(50),
  company: z.string().optional(),
  role: z.string().optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
