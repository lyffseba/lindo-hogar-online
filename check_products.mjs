import postgres from 'postgres';
import fs from 'fs';

const envFile = fs.readFileSync('.env.local', 'utf8');
const dbUrlMatch = envFile.match(/DATABASE_URL="(.+)"/);
const sql = postgres(dbUrlMatch[1]);

async function run() {
  try {
    const products = await sql`SELECT count(*) FROM products`;
    console.log("Product Count:", products[0].count);
    const activeProducts = await sql`SELECT count(*) FROM products WHERE is_active = true`;
    console.log("Active Product Count:", activeProducts[0].count);
    const sample = await sql`SELECT name, price FROM products LIMIT 5`;
    console.log("Sample Products:", sample);
    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}
run();
