import Link from 'next/link';
import Image from 'next/image';
import { ProductGrid } from '@/components/ui/ProductGrid';
import { MOCK_PRODUCTS } from '@/lib/mockData';

export default function Home() {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 5); // Take 5 for a grid

  return (
    <div className="bg-white font-sans text-[#111111] min-h-screen">
      
      {/* HERO SECTION - VINTED STYLE */}
      <div className="relative w-full overflow-hidden bg-[#eef2f5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text content (Left) */}
            <div className="w-full md:w-1/2 px-6 py-12 md:py-24 md:pl-8 lg:pl-8 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] mb-6 leading-tight">
                ¿Es hora de<br />renovar tu hogar?
              </h1>
              <Link 
                href="/catalog" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#175d9c] hover:bg-[#114b7e] transition-colors shadow-sm"
              >
                Empieza a comprar
              </Link>
            </div>
            
            {/* Image (Right) */}
            <div className="w-full md:w-1/2 h-64 md:h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#eef2f5] to-transparent md:w-32 z-10 hidden md:block"></div>
              <Image 
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200" 
                alt="Hero Lindo Hogar" 
                fill
                priority
                className="object-cover object-center md:rounded-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT: PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] tracking-tight">Novedades para ti</h2>
          <Link href="/catalog" className="text-sm font-medium text-[#175d9c] hover:underline">
            Ver todo
          </Link>
        </div>
        
        <ProductGrid title="" products={featuredProducts} />

        {/* Category Pills / Circles */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl font-bold text-[#111111] tracking-tight mb-6">Comprar por categoría</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            
            <Link href="/catalog/dormitorio" className="flex flex-col items-center group min-w-[80px]">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-3 group-hover:ring-2 group-hover:ring-[#175d9c] transition-all overflow-hidden relative">
                 <span className="text-2xl">🛏️</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Dormitorio</span>
            </Link>

            <Link href="/catalog/comedores" className="flex flex-col items-center group min-w-[80px]">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-3 group-hover:ring-2 group-hover:ring-[#175d9c] transition-all overflow-hidden relative">
                 <span className="text-2xl">🍽️</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Cocina</span>
            </Link>

            <Link href="/catalog/salas" className="flex flex-col items-center group min-w-[80px]">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-3 group-hover:ring-2 group-hover:ring-[#175d9c] transition-all overflow-hidden relative">
                 <span className="text-2xl">🛋️</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Salas</span>
            </Link>

            <Link href="/catalog/decoracion" className="flex flex-col items-center group min-w-[80px]">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-3 group-hover:ring-2 group-hover:ring-[#175d9c] transition-all overflow-hidden relative">
                 <span className="text-2xl">🖼️</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Decoración</span>
            </Link>

            <Link href="/catalog/bebes" className="flex flex-col items-center group min-w-[80px]">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-3 group-hover:ring-2 group-hover:ring-[#175d9c] transition-all overflow-hidden relative">
                 <span className="text-2xl">👶</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Bebés</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
