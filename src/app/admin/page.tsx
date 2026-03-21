import { addProductAction } from './actions';
import { db } from '@/db';
import { products } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { Button } from '@/components/ui/Button';

// This forces the page to always be dynamic (no caching)
export const dynamic = 'force-dynamic';

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const { success } = await searchParams;
  
  let liveProducts: typeof products.$inferSelect[] = [];
  let dbError = null;
  
  try {
    // Fetch existing real products from Supabase
    liveProducts = await db.query.products.findMany({
      orderBy: [desc(products.createdAt)],
      limit: 10,
    });
  } catch (error: unknown) {
    dbError = error instanceof Error ? error.message : String(error);
  }

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(parseFloat(price));
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Admin Dashboard</h1>
          <p className="text-neutral-500 mt-1">Conectado a Supabase PostgreSQL</p>
        </div>
      </div>

      {dbError && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-8">
          <strong>Error de Base de Datos:</strong> {dbError}
        </div>
      )}

      {success === 'true' && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-8">
          ¡Producto agregado exitosamente a la base de datos!
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">Nuevo Producto</h2>
            
            <form action={addProductAction} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Nombre del Producto</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="ej. Sala Esquinera"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1">Categoría</label>
                <select 
                  name="category" 
                  id="category" 
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="Salas">Salas</option>
                  <option value="Comedores">Comedores</option>
                  <option value="Alcobas">Alcobas</option>
                  <option value="Decoracion">Decoración</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-neutral-700 mb-1">Precio (COP)</label>
                <input 
                  type="number" 
                  name="price" 
                  id="price" 
                  required 
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="1500000"
                />
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-neutral-700 mb-1">URL de la Imagen (Supabase Storage)</label>
                <input 
                  type="url" 
                  name="imageUrl" 
                  id="imageUrl" 
                  required 
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="https://..."
                />
                <p className="text-xs text-neutral-500 mt-1">Sube la foto a Supabase y pega el link público aquí.</p>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">Descripción</label>
                <textarea 
                  name="description" 
                  id="description" 
                  rows={4} 
                  required 
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <Button type="submit" className="w-full">
                Guardar en Base de Datos
              </Button>
            </form>
          </div>
        </div>

        {/* Database View Column */}
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">Inventario en Supabase ({liveProducts.length})</h2>
            
            {liveProducts.length === 0 && !dbError ? (
              <div className="text-center py-12 text-neutral-500 bg-neutral-50 rounded-md border border-dashed">
                No hay productos en la base de datos real todavía.
                <br />
                Usa el formulario para agregar el primer producto.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-neutral-500 uppercase bg-neutral-50">
                    <tr>
                      <th className="px-4 py-3 rounded-tl-md">Producto</th>
                      <th className="px-4 py-3">Precio</th>
                      <th className="px-4 py-3">Stock</th>
                      <th className="px-4 py-3 rounded-tr-md">Creado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {liveProducts.map((product) => (
                      <tr key={product.id} className="border-b last:border-0 hover:bg-neutral-50">
                        <td className="px-4 py-4 font-medium text-neutral-900 flex items-center gap-3">
                          <img src={product.imageUrl || ''} alt="" className="w-10 h-10 object-cover rounded border" />
                          <div>
                            {product.name}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-neutral-600">{formatPrice(product.price)}</td>
                        <td className="px-4 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {product.inventory} disp.
                          </span>
                        </td>
                        <td className="px-4 py-4 text-neutral-500">
                          {new Date(product.createdAt).toLocaleDateString('es-CO')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
