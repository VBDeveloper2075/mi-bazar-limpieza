import Navbar from "@/components/Navbar";

export default function Combos() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Combos
          </h1>
          <p className="mt-2 text-zinc-600">
            Próximamente: combos con los mejores precios
          </p>
        </div>
      </main>
    </div>
  );
}
