import Link from 'next/link';
import { ProductGrid } from '@/components/ui/ProductGrid';
import { MOCK_PRODUCTS } from '@/lib/mockData';

export default function Home() {
  // Take first 4 for featured section
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-primary-100 py-24 sm:py-32 flex justify-center text-center px-4">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-900 sm:text-6xl">
            Tu hogar perfecto empieza aquí
          </h1>
          <p className="text-lg leading-8 text-primary-700">
            Descubre nuestra nueva colección de muebles para sala, comedor y alcobas con los mejores diseños de Lindo Hogar.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/catalog"
              className="rounded-md bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-500/90 transition-colors"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Component */}
      <ProductGrid title="Productos Destacados" products={featuredProducts} />

      {/* Featured Categories Banner */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">Explora por Categoría</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 gap-x-6">
          <Link href="/catalog/salas" className="group relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200 transition-opacity hover:opacity-75 flex items-center justify-center relative shadow-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <span className="text-white text-2xl font-bold z-20 drop-shadow-md">Salas</span>
            </div>
          </Link>
          <Link href="/catalog/comedores" className="group relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200 transition-opacity hover:opacity-75 flex items-center justify-center relative shadow-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <span className="text-white text-2xl font-bold z-20 drop-shadow-md">Comedores</span>
            </div>
          </Link>
          <Link href="/catalog/alcobas" className="group relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200 transition-opacity hover:opacity-75 flex items-center justify-center relative shadow-sm">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <span className="text-white text-2xl font-bold z-20 drop-shadow-md">Alcobas</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
