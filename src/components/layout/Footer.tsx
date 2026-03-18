import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 text-sm text-gray-600">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Lindo Hogar Online</h3>
            <p className="max-w-xs text-gray-500">
              Muebles y decoración de calidad para transformar tu hogar con el mejor estilo y comodidad.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categorías</h3>
            <ul className="space-y-3">
              <li><Link href="/catalog/sala" className="hover:text-black transition">Salas</Link></li>
              <li><Link href="/catalog/comedor" className="hover:text-black transition">Comedores</Link></li>
              <li><Link href="/catalog/alcoba" className="hover:text-black transition">Alcobas</Link></li>
              <li><Link href="/catalog/decoracion" className="hover:text-black transition">Decoración</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Servicio al Cliente</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="hover:text-black transition">Contacto</Link></li>
              <li><Link href="/faq" className="hover:text-black transition">Preguntas Frecuentes</Link></li>
              <li><Link href="/shipping" className="hover:text-black transition">Envíos y Entregas</Link></li>
              <li><Link href="/returns" className="hover:text-black transition">Devoluciones</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/terms" className="hover:text-black transition">Términos y Condiciones</Link></li>
              <li><Link href="/privacy" className="hover:text-black transition">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-gray-400 text-xs">
          <p>&copy; {currentYear} Lindo Hogar Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
