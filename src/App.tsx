import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Home from "@/pages/Home";
import Ofertas from "@/pages/Ofertas";
import Bazar from "@/pages/Bazar";
import Combos from "@/pages/Combos";
import Carrito from "@/pages/Carrito";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/bazar" element={<Bazar />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
