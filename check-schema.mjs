import postgres from 'postgres';

const connectionString = "postgresql://postgres.wxbkglxxzsyikimqssbm:%3B1421%3Bcherrybase%3B@aws-1-eu-north-1.pooler.supabase.com:6543/postgres";
const sql = postgres(connectionString);

async function main() {
    try {
        const columns = await sql`
            SELECT table_name, column_name, data_type 
            FROM information_schema.columns 
            WHERE table_schema = 'public' 
            ORDER BY table_name;
        `;
        const schema = {};
        for (const col of columns) {
            if (!schema[col.table_name]) schema[col.table_name] = [];
            schema[col.table_name].push(col.column_name);
        }
        console.log(schema);
    } catch (err) {
        console.error(err);
    } finally {
        await sql.end();
    }
}

main();
