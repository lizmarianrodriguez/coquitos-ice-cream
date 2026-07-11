export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[840px] w-full overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Vibrant%20tropical%20paradise%20scene%20with%20fresh%20coconuts%2C%20passion%20fruit%2C%20acerola%20berries%20and%20mango%20arranged%20artistically%20on%20warm%20sand%20colored%20background%20with%20green%20palm%20leaves%2C%20soft%20golden%20afternoon%20light%2C%20editorial%20food%20photography%2C%20warm%20coral%20and%20emerald%20tones%2C%20artistic%20stylized%20composition%20with%20subtle%20watercolor%20texture%2C%20lush%20and%20dreamy%20atmosphere%2C%20high%20quality%20detailed&width=2000&height=1200&seq=hero-coquitos-lelolai-01&orientation=landscape"
        alt="Coquitos Ice Cream sabores tropicales"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/45 via-foreground-950/30 to-foreground-950/60"></div>
      <div className="absolute inset-0 tropical-noise opacity-40"></div>

      {/* floating coconut badge */}
      <div className="hidden lg:flex absolute top-32 right-16 z-10 animate-floaty">
        <div className="w-40 h-40 rounded-full bg-background-50/95 backdrop-blur flex items-center justify-center text-center p-4">
          <div>
            <p className="font-script text-primary-600 text-3xl leading-none">4.6</p>
            <div className="flex justify-center gap-0.5 my-1 text-primary-500 text-sm">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground-700 font-semibold">
              273 opiniones
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-10 pt-40 md:pt-48 pb-24 text-center flex flex-col items-center w-full">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-50/15 border border-background-50/30 backdrop-blur text-background-50 text-xs tracking-[0.3em] uppercase font-medium">
          <i className="ri-map-pin-2-fill text-primary-300"></i>
          Kissimmee · Florida · Desde 1986
        </span>

        <h1 className="mt-8 font-heading text-background-50 text-5xl md:text-7xl lg:text-[92px] leading-[0.95] font-medium max-w-5xl">
          El sabor del <em className="not-italic font-script text-primary-300">trópico</em>
          <br />
          hecho helado
        </h1>

        <p className="mt-8 max-w-2xl text-background-100 text-base md:text-lg leading-relaxed font-light">
          Mantecados artesanales de coco, parcha y acerola. Limbers y piraguas
          preparadas con recetas familiares que hacen sentir a cada visitante
          como en casa. Un rinconcito puertorriqueño en el corazón de Kissimmee.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#sabores"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-500 text-background-50 dark:text-foreground-950 font-semibold hover:bg-primary-600 transition-all whitespace-nowrap cursor-pointer"
          >
            Ver el menú
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-background-50/20 group-hover:translate-x-1 transition-transform">
              <i className="ri-arrow-right-line"></i>
            </span>
          </a>
          <a
            href="https://maps.app.goo.gl/FtdBeMoZdtyLWhcK6"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-background-50/40 text-background-50 font-semibold hover:bg-background-50/10 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-navigation-line"></i>
            Cómo llegar
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
          {[
            { icon: 'ri-store-2-line', label: 'Consumo en el lugar' },
            { icon: 'ri-shopping-bag-3-line', label: 'Para llevar' },
            { icon: 'ri-e-bike-2-line', label: 'Entrega a domicilio' },
            { icon: 'ri-heart-line', label: 'Recetas familiares' },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2 px-3 py-4 rounded-lg bg-background-50/10 border border-background-50/15 backdrop-blur"
            >
              <div className="w-9 h-9 flex items-center justify-center text-primary-300 text-xl">
                <i className={f.icon}></i>
              </div>
              <p className="text-background-50 text-xs md:text-sm font-medium text-center">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-background-50/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-background-50/40"></div>
      </div>
    </section>
  );
}