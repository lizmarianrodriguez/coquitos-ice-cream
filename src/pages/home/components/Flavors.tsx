import { useState } from 'react';
import { flavors, categories, type Cat } from '@/mocks/flavors';

export default function Flavors() {
  const [active, setActive] = useState<Cat>('Todos');

  const filtered = active === 'Todos' ? flavors : flavors.filter((f) => f.category === active);

  return (
    <section id="sabores" className="py-24 md:py-32 bg-background-50" data-product-shop>
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.35em] uppercase text-primary-600 font-semibold">
              Nuestro Menú
            </p>
            <h2 className="mt-4 font-heading text-4xl md:text-6xl text-foreground-950 leading-[1.05]">
              Sabores <em className="font-script text-primary-500 not-italic">tropicales</em> que enamoran
            </h2>
            <p className="mt-6 text-foreground-700 text-base md:text-lg leading-relaxed">
              Desde el clásico coco hasta la exótica acerola, cada bola está hecha con
              fruta fresca y leche entera. Elige tu favorito o pídelos todos.
              Disponible en tamaños S · M · L · XL.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 px-1 py-1 rounded-full bg-background-100 border border-background-200/70 self-start">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  active === c
                    ? 'bg-primary-500 text-background-50'
                    : 'text-foreground-700 hover:text-primary-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((f) => (
            <article
              key={f.id}
              className="group relative rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              data-product-shop
            >
              {f.popular && (
                <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-500 text-background-50 text-[10px] font-bold uppercase tracking-wider">
                  <i className="ri-fire-fill"></i> Popular
                </span>
              )}
              <div className="relative aspect-square overflow-hidden bg-background-200">
                <img
                  src={f.image}
                  alt={f.spanish}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-accent-700 font-bold">
                    {f.category}
                  </span>
                  <span className="text-foreground-950 font-heading text-lg">{f.price}</span>
                </div>
                <h3 className="mt-2 font-heading text-2xl text-foreground-950 leading-tight">
                  {f.spanish}
                </h3>
                <p className="mt-1 text-xs text-foreground-500 italic">{f.name}</p>
                <p className="mt-3 text-sm text-foreground-700 leading-relaxed">{f.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-10 py-8 rounded-lg bg-accent-500 text-background-50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background-50/20 text-2xl">
              <i className="ri-truck-line"></i>
            </div>
            <div>
              <p className="font-heading text-2xl">También llevamos a casa</p>
              <p className="text-sm text-background-100">
                Pide entrega a domicilio en el área de Kissimmee y disfruta desde el sofá.
              </p>
            </div>
          </div>
          <a
            href="tel:+14079102514"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background-50 text-accent-700 font-semibold hover:bg-background-100 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-fill"></i> Ordenar ahora
          </a>
        </div>
      </div>
    </section>
  );
}