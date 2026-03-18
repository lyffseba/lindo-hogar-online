import { db } from '@/db';
import { products } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addProductAction(formData: FormData) {
  'use server';
  
  // Basic server action to add a product directly to Supabase
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const price = formData.get('price') as string;
  const imageUrl = formData.get('imageUrl') as string;
  const category = formData.get('category') as string;
  
  // We'll just generate a simple slug for the db requirement
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  await db.insert(products).values({
    name,
    description,
    price: price,
    imageUrl: imageUrl || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    slug: slug + '-' + Date.now().toString().slice(-4), // Ensure uniqueness
    inventory: 10,
    isActive: true,
  });

  // Force the catalog to re-fetch from the database
  revalidatePath('/catalog');
  revalidatePath('/');
  
  redirect('/admin?success=true');
}
