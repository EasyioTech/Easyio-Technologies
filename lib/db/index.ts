import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const connectionString = process.env.DATABASE_URL;

// Prevent multiple instances of the database client in development/HMR
const globalForDb = globalThis as unknown as {
  client: ReturnType<typeof postgres> | undefined;
  db: ReturnType<typeof drizzle> | undefined;
};

export const client = globalForDb.client ?? postgres(connectionString, { prepare: false });
export const db = globalForDb.db ?? drizzle(client);

if (process.env.NODE_ENV !== 'production') {
  globalForDb.client = client;
  globalForDb.db = db;
}
