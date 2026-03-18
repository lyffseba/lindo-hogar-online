import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import { ProductGrid } from '@/components/ui/ProductGrid';

const normalize = (str: string) => 
  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Pre-generate static params for the mock categories
export function generateStaticParams() {
  const categories = Array.from(new Set(MOCK_PRODUCTS.map((p) => normalize(p.category))));
  return categories.map((c) => ({ category: c }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  
  // Filter products matching the category (case-insensitive and ignoring accents)
  const filteredProducts = MOCK_PRODUCTS.filter(
    (p) => normalize(p.category) === normalize(decodedCategory) || 
           normalize(p.category) === normalize(decodedCategory) + 's' // simple singular/plural fallback
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
