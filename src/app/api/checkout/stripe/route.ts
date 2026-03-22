import { NextResponse } from "next/server";
import Stripe from "stripe";

// Handle optional env variable gracefully for build
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "dummy_key", { 
  apiVersion: "2026-02-25.clover" 
});

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("Stripe secret key is not configured.");
    }
    
    const { items, customer } = await req.json();

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: "cop",
        product_data: {
          name: item.name,
          images: [item.imageUrl.startsWith("http") ? item.imageUrl : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lindo-hogar-online.netlify.app'}${item.imageUrl}`],
        },
        unit_amount: Math.round(item.price), // COP is zero-decimal in Stripe
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lindo-hogar-online.netlify.app'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lindo-hogar-online.netlify.app'}/checkout`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
