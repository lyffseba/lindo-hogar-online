'use client';

import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    departamento: 'Bogotá D.C.',
    ciudad: 'Bogotá',
    direccion: '',
    barrio: '',
    metodoPago: 'contra_entrega'
  });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10); return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted && items.length === 0) {
      router.push('/catalog');
    }
  }, [mounted, items, router]);

  if (!mounted || items.length === 0) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    // Simulate API call to save order in database (Supabase)
    // await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      if (formData.metodoPago === 'whatsapp') {
        let text = `¡Hola! Acabo de hacer un pedido en Lindo Hogar Online.%0A%0A*Mis Datos:*%0ANombre: ${formData.nombre}%0ATeléfono: ${formData.telefono}%0ADirección: ${formData.direccion}, ${formData.barrio} (${formData.ciudad}, ${formData.departamento})%0A%0A*Mi Pedido:*%0A`;
        items.forEach((item) => {
          text += `- ${item.quantity}x ${item.name} (${formatPrice(item.price)})%0A`;
        });
        text += `%0A*Total: ${formatPrice(getTotalPrice())}*`;
        window.open(`https://wa.me/573112774673?text=${text}`, '_blank');
        clearCart();
        router.push('/checkout/success');
      } 
      else if (formData.metodoPago === 'mercadopago') {
        // Redirigir a MercadoPago Checkout Pro
        const res = await fetch('/api/checkout/mercadopago', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items, customer: formData }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error al conectar con Mercado Pago');
        if (data.url) window.location.href = data.url;
      }
      else if (formData.metodoPago === 'stripe') {
        // Redirigir a Stripe Checkout
        const res = await fetch('/api/checkout/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items, customer: formData }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error al conectar con Stripe');
        if (data.url) window.location.href = data.url;
      }
      else if (formData.metodoPago === 'contra_entrega') {
        clearCart();
        router.push('/checkout/success');
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Ocurrió un error inesperado al procesar el pago.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-black text-[#111111] mb-8">Finalizar Compra</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Seccion 1: Contacto */}
              <section>
                <h2 className="text-xl font-bold text-[#111111] mb-4 flex items-center gap-2">
                  <span className="bg-[#111111] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span> 
                  Tus Datos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                    <input required type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-[#f2f2f2] border-transparent focus:bg-white focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 transition-all outline-none" placeholder="Ej. Ana Gómez" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Celular / WhatsApp</label>
                    <input required type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-[#f2f2f2] border-transparent focus:bg-white focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 transition-all outline-none" placeholder="Ej. 300 123 4567" />
                  </div>
                </div>
              </section>

              {/* Seccion 2: Envio */}
              <section>
                <h2 className="text-xl font-bold text-[#111111] mb-4 flex items-center gap-2">
                  <span className="bg-[#111111] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span> 
                  Dirección de Entrega
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Departamento</label>
                    <select name="departamento" value={formData.departamento} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-[#f2f2f2] border-transparent focus:bg-white focus:border-[#175d9c] outline-none">
                      <option>Bogotá D.C.</option>
                      <option>Cundinamarca</option>
                      <option>Antioquia</option>
                      <option>Valle del Cauca</option>
                      <option>Atlántico</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad / Municipio</label>
                    <input required type="text" name="ciudad" value={formData.ciudad} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-[#f2f2f2] border-transparent focus:bg-white focus:border-[#175d9c] outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección Exacta</label>
                    <input required type="text" name="direccion" value={formData.direccion} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-[#f2f2f2] border-transparent focus:bg-white focus:border-[#175d9c] outline-none" placeholder="Cra 15 # 24-40 Apto 201" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Barrio</label>
                    <input required type="text" name="barrio" value={formData.barrio} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-[#f2f2f2] border-transparent focus:bg-white focus:border-[#175d9c] outline-none" placeholder="Restrepo" />
                  </div>
                </div>
              </section>

              {/* Seccion 3: Pago */}
              <section>
                <h2 className="text-xl font-bold text-[#111111] mb-4 flex items-center gap-2">
                  <span className="bg-[#111111] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span> 
                  Método de Pago
                </h2>
                <div className="space-y-3">
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.metodoPago === 'whatsapp' ? 'border-[#25D366] bg-[#25D366]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="metodoPago" value="whatsapp" checked={formData.metodoPago === 'whatsapp'} onChange={handleInputChange} className="w-5 h-5 text-[#25D366] border-gray-300 focus:ring-[#25D366]" />
                    <span className="ml-3 flex flex-col">
                      <span className="font-bold text-[#111111]">Pagar por WhatsApp (Transferencia)</span>
                      <span className="text-sm text-gray-500">Nequi, Daviplata o Bancolombia. Validamos contigo en chat.</span>
                    </span>
                  </label>

                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.metodoPago === 'mercadopago' ? 'border-[#009ee3] bg-[#009ee3]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="metodoPago" value="mercadopago" checked={formData.metodoPago === 'mercadopago'} onChange={handleInputChange} className="w-5 h-5 text-[#009ee3] border-gray-300 focus:ring-[#009ee3]" />
                    <span className="ml-3 flex flex-col">
                      <span className="font-bold text-[#111111]">Mercado Pago (PSE, Tarjetas, Efecty)</span>
                      <span className="text-sm text-gray-500">Pagos 100% seguros y rápidos en Colombia.</span>
                    </span>
                  </label>

                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.metodoPago === 'stripe' ? 'border-[#635BFF] bg-[#635BFF]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="metodoPago" value="stripe" checked={formData.metodoPago === 'stripe'} onChange={handleInputChange} className="w-5 h-5 text-[#635BFF] border-gray-300 focus:ring-[#635BFF]" />
                    <span className="ml-3 flex flex-col">
                      <span className="font-bold text-[#111111]">Stripe (Tarjeta de Crédito / Débito)</span>
                      <span className="text-sm text-gray-500">Pasarela internacional. Apple Pay y Google Pay soportados.</span>
                    </span>
                  </label>
                  
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.metodoPago === 'contra_entrega' ? 'border-[#175d9c] bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="metodoPago" value="contra_entrega" checked={formData.metodoPago === 'contra_entrega'} onChange={handleInputChange} className="w-5 h-5 text-[#175d9c] border-gray-300 focus:ring-[#175d9c]" />
                    <span className="ml-3 flex flex-col">
                      <span className="font-bold text-[#111111]">Pago Contra Entrega</span>
                      <span className="text-sm text-gray-500">Pagas en efectivo al recibir en la puerta de tu casa.</span>
                    </span>
                  </label>
                </div>
                
                {errorMsg && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm font-medium rounded-lg border border-red-200">
                    {errorMsg}
                  </div>
                )}

              </section>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#111111] hover:bg-black text-white font-black text-xl rounded-xl shadow-lg transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Procesando...' : (
                  formData.metodoPago === 'whatsapp' ? 'Confirmar y Pagar por WhatsApp' : 
                  formData.metodoPago === 'mercadopago' ? 'Pagar Seguro con Mercado Pago' :
                  formData.metodoPago === 'stripe' ? 'Pagar con Stripe' :
                  'Confirmar Pedido'
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-[#111111] mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden bg-[#f2f2f2] flex-shrink-0">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-sm font-bold text-[#111111] line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-gray-500">Cant: {item.quantity}</p>
                      <p className="text-sm font-bold text-[#175d9c] mt-1">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span className="text-green-600 font-bold">Gratis</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
                  <span className="text-lg font-bold text-[#111111]">Total</span>
                  <span className="text-3xl font-black text-[#111111] leading-none">{formatPrice(getTotalPrice())}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
