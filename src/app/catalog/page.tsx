import { MOCK_PRODUCTS } from '@/lib/mockData';
import { ProductGrid } from '@/components/ui/ProductGrid';

export default function CatalogPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="bg-primary-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Catálogo Completo</h1>
        <p className="mt-4 max-w-xl mx-auto text-xl text-primary-100">
          Encuentra los mejores muebles y decoración para tu hogar.
        </p>
      </div>
      
      {/* Filters (Mock) */}
      <div className="border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <p className="text-neutral-500">{MOCK_PRODUCTS.length} productos</p>
          <div className="flex gap-4">
            <span className="font-medium text-neutral-900 cursor-pointer hover:text-primary-700">Relevancia</span>
            <span className="text-neutral-500 cursor-pointer hover:text-primary-700">Menor Precio</span>
            <span className="text-neutral-500 cursor-pointer hover:text-primary-700">Mayor Precio</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <ProductGrid products={MOCK_PRODUCTS} />
    </div>
  );
}
