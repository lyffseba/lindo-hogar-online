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

// Data based on actual Almacenes Lindo Hogar catalog and prices
export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Filtro de Agua 14 Lt Lemman',
    description: 'Filtro purificador de agua por gravedad, capacidad de 14 litros. Ideal para mantener el agua limpia y fresca en tu cocina.',
    price: 145950,
    category: 'Cocina',
    imageUrl: '/images/products/lho-filtro-agua.png',
    isNew: true,
  },
  {
    id: '2',
    name: 'Sábana Doble Natural Chanubs - Gris',
    description: 'Sábana doble de alta calidad en tono gris natural, suave al tacto y duradera para un descanso perfecto.',
    price: 85950,
    originalPrice: 99950,
    category: 'Alcobas',
    imageUrl: '/images/products/lho-sabanas-grises.png',
  },
  {
    id: '3',
    name: 'Batería de Ollas 12 Piezas CJ-8788',
    description: 'Set completo de 12 piezas de ollas en acero inoxidable con tapas de vidrio templado. Resistencia y elegancia para tu cocina.',
    price: 439950,
    originalPrice: 489950,
    category: 'Cocina',
    imageUrl: '/images/products/lho-ollas.png',
  },
  {
    id: '4',
    name: 'Freidora Digital Aire Oster Ref.Ckstaf18d',
    description: 'Freidora de aire digital Oster, cocina saludable sin aceite. Panel táctil y capacidad ideal para la familia.',
    price: 279950,
    category: 'Electrodomésticos',
    imageUrl: '/images/products/lho-freidora.png',
  },
  {
    id: '5',
    name: 'Coche Paseador Baby BOOGY',
    description: 'Coche paseador práctico y liviano para bebé, con capota expandible y múltiples posiciones de reclinado.',
    price: 559950,
    originalPrice: 629950,
    category: 'Bebés',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Humificador Flannel Style',
    description: 'Humidificador con diseño estilo flannel, ideal para purificar el ambiente y usar con esencias aromáticas.',
    price: 129950,
    category: 'Decoración',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: '7',
    name: 'Vajilla 4 Puestos Corona Red 16 pc Mystic',
    description: 'Vajilla Corona de 16 piezas para 4 puestos. Diseño Mystic Red elegante para tus comidas especiales.',
    price: 149950,
    category: 'Comedores',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '8',
    name: 'Corral Princesa Special – Fucsia',
    description: 'Corral cuna para bebé niña en color fucsia, diseño princesa. Cómodo, seguro y fácil de armar.',
    price: 229950,
    category: 'Bebés',
    imageUrl: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '9',
    name: 'Licuadora Universal Ultra Ref. L62070',
    description: 'Licuadora Universal de alta potencia con vaso de vidrio y cuchillas de acero inoxidable. Excelente rendimiento.',
    price: 279950,
    originalPrice: 320950,
    category: 'Electrodomésticos',
    imageUrl: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '10',
    name: 'Mesa De Planchar Prodehogar',
    description: 'Mesa de planchar plegable y resistente, con base para la plancha y altura ajustable.',
    price: 159950,
    category: 'Lavandería',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
  }
];
