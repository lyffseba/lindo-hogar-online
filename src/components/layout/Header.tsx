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
                <span className="text-2xl md:text-3xl font-black text-[#111111] tracking-tight">Lindo Hogar <span className="text-[#175d9c] font-bold text-lg md:text-xl">Online</span></span>
              </Link>
            </div>

            {/* Search Bar (Middle) */}
            <div className="flex-1 max-w-2xl hidden md:flex ml-4 lg:ml-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-full leading-5 bg-[#f2f2f2] text-neutral-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 sm:text-sm transition-all duration-300" 
                  placeholder="Buscar artículos para el hogar..."
                />
              </div>
            </div>

            {/* Actions: Auth, Sell Button & Cart */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Link href="/account" className="hidden lg:inline-block text-sm font-bold text-[#111111] hover:text-[#175d9c] px-3 py-2 transition-colors">
                Regístrate | Inicia sesión
              </Link>
              <Link href="#" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border-2 border-[#111111] text-sm font-bold rounded-full text-[#111111] bg-white hover:bg-[#111111] hover:text-white transition-all shadow-sm whitespace-nowrap">
                Vender ahora
              </Link>
              
              <Link href="/account" className="text-gray-500 hover:text-black md:hidden p-1 rounded-md">
                <User className="h-5 w-5" />
              </Link>
              
              <button 
                className="text-gray-500 hover:text-black relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag className="h-6 w-6" />
                {mounted && getTotalItems() > 0 && (
                  <span className="absolute 0 top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#e25d6b] text-[10px] font-bold text-white shadow-sm border-2 border-white">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Secondary Nav (Categories) */}
        <nav className="hidden md:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ul className="flex space-x-8 lg:space-x-10 text-sm font-bold text-gray-500 py-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              <li><Link href="/catalog" className="hover:text-[#111111] hover:underline underline-offset-[16px] decoration-2 whitespace-nowrap transition-colors">Dormitorio</Link></li>
              <li><Link href="/catalog/salas" className="hover:text-[#111111] hover:underline underline-offset-[16px] decoration-2 whitespace-nowrap transition-colors">Salas</Link></li>
              <li><Link href="/catalog/comedores" className="hover:text-[#111111] hover:underline underline-offset-[16px] decoration-2 whitespace-nowrap transition-colors">Comedores</Link></li>
              <li><Link href="/catalog/alcobas" className="hover:text-[#111111] hover:underline underline-offset-[16px] decoration-2 whitespace-nowrap transition-colors">Alcobas</Link></li>
              <li><Link href="/catalog/decoracion" className="hover:text-[#111111] hover:underline underline-offset-[16px] decoration-2 whitespace-nowrap transition-colors">Decoración</Link></li>
              <li><Link href="/catalog/bebes" className="hover:text-[#111111] hover:underline underline-offset-[16px] decoration-2 whitespace-nowrap transition-colors">Bebés</Link></li>
              <li><Link href="/catalog/ofertas" className="text-[#e25d6b] hover:text-[#c44957] hover:underline underline-offset-[16px] decoration-2 whitespace-nowrap transition-colors">Ofertas</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Search Bar (Below Header) */}
      <div className="md:hidden px-4 py-3 bg-white border-b border-neutral-200 shadow-sm">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="block w-full pl-11 pr-4 py-3 border border-transparent rounded-full leading-5 bg-[#f2f2f2] placeholder-gray-500 focus:outline-none focus:bg-white focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 sm:text-base font-medium" 
            placeholder="Buscar..."
          />
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-sm" onClick={closeMenu} />
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b">
              <span className="text-xl font-black text-black tracking-tight">Lindo Hogar</span>
              <button onClick={closeMenu} className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-6">
              <nav className="flex flex-col space-y-2 px-4">
                <Link href="/catalog" onClick={closeMenu} className="px-4 py-3 rounded-xl text-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors">Dormitorio</Link>
                <Link href="/catalog/salas" onClick={closeMenu} className="px-4 py-3 rounded-xl text-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors">Salas</Link>
                <Link href="/catalog/comedores" onClick={closeMenu} className="px-4 py-3 rounded-xl text-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors">Comedores</Link>
                <Link href="/catalog/alcobas" onClick={closeMenu} className="px-4 py-3 rounded-xl text-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors">Alcobas</Link>
                <Link href="/catalog/decoracion" onClick={closeMenu} className="px-4 py-3 rounded-xl text-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors">Decoración</Link>
                <Link href="/catalog/ofertas" onClick={closeMenu} className="px-4 py-3 rounded-xl text-lg font-black text-[#e25d6b] hover:bg-red-50 transition-colors">Ofertas Especiales</Link>
              </nav>
            </div>
            <div className="border-t p-6 flex flex-col gap-4 bg-gray-50">
              <Link href="#" onClick={closeMenu} className="flex items-center justify-center py-4 text-white font-bold text-lg rounded-full bg-[#111111] hover:bg-black transition-colors shadow-md">
                Vender ahora
              </Link>
              <Link href="/account" onClick={closeMenu} className="flex items-center justify-center py-4 text-[#111111] font-bold text-lg border-2 border-[#111111] rounded-full bg-transparent hover:bg-gray-100 transition-colors">
                Regístrate | Inicia sesión
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
