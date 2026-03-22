'use client';

import { useState, useEffect } from 'react';
import { ProductGrid } from './ProductGrid';
import type { Product } from '@/lib/mockData';
import { MOCK_PRODUCTS } from '@/lib/mockData';

export function FeaturedRotation() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Smart rotation logic: 
    // We shuffle the products but ensure we mix high-value items, new items, and regular items.
    // For a simple smart rotation, we'll randomize and take the first 6 every time the user visits the home page.
    const shuffled = [...MOCK_PRODUCTS].sort(() => 0.5 - Math.random());
    const timer = setTimeout(() => setProducts(shuffled.slice(0, 6)), 50);
    return () => clearTimeout(timer);
  }, []);

  // During SSR/initial hydration, we can render 6 default products to avoid hydration mismatch
  if (products.length === 0) {
    return <ProductGrid products={MOCK_PRODUCTS.slice(0, 6)} />;
  }

  return <ProductGrid products={products} />;
}
