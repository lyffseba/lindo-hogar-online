"use client";

import Link from 'next/link';
import { FeaturedRotation } from '@/components/ui/FeaturedRotation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // If we have our PageLoader running, wait for it.
    // PageLoader takes ~2.8s + 1.2s exit. So we delay our hero animations by around 3.2s
    const isFirstLoad = !sessionStorage.getItem("lho-hero-loaded");
    
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setHasLoaded(true);
        sessionStorage.setItem("lho-hero-loaded", "true");
      }, 3200);
      return () => clearTimeout(timer);
    } else {
      setHasLoaded(true);
    }
  }, []);

  return (
    <div className="bg-white font-sans text-[#111111] min-h-screen">
      
      {/* HERO SECTION - AWWWARDS ACADEMY STYLE */}
      <div className="relative w-full overflow-hidden bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-28 lg:py-36">
          <div className="flex flex-col max-w-4xl">
            {/* Staggered Typography Animation (Kokuyo style) */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#111111] mb-8 leading-[0.9]">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "120%", rotate: 2 }}
                  animate={hasLoaded ? { y: 0, rotate: 0 } : { y: "120%", rotate: 2 }}
                  transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: hasLoaded ? 0.1 : 0 }}
                >
                  ¿Es hora de
                </motion.div>
              </div>
              <div className="overflow-hidden pb-4">
                <motion.div
                  initial={{ y: "120%", rotate: 2 }}
                  animate={hasLoaded ? { y: 0, rotate: 0 } : { y: "120%", rotate: 2 }}
                  transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: hasLoaded ? 0.3 : 0 }}
                >
                  renovar <span className="text-[#175d9c]">tu hogar?</span>
                </motion.div>
              </div>
            </h1>
            
            <div className="overflow-hidden">
              <motion.p 
                initial={{ y: "100%", opacity: 0 }}
                animate={hasLoaded ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: hasLoaded ? 0.6 : 0 }}
                className="text-xl md:text-2xl text-gray-500 font-medium mb-12 max-w-2xl leading-relaxed"
              >
                Descubre las piezas más exclusivas, seleccionadas especialmente para dar vida y confort a cada uno de tus espacios.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={hasLoaded ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: hasLoaded ? 0.8 : 0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/catalog" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-[#175d9c] hover:bg-[#114b7e] transition-all shadow-md hover:shadow-xl w-full sm:w-auto"
              >
                Explorar Catálogo
              </Link>
              <Link 
                href="/catalog/ofertas" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-black rounded-full text-[#e25d6b] bg-red-50 hover:bg-red-100 transition-all w-full sm:w-auto"
              >
                Ver Ofertas 🔥
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT: PRODUCT GRID */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: hasLoaded ? 1 : 0 }}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24"
      >
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b border-gray-200 pb-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight">Novedades <br className="hidden md:block"/><span className="text-gray-400">para ti</span></h2>
          <Link href="/catalog" className="text-lg font-bold text-[#175d9c] hover:text-[#111111] hover:underline underline-offset-8 transition-all mt-4 md:mt-0 flex items-center gap-2 group">
            Ver todo el catálogo
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
        
        <FeaturedRotation />

        {/* Category Pills / Circles - Awwwards Style (Bigger, bolder) */}
        <div className="mt-24 md:mt-32 border-t border-gray-200 pt-16 md:pt-24">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight">Comprar <br className="hidden md:block"/><span className="text-gray-400">por categoría</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            
            <Link href="/catalog/dormitorio" className="flex flex-col group">
              <div className="aspect-square rounded-3xl bg-[#f2f2f2] flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-[#175d9c] transition-all overflow-hidden relative shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                 <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🛏️</span>
              </div>
              <span className="text-xl font-black text-[#111111]">Dormitorio</span>
              <span className="text-sm font-medium text-gray-500 mt-1">Descanso ideal</span>
            </Link>

            <Link href="/catalog/comedores" className="flex flex-col group">
              <div className="aspect-square rounded-3xl bg-[#f2f2f2] flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-[#175d9c] transition-all overflow-hidden relative shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                 <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🍽️</span>
              </div>
              <span className="text-xl font-black text-[#111111]">Cocina</span>
              <span className="text-sm font-medium text-gray-500 mt-1">Sabor y familia</span>
            </Link>

            <Link href="/catalog/salas" className="flex flex-col group">
              <div className="aspect-square rounded-3xl bg-[#f2f2f2] flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-[#175d9c] transition-all overflow-hidden relative shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                 <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🛋️</span>
              </div>
              <span className="text-xl font-black text-[#111111]">Salas</span>
              <span className="text-sm font-medium text-gray-500 mt-1">Tu espacio social</span>
            </Link>

            <Link href="/catalog/decoracion" className="flex flex-col group">
              <div className="aspect-square rounded-3xl bg-[#f2f2f2] flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-[#175d9c] transition-all overflow-hidden relative shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                 <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🖼️</span>
              </div>
              <span className="text-xl font-black text-[#111111]">Decoración</span>
              <span className="text-sm font-medium text-gray-500 mt-1">Detalles únicos</span>
            </Link>

            <Link href="/catalog/bebes" className="flex flex-col group">
              <div className="aspect-square rounded-3xl bg-[#f2f2f2] flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-[#175d9c] transition-all overflow-hidden relative shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                 <span className="text-6xl group-hover:scale-110 transition-transform duration-500">👶</span>
              </div>
              <span className="text-xl font-black text-[#111111]">Bebés</span>
              <span className="text-sm font-medium text-gray-500 mt-1">Para los más peques</span>
            </Link>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
