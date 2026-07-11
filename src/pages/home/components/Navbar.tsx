import { useEffect, useState } from 'react';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sabores', label: 'Sabores' },
  { href: '#historia', label: 'Historia' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#visitanos', label: 'Visítanos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur border-b border-background-200/70'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-full bg-primary-500 flex items-center justify-center">
            <i className="ri-cake-3-fill text-2xl text-background-50"></i>
          </div>
          <div className="leading-tight">
            <p
              className={`font-script text-2xl ${
                scrolled ? 'text-primary-600' : 'text-background-50'
              }`}
            >
              Coquitos
            </p>
            <p
              className={`text-[10px] tracking-[0.3em] uppercase ${
                scrolled ? 'text-foreground-600' : 'text-background-50/80'
              }`}
            >
              at Le Lo Lai
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide cursor-pointer transition-colors whitespace-nowrap ${
                scrolled
                  ? 'text-foreground-800 hover:text-primary-600'
                  : 'text-background-50 hover:text-primary-200'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+14079102514"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-500 text-background-50 dark:text-foreground-950 text-sm font-semibold hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-line"></i>
            (407) 910-2514
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-md cursor-pointer ${
            scrolled ? 'text-foreground-950' : 'text-background-50'
          }`}
          aria-label="Menu"
        >
          <i className={`text-2xl ${open ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background-50 border-t border-background-200/70 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground-800 hover:text-primary-600 text-base cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+14079102514"
            className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-500 text-background-50 font-semibold justify-center whitespace-nowrap"
          >
            <i className="ri-phone-line"></i> Llamar ahora
          </a>
        </div>
      )}
    </header>
  );
}