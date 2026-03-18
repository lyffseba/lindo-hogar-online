'use client';

import Link from 'next/link';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';

export default function Header() {
  const { getTotalItems, setIsOpen } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="md:hidden text-gray-500 hover:text-black">
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
            <button className="text-gray-500 hover:text-black hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="text-gray-500 hover:text-black hidden sm:block">
              <User className="h-5 w-5" />
            </Link>
            <button 
              className="text-gray-500 hover:text-black relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {mounted && getTotalItems() > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
