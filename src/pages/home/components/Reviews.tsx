const reviews = [
  {
    name: 'Ana Rivas',
    role: 'Local Guide · 98 opiniones',
    date: 'Hace 3 semanas',
    text: 'Amazing coffee. Delicioso. También probé su sándwich de Mallorca. Volveré por más y por probar los mantecados.',
    stars: 5,
    color: 'primary',
  },
  {
    name: 'Carmen Ivette Ramos',
    role: 'Local Guide · 28 opiniones',
    date: 'Hace 9 años',
    text: 'Los dueños súper amables. Te hacen sentir en familia y a gusto. Los mantecados riquísimos. Los recomiendo 100%.',
    stars: 5,
    color: 'accent',
  },
  {
    name: 'Naomi P.',
    role: '3 opiniones',
    date: 'Hace 2 años',
    text: 'Servicio impresionante, excelentes postres helados. Limbers, piraguas, mantecados de coco, acerola y parcha súper buenos y precio razonable.',
    stars: 5,
    color: 'secondary',
  },
  {
    name: 'Luis M.',
    role: 'Cliente frecuente',
    date: 'Hace 1 mes',
    text: 'Mucha variedad de sabores. La parcha es mi favorito. Volveremos sin duda.',
    stars: 5,
    color: 'primary',
  },
  {
    name: 'Jessica O.',
    role: 'Turista de Orlando',
    date: 'Hace 6 meses',
    text: 'Excelente lugar, buen ambiente y el trato es excelente. Los limbers me recordaron a la isla.',
    stars: 5,
    color: 'accent',
  },
  {
    name: 'Roberto C.',
    role: 'Local',
    date: 'Hace 2 meses',
    text: 'Excelente servicio y los helados son ricos. Lo mejor de Kissimmee para postres tropicales.',
    stars: 4,
    color: 'secondary',
  },
] as const;

const chipColorMap: Record<'primary' | 'accent' | 'secondary', string> = {
  primary: 'bg-primary-100 text-primary-800',
  accent: 'bg-accent-100 text-accent-800',
  secondary: 'bg-secondary-100 text-secondary-800',
};

export default function Reviews() {
  return (
    <section id="opiniones" className="py-24 md:py-32 bg-background-100">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-primary-600 font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary-500"></span>
            Opiniones
          </div>
          <h2 className="mt-4 font-heading text-4xl md:text-6xl text-foreground-950 leading-[1.05]">
            La familia Coquitos <em className="font-script text-primary-500 not-italic">habla</em>
          </h2>
          <p className="mt-6 text-foreground-700 text-base md:text-lg">
            Más de 273 opiniones y una calificación de 4.6 estrellas en Google. Estos son
            algunos de nuestros clientes felices.
          </p>

          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-background-50 border border-background-200/70">
            <div className="flex text-primary-500 text-lg">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <p className="font-heading text-xl text-foreground-950">4.6</p>
            <span className="w-px h-5 bg-background-300"></span>
            <p className="text-sm text-foreground-700">273 reseñas verificadas</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="rounded-lg bg-background-50 p-6 md:p-8 border border-background-200/70 flex flex-col gap-5 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-primary-500 gap-0.5">
                  {Array.from({ length: r.stars }).map((_, k) => (
                    <i key={k} className="ri-star-fill"></i>
                  ))}
                  {Array.from({ length: 5 - r.stars }).map((_, k) => (
                    <i key={`e${k}`} className="ri-star-line text-background-300"></i>
                  ))}
                </div>
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-background-100 text-foreground-500 text-xs">
                  <i className="ri-double-quotes-l"></i>
                </span>
              </div>
              <p className="text-foreground-800 leading-relaxed">"{r.text}"</p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-background-200/70">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-heading text-lg ${chipColorMap[r.color]}`}
                >
                  {r.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground-950 text-sm truncate">{r.name}</p>
                  <p className="text-xs text-foreground-500 truncate">{r.role} · {r.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}