import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { offerProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Ofertas() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Ofertas
          </h1>
          <p className="mt-2 text-zinc-600">
            Productos con descuento exclusivo. ¡Aprovechá!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {offerProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
