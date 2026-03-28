import postgres from 'postgres';
import fs from 'fs';

const connectionString = "postgresql://postgres.wxbkglxxzsyikimqssbm:%3B1421%3Bcherrybase%3B@aws-1-eu-north-1.pooler.supabase.com:6543/postgres";
const sql = postgres(connectionString);

async function main() {
    try {
        console.log("Checking tables...");
        const tables = await sql`
            SELECT tablename 
            FROM pg_tables 
            WHERE schemaname = 'public';
        `;
        console.log("Tables in public schema:", tables.map(t => t.tablename));

        for (const table of tables) {
            const rlsStatus = await sql`
                SELECT relrowsecurity 
                FROM pg_class 
                WHERE relname = ${table.tablename};
            `;
            console.log(`Table ${table.tablename} RLS enabled: ${rlsStatus[0]?.relrowsecurity}`);
        }
    } catch (err) {
        console.error(err);
    } finally {
        await sql.end();
    }
}

main();
