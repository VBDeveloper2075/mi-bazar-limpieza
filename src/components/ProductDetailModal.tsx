import type { Product } from "@/data/products";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
}

function getDefaultDescription(product: Product) {
  const cat = product.category === "limpieza" ? "limpieza" : "bazar";
  return `${product.title}. Producto de calidad para tu hogar. Ideal para uso doméstico. Consultá por stock y envíos.`;
}

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart?: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
}: ProductDetailModalProps) {
  const description = product.description ?? getDefaultDescription(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(product);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
          aria-label="Cerrar"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-square overflow-hidden bg-zinc-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
          {product.isOffer && (
            <span className="absolute left-4 top-4 rounded-md bg-emerald-500 px-2 py-1 text-sm font-semibold text-white">
              Oferta
            </span>
          )}
        </div>

        <div className="p-6">
          <h2 className="pr-8 text-xl font-bold text-zinc-900">{product.title}</h2>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#0077b6]">
              {formatPrice(product.price)}
            </span>
            {product.isOffer && product.originalPrice && (
              <span className="text-base text-zinc-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold text-zinc-700">Descripción</h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600">
              {description}
            </p>
          </div>

          {onAddToCart && (
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 w-full rounded-lg bg-[#0077b6] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#006699]"
            >
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
