import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function Carrito() {
  const { items, removeFromCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold text-zinc-900">Carrito</h1>

        {items.length === 0 ? (
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-12 text-center">
            <p className="text-zinc-600">Tu carrito está vacío.</p>
            <Link
              to="/"
              className="mt-4 inline-block rounded-lg bg-[#0077b6] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#006699]"
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-zinc-800">{product.title}</h3>
                  <p className="text-sm text-zinc-500">
                    {formatPrice(product.price)} × {quantity}
                  </p>
                </div>
                <span className="font-bold text-[#0077b6]">
                  {formatPrice(product.price * quantity)}
                </span>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                  className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-600"
                  aria-label="Quitar del carrito"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}

            <div className="mt-8 flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-6">
              <span className="text-lg font-bold text-zinc-900">Total</span>
              <span className="text-2xl font-bold text-[#0077b6]">
                {formatPrice(total)}
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
