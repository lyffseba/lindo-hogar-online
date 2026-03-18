import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from './Button';
import type { Product } from '@/lib/mockData';

export function ProductCard({ product }: { product: Product }) {
  // Format price as Colombian Pesos (COP)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md h-full">
      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="relative aspect-square w-full overflow-hidden bg-neutral-100 block">
        {product.isNew && (
          <div className="absolute left-2 top-2 z-10 rounded bg-accent-500 px-2 py-1 text-[10px] font-bold tracking-wider text-white shadow uppercase">
            Nuevo
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute right-2 top-2 z-10 rounded bg-red-600 px-2 py-1 text-[10px] font-bold tracking-wider text-white shadow uppercase">
            Oferta
          </div>
        )}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs text-neutral-500">{product.category}</div>
        <Link href={`/product/${product.id}`}>
          <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-neutral-900 group-hover:text-primary-700">
            {product.name}
          </h3>
        </Link>
        
        {/* Spacer to push price/button to bottom */}
        <div className="mt-auto pt-2">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg font-bold text-neutral-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Action Button */}
          <Button 
            variant="accent" 
            className="w-full gap-2"
            onClick={() => console.log('Add to cart clicked:', product.id)}
          >
            <ShoppingCart className="h-4 w-4" />
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
}
