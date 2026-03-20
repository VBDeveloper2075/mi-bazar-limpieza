import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

const slides = [
  {
    title: "Productos de limpieza para tu hogar",
    subtitle: "Calidad y precios que cuidan tu bolsillo",
    cta: "Ver productos",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1920&h=600&fit=crop",
  },
  {
    title: "Ofertas imperdibles",
    subtitle: "Hasta 30% off en productos seleccionados",
    cta: "Ver ofertas",
    href: "/ofertas",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
  },
  {
    title: "Bazar para tu cocina",
    subtitle: "Todo lo que necesitas para equipar tu hogar",
    cta: "Explorar bazar",
    href: "/bazar",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden" aria-label="Banner principal">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-[0_0_100%]"
            >
              <div className="relative h-[280px] w-full sm:h-[360px] md:h-[420px] lg:h-[480px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-[#0077b6]/60" />
                <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
                  <h2 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 max-w-md text-base opacity-95 sm:text-lg md:text-xl">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.href}
                    className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0077b6] shadow-lg transition-all hover:bg-zinc-50 hover:shadow-xl"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#0077b6] shadow-md transition hover:bg-white"
        aria-label="Anterior"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#0077b6] shadow-md transition hover:bg-white"
        aria-label="Siguiente"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
