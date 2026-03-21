'use client';

import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-[#f2f2f2] min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm text-center max-w-lg border border-gray-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-[#111111] mb-4">¡Pedido Recibido!</h1>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          Gracias por confiar en <strong>Lindo Hogar Online</strong>. Hemos registrado tu solicitud y uno de nuestros asesores te contactará muy pronto para coordinar el envío.
        </p>

        <div className="space-y-4">
          <Link 
            href="/catalog" 
            className="block w-full py-4 bg-[#175d9c] hover:bg-[#114b7e] text-white font-bold text-lg rounded-xl shadow-md transition-all hover:-translate-y-1"
          >
            Seguir Comprando
          </Link>
          <a 
            href="https://wa.me/573112774673" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-4 bg-transparent border-2 border-gray-200 text-gray-600 hover:border-[#25D366] hover:text-[#25D366] font-bold text-lg rounded-xl transition-all"
          >
            ¿Tienes dudas? Escríbenos
          </a>
        </div>
      </div>
    </div>
  );
}
