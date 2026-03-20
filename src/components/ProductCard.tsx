import type { Product } from "@/data/products";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart?.(product);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative block aspect-square overflow-hidden bg-zinc-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isOffer && (
          <span className="absolute left-2 top-2 rounded-md bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-white">
            Oferta
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-zinc-800">
          {product.title}
        </h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-[#0077b6]">
            {formatPrice(product.price)}
          </span>
          {product.isOffer && product.originalPrice && (
            <span className="text-sm text-zinc-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleBuy}
          className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#0077b6] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#006699]"
        >
          Comprar
        </button>
      </div>
    </article>
  );
}
