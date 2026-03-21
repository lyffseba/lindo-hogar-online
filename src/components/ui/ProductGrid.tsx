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
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
          {title}
        </h2>
      )}

      {/* Added pt-4 here so the grid contents (like the LH user icons) don't touch the upper border if there's no title */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 pt-4 md:pt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
