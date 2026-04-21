# Build-time dependencies
FROM node:20-slim AS deps
WORKDIR /app

# Install system dependencies needed for some native modules
RUN apt-get update && apt-get install -y openssl python3 build-essential && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
# Use npm ci for clean, reproducible installs
RUN npm ci

# Builder stage
FROM node:20-slim AS builder
WORKDIR /app

# Install system dependencies again for the builder stage
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Moderate heap size to avoid OOM on 1GB/2GB VPS
ENV NODE_OPTIONS="--max-old-space-size=2048"
# Skip type-checking and linting to save memory/time
ENV NEXT_SKIP_TYPE_CHECK=1
ENV NEXT_SKIP_LINT=1

# Disable build-time database connection checks
# This prevents Next.js from trying to pre-render dynamic pages during build
ENV DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder"

RUN npm run build

# Runner stage
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

# Copy essential folders
COPY --from=builder /app/public ./public
COPY --from=builder /app/content ./content

# Set correct permissions
RUN mkdir .next && chown nextjs:nodejs .next

# Copy the standalone build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
