import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/placeholder';

// Prevent connecting to placeholder during build
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build';

// Prevent multiple instances of the database client in development/HMR
const globalForDb = globalThis as unknown as {
  client: ReturnType<typeof postgres> | undefined;
  db: ReturnType<typeof drizzle> | undefined;
};

let client: ReturnType<typeof postgres>;
let db: ReturnType<typeof drizzle>;

if (isBuildTime) {
  // Mock client/db during build to avoid connection attempts
  client = {} as any;
  db = {
    select: () => ({ from: () => ({ orderBy: () => Promise.resolve([]) }) }),
  } as any;
} else {
  client = globalForDb.client ?? postgres(connectionString, { 
    prepare: false,
    connect_timeout: 10,
    idle_timeout: 20,
    max: 10
  });
  db = globalForDb.db ?? drizzle(client);

  if (process.env.NODE_ENV !== 'production') {
    globalForDb.client = client;
    globalForDb.db = db;
  }
}

export { client, db };
