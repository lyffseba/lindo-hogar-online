'use server';

import { db } from '@/db';
import { products, orders } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { requestPickupFromWarehouse } from '@/lib/logistics';

export async function addProductAction(formData: FormData) {
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

// Dispatch order directly to Lalamove/Mensajeros Urbanos API
export async function dispatchOrderAction(orderId: string, customerData: { name: string; phone: string; address: string; city: string }) {
  // Call our logistics API integration
  const deliveryData = await requestPickupFromWarehouse({
    orderId,
    customerName: customerData.name,
    customerPhone: customerData.phone,
    customerAddress: customerData.address,
    customerCity: customerData.city
  });

  // Update order in Supabase to 'shipped' and attach the tracking URL/Task ID
  await db.update(orders)
    .set({
      status: 'shipped',
      deliveryTaskId: deliveryData.taskId,
      trackingUrl: deliveryData.trackingUrl
    })
    .where(eq(orders.id, orderId));

  revalidatePath('/admin');
  return { success: true, deliveryData };
}
