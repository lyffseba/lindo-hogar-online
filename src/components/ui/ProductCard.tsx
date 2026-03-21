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
    <div className="group flex flex-col cursor-pointer bg-white rounded-md mt-2">
      {/* User Info (Vinted Style) */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <span className="text-[10px] font-bold text-gray-500">LH</span>
          </div>
          <span className="text-xs font-medium text-gray-600 truncate max-w-[100px]">lindo_hogar_oficial</span>
        </div>
      </div>
      
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-[#f2f2f2] rounded-md overflow-hidden mb-2">
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-[#e25d6b] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
            NUEVO
          </div>
        )}
        {product.originalPrice && !product.isNew && (
          <div className="absolute top-2 left-2 bg-[#e25d6b] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
            OFERTA
          </div>
        )}
        <button 
          className="absolute bottom-2 right-2 z-10 p-1.5 rounded-full text-gray-500 hover:text-[#e25d6b] transition-colors"
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="px-1">
        <div className="flex items-baseline space-x-2">
          <p className="text-base font-bold text-[#111111]">{formatPrice(product.price)}</p>
          {product.originalPrice && (
            <p className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</p>
          )}
        </div>
        <Link href={`/product/${product.id}`}>
          <p className="text-sm text-gray-500 truncate mt-0.5 group-hover:text-[#175d9c] transition-colors">{product.name}</p>
        </Link>
        <p className="text-xs text-gray-400 mt-0.5">{product.category} · Nuevo con etiquetas</p>
      </div>
    </div>
  );
}
