import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Disable prefetch as it is not supported for "Transaction" pool mode in edge environments like Netlify/Vercel/Cloud Run
// Also explicitly disable SSL rejection since serverless environments often need SSL enabled for external DBs
const client = postgres(process.env.DATABASE_URL as string, { 
  prepare: false,
  ssl: 'require' // Force SSL for Supabase connection
});

export const db = drizzle(client, { schema });
