"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Only show the big loader on the home page initially
    if (pathname !== "/") {
      setIsLoading(false);
      return;
    }
    
    // Check if we already loaded in this session to avoid annoyance
    const hasLoaded = sessionStorage.getItem("lho-loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Simulate loading time for the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("lho-loaded", "true");
    }, 2800); // Give enough time for the intro typography sequence

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100vh",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111] text-white overflow-hidden pointer-events-none"
        >
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay"></div>

          <div className="flex flex-col items-center justify-center relative z-10 w-full px-4 sm:px-12 text-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                className="text-5xl md:text-8xl lg:text-[11vw] font-black tracking-tighter uppercase leading-none text-[#f2f2f2]"
              >
                Lindo Hogar
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mt-2 md:mt-4">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                className="text-sm md:text-xl lg:text-2xl font-medium tracking-widest text-gray-400 uppercase"
              >
                Tu espacio, tu estilo.
              </motion.p>
            </div>

            {/* Progress Bar / Line Animation */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.6 }}
              className="mt-12 h-[2px] bg-white origin-left w-full max-w-[200px] md:max-w-[400px]"
            />
          </div>

          {/* Background expanding reveal effect (like the liquid/scale mask) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ 
              scale: 5, 
              opacity: 0, 
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
            }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 1.6 }}
            className="absolute z-0 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full bg-white opacity-5 mix-blend-overlay pointer-events-none blur-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
