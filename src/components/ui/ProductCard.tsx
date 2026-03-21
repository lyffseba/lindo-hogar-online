'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/mockData';
import { useCartStore } from '@/store/cartStore';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  // Format price as Colombian Pesos (COP)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group flex flex-col cursor-pointer bg-white mt-2 transition-transform duration-300 hover:-translate-y-1">
      {/* Product Image - Awwwards Academy Style (often landscape or square, very clean border) */}
      <div className="relative aspect-[4/3] bg-[#f2f2f2] rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
        
        {/* Badges on Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <div className="bg-[#111111] text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
              Nuevo
            </div>
          )}
          {product.originalPrice && !product.isNew && (
            <div className="bg-[#e25d6b] text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
              Oferta
            </div>
          )}
        </div>

        {/* Favorite/Cart button on Top Right */}
        <button 
          className="absolute top-3 right-3 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-[#175d9c] shadow-sm transition-all hover:scale-110"
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
        >
          <ShoppingCart className="w-4 h-4" />
        </button>

        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Product Details - Awwwards Academy Style (bold typography, highly clear pricing, minimal distraction) */}
      <div className="px-2 flex flex-col">
        {/* Category Label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#175d9c]"></span>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{product.category}</p>
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl md:text-2xl font-black text-[#111111] leading-tight mb-2 group-hover:text-[#175d9c] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Pricing Block */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through font-medium leading-none mb-1">
                {formatPrice(product.originalPrice)}
              </p>
            )}
            <p className="text-2xl font-black text-[#111111] leading-none">
              {formatPrice(product.price)}
            </p>
          </div>
          
          <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#175d9c] group-hover:bg-[#175d9c] group-hover:text-white transition-colors">
            <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
