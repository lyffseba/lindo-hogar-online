import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-24 sm:py-32 flex justify-center text-center px-4">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Tu hogar perfecto empieza aquí
          </h1>
          <p className="text-lg leading-8 text-gray-600">
            Descubre nuestra nueva colección de muebles para sala, comedor y alcobas con los mejores diseños.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/catalog"
              className="rounded-md bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories placeholder */}
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Categorías Destacadas</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 gap-x-6">
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-200 h-64 sm:aspect-none sm:h-80 transition-opacity hover:opacity-75 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Salas</span>
            </div>
          </div>
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-200 h-64 sm:aspect-none sm:h-80 transition-opacity hover:opacity-75 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Comedores</span>
            </div>
          </div>
          <div className="group relative">
            <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-200 h-64 sm:aspect-none sm:h-80 transition-opacity hover:opacity-75 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Alcobas</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
