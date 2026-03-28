import postgres from 'postgres';

const connectionString = "postgresql://postgres.wxbkglxxzsyikimqssbm:%3B1421%3Bcherrybase%3B@aws-1-eu-north-1.pooler.supabase.com:6543/postgres";
const sql = postgres(connectionString);

async function main() {
    try {
        const columns = await sql`
            SELECT table_name, column_name, data_type 
            FROM information_schema.columns 
            WHERE table_schema = 'public' AND column_name IN ('id', 'user_id');
        `;
        console.log(columns);
    } catch (err) {
        console.error(err);
    } finally {
        await sql.end();
    }
}

main();
