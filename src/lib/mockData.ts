export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  imageUrl: string;
  isNew?: boolean;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sala Esquinera Mónaco',
    description: 'Sala en L tapizada en microfibra antifluido, perfecta para reuniones familiares con un diseño moderno.',
    price: 1250000,
    originalPrice: 1500000,
    category: 'Salas',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: '2',
    name: 'Comedor Roble 6 Puestos',
    description: 'Comedor fabricado en madera de roble con sillas tapizadas. Diseño clásico que no pasa de moda.',
    price: 1800000,
    category: 'Comedores',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1c0945594?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Alcoba Doble París (Cama + Nocheros)',
    description: 'Elegante juego de alcoba doble con cabecero capitoneado y dos nocheros a juego.',
    price: 1450000,
    originalPrice: 1650000,
    category: 'Alcobas',
    imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Lámpara de Pie Nórdica',
    description: 'Lámpara de pie con detalles en madera, ideal para iluminar salas y estudios con luz cálida.',
    price: 120000,
    category: 'Decoración',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Sofá Cama 3 Puestos',
    description: 'Sofá cama funcional y cómodo, ideal para aprovechar los espacios en apartamentos modernos.',
    price: 890000,
    category: 'Salas',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Silla de Comedor Windsor',
    description: 'Silla de comedor individual en madera curvada. Añade un toque vintage a tu hogar.',
    price: 150000,
    category: 'Comedores',
    imageUrl: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '7',
    name: 'Colchón Ortopédico Doble',
    description: 'Colchón ortopédico de resortes para un descanso reparador y un excelente soporte para la espalda.',
    price: 650000,
    category: 'Alcobas',
    imageUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: '8',
    name: 'Set de Decoración Boho Chic',
    description: 'Conjunto de tres piezas de cerámica artesanal para decorar centros de mesa o repisas.',
    price: 85000,
    category: 'Decoración',
    imageUrl: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=800',
  }
];
