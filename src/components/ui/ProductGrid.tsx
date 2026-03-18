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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {title && (
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
