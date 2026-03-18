import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import { ProductGrid } from '@/components/ui/ProductGrid';

// Pre-generate static params for the mock categories
export function generateStaticParams() {
  const categories = Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category.toLowerCase())));
  return categories.map((c) => ({ category: c }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  // Filter products matching the category (case-insensitive)
  const filteredProducts = MOCK_PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    notFound();
  }

  const categoryName = filteredProducts[0].category;

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-primary-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white capitalize">{categoryName}</h1>
        <p className="mt-4 max-w-xl mx-auto text-xl text-primary-100">
          Lo mejor en {categoryName.toLowerCase()} para tu hogar.
        </p>
      </div>
      
      {/* Grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
