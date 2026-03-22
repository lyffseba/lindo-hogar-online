// Lalamove / Mensajeros Urbanos (MU) Integration for Last-Mile Delivery in Bogotá

export interface DeliveryRequest {
  orderId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerCity: string;
  totalWeight?: number; // In kg
}

export interface DeliveryResponse {
  taskId: string;
  trackingUrl: string;
  driverName?: string;
  driverPhone?: string;
  status: string;
  estimatedPrice: number;
}

export async function requestPickupFromWarehouse(order: DeliveryRequest): Promise<DeliveryResponse> {
  const isProd = process.env.NODE_ENV === 'production';
  const apiKey = process.env.LOGISTICS_API_KEY;
  
  if (!apiKey && isProd) {
    console.warn("LOGISTICS_API_KEY no configurada. Simulando despacho (Sandbox).");
  }

  // WAREHOUSE CONFIGURATION (Punto de Origen)
  const warehouseAddress = process.env.WAREHOUSE_ADDRESS || "Av. Boyacá # 12-34, Bogotá, Colombia";
  const warehousePhone = process.env.WAREHOUSE_PHONE || "+573000000000";
  const warehouseContact = "Despachos Lindo Hogar";

  // Simulate calling the Mensajeros Urbanos / Lalamove API
  // In a real scenario, you use node-fetch to POST to their API with origin/destination coords
  console.log(`[LOGISTICS] Solicitando recogida en bodega (${warehouseAddress}) para entrega en ${order.customerAddress}, ${order.customerCity}`);
  
  // Simulated API Delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // Simulated Response from Courier API
  return {
    taskId: `MU-${Math.floor(Math.random() * 100000)}`,
    trackingUrl: `https://track.logistics.com/co/lho/${order.orderId}`,
    driverName: "Carlos Pérez",
    driverPhone: "+573219876543",
    status: "assigning_driver", // El mensajero va en camino a la bodega
    estimatedPrice: 12500 // COP
  };
}
