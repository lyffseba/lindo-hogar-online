import postgres from 'postgres';
import fs from 'fs';

const envFile = fs.readFileSync('.env.local', 'utf8');
const dbUrlMatch = envFile.match(/DATABASE_URL="(.+)"/);

if (!dbUrlMatch) {
  console.log("No DATABASE_URL found");
  process.exit(1);
}

const sql = postgres(dbUrlMatch[1]);
try {
  const result = await sql`SELECT 1 as "health"`;
  console.log("Supabase Connection Successful! Health Check:", result);
  process.exit(0);
} catch (error) {
  console.error("Supabase Connection Failed:", error);
  process.exit(1);
}
