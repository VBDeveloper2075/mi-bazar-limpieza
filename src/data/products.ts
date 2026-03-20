export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: "limpieza" | "bazar";
  isOffer?: boolean;
  originalPrice?: number;
}

// Productos de limpieza (página Productos de Limpieza e Inicio)
export const products: Product[] = [
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
];

// Productos exclusivos de Bazar (diferentes a Ofertas, Combos y Productos de Limpieza)
export const bazarProducts: Product[] = [
  {
    id: "b1",
    title: "Tazas de Café x4",
    price: 3490,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b2",
    title: "Colador de Fideos Acero",
    price: 1890,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b3",
    title: "Platos de Cerámica Set 6 Piezas",
    price: 5990,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b0d?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b4",
    title: "Sartén de Cocina Antiadherente",
    price: 4290,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b5",
    title: "Copas de Vino Set 4 Piezas",
    price: 4490,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b6",
    title: "Panera de Madera",
    price: 2790,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b7",
    title: "Set de Cubiertos Elegantes 24 Piezas",
    price: 6990,
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b8",
    title: "Pava para Calentar Agua",
    price: 3290,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
    category: "bazar",
  },
  {
    id: "b9",
    title: "Cafetera Eléctrica",
    price: 8990,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
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
