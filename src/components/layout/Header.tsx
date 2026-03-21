'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';

export default function Header() {
  const { getTotalItems, setIsOpen } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Top Row */}
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            
            {/* Logo & Mobile Menu */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <button 
                className="md:hidden text-gray-500 hover:text-black p-1 -ml-1 rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl md:text-3xl font-black text-primary-500 tracking-tight">Lindo Hogar <span className="text-[#e25d6b] font-medium text-lg md:text-xl">Online</span></span>
              </Link>
            </div>

            {/* Search Bar (Middle - Vinted Style) */}
            <div className="flex-1 max-w-2xl hidden md:flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-2.5 border border-transparent rounded-md leading-5 bg-neutral-100 text-neutral-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm transition-colors duration-200" 
                  placeholder="Buscar artículos para el hogar..."
                />
              </div>
            </div>

            {/* Actions: Auth, Sell Button & Cart */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link href="/account" className="hidden lg:inline-block text-sm font-medium text-primary-500 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors">
                Regístrate | Inicia sesión
              </Link>
              <Link href="#" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-[#114b7e] transition-colors shadow-sm whitespace-nowrap">
                Vender ahora
              </Link>
              
              <Link href="/account" className="text-gray-500 hover:text-black md:hidden p-1 rounded-md">
                <User className="h-5 w-5" />
              </Link>
              
              <button 
                className="text-gray-500 hover:text-black relative p-1 rounded-md"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag className="h-6 w-6" />
                {mounted && getTotalItems() > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-white shadow-sm">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Secondary Nav (Categories - Vinted Style) */}
        <nav className="hidden md:block max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ul className="flex space-x-6 lg:space-x-8 text-sm font-medium text-gray-600 pb-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <li><Link href="/catalog" className="hover:text-primary-500 hover:underline underline-offset-8 decoration-2 whitespace-nowrap">Dormitorio</Link></li>
            <li><Link href="/catalog/salas" className="hover:text-primary-500 hover:underline underline-offset-8 decoration-2 whitespace-nowrap">Salas</Link></li>
            <li><Link href="/catalog/comedores" className="hover:text-primary-500 hover:underline underline-offset-8 decoration-2 whitespace-nowrap">Comedores</Link></li>
            <li><Link href="/catalog/alcobas" className="hover:text-primary-500 hover:underline underline-offset-8 decoration-2 whitespace-nowrap">Alcobas</Link></li>
            <li><Link href="/catalog/decoracion" className="hover:text-primary-500 hover:underline underline-offset-8 decoration-2 whitespace-nowrap">Decoración</Link></li>
            <li><Link href="/catalog/bebes" className="hover:text-primary-500 hover:underline underline-offset-8 decoration-2 whitespace-nowrap">Bebés</Link></li>
            <li><Link href="/catalog/ofertas" className="text-accent-500 hover:text-[#c44957] font-bold hover:underline underline-offset-8 decoration-2 whitespace-nowrap">Ofertas</Link></li>
          </ul>
        </nav>
      </header>

      {/* Mobile Search Bar (Below Header) */}
      <div className="md:hidden px-4 py-3 bg-white border-b border-neutral-200">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-neutral-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm" 
            placeholder="Buscar..."
          />
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={closeMenu} />
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold text-black">Menú</span>
              <button onClick={closeMenu} className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="flex flex-col space-y-1 px-2">
                <Link href="/catalog" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Dormitorio</Link>
                <Link href="/catalog/salas" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Salas</Link>
                <Link href="/catalog/comedores" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Comedores</Link>
                <Link href="/catalog/alcobas" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Alcobas</Link>
                <Link href="/catalog/decoracion" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Decoración</Link>
                <Link href="/catalog/ofertas" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-bold text-accent-500 hover:bg-red-50">Ofertas Especiales</Link>
              </nav>
            </div>
            <div className="border-t p-4 flex flex-col gap-3 bg-gray-50">
              <Link href="#" onClick={closeMenu} className="flex-1 flex items-center justify-center gap-2 py-3 text-white font-medium rounded-md bg-primary-500 hover:bg-[#114b7e]">
                Vender ahora
              </Link>
              <Link href="/account" onClick={closeMenu} className="flex-1 flex items-center justify-center gap-2 py-3 text-primary-500 font-medium border border-primary-500 rounded-md bg-white hover:bg-blue-50">
                Regístrate | Inicia sesión
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
