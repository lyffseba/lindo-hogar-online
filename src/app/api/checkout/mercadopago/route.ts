import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(req: Request) {
  try {
    if (!process.env.MP_ACCESS_TOKEN) {
      throw new Error("Mercado Pago access token is not configured.");
    }
    
    const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
    const { items, customer } = await req.json();

    const preferenceItems = items.map((item: any) => ({
      id: item.id,
      title: item.name,
      quantity: item.quantity,
      unit_price: Number(item.price),
      currency_id: "COP",
      picture_url: item.imageUrl.startsWith("http") ? item.imageUrl : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lindo-hogar-online.netlify.app'}${item.imageUrl}`,
    }));

    const preference = new Preference(client);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lindo-hogar-online.netlify.app';
    
    const response = await preference.create({
      body: {
        items: preferenceItems,
        payer: {
          name: customer.nombre,
          surname: "",
          email: "customer@lindohogar.com", // You should capture this in the form ideally
          phone: { area_code: "57", number: customer.telefono },
        },
        back_urls: {
          success: `${siteUrl}/checkout/success`,
          failure: `${siteUrl}/checkout`,
          pending: `${siteUrl}/checkout/pending`,
        },
        auto_return: "approved",
      }
    });

    return NextResponse.json({ url: response.init_point });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
