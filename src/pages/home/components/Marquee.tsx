const words = [
  'Coco Fresco',
  'Parcha',
  'Acerola',
  'Mango',
  'Guanábana',
  'Almendra',
  'Maiz',
  'Pina Colada',
  'Pistachio',
  'Nutella',
  'Limber',
  'Piragua',
  'Hecho en Kissimmee',
];

export default function Marquee() {
  const loop = [...words, ...words];
  return (
    <div className="bg-primary-500 border-y border-primary-600 overflow-hidden">
      <div className="flex gap-14 py-5 whitespace-nowrap animate-marquee">
        {loop.map((w, i) => (
          <div key={i} className="flex items-center gap-14 text-background-50">
            <span className="font-heading italic text-2xl md:text-3xl">{w}</span>
            <span className="w-2 h-2 rounded-full bg-background-50/70"></span>
          </div>
        ))}
      </div>
    </div>
  );
}