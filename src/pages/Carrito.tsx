import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/context/CartContext";

type PaymentMethod = "mercadopago" | "transferencia" | null;

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }  ).format(price);
}

function MercadoPagoCheckout({
  items,
  total,
  formatPrice,
  onConfirm,
  onBack,
}: {
  items: CartItem[];
  total: number;
  formatPrice: (p: number) => string;
  onConfirm: () => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-[60vh] rounded-xl border-2 border-zinc-200 bg-white shadow-xl">
      {/* Header estilo Mercado Pago */}
      <div className="rounded-t-xl bg-[#009EE3] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
              <span className="text-xl font-bold text-[#009EE3]">MP</span>
            </div>
            <span className="text-xl font-bold text-white">Mercado Pago</span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-white/90 hover:text-white"
          >
            ← Volver
          </button>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-lg font-semibold text-zinc-800">
          Resumen de tu compra
        </h2>

        <div className="mb-6 space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex items-center gap-3 border-b border-zinc-200 pb-3 last:border-0 last:pb-0"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-12 w-12 rounded object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-800">{product.title}</p>
                <p className="text-xs text-zinc-500">
                  {formatPrice(product.price)} × {quantity}
                </p>
              </div>
              <span className="font-semibold text-zinc-800">
                {formatPrice(product.price * quantity)}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between rounded-lg border-2 border-[#009EE3] bg-[#009EE3]/5 p-4">
          <span className="font-semibold text-zinc-800">Total a pagar</span>
          <span className="text-2xl font-bold text-[#009EE3]">
            {formatPrice(total)}
          </span>
        </div>

        <div className="mb-6 rounded-lg border border-zinc-200 p-4">
          <p className="mb-3 text-sm font-medium text-zinc-700">
            ¿Cómo querés pagar?
          </p>
          <div className="space-y-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-[#009EE3] bg-[#009EE3]/5 p-3">
              <input
                type="radio"
                name="mp-method"
                defaultChecked
                className="h-4 w-4 accent-[#009EE3]"
              />
              <span className="text-sm font-medium">Dinero en cuenta Mercado Pago</span>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-zinc-200 p-3 hover:border-zinc-300">
              <input
                type="radio"
                name="mp-method"
                className="h-4 w-4 accent-[#009EE3]"
              />
              <span className="text-sm font-medium">Tarjeta de crédito o débito</span>
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="w-full rounded-lg bg-[#009EE3] py-4 font-bold text-white transition-colors hover:bg-[#0088c7]"
        >
          Confirmar pago
        </button>

        <p className="mt-4 text-center text-xs text-zinc-500">
          Al confirmar, serás redirigido para completar el pago de forma segura.
        </p>
      </div>
    </div>
  );
}

export default function Carrito() {
  const navigate = useNavigate();
  const { items, removeFromCart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showMercadoPagoCheckout, setShowMercadoPagoCheckout] = useState(false);
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const handlePay = () => {
    if (paymentMethod === "mercadopago") {
      setShowMercadoPagoCheckout(true);
    } else {
      setOrderConfirmed(true);
    }
  };

  const handleConfirmMercadoPago = () => {
    setOrderConfirmed(true);
  };

  const handleSeguirComprando = () => {
    clearCart();
    navigate("/");
  };

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
        ) : showMercadoPagoCheckout ? (
          <MercadoPagoCheckout
            items={items}
            total={total}
            formatPrice={formatPrice}
            onConfirm={handleConfirmMercadoPago}
            onBack={() => setShowMercadoPagoCheckout(false)}
          />
        ) : orderConfirmed ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="text-lg text-emerald-800">
              En unos instantes te enviaremos tu factura de compra y un vendedor se comunicará para acordar la entrega de tu pedido.
            </p>
            <button
              type="button"
              onClick={handleSeguirComprando}
              className="mt-6 inline-block rounded-lg bg-[#0077b6] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#006699]"
            >
              Seguir comprando
            </button>
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

            <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
              <p className="mb-4 text-lg font-semibold text-zinc-900">
                Elegí tu medio de pago
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("mercadopago")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-6 py-4 font-semibold transition-all ${
                    paymentMethod === "mercadopago"
                      ? "border-[#00b1ea] bg-[#00b1ea]/5 text-[#00b1ea]"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Mercado Pago
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("transferencia")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-6 py-4 font-semibold transition-all ${
                    paymentMethod === "transferencia"
                      ? "border-[#0077b6] bg-[#0077b6]/5 text-[#0077b6]"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  Transferencia
                </button>
              </div>

              {paymentMethod === "transferencia" && (
                <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                  <p className="mb-2 font-semibold text-emerald-700">
                    ¡Tienes un descuento del 10%!
                  </p>
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-sm text-zinc-500 line-through">
                      {formatPrice(total)}
                    </span>
                    <span className="text-2xl font-bold text-emerald-600">
                      {formatPrice(Math.round(total * 0.9))}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handlePay}
                    className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white transition-colors hover:bg-emerald-700"
                  >
                    PAGAR
                  </button>
                </div>
              )}

              {paymentMethod === "mercadopago" && (
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handlePay}
                    className="w-full rounded-lg bg-[#00b1ea] px-6 py-3 font-bold text-white transition-colors hover:bg-[#0099cc]"
                  >
                    PAGAR
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
