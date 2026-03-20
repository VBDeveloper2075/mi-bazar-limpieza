export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: "limpieza" | "bazar";
  isOffer?: boolean;
  originalPrice?: number;
}

export const products: Product[] = [
  // Productos de limpieza
  {
    id: "1",
    title: "Detergente Líquido Multiuso 2L",
    price: 1299,
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop",
    category: "limpieza",
    isOffer: true,
    originalPrice: 1599,
  },
  {
    id: "2",
    title: "Lavandina Concentrada 1L",
    price: 899,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
    category: "limpieza",
  },
  {
    id: "3",
    title: "Esponja Multiuso x6 Unidades",
    price: 599,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "limpieza",
    isOffer: true,
    originalPrice: 799,
  },
  {
    id: "4",
    title: "Limpiador Desengrasante 500ml",
    price: 749,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop",
    category: "limpieza",
  },
  // Productos de bazar
  {
    id: "5",
    title: "Set de Ollas 3 Piezas Acero",
    price: 8990,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "6",
    title: "Jarra de Vidrio 1.5L",
    price: 2490,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop",
    category: "bazar",
    isOffer: true,
    originalPrice: 2990,
  },
  {
    id: "7",
    title: "Set de Cubiertos 24 Piezas",
    price: 5490,
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "8",
    title: "Bowl Cerámico Grande",
    price: 1890,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b0d?w=400&h=400&fit=crop",
    category: "bazar",
  },
];

// Productos exclusivos de Ofertas (8 productos diferentes a la página principal)
export const offerProducts: Product[] = [
  {
    id: "o1",
    title: "Pack Limpieza Hogar 4 Unidades",
    price: 3490,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "limpieza",
    isOffer: true,
    originalPrice: 4590,
  },
  {
    id: "o2",
    title: "Desinfectante Aromático 900ml",
    price: 699,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    category: "limpieza",
    isOffer: true,
    originalPrice: 899,
  },
  {
    id: "o3",
    title: "Trapo de Piso Microfibra x3",
    price: 890,
    image: "https://images.unsplash.com/photo-1569717559372-a87b7b3f012a?w=400&h=400&fit=crop",
    category: "limpieza",
    isOffer: true,
    originalPrice: 1290,
  },
  {
    id: "o4",
    title: "Escurridor de Platos Acero",
    price: 4290,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "bazar",
    isOffer: true,
    originalPrice: 5490,
  },
  {
    id: "o5",
    title: "Set Tuppers Herméticos 6 Piezas",
    price: 2990,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=400&fit=crop",
    category: "bazar",
    isOffer: true,
    originalPrice: 3990,
  },
  {
    id: "o6",
    title: "Tabla de Cocina Bambú Grande",
    price: 2490,
    image: "https://images.unsplash.com/photo-1682530016982-f26417fa9909?w=400&h=400&fit=crop",
    category: "bazar",
    isOffer: true,
    originalPrice: 3290,
  },
  {
    id: "o7",
    title: "Cepillo Limpieza Baño Premium",
    price: 599,
    image: "https://images.unsplash.com/photo-1630325459372-36f3f86281cf?w=400&h=400&fit=crop",
    category: "limpieza",
    isOffer: true,
    originalPrice: 849,
  },
  {
    id: "o8",
    title: "Organizador Cocina 3 Niveles",
    price: 3890,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop",
    category: "bazar",
    isOffer: true,
    originalPrice: 4990,
  },
];
