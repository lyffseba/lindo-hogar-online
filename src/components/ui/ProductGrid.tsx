import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/mockData';

export function ProductGrid({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) {
  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-8 text-3xl font-black tracking-tight text-[#111111] md:text-4xl">
          {title}
        </h2>
      )}

      {/* Awwwards Academy Style Grid: Fewer columns, larger cards, more breathing room */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-4 md:pt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
