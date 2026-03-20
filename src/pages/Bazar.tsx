import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { bazarProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Bazar() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Bazar
          </h1>
          <p className="mt-2 text-zinc-600">
            Todo para equipar tu cocina y hogar
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {bazarProducts.map((product) => (
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
