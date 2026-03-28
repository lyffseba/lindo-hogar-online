import postgres from 'postgres';

const connectionString = "postgresql://postgres.wxbkglxxzsyikimqssbm:%3B1421%3Bcherrybase%3B@aws-1-eu-north-1.pooler.supabase.com:6543/postgres";
const sql = postgres(connectionString);

async function main() {
    try {
        console.log("Applying RLS...");
        
        // Products
        await sql`ALTER TABLE products ENABLE ROW LEVEL SECURITY;`;
        await sql`DROP POLICY IF EXISTS "Public products are viewable by everyone" ON products;`;
        await sql`CREATE POLICY "Public products are viewable by everyone" ON products FOR SELECT USING (true);`;
        
        // Orders
        await sql`ALTER TABLE orders ENABLE ROW LEVEL SECURITY;`;
        await sql`DROP POLICY IF EXISTS "Users can view their own orders" ON orders;`;
        await sql`CREATE POLICY "Users can view their own orders" ON orders FOR SELECT USING (auth.uid() = user_id);`;
        await sql`DROP POLICY IF EXISTS "Users can insert their own orders" ON orders;`;
        await sql`CREATE POLICY "Users can insert their own orders" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);`;

        // Users
        await sql`ALTER TABLE users ENABLE ROW LEVEL SECURITY;`;
        await sql`DROP POLICY IF EXISTS "Users can view their own profile" ON users;`;
        await sql`CREATE POLICY "Users can view their own profile" ON users FOR SELECT USING (auth.uid() = id);`;
        await sql`DROP POLICY IF EXISTS "Users can update their own profile" ON users;`;
        await sql`CREATE POLICY "Users can update their own profile" ON users FOR UPDATE USING (auth.uid() = id);`;
        await sql`DROP POLICY IF EXISTS "Users can insert their own profile" ON users;`;
        await sql`CREATE POLICY "Users can insert their own profile" ON users FOR INSERT WITH CHECK (auth.uid() = id);`;

        console.log("Successfully applied RLS policies to products, orders, and users tables.");
    } catch (err) {
        console.error(err);
    } finally {
        await sql.end();
    }
}

main();
