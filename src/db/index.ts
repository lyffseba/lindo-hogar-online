import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL || '';

// Disable prefetch as it is not supported for "Transaction" pool mode in edge environments like Netlify/Vercel/Cloud Run
const client = postgres(connectionString, { 
  prepare: false,
  ssl: 'require', // Force SSL for Supabase connection
  connection: {
    // Some serverless environments need this specifically configured for URL strings with encoded passwords
    search_path: 'public'
  }
});

export const db = drizzle(client, { schema });
