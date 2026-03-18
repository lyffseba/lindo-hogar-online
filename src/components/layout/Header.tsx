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
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button 
                className="md:hidden text-gray-500 hover:text-black p-1 -ml-1 rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="text-xl font-bold tracking-tight text-black">
                Lindo Hogar Online
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/catalog" className="text-sm font-medium text-gray-700 hover:text-black">
                Novedades
              </Link>
              <Link href="/catalog/salas" className="text-sm font-medium text-gray-700 hover:text-black">
                Salas
              </Link>
              <Link href="/catalog/comedores" className="text-sm font-medium text-gray-700 hover:text-black">
                Comedores
              </Link>
              <Link href="/catalog/alcobas" className="text-sm font-medium text-gray-700 hover:text-black">
                Alcobas
              </Link>
              <Link href="/catalog/decoracion" className="text-sm font-medium text-gray-700 hover:text-black">
                Decoración
              </Link>
            </nav>

            {/* Actions: Search, Account, Cart */}
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-black hidden sm:block p-1 rounded-md">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/account" className="text-gray-500 hover:text-black hidden sm:block p-1 rounded-md">
                <User className="h-5 w-5" />
              </Link>
              <button 
                className="text-gray-500 hover:text-black relative p-1 rounded-md"
                onClick={() => setIsOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                {mounted && getTotalItems() > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity" 
            onClick={closeMenu} 
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold text-black">Menú</span>
              <button 
                onClick={closeMenu} 
                className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="flex flex-col space-y-1 px-2">
                <Link href="/catalog" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                  Todo el Catálogo
                </Link>
                <Link href="/catalog/salas" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                  Salas
                </Link>
                <Link href="/catalog/comedores" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                  Comedores
                </Link>
                <Link href="/catalog/alcobas" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                  Alcobas
                </Link>
                <Link href="/catalog/decoracion" onClick={closeMenu} className="px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                  Decoración
                </Link>
              </nav>
            </div>

            <div className="border-t p-4 flex gap-4 bg-gray-50">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-700 hover:text-black font-medium border rounded-md bg-white">
                <Search className="h-4 w-4" /> Buscar
              </button>
              <Link href="/account" className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-700 hover:text-black font-medium border rounded-md bg-white">
                <User className="h-4 w-4" /> Cuenta
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
