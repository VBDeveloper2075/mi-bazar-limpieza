import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { to: "/", label: "Productos de Limpieza" },
  { to: "/ofertas", label: "Ofertas" },
  { to: "/", label: "Bazar" },
  { to: "/", label: "Combos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0077b6]/10 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-[#0077b6] transition-opacity hover:opacity-90"
        >
          Mi Bazar Limpieza
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-[#0077b6]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/carrito"
              className="relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#0077b6] transition-colors hover:bg-[#0077b6]/5"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/carrito"
            className="relative rounded-lg p-2 text-[#0077b6]"
            aria-label="Carrito"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center gap-1.5 rounded-lg p-2"
            aria-expanded={isOpen}
            aria-label="Abrir menú"
          >
            <span
              className={`block h-0.5 w-6 bg-[#0077b6] transition-all ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0077b6] transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0077b6] transition-all ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-[#0077b6]/10 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-[#0077b6]/5 hover:text-[#0077b6]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/carrito"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-[#0077b6]/5 hover:text-[#0077b6]"
              >
                Carrito {totalItems > 0 && `(${totalItems})`}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
