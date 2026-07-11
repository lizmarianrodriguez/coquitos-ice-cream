export default function Footer() {
  return (
    <footer className="bg-accent-900 text-background-100">
      <div className="mx-auto max-w-7xl px-4 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary-500 flex items-center justify-center">
                <i className="ri-cake-3-fill text-2xl text-background-50"></i>
              </div>
              <div>
                <p className="font-script text-3xl text-background-50">Coquitos</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-background-100/70">
                  at Le Lo Lai
                </p>
              </div>
            </div>
            <p className="mt-6 text-background-100/80 leading-relaxed max-w-md">
              Heladería tropical familiar en Kissimmee, Florida. Mantecados, limbers y
              piraguas artesanales con recetas puertorriqueñas auténticas.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {['ri-facebook-fill', 'ri-instagram-line', 'ri-google-fill', 'ri-tiktok-fill'].map(
                (icn) => (
                  <a
                    key={icn}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-background-50/10 hover:bg-primary-500 hover:text-background-50 transition-colors cursor-pointer"
                  >
                    <i className={icn}></i>
                  </a>
                )
              )}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-background-50 font-semibold text-sm tracking-wider uppercase">
              Explora
            </h4>
            <div className="mt-3 h-px bg-background-50/10"></div>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#sabores', label: 'Menú de Sabores' },
                { href: '#historia', label: 'Nuestra Historia' },
                { href: '#opiniones', label: 'Opiniones' },
                { href: '#visitanos', label: 'Visítanos' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-primary-300 text-background-100/80 cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-background-50 font-semibold text-sm tracking-wider uppercase">
              Contacto
            </h4>
            <div className="mt-3 h-px bg-background-50/10"></div>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-background-50/10 text-primary-300">
                  <i className="ri-map-pin-2-fill"></i>
                </span>
                <span className="text-background-100/85">
                  1327 E Vine St<br />Kissimmee, FL 34744
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-background-50/10 text-primary-300">
                  <i className="ri-phone-fill"></i>
                </span>
                <a href="tel:+14079102514" className="text-background-100/85 hover:text-primary-300 cursor-pointer">
                  (407) 910-2514
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-background-50/10 text-primary-300">
                  <i className="ri-time-fill"></i>
                </span>
                <span className="text-background-100/85">
                  Lun – Dom · 11 a.m. – 7 p.m.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background-100/60">
            © {new Date().getFullYear()} Coquitos Ice Cream at Le Lo Lai. Todos los derechos reservados.
          </p>
          <p className="text-xs text-background-100/60">
            Hecho con <span className="text-primary-400">♥</span> en Kissimmee, FL
          </p>
        </div>
      </div>
    </footer>
  );
}