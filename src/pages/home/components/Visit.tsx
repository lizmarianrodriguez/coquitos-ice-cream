const hours = [
  { day: 'Lunes', open: '11:00 a.m. – 7:00 p.m.' },
  { day: 'Martes', open: '11:00 a.m. – 7:00 p.m.' },
  { day: 'Miércoles', open: '11:00 a.m. – 7:00 p.m.', today: true },
  { day: 'Jueves', open: '11:00 a.m. – 7:00 p.m.' },
  { day: 'Viernes', open: '11:00 a.m. – 8:00 p.m.' },
  { day: 'Sábado', open: '11:00 a.m. – 8:00 p.m.' },
  { day: 'Domingo', open: '12:00 p.m. – 6:00 p.m.' },
];

export default function Visit() {
  return (
    <section id="visitanos" className="py-24 md:py-32 bg-background-50">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.35em] uppercase text-primary-600 font-semibold">
              Visítanos
            </p>
            <h2 className="mt-4 font-heading text-4xl md:text-6xl text-foreground-950 leading-[1.05]">
              Ven a probar los sabores del <em className="font-script text-primary-500 not-italic">Caribe</em>
            </h2>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-semibold w-fit">
            <span className="w-2 h-2 rounded-full bg-accent-600 animate-pulse"></span>
            Abierto ahora · Cierra a las 7 p.m.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-lg overflow-hidden border border-background-200/70 min-h-[420px]">
            <iframe
              title="Ubicación Coquitos Ice Cream at Le Lo Lai"
              src="https://www.google.com/maps?q=1327+E+Vine+St,+Kissimmee,+FL+34744&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-lg bg-background-100 border border-background-200/70 p-6 md:p-8">
              <h3 className="font-heading text-2xl text-foreground-950">Dirección</h3>
              <p className="mt-3 text-foreground-700 leading-relaxed">
                1327 E Vine St<br />
                Kissimmee, FL 34744<br />
                <span className="text-sm text-foreground-500">Ubicado en Kissimmee Square</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/FtdBeMoZdtyLWhcK6"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-background-50 dark:text-foreground-950 text-sm font-semibold hover:bg-primary-600 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-navigation-fill"></i> Cómo llegar
                </a>
                <a
                  href="tel:+14079102514"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-background-300 text-foreground-800 text-sm font-semibold hover:bg-background-200/60 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-fill"></i> (407) 910-2514
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-background-100 border border-background-200/70 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl text-foreground-950">Horarios</h3>
                <span className="text-xs tracking-widest uppercase text-foreground-500">Semana</span>
              </div>
              <ul className="mt-4 divide-y divide-background-200/70">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-2.5 text-sm ${
                      h.today ? 'font-bold text-primary-700' : 'text-foreground-800'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {h.today && <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>}
                      {h.day}
                    </span>
                    <span>{h.open}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}